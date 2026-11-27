# ABCMed image integration — admin guide

POC only. This is not a production runbook.

Audience: Rajeev Kasat (product manager / software engineer), or another admin keeping this proof working and diagnosing a broken storefront image.

Written 27 Nov 2026 from four read-only notes, then updated the same morning with the apply result. The notes through 7:35 AM ET are the dry run. The apply result is in `run-20261127-072540/created.json`, finished 7:56 AM ET. Where a step is still missing, this guide says it is not established.

Sources:

- `review/middleware.md` (25 Nov 2026, about 10:35 PM ET)
- `review/cms-map.md` (25 Nov 2026, about 10:00–10:15 PM ET)
- `review/integration-health-20261126.md` (26 Nov 2026, about 3:14–3:25 PM ET)
- `run-20261127-072540/dryrun.md` (27 Nov 2026, about 7:25–7:35 AM ET)

## What this is

This integration is middleware. A small Node.js HTTP service on Cloud Run sits between the external AI Spanda CMS and the Salesforce B2B store. The CMS holds the image bytes. The middleware allowlists published revisions and serves `GET` and `HEAD` on `/image/{revision}.jpg`. Salesforce holds only ManagedContent records whose `sfdc_cms:media.source.type` is `url`, pointing at those URLs, plus ProductMedia and ProductCategoryMedia links. Salesforce must not store the image binaries.

The same shape is how a later connection should be added (another image, another site): publish in the CMS, allowlist the revision, create a URL reference in Salesforce, link the product or category, rebuild the store search index.

Apache Camel was a candidate and was never built. This is not an iPaaS. It is not a direct Salesforce-to-CMS API integration. The CMS website **Connect** control is still “Registered — connection required” and is not the working path. Leave that control unused.

That is the design. At 7:25 AM ET the live Salesforce images were still `source.type=file`, and the 19 Nov URL set was already deleted. Section 1 records that snapshot, then the 7:56 AM ET apply.

The service that serves shopper images is `abcmed-payload-image-poc`. Nearby services are easy to confuse with it:

| Service | What it is |
| --- | --- |
| `abcmed-payload-image-poc` | Live image delivery. This is the one shopper URLs use. |
| `image-cms` | Private Payload CMS. File bytes are not public. |
| `aispanda-web` | Admin proxy for `https://aispanda.com/cms`. Not storefront delivery. |
| `abcmed-reservoir-image-poc` | Separate one-image POC. No `PUBLIC_IMAGES_JSON`. Not the storefront path. |

Last observed delivery revision: `abcmed-payload-image-poc-00006-nuz`, 100% traffic, tag `generated-pilot`, ready since 7 Nov 2026, 8:06 AM ET. A newer revision is not established in these notes.

## 1. What is connected to what

The chain, in order:

1. **CMS asset.** AI Spanda CMS at `https://aispanda.com/cms` (private Cloud Run service `image-cms`, project `aispanda`, region `us-east1`). As of the 26 Nov authorized read: 20 published, not archived ABCMed assets, ids 46–65. The matching revisions are `image/jpeg`.
2. **Published media revision.** The same read listed 20 published revisions, **52 through 71**. The number in the public URL is this Payload revision id, not a Salesforce id.
3. **Middleware allowlist.** `PUBLIC_IMAGES_JSON` on `abcmed-payload-image-poc` lists those 20 revisions. The cap is 25. Five slots are free. Primary configured revision is 70.
4. **Public image URL.** `GET` or `HEAD` `https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/{revision}.jpg`. The alias `https://abcmed-payload-image-poc-wqh67phdvq-ue.a.run.app` answered the same paths on 26 Nov. Salesforce URL records in the dry-run plan use the numbered host. Use that host.
5. **Salesforce URL ManagedContent.** Org `abcmed-poc` (`00Dbm000016kC0bEAE`). Workspace `0Zubm000009U978CAC`. Content type `sfdc_cms__image`. The image node is `sfdc_cms:media.source` with `type=url` and the middleware URL. Publish goes to the store channel through that workspace.
6. **ProductMedia or ProductCategoryMedia.** `ElectronicMediaId` points at that ManagedContent id (the `20Y…` id). It does not store the image.
7. **Store search index.** Web store `0ZEbm000004PrJlGAK`. Shoppers keep the previous image until the index that includes the new links is Completed and Live.
8. **Shopper `img src`.** The image request should be `https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/{revision}.jpg`.

Names to keep straight:

| Piece | Id or host |
| --- | --- |
| Salesforce org | `abcmed-poc` / `00Dbm000016kC0bEAE` |
| Web store | `0ZEbm000004PrJlGAK` |
| CMS workspace | `0Zubm000009U978CAC` |
| Channel | `0apbm000008i30nAAA` |
| Middleware host | `https://abcmed-payload-image-poc-927517486376.us-east1.run.app` |
| CMS site | ABCMed Salesforce, key `abcmed-salesforce`, site id 7, `connectionStatus` `registered` |
| CMS origin on the site record | `https://orgfarm-810e27af78-dev-ed.develop.my.site.com` (the notes say the path may continue off-screen) |
| Channel store host | `https://orgfarm-810e27af78-dev-ed.develop.my.site.com/abcmeddemovforcesite` |
| Shopper paths opened on 26 Nov | `/abcmeddemo` product and category URLs |

Whether `/abcmeddemo` and `/abcmeddemovforcesite` are the same site path is not established. Check the page you actually have open.

The delivery service pulls the file from the private CMS with a site-scoped integration key that is already injected into the service. Raw CMS file URLs return 403 without that key. Shoppers never get the key and never call the CMS file URL. They call the middleware URL.

