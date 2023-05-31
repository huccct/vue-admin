import{aR as h,a as ie,r as i,Q as me,o as pe,f as E,s as F,y as l,w as t,k as s,aS as C,F as $,Z as ce,V as m,j as S,t as D,g as M,p as fe,aL as ve,aj as B,aT as U,W as _e,X as ge,Y as be,$ as ye,a0 as we,M as Ve}from"./index-341eadb9.js";import{E as Ce,a as he,b as ke,c as Ue}from"./el-table-column-c2c9f3da.js";import{E as xe}from"./el-drawer-2071fea2.js";import"./el-overlay-687f3a8b.js";import{E as Ee}from"./el-pagination-43fdf4c3.js";import"./el-tooltip-4ed993c7.js";import{E as Se}from"./el-message-1dbf0e1b.js";import{E as ze}from"./el-button-fca9db96.js";import{u as Re}from"./setting-f870625a.js";import"./vnode-9e776ec0.js";const Ie=(n,u,_)=>h.get(`/admin/acl/user/${n}/${u}/?username=${_}`),Ne=n=>n.id?h.put("/admin/acl/user/update",n):h.post("/admin/acl/user/save",n),qe=n=>h.get("/admin/acl/user/toAssign/"+n),Ae=n=>h.post("/admin/acl/user/doAssignRole",n),Te=n=>h.delete("/admin/acl/user/remove/"+n),je=n=>h.delete("/admin/acl/user/batchRemove",{data:n}),Le=n=>(ye("data-v-75a757bd"),n=n(),we(),n),Pe={style:{flex:"auto"}},Oe=Le(()=>S("h4",null,"分配角色",-1)),Fe={style:{flex:"auto"}},$e=ie({__name:"index",setup(n){let u=i(1),_=i(5),q=i(0),x=i([]),f=i(!1),c=i(!1),k=i([]),g=i([]),r=me({username:"",name:"",password:""}),z=i([]);pe(()=>{w()});let b=i(),y=i(""),A=Re();const w=async(o=1)=>{u.value=o;let e=await Ie(u.value,_.value,y.value);e.code===200&&(q.value=e.data.total,x.value=e.data.records)},G=()=>{w()},H=()=>{f.value=!0,Object.assign(r,{id:0,username:"",name:"",password:""}),B(()=>{b.value.clearValidate("username"),b.value.clearValidate("name"),b.value.clearValidate("password")})},Q=o=>{f.value=!0,Object.assign(r,o),B(()=>{b.value.clearValidate("username"),b.value.clearValidate("name")})},W=async()=>{b.value.validate(),(await Ne(r)).code===200?(f.value=!1,U({type:"success",message:r.id?"更新成功":"添加成功"}),window.location.reload()):(f.value=!1,U({type:"error",message:r.id?"更新失败":"添加失败"}))},X=()=>{f.value=!1},Y={username:[{required:!0,trigger:"blur",validator:(o,e,d)=>{e.trim().length>=5?d():d(new Error("用户名字至少五位"))}}],name:[{required:!0,trigger:"blur",validator:(o,e,d)=>{e.trim().length>=5?d():d(new Error("用户昵称至少五位"))}}],password:[{required:!0,trigger:"blur",validator:(o,e,d)=>{e.trim().length>=5?d():d(new Error("用户密码至少六位"))}}]},Z=async o=>{c.value=!0,Object.assign(r,o);let e=await qe(r.id);e.code===200&&(k.value=e.data.allRolesList,g.value=e.data.assignRoles,c.value=!0)},R=i(!1),I=i(!0),J=o=>{g.value=o?k.value:[],I.value=!1},K=o=>{const e=o.length;R.value=e===k.value.length,I.value=e>0&&e<k.value.length},ee=async()=>{let o={userId:r.id,roleIdList:g.value.map(d=>d.id)};(await Ae(o)).code===200&&(U({type:"success",message:"分配职务成功"}),c.value=!1,w(u.value))},le=async o=>{(await Te(o)).code===200&&(U({type:"success",message:"删除成功"}),w(x.value.length>1?u.value:u.value-1))},ae=o=>{z.value=o},te=async()=>{let o=z.value.map(d=>d.id);(await je(o)).code===200&&(U({type:"success",message:"删除成功"}),w(x.value.length>1?u.value:u.value-1))},oe=()=>{w(),y.value=""},se=()=>{A.refsh=!A.refsh};return(o,e)=>{const d=_e,V=ge,p=ze,N=be,T=ce,v=Ce,re=Se,ne=he,de=Ee,j=xe,L=ke,ue=Ue;return E(),F($,null,[l(T,{style:{height:"80px"}},{default:t(()=>[l(N,{inline:!0,class:"form"},{default:t(()=>[l(V,{label:"用户名:"},{default:t(()=>[l(d,{placeholder:"请你输入搜索用户名",modelValue:s(y),"onUpdate:modelValue":e[0]||(e[0]=a=>C(y)?y.value=a:y=a)},null,8,["modelValue"])]),_:1}),l(V,null,{default:t(()=>[l(p,{type:"primary",size:"default",disabled:!s(y).length,onClick:oe},{default:t(()=>[m(" 搜索 ")]),_:1},8,["disabled"]),l(p,{size:"default",onClick:se},{default:t(()=>[m("重置")]),_:1})]),_:1})]),_:1})]),_:1}),l(T,{style:{margin:"10px 0"}},{default:t(()=>[l(p,{type:"primary",size:"default",onClick:H},{default:t(()=>[m(" 添加用户 ")]),_:1}),l(p,{type:"danger",size:"default",disabled:!s(z).length,onClick:te},{default:t(()=>[m(" 批量删除 ")]),_:1},8,["disabled"]),l(ne,{style:{margin:"10px 0"},border:"",data:s(x),onSelectionChange:ae},{default:t(()=>[l(v,{type:"selection",align:"center"}),l(v,{label:"#",align:"center",type:"index"}),l(v,{label:"id",align:"center",prop:"id"}),l(v,{label:"用户名字",align:"center",prop:"username","show-overflow-tooltip":""}),l(v,{label:"用户名称",align:"center",prop:"name","show-overflow-tooltip":""}),l(v,{label:"用户角色",align:"center",prop:"roleName","show-overflow-tooltip":""}),l(v,{label:"创建时间",align:"center",prop:"createTime","show-overflow-tooltip":""}),l(v,{label:"更新时间",align:"center",prop:"updateTime","show-overflow-tooltip":""}),l(v,{label:"操作",width:"300px",align:"center"},{default:t(({row:a,$index:P})=>[l(p,{size:"small",icon:"User",onClick:O=>Z(a)},{default:t(()=>[m(" 分配角色 ")]),_:2},1032,["onClick"]),l(p,{type:"primary",size:"small",icon:"Edit",onClick:O=>Q(a)},{default:t(()=>[m(" 编辑 ")]),_:2},1032,["onClick"]),l(re,{title:`你确定删除${a.username}`,width:"260px",onConfirm:O=>le(a.id)},{reference:t(()=>[l(p,{type:"danger",size:"small",icon:"Delete"},{default:t(()=>[m(" 删除 ")]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),l(de,{"current-page":s(u),"onUpdate:currentPage":e[1]||(e[1]=a=>C(u)?u.value=a:u=a),"page-size":s(_),"onUpdate:pageSize":e[2]||(e[2]=a=>C(_)?_.value=a:_=a),"page-sizes":[5,7,9,11],background:!0,layout:"prev, pager, next, jumper, -> , sizes, total",total:s(q),onCurrentChange:w,onSizeChange:G},null,8,["current-page","page-size","total"])]),_:1}),l(j,{modelValue:s(f),"onUpdate:modelValue":e[6]||(e[6]=a=>C(f)?f.value=a:f=a)},{header:t(()=>[S("h4",null,D(s(r).id?"更新用户":"添加用户"),1)]),default:t(()=>[l(N,{model:s(r),rules:Y,ref_key:"formRef",ref:b},{default:t(()=>[l(V,{label:"用户姓名",prop:"username"},{default:t(()=>[l(d,{placeholder:"请您输入用户姓名",modelValue:s(r).username,"onUpdate:modelValue":e[3]||(e[3]=a=>s(r).username=a)},null,8,["modelValue"])]),_:1}),l(V,{label:"用户昵称",prop:"name"},{default:t(()=>[l(d,{placeholder:"请您输入用户昵称",modelValue:s(r).name,"onUpdate:modelValue":e[4]||(e[4]=a=>s(r).name=a)},null,8,["modelValue"])]),_:1}),s(r).id?fe("",!0):(E(),M(V,{key:0,label:"用户密码",prop:"password"},{default:t(()=>[l(d,{placeholder:"请您输入用户密码",modelValue:s(r).password,"onUpdate:modelValue":e[5]||(e[5]=a=>s(r).password=a)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])]),footer:t(()=>[S("div",Pe,[l(p,{onClick:X},{default:t(()=>[m("取消")]),_:1}),l(p,{type:"primary",onClick:W},{default:t(()=>[m("确定")]),_:1})])]),_:1},8,["modelValue"]),l(j,{modelValue:s(c),"onUpdate:modelValue":e[11]||(e[11]=a=>C(c)?c.value=a:c=a)},{header:t(()=>[Oe]),default:t(()=>[l(N,null,{default:t(()=>[l(V,{label:"用户姓名"},{default:t(()=>[l(d,{modelValue:s(r).username,"onUpdate:modelValue":e[7]||(e[7]=a=>s(r).username=a),disabled:!0},null,8,["modelValue"])]),_:1}),l(V,{label:"职位列表"},{default:t(()=>[l(L,{modelValue:R.value,"onUpdate:modelValue":e[8]||(e[8]=a=>R.value=a),indeterminate:I.value,onChange:J},{default:t(()=>[m(" 全选 ")]),_:1},8,["modelValue","indeterminate"]),l(ue,{modelValue:s(g),"onUpdate:modelValue":e[9]||(e[9]=a=>C(g)?g.value=a:g=a),onChange:K},{default:t(()=>[(E(!0),F($,null,ve(s(k),(a,P)=>(E(),M(L,{key:P,label:a},{default:t(()=>[m(D(a.roleName),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),footer:t(()=>[S("div",Fe,[l(p,{onClick:e[10]||(e[10]=a=>C(c)?c.value=!1:c=!1)},{default:t(()=>[m("取消")]),_:1}),l(p,{type:"primary",onClick:ee},{default:t(()=>[m("确定")]),_:1})])]),_:1},8,["modelValue"])],64)}}});const ll=Ve($e,[["__scopeId","data-v-75a757bd"]]);export{ll as default};
