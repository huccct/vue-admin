import{b8 as U,aQ as Z,a1 as D,bM as j,D as N,aO as B,L as O,bN as G,bO as K,aM as X,bP as J,aN as R,bu as h,b as S,d as M,a as ee,y as oe,q as E,aS as te,i as le,ab as F,aX as ne,bQ as ae,aC as P,r as v,bR as se,bS as ue,c as T,a9 as ce,an as de,o as ie,a5 as re,A as I}from"./index-76c02f73.js";import{P as x}from"./vnode-6753921c.js";const fe=(e,o={})=>{U(e)||Z("[useLockscreen]","You need to pass a ref param to this function");const u=o.ns||D("popup"),t=j(()=>u.bm("parent","hidden"));if(!N||B(document.body,t.value))return;let c=0,s=!1,l="0";const i=()=>{setTimeout(()=>{R(document==null?void 0:document.body,t.value),s&&document&&(document.body.style.width=l)},200)};O(e,a=>{if(!a){i();return}s=!B(document.body,t.value),s&&(l=document.body.style.width),c=G(u.namespace.value);const f=document.documentElement.clientHeight<document.body.scrollHeight,r=K(document.body,"overflowY");c>0&&(f||r==="scroll")&&s&&(document.body.style.width=`calc(100% - ${c}px)`),X(document.body,t.value)}),J(()=>i())},ye=e=>{if(!e)return{onClick:h,onMousedown:h,onMouseup:h};let o=!1,u=!1;return{onClick:l=>{o&&u&&e(l),o=u=!1},onMousedown:l=>{o=l.target===l.currentTarget},onMouseup:l=>{u=l.target===l.currentTarget}}},me=S({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:M([String,Array,Object])},zIndex:{type:M([String,Number])}}),ve={click:e=>e instanceof MouseEvent},pe="overlay";var be=ee({name:"ElOverlay",props:me,emits:ve,setup(e,{slots:o,emit:u}){const t=D(pe),c=a=>{u("click",a)},{onClick:s,onMousedown:l,onMouseup:i}=ye(e.customMaskEvent?void 0:c);return()=>e.mask?oe("div",{class:[t.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:l,onMouseup:i},[E(o,"default")],x.STYLE|x.CLASS|x.PROPS,["onClick","onMouseup","onMousedown"]):te("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[E(o,"default")])}});const xe=be,Ce=S({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:le},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Oe={close:()=>!0},Me=S({...Ce,appendToBody:{type:Boolean,default:!1},beforeClose:{type:M(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Se={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[F]:e=>ne(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ke=(e,o)=>{const t=re().emit,{nextZIndex:c}=ae();let s="";const l=P(),i=P(),a=v(!1),f=v(!1),r=v(!1),p=v(e.zIndex||c());let y,m;const A=se("namespace",ue),z=T(()=>{const n={},d=`--${A.value}-dialog`;return e.fullscreen||(e.top&&(n[`${d}-margin-top`]=e.top),e.width&&(n[`${d}-width`]=ce(e.width))),n}),L=T(()=>e.alignCenter?{display:"flex"}:{});function V(){t("opened")}function $(){t("closed"),t(F,!1),e.destroyOnClose&&(r.value=!1)}function H(){t("close")}function k(){m==null||m(),y==null||y(),e.openDelay&&e.openDelay>0?{stop:y}=I(()=>w(),e.openDelay):w()}function b(){y==null||y(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=I(()=>g(),e.closeDelay):g()}function C(){function n(d){d||(f.value=!0,a.value=!1)}e.beforeClose?e.beforeClose(n):b()}function Y(){e.closeOnClickModal&&C()}function w(){N&&(a.value=!0)}function g(){a.value=!1}function W(){t("openAutoFocus")}function _(){t("closeAutoFocus")}function q(n){var d;((d=n.detail)==null?void 0:d.focusReason)==="pointer"&&n.preventDefault()}e.lockScroll&&fe(a);function Q(){e.closeOnPressEscape&&C()}return O(()=>e.modelValue,n=>{n?(f.value=!1,k(),r.value=!0,p.value=e.zIndex?p.value++:c(),de(()=>{t("open"),o.value&&(o.value.scrollTop=0)})):a.value&&b()}),O(()=>e.fullscreen,n=>{o.value&&(n?(s=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=s)}),ie(()=>{e.modelValue&&(a.value=!0,r.value=!0,k())}),{afterEnter:V,afterLeave:$,beforeLeave:H,handleClose:C,onModalClick:Y,close:b,doClose:g,onOpenAutoFocus:W,onCloseAutoFocus:_,onCloseRequested:Q,onFocusoutPrevented:q,titleId:l,bodyId:i,closed:f,style:z,overlayDialogStyle:L,rendered:r,visible:a,zIndex:p}};export{xe as E,Oe as a,Me as b,Se as c,Ce as d,ye as e,ke as u};