Each middleware response sends `Cache-Control: no-store` and `X-Content-Type-Options: nosniff`. The service re-reads the CMS on each request. There is no shared cache to flush. The service cannot recall a copy a browser already downloaded.

### Revisions that are public today

Proven on 26 Nov (CMS list, allowlist, and anonymous GET hashes matched) and again by anonymous HEAD at about 7:32 AM ET on 27 Nov (HTTP 200, `image/jpeg`, byte sizes unchanged). Revisions 50 and 72 are 404 controls. They are supposed to 404.

| Rev | CMS asset | Bytes | Store use in the dry-run plan |
| ---: | --- | ---: | --- |
| 52 | Supply Pack A | 253662 | SUPPLY-A list and detail |
| 53 | Procedure Supply Pack B | 264543 | SUPPLY-B list and detail |
| 54 | Supply Storage Kit A | 310546 | STOCK-A list and detail |
| 55 | Supply Storage Kit B | 402803 | STOCK-B list and detail |
| 56 | Accessory Pack A | 201147 | ACCESSORY-A list and detail |
| 57 | Accessory Pack B | 249414 | ACCESSORY-B list and detail |
| 58 | Extended Infusion Set 6 mm / 23 in (box of 5) | 256990 | EXT-6-23 and the box-of-1 |
| 59 | Extended Infusion Set 9 mm / 23 in (box of 5) | 256305 | EXT-9-23 and the box-of-1 |
| 60 | Extended Infusion Set 9 mm / 32 in (box of 5) | 252401 | EXT-9-32 and the box-of-1 |
| 61 | Standard Reservoir 3 mL (box of 10) | 267330 | RES-3ML-10 list and detail |
| 62 | Extended Reservoir 3 mL (box of 5) | 182009 | EXTRES-3ML-5 list and detail |
| 63 | Glucose Sensor 4 (box of 5) | 336671 | G4-SENSOR-5 list and detail |
| 64 | Sync Glucose Sensor (box of 5) | 256781 | SYNC-SENSOR-5 list and detail |
| 65 | Pump Belt Clip — alternate | 305787 | Extra detail on Pump Belt Clip |
| 66 | Pump Belt Clip — main | 231061 | PUMP-CLIP list and detail |
| 67 | Category — Infusion Sets | 173769 | Infusion Sets tile |
| 68 | Category — Reservoirs | 121070 | Reservoirs tile |
| 69 | Category — Glucose Sensors | 148224 | Glucose Sensors tile |
| 70 | Category — Pump Accessories | 170678 | Pump Accessories tile. Primary configured revision. |
| 71 | Pump Belt Clip — hinge detail | 525005 | Extra detail on Pump Belt Clip |

Box-of-1 infusion products reuse 58, 59, and 60. They do not need their own CMS assets.

### What the snapshots showed in Salesforce

At 7:25 AM ET on 27 Nov, before any URL-pointer apply:

- ManagedContent in the workspace: 16 live (14 images + 2 settings) and 18 deleted images.
- All 14 live images were `source.type=file`. None was `url`.
- ProductMedia: 20 rows. ProductCategoryMedia: 4 tile rows. No banner rows. Every `ElectronicMediaId` pointed at file content.
- The 19 Nov 2026, 11:50 PM ET URL-pointer set was still deleted. Content key `MCRV632J73FZDALHANJYLFJWQ5B4` (Pump Accessories, revision 70) still returned NOT_FOUND from the delivery API.
- Search index `0axbm0000012FvF` was Completed and Live (full, manual). Created 25 Nov 2026, 9:27 PM ET. Completed 10:27 PM ET. `numberOfProducts=20`.
- CSP trusted sites `ABCMed_Payload_Image_POC` (LEX) and `ABCMed_Payload_Image_Storefront` (Communities) were Active for the numbered middleware host. The storefront was prepared to load the host. It was not rendering those URLs, because the links pointed at file content.

The dry run planned 20 URL images (revisions 52–71), 24 retargets, 14 new ProductMedia rows, 2 extra Pump Belt Clip detail rows, and an index rebuild. It deletes 0 file binaries.

At 7:56 AM ET on 27 Nov that apply finished, with the two extra Pump Belt Clip rows left out:

- 20 URL ManagedContent records were created and published. Names are `middleware-image-52` through `middleware-image-71`. Revision 52 is `20Ybm00000HqyvyEAB`, content key `MCVGMSCWPEF5FNVPZOA4KGG5RN3A`. Channel delivery for that key, and then for all 20, returned `source.type=url` and the middleware URL `https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/{rev}.jpg`.
- 24 existing ProductMedia and ProductCategoryMedia links were retargeted onto those URL records. The previous file content was not deleted.
- 14 new ProductMedia rows were created for slots that had no link.
- Revisions 65 and 71 exist as URL content and are not linked. The extra gallery rows were excluded.
- The search index was not rebuilt. Shopper screenshots were not taken. Until a new index is Completed and Live, search and list pages can still show the previous file image.

Ids are in `run-20261127-072540/created.json`. Trust a fresh read if anything has moved since 7:56 AM ET.

## 2. What you may change, and what to leave alone

### You may do these

Read-only checks in section 3, any time.

When you mean to change what the store points at, the only established write shape is:

- Create `sfdc_cms__image` with `source.type=url` and the middleware URL. No file part.
- Publish those ids in workspace `0Zubm000009U978CAC`.
- Set `ElectronicMediaId` on ProductMedia or ProductCategoryMedia to that new ManagedContent id. On a PATCH, send only `ElectronicMediaId`.
- Rebuild the webstore search index after the links read back, then wait until the new index is Completed and Live.
- Open the shopper page and read the image URL.

