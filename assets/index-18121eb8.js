import{b as ne,i as se,d as B,a as V,u as ae,r as x,c as k,T as A,o as J,e as le,f as C,g as N,w as g,h as j,j as b,n as S,k as u,l as W,E as q,m as ie,p as F,t as O,q as re,s as z,F as de,v as R,x as ce,y as p,z as ue,_ as fe,C as pe,A as me,B as L,D as ge,G as U,H as Z,I as he,J as G,K as ve,L as ye,M as Q,N as _e,O as Ce,P as we,Q as be,R as Ee,S as Se,U as Me,V as Te,W as Ie,X as ke,Y as xe,Z as Ve,$ as He,a0 as Ne}from"./index-76c02f73.js";import{E as ze,a as $e}from"./el-col-96eaea6f.js";import{E as Pe}from"./el-button-75678d7e.js";import{g as Be}from"./time-0b1c2c80.js";const X=["success","info","warning","error"],Fe=ne({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:se},id:{type:String,default:""},message:{type:B([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:B(Function),default:()=>{}},onClose:{type:B(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...X,""],default:""},zIndex:{type:Number,default:0}}),Le={destroy:()=>!0},We=["id"],Ue=["textContent"],De={key:0},Ae=["innerHTML"],je=V({name:"ElNotification"}),qe=V({...je,props:Fe,emits:Le,setup(a,{expose:n}){const s=a,{ns:l,zIndex:d}=ae("notification"),{nextZIndex:h,currentZIndex:v}=d,{Close:m}=pe,e=x(!1);let t;const c=k(()=>{const o=s.type;return o&&A[s.type]?l.m(o):""}),r=k(()=>s.type&&A[s.type]||s.icon),y=k(()=>s.position.endsWith("right")?"right":"left"),E=k(()=>s.position.startsWith("top")?"top":"bottom"),P=k(()=>({[E.value]:`${s.offset}px`,zIndex:v.value}));function T(){s.duration>0&&({stop:t}=me(()=>{e.value&&f()},s.duration))}function H(){t==null||t()}function f(){e.value=!1}function i({code:o}){o===L.delete||o===L.backspace?H():o===L.esc?e.value&&f():T()}return J(()=>{T(),h(),e.value=!0}),le(document,"keydown",i),n({visible:e,close:f}),(o,_)=>(C(),N(ue,{name:u(l).b("fade"),onBeforeLeave:o.onClose,onAfterLeave:_[1]||(_[1]=w=>o.$emit("destroy")),persisted:""},{default:g(()=>[j(b("div",{id:o.id,class:S([u(l).b(),o.customClass,u(y)]),style:W(u(P)),role:"alert",onMouseenter:H,onMouseleave:T,onClick:_[0]||(_[0]=(...w)=>o.onClick&&o.onClick(...w))},[u(r)?(C(),N(u(q),{key:0,class:S([u(l).e("icon"),u(c)])},{default:g(()=>[(C(),N(ie(u(r))))]),_:1},8,["class"])):F("v-if",!0),b("div",{class:S(u(l).e("group"))},[b("h2",{class:S(u(l).e("title")),textContent:O(o.title)},null,10,Ue),j(b("div",{class:S(u(l).e("content")),style:W(o.title?void 0:{margin:0})},[re(o.$slots,"default",{},()=>[o.dangerouslyUseHTMLString?(C(),z(de,{key:1},[F(" Caution here, message could've been compromised, never use user's input as message "),b("p",{innerHTML:o.message},null,8,Ae)],2112)):(C(),z("p",De,O(o.message),1))])],6),[[R,o.message]]),o.showClose?(C(),N(u(q),{key:0,class:S(u(l).e("closeBtn")),onClick:ce(f,["stop"])},{default:g(()=>[p(u(m))]),_:1},8,["class","onClick"])):F("v-if",!0)],2)],46,We),[[R,e.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Oe=fe(qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const $={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},D=16;let Re=1;const M=function(a={},n=null){if(!ge)return{close:()=>{}};(typeof a=="string"||U(a))&&(a={message:a});const s=a.position||"top-right";let l=a.offset||0;$[s].forEach(({vm:c})=>{var r;l+=(((r=c.el)==null?void 0:r.offsetHeight)||0)+D}),l+=D;const d=`notification_${Re++}`,h=a.onClose,v={...a,offset:l,id:d,onClose:()=>{Ze(d,s,h)}};let m=document.body;Z(a.appendTo)?m=a.appendTo:he(a.appendTo)&&(m=document.querySelector(a.appendTo)),Z(m)||(m=document.body);const e=document.createElement("div"),t=p(Oe,v,U(v.message)?{default:()=>v.message}:null);return t.appContext=n??M._context,t.props.onDestroy=()=>{G(null,e)},G(t,e),$[s].push({vm:t}),m.appendChild(e.firstElementChild),{close:()=>{t.component.exposed.visible.value=!1}}};X.forEach(a=>{M[a]=(n={})=>((typeof n=="string"||U(n))&&(n={message:n}),M({...n,type:a}))});function Ze(a,n,s){const l=$[n],d=l.findIndex(({vm:t})=>{var c;return((c=t.component)==null?void 0:c.props.id)===a});if(d===-1)return;const{vm:h}=l[d];if(!h)return;s==null||s(h);const v=h.el.offsetHeight,m=n.split("-")[0];l.splice(d,1);const e=l.length;if(!(e<1))for(let t=d;t<e;t++){const{el:c,component:r}=l[t].vm,y=Number.parseInt(c.style[m],10)-v-D;r.props.offset=y}}function Ge(){for(const a of Object.values($))a.forEach(({vm:n})=>{n.component.exposed.visible.value=!1})}M.closeAll=Ge;M._context=null;const K=ve(M,"$notify"),Ke=["width","height"],Je=V({name:"Identify"}),Qe=V({...Je,props:{identifyCode:{default:"1234"},fontSizeMin:{default:25},fontSizeMax:{default:35},backgroundColorMin:{default:200},backgroundColorMax:{default:220},dotColorMin:{default:60},dotColorMax:{default:120},contentWidth:{default:100},contentHeight:{default:40}},setup(a){const n=a,s=(e,t)=>Math.floor(Math.random()*(t-e)+e),l=(e,t)=>{let c=s(e,t),r=s(e,t),y=s(e,t);return"rgb("+c+","+r+","+y+")"},d=()=>{let t=document.getElementById("id-canvas").getContext("2d");t.textBaseline="bottom",t.fillStyle="#e6ecfd",t.fillRect(0,0,n.contentWidth,n.contentHeight);for(let c=0;c<n.identifyCode.length;c++)h(t,n.identifyCode[c],c);v(t),m(t)},h=(e,t,c)=>{e.fillStyle=l(50,160),e.font=s(n.fontSizeMin,n.fontSizeMax)+"px SimHei";let r=(c+1)*(n.contentWidth/(n.identifyCode.length+1)),y=s(n.fontSizeMax,n.contentHeight-5);const E=s(-30,30);e.translate(r,y),e.rotate(E*Math.PI/180),e.fillText(t,0,0),e.rotate(-E*Math.PI/180),e.translate(-r,-y)},v=e=>{for(let t=0;t<4;t++)e.strokeStyle=l(100,200),e.beginPath(),e.moveTo(s(0,n.contentWidth),s(0,n.contentHeight)),e.lineTo(s(0,n.contentWidth),s(0,n.contentHeight)),e.stroke()},m=e=>{for(let t=0;t<30;t++)e.fillStyle=l(0,255),e.beginPath(),e.arc(s(0,n.contentWidth),s(0,n.contentHeight),1,0,2*Math.PI),e.fill()};return J(()=>{d()}),ye(()=>n.identifyCode,e=>{console.log(e),d()}),(e,t)=>(C(),z("div",{class:"canvas-box",style:W({height:e.contentHeight+"px"})},[b("canvas",{id:"id-canvas",class:"id-canvas",width:e.contentWidth,height:e.contentHeight},null,8,Ke)],4))}});const Xe=Q(Qe,[["__scopeId","data-v-5c0249ba"]]),Ye=a=>(He("data-v-6ae49dfc"),a=a(),Ne(),a),et={class:"login_container"},tt=Ye(()=>b("h1",null,"Vue-Admin",-1)),ot=V({__name:"index",setup(a){let n=_e(),s=Ce(),l=x(!1);const d=x("1234"),h=x("1234567890abcdefjhijklinopqrsduvwxyz"),v=()=>{d.value="",m(d,4)},m=(f,i)=>{for(let o=0;o<i;o++)d.value+=h.value[e(0,h.value.length)]},e=(f,i)=>Math.floor(Math.random()*(i-f)+f);let t=we(),c=x();const r=be({username:"admin",password:"atguigu123",verifyCode:"1234"}),y=(f,i,o)=>{i.length===0?o(new Error("请输入账号")):o()},E=(f,i,o)=>{i.length===0?o(new Error("请输入密码")):i.length<6||i.length>16?o(new Error("密码应为6~16位的任意组合")):o()},P=(f,i,o)=>{console.log(i,d.value),i.length===0?o(new Error("请输入验证码")):i.length<4?o(new Error("请输入正确的验证码")):d.value!==i?o(new Error("请输入正确的验证码")):d.value===i&&o()},T=async()=>{await c.value.validate(),l.value=!0;try{await t.userLogin(r);let f=s.query.redirect;n.push({path:f||"/"}),n.push("/"),K({type:"success",message:"登陆成功",title:`Hi, ${Be()}好`}),l.value=!1}catch(f){l.value=!1,K({type:"error",message:f.message})}},H={username:[{trigger:"change",validator:y}],password:[{trigger:"change",validator:E}],verifyCode:[{trigger:"blur",validator:P}]};return(f,i)=>{const o=$e,_=Ie,w=ke,Y=xe,ee=Pe,te=Ve,oe=ze;return C(),z("div",et,[p(oe,null,{default:g(()=>[p(o,{span:12,xs:0}),p(o,{span:12,xs:24},{default:g(()=>[p(te,{class:"login_form"},{default:g(()=>[tt,p(Y,{model:r,rules:H,ref_key:"loginForms",ref:c},{default:g(()=>[p(w,{prop:"username"},{default:g(()=>[p(_,{"prefix-icon":u(Ee),modelValue:r.username,"onUpdate:modelValue":i[0]||(i[0]=I=>r.username=I),clearable:"",placeholder:"Username",size:"large"},null,8,["prefix-icon","modelValue"])]),_:1}),p(w,{prop:"password"},{default:g(()=>[p(_,{type:"password","prefix-icon":u(Se),"show-password":"",modelValue:r.password,"onUpdate:modelValue":i[1]||(i[1]=I=>r.password=I),size:"large",placeholder:"Password",clearable:""},null,8,["prefix-icon","modelValue"])]),_:1}),p(w,{prop:"verifyCode"},{default:g(()=>[p(_,{"prefix-icon":u(Me),"show-password":"",modelValue:r.verifyCode,"onUpdate:modelValue":i[2]||(i[2]=I=>r.verifyCode=I),placeholder:"VerifyCode",size:"large",maxlength:"4"},{append:g(()=>[p(Xe,{identifyCode:d.value,onClick:v},null,8,["identifyCode"])]),_:1},8,["prefix-icon","modelValue"])]),_:1})]),_:1},8,["model"]),p(w,null,{default:g(()=>[p(ee,{loading:u(l),class:"login_btn",type:"primary",size:"default",onClick:T},{default:g(()=>[Te(" 登录 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})])}}});const it=Q(ot,[["__scopeId","data-v-6ae49dfc"]]);export{it as default};