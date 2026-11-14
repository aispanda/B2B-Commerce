(function(){
'use strict';
window.downloadJourneyFile=function(text,name,type){const url=URL.createObjectURL(new Blob([text],{type:type+';charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);};
window.getJourneyExport=function(data,stageId){
 const diagrams=(stageId?[stageId]:data.stages.map(s=>s.stage_id)).map(id=>window.buildJourneyDiagram(data,id));
 for(const diagram of diagrams)diagram.presentation={objectName:true,linkedApiName:true,fieldList:false,roleLabel:false,connectorDirection:'Referenced object to referencing object',multipleReferences:'Combined by object pair; cardinality end symbols appear only when all included references agree.'};
 const diagram=diagrams[0];
 if(!stageId)return {...data,diagrams};
 const stage=data.stages.find(s=>s.stage_id===stageId);if(!stage)throw Error('Unknown journey area');
 const objects=data.objects.filter(o=>o.primary_stage===stageId),ids=new Set(objects.map(o=>o.api));
 return {schemaVersion:data.schemaVersion,sourceWorkbook:data.sourceWorkbook,exportedOn:data.exportedOn,stage,objects,relationships:data.relationships.edges.filter(e=>e.stage===stageId&&ids.has(e.from)&&ids.has(e.to)),...(diagram?{diagram}:{})};
};
window.journeyMarkdown=function(data,stageId){
 const stages=stageId?data.stages.filter(s=>s.stage_id===stageId):data.stages;
 const lines=['# '+(stageId?stages[0].tab_label:'Salesforce Commerce object guide'),'','[Source workbook]('+data.sourceWorkbook+')','', 'Snapshot: '+data.exportedOn,''];
 for(const stage of stages){
  const objects=data.objects.filter(o=>o.primary_stage===stage.stage_id);
  lines.push('## '+stage.tab_label,'',stage.title,'',stage.story,'');
  if(stage.connection)lines.push('### How the records connect','',stage.connection,'');
  const groups=[...new Set(objects.map(o=>o.stage_details[stage.stage_id].subcategory))].sort((a,b)=>(stage.subcategory_order[a]??99)-(stage.subcategory_order[b]??99)||a.localeCompare(b));
  for(const group of groups){lines.push('### '+group,'');for(const o of objects.filter(o=>o.stage_details[stage.stage_id].subcategory===group).sort((a,b)=>Math.round(a.stage_details[stage.stage_id].position*2)-Math.round(b.stage_details[stage.stage_id].position*2)||b.stage_details[stage.stage_id].priority-a.stage_details[stage.stage_id].priority||a.name.localeCompare(b.name))){lines.push('#### '+o.name,'');if(o.api)lines.push(o.source?'[`'+o.api+'`]('+o.source+')':'`'+o.api+'`','');if(o.classification)lines.push('**Object type:** '+o.classification,'');lines.push(o.meaning,'','**Example:** '+o.example,'');}}
  const pairs=new Map();for(const e of data.relationships.edges.filter(e=>e.stage===stage.stage_id)){const k=e.from+'|'+e.to;pairs.set(k,{from:e.from,to:e.to,count:(pairs.get(k)?.count||0)+1});}
  if(pairs.size){lines.push('### Object relationships','','Each row points from the referencing object to the referenced object.','','| Referencing object | Referenced object | References |','| --- | --- | --- |');for(const e of pairs.values())lines.push('| `'+e.from+'` | `'+e.to+'` | '+e.count+' |');lines.push('');}
 }
 lines.push('Experimental. Please refer to the original documentation.','');return lines.join('\n');
};
})();