`ElectronicMediaId` is createable and updateable on both objects and references ManagedContent. `ProductId` is also updateable on ProductMedia. A PATCH must not include `ProductId`. A mistaken body would move the link onto another product.

The image type in this org is described as “PNG or JPEG, or link to a URL.” The required node is `source`. `title` is required. `altText` is optional. The help text says the URL domain must be allowed. The CSP sites for this host were already Active at the dry run. `thumbUrl` is optional and is not used in the plan.

### Leave these alone

- **Image binaries in Salesforce.** Do not upload a file into Salesforce CMS, ProductMedia, or anywhere else in the org to fix a picture. The five file uploads from 25 Nov stay in the workspace until a separate approval names a delete. Retargeting a link does not free that storage.
- **An org-wide external product-media URL switch.** No such field was found. WebStore has 46 fields; none is that switch. `ExternalReference` is present and not updateable. `CommerceSettings` is not queryable through the sObject API. Do not hunt for a setup toggle. Do not change WebStore settings to chase this.
- **The CMS website Connect control.** ABCMed Salesforce is “Registered — connection required.” Every other site on that list is in the same state. The integrations page says registering a site does not connect its website. There is no “Sync now” control on the integrations list. The 26 Nov health check says this connection is not required for the URL-pointer path. Do not click Connect.
- **Salesforce file deletes.** Do not delete file binaries, the 14 live file images, or the five 25 Nov uploads (`20Ybm00000HmhthEAB`, `20Ybm00000HmhvJEAR`, `20Ybm00000HmhwvEAB`, `20Ybm00000HmhyXEAR`, `20Ybm00000Hmi09EAB`) unless a separate approval says so.
- **API keys.** The integrations page says to keep API keys on the website server and never put them in browser code. Do not print a key, do not paste a key into the browser, and do not copy one into a ticket or a chat. The delivery key is already on the Cloud Run service.
- **Homepage banner, logo, and `wwwmedtronic`.** They are not mapping slots. The dry run left them alone.
- **`/healthz`.** On both middleware hosts it returns a Google Frontend HTML 404. Image delivery does not use it. Do not treat that 404 as a down service.

An older note (`cms-map.md`, 25 Nov) listed “connect the ABCMed website” as step 1 for missing slots. The 26 Nov health check and the 27 Nov dry run both supersede that step. Leave Connect unused.

A later image-library import returned `INVALID_ARGUMENT`. These notes do not record a successful Salesforce import other than the URL-reference shape. Do not retry that import from this guide. The click-path in Salesforce Setup for creating URL media is not established. The documented body is the Salesforce `/connect/cms/contents` JSON in section 4. That path is the CMS content API, not the CMS website Connect button.

## 3. Day-to-day checks

Do these in order when a picture looks wrong, and after any link change. The `sf` binary used in the dry run is `/Users/kr/.local/share/sf/client/bin/sf`, org `abcmed-poc`, API `v68.0`.

### 3.1 Middleware

Request the image with no query string. A query string is a 404 even for a public revision. Only `GET` and `HEAD` are served. Anything else is 404.

Allowlisted revisions **52–71** should return **HTTP 200** and **`Content-Type: image/jpeg`**. Also expect `Cache-Control: no-store`.

Revisions **50** and **72** should return **HTTP 404**. That 404 is the control, not a fault.

```bash
curl -sI "https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/52.jpg"
curl -sI "https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/71.jpg"
curl -sI "https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/50.jpg"
curl -sI "https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/72.jpg"
```

Spot-check the byte size against the table in section 1 when the status is 200. Revision 52 is 253662 bytes. Revision 71 is 525005 bytes. The 27 Nov HEAD, with redirects not followed, matched the 26 Nov sizes for all of 52–71.

`/healthz` returning 404 does not fail this check.

### 3.2 Salesforce content is a URL

Channel delivery is the check that matters for the store:

```bash
SF=/Users/kr/.local/share/sf/client/bin/sf
"$SF" api request rest -o abcmed-poc -X GET \
  "/services/data/v68.0/connect/cms/delivery/channels/0apbm000008i30nAAA/contents/<contentKey>"
```

Require HTTP 200, `sfdc_cms:media.source.type` = `url`, and `source.url` equal to `https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/<rev>.jpg` for that record.

A live URL example from the 7:56 AM ET apply is content key `MCVGMSCWPEF5FNVPZOA4KGG5RN3A` (revision 52, `middleware-image-52`). The other nineteen keys are in `created.json`. The deleted revision-70 key `MCRV632J73FZDALHANJYLFJWQ5B4` returned NOT_FOUND before that apply. Do not reuse a deleted key.

Authoring GET `/services/data/v68.0/connect/cms/contents/<contentKey>` shows the same `source.type` before you trust a publish. The dry run requires that read-back to say `url` before publish.

A file-type example from 26 Nov, so you can recognize the wrong result: key `MCQL7PCUVYK5EGZHXUVKY5PJ2M6I` (STOCK-B) was `type=file`, PNG, 1853814 bytes. A `/cms/delivery/media/…` URL is that file path.

### 3.3 The product or category link points at that content

`ElectronicMediaId` must be the ManagedContent id of the URL record, not a file-content id and not the content key.

The dry run did not record a SOQL example. Counting rows and reading `ElectronicMediaId` is the check. At 7:25 AM ET on 27 Nov the counts were 20 ProductMedia rows and 4 ProductCategoryMedia rows, all aimed at file content. A later apply is not recorded here, so read the live ids.

Media groups used by the dry-run plan:

| Use | Group id | Sort |
| --- | --- | ---: |
| List | `2mgbm00000J2jhIAAR` | 0 |
| Detail | `2mgbm00000J2jhHAAR` | 1 |
| Tile | `2mgbm00000J2jhJAAR` | 0 |

Pump Belt Clip extra details use the detail group, sort 2 (revision 65) and sort 3 (revision 71).

### 3.4 Search index, after a link change

Skip this when you have not changed links. Shoppers keep seeing the old image until a rebuild finishes.

```bash
"$SF" api request rest -o abcmed-poc -X GET \
  /services/data/v68.0/commerce/management/webstores/0ZEbm000004PrJlGAK/search/indexes
```

Read `indexStatus` and `indexUsage`. The index shoppers use is the one with `indexUsage=Live`. You want `indexStatus=Completed` on that index.

If you just changed links and the live index is still the pre-change one, rebuild only when nothing is `InProgress`:

```bash
"$SF" api request rest -o abcmed-poc -X POST \
  /services/data/v68.0/commerce/management/webstores/0ZEbm000004PrJlGAK/search/indexes
```

The 25 Nov rebuild was that POST with an empty body. It returned HTTP 201 and created `0axbm0000012FvF`. These notes do not paste the 201 body. If the new id is in the response, poll until that id is Completed and Live. If the body shape is unclear, GET the collection and do not POST a second time.

The last full rebuild took about an hour (9:27 PM to 10:27 PM ET on 25 Nov 2026). Wait it out. Do not start another while one is InProgress.

### 3.5 Shopper page

After the new index is Live, check as a guest and as a signed-in shopper:

- A retargeted product: ABC-DEMO-EXT-9-23, product `01tbm00000UbNQzAAN` (revision 59).
- A newly linked product: SUPPLY-A, product `01tbm00000UZ2VVAA1` (revision 52).
- Category tiles for Infusion Sets (revision 67) and Pump Accessories (revision 70).
- Pump Belt Clip detail gallery, product `01tbm00000UbON3AAN`, including revisions 65 and 71.
- A product list or search result that shows those products.

Acceptance is an image URL of `https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/{rev}.jpg` for the revision in the table. A `/cms/delivery/media/…` URL is the file-content behavior. The dry run allows one exception: that URL is only a redirect, and the next browser request is the middleware JPEG.

A read-only commerce check of the same fact:

```bash
"$SF" api request rest -o abcmed-poc -X GET \
  /services/data/v68.0/commerce/webstores/0ZEbm000004PrJlGAK/products/01tbm00000UZ2VVAA1
```

At the dry run, the 9 mm / 23 in product’s `defaultImage.url` was `/cms/delivery/media/MCTFPPXD3YCJBSRDXKCECTSFQN7A?…`. After a successful URL-pointer apply, that field or the rendered `img.src` has to be the middleware URL for revision 59.

The first HTML of the shopper page had no `<img>` on 26 Nov. The page is client-rendered. Read the image URL in the browser after it loads, or read `defaultImage.url`. Do not treat a curl of the HTML as proof that the image is missing.

Nov 6–7 docs left anonymous buyer list and search coverage unproven. An authenticated preview of Pump Accessories via revision 70 was recorded then. These notes do not say that anonymous coverage has since been proven.

## 4. Fix it by symptom

Stop when a check fails in a way section 6 lists. Do not skip ahead to a file upload.

### Shopper image is a Salesforce `/cms/delivery/media` file URL

The browser is loading Salesforce file content. The URL you want is `*.run.app/image/{rev}.jpg`.

Check first, in this order:

1. Channel delivery for the content key that `ElectronicMediaId` resolves to. If `source.type` is `file`, this link is still on a Salesforce file. The 27 Nov snapshot said every live image was `file`.
2. `ElectronicMediaId` on that ProductMedia or ProductCategoryMedia row. It has to be the ManagedContent id of a `type=url` record for the revision in the table, not one of the file ids.
3. If the link was already changed, the search index. A Completed Live index from before the change still serves the old picture. See the last symptom in this section.

The dry-run retargets, from file content to a URL record you create for that revision. The file content stays in the workspace.

