"""Save a runnable, dated page snapshot before or after a change."""
from pathlib import Path
from datetime import datetime
from zoneinfo import ZoneInfo
import hashlib, json, shutil, sys, re
root=Path(__file__).resolve().parent
reason=' '.join(sys.argv[1:]).strip() or 'page snapshot'
label=re.sub(r'[^a-z0-9]+','-',reason.lower()).strip('-')[:75]
stamp=datetime.now(ZoneInfo('America/New_York')).strftime('%Y-%m-%d_%H%M%S')
dest=root/'versions'/f'{stamp}_{label}'
dest.mkdir(parents=True,exist_ok=False)
files=[p for p in root.iterdir() if p.is_file() and p.suffix in {'.html','.js','.css','.json'}]
files+=list((root/'vendor').rglob('*'))
manifest=[]
for src in files:
 if not src.is_file():continue
 rel=src.relative_to(root);target=dest/rel;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(src,target)
 manifest.append({'path':str(rel),'sha256':hashlib.sha256(target.read_bytes()).hexdigest()})
(dest/'version.json').write_text(json.dumps({'savedAt':stamp,'timezone':'America/New_York','reason':reason,'files':manifest},indent=2)+'\n')
with (root/'VERSIONS.md').open('a') as f:f.write(f'\n- [{stamp}: {reason}](versions/{dest.name}/index.html) — {len(manifest)} files; checksums in version.json.\n')
print(dest)
