import{a as K,b0 as M,r as g,Q,L as R,a9 as W,ad as X,f as _,s as k,y as e,k as n,w as a,F as x,b1 as Y,Z,h as E,v as h,j as A,V as p,aK as G,g as I,t as z,ah as B,b2 as H,aS as f,b3 as ee,b4 as te,W as ae,X as le,Y as se}from"./index-cdf0fb31.js";import{E as re,a as ne,b as oe}from"./el-message-a38aa0d2.js";import"./el-tooltip-4ed993c7.js";import{E as ie}from"./el-button-a6fe75ce.js";const ce=["onClick"],ye=K({__name:"index",setup(de){let m=M(),v=g([]),c=g(0);g(!0);let t=Q({attrName:"",attrValueList:[],categoryId:"",categoryLevel:3}),b=g([]);R(()=>m.c3Id,()=>{v.value=[],m.c3Id&&V()});const V=async()=>{const{c1Id:s,c2Id:i,c3Id:y}=m;let r=await Y(s,i,y);r.code===200&&(v.value=r.data)},S=()=>{Object.assign(t,{attrName:"",attrValueList:[],categoryId:m.c3Id,categoryLevel:3}),c.value=1},$=s=>{c.value=1,Object.assign(t,JSON.parse(JSON.stringify(s)))},N=()=>{c.value=0},O=()=>{t.attrValueList.push({valueName:"",flag:!0}),B(()=>{b.value[t.attrValueList.length-1].focus()})},T=async()=>{(await H(t)).code===200?(c.value=0,f({type:"success",message:t.id?"修改成功":"添加成功"}),V()):f({type:"error",message:t.id?"修改失败":"添加失败"})},U=(s,i)=>{if(s.valueName.trim()===""){t.attrValueList.splice(i,1),f({type:"error",message:"属性值不能为空"});return}if(t.attrValueList.find(r=>{if(r!==s)return r.valueName===s.valueName})){t.attrValueList.splice(i,1),f({type:"error",message:"属性值不能重复"});return}s.flag=!1},D=(s,i)=>{s.flag=!0,B(()=>{b.value[i].focus()})},F=async s=>{(await ee(s)).code===200?(f({type:"success",message:"删除成功"}),V()):f({type:"error",message:"删除失败"})};return W(()=>{m.$reset()}),(s,i)=>{const y=X("def-category"),r=ie,d=re,P=te,j=ne,C=oe,L=ae,q=le,w=se,J=Z;return _(),k(x,null,[e(y,{scene:n(c)},null,8,["scene"]),e(J,{style:{margin:"10px 0"}},{default:a(()=>[E(A("div",null,[e(r,{type:"primary",size:"default",icon:"Plus",disabled:!n(m).c3Id,onClick:S},{default:a(()=>[p(" 添加平台属性 ")]),_:1},8,["disabled"]),e(C,{border:"",style:{margin:"10px 0"},data:n(v)},{default:a(()=>[e(d,{label:"序号",type:"index",align:"center",width:"80px"}),e(d,{label:"属性名称",prop:"attrName"}),e(d,{label:"属性值名称"},{default:a(({row:l,$index:u})=>[(_(!0),k(x,null,G(l.attrValueList,(o,ue)=>(_(),I(P,{style:{margin:"5px"},key:o.id},{default:a(()=>[p(z(o.valueName),1)]),_:2},1024))),128))]),_:1}),e(d,{label:"操作"},{default:a(({row:l,$index:u})=>[e(r,{type:"primary",size:"small",icon:"Edit",onClick:o=>$(l)},null,8,["onClick"]),e(j,{title:`你确定删除${l.attrName}?`,width:"200px",onConfirm:o=>F(l.id)},{reference:a(()=>[e(r,{type:"danger",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"])],512),[[h,n(c)===0]]),E(A("div",null,[e(w,{inline:!0},{default:a(()=>[e(q,{label:"属性名称"},{default:a(()=>[e(L,{placeholder:"请你输入属性名称",modelValue:n(t).attrName,"onUpdate:modelValue":i[0]||(i[0]=l=>n(t).attrName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{disabled:!n(t).attrName,type:"primary",size:"default",icon:"Plus",onClick:O},{default:a(()=>[p(" 添加属性值 ")]),_:1},8,["disabled"]),e(r,{size:"default",onClick:N},{default:a(()=>[p("取消")]),_:1}),e(C,{border:"",style:{margin:"10px 0"},data:n(t).attrValueList},{default:a(()=>[e(d,{label:"序号",width:"80px",type:"index",align:"center"}),e(d,{label:"属性值名称"},{default:a(({row:l,$index:u})=>[l.flag?(_(),I(L,{key:0,ref:o=>n(b)[u]=o,placeholder:"请你输入属性值名称",modelValue:l.valueName,"onUpdate:modelValue":o=>l.valueName=o,onBlur:o=>U(l,u)},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(_(),k("div",{key:1,onClick:o=>D(l,u)},z(l.valueName),9,ce))]),_:1}),e(d,{label:"属性值操作"},{default:a(({row:l,$index:u})=>[e(r,{type:"danger",size:"small",icon:"Delete",onClick:o=>n(t).attrValueList.splice(u,1)},null,8,["onClick"])]),_:1})]),_:1},8,["data"]),e(r,{type:"primary",size:"default",onClick:T,disabled:!(n(t).attrValueList.length>0)},{default:a(()=>[p(" 保存 ")]),_:1},8,["disabled"]),e(r,{size:"default",onClick:N},{default:a(()=>[p("取消")]),_:1})],512),[[h,n(c)===1]])]),_:1})],64)}}});export{ye as default};