| Slot | Record | File content to leave in place | Revision |
| --- | --- | --- | ---: |
| STOCK-B list | `2pmbm00000EVTgtAAH` | `20Ybm00000GCp2LEAT` | 55 |
| STOCK-B detail | `2pmbm00000EVTguAAH` | `20Ybm00000GCp2LEAT` | 55 |
| ABC-DEMO-EXT-6-23 list | `2pmbm00000EYXHdAAP` | `20Ybm00000GHDUHEA5` | 58 |
| ABC-DEMO-EXT-6-23 detail | `2pmbm00000EYXHeAAP` | `20Ybm00000GHDUHEA5` | 58 |
| ABC-DEMO-EXT-6-23-1 list | `2pmbm00000Et1HxAAJ` | `20Ybm00000GHDUHEA5` | 58 |
| ABC-DEMO-EXT-6-23-1 detail | `2pmbm00000Et1JZAAZ` | `20Ybm00000GHDUHEA5` | 58 |
| ABC-DEMO-EXT-9-23 list | `2pmbm00000FsHXtAAN` | `20Ybm00000HmhwvEAB` | 59 |
| ABC-DEMO-EXT-9-23 detail | `2pmbm00000FsHZVAA3` | `20Ybm00000HmhwvEAB` | 59 |
| ABC-DEMO-EXT-9-23-1 list | `2pmbm00000FsCDGAA3` | `20Ybm00000HmhwvEAB` | 59 |
| ABC-DEMO-EXT-9-23-1 detail | `2pmbm00000FsHb7AAF` | `20Ybm00000HmhwvEAB` | 59 |
| ABC-DEMO-EXT-9-32 list | `2pmbm00000FsHcjAAF` | `20Ybm00000HmhvJEAR` | 60 |
| ABC-DEMO-EXT-9-32 detail | `2pmbm00000FsHeLAAV` | `20Ybm00000HmhvJEAR` | 60 |
| ABC-DEMO-EXT-9-32-1 list | `2pmbm00000FsHhZAAV` | `20Ybm00000HmhvJEAR` | 60 |
| ABC-DEMO-EXT-9-32-1 detail | `2pmbm00000FsHmPAAV` | `20Ybm00000HmhvJEAR` | 60 |
| ABC-DEMO-EXTRES-3ML-5 list | `2pmbm00000FsHo1AAF` | `20Ybm00000HmhthEAB` | 62 |
| ABC-DEMO-EXTRES-3ML-5 detail | `2pmbm00000FsHpdAAF` | `20Ybm00000HmhthEAB` | 62 |
| ABC-DEMO-G4-SENSOR-5 list | `2pmbm00000FsHrFAAV` | `20Ybm00000Hmi09EAB` | 63 |
| ABC-DEMO-G4-SENSOR-5 detail | `2pmbm00000FsHsrAAF` | `20Ybm00000Hmi09EAB` | 63 |
| ABC-DEMO-SYNC-SENSOR-5 list | `2pmbm00000FsHuTAAV` | `20Ybm00000HmhyXEAR` | 64 |
| ABC-DEMO-SYNC-SENSOR-5 detail | `2pmbm00000FsHxhAAF` | `20Ybm00000HmhyXEAR` | 64 |
| Infusion Sets tile | `0Oqbm000000KjgvCAC` | `20Ybm00000GHG17EAH` | 67 |
| Reservoirs tile | `0Oqbm000000KjiXCAS` | `20Ybm00000GHSrVEAX` | 68 |
| Glucose Sensors tile | `0Oqbm000000Kjk9CAC` | `20Ybm00000GHSt7EAH` | 69 |
| Pump Accessories tile | `0Oqbm000000Mxr3CAC` | `20Ybm00000GHSptEAH` | 70 |

PATCH sends only `ElectronicMediaId`. Example shape from the dry run, for STOCK-B list, after the revision 55 URL record exists:

```bash
"$SF" api request rest -o abcmed-poc -X PATCH \
  /services/data/v68.0/sobjects/ProductMedia/2pmbm00000EVTgtAAH \
  -H "Content-Type: application/json" \
  -b '{"ElectronicMediaId":"<managedContentId for revision 55>"}'
```

Products that had no ProductMedia row in the dry run need a create, not a patch. One list row and one detail row each:

| Slot | Product | Revision |
| --- | --- | ---: |
| SUPPLY-A | `01tbm00000UZ2VVAA1` | 52 |
| SUPPLY-B | `01tbm00000UZ5htAAD` | 53 |
| STOCK-A | `01tbm00000UZ6IzAAL` | 54 |
| ACCESSORY-A | `01tbm00000UZ7LVAA1` | 56 |
| ACCESSORY-B | `01tbm00000UZ8B7AAL` | 57 |
| ABC-DEMO-RES-3ML-10 | `01tbm00000UbNXRAA3` | 61 |
| ABC-DEMO-PUMP-CLIP | `01tbm00000UbON3AAN` | 66 |

List uses group `2mgbm00000J2jhIAAR` and sort 0. Detail uses group `2mgbm00000J2jhHAAR` and sort 1. Extra Pump Belt Clip rows: same product `01tbm00000UbON3AAN`, detail group, sort 2 for revision 65 and sort 3 for revision 71.

```bash
"$SF" api request rest -o abcmed-poc -X POST \
  /services/data/v68.0/sobjects/ProductMedia \
  -H "Content-Type: application/json" \
  -b '{"ProductId":"01tbm00000UZ2VVAA1","ElectronicMediaId":"<rev 52 content id>","ElectronicMediaGroupId":"2mgbm00000J2jhIAAR","SortOrder":0}'
```

If the link already points at URL content and the shopper URL is still `/cms/delivery/media/…`, check the index next. Do not patch `ProductId`.

What not to do: do not upload a replacement binary, do not delete the file content to force the URL path, do not click Connect, and do not look for an org-wide switch. CSP for this host was already Active. These notes do not explain this symptom as a missing trusted site.

On 26 Nov the linked Pump Accessories tile was content key `MCTQBEGTZTIBEX7MWLW3ITYNC4IE` (file, PNG, 1865375 bytes), a different image from middleware `/image/70.jpg`. The dry-run link row for that tile stores `ElectronicMediaId` `20Ybm00000GHSptEAH`. These notes do not print the content key and the `20Y` id on the same line, so confirm both with a read before you treat them as one record. Seeing that file URL on the tile means the link is still on the file record.

### Middleware returns 404 for a revision that should be public

Check first:

