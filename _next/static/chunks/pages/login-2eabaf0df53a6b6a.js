(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{2070:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(885)}])},885:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var s=t(5893),r=t(7294),u=t(1163),i=t(8598),o=t(5697),c=t.n(o);function a(e){let{signIn:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Login"}),(0,s.jsxs)("form",{onSubmit:n,children:[(0,s.jsx)("input",{type:"text",id:"email",placeholder:"email"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{type:"text",id:"password",placeholder:"password"}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{type:"submit",children:"Login"})]})]})}a.propTypes={signIn:c().func};var l=function(){let{authSignIn:e,authUser:n,authLoading:t}=(0,i.aC)(),o=(0,u.useRouter)();(0,r.useEffect)(()=>{!t&&n&&o.push("/cms")},[n,t,o]);let c=async n=>{n.preventDefault();let{email:t,password:s}=n.target;try{await e({email:t.value,password:s.value})}catch(r){console.error(r.message)}};return(0,s.jsx)(a,{signIn:c})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2070)}),_N_E=e.O()}]);