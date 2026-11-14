"""Build the page's JSON and browser data from a captured workbook snapshot."""
import json
from pathlib import Path
root=Path(__file__).parent
snapshot=json.loads((root/'workbook-snapshot.json').read_text())
summary_path=Path('/private/tmp/workbook-schema-summary.json')
if summary_path.exists():
 snapshot['schema_summary']=json.loads(summary_path.read_text())
 (root/'workbook-snapshot.json').write_text(json.dumps(snapshot,ensure_ascii=False,indent=2))
source={r[2]:r[10] if len(r)>10 else '' for r in snapshot['sources'][1:]}
classification={r[2]:r[4] for r in snapshot['sources'][1:]}
notes={r[7]:r[6] if len(r)>6 else '' for r in snapshot['objects'][1:]}
stages=[]
for r in snapshot['stages'][1:]:
 stages.append({'stage_id':r[6],'tab_label':r[1],'title':r[2],'story':r[3],'connection':r[4],'subcategory_order':{}})
by_label={s['tab_label']:s for s in stages};objects=[];seen=set();group_counts={}
for r in snapshot['placements'][1:]:
 stage=by_label[r[0]];sid=stage['stage_id'];sub=r[1];rid=r[7]
 assert rid not in seen;seen.add(rid)
 stage['subcategory_order'].setdefault(sub,len(stage['subcategory_order']))
 key=(sid,sub);rank=group_counts.get(key,0);group_counts[key]=rank+1
 objects.append({'row_id':rid,'name':r[2],'api':r[3] or '', 'primary_stage':sid,'also_stages':[],'meaning':r[4],'example':r[5],'scope':r[6],'note':notes.get(rid,''),'source':source.get(r[3],''),'classification':classification.get(r[3],'External record' if not r[3] else ''),'stage_details':{sid:{'subcategory':sub,'position':rank,'role':r[6],'priority':0}}})
by_api={o['api']:o for o in objects if o['api']};edges=[]
for r in snapshot['relationships'][1:]:
 assert by_api[r[1]]['primary_stage']==r[0]==by_api[r[2]]['primary_stage']
 edges.append({'stage':r[0],'from':r[1],'to':r[2],'field':r[3],'relationshipOrder':r[4] if r[4] not in ('',None) else None,'optional':r[5]=='Yes','evidence':r[6],'verifiedOn':r[7],'unique':r[8]=='Yes','polymorphic':r[11]=='Yes','cascadeDelete':r[12]=='Yes'})
summary=dict(snapshot['schema_summary'][1:])
data={'schemaVersion':1,'sourceWorkbook':snapshot['workbook'],'exportedOn':snapshot['exportedOn'],'stages':stages,'objects':objects,'relationships':{'described':int(summary['Objects described']),'unavailable':{},'edges':edges}}
assert len(objects)==186 and len(by_api)==185 and len(edges)==266
(root/'journey-data.json').write_text(json.dumps(data,ensure_ascii=False,indent=2))
(root/'journey-data.js').write_text('window.JOURNEY_DATA = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n')
print('Exported from workbook:',len(objects),'objects,',len(stages),'areas,',len(edges),'references.')