- The URL is exactly `/image/{n}.jpg` on `abcmed-payload-image-poc`, with no query string. The alias host is the other acceptable host for a direct check. A query string, a POST, or any method other than GET or HEAD is a 404 by design.
- `n` is in 52–71. A 404 for 50 or 72 is the control.
- The path is the delivery service, not `image-cms`, not `abcmed-reservoir-image-poc`, and not a raw CMS file URL. The private CMS host returns 403 without a Cloud Run identity token. A raw CMS file URL returns 403 without the integration key. What `abcmed-reservoir-image-poc` returns for `/image/{n}.jpg` is not in these notes. It has no `PUBLIC_IMAGES_JSON` and is not the storefront path.
- The revision is one of the 20 in `PUBLIC_IMAGES_JSON`. The service fetches a revision only after that allowlist hit. A published revision that was never added still returns 404, even when the CMS has it. The cap is 25. Twenty are in use. Five slots are free. Startup preflight checks only the original revision (`PAYLOAD_REVISION_ID` in the service). The health note says the primary configured revision is 70. These notes do not state that 70 and that original id are the same value.

What not to do: do not “fix” a 404 by uploading the JPEG to Salesforce. Do not click Connect. Adding a revision means editing `PUBLIC_IMAGES_JSON` and deploying Cloud Run. That is a stop-and-ask (section 6), including when a free slot remains. The code that does this lives on `aispanda/OpenSourceSFIntegrations` branch `story/86bczuxpu-middleware-poc` (tip `890194ef`, 7 Nov 2026), entrypoint `scripts/serve-payload-image.mjs`. `main` does not contain the service. These notes found no local git clone.

### Middleware returns 502

A 502 is a generic source failure. The service calls the private CMS for `api/media-revisions/{id}` and the revision file, then checks published, not archived, MIME and signature, size, and SHA-256. The CMS call is HTTPS only, no redirects, 15 second timeout, 5 MiB bound. Failure of that read is a 502. These notes do not break 502 into finer causes, and they do not record a 502 during the 26 or 27 Nov checks.

Check first:

- `https://aispanda.com/cms` returns HTTP 200 and `text/html`. On 26 Nov at 3:14 PM ET it did (7.9 seconds).
- The private CMS host `https://image-cms-wqh67phdvq-ue.a.run.app/` returns 403 without a Cloud Run identity token. That 403 is expected. It is not the 502.
- The revision is still published and not archived, and the bytes are a JPEG within the 5 MiB bound. The largest allowlisted file in the table is revision 71 at 525005 bytes.
- You are calling an allowlisted revision. An unlisted revision is a 404, not a 502.

What not to do: do not redeploy Cloud Run, do not edit the allowlist, do not upload a binary to Salesforce, and do not click Connect. A 502 means the delivery path failed its CMS read. Putting a copy in Salesforce leaves the CMS path broken and stores the bytes in the wrong system.

An authorized CMS read used on 26 Nov, with the existing key kept out of the browser:

- `GET https://aispanda.com/cms/api/assets?limit=100&depth=1&where[archived][not_equals]=true` → 20 assets
- `GET api/media-revisions` (the exact query string is not in the notes) → 20 published revisions 52–71
- `GET api/sites` → the one ABCMed site, `connectionStatus` `registered`
- `GET api/integrations` → 403 with this key. That 403 does not mean the delivery key is missing from Cloud Run.

How to perform that authorized read without placing the key in the browser is not given as a command in these notes. Do not paste the key into a curl you then copy into a ticket.

### CMS site shows “Registered — connection required”

This is the recorded state, not a failed storefront connection. On 26 Nov, `GET api/sites` returned site id 7, name ABCMed Salesforce, key `abcmed-salesforce`, `connectionStatus` `registered`, `updatedAt` 6 Nov 2026, 3:25 PM ET (`2026-11-06T20:25:09Z`). The websites list in the admin UI showed the same words for ABCMed and for every other site. The integration row “ABCMed Salesforce one-image test” was Active, last updated 6 Nov 2026, 4:38 PM ET, and was not re-opened on 26 Nov (`GET api/integrations` returned 403).

The working path does not use this connection. The Nov 7 proof was publish, then the middleware URL, then a Salesforce URL ManagedContent. Nothing in these notes shows a connected Salesforce push or a Sync control.

What not to do: do not click Connect. Do not open the integration record and copy its API key. Do not paste a key into browser code. Connecting the website is not the fix for a missing shopper image.

### Salesforce URL content was deleted

The URL-pointer ManagedContent set was deleted 19 Nov 2026, 11:50 PM ET. ManagedContent is not undeletable. The delivery API still returned NOT_FOUND for `MCRV632J73FZDALHANJYLFJWQ5B4` on 27 Nov. Do not try to restore those records.

Recovery is to create the URL record again.

Check first:

- Channel delivery for the old key returns NOT_FOUND. That confirms you are looking at the deleted set.
- Middleware HEAD for that revision is 200 `image/jpeg`. The CMS copy is the source. The 27 Nov HEAD said 52–71 still were.
- The new url name is not one of the deleted names. Those names are still occupied. The dry run cites `payload-abcmed-supply-pack-a-revision-52` as an occupied deleted name. New records use `middleware-image-52` through `middleware-image-71`, which were not in the live or deleted set at the dry run.

Create one record per revision. This body is the one Salesforce accepted for revision 52 at 7:53 AM ET on 27 Nov. The other nineteen change the revision number in the title, the url name, and both URL fields. Full bodies are in `run-20261127-072540/dryrun.json`. If a later create is rejected, stop. Do not fall back to a file upload.

