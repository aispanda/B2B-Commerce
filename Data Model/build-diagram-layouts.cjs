// Rebuild diagram geometry from the canonical workbook export; content stays in journey-data.
const fs=require('fs'),path=require('path'),ELK=require('./vendor/elk.bundled.js');
(async()=>{const data=JSON.parse(fs.readFileSync(path.join(__dirname,'journey-data.json'))),layouts={};
for(const stage of data.stages.filter(s=>s.stage_id!=='access')){
 const objects=data.objects.filter(o=>o.primary_stage===stage.stage_id&&o.api),ids=new Set(objects.map(o=>o.api)),pairs=new Map();
 for(const e of data.relationships.edges.filter(e=>e.stage===stage.stage_id&&ids.has(e.from)&&ids.has(e.to))){const k=e.to+'|'+e.from;if(!pairs.has(k))pairs.set(k,{id:'e'+pairs.size,sources:[e.to],targets:[e.from]});}
 const graph=await new ELK().layout({id:stage.stage_id,layoutOptions:{'elk.algorithm':'layered','elk.direction':'RIGHT','elk.edgeRouting':'ORTHOGONAL','elk.spacing.nodeNode':'40','elk.layered.spacing.nodeNodeBetweenLayers':'75','elk.layered.spacing.edgeNodeBetweenLayers':'22','elk.spacing.edgeNode':'20','elk.spacing.edgeEdge':'14','elk.padding':'[top=24,left=24,bottom=24,right=24]','elk.layered.nodePlacement.strategy':'NETWORK_SIMPLEX','elk.layered.crossingMinimization.strategy':'LAYER_SWEEP','elk.aspectRatio':'1.8','elk.randomSeed':'1'},children:objects.map(o=>({id:o.api,width:258,height:88})),edges:[...pairs.values()]});
 layouts[stage.stage_id]={width:graph.width,height:graph.height,children:graph.children.map(({id,x,y,width,height})=>({id,x,y,width,height})),edges:graph.edges.map(({id,sections})=>({id,sections}))};console.log(stage.stage_id,graph.width,graph.height,objects.length,pairs.size);
}
fs.writeFileSync(path.join(__dirname,'diagram-layouts.json'),JSON.stringify(layouts,null,2)+'\n');fs.writeFileSync(path.join(__dirname,'diagram-layouts.js'),'window.JOURNEY_LAYOUTS='+JSON.stringify(layouts)+';\n');
})().catch(e=>{console.error(e);process.exit(1)});
