import{O as He,Q as Ue,V as Xe,z as U,u as R,t as G,A as X,j as $,v as W,D as J,C as je,x as H,w as ue,p as Ce,U as Ze,W as Qe,X as Ye,y as qe,Y as Je,I as et,d as f,H as xe,Z as tt}from"./index-BZ9Z5oDP.js";function rt({classNames:t,styles:e,props:r,stylesCtx:o}){const s=He();return{resolvedClassNames:Xe({theme:s,classNames:t,props:r,stylesCtx:o||void 0}),resolvedStyles:Ue({theme:s,styles:e,props:r,stylesCtx:o||void 0})}}var ie={root:"m_8d3f4000",icon:"m_8d3afb97",loader:"m_302b9fb1",group:"m_1a0f1b21",groupSection:"m_437b6484"};const Ne={orientation:"horizontal"},st=X((t,{borderWidth:e})=>({group:{"--ai-border-width":J(e)}})),$e=U((t,e)=>{const r=R("ActionIconGroup",Ne,t),{className:o,style:s,classNames:n,styles:i,unstyled:l,orientation:c,vars:a,borderWidth:m,variant:b,mod:g,..._}=R("ActionIconGroup",Ne,t),h=G({name:"ActionIconGroup",props:r,classes:ie,className:o,style:s,classNames:n,styles:i,unstyled:l,vars:a,varsResolver:st,rootSelector:"group"});return $.jsx(W,{...h("group"),ref:e,variant:b,mod:[{"data-orientation":c},g],role:"group",..._})});$e.classes=ie;$e.displayName="@mantine/core/ActionIconGroup";const Pe={},ot=X((t,{radius:e,color:r,gradient:o,variant:s,autoContrast:n,size:i})=>{const l=t.variantColorResolver({color:r||t.primaryColor,theme:t,gradient:o,variant:s||"filled",autoContrast:n});return{groupSection:{"--section-height":ue(i,"section-height"),"--section-padding-x":ue(i,"section-padding-x"),"--section-fz":H(i),"--section-radius":e===void 0?void 0:je(e),"--section-bg":r||s?l.background:void 0,"--section-color":l.color,"--section-bd":r||s?l.border:void 0}}}),we=U((t,e)=>{const r=R("ActionIconGroupSection",Pe,t),{className:o,style:s,classNames:n,styles:i,unstyled:l,vars:c,variant:a,gradient:m,radius:b,autoContrast:g,..._}=R("ActionIconGroupSection",Pe,t),h=G({name:"ActionIconGroupSection",props:r,classes:ie,className:o,style:s,classNames:n,styles:i,unstyled:l,vars:c,varsResolver:ot,rootSelector:"groupSection"});return $.jsx(W,{...h("groupSection"),ref:e,variant:a,..._})});we.classes=ie;we.displayName="@mantine/core/ActionIconGroupSection";const nt={},it=X((t,{size:e,radius:r,variant:o,gradient:s,color:n,autoContrast:i})=>{const l=t.variantColorResolver({color:n||t.primaryColor,theme:t,gradient:s,variant:o||"filled",autoContrast:i});return{root:{"--ai-size":ue(e,"ai-size"),"--ai-radius":r===void 0?void 0:je(r),"--ai-bg":n||o?l.background:void 0,"--ai-hover":n||o?l.hover:void 0,"--ai-hover-color":n||o?l.hoverColor:void 0,"--ai-color":l.color,"--ai-bd":n||o?l.border:void 0}}}),be=Ce((t,e)=>{const r=R("ActionIcon",nt,t),{className:o,unstyled:s,variant:n,classNames:i,styles:l,style:c,loading:a,loaderProps:m,size:b,color:g,radius:_,__staticSelector:h,gradient:d,vars:p,children:S,disabled:E,"data-disabled":v,autoContrast:w,mod:F,...y}=r,I=G({name:["ActionIcon",h],props:r,className:o,style:c,classes:ie,classNames:i,styles:l,unstyled:s,vars:p,varsResolver:it});return $.jsxs(Ze,{...I("root",{active:!E&&!a&&!v}),...y,unstyled:s,variant:n,size:b,disabled:E||a,ref:e,mod:[{loading:a,disabled:E||v},F],children:[$.jsx(Qe,{mounted:!!a,transition:"slide-down",duration:150,children:j=>$.jsx(W,{component:"span",...I("loader",{style:j}),"aria-hidden":!0,children:$.jsx(Ye,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...m})})}),$.jsx(W,{component:"span",mod:{loading:a},...I("icon"),children:S})]})});be.classes=ie;be.displayName="@mantine/core/ActionIcon";be.Group=$e;be.GroupSection=we;const[ct,lt]=qe({size:"sm"}),at={},Me=U((t,e)=>{const r=R("InputClearButton",at,t),{size:o,variant:s,vars:n,classNames:i,styles:l,...c}=r,a=lt(),{resolvedClassNames:m,resolvedStyles:b}=rt({classNames:i,styles:l,props:r});return $.jsx(Je,{variant:s||"transparent",ref:e,size:o||(a==null?void 0:a.size)||"sm",classNames:m,styles:b,__staticSelector:"InputClearButton",...c})});Me.displayName="@mantine/core/InputClearButton";const[ut,ve]=qe({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var L={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const ke={},dt=X((t,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${H(e)} - ${J(2)})`}})),Se=U((t,e)=>{const r=R("InputDescription",ke,t),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:c,size:a,__staticSelector:m,__inheritStyles:b=!0,variant:g,..._}=R("InputDescription",ke,r),h=ve(),d=G({name:["InputWrapper",m],props:r,classes:L,className:s,style:n,classNames:o,styles:i,unstyled:l,rootSelector:"description",vars:c,varsResolver:dt}),p=b&&(h==null?void 0:h.getStyles)||d;return $.jsx(W,{component:"p",ref:e,variant:g,size:a,...p("description",h!=null&&h.getStyles?{className:s,style:n}:void 0),..._})});Se.classes=L;Se.displayName="@mantine/core/InputDescription";const ft={},pt=X((t,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${H(e)} - ${J(2)})`}})),ge=U((t,e)=>{const r=R("InputError",ft,t),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:c,size:a,__staticSelector:m,__inheritStyles:b=!0,variant:g,..._}=r,h=G({name:["InputWrapper",m],props:r,classes:L,className:s,style:n,classNames:o,styles:i,unstyled:l,rootSelector:"error",vars:c,varsResolver:pt}),d=ve(),p=b&&(d==null?void 0:d.getStyles)||h;return $.jsx(W,{component:"p",ref:e,variant:g,size:a,...p("error",d!=null&&d.getStyles?{className:s,style:n}:void 0),..._})});ge.classes=L;ge.displayName="@mantine/core/InputError";const Re={labelElement:"label"},yt=X((t,{size:e})=>({label:{"--input-label-size":H(e),"--input-asterisk-color":void 0}})),he=U((t,e)=>{const r=R("InputLabel",Re,t),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:c,labelElement:a,size:m,required:b,htmlFor:g,onMouseDown:_,children:h,__staticSelector:d,variant:p,mod:S,...E}=R("InputLabel",Re,r),v=G({name:["InputWrapper",d],props:r,classes:L,className:s,style:n,classNames:o,styles:i,unstyled:l,rootSelector:"label",vars:c,varsResolver:yt}),w=ve(),F=(w==null?void 0:w.getStyles)||v;return $.jsxs(W,{...F("label",w!=null&&w.getStyles?{className:s,style:n}:void 0),component:a,variant:p,size:m,ref:e,htmlFor:a==="label"?g:void 0,mod:[{required:b},S],onMouseDown:y=>{_==null||_(y),!y.defaultPrevented&&y.detail>1&&y.preventDefault()},...E,children:[h,b&&$.jsx("span",{...F("required"),"aria-hidden":!0,children:" *"})]})});he.classes=L;he.displayName="@mantine/core/InputLabel";const De={},Fe=U((t,e)=>{const r=R("InputPlaceholder",De,t),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:c,__staticSelector:a,variant:m,error:b,mod:g,..._}=R("InputPlaceholder",De,r),h=G({name:["InputPlaceholder",a],props:r,classes:L,className:s,style:n,classNames:o,styles:i,unstyled:l,rootSelector:"placeholder"});return $.jsx(W,{...h("placeholder"),mod:[{error:!!b},g],component:"span",variant:m,ref:e,..._})});Fe.classes=L;Fe.displayName="@mantine/core/InputPlaceholder";function mt(t,{hasDescription:e,hasError:r}){const o=t.findIndex(c=>c==="input"),s=t.slice(0,o),n=t.slice(o+1),i=e&&s.includes("description")||r&&s.includes("error");return{offsetBottom:e&&n.includes("description")||r&&n.includes("error"),offsetTop:i}}const bt={labelElement:"label",inputContainer:t=>t,inputWrapperOrder:["label","description","input","error"]},vt=X((t,{size:e})=>({label:{"--input-label-size":H(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${H(e)} - ${J(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${H(e)} - ${J(2)})`}})),Ae=U((t,e)=>{const r=R("InputWrapper",bt,t),{classNames:o,className:s,style:n,styles:i,unstyled:l,vars:c,size:a,variant:m,__staticSelector:b,inputContainer:g,inputWrapperOrder:_,label:h,error:d,description:p,labelProps:S,descriptionProps:E,errorProps:v,labelElement:w,children:F,withAsterisk:y,id:I,required:j,__stylesApiProps:A,mod:D,...M}=r,K=G({name:["InputWrapper",b],props:A||r,classes:L,className:s,style:n,classNames:o,styles:i,unstyled:l,vars:c,varsResolver:vt}),O={size:a,variant:m,__staticSelector:b},B=et(I),ee=typeof y=="boolean"?y:j,te=(v==null?void 0:v.id)||`${B}-error`,re=(E==null?void 0:E.id)||`${B}-description`,se=B,Z=!!d&&typeof d!="boolean",Q=!!p,oe=`${Z?te:""} ${Q?re:""}`,ce=oe.trim().length>0?oe.trim():void 0,N=(S==null?void 0:S.id)||`${B}-label`,Y=h&&$.jsx(he,{labelElement:w,id:N,htmlFor:se,required:ee,...O,...S,children:h},"label"),u=Q&&$.jsx(Se,{...E,...O,size:(E==null?void 0:E.size)||O.size,id:(E==null?void 0:E.id)||re,children:p},"description"),V=$.jsx(f.Fragment,{children:g(F)},"input"),C=Z&&f.createElement(ge,{...v,...O,size:(v==null?void 0:v.size)||O.size,key:"error",id:(v==null?void 0:v.id)||te},d),z=_.map(q=>{switch(q){case"label":return Y;case"input":return V;case"description":return u;case"error":return C;default:return null}});return $.jsx(ut,{value:{getStyles:K,describedBy:ce,inputId:se,labelId:N,...mt(_,{hasDescription:Q,hasError:Z})},children:$.jsx(W,{ref:e,variant:m,size:a,mod:[{error:!!d},D],...K("root"),...M,children:z})})});Ae.classes=L;Ae.displayName="@mantine/core/InputWrapper";const St={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},gt=X((t,e,r)=>({wrapper:{"--input-margin-top":r.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":r.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":ue(e.size,"input-height"),"--input-fz":H(e.size),"--input-radius":e.radius===void 0?void 0:je(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?J(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?J(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?ue(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),T=Ce((t,e)=>{const r=R("Input",St,t),{classNames:o,className:s,style:n,styles:i,unstyled:l,required:c,__staticSelector:a,__stylesApiProps:m,size:b,wrapperProps:g,error:_,disabled:h,leftSection:d,leftSectionProps:p,leftSectionWidth:S,rightSection:E,rightSectionProps:v,rightSectionWidth:w,rightSectionPointerEvents:F,leftSectionPointerEvents:y,variant:I,vars:j,pointer:A,multiline:D,radius:M,id:K,withAria:O,withErrorStyles:B,mod:ee,inputSize:te,__clearSection:re,__clearable:se,__defaultRightSection:Z,...Q}=r,{styleProps:oe,rest:ce}=xe(Q),N=ve(),Y={offsetBottom:N==null?void 0:N.offsetBottom,offsetTop:N==null?void 0:N.offsetTop},u=G({name:["Input",a],props:m||r,classes:L,className:s,style:n,classNames:o,styles:i,unstyled:l,stylesCtx:Y,rootSelector:"wrapper",vars:j,varsResolver:gt}),V=O?{required:c,disabled:h,"aria-invalid":!!_,"aria-describedby":N==null?void 0:N.describedBy,id:(N==null?void 0:N.inputId)||K}:{},C=E||se&&re||Z;return $.jsx(ct,{value:{size:b||"sm"},children:$.jsxs(W,{...u("wrapper"),...oe,...g,mod:[{error:!!_&&B,pointer:A,disabled:h,multiline:D,"data-with-right-section":!!C,"data-with-left-section":!!d},ee],variant:I,size:b,children:[d&&$.jsx("div",{...p,"data-position":"left",...u("section",{className:p==null?void 0:p.className,style:p==null?void 0:p.style}),children:d}),$.jsx(W,{component:"input",...ce,...V,ref:e,required:c,mod:{disabled:h,error:!!_&&B},variant:I,__size:te,...u("input")}),C&&$.jsx("div",{...v,"data-position":"right",...u("section",{className:v==null?void 0:v.className,style:v==null?void 0:v.style}),children:C})]})})});T.classes=L;T.Wrapper=Ae;T.Label=he;T.Error=ge;T.Description=Se;T.Placeholder=Fe;T.ClearButton=Me;T.displayName="@mantine/core/Input";function ht(t,e,r){const o=R(t,e,r),{label:s,description:n,error:i,required:l,classNames:c,styles:a,className:m,unstyled:b,__staticSelector:g,__stylesApiProps:_,errorProps:h,labelProps:d,descriptionProps:p,wrapperProps:S,id:E,size:v,style:w,inputContainer:F,inputWrapperOrder:y,withAsterisk:I,variant:j,vars:A,mod:D,...M}=o,{styleProps:K,rest:O}=xe(M),B={label:s,description:n,error:i,required:l,classNames:c,className:m,__staticSelector:g,__stylesApiProps:_||o,errorProps:h,labelProps:d,descriptionProps:p,unstyled:b,styles:a,size:v,style:w,inputContainer:F,inputWrapperOrder:y,withAsterisk:I,variant:j,id:E,mod:D,...S};return{...O,classNames:c,styles:a,unstyled:b,wrapperProps:{...B,...K},inputProps:{required:l,classNames:c,styles:a,unstyled:b,size:v,__staticSelector:g,__stylesApiProps:_||o,error:i,variant:j,id:E}}}const Et={__staticSelector:"InputBase",withAria:!0},Ge=Ce((t,e)=>{const{inputProps:r,wrapperProps:o,...s}=ht("InputBase",Et,t);return $.jsx(T.Wrapper,{...o,children:$.jsx(T,{...r,...s,ref:e})})});Ge.classes={...T.classes,...T.Wrapper.classes};Ge.displayName="@mantine/core/InputBase";function It(t){if(!/^[0-9a-zA-Z-]+$/.test(t))throw new Error(`[@mantine/use-form] Form name "${t}" is invalid, it should contain only letters, numbers and dashes`)}const _t=typeof window<"u"?f.useLayoutEffect:f.useEffect;function P(t,e){_t(()=>{if(t)return window.addEventListener(t,e),()=>window.removeEventListener(t,e)},[t])}function Vt(t,e){t&&It(t),P(`mantine-form:${t}:set-field-value`,r=>e.setFieldValue(r.detail.path,r.detail.value)),P(`mantine-form:${t}:set-values`,r=>e.setValues(r.detail)),P(`mantine-form:${t}:set-initial-values`,r=>e.setInitialValues(r.detail)),P(`mantine-form:${t}:set-errors`,r=>e.setErrors(r.detail)),P(`mantine-form:${t}:set-field-error`,r=>e.setFieldError(r.detail.path,r.detail.error)),P(`mantine-form:${t}:clear-field-error`,r=>e.clearFieldError(r.detail)),P(`mantine-form:${t}:clear-errors`,e.clearErrors),P(`mantine-form:${t}:reset`,e.reset),P(`mantine-form:${t}:validate`,e.validate),P(`mantine-form:${t}:validate-field`,r=>e.validateField(r.detail)),P(`mantine-form:${t}:reorder-list-item`,r=>e.reorderListItem(r.detail.path,r.detail.payload)),P(`mantine-form:${t}:remove-list-item`,r=>e.removeListItem(r.detail.path,r.detail.index)),P(`mantine-form:${t}:insert-list-item`,r=>e.insertListItem(r.detail.path,r.detail.item,r.detail.index)),P(`mantine-form:${t}:set-dirty`,r=>e.setDirty(r.detail)),P(`mantine-form:${t}:set-touched`,r=>e.setTouched(r.detail)),P(`mantine-form:${t}:reset-dirty`,r=>e.resetDirty(r.detail)),P(`mantine-form:${t}:reset-touched`,e.resetTouched)}function jt(t){return e=>{if(!e)t(e);else if(typeof e=="function")t(e);else if(typeof e=="object"&&"nativeEvent"in e){const{currentTarget:r}=e;r instanceof HTMLInputElement?r.type==="checkbox"?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}}function Ee(t){return t===null||typeof t!="object"?{}:Object.keys(t).reduce((e,r)=>{const o=t[r];return o!=null&&o!==!1&&(e[r]=o),e},{})}function Ct(t){const[e,r]=f.useState(Ee(t)),o=f.useRef(e),s=f.useCallback(c=>{r(a=>{const m=Ee(typeof c=="function"?c(a):c);return o.current=m,m})},[]),n=f.useCallback(()=>s({}),[]),i=f.useCallback(c=>{o.current[c]!==void 0&&s(a=>{const m={...a};return delete m[c],m})},[e]),l=f.useCallback((c,a)=>{a==null||a===!1?i(c):o.current[c]!==a&&s(m=>({...m,[c]:a}))},[e]);return{errorsState:e,setErrors:s,clearErrors:n,setFieldError:l,clearFieldError:i}}function Ie(t,e){if(e===null||typeof e!="object")return{};const r={...e};return Object.keys(e).forEach(o=>{o.includes(`${String(t)}.`)&&delete r[o]}),r}function Oe(t,e){const r=t.substring(e.length+1).split(".")[0];return parseInt(r,10)}function ze(t,e,r,o){if(e===void 0)return r;const s=`${String(t)}`;let n=r;o===-1&&(n=Ie(`${s}.${e}`,n));const i={...n},l=new Set;return Object.entries(n).filter(([c])=>{if(!c.startsWith(`${s}.`))return!1;const a=Oe(c,s);return Number.isNaN(a)?!1:a>=e}).forEach(([c,a])=>{const m=Oe(c,s),b=c.replace(`${s}.${m}`,`${s}.${m+o}`);i[b]=a,l.add(b),l.has(c)||delete i[c]}),i}function $t(t,{from:e,to:r},o){const s=`${t}.${e}`,n=`${t}.${r}`,i={...o};return Object.keys(o).every(l=>{let c,a;if(l.startsWith(s)&&(c=l,a=l.replace(s,n)),l.startsWith(n)&&(c=l.replace(n,s),a=l),c&&a){const m=i[c],b=i[a];return b===void 0?delete i[c]:i[c]=b,m===void 0?delete i[a]:i[a]=m,!1}return!0}),i}function Te(t,e,r){typeof r.value=="object"&&(r.value=ne(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||e==="__proto__"?Object.defineProperty(t,e,r):t[e]=r.value}function ne(t){if(typeof t!="object")return t;var e=0,r,o,s,n=Object.prototype.toString.call(t);if(n==="[object Object]"?s=Object.create(t.__proto__||null):n==="[object Array]"?s=Array(t.length):n==="[object Set]"?(s=new Set,t.forEach(function(i){s.add(ne(i))})):n==="[object Map]"?(s=new Map,t.forEach(function(i,l){s.set(ne(l),ne(i))})):n==="[object Date]"?s=new Date(+t):n==="[object RegExp]"?s=new RegExp(t.source,t.flags):n==="[object DataView]"?s=new t.constructor(ne(t.buffer)):n==="[object ArrayBuffer]"?s=t.slice(0):n.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(o=Object.getOwnPropertySymbols(t);e<o.length;e++)Te(s,o[e],Object.getOwnPropertyDescriptor(t,o[e]));for(e=0,o=Object.getOwnPropertyNames(t);e<o.length;e++)Object.hasOwnProperty.call(s,r=o[e])&&s[r]===t[r]||Te(s,r,Object.getOwnPropertyDescriptor(t,r))}return s||t}function Ke(t){return typeof t!="string"?[]:t.split(".")}function k(t,e){const r=Ke(t);if(r.length===0||typeof e!="object"||e===null)return;let o=e[r[0]];for(let s=1;s<r.length&&o!=null;s+=1)o=o[r[s]];return o}function de(t,e,r){const o=Ke(t);if(o.length===0)return r;const s=ne(r);if(o.length===1)return s[o[0]]=e,s;let n=s[o[0]];for(let i=1;i<o.length-1;i+=1){if(n===void 0)return s;n=n[o[i]]}return n[o[o.length-1]]=e,s}function wt(t,{from:e,to:r},o){const s=k(t,o);if(!Array.isArray(s))return o;const n=[...s],i=s[e];return n.splice(e,1),n.splice(r,0,i),de(t,n,o)}function Ft(t,e,r,o){const s=k(t,o);if(!Array.isArray(s))return o;const n=[...s];return n.splice(typeof r=="number"?r:n.length,0,e),de(t,n,o)}function At(t,e,r){const o=k(t,r);return Array.isArray(o)?de(t,o.filter((s,n)=>n!==e),r):r}function Nt(t,e,r,o){const s=k(t,o);if(!Array.isArray(s)||s.length<=r)return o;const n=[...s];return n[r]=e,de(t,n,o)}function Pt({$values:t,$errors:e,$status:r}){const o=f.useCallback((l,c)=>{r.clearFieldDirty(l),e.setErrors(a=>$t(l,c,a)),t.setValues({values:wt(l,c,t.refValues.current),updateState:!0})},[]),s=f.useCallback((l,c)=>{r.clearFieldDirty(l),e.setErrors(a=>ze(l,c,a,-1)),t.setValues({values:At(l,c,t.refValues.current),updateState:!0})},[]),n=f.useCallback((l,c,a)=>{r.clearFieldDirty(l),e.setErrors(m=>ze(l,a,m,1)),t.setValues({values:Ft(l,c,a,t.refValues.current),updateState:!0})},[]),i=f.useCallback((l,c,a)=>{r.clearFieldDirty(l),t.setValues({values:Nt(l,a,c,t.refValues.current),updateState:!0})},[]);return{reorderListItem:o,removeListItem:s,insertListItem:n,replaceListItem:i}}var kt=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,s,n;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(s=o;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(r).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[s]))return!1;for(s=o;s--!==0;){var i=n[s];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r};const pe=tt(kt);function ae(t,e){const r=Object.keys(t);if(typeof e=="string"){const o=r.filter(s=>s.startsWith(`${e}.`));return t[e]||o.some(s=>t[s])||!1}return r.some(o=>t[o])}function Rt({initialDirty:t,initialTouched:e,mode:r,$values:o}){const[s,n]=f.useState(e),[i,l]=f.useState(t),c=f.useRef(e),a=f.useRef(t),m=f.useCallback(y=>{const I=typeof y=="function"?y(c.current):y;c.current=I,r==="controlled"&&n(I)},[]),b=f.useCallback((y,I=!1)=>{const j=typeof y=="function"?y(a.current):y;a.current=j,(r==="controlled"||I)&&l(j)},[]),g=f.useCallback(()=>m({}),[]),_=f.useCallback(y=>{const I=y?{...o.refValues.current,...y}:o.refValues.current;o.setValuesSnapshot(I),b({})},[]),h=f.useCallback((y,I)=>{m(j=>ae(j,y)===I?j:{...j,[y]:I})},[]),d=f.useCallback((y,I,j)=>{b(A=>ae(A,y)===I?A:{...A,[y]:I},j)},[]),p=f.useCallback((y,I)=>{const j=ae(a.current,y),A=!pe(k(y,o.getValuesSnapshot()),I),D=Ie(y,a.current);D[y]=A,b(D,j!==A)},[]),S=f.useCallback(y=>ae(c.current,y),[]),E=f.useCallback(y=>b(I=>{if(typeof y!="string")return I;const j=Ie(y,I);return delete j[y],pe(j,I)?I:j}),[]),v=f.useCallback(y=>{if(y){const j=k(y,a.current);if(typeof j=="boolean")return j;const A=k(y,o.refValues.current),D=k(y,o.valuesSnapshot.current);return!pe(A,D)}return Object.keys(a.current).length>0?ae(a.current):!pe(o.refValues.current,o.valuesSnapshot.current)},[]),w=f.useCallback(()=>a.current,[]),F=f.useCallback(()=>c.current,[]);return{touchedState:s,dirtyState:i,touchedRef:c,dirtyRef:a,setTouched:m,setDirty:b,resetDirty:_,resetTouched:g,isTouched:S,setFieldTouched:h,setFieldDirty:d,setTouchedState:n,setDirtyState:l,clearFieldDirty:E,isDirty:v,getDirty:w,getTouched:F,setCalculatedFieldDirty:p}}function Dt({initialValues:t,onValuesChange:e,mode:r}){const o=f.useRef(!1),[s,n]=f.useState(t||{}),i=f.useRef(s),l=f.useRef(s),c=f.useCallback(({values:d,subscribers:p,updateState:S=!0,mergeWithPreviousValues:E=!0})=>{const v=i.current,w=d instanceof Function?d(i.current):d,F=E?{...v,...w}:w;i.current=F,S&&n(F),e==null||e(F,v),p==null||p.filter(Boolean).forEach(y=>y({updatedValues:F,previousValues:v}))},[e]),a=f.useCallback(d=>{var E;const p=k(d.path,i.current),S=d.value instanceof Function?d.value(p):d.value;if(p!==S){const v=i.current,w=de(d.path,S,i.current);c({values:w,updateState:d.updateState}),(E=d.subscribers)==null||E.filter(Boolean).forEach(F=>F({path:d.path,updatedValues:w,previousValues:v}))}},[c]),m=f.useCallback(d=>{l.current=d},[]),b=f.useCallback((d,p)=>{o.current||(o.current=!0,c({values:d,updateState:r==="controlled"}),m(d),p())},[c]),g=f.useCallback(()=>{c({values:l.current,updateState:!0,mergeWithPreviousValues:!1})},[c]),_=f.useCallback(()=>i.current,[]),h=f.useCallback(()=>l.current,[]);return{initialized:o,stateValues:s,refValues:i,valuesSnapshot:l,setValues:c,setFieldValue:a,resetValues:g,setValuesSnapshot:m,initialize:b,getValues:_,getValuesSnapshot:h}}function Ot({$status:t}){const e=f.useRef({}),r=f.useCallback((s,n)=>{f.useEffect(()=>(e.current[s]=e.current[s]||[],e.current[s].push(n),()=>{e.current[s]=e.current[s].filter(i=>i!==n)}),[n])},[]),o=f.useCallback(s=>e.current[s]?e.current[s].map(n=>i=>n({previousValue:k(s,i.previousValues),value:k(s,i.updatedValues),touched:t.isTouched(s),dirty:t.isDirty(s)})):[],[]);return{subscribers:e,watch:r,getFieldSubscribers:o}}function Le(t,e){return t?`${t}-${e.toString()}`:e.toString()}const ye=Symbol("root-rule");function Be(t){const e=Ee(t);return{hasErrors:Object.keys(e).length>0,errors:e}}function _e(t,e,r="",o={}){return typeof t!="object"||t===null?o:Object.keys(t).reduce((s,n)=>{const i=t[n],l=`${r===""?"":`${r}.`}${n}`,c=k(l,e);let a=!1;return typeof i=="function"&&(s[l]=i(c,e,l)),typeof i=="object"&&Array.isArray(c)&&(a=!0,c.forEach((m,b)=>_e(i,e,`${l}.${b}`,s)),ye in i&&(s[l]=i[ye](c,e,l))),typeof i=="object"&&typeof c=="object"&&c!==null&&(a||_e(i,e,l,s),ye in i&&(s[l]=i[ye](c,e,l))),s},o)}function Ve(t,e){return Be(typeof t=="function"?t(e):_e(t,e))}function me(t,e,r){if(typeof t!="string")return{hasError:!1,error:null};const o=Ve(e,r),s=Object.keys(o.errors).find(n=>t.split(".").every((i,l)=>i===n.split(".")[l]));return{hasError:!!s,error:s?o.errors[s]:null}}const zt="__MANTINE_FORM_INDEX__";function We(t,e){return e?typeof e=="boolean"?e:Array.isArray(e)?e.includes(t.replace(/[.][0-9]+/g,`.${zt}`)):!1:!1}function Lt({name:t,mode:e="controlled",initialValues:r,initialErrors:o={},initialDirty:s={},initialTouched:n={},clearInputErrorOnChange:i=!0,validateInputOnChange:l=!1,validateInputOnBlur:c=!1,onValuesChange:a,transformValues:m=d=>d,enhanceGetInputProps:b,validate:g,onSubmitPreventDefault:_="always",touchTrigger:h="change"}={}){const d=Ct(o),p=Dt({initialValues:r,onValuesChange:a,mode:e}),S=Rt({initialDirty:s,initialTouched:n,$values:p,mode:e}),E=Pt({$values:p,$errors:d,$status:S}),v=Ot({$status:S}),[w,F]=f.useState(0),[y,I]=f.useState({}),[j,A]=f.useState(!1),D=f.useCallback(()=>{p.resetValues(),d.clearErrors(),S.resetDirty(),S.resetTouched(),e==="uncontrolled"&&F(u=>u+1)},[]),M=f.useCallback(u=>{i&&d.clearErrors(),e==="uncontrolled"&&F(V=>V+1),Object.keys(v.subscribers.current).forEach(V=>{const C=k(V,p.refValues.current),z=k(V,u);C!==z&&v.getFieldSubscribers(V).forEach(q=>q({previousValues:u,updatedValues:p.refValues.current}))})},[i]),K=f.useCallback(u=>{const V=p.refValues.current;p.initialize(u,()=>e==="uncontrolled"&&F(C=>C+1)),M(V)},[M]),O=f.useCallback((u,V,C)=>{const z=We(u,l),q=V instanceof Function?V(k(u,p.refValues.current)):V;S.setCalculatedFieldDirty(u,q),h==="change"&&S.setFieldTouched(u,!0),!z&&i&&d.clearFieldError(u),p.setFieldValue({path:u,value:V,updateState:e==="controlled",subscribers:[...v.getFieldSubscribers(u),z?le=>{const x=me(u,g,le.updatedValues);x.hasError?d.setFieldError(u,x.error):d.clearFieldError(u)}:null,(C==null?void 0:C.forceUpdate)!==!1&&e!=="controlled"?()=>I(le=>({...le,[u]:(le[u]||0)+1})):null]})},[a,g]),B=f.useCallback(u=>{const V=p.refValues.current;p.setValues({values:u,updateState:e==="controlled"}),M(V)},[a,M]),ee=f.useCallback(()=>{const u=Ve(g,p.refValues.current);return d.setErrors(u.errors),u},[g]),te=f.useCallback(u=>{const V=me(u,g,p.refValues.current);return V.hasError?d.setFieldError(u,V.error):d.clearFieldError(u),V},[g]),re=(u,{type:V="input",withError:C=!0,withFocus:z=!0,...q}={})=>{const x={onChange:jt(fe=>O(u,fe,{forceUpdate:!1})),"data-path":Le(t,u)};return C&&(x.error=d.errorsState[u]),V==="checkbox"?x[e==="controlled"?"checked":"defaultChecked"]=k(u,p.refValues.current):x[e==="controlled"?"value":"defaultValue"]=k(u,p.refValues.current),z&&(x.onFocus=()=>S.setFieldTouched(u,!0),x.onBlur=()=>{if(We(u,c)){const fe=me(u,g,p.refValues.current);fe.hasError?d.setFieldError(u,fe.error):d.clearFieldError(u)}}),Object.assign(x,b==null?void 0:b({inputProps:x,field:u,options:{type:V,withError:C,withFocus:z,...q},form:Y}))},se=(u,V)=>C=>{_==="always"&&(C==null||C.preventDefault());const z=ee();if(z.hasErrors)_==="validation-failed"&&(C==null||C.preventDefault()),V==null||V(z.errors,p.refValues.current,C);else{const q=u==null?void 0:u(m(p.refValues.current),C);q instanceof Promise&&(A(!0),q.finally(()=>A(!1)))}},Z=u=>m(u||p.refValues.current),Q=f.useCallback(u=>{u.preventDefault(),D()},[]),oe=f.useCallback(u=>u?!me(u,g,p.refValues.current).hasError:!Ve(g,p.refValues.current).hasErrors,[g]),ce=u=>`${w}-${u}-${y[u]||0}`,N=f.useCallback(u=>document.querySelector(`[data-path="${Le(t,u)}"]`),[]),Y={watch:v.watch,initialized:p.initialized.current,values:p.stateValues,getValues:p.getValues,setInitialValues:p.setValuesSnapshot,initialize:K,setValues:B,setFieldValue:O,submitting:j,setSubmitting:A,errors:d.errorsState,setErrors:d.setErrors,setFieldError:d.setFieldError,clearFieldError:d.clearFieldError,clearErrors:d.clearErrors,resetDirty:S.resetDirty,setTouched:S.setTouched,setDirty:S.setDirty,isTouched:S.isTouched,resetTouched:S.resetTouched,isDirty:S.isDirty,getTouched:S.getTouched,getDirty:S.getDirty,reorderListItem:E.reorderListItem,insertListItem:E.insertListItem,removeListItem:E.removeListItem,replaceListItem:E.replaceListItem,reset:D,validate:ee,validateField:te,getInputProps:re,onSubmit:se,onReset:Q,isValid:oe,getTransformedValues:Z,key:ce,getInputNode:N};return Vt(t,Y),Y}export{be as A,T as I,ve as a,rt as b,Ge as c,Lt as u};