```bash
"$SF" api request rest -o abcmed-poc -X POST \
  /services/data/v68.0/connect/cms/contents \
  -H "Content-Type: application/json" \
  -b '{"contentSpaceOrFolderId":"0Zubm000009U978CAC","contentType":"sfdc_cms__image","title":"Middleware image 52 — Supply Pack A","urlName":"middleware-image-52","contentBody":{"altText":"Fictional demo image served from the ABCMed middleware, revision 52.","sfdc_cms:media":{"source":{"type":"url","url":"https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/52.jpg"},"url":"https://abcmed-payload-image-poc-927517486376.us-east1.run.app/image/52.jpg"}}}'
```

After each create, GET `/services/data/v68.0/connect/cms/contents/<contentKey>` and require `source.type=url` and `source.url` equal to that revision’s middleware URL. If `type` is `file`, stop. Do not publish that record.

When every new record reads back as URL content, publish with the same body shape that published the 25 Nov file images. The body has no separate channel id. The workspace is the one tied to channel `0apbm000008i30nAAA`, and that is how the 25 Nov publish reached the channel.

```bash
"$SF" api request rest -o abcmed-poc -X POST \
  /services/data/v68.0/connect/cms/contents/publish \
  -H "Content-Type: application/json" \
  -b '{"contentIds":["<20Y ids from the creates>"],"contextContentSpaceId":"0Zubm000009U978CAC"}'
```

Then run the channel delivery GET in section 3.2 for each new key. Require HTTP 200 and `source.type=url`. Then retarget or create the ProductMedia / ProductCategoryMedia rows (previous symptom), then rebuild the index.

Connect routes that would have returned a schema (`/connect/cms/contents/types/...`, `/connect/cms/content-types/...`, `/connect/cms/managed-content-types`) returned NOT_FOUND or asked for a valid content key. There is no schema document to POST against. The body above is inferred from the live file body plus the image type’s “file or URL” node.

What not to do: do not undelete, do not reuse the deleted url names, do not upload a file if the POST fails, and do not delete a file image to make room. A single-record cleanup for a create that came back as `type=file` is not a separate procedure in these notes. Stop. The rollback script in section 6 is only for a recorded phase-2 apply, and only with an explicit yes.

### A new product has no image

Decide which case it is before you create anything in Salesforce.

**The revision is already in the table (52–71).** The CMS asset exists and the middleware can serve it. Thirty-eight mapping slots are in this group. The gap is a Salesforce URL record and a ProductMedia or ProductCategoryMedia link, then an index rebuild. Follow the deleted-content steps and the link table. Do not add another CMS asset for a box-of-1 infusion product; it reuses 58, 59, or 60.

**The slot is one of the 18 with no CMS asset.** There is no revision to allowlist and no middleware URL. Do not create Salesforce content for these, and do not upload a binary.

| Slot | Id |
| --- | --- |
| Extended Infusion Set (no SKU), list and detail | `01tbm00000UmzW9AAJ` |
| Routing Test Supply (`ABC-DEMO-ROUTE-SPLIT-B`), list and detail | `01tbm00000V7iNRAAZ` |
| Demo Gauze Box (`DEMO-GAUZE-BOX`), list and detail | `01tbm00000VEni9AAD` |
| Checkout Inventory Fixture (`DEMO-STOCK-01`), list and detail | `01tbm00000VF0HBAA1` |
| Products, tile and banner | `0ZGbm000001aHcrGAE` |
| Procedure Supply Demonstration, tile and banner | `0ZGbm000001aHo9GAE` |
| Supply Storage Demonstration, tile and banner | `0ZGbm000001aI4HGAU` |
| Infusion Sets banner | `0ZGbm000001bO7dGAE` |
| Reservoirs banner | `0ZGbm000001bO9FGAU` |
| Glucose Sensors banner | `0ZGbm000001bOArGAM` |
| Pump Accessories banner | `0ZGbm000001bOCTGA2` |

That is 8 product slots, 3 category tiles, and 7 banners. Infusion Sets, Reservoirs, Glucose Sensors, and Pump Accessories already have tiles (revisions 67–70). Only their banners are in this gap.

Fix order for one of these slots:

1. Create the image in the AI Spanda CMS and publish a media revision. The CMS admin click-path and the image-revisions collection slug are not established. The 25 Nov UI pass did not open that collection (`revisions`, `asset-revisions`, and `image-revisions` all 404ed). List columns on Images do not show id, filename, or public URL. Confirm the new revision with an authorized `api/media-revisions` read, not by guessing the id from the list screen.
2. Allowlist that revision on the middleware. Five free slots remain under the cap of 25. The 18 missing slots cannot all be added. More than five new public images needs a cap change or a second service. Either change is a stop-and-ask, and so is the allowlist edit itself.
3. After the new `/image/{rev}.jpg` returns 200 `image/jpeg`, create the Salesforce URL ManagedContent, link the product or category, rebuild the index, and check the shopper page.

What not to do: do not upload the missing art to Salesforce first, do not click Connect so the CMS will “push” it, and do not create a URL record that points at a revision the middleware still 404s.

The on-screen Images list on 25 Nov showed only four ABCMed rows. The 26 Nov API read is the count to trust: 20 published assets. Do not treat the first screen as the whole library.

### Search results still show the old image after links were changed

Check the index before you touch the links again.

```bash
"$SF" api request rest -o abcmed-poc -X GET \
  /services/data/v68.0/commerce/management/webstores/0ZEbm000004PrJlGAK/search/indexes
```

Two established causes:

- No rebuild has run since the link change. The Live index is still `0axbm0000012FvF` from 25 Nov, or whatever older Completed index was Live when you changed the links.
- A rebuild is `InProgress`. The dry run says shoppers keep seeing the previous image until the new index is Live.

