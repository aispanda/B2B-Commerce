(function(){
'use strict';
const D=window.JOURNEY_DATA,$=id=>document.getElementById(id);
function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
if(!D||!Array.isArray(D.objects)){ $('status').textContent='The workbook snapshot could not be loaded.';return;}
const sections=[],rowNodes=[],stageById=new Map(D.stages.map(s=>[s.stage_id,s]));
const exportText=JSON.stringify(window.getJourneyExport(D),null,2);
$('download-markdown').onclick=()=>window.downloadJourneyFile(window.journeyMarkdown(D),'commerce-object-guide.md','text/markdown');
const real=D.objects.filter(o=>o.api).length,external=D.objects.length-real;
$('count').textContent=`${real} Salesforce objects${external?' + '+external+' external record':''} · ${D.stages.length} journey areas`;
function download(text,name){const u=URL.createObjectURL(new Blob([text],{type:'application/json'})),a=el('a');a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000);}
$('download-json').onclick=()=>download(exportText,'commerce-object-model.json');
$('view-json').onclick=()=>{$('json-content').textContent=exportText;$('json-dialog').showModal();};
$('close-json').onclick=()=>$('json-dialog').close();
$('copy-json').onclick=async()=>{try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(exportText);else{const t=el('textarea');t.value=exportText;document.body.append(t);t.select();if(!document.execCommand('copy'))throw Error();t.remove();}$('status').textContent='JSON copied.';}catch{$('json-content').textContent=exportText;$('json-dialog').showModal();$('status').textContent='Copy is unavailable here. Select the JSON in the viewer or download it.';}};
for(const stage of D.stages){
 const objects=D.objects.filter(o=>o.primary_stage===stage.stage_id),nav=el('a');nav.href='#area-'+stage.stage_id;nav.append(el('span',null,stage.tab_label),el('span',null,String(objects.length)));$('directory').append(nav);
 const section=el('section','area');section.id='area-'+stage.stage_id;section.setAttribute('aria-labelledby','heading-'+stage.stage_id);
 const panel=el('div','journey-panel'),aside=el('div','journey-story'),inventory=el('div','journey-objects');
 const stageNumber=D.stages.indexOf(stage)+1;
 aside.append(el('p','area-label','Stage '+String(stageNumber).padStart(2,'0')+' of '+D.stages.length+' / '+stage.tab_label));
 const h=el('h2',null,stage.title);h.id='heading-'+stage.stage_id;aside.append(h,el('p','area-story',stage.story));
 const tally=el('div','journey-tally');for(const [count,label] of [[objects.length,'Objects here'],[objects.filter(o=>o.stage_details[stage.stage_id].role==='Main').length,'Main objects']]){const stat=el('div');stat.append(el('strong',null,String(count)),el('span',null,label));tally.append(stat);}aside.append(tally);
 if(stage.connection){const c=el('p','connections');c.append(el('strong',null,'How the records connect'),document.createTextNode(stage.connection));aside.append(c);}
 const sectionExports=el('p','section-export','Download this stage: ');const exportSectionJson=el('button','text-link','JSON'),exportSectionMd=el('button','text-link','Markdown');exportSectionJson.setAttribute('aria-label','Download '+stage.tab_label+' JSON');exportSectionMd.setAttribute('aria-label','Download '+stage.tab_label+' Markdown');exportSectionJson.onclick=()=>window.downloadJourneyFile(JSON.stringify(window.getJourneyExport(D,stage.stage_id),null,2),stage.stage_id+'-object-model.json','application/json');exportSectionMd.onclick=()=>window.downloadJourneyFile(window.journeyMarkdown(D,stage.stage_id),stage.stage_id+'-object-guide.md','text/markdown');sectionExports.append(exportSectionJson,document.createTextNode(' · '),exportSectionMd);aside.append(sectionExports);
 const mapDetails=el('details','map-details');mapDetails.append(el('summary',null,'Data model: '+stage.tab_label));const mapTarget=el('div','map-shell');mapDetails.append(mapTarget);let built=false;mapDetails.addEventListener('toggle',()=>{if(mapDetails.open&&!built){renderMap(stage,objects,mapTarget);built=true;}});mapDetails.id='model-'+stage.stage_id;
 const backToObjects=el('button','text-link back-objects','Back to objects ↑');backToObjects.onclick=()=>section.scrollIntoView({block:'start'});mapDetails.append(backToObjects);
 const pager=el('nav','stage-pager');pager.setAttribute('aria-label','Journey navigation');
 for(const [delta,label] of [[-1,'Previous'],[1,'Next']]){const neighbor=D.stages[stageNumber-1+delta];if(!neighbor)continue;const a=el('a',delta<0?'previous-stage':'next-stage');a.href='#area-'+neighbor.stage_id;a.append(el('span',null,label),el('strong',null,neighbor.tab_label));a.onclick=e=>{e.preventDefault();selectedStage=neighbor.stage_id;search();syncUrl();document.getElementById('area-'+selectedStage).scrollIntoView({block:'start'});};pager.append(a);}

 const openModel=el('button','btn model-jump','Explore the data model');openModel.type='button';openModel.onclick=()=>{mapDetails.open=true;mapDetails.scrollIntoView({block:'start'});};aside.insertBefore(openModel,sectionExports);
 panel.append(aside,inventory);section.append(panel,pager,mapDetails);
 const groups=new Map();objects.forEach(o=>{const info=o.stage_details[stage.stage_id],name=info.subcategory;if(!groups.has(name))groups.set(name,[]);groups.get(name).push(o);});const groupNodes=[];
 [...groups.keys()].sort((a,b)=>(stage.subcategory_order[a]??99)-(stage.subcategory_order[b]??99)||a.localeCompare(b)).forEach(name=>{
  const g=el('section','group'),head=el('div','group-head');head.append(el('h3',null,name),el('span',null,String(groups.get(name).length)));g.append(head);const list=el('ul','records'),nodes=[];
  groups.get(name).sort((a,b)=>{const x=a.stage_details[stage.stage_id],y=b.stage_details[stage.stage_id];return Math.round(x.position*2)-Math.round(y.position*2)||y.priority-x.priority||a.name.localeCompare(b.name);}).forEach(o=>{
   const li=el('li','record');li.id='object-'+o.row_id;const left=el('div','rec-id');left.append(el('strong','rec-name',o.name));
   if(o.api){let a;try{const u=new URL(o.source);if(u.protocol==='https:'){a=el('a','api-link',o.api+' ↗');a.href=u.href;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',o.api+' documentation (opens a new tab)');}}catch{}left.append(a||el('code',null,o.api));}
   const tags=el('div','tags');tags.append(el('span','tag '+(o.scope==='Main'?'core':'supporting'),o.scope));if(o.classification==='Custom / packaged')tags.append(el('span','tag custom','Custom'));else if(o.classification==='External record')tags.append(el('span','tag','Outside Salesforce'));else if(o.classification==='Change event (not record)')tags.append(el('span','tag','Change event'));left.append(tags);
   const body=el('div','rec-body');body.append(el('p','meaning',o.meaning));const ex=el('p','example');ex.append(el('span','label','Example'),document.createTextNode(o.example));body.append(ex);li.append(left,body);list.append(li);
   const record={li,stageId:stage.stage_id,hay:[o.name,o.api,o.meaning,o.example,stage.tab_label,name].join(' ').toLowerCase()};rowNodes.push(record);nodes.push(record);
  });g.append(list);inventory.append(g);groupNodes.push({g,nodes});
 });$('catalogue').append(section);sections.push({section,nav,groupNodes,stage,inventory});
}
let viewMode=new URLSearchParams(location.search).get('view')==='all'?'all':'journey';
let selectedStage=stageById.has(location.hash.replace('#area-',''))?location.hash.replace('#area-',''):D.stages[0].stage_id;
function syncUrl(){const url=new URL(location.href);if(viewMode==='all')url.searchParams.set('view','all');else url.searchParams.delete('view');url.hash='area-'+selectedStage;history.replaceState(null,'',url);}
function search(){
 const terms=$('q').value.toLowerCase().trim().split(/\s+/).filter(Boolean);let n=0;
 rowNodes.forEach(r=>{r.li.hidden=(viewMode==='journey'&&r.stageId!==selectedStage)||!terms.every(t=>r.hay.includes(t));if(!r.li.hidden)n++;});
 sections.forEach(s=>{s.groupNodes.forEach(g=>g.g.hidden=g.nodes.every(r=>r.li.hidden));s.section.hidden=viewMode==='journey'?s.stage.stage_id!==selectedStage:s.groupNodes.every(g=>g.g.hidden);s.nav.hidden=viewMode==='all'&&s.section.hidden;s.nav.setAttribute('aria-current',s.stage.stage_id===selectedStage?'true':'false');});
 document.body.dataset.view=viewMode;
 $('view-journey').setAttribute('aria-pressed',String(viewMode==='journey'));$('view-all').setAttribute('aria-pressed',String(viewMode==='all'));
 $('directory').querySelector('strong').textContent=viewMode==='journey'?'Choose a journey':'Jump to an area';$('directory').setAttribute('aria-label',viewMode==='journey'?'Choose a journey':'Jump to an area');
 $('q').placeholder=viewMode==='journey'?'Search within '+stageById.get(selectedStage).tab_label:'Search all objects, API names and journey areas';
 $('clear-search').hidden=!terms.length;$('no-results').hidden=!!n;
 $('no-results').textContent=viewMode==='journey'?'No matching objects in this journey. ':'No matching objects. Try a different term.';
 if(viewMode==='journey'&&!n){const all=el('button','text-link','Search all objects');all.onclick=()=>{viewMode='all';search();syncUrl();};$('no-results').append(all);}
 const active=sections.find(s=>s.stage.stage_id===selectedStage);if(viewMode==='journey'&&active)active.inventory.prepend($('no-results'));else $('catalogue').prepend($('no-results'));

 $('status').textContent=terms.length?`${n} matching objects${viewMode==='journey'?' in '+stageById.get(selectedStage).tab_label:' across all journeys'}.`:viewMode==='journey'?`${n} objects in ${stageById.get(selectedStage).tab_label}. Select a journey or explore its data model below.`:'All 186 objects shown once, grouped by journey and purpose.';
}
for(const s of sections)s.nav.addEventListener('click',e=>{e.preventDefault();selectedStage=s.stage.stage_id;search();syncUrl();s.section.scrollIntoView({block:'start'});});
for(const [id,mode]of [['view-journey','journey'],['view-all','all']])$(id).onclick=()=>{viewMode=mode;search();syncUrl();};
window.addEventListener('hashchange',()=>{const id=location.hash.replace('#area-','');if(stageById.has(id)){selectedStage=id;search();}});
$('q').addEventListener('input',search);$('clear-search').onclick=()=>{$('q').value='';search();$('q').focus();};search();
function renderMap(stage,objects,root){
 window.renderJourneyERD(stage.stage_id,root).catch(()=>{});
}
})();
