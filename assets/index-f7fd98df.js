import{aT as E,d as Q,t as m,c as ve,ai as ue,o as S,a as C,w as l,H as e,e as t,C as K,aM as M,F as q,aU as R,z as W,a1 as B,B as ye,aV as z,am as be,a2 as se,a3 as oe,a$ as re,b0 as de,E as Ve,a_ as ke,a4 as ie,Y as Ie,aX as Ae,aW as Ue,S as he,ae as xe,a5 as Ce,y as Y,D as Z,aZ as we}from"./index-8907af52.js";import{b as Ne,E as pe,a as Pe}from"./el-pagination-4fec3f7f.js";import{E as ee,b as le,a as Le}from"./el-message-d690a849.js";import"./el-tooltip-4ed993c7.js";import{E as ae}from"./el-button-6910932e.js";import"./el-icon-bff7b630.js";const ze=(y,V,b)=>E.get(`/admin/product/${y}/${V}?category3Id=${b}`),te=()=>E.get("/admin/product/baseTrademark/getTrademarkList"),ce=y=>E.get("/admin/product/spuImageList/"+y),me=y=>E.get("/admin/product/spuSaleAttrList/"+y),ne=()=>E.get("/admin/product/baseSaleAttrList"),Ee=y=>y.id?E.post("/admin/product/updateSpuInfo",y):E.post("/admin/product/saveSpuInfo",y),$e=y=>E.post("/admin/product/saveSkuInfo",y),De=y=>E.get("/admin/product/findBySpuId/"+y),Ke=["src"],qe=Q({__name:"spuForm",emits:["changeScene"],setup(y,{expose:V,emit:b}){let d=m("");const U=()=>{b("changeScene",{flag:0,params:"update"})};let h=m([]),k=m([]),o=m([]),$=m([]),w=m(!1),N=m(""),r=m({category3Id:"",spuName:"",description:"",tmId:"",spuImageList:[],spuSaleAttrList:[]}),x=m([]);const i=async n=>{r.value=n;let a=await te(),c=await ce(n.id),A=await me(n.id),F=await ne();h.value=a.data,k.value=c.data.map(L=>({name:L.imgName,url:L.imgUrl})),o.value=A.data,$.value=F.data},p=n=>{N.value=n.url,w.value=!0},_=()=>{},I=n=>n.type==="image/png"||n.type==="image/jpeg"||n.type==="image/gif"?n.size/1024/1024<3?!0:(z({type:"error",message:"上传文件务必小于3M"}),!1):(z({type:"error",message:"上传文件务必PNG|JPG|GIF"}),!1);let P=ve(()=>$.value.filter(a=>o.value.every(c=>a.name!==c.saleAttrName)));const T=()=>{const[n,a]=d.value.split(":");let c={baseSaleAttrId:n,saleAttrName:a,spuSaleAttrValueList:[]};o.value.push(c),d.value=""},f=(n,a)=>{n.flag=!0,n.saleAttrValue="",be(()=>{x.value[a].focus()})},g=n=>{const{baseSaleAttrId:a,saleAttrValue:c}=n;let A={baseSaleAttrId:a,saleAttrValueName:c};if((c==null?void 0:c.trim())===""){z({type:"error",message:"属性值不能为空的"});return}if(n.spuSaleAttrValueList.find(L=>L.saleAttrValueName===c)){z({type:"error",message:"属性值重复"});return}n.spuSaleAttrValueList.push(A),n.flag=!1},G=async()=>{r.value.spuImageList=k.value.map(a=>({imgName:a.name,imgUrl:a.response&&a.response.data||a.url})),r.value.spuSaleAttrList=o.value,(await Ee(r.value)).code===200&&(z({type:"success",message:r.value.id?"更新成功":"添加成功"}),b("changeScene",{flag:0,params:r.value.id?"update":"add"}))};return V({initHasSpuData:i,initAddSpu:async n=>{Object.assign(r.value,{category3Id:"",spuName:"",description:"",tmId:"",spuImageList:[],spuSaleAttrList:[]}),k.value=[],o.value=[],d.value="",r.value.category3Id=n;let a=await te(),c=await ne();h.value=a.data,$.value=c.data}}),(n,a)=>{const c=se,A=oe,F=re,L=de,v=ue("Plus"),X=Ve,O=Ne,_e=pe,j=ae,J=ee,fe=ke,ge=le,Se=ie;return S(),C(Se,{"label-width":"100px"},{default:l(()=>[e(A,{label:"SPU名称"},{default:l(()=>[e(c,{placeholder:"请你输入SPU名称",modelValue:t(r).spuName,"onUpdate:modelValue":a[0]||(a[0]=s=>t(r).spuName=s)},null,8,["modelValue"])]),_:1}),e(A,{label:"SPU品牌"},{default:l(()=>[e(L,{modelValue:t(r).tmId,"onUpdate:modelValue":a[1]||(a[1]=s=>t(r).tmId=s)},{default:l(()=>[(S(!0),K(q,null,M(t(h),(s,H)=>(S(),C(F,{label:s.tmName,value:s.id},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1}),e(A,{label:"SPU描述"},{default:l(()=>[e(c,{type:"textarea",placeholder:"请你输入SPU描述",modelValue:t(r).description,"onUpdate:modelValue":a[2]||(a[2]=s=>t(r).description=s)},null,8,["modelValue"])]),_:1}),e(A,{label:"SPU图标"},{default:l(()=>[e(O,{"file-list":t(k),"onUpdate:fileList":a[3]||(a[3]=s=>R(k)?k.value=s:k=s),action:"/api/admin/product/fileUpload","list-type":"picture-card","on-preview":p,"on-remove":_,"before-upload":I},{default:l(()=>[e(X,null,{default:l(()=>[e(v)]),_:1})]),_:1},8,["file-list"]),e(_e,{modelValue:t(w),"onUpdate:modelValue":a[4]||(a[4]=s=>R(w)?w.value=s:w=s)},{default:l(()=>[W("img",{"w-full":"",src:t(N),alt:"Preview Image",style:{width:"100%",height:"100%"}},null,8,Ke)]),_:1},8,["modelValue"])]),_:1}),e(A,{label:"SPU销售属性"},{default:l(()=>[e(L,{modelValue:t(d),"onUpdate:modelValue":a[5]||(a[5]=s=>R(d)?d.value=s:d=s),placeholder:t(P).length?`还未选择${t(P).length}个`:"暂无数据可选择"},{default:l(()=>[(S(!0),K(q,null,M(t(P),(s,H)=>(S(),C(F,{label:s.name,key:s.id,value:`${s.id}:${s.name}`},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),e(j,{style:{"margin-left":"10px"},type:"primary",size:"default",icon:"Plus",disabled:!t(d),onClick:T},{default:l(()=>[B(" 添加属性 ")]),_:1},8,["disabled"]),e(ge,{border:"",style:{margin:"10px 0"},data:t(o)},{default:l(()=>[e(J,{label:"序号",type:"index",align:"center",width:"80px"}),e(J,{label:"销售属性名字",width:"120px",prop:"saleAttrName"}),e(J,{label:"销售属性值"},{default:l(({row:s,$index:H})=>[(S(!0),K(q,null,M(s.spuSaleAttrValueList,(D,He)=>(S(),C(fe,{key:s.id,class:"mx-1",closable:"",style:{margin:"0 8px"},onClose:Me=>s.spuSaleAttrValueList.splice(H,1)},{default:l(()=>[B(ye(D.saleAttrValueName),1)]),_:2},1032,["onClose"]))),128)),s.flag===!0?(S(),C(c,{key:0,ref:D=>t(x)[H]=D,modelValue:s.saleAttrValue,"onUpdate:modelValue":D=>s.saleAttrValue=D,placeholder:"请你输入属性值",size:"small",style:{width:"100px"},onBlur:D=>g(s)},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(S(),C(j,{key:1,size:"small",icon:"Plus",onClick:D=>f(s,H)},null,8,["onClick"]))]),_:1}),e(J,{label:"操作",width:"120px"},{default:l(({row:s,$index:H})=>[e(j,{type:"danger",size:"small",icon:"Delete",onClick:D=>t(o).splice(H,1)},null,8,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(A,null,{default:l(()=>[e(j,{type:"primary",size:"default",onClick:G,disabled:!(t(o).length>0)},{default:l(()=>[B(" 保存 ")]),_:1},8,["disabled"]),e(j,{size:"default",onClick:U},{default:l(()=>[B("取消")]),_:1})]),_:1})]),_:1})}}}),Be=["src"],Te=Q({__name:"skuForm",emits:["changeScene"],setup(y,{expose:V,emit:b}){let d=m([]),U=m([]),h=m([]),k=m(),o=Ie({category3Id:"",spuId:"",tmId:"",skuName:"",price:"",weight:"",skuDesc:"",skuAttrValueList:[],skuSaleAttrValueList:[],skuDefaultImg:""});const $=()=>{b("changeScene",{flag:0,params:""})},w=async(x,i,p)=>{o.category3Id=p.category3Id,o.spuId=p.id,o.tmId=p.tmId;let _=await Ae(x,i,p.category3Id),I=await me(p.id),P=await ce(p.id);d.value=_.data,U.value=I.data,h.value=P.data},N=x=>{h.value.forEach(i=>{k.value.toggleRowSelection(i,!1)}),k.value.toggleRowSelection(x,!0),o.skuDefaultImg=x.imgUrl},r=async()=>{o.skuAttrValueList=d.value.reduce((i,p)=>{if(p.attrIdAndValueId){let[_,I]=p.attrIdAndValueId.split(":");i.push({attrId:_,valueId:I})}return i},[]),o.skuSaleAttrValueList=U.value.reduce((i,p)=>{if(p.saleIdAndValueId){let[_,I]=p.saleIdAndValueId.split(":");i.push({saleAttrId:_,saleAttrValueId:I})}return i},[]),(await $e(o)).code===200?(z({type:"success",message:"添加SKU成功"}),b("changeScene",{flag:0,params:""})):z({type:"error",message:"添加SKU失败"})};return V({initSkuData:w}),(x,i)=>{const p=se,_=oe,I=re,P=de,T=ie,f=ee,g=ae,G=le;return S(),C(T,{"label-width":"100px"},{default:l(()=>[e(_,{label:"SKU名称"},{default:l(()=>[e(p,{placeholder:"SKU名称",modelValue:t(o).skuName,"onUpdate:modelValue":i[0]||(i[0]=u=>t(o).skuName=u)},null,8,["modelValue"])]),_:1}),e(_,{label:"价格(元)"},{default:l(()=>[e(p,{placeholder:"价格(元)",type:"number",modelValue:t(o).price,"onUpdate:modelValue":i[1]||(i[1]=u=>t(o).price=u)},null,8,["modelValue"])]),_:1}),e(_,{label:"重量(g)"},{default:l(()=>[e(p,{placeholder:"重量(g)",type:"number",modelValue:t(o).weight,"onUpdate:modelValue":i[2]||(i[2]=u=>t(o).weight=u)},null,8,["modelValue"])]),_:1}),e(_,{label:"SKU描述"},{default:l(()=>[e(p,{placeholder:"SKU描述",type:"textarea",modelValue:t(o).skuDesc,"onUpdate:modelValue":i[3]||(i[3]=u=>t(o).skuDesc=u)},null,8,["modelValue"])]),_:1}),e(_,{label:"平台属性"},{default:l(()=>[e(T,{inline:!0,"label-width":"100px"},{default:l(()=>[(S(!0),K(q,null,M(t(d),(u,n)=>(S(),C(_,{label:u.attrName,key:u.id},{default:l(()=>[e(P,{modelValue:u.attrIdAndValueId,"onUpdate:modelValue":a=>u.attrIdAndValueId=a},{default:l(()=>[(S(!0),K(q,null,M(u.attrValueList,(a,c)=>(S(),C(I,{value:`${u.id}:${a.id}`,label:a.valueName,key:a.id},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(_,{label:"销售属性"},{default:l(()=>[e(T,{inline:!0},{default:l(()=>[(S(!0),K(q,null,M(t(U),(u,n)=>(S(),C(_,{label:u.saleAttrName,key:u.id},{default:l(()=>[e(P,{modelValue:u.saleIdAndValueId,"onUpdate:modelValue":a=>u.saleIdAndValueId=a},{default:l(()=>[(S(!0),K(q,null,M(u.spuSaleAttrValueList,(a,c)=>(S(),C(I,{value:`${u.id}:${a.id}`,label:a.saleAttrValueName,key:a.id},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(_,{label:"图片名称"},{default:l(()=>[e(G,{border:"",data:t(h),ref_key:"table",ref:k},{default:l(()=>[e(f,{type:"selection",width:"80px",align:"center"}),e(f,{label:"图片"},{default:l(({row:u,$index:n})=>[W("img",{src:u.imgUrl,alt:"",style:{width:"100px",height:"100px"}},null,8,Be)]),_:1}),e(f,{label:"名称",prop:"imgName"}),e(f,{label:"操作"},{default:l(({row:u,$index:n})=>[e(g,{type:"primary",size:"small",onClick:a=>N(u)},{default:l(()=>[B(" 设置默认 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(_,null,{default:l(()=>[e(g,{type:"primary",size:"default",onClick:r},{default:l(()=>[B("保存")]),_:1}),e(g,{size:"default",onClick:$},{default:l(()=>[B("取消")]),_:1})]),_:1})]),_:1})}}}),Fe=["src"],Xe=Q({__name:"index",setup(y){let V=Ue(),b=m(0),d=m(1),U=m(3),h=m([]),k=m(0),o=m(),$=m(),w=m([]),N=m(!1);he(()=>V.c3Id,()=>{V.c3Id&&r()});const r=async(f=1)=>{d.value=f;let g=await ze(d.value,U.value,V.c3Id);g.code===200&&(h.value=g.data.records,k.value=g.data.total)},x=()=>{r()},i=()=>{b.value=1,o.value.initAddSpu(V.c3Id)},p=f=>{b.value=f.flag,f.params=="update"?r(d.value):r()},_=f=>{b.value=1,o.value.initHasSpuData(f)},I=f=>{b.value=2,$.value.initSkuData(V.c1Id,V.c2Id,f)},P=async f=>{let g=await De(f.id);g.code===200&&(w.value=g.data,N.value=!0)},T=async f=>{(await we(f.id)).code===200?(z({type:"success",message:"删除成功"}),r(h.value.length>1?d.value:d.value-1)):z({type:"error",message:"删除失败"})};return xe(()=>{V.$reset()}),(f,g)=>{const G=ue("def-category"),u=ae,n=ee,a=Le,c=le,A=Pe,F=pe,L=Ce;return S(),K(q,null,[e(G,{scene:t(b)},null,8,["scene"]),e(L,{style:{margin:"10px 0"}},{default:l(()=>[Y(W("div",null,[e(u,{type:"primary",size:"default",icon:"Plus",disabled:!t(V).c3Id,onClick:i},{default:l(()=>[B(" 添加SPU ")]),_:1},8,["disabled"]),e(c,{style:{margin:"10px 0"},border:"",data:t(h)},{default:l(()=>[e(n,{label:"序号",align:"center",width:"80px",type:"index"}),e(n,{label:"SPU名称",prop:"spuName"}),e(n,{label:"SPU描述",prop:"description","show-overflow-tooltip":""}),e(n,{label:"SPU操作"},{default:l(({row:v,$index:X})=>[e(u,{icon:"Plus",title:"添加SKU",size:"small",onClick:O=>I(v)},null,8,["onClick"]),e(u,{type:"primary",icon:"Edit",title:"修改SPU",size:"small",onClick:O=>_(v)},null,8,["onClick"]),e(u,{type:"info",icon:"View",title:"查看SKU列表",size:"small",onClick:O=>P(v)},null,8,["onClick"]),e(a,{title:`你确定删除${v.spuName}?`,width:"200px",onConfirm:O=>T(v)},{reference:l(()=>[e(u,{type:"danger",icon:"Delete",title:"删除SPU",size:"small"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),e(A,{"current-page":t(d),"onUpdate:currentPage":g[0]||(g[0]=v=>R(d)?d.value=v:d=v),"page-size":t(U),"onUpdate:pageSize":g[1]||(g[1]=v=>R(U)?U.value=v:U=v),"page-sizes":[3,5,7,9],background:!0,layout:"prev, pager, next, jumper, ->, sizes, total",total:t(k),onCurrentChange:r,onSizeChange:x},null,8,["current-page","page-size","total"])],512),[[Z,t(b)===0]]),Y(e(qe,{ref_key:"spu",ref:o,onChangeScene:p},null,512),[[Z,t(b)===1]]),Y(e(Te,{ref_key:"sku",ref:$,onChangeScene:p},null,512),[[Z,t(b)===2]]),e(F,{modelValue:t(N),"onUpdate:modelValue":g[2]||(g[2]=v=>R(N)?N.value=v:N=v),title:"SKU列表"},{default:l(()=>[e(c,{data:t(w)},{default:l(()=>[e(n,{label:"SKU名字",prop:"skuName"}),e(n,{label:"SKU价格",prop:"price"}),e(n,{label:"SKU重量",prop:"weight"}),e(n,{label:"SKU图片"},{default:l(({row:v,$index:X})=>[W("img",{src:v.skuDefaultImg,alt:"",style:{width:"100px",height:"100px"}},null,8,Fe)]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"])]),_:1})],64)}}});export{Xe as default};