The last full rebuild took about an hour. Wait until `indexStatus=Completed` and `indexUsage=Live`. Do not POST another rebuild while one is InProgress.

If the Live index finished after the link change and the shopper image URL is already `*.run.app/image/{rev}.jpg` but the pixels look old, the service is sending `Cache-Control: no-store` and re-reading the CMS. It cannot recall a copy the browser already downloaded. These notes do not establish a server-side purge. Reload and read the request URL. If that URL is still `/cms/delivery/media/…`, the index or the link is still the old path. Go back to the first symptom.

What not to do: do not upload a new binary to bust the old picture, do not start a second index build over an InProgress one, and do not delete the old index. A procedure for deleting an index is not in these notes.

## 5. Connecting more than images

What is proven, as of the 26 Nov health read and the 27 Nov HEAD:

- One middleware process, `abcmed-payload-image-poc`.
- One allowlist, `PUBLIC_IMAGES_JSON`, holding 20 published ABCMed JPEGs, revisions 52–71, cap 25.
- Anonymous `GET` and `HEAD` of those 20 URLs return the current CMS bytes (`Cache-Control: no-store`, hashes matched the CMS on 26 Nov).
- Salesforce can represent an image as URL ManagedContent (`source.type=url`) plus ProductMedia or ProductCategoryMedia. That is the intended store side. The live org at the 27 Nov dry run did not still have those URL records. They had been deleted on 19 Nov.
- CSP trusted sites for the numbered host were already Active for the storefront (Communities) and for LEX.

What is not built:

- Apache Camel, or any other event-driven middleware. No durable ledger, no unpublish path that revokes copies already downloaded, no exactly-once association.
- Automatic CMS-to-Salesforce sync. Publishing in the CMS does not create or update a Salesforce record.
- Private-document delivery. Anonymous access is only the allowlisted public JPEGs. This is not shopper-entitlement auth.
- A second store. `abcmed-reservoir-image-poc` is an older one-image service, not a second storefront.

To add another image on this store, once a free allowlist slot exists and you have a yes for the allowlist change: publish the revision in the CMS, put that revision on the allowlist, create a URL ManagedContent at `/image/{rev}.jpg`, point ProductMedia or ProductCategoryMedia at it, rebuild the index, check the shopper `img src`.

To point the same kind of integration at another site, these notes only establish the shape: one middleware process, an allowlist, and URL references in the target system. A second Salesforce store, a second allowlist service, and any non-image content are not built. The POC process limits (max 1 instance, concurrency 2, 1 CPU, 256 MiB, 60 second timeout, manual image build) are the current deployment. They are not a template that has been repeated.

Experimental ProductMedia apply and rollback helpers exist in the repo. Live apply is disabled in the public CLI. The dry-run path is direct REST, not that CLI.

## 6. When to stop and ask

Stop and get an explicit yes before any of these:

- Any delete of Salesforce files, including the 25 Nov uploads and the older file-type images.
- Any Cloud Run deploy, revision change, or edit to `PUBLIC_IMAGES_JSON`, even when one of the five free slots would cover it.
- Any click of Connect on the CMS website integration, or any edit of that integration’s key.
- Any org-wide setting, including anything that looks like an external product-media switch. No such WebStore field was found. Do not keep looking.
- Any new public image beyond the five free allowlist slots. Eighteen uncovered slots do not fit. A cap change or a second service is a separate decision.

Also stop, without improvising, when:

- The URL create POST is rejected, or a create reads back as `source.type=file`.
- You are about to PATCH `ProductId`.
- An index build is already InProgress.
- A 502 is still a 502 after the CMS itself returns 200, and the revision is published, not archived, and within the 5 MiB bound. Fixing that is a service change.

### Rollback of the URL-pointer phase

The existing rollback is `/Users/kr/grokbot-storefront/run-20261127-072540/rollback.sh`.

It is the rollback for the URL-pointer phase only. It exits unless `PHASE2_APPROVED=yes` and a phase 2 `created.json` is beside it. It was not run during the dry run. Do not run it without an explicit yes.

The dry run describes it as putting the 24 retargeted links back on their previous file content, removing only the ProductMedia and ProductCategoryMedia rows that phase 2 recorded, removing only the new URL content, and posting the same empty-body index rebuild. It refuses if a file-content id is listed for deletion. Do not delete the file images yourself to get past an error from that script. If its content-delete step rejects published content, the dry run says to stop and unpublish those new ids first. An unpublish route was not probed. These notes do not establish the unpublish request.

Do not invent a shorter delete. This guide has no delete commands on purpose.

## What these notes do not establish

- Whether the search index was rebuilt after the 7:56 AM ET link change. The create, publish, 24 retargets, and 14 new ProductMedia rows are recorded in `created.json`. The index rebuild and the shopper screenshots are not.
- A Salesforce Setup click-path for URL media. Schema routes that were tried returned NOT_FOUND.
- The CMS clicks or collection slug for publishing a media revision.
- The exact `api/media-revisions` query string. The 26 Nov read used one and got 20 revisions; the query text is written as `GET api/media-revisions?...`.
- A finer cause for HTTP 502 than “the CMS read failed.”
- How often to poll the search index. Only “until Completed and Live,” and that the last full rebuild took about an hour.
- That `/abcmeddemo` and `/abcmeddemovforcesite` are one path.
- A server-side way to wipe an image a browser already downloaded.
- A second URL-create body. The body in section 4 was accepted on 27 Nov for revisions 52–71. A different body is not proven.
- Anything inside `CommerceSettings`. The sObject API cannot query it.
