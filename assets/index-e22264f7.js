import{aQ as v,a as Q,r as p,Q as J,o as W,ad as X,f as b,s as N,y as e,w as r,k as i,aR as k,F as Y,Z,V as x,j as K,g as ee,ah as T,aS as c,W as ae,X as te,E as le,Y as oe,M as re}from"./index-cdf0fb31.js";import{E as se}from"./el-dialog-f205955d.js";import{E as ne}from"./el-pagination-d75b527b.js";import{E as ie}from"./el-progress-321835e4.js";/* empty css                */import{E as de,a as me,b as ue}from"./el-message-a38aa0d2.js";import"./el-tooltip-4ed993c7.js";import{E as pe}from"./el-button-a6fe75ce.js";import"./refs-988f686e.js";import"./vnode-b6cdcf35.js";const ce=(d,s)=>v.get(`/admin/product/baseTrademark/${d}/${s}`),_e=d=>d.id?v.put("/admin/product/baseTrademark/update",d):v.post("/admin/product/baseTrademark/save",d),ge=d=>v.delete("/admin/product/baseTrademark/remove/"+d),fe=["src"],ve=["src"],ye=Q({__name:"index",setup(d){let s=p(1),_=p(3),E=p(0),m=p(!1),y=p([]),o=J({tmName:"",logoUrl:""}),u=p();const g=async(t=1)=>{s.value=t;let a=await ce(s.value,_.value);a.code===200&&(E.value=a.data.total,y.value=a.data.records)};W(()=>{g()});const C=()=>{g()},V=()=>{m.value=!0,o.id=0,o.tmName="",o.logoUrl="",T(()=>{u.value.clearValidate("tmName"),u.value.clearValidate("logoUrl")})},h=t=>{T(()=>{u.value.clearValidate("tmName"),u.value.clearValidate("logoUrl")}),m.value=!0,Object.assign(o,t)},z=()=>{m.value=!1},w=async()=>{await u.value.validate(),(await _e(o)).code===200?(m.value=!1,c({type:"success",message:o.id?"修改品牌成功":"添加品牌成功"}),g(o.id?s.value:1)):c({type:"error",message:o.id?"修改品牌失败":"添加品牌失败"})},M=t=>{if(t.type==="image/png"||t.type==="image/jpeg"||t.type==="image/gif"){if(t.size/1024/1024<4)return!0;c({type:"error",message:"上传的文件大小应小于4M"})}else return c({type:"error",message:"上传的文件类型必须是PNG|JPG|GIF"}),!1},P=(t,a)=>{o.logoUrl=t.data,u.value.clearValidate("logoUrl")},q={tmName:[{required:!0,trigger:"blur",validator:(t,a,n)=>{a.trim().length>=2?n():n(new Error("品牌名称位数大于等于两位"))}}],logoUrl:[{required:!0,trigger:"change",validator:(t,a,n)=>{a?n():n(new Error("Logo的图片务必上传"))}}]},I=async t=>{(await ge(t)).code===200?(c({type:"success",message:"删除品牌成功"}),g(y.value.length>1?s.value:s.value-1)):c({type:"error",message:"删除品牌失败"})};return(t,a)=>{const n=pe,f=de,L=me,j=ue,A=ne,F=Z,G=ae,U=te,O=X("Plus"),R=le,S=ie,$=oe,B=se;return b(),N(Y,null,[e(F,{class:"box-card"},{default:r(()=>[e(n,{type:"primary",size:"default",icon:"Plus",onClick:V},{default:r(()=>[x(" 添加品牌 ")]),_:1}),e(j,{style:{margin:"10px 0"},border:"",data:i(y)},{default:r(()=>[e(f,{label:"序号",width:"80px",align:"center",type:"index"}),e(f,{label:"品牌名称",prop:"tmName"}),e(f,{label:"品牌LOGO"},{default:r(({row:l,$index:D})=>[K("img",{src:l.logoUrl,alt:"图片丢失了~",style:{width:"100px",height:"100px"}},null,8,fe)]),_:1}),e(f,{label:"品牌操作"},{default:r(({row:l,$index:D})=>[e(n,{type:"primary",size:"small",icon:"Edit",onClick:H=>h(l)},null,8,["onClick"]),e(L,{title:`您确定删除${l.tmName}`,width:"250px",icon:"delete",onConfirm:H=>I(l.id)},{reference:r(()=>[e(n,{type:"danger",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),e(A,{"current-page":i(s),"onUpdate:currentPage":a[0]||(a[0]=l=>k(s)?s.value=l:s=l),"page-size":i(_),"onUpdate:pageSize":a[1]||(a[1]=l=>k(_)?_.value=l:_=l),"page-sizes":[3,5,7,9],background:!0,layout:"prev, pager, next, jumper, ->, sizes, total",total:i(E),onCurrentChange:g,onSizeChange:C},null,8,["current-page","page-size","total"])]),_:1}),e(B,{modelValue:i(m),"onUpdate:modelValue":a[3]||(a[3]=l=>k(m)?m.value=l:m=l),title:i(o).id?"修改品牌":"添加品牌"},{footer:r(()=>[e(n,{type:"primary",size:"default",onClick:z},{default:r(()=>[x("取消")]),_:1}),e(n,{type:"primary",size:"default",onClick:w},{default:r(()=>[x("确定")]),_:1})]),default:r(()=>[e($,{style:{width:"90%"},model:i(o),rules:q,ref_key:"formRef",ref:u},{default:r(()=>[e(U,{label:"品牌名称","label-width":"100px",prop:"tmName"},{default:r(()=>[e(G,{placeholder:"请您输入品牌名称",modelValue:i(o).tmName,"onUpdate:modelValue":a[2]||(a[2]=l=>i(o).tmName=l)},null,8,["modelValue"])]),_:1}),e(U,{label:"品牌Logo","label-width":"100px",prop:"logoUrl"},{default:r(()=>[e(S,{class:"avatar-uploader",action:"/api/admin/product/fileUpload","show-file-list":!1,"on-success":P,"before-upload":M},{default:r(()=>[i(o).logoUrl?(b(),N("img",{key:0,src:i(o).logoUrl,class:"avatar"},null,8,ve)):(b(),ee(R,{key:1,class:"avatar-uploader-icon"},{default:r(()=>[e(O)]),_:1}))]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}});const Me=re(ye,[["__scopeId","data-v-b30a8bee"]]);export{Me as default};
