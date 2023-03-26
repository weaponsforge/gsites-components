(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8417:function(e,t,r){"use strict";r.d(t,{Z:function(){return z}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(i){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),i=Math.abs,s=String.fromCharCode,o=Object.assign;function a(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function h(e,t){return 0|e.charCodeAt(t)}function u(e,t,r){return e.slice(t,r)}function c(e){return e.length}function d(e,t){return t.push(e),e}var f=1,p=1,g=0,m=0,v=0,y="";function b(e,t,r,n,i,s,o){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:f,column:p,length:o,return:""}}function _(e,t){return o(b("",null,null,"",null,null,0),e,{length:-e.length},t)}function w(){return v=m<g?h(y,m++):0,p++,10===v&&(p=1,f++),v}function E(){return h(y,m)}function I(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return f=p=1,g=c(y=e),m=0,[]}function k(e){var t,r;return(t=m-1,r=function e(t){for(;w();)switch(v){case t:return m;case 34:case 39:34!==t&&39!==t&&e(v);break;case 40:41===t&&e(t);break;case 92:w()}return m}(91===e?e+2:40===e?e+1:e),u(y,t,r)).trim()}var S="-ms-",A="-moz-",R="-webkit-",O="comm",C="rule",N="decl",D="@keyframes";function P(e,t){for(var r="",n=e.length,i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function x(e,t,r,n){switch(e.type){case"@import":case N:return e.return=e.return||e.value;case O:return"";case D:return e.return=e.value+"{"+P(e.children,n)+"}";case C:e.value=e.props.join(",")}return c(r=P(e.children,n))?e.return=e.value+"{"+r+"}":""}function L(e,t,r,n,s,o,l,h,c,d,f){for(var p=s-1,g=0===s?o:[""],m=g.length,v=0,y=0,_=0;v<n;++v)for(var w=0,E=u(e,p+1,p=i(y=l[v])),I=e;w<m;++w)(I=(y>0?g[w]+" "+E:a(E,/&\f/g,g[w])).trim())&&(c[_++]=I);return b(e,t,r,0===s?C:h,c,d,f)}function M(e,t,r,n){return b(e,t,r,N,u(e,0,n),u(e,n+1,-1),n)}var U=function(e,t,r){for(var n=0,i=0;n=i,i=E(),38===n&&12===i&&(t[r]=1),!I(i);)w();return u(y,e,m)},j=function(e,t){var r=-1,n=44;do switch(I(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=U(m-1,t,r);break;case 2:e[r]+=k(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}while(n=w());return e},F=function(e,t){var r;return r=j(T(e),t),y="",r},$=new WeakMap,B=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||$.get(r))&&!n){$.set(e,!0);for(var i=[],s=F(t,i),o=r.props,a=0,l=0;a<s.length;a++)for(var h=0;h<o.length;h++,l++)e.props[l]=i[a]?s[a].replace(/&\f/g,o[h]):o[h]+" "+s[a]}}},V=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},H=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case N:e.return=function e(t,r){switch(45^h(t,0)?(((r<<2^h(t,0))<<2^h(t,1))<<2^h(t,2))<<2^h(t,3):0){case 5103:return R+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return R+t+A+t+S+t+t;case 6828:case 4268:return R+t+S+t+t;case 6165:return R+t+S+"flex-"+t+t;case 5187:return R+t+a(t,/(\w+).+(:[^]+)/,R+"box-$1$2"+S+"flex-$1$2")+t;case 5443:return R+t+S+"flex-item-"+a(t,/flex-|-self/,"")+t;case 4675:return R+t+S+"flex-line-pack"+a(t,/align-content|flex-|-self/,"")+t;case 5548:return R+t+S+a(t,"shrink","negative")+t;case 5292:return R+t+S+a(t,"basis","preferred-size")+t;case 6060:return R+"box-"+a(t,"-grow","")+R+t+S+a(t,"grow","positive")+t;case 4554:return R+a(t,/([^-])(transform)/g,"$1"+R+"$2")+t;case 6187:return a(a(a(t,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),t,"")+t;case 5495:case 3959:return a(t,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return a(a(t,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+t+t;case 4095:case 3583:case 4068:case 2532:return a(t,/(.+)-inline(.+)/,R+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(c(t)-1-r>6)switch(h(t,r+1)){case 109:if(45!==h(t,r+4))break;case 102:return a(t,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+A+(108==h(t,r+3)?"$3":"$2-$3"))+t;case 115:return~l(t,"stretch")?e(a(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==h(t,r+1))break;case 6444:switch(h(t,c(t)-3-(~l(t,"!important")&&10))){case 107:return a(t,":",":"+R)+t;case 101:return a(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+R+(45===h(t,14)?"inline-":"")+"box$3$1"+R+"$2$3$1"+S+"$2box$3")+t}break;case 5936:switch(h(t,r+11)){case 114:return R+t+S+a(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return R+t+S+a(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return R+t+S+a(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return R+t+S+t+t}return t}(e.value,e.length);break;case D:return P([_(e,{value:a(e.value,"@","@"+R)})],n);case C:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return P([_(e,{props:[a(t,/:(read-\w+)/,":"+A+"$1")]})],n);case"::placeholder":return P([_(e,{props:[a(t,/:(plac\w+)/,":"+R+"input-$1")]}),_(e,{props:[a(t,/:(plac\w+)/,":"+A+"$1")]}),_(e,{props:[a(t,/:(plac\w+)/,S+"input-$1")]})],n)}return""}).join("")}}],z=function(e){var t,r,i,o,g,_=e.key;if("css"===_){var S=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(S,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var A=e.stylisPlugins||H,R={},C=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+_+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)R[t[r]]=!0;C.push(e)});var N=(r=(t=[B,V].concat(A,[x,(i=function(e){g.insert(e)},function(e){!e.root&&(e=e.return)&&i(e)})])).length,function(e,n,i,s){for(var o="",a=0;a<r;a++)o+=t[a](e,n,i,s)||"";return o}),D=function(e){var t,r;return P((r=function e(t,r,n,i,o,g,_,T,S){for(var A,R=0,C=0,N=_,D=0,P=0,x=0,U=1,j=1,F=1,$=0,B="",V=o,H=g,z=i,W=B;j;)switch(x=$,$=w()){case 40:if(108!=x&&58==h(W,N-1)){-1!=l(W+=a(k($),"&","&\f"),"&\f")&&(F=-1);break}case 34:case 39:case 91:W+=k($);break;case 9:case 10:case 13:case 32:W+=function(e){for(;v=E();)if(v<33)w();else break;return I(e)>2||I(v)>3?"":" "}(x);break;case 92:W+=function(e,t){for(var r;--t&&w()&&!(v<48)&&!(v>102)&&(!(v>57)||!(v<65))&&(!(v>70)||!(v<97)););return r=m+(t<6&&32==E()&&32==w()),u(y,e,r)}(m-1,7);continue;case 47:switch(E()){case 42:case 47:d(b(A=function(e,t){for(;w();)if(e+v===57)break;else if(e+v===84&&47===E())break;return"/*"+u(y,t,m-1)+"*"+s(47===e?e:w())}(w(),m),r,n,O,s(v),u(A,2,-2),0),S);break;default:W+="/"}break;case 123*U:T[R++]=c(W)*F;case 125*U:case 59:case 0:switch($){case 0:case 125:j=0;case 59+C:P>0&&c(W)-N&&d(P>32?M(W+";",i,n,N-1):M(a(W," ","")+";",i,n,N-2),S);break;case 59:W+=";";default:if(d(z=L(W,r,n,R,C,o,T,B,V=[],H=[],N),g),123===$){if(0===C)e(W,r,z,z,V,g,N,T,H);else switch(99===D&&110===h(W,3)?100:D){case 100:case 109:case 115:e(t,z,z,i&&d(L(t,z,z,0,0,o,T,B,o,V=[],N),H),o,H,N,T,i?V:H);break;default:e(W,z,z,z,[""],H,0,T,H)}}}R=C=P=0,U=F=1,B=W="",N=_;break;case 58:N=1+c(W),P=x;default:if(U<1){if(123==$)--U;else if(125==$&&0==U++&&125==(v=m>0?h(y,--m):0,p--,10===v&&(p=1,f--),v))continue}switch(W+=s($),$*U){case 38:F=C>0?1:(W+="\f",-1);break;case 44:T[R++]=(c(W)-1)*F,F=1;break;case 64:45===E()&&(W+=k(w())),D=E(),C=N=c(B=W+=function(e){for(;!I(E());)w();return u(y,e,m)}(m)),$++;break;case 45:45===x&&2==c(W)&&(U=0)}}return g}("",null,null,null,[""],t=T(t=e),0,[0],t),y="",r),N)},U={key:_,sheet:new n({key:_,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:R,registered:{},insert:function(e,t,r,n){g=r,D(e?e+"{"+t.styles+"}":t.styles),n&&(U.inserted[t.name]=!0)}};return U.sheet.hydrate(C),U}},5042:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},2443:function(e,t,r){"use strict";r.d(t,{C:function(){return o},T:function(){return l},w:function(){return a}});var n=r(7294),i=r(8417);r(8137),r(7278);var s=(0,n.createContext)("undefined"!=typeof HTMLElement?(0,i.Z)({key:"css"}):null),o=s.Provider,a=function(e){return(0,n.forwardRef)(function(t,r){return e(t,(0,n.useContext)(s),r)})},l=(0,n.createContext)({})},917:function(e,t,r){"use strict";r.d(t,{F4:function(){return u},xB:function(){return l}});var n=r(7294);r(8417);var i=r(2443);r(8679);var s=r(444),o=r(8137),a=r(7278),l=(0,i.w)(function(e,t){var r=e.styles,l=(0,o.O)([r],void 0,(0,n.useContext)(i.T)),h=(0,n.useRef)();return(0,a.j)(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,i=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==i&&(n=!0,i.setAttribute("data-emotion",e),r.hydrate([i])),h.current=[r,n],function(){r.flush()}},[t]),(0,a.j)(function(){var e=h.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==l.next&&(0,s.My)(t,l.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",l,r,!1)},[t,l.name]),null});function h(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.O)(t)}var u=function(){var e=h.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},8137:function(e,t,r){"use strict";r.d(t,{O:function(){return g}});var n,i=function(e){for(var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)},s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=r(5042),a=/[A-Z]|^ms/g,l=/_EMO_([^_]+?)_([^]*?)_EMO_/g,h=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!=typeof e},c=(0,o.Z)(function(e){return h(e)?e:e.replace(a,"-$&").toLowerCase()}),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(l,function(e,t,r){return n={name:t,styles:r,next:n},t})}return 1===s[e]||h(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return n={name:r.name,styles:r.styles,next:n},r.name;if(void 0!==r.styles){var i=r.next;if(void 0!==i)for(;void 0!==i;)n={name:i.name,styles:i.styles,next:n},i=i.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=f(e,t,r[i])+";";else for(var s in r){var o=r[s];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=s+"{"+t[o]+"}":u(o)&&(n+=c(s)+":"+d(s,o)+";");else if(Array.isArray(o)&&"string"==typeof o[0]&&(null==t||void 0===t[o[0]]))for(var a=0;a<o.length;a++)u(o[a])&&(n+=c(s)+":"+d(s,o[a])+";");else{var l=f(e,t,o);switch(s){case"animation":case"animationName":n+=c(s)+":"+l+";";break;default:n+=s+"{"+l+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var s=n,o=r(e);return n=s,f(e,t,o)}}if(null==t)return r;var a=t[r];return void 0!==a?a:r}var p=/label:\s*([^\s;\n{]+)\s*(;|$)/g,g=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var s,o=!0,a="";n=void 0;var l=e[0];null==l||void 0===l.raw?(o=!1,a+=f(r,t,l)):a+=l[0];for(var h=1;h<e.length;h++)a+=f(r,t,e[h]),o&&(a+=l[h]);p.lastIndex=0;for(var u="";null!==(s=p.exec(a));)u+="-"+s[1];return{name:i(a)+u,styles:a,next:n}}},7278:function(e,t,r){"use strict";r.d(t,{L:function(){return o},j:function(){return a}});var n,i=r(7294),s=!!(n||(n=r.t(i,2))).useInsertionEffect&&(n||(n=r.t(i,2))).useInsertionEffect,o=s||function(e){return e()},a=s||i.useLayoutEffect},444:function(e,t,r){"use strict";function n(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "}),n}r.d(t,{My:function(){return s},fp:function(){return n},hC:function(){return i}});var i=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},s=function(e,t,r){i(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do e.insert(t===s?"."+n:"",s,e.sheet,!0),s=s.next;while(void 0!==s)}}},9655:function(e,t){"use strict";t.Z={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"}},6044:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(7462),i=r(3366),s=r(1387),o=r(9766),a=r(6500),l=r(1796),h={black:"#000",white:"#fff"},u={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},c={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},d=r(9655),f={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},p={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},g={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},m={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};let v=["mode","contrastThreshold","tonalOffset"],y={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:h.white,default:h.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},b={text:{primary:h.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:h.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function _(e,t,r,n){let i=n.light||n,s=n.dark||1.5*n;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:"light"===t?e.light=(0,l.$n)(e.main,i):"dark"===t&&(e.dark=(0,l._j)(e.main,s)))}let w=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],E={textTransform:"uppercase"},I='"Roboto", "Helvetica", "Arial", sans-serif';function T(...e){return`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2),${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14),${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`}let k=["none",T(0,2,1,-1,0,1,1,0,0,1,3,0),T(0,3,1,-2,0,2,2,0,0,1,5,0),T(0,3,3,-2,0,3,4,0,0,1,8,0),T(0,2,4,-1,0,4,5,0,0,1,10,0),T(0,3,5,-1,0,5,8,0,0,1,14,0),T(0,3,5,-1,0,6,10,0,0,1,18,0),T(0,4,5,-2,0,7,10,1,0,2,16,1),T(0,5,5,-3,0,8,10,1,0,3,14,2),T(0,5,6,-3,0,9,12,1,0,3,16,2),T(0,6,6,-3,0,10,14,1,0,4,18,3),T(0,6,7,-4,0,11,15,1,0,4,20,3),T(0,7,8,-4,0,12,17,2,0,5,22,4),T(0,7,8,-4,0,13,19,2,0,5,24,4),T(0,7,9,-4,0,14,21,2,0,5,26,4),T(0,8,9,-5,0,15,22,2,0,6,28,5),T(0,8,10,-5,0,16,24,2,0,6,30,5),T(0,8,11,-5,0,17,26,2,0,6,32,5),T(0,9,11,-5,0,18,28,2,0,7,34,6),T(0,9,12,-6,0,19,29,2,0,7,36,6),T(0,10,13,-6,0,20,31,3,0,8,38,7),T(0,10,13,-6,0,21,33,3,0,8,40,7),T(0,10,14,-6,0,22,35,3,0,8,42,7),T(0,11,14,-7,0,23,36,3,0,9,44,8),T(0,11,15,-7,0,24,38,3,0,9,46,8)],S=["duration","easing","delay"],A={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},R={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function O(e){return`${Math.round(e)}ms`}function C(e){if(!e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}var N={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};let D=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];var P=function(e={},...t){var r;let{mixins:T={},palette:P={},transitions:x={},typography:L={}}=e,M=(0,i.Z)(e,D);if(e.vars)throw Error((0,s.Z)(18));let U=function(e){let{mode:t="light",contrastThreshold:r=3,tonalOffset:a=.2}=e,w=(0,i.Z)(e,v),E=e.primary||function(e="light"){return"dark"===e?{main:p[200],light:p[50],dark:p[400]}:{main:p[700],light:p[400],dark:p[800]}}(t),I=e.secondary||function(e="light"){return"dark"===e?{main:c[200],light:c[50],dark:c[400]}:{main:c[500],light:c[300],dark:c[700]}}(t),T=e.error||function(e="light"){return"dark"===e?{main:d.Z[500],light:d.Z[300],dark:d.Z[700]}:{main:d.Z[700],light:d.Z[400],dark:d.Z[800]}}(t),k=e.info||function(e="light"){return"dark"===e?{main:g[400],light:g[300],dark:g[700]}:{main:g[700],light:g[500],dark:g[900]}}(t),S=e.success||function(e="light"){return"dark"===e?{main:m[400],light:m[300],dark:m[700]}:{main:m[800],light:m[500],dark:m[900]}}(t),A=e.warning||function(e="light"){return"dark"===e?{main:f[400],light:f[300],dark:f[700]}:{main:"#ed6c02",light:f[500],dark:f[900]}}(t);function R(e){let t=(0,l.mi)(e,b.text.primary)>=r?b.text.primary:y.text.primary;return t}let O=({color:e,name:t,mainShade:r=500,lightShade:i=300,darkShade:o=700})=>{if(!(e=(0,n.Z)({},e)).main&&e[r]&&(e.main=e[r]),!e.hasOwnProperty("main"))throw Error((0,s.Z)(11,t?` (${t})`:"",r));if("string"!=typeof e.main)throw Error((0,s.Z)(12,t?` (${t})`:"",JSON.stringify(e.main)));return _(e,"light",i,a),_(e,"dark",o,a),e.contrastText||(e.contrastText=R(e.main)),e},C=(0,o.Z)((0,n.Z)({common:(0,n.Z)({},h),mode:t,primary:O({color:E,name:"primary"}),secondary:O({color:I,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:O({color:T,name:"error"}),warning:O({color:A,name:"warning"}),info:O({color:k,name:"info"}),success:O({color:S,name:"success"}),grey:u,contrastThreshold:r,getContrastText:R,augmentColor:O,tonalOffset:a},{dark:b,light:y}[t]),w);return C}(P),j=(0,a.Z)(e),F=(0,o.Z)(j,{mixins:(r=j.breakpoints,(0,n.Z)({toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}}},T)),palette:U,shadows:k.slice(),typography:function(e,t){let r="function"==typeof t?t(e):t,{fontFamily:s=I,fontSize:a=14,fontWeightLight:l=300,fontWeightRegular:h=400,fontWeightMedium:u=500,fontWeightBold:c=700,htmlFontSize:d=16,allVariants:f,pxToRem:p}=r,g=(0,i.Z)(r,w),m=a/14,v=p||(e=>`${e/d*m}rem`),y=(e,t,r,i,o)=>(0,n.Z)({fontFamily:s,fontWeight:e,fontSize:v(t),lineHeight:r},s===I?{letterSpacing:`${Math.round(1e5*(i/t))/1e5}em`}:{},o,f),b={h1:y(l,96,1.167,-1.5),h2:y(l,60,1.2,-.5),h3:y(h,48,1.167,0),h4:y(h,34,1.235,.25),h5:y(h,24,1.334,0),h6:y(u,20,1.6,.15),subtitle1:y(h,16,1.75,.15),subtitle2:y(u,14,1.57,.1),body1:y(h,16,1.5,.15),body2:y(h,14,1.43,.15),button:y(u,14,1.75,.4,E),caption:y(h,12,1.66,.4),overline:y(h,12,2.66,1,E)};return(0,o.Z)((0,n.Z)({htmlFontSize:d,pxToRem:v,fontFamily:s,fontSize:a,fontWeightLight:l,fontWeightRegular:h,fontWeightMedium:u,fontWeightBold:c},b),g,{clone:!1})}(U,L),transitions:function(e){let t=(0,n.Z)({},A,e.easing),r=(0,n.Z)({},R,e.duration),s=(e=["all"],n={})=>{let{duration:s=r.standard,easing:o=t.easeInOut,delay:a=0}=n;return(0,i.Z)(n,S),(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"==typeof s?s:O(s)} ${o} ${"string"==typeof a?a:O(a)}`).join(",")};return(0,n.Z)({getAutoHeightDuration:C,create:s},e,{easing:t,duration:r})}(x),zIndex:(0,n.Z)({},N)});return F=(0,o.Z)(F,M),F=t.reduce((e,t)=>(0,o.Z)(e,t),F)}},5165:function(e,t,r){"use strict";var n=r(6044);let i=(0,n.Z)();t.Z=i},8884:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5149),i=r(5165);function s({props:e,name:t}){return(0,n.Z)({props:e,name:t,defaultTheme:i.Z})}},4819:function(e,t,r){"use strict";var n=r(7294);let i=n.createContext(null);t.Z=i},6760:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),i=r(4819);function s(){let e=n.useContext(i.Z);return e}},5408:function(e,t,r){"use strict";r.d(t,{L7:function(){return a},P$:function(){return l},VO:function(){return n},W8:function(){return o},k9:function(){return s}});let n={xs:0,sm:600,md:900,lg:1200,xl:1536},i={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${n[e]}px)`};function s(e,t,r){let s=e.theme||{};if(Array.isArray(t)){let o=s.breakpoints||i;return t.reduce((e,n,i)=>(e[o.up(o.keys[i])]=r(t[i]),e),{})}if("object"==typeof t){let a=s.breakpoints||i;return Object.keys(t).reduce((e,i)=>{if(-1!==Object.keys(a.values||n).indexOf(i)){let s=a.up(i);e[s]=r(t[i],i)}else e[i]=t[i];return e},{})}let l=r(t);return l}function o(e={}){var t;let r=null==(t=e.keys)?void 0:t.reduce((t,r)=>{let n=e.up(r);return t[n]={},t},{});return r||{}}function a(e,t){return e.reduce((e,t)=>{let r=e[t],n=!r||0===Object.keys(r).length;return n&&delete e[t],e},t)}function l({values:e,breakpoints:t,base:r}){let n;let i=r||function(e,t){if("object"!=typeof e)return{};let r={},n=Object.keys(t);return Array.isArray(e)?n.forEach((t,n)=>{n<e.length&&(r[t]=!0)}):n.forEach(t=>{null!=e[t]&&(r[t]=!0)}),r}(e,t),s=Object.keys(i);return 0===s.length?e:s.reduce((t,r,i)=>(Array.isArray(e)?(t[r]=null!=e[i]?e[i]:e[n],n=i):"object"==typeof e?(t[r]=null!=e[r]?e[r]:e[n],n=r):t[r]=e,t),{})}},1796:function(e,t,r){"use strict";r.d(t,{$n:function(){return c},Fq:function(){return h},_4:function(){return d},_j:function(){return u},mi:function(){return l}});var n=r(1387);function i(e,t=0,r=1){return Math.min(Math.max(t,e),r)}function s(e){let t;if(e.type)return e;if("#"===e.charAt(0))return s(function(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map(e=>e+e)),r?`rgb${4===r.length?"a":""}(${r.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}(e));let r=e.indexOf("("),i=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw Error((0,n.Z)(9,e));let o=e.substring(r+1,e.length-1);if("color"===i){if(t=(o=o.split(" ")).shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,n.Z)(10,t))}else o=o.split(",");return o=o.map(e=>parseFloat(e)),{type:i,values:o,colorSpace:t}}function o(e){let{type:t,colorSpace:r}=e,{values:n}=e;return -1!==t.indexOf("rgb")?n=n.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),`${t}(${n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`})`}function a(e){let t="hsl"===(e=s(e)).type||"hsla"===e.type?s(function(e){e=s(e);let{values:t}=e,r=t[0],n=t[1]/100,i=t[2]/100,a=n*Math.min(i,1-i),l=(e,t=(e+r/30)%12)=>i-a*Math.max(Math.min(t-3,9-t,1),-1),h="rgb",u=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(h+="a",u.push(t[3])),o({type:h,values:u})}(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){let r=a(e),n=a(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function h(e,t){return e=s(e),t=i(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,o(e)}function u(e,t){if(e=s(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return o(e)}function c(e,t){if(e=s(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return o(e)}function d(e,t=.15){return a(e)>.5?u(e,t):c(e,t)}},6500:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7462),i=r(3366),s=r(9766);let o=["values","unit","step"],a=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>(0,n.Z)({},e,{[t.key]:t.val}),{})};var l={borderRadius:4},h=r(8700);let u=["breakpoints","palette","spacing","shape"];var c=function(e={},...t){let{breakpoints:r={},palette:c={},spacing:d,shape:f={}}=e,p=(0,i.Z)(e,u),g=function(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:s=5}=e,l=(0,i.Z)(e,o),h=a(t),u=Object.keys(h);function c(e){let n="number"==typeof t[e]?t[e]:e;return`@media (min-width:${n}${r})`}function d(e){let n="number"==typeof t[e]?t[e]:e;return`@media (max-width:${n-s/100}${r})`}function f(e,n){let i=u.indexOf(n);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r}) and (max-width:${(-1!==i&&"number"==typeof t[u[i]]?t[u[i]]:n)-s/100}${r})`}return(0,n.Z)({keys:u,values:h,up:c,down:d,between:f,only:function(e){return u.indexOf(e)+1<u.length?f(e,u[u.indexOf(e)+1]):c(e)},not:function(e){let t=u.indexOf(e);return 0===t?c(u[1]):t===u.length-1?d(u[t]):f(e,u[u.indexOf(e)+1]).replace("@media","@media not all and")},unit:r},l)}(r),m=function(e=8){if(e.mui)return e;let t=(0,h.hB)({spacing:e}),r=(...e)=>{let r=0===e.length?[1]:e;return r.map(e=>{let r=t(e);return"number"==typeof r?`${r}px`:r}).join(" ")};return r.mui=!0,r}(d),v=(0,s.Z)({breakpoints:g,direction:"ltr",components:{},palette:(0,n.Z)({mode:"light"},c),spacing:m,shape:(0,n.Z)({},l,f)},p);return t.reduce((e,t)=>(0,s.Z)(e,t),v)}},7730:function(e,t,r){"use strict";var n=r(9766);t.Z=function(e,t){return t?(0,n.Z)(e,t,{clone:!1}):e}},8700:function(e,t,r){"use strict";r.d(t,{hB:function(){return p},eI:function(){return f},ZP:function(){return _},NA:function(){return g}});var n=r(5408),i=r(4844),s=r(7730);let o={m:"margin",p:"padding"},a={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},h=function(e){let t={};return r=>(void 0===t[r]&&(t[r]=e(r)),t[r])}(e=>{if(e.length>2){if(!l[e])return[e];e=l[e]}let[t,r]=e.split(""),n=o[t],i=a[r]||"";return Array.isArray(i)?i.map(e=>n+e):[n+i]}),u=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],c=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],d=[...u,...c];function f(e,t,r,n){var s;let o=null!=(s=(0,i.D)(e,t,!1))?s:r;return"number"==typeof o?e=>"string"==typeof e?e:o*e:Array.isArray(o)?e=>"string"==typeof e?e:o[e]:"function"==typeof o?o:()=>void 0}function p(e){return f(e,"spacing",8,"spacing")}function g(e,t){if("string"==typeof t||null==t)return t;let r=e(Math.abs(t));return t>=0?r:"number"==typeof r?-r:`-${r}`}function m(e,t){let r=p(e.theme);return Object.keys(e).map(i=>(function(e,t,r,i){if(-1===t.indexOf(r))return null;let s=h(r),o=e=>s.reduce((t,r)=>(t[r]=g(i,e),t),{}),a=e[r];return(0,n.k9)(e,a,o)})(e,t,i,r)).reduce(s.Z,{})}function v(e){return m(e,u)}function y(e){return m(e,c)}function b(e){return m(e,d)}v.propTypes={},v.filterProps=u,y.propTypes={},y.filterProps=c,b.propTypes={},b.filterProps=d;var _=b},4844:function(e,t,r){"use strict";r.d(t,{D:function(){return s}});var n=r(8320),i=r(5408);function s(e,t,r=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&r){let n=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=n)return n}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function o(e,t,r,n=r){let i;return i="function"==typeof e?e(r):Array.isArray(e)?e[r]||n:s(e,r)||n,t&&(i=t(i,n)),i}t.Z=function(e){let{prop:t,cssProperty:r=e.prop,themeKey:a,transform:l}=e,h=e=>{if(null==e[t])return null;let h=e[t],u=e.theme,c=s(u,a)||{},d=e=>{let i=o(c,l,e);return(e===i&&"string"==typeof e&&(i=o(c,l,`${t}${"default"===e?"":(0,n.Z)(e)}`,e)),!1===r)?i:{[r]:i}};return(0,i.k9)(e,h,d)};return h.propTypes={},h.filterProps=[t],h}},9718:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(6500),i=r(6760),s=function(e=null){let t=(0,i.Z)();return t&&0!==Object.keys(t).length?t:e};let o=(0,n.Z)();var a=function(e=o){return s(e)}},5149:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7925),i=r(9718);function s({props:e,name:t,defaultTheme:r}){let s=(0,i.Z)(r),o=function(e){let{theme:t,name:r,props:i}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,n.Z)(t.components[r].defaultProps,i):i}({theme:s,name:t,props:e});return o}},8320:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(1387);function i(e){if("string"!=typeof e)throw Error((0,n.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},9766:function(e,t,r){"use strict";r.d(t,{P:function(){return i},Z:function(){return function e(t,r,s={clone:!0}){let o=s.clone?(0,n.Z)({},t):t;return i(t)&&i(r)&&Object.keys(r).forEach(n=>{"__proto__"!==n&&(i(r[n])&&n in t&&i(t[n])?o[n]=e(t[n],r[n],s):o[n]=r[n])}),o}}});var n=r(7462);function i(e){return null!==e&&"object"==typeof e&&e.constructor===Object}},1387:function(e,t,r){"use strict";function n(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}r.d(t,{Z:function(){return n}})},7925:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7462);function i(e,t){let r=(0,n.Z)({},t);return Object.keys(e).forEach(t=>{void 0===r[t]&&(r[t]=e[t])}),r}},8679:function(e,t,r){"use strict";var n=r(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return n.isMemo(e)?o:a[e.$$typeof]||i}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=o;var h=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=f(r);i&&i!==p&&e(t,i,n)}var o=u(r);c&&(o=o.concat(c(r)));for(var a=l(t),g=l(r),m=0;m<o.length;++m){var v=o[m];if(!s[v]&&!(n&&n[v])&&!(g&&g[v])&&!(a&&a[v])){var y=d(r,v);try{h(t,v,y)}catch(b){}}}}return t}},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5195)}])},3753:function(e,t,r){"use strict";let n,i;r.d(t,{Ho:function(){return ay},m6:function(){return aE},aC:function(){return ab}});var s,o,a,l,h,u,c,d,f,p,g,m,v=r(5893),y=r(7294),b=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let _=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},w=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let o=e[r++],a=e[r++],l=e[r++],h=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&l)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(1023&h))}else{let u=e[r++],c=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&u)<<6|63&c)}}return t.join("")},E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){let s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,h=l?e[i+2]:0,u=s>>2,c=(3&s)<<4|a>>4,d=(15&a)<<2|h>>6,f=63&h;l||(f=64,o||(d=64)),n.push(r[u],r[c],r[d],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):w(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){let s=r[e.charAt(i++)],o=i<e.length,a=o?r[e.charAt(i)]:0;++i;let l=i<e.length,h=l?r[e.charAt(i)]:64;++i;let u=i<e.length,c=u?r[e.charAt(i)]:64;if(++i,null==s||null==a||null==h||null==c)throw new I;let d=s<<2|a>>4;if(n.push(d),64!==h){let f=a<<4&240|h>>2;if(n.push(f),64!==c){let p=h<<6&192|c;n.push(p)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let T=function(e){let t=_(e);return E.encodeByteArray(t,!0)},k=function(e){return T(e).replace(/\./g,"")},S=function(e){try{return E.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},A=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,R=()=>{if(void 0===b||void 0===b.env)return;let e=b.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},O=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let r=e&&S(e[1]);return r&&JSON.parse(r)},C=()=>{try{return A()||R()||O()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},N=e=>{var t,r;return null===(r=null===(t=C())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},D=e=>{let t=N(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},P=()=>{var e;return null===(e=C())||void 0===e?void 0:e.config},x=e=>{var t;return null===(t=C())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class L{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[k(JSON.stringify({alg:"none",type:"JWT"})),k(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function U(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class j extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace($,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new j(n,o,r);return a}}let $=/\{\$([^}]+)}/g;function B(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let s=e[i],o=t[i];if(V(s)&&V(o)){if(!B(s,o))return!1}else if(s!==o)return!1}for(let a of n)if(!r.includes(a))return!1;return!0}function V(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function H(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function z(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function W(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class G{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=K),void 0===n.error&&(n.error=K),void 0===n.complete&&(n.complete=K);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function q(e){return e&&e._delegate?e._delegate:e}class Z{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let X="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new L;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:X})}catch(t){}for(let[r,n]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(r);try{let s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch(o){}}}}clearInstance(e=X){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=X){return this.instances.has(e)}getOptions(e=X){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[i,s]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(i);r===o&&s.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===X?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=X){return this.component?this.component.multipleInstances?e:X:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new J(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Q=[];(eG=eK||(eK={}))[eG.DEBUG=0]="DEBUG",eG[eG.VERBOSE=1]="VERBOSE",eG[eG.INFO=2]="INFO",eG[eG.WARN=3]="WARN",eG[eG.ERROR=4]="ERROR",eG[eG.SILENT=5]="SILENT";let ee={debug:eK.DEBUG,verbose:eK.VERBOSE,info:eK.INFO,warn:eK.WARN,error:eK.ERROR,silent:eK.SILENT},et=eK.INFO,er={[eK.DEBUG]:"log",[eK.VERBOSE]:"log",[eK.INFO]:"info",[eK.WARN]:"warn",[eK.ERROR]:"error"},en=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=er[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ei{constructor(e){this.name=e,this._logLevel=et,this._logHandler=en,this._userLogHandler=null,Q.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in eK))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ee[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,eK.DEBUG,...e),this._logHandler(this,eK.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,eK.VERBOSE,...e),this._logHandler(this,eK.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,eK.INFO,...e),this._logHandler(this,eK.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,eK.WARN,...e),this._logHandler(this,eK.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,eK.ERROR,...e),this._logHandler(this,eK.ERROR,...e)}}let es=(e,t)=>t.some(t=>e instanceof t),eo=new WeakMap,ea=new WeakMap,el=new WeakMap,eh=new WeakMap,eu=new WeakMap,ec={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return ea.get(e);if("objectStoreNames"===t)return e.objectStoreNames||el.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ed(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ed(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ed(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eo.set(t,e)}).catch(()=>{}),eu.set(t,e),t}(e);if(eh.has(e))return eh.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(ef(this),e),ed(eo.get(this))}:function(...e){return ed(t.apply(ef(this),e))}:function(e,...r){let n=t.call(ef(this),e,...r);return el.set(n,e.sort?e.sort():[e]),ed(n)}:(t instanceof IDBTransaction&&function(e){if(ea.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});ea.set(e,t)}(t),es(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,ec):t;return r!==e&&(eh.set(e,r),eu.set(r,e)),r}let ef=e=>eu.get(e),ep=["get","getKey","getAll","getAllKeys","count"],eg=["put","add","delete","clear"],em=new Map;function ev(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(em.get(t))return em.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=eg.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||ep.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return em.set(t,s),s}ec={...eW=ec,get:(e,t,r)=>ev(e,t)||eW.get(e,t,r),has:(e,t)=>!!ev(e,t)||eW.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ey{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let eb="@firebase/app",e_="0.9.5",ew=new ei("@firebase/app"),eE="[DEFAULT]",eI={[eb]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eT=new Map,ek=new Map;function eS(e){let t=e.name;if(ek.has(t))return ew.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(ek.set(t,e),eT.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){ew.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function eA(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let eR=new F("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eO{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eR.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eC="9.18.0";function eN(e,t={}){let r=e;if("object"!=typeof t){let n=t;t={name:n}}let i=Object.assign({name:eE,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw eR.create("bad-app-name",{appName:String(s)});if(r||(r=P()),!r)throw eR.create("no-options");let o=eT.get(s);if(o){if(B(r,o.options)&&B(i,o.config))return o;throw eR.create("duplicate-app",{appName:s})}let a=new Y(s);for(let l of ek.values())a.addComponent(l);let h=new eO(r,i,a);return eT.set(s,h),h}function eD(e=eE){let t=eT.get(e);if(!t&&e===eE)return eN();if(!t)throw eR.create("no-app",{appName:e});return t}function eP(){return Array.from(eT.values())}function ex(e,t,r){var n;let i=null!==(n=eI[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ew.warn(a.join(" "));return}eS(new Z(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let eL="firebase-heartbeat-store",eM=null;function eU(){return eM||(eM=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=ed(o);return n&&o.addEventListener("upgradeneeded",e=>{n(ed(o.result),e.oldVersion,e.newVersion,ed(o.transaction))}),r&&o.addEventListener("blocked",()=>r()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade(e,t){0===t&&e.createObjectStore(eL)}}).catch(e=>{throw eR.create("idb-open",{originalErrorMessage:e.message})})),eM}async function ej(e){try{let t=await eU();return t.transaction(eL).objectStore(eL).get(e$(e))}catch(n){if(n instanceof j)ew.warn(n.message);else{let r=eR.create("idb-get",{originalErrorMessage:null==n?void 0:n.message});ew.warn(r.message)}}}async function eF(e,t){try{let r=await eU(),n=r.transaction(eL,"readwrite"),i=n.objectStore(eL);return await i.put(t,e$(e)),n.done}catch(o){if(o instanceof j)ew.warn(o.message);else{let s=eR.create("idb-set",{originalErrorMessage:null==o?void 0:o.message});ew.warn(s.message)}}}function e$(e){return`${e.name}!${e.options.appId}`}class eB{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eH(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=eV();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eV(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let s=r.find(e=>e.agent===i.agent);if(s){if(s.dates.push(i.date),ez(r)>t){s.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),ez(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=k(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function eV(){let e=new Date;return e.toISOString().substring(0,10)}class eH{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await ej(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return eF(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return eF(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ez(e){return k(JSON.stringify({version:2,heartbeats:e})).length}eS(new Z("platform-logger",e=>new ey(e),"PRIVATE")),eS(new Z("heartbeat",e=>new eB(e),"PRIVATE")),ex(eb,e_,""),ex(eb,e_,"esm2017"),ex("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ex("firebase","9.18.0","app");var eW,eG,eK,eq,eZ="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},eX={},eJ=eJ||{},eY=eZ||self;function eQ(){}function e0(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function e1(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function e2(e,t,r){return e.call.apply(e.bind,arguments)}function e5(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function e4(e,t,r){return(e4=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e2:e5).apply(null,arguments)}function e3(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function e6(e,t){function r(){}r.prototype=t.prototype,e.X=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Wb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function e7(){this.s=this.s,this.o=this.o}e7.prototype.s=!1,e7.prototype.na=function(){this.s||(this.s=!0,this.M())},e7.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let e8=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function e9(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function te(e,t){for(let r=1;r<arguments.length;r++){let n=arguments[r];if(e0(n)){let i=e.length||0,s=n.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=n[o]}else e.push(n)}}function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var tr=function(){if(!eY.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{eY.addEventListener("test",eQ,t),eY.removeEventListener("test",eQ,t)}catch(r){}return e}();function tn(e){return/^[\s\xa0]*$/.test(e)}var ti=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ts(e,t){return e<t?-1:e>t?1:0}function to(){var e=eY.navigator;return e&&(e=e.userAgent)?e:""}function ta(e){return -1!=to().indexOf(e)}function tl(e){return tl[" "](e),e}tl[" "]=eQ;var th=ta("Opera"),tu=ta("Trident")||ta("MSIE"),tc=ta("Edge"),td=tc||tu,tf=ta("Gecko")&&!(-1!=to().toLowerCase().indexOf("webkit")&&!ta("Edge"))&&!(ta("Trident")||ta("MSIE"))&&!ta("Edge"),tp=-1!=to().toLowerCase().indexOf("webkit")&&!ta("Edge");function tg(){var e=eY.document;return e?e.documentMode:void 0}e:{var tm,tv="",ty=(tm=to(),tf?/rv:([^\);]+)(\)|;)/.exec(tm):tc?/Edge\/([\d\.]+)/.exec(tm):tu?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(tm):tp?/WebKit\/(\S+)/.exec(tm):th?/(?:Version)[ \/]?(\S+)/.exec(tm):void 0);if(ty&&(tv=ty?ty[1]:""),tu){var tb=tg();if(null!=tb&&tb>parseFloat(tv)){h=String(tb);break e}}h=tv}var t_={},tw=eY.document&&tu&&(tg()||parseInt(h,10))||void 0;function tE(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(tf){e:{try{tl(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tI[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tE.X.h.call(this)}}e6(tE,tt);var tI={2:"touch",3:"pen",4:"mouse"};tE.prototype.h=function(){tE.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tT="closure_listenable_"+(1e6*Math.random()|0),tk=0;function tS(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++tk,this.ba=this.ea=!1}function tA(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function tR(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function tO(e){let t={};for(let r in e)t[r]=e[r];return t}let tC="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tN(e,t){let r,n;for(let i=1;i<arguments.length;i++){for(r in n=arguments[i])e[r]=n[r];for(let s=0;s<tC.length;s++)r=tC[s],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function tD(e){this.src=e,this.g={},this.h=0}function tP(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=e8(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(tA(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function tx(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}tD.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=tx(e,t,n,i);return -1<o?(t=e[o],r||(t.ea=!1)):((t=new tS(t,this.src,s,!!n,i)).ea=r,e.push(t)),t};var tL="closure_lm_"+(1e6*Math.random()|0),tM={};function tU(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=e1(i)?!!i.capture:!!i,a=tB(e);if(a||(e[tL]=a=new tD(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return t$.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)tr||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(tF(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function tj(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[tT])tP(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(tF(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=tB(t))?(tP(r,e),0==r.h&&(r.src=null,t[tL]=null)):tA(e)}}}function tF(e){return e in tM?tM[e]:tM[e]="on"+e}function t$(e,t){if(e.ba)e=!0;else{t=new tE(t,this);var r=e.listener,n=e.ha||e.src;e.ea&&tj(e),e=r.call(n,t)}return e}function tB(e){return(e=e[tL])instanceof tD?e:null}var tV="__closure_events_fn_"+(1e9*Math.random()>>>0);function tH(e){return"function"==typeof e?e:(e[tV]||(e[tV]=function(t){return e.handleEvent(t)}),e[tV])}function tz(){e7.call(this),this.i=new tD(this),this.P=this,this.I=null}function tW(e,t){var r,n=e.I;if(n)for(r=[];n;n=n.I)r.push(n);if(e=e.P,n=t.type||t,"string"==typeof t)t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var i=t;tN(t=new tt(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=tG(o,n,!0,t)&&i}if(i=tG(o=t.g=e,n,!0,t)&&i,i=tG(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=tG(o=t.g=r[s],n,!1,t)&&i}function tG(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.ea&&tP(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}e6(tz,e7),tz.prototype[tT]=!0,tz.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=e1(i)?!!i.capture:!!i,n=tH(n),t&&t[tT])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=tx(o=t.g[r],n,i,s))&&(tA(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=tB(t))&&(r=t.g[r.toString()],t=-1,r&&(t=tx(r,n,i,s)),(n=-1<t?r[t]:null)&&tj(n))}(this,e,t,r,n)},tz.prototype.M=function(){if(tz.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)tA(r[n]);delete t.g[e],t.h--}}this.I=null},tz.prototype.N=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},tz.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var tK=eY.JSON.stringify,tq=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new tZ,e=>e.reset());class tZ{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function tX(e,t){var r;c||(r=eY.Promise.resolve(void 0),c=function(){r.then(tQ)}),tJ||(c(),tJ=!0),tY.add(e,t)}var tJ=!1,tY=new class{constructor(){this.h=this.g=null}add(e,t){let r=tq.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}};function tQ(){let e;for(;e=null,(r=tY).g&&(e=r.g,r.g=r.g.next,r.g||(r.h=null),e.next=null),n=e;){try{n.h.call(n.g)}catch(t){!function(e){eY.setTimeout(()=>{throw e},0)}(t)}var r,n,i=tq;i.j(n),100>i.h&&(i.h++,n.next=i.g,i.g=n)}tJ=!1}function t0(e,t){tz.call(this),this.h=e||1,this.g=t||eY,this.j=e4(this.lb,this),this.l=Date.now()}function t1(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function t2(e,t,r){if("function"==typeof e)r&&(e=e4(e,r));else if(e&&"function"==typeof e.handleEvent)e=e4(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:eY.setTimeout(e,t||0)}e6(t0,tz),(eq=t0.prototype).ca=!1,eq.R=null,eq.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tW(this,"tick"),this.ca&&(t1(this),this.start()))}},eq.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},eq.M=function(){t0.X.M.call(this),t1(this),delete this.g};class t5 extends e7{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=t2(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}M(){super.M(),this.g&&(eY.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function t4(e){e7.call(this),this.h=e,this.g={}}e6(t4,e7);var t3=[];function t6(e,t,r,n){Array.isArray(r)||(r&&(t3[0]=r.toString()),r=t3);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=tH(n),t&&t[tT]?t.O(r,n,e1(i)?!!i.capture:!!i,s):tU(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=tH(n),t&&t[tT]?t.N(r,n,e1(i)?!!i.capture:!!i,s):tU(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function t7(e){tR(e.g,function(e,t){this.g.hasOwnProperty(t)&&tj(e)},e),e.g={}}function t8(){this.g=!0}function t9(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return tK(r)}catch(a){return t}}(e,r)+(n?" "+n:"")})}t4.prototype.M=function(){t4.X.M.call(this),t7(this)},t4.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},t8.prototype.Aa=function(){this.g=!1},t8.prototype.info=function(){};var re={},rt=null;function rr(){return rt=rt||new tz}function rn(e){tt.call(this,re.Pa,e)}function ri(e){let t=rr();tW(t,new rn(t))}function rs(e,t){tt.call(this,re.STAT_EVENT,e),this.stat=t}function ro(e){let t=rr();tW(t,new rs(t,e))}function ra(e,t){tt.call(this,re.Qa,e),this.size=t}function rl(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return eY.setTimeout(function(){e()},t)}re.Pa="serverreachability",e6(rn,tt),re.STAT_EVENT="statevent",e6(rs,tt),re.Qa="timingevent",e6(ra,tt);var rh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ru={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function rc(){}function rd(e){return e.h||(e.h=e.i())}function rf(){}rc.prototype.h=null;var rp={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function rg(){tt.call(this,"d")}function rm(){tt.call(this,"c")}function rv(){}function ry(e,t,r,n){this.l=e,this.j=t,this.m=r,this.U=n||1,this.S=new t4(this),this.O=r_,e=td?125:void 0,this.T=new t0(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rb}function rb(){this.i=null,this.g="",this.h=!1}e6(rg,tt),e6(rm,tt),e6(rv,rc),rv.prototype.g=function(){return new XMLHttpRequest},rv.prototype.i=function(){return{}},d=new rv;var r_=45e3,rw={},rE={};function rI(e,t,r){e.K=1,e.v=rB(rM(t)),e.s=r,e.P=!0,rT(e,null)}function rT(e,t){e.F=Date.now(),rA(e),e.A=rM(e.v);var r=e.A,n=e.U;Array.isArray(n)||(n=[String(n)]),r0(r.i,"t",n),e.C=0,r=e.l.H,e.h=new rb,e.g=nH(e.l,r?t:null,!e.s),0<e.N&&(e.L=new t5(e4(e.La,e,e.g),e.N)),t6(e.S,e.g,"readystatechange",e.ib),t=e.H?tO(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ri(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.j,e.u,e.A,e.m,e.U,e.s)}function rk(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function rS(e,t,r){let n=!0,i;for(;!e.I&&e.C<r.length;)if((i=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?rE:isNaN(r=Number(t.substring(r,n)))?rw:(n+=1)+r>t.length?rE:(t=t.substr(n,r),e.C=n+r,t)}(e,r))==rE){4==t&&(e.o=4,ro(14),n=!1),t9(e.j,e.m,null,"[Incomplete Response]");break}else if(i==rw){e.o=4,ro(15),t9(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else t9(e.j,e.m,i,null),rD(e,i);rk(e)&&i!=rE&&i!=rw&&(e.h.g="",e.C=0),4!=t||0!=r.length||e.h.h||(e.o=1,ro(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),nL(t),t.K=!0,ro(11))):(t9(e.j,e.m,r,"[Invalid Chunked Response]"),rN(e),rC(e))}function rA(e){e.V=Date.now()+e.O,rR(e,e.O)}function rR(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=rl(e4(e.gb,e),t)}function rO(e){e.B&&(eY.clearTimeout(e.B),e.B=null)}function rC(e){0==e.l.G||e.I||nj(e.l,e)}function rN(e){rO(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,t1(e.T),t7(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function rD(e,t){try{var r=e.l;if(0!=r.G&&(r.g==e||r7(r.h,e))){if(!e.J&&r7(r.h,e)&&3==r.G){try{var n=r.Fa.g.parse(t)}catch(i){n=null}if(Array.isArray(n)&&3==n.length){var s=n;if(0==s[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)nU(r),nA(r);else break e}nx(r),ro(18)}}else r.Ba=s[1],0<r.Ba-r.T&&37500>s[2]&&r.L&&0==r.A&&!r.v&&(r.v=rl(e4(r.cb,r),6e3));if(1>=r6(r.h)&&r.ja){try{r.ja()}catch(o){}r.ja=void 0}}else n$(r,11)}else if((e.J||r.g==e)&&nU(r),!tn(t))for(s=r.Fa.g.parse(t),t=0;t<s.length;t++){let a=s[t];if(r.T=a[0],a=a[1],2==r.G){if("c"==a[0]){r.I=a[1],r.ka=a[2];let l=a[3];null!=l&&(r.ma=l,r.j.info("VER="+r.ma));let h=a[4];null!=h&&(r.Ca=h,r.j.info("SVER="+r.Ca));let u=a[5];null!=u&&"number"==typeof u&&0<u&&(n=1.5*u,r.J=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let c=e.g;if(c){let d=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var f=n.h;f.g||-1==d.indexOf("spdy")&&-1==d.indexOf("quic")&&-1==d.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(r8(f,f.h),f.h=null))}if(n.D){let p=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(n.za=p,r$(n.F,n.D,p))}}if(r.G=3,r.l&&r.l.xa(),r.$&&(r.P=Date.now()-e.F,r.j.info("Handshake RTT: "+r.P+"ms")),(n=r).sa=nV(n,n.H?n.ka:null,n.V),e.J){r9(n.h,e);var g=n.J;g&&e.setTimeout(g),e.B&&(rO(e),rA(e)),n.g=e}else nP(n);0<r.i.length&&nO(r)}else"stop"!=a[0]&&"close"!=a[0]||n$(r,7)}else 3==r.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?n$(r,7):nS(r):"noop"!=a[0]&&r.l&&r.l.wa(a),r.A=0)}}ri(4)}catch(m){}}function rP(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(e0(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(e0(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(e0(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(eq=ry.prototype).setTimeout=function(e){this.O=e},eq.ib=function(e){e=e.target;let t=this.L;t&&3==n_(e)?t.l():this.La(e)},eq.La=function(e){try{if(e==this.g)e:{let t=n_(this.g);var r=this.g.Ea();let n=this.g.aa();if(!(3>t)&&(3!=t||td||this.g&&(this.h.h||this.g.fa()||nw(this.g)))){this.I||4!=t||7==r||(8==r||0>=n?ri(3):ri(2)),rO(this);var i=this.g.aa();this.Y=i;t:if(rk(this)){var s=nw(this.g);e="";var o=s.length,a=4==n_(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rN(this),rC(this);var l="";break t}this.h.i=new eY.TextDecoder}for(r=0;r<o;r++)this.h.h=!0,e+=this.h.i.decode(s[r],{stream:a&&r==o-1});s.splice(0,o),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.fa();if(this.i=200==i,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.U,t,i),this.i){if(this.Z&&!this.J){t:{if(this.g){var h,u=this.g;if((h=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tn(h)){var c=h;break t}}c=null}if(i=c)t9(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,rD(this,i);else{this.i=!1,this.o=3,ro(12),rN(this),rC(this);break e}}this.P?(rS(this,t,l),td&&this.i&&3==t&&(t6(this.S,this.T,"tick",this.hb),this.T.start())):(t9(this.j,this.m,l,null),rD(this,l)),4==t&&rN(this),this.i&&!this.I&&(4==t?nj(this.l,this):(this.i=!1,rA(this)))}else 400==i&&0<l.indexOf("Unknown SID")?(this.o=3,ro(12)):(this.o=0,ro(13)),rN(this),rC(this)}}}catch(d){}finally{}},eq.hb=function(){if(this.g){var e=n_(this.g),t=this.g.fa();this.C<t.length&&(rO(this),rS(this,e,t),this.i&&4!=e&&rA(this))}},eq.cancel=function(){this.I=!0,rN(this)},eq.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(ri(),ro(17)),rN(this),this.o=2,rC(this)):rR(this,this.V-e)};var rx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rL(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof rL){this.h=void 0!==t?t:e.h,rU(this,e.j),this.s=e.s,this.g=e.g,rj(this,e.m),this.l=e.l,t=e.i;var r=new rX;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),rF(this,r),this.o=e.o}else e&&(r=String(e).match(rx))?(this.h=!!t,rU(this,r[1]||"",!0),this.s=rV(r[2]||""),this.g=rV(r[3]||"",!0),rj(this,r[4]),this.l=rV(r[5]||"",!0),rF(this,r[6]||"",!0),this.o=rV(r[7]||"")):(this.h=!!t,this.i=new rX(null,this.h))}function rM(e){return new rL(e)}function rU(e,t,r){e.j=r?rV(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function rj(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function rF(e,t,r){var n,i;t instanceof rX?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(rJ(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(rY(this,t),r0(this,r,e))},n)),n.j=i):(r||(t=rH(t,rq)),e.i=new rX(t,e.h))}function r$(e,t,r){e.i.set(t,r)}function rB(e){return r$(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rV(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rH(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,rz),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rz(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rL.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rH(t,rW,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(rH(t,rW,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(rH(r,"/"==r.charAt(0)?rK:rG,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",rH(r,rZ)),e.join("")};var rW=/[#\/\?@]/g,rG=/[#\?:]/g,rK=/[#\?]/g,rq=/[#\?@]/g,rZ=/#/g;function rX(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rJ(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function rY(e,t){rJ(e),t=r1(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rQ(e,t){return rJ(e),t=r1(e,t),e.g.has(t)}function r0(e,t,r){rY(e,t),0<r.length&&(e.i=null,e.g.set(r1(e,t),e9(r)),e.h+=r.length)}function r1(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(eq=rX.prototype).add=function(e,t){rJ(this),this.i=null,e=r1(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},eq.forEach=function(e,t){rJ(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},eq.oa=function(){rJ(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let s=0;s<i.length;s++)r.push(t[n])}return r},eq.W=function(e){rJ(this);let t=[];if("string"==typeof e)rQ(this,e)&&(t=t.concat(this.g.get(r1(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},eq.set=function(e,t){return rJ(this),this.i=null,rQ(this,e=r1(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},eq.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},eq.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let i=encodeURIComponent(String(n)),s=this.W(n);for(n=0;n<s.length;n++){var o=i;""!==s[n]&&(o+="="+encodeURIComponent(String(s[n]))),e.push(o)}}return this.i=e.join("&")};var r2=class{constructor(e,t){this.h=e,this.g=t}};function r5(e){this.l=e||r4,e=eY.PerformanceNavigationTiming?0<(e=eY.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(eY.g&&eY.g.Ga&&eY.g.Ga()&&eY.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var r4=10;function r3(e){return!!e.h||!!e.g&&e.g.size>=e.j}function r6(e){return e.h?1:e.g?e.g.size:0}function r7(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function r8(e,t){e.g?e.g.add(t):e.h=t}function r9(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ne(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return e9(e.i)}function nt(){}function nr(){this.g=new nt}function nn(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(s){}}function ni(e){this.l=e.ac||null,this.j=e.jb||!1}function ns(e,t){tz.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=no,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}r5.prototype.cancel=function(){if(this.i=ne(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},nt.prototype.stringify=function(e){return eY.JSON.stringify(e,void 0)},nt.prototype.parse=function(e){return eY.JSON.parse(e,void 0)},e6(ni,rc),ni.prototype.g=function(){return new ns(this.l,this.j)},ni.prototype.i=(s={},function(){return s}),e6(ns,tz);var no=0;function na(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function nl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nh(e)}function nh(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(eq=ns.prototype).open=function(e,t){if(this.readyState!=no)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nh(this)},eq.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||eY).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},eq.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,nl(this)),this.readyState=no},eq.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nh(this)),this.g&&(this.readyState=3,nh(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==eY.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;na(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},eq.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nl(this):nh(this),3==this.readyState&&na(this)}},eq.Va=function(e){this.g&&(this.response=this.responseText=e,nl(this))},eq.Ua=function(e){this.g&&(this.response=e,nl(this))},eq.ga=function(){this.g&&nl(this)},eq.setRequestHeader=function(e,t){this.v.append(e,t)},eq.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},eq.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(ns.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var nu=eY.JSON.parse;function nc(e){tz.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nd,this.K=this.L=!1}e6(nc,tz);var nd="",nf=/^https?$/i,np=["POST","PUT"];function ng(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nm(e),ny(e)}function nm(e){e.D||(e.D=!0,tW(e,"complete"),tW(e,"error"))}function nv(e){if(e.h&&void 0!==eJ&&(!e.C[1]||4!=n_(e)||2!=e.aa())){if(e.v&&4==n_(e))t2(e.Ha,0,e);else if(tW(e,"readystatechange"),4==n_(e)){e.h=!1;try{let t=e.aa();e:switch(t){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r,n,i=!0;break e;default:i=!1}if(!(r=i)){if(n=0===t){var s=String(e.H).match(rx)[1]||null;if(!s&&eY.self&&eY.self.location){var o=eY.self.location.protocol;s=o.substr(0,o.length-1)}n=!nf.test(s?s.toLowerCase():"")}r=n}if(r)tW(e,"complete"),tW(e,"success");else{e.m=6;try{var a=2<n_(e)?e.g.statusText:""}catch(l){a=""}e.j=a+" ["+e.aa()+"]",nm(e)}}finally{ny(e)}}}}function ny(e,t){if(e.g){nb(e);let r=e.g,n=e.C[0]?eQ:null;e.g=null,e.C=null,t||tW(e,"ready");try{r.onreadystatechange=n}catch(i){}}}function nb(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(eY.clearTimeout(e.A),e.A=null)}function n_(e){return e.g?e.g.readyState:0}function nw(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case nd:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function nE(e){let t="";return tR(e,function(e,r){t=r+":"+e+"\r\n"}),t}function nI(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=nE(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):r$(e,t,r))}function nT(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function nk(e){this.Ca=0,this.i=[],this.j=new t8,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=nT("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=nT("baseRetryDelayMs",5e3,e),this.bb=nT("retryDelaySeedMs",1e4,e),this.$a=nT("forwardChannelMaxRetries",2,e),this.ta=nT("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new r5(e&&e.concurrentRequestLimit),this.Fa=new nr,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function nS(e){if(nR(e),3==e.G){var t=e.U++,r=rM(e.F);r$(r,"SID",e.I),r$(r,"RID",t),r$(r,"TYPE","terminate"),nN(e,r),(t=new ry(e,e.j,t,void 0)).K=2,t.v=rB(rM(r)),r=!1,eY.navigator&&eY.navigator.sendBeacon&&(r=eY.navigator.sendBeacon(t.v.toString(),"")),!r&&eY.Image&&((new Image).src=t.v,r=!0),r||(t.g=nH(t.l,null),t.g.da(t.v)),t.F=Date.now(),rA(t)}nB(e)}function nA(e){e.g&&(nL(e),e.g.cancel(),e.g=null)}function nR(e){nA(e),e.u&&(eY.clearTimeout(e.u),e.u=null),nU(e),e.h.cancel(),e.m&&("number"==typeof e.m&&eY.clearTimeout(e.m),e.m=null)}function nO(e){r3(e.h)||e.m||(e.m=!0,tX(e.Ja,e),e.C=0)}function nC(e,t){var r;r=t?t.m:e.U++;let n=rM(e.F);r$(n,"SID",e.I),r$(n,"RID",r),r$(n,"AID",e.T),nN(e,n),e.o&&e.s&&nI(n,e.o,e.s),r=new ry(e,e.j,r,e.C+1),null===e.o&&(r.H=e.s),t&&(e.i=t.D.concat(e.i)),t=nD(e,r,1e3),r.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),r8(e.h,r),rI(r,n,t)}function nN(e,t){e.ia&&tR(e.ia,function(e,r){r$(t,r,e)}),e.l&&rP({},function(e,r){r$(t,r,e)})}function nD(e,t,r){r=Math.min(e.i.length,r);var n=e.l?e4(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){let o=["count="+r];-1==s?0<r?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<r;l++){let h=i[l].h,u=i[l].g;if(0>(h-=s))s=Math.max(0,i[l].h-100),a=!1;else try{!function(e,t,r){let n=r||"";try{rP(e,function(e,r){let i=e;e1(e)&&(i=tK(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(i){throw t.push(n+"type="+encodeURIComponent("_badmap")),i}}(u,o,"req"+h+"_")}catch(c){n&&n(u)}}if(a){n=o.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function nP(e){e.g||e.u||(e.Z=1,tX(e.Ia,e),e.A=0)}function nx(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=rl(e4(e.Ia,e),nF(e,e.A)),e.A++,!0)}function nL(e){null!=e.B&&(eY.clearTimeout(e.B),e.B=null)}function nM(e){e.g=new ry(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=rM(e.sa);r$(t,"RID","rpc"),r$(t,"SID",e.I),r$(t,"CI",e.L?"0":"1"),r$(t,"AID",e.T),r$(t,"TYPE","xmlhttp"),nN(e,t),e.o&&e.s&&nI(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var r=e.g;e=e.ka,r.K=1,r.v=rB(rM(t)),r.s=null,r.P=!0,rT(r,e)}function nU(e){null!=e.v&&(eY.clearTimeout(e.v),e.v=null)}function nj(e,t){var r=null;if(e.g==t){nU(e),nL(e),e.g=null;var n=2}else{if(!r7(e.h,t))return;r=t.D,r9(e.h,t),n=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==n){r=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,o=e.C;tW(n=rr(),new ra(n,r)),nO(e)}else nP(e)}else if(3==(o=t.o)||0==o&&0<e.pa||!(1==n&&(i=e,s=t,!(r6(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Za?0:i.$a))&&(i.m=rl(e4(i.Ja,i,s),nF(i,i.C)),i.C++,!0)))||2==n&&nx(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),o){case 1:n$(e,5);break;case 4:n$(e,10);break;case 3:n$(e,6);break;default:n$(e,2)}}}function nF(e,t){let r=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(r*=2),r*t}function n$(e,t){if(e.j.info("Error code "+t),2==t){var r=null;e.l&&(r=null);var n=e4(e.kb,e);r||(r=new rL("//www.google.com/images/cleardot.gif"),eY.location&&"http"==eY.location.protocol||rU(r,"https"),rB(r)),function(e,t){let r=new t8;if(eY.Image){let n=new Image;n.onload=e3(nn,r,n,"TestLoadImage: loaded",!0,t),n.onerror=e3(nn,r,n,"TestLoadImage: error",!1,t),n.onabort=e3(nn,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=e3(nn,r,n,"TestLoadImage: timeout",!1,t),eY.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else ro(2);e.G=0,e.l&&e.l.va(t),nB(e),nR(e)}function nB(e){if(e.G=0,e.la=[],e.l){let t=ne(e.h);(0!=t.length||0!=e.i.length)&&(te(e.la,t),te(e.la,e.i),e.h.i.length=0,e9(e.i),e.i.length=0),e.l.ua()}}function nV(e,t,r){var n=r instanceof rL?rM(r):new rL(r,void 0);if(""!=n.g)t&&(n.g=t+"."+n.g),rj(n,n.m);else{var i=eY.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new rL(null,void 0);n&&rU(s,n),t&&(s.g=t),i&&rj(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.za,r&&t&&r$(n,r,t),r$(n,"VER",e.ma),nN(e,n),n}function nH(e,t,r){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new nc(r&&e.Da&&!e.ra?new ni({jb:!0}):e.ra)).Ka(e.H),t}function nz(){}function nW(){if(tu&&!(10<=Number(tw)))throw Error("Environmental error: no available transport.")}function nG(e,t){tz.call(this),this.g=new nk(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!tn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!tn(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nZ(this)}function nK(e){rg.call(this);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nq(){rm.call(this),this.status=1}function nZ(e){this.g=e}(eq=nc.prototype).Ka=function(e){this.L=e},eq.da=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():d.g(),this.C=this.u?rd(this.u):rd(d),this.g.onreadystatechange=e4(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){ng(this,i);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)r.set(s,n[s]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let o of n.keys())r.set(o,n.get(o));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[a,l]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=eY.FormData&&e instanceof eY.FormData,!(0<=e8(np,t))||n||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(a,l);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var u,c;nb(this),0<this.B&&((this.K=(u=this.g,tu&&(c=t_,Object.prototype.hasOwnProperty.call(c,9)?c[9]:c[9]=function(){let e=0,t=ti(String(h)).split("."),r=ti("9").split("."),n=Math.max(t.length,r.length);for(let i=0;0==e&&i<n;i++){var s=t[i]||"",o=r[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=ts(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||ts(0==s[2].length,0==o[2].length)||ts(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}(9))&&"number"==typeof u.timeout&&void 0!==u.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=e4(this.qa,this)):this.A=t2(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(f){ng(this,f)}},eq.qa=function(){void 0!==eJ&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tW(this,"timeout"),this.abort(8))},eq.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tW(this,"complete"),tW(this,"abort"),ny(this))},eq.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ny(this,!0)),nc.X.M.call(this)},eq.Ha=function(){this.s||(this.F||this.v||this.l?nv(this):this.fb())},eq.fb=function(){nv(this)},eq.aa=function(){try{return 2<n_(this)?this.g.status:-1}catch(e){return -1}},eq.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},eq.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),nu(t)}},eq.Ea=function(){return this.m},eq.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(eq=nk.prototype).ma=8,eq.G=1,eq.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let t=new ry(this,this.j,e,void 0),r=this.s;if(this.S&&(r?tN(r=tO(r),this.S):r=this.S),null!==this.o||this.N||(t.H=r,r=null),this.O)e:{for(var n=0,i=0;i<this.i.length;i++){t:{var s=this.i[i];if("__data__"in s.g&&"string"==typeof(s=s.g.__data__)){s=s.length;break t}s=void 0}if(void 0===s)break;if(4096<(n+=s)){n=i;break e}if(4096===n||i===this.i.length-1){n=i+1;break e}}n=1e3}else n=1e3;n=nD(this,t,n),r$(i=rM(this.F),"RID",e),r$(i,"CVER",22),this.D&&r$(i,"X-HTTP-Session-Id",this.D),nN(this,i),r&&(this.N?n="headers="+encodeURIComponent(String(nE(r)))+"&"+n:this.o&&nI(i,this.o,r)),r8(this.h,t),this.Ya&&r$(i,"TYPE","init"),this.O?(r$(i,"$req",n),r$(i,"SID","null"),t.Z=!0,rI(t,i,null)):rI(t,i,n),this.G=2}}else 3==this.G&&(e?nC(this,e):0==this.i.length||r3(this.h)||nC(this))}},eq.Ia=function(){if(this.u=null,nM(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=rl(e4(this.eb,this),e)}},eq.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ro(10),nA(this),nM(this))},eq.cb=function(){null!=this.v&&(this.v=null,nA(this),nx(this),ro(19))},eq.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ro(2)):(this.j.info("Failed to ping google.com"),ro(1))},(eq=nz.prototype).xa=function(){},eq.wa=function(){},eq.va=function(){},eq.ua=function(){},eq.Ra=function(){},nW.prototype.g=function(e,t){return new nG(e,t)},e6(nG,tz),nG.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,r=this.h||void 0;ro(0),e.V=t,e.ia=r||{},e.L=e.Y,e.F=nV(e,null,e.V),nO(e)},nG.prototype.close=function(){nS(this.g)},nG.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=tK(e),e=r);t.i.push(new r2(t.ab++,e)),3==t.G&&nO(t)},nG.prototype.M=function(){this.g.l=null,delete this.j,nS(this.g),delete this.g,nG.X.M.call(this)},e6(nK,rg),e6(nq,rm),e6(nZ,nz),nZ.prototype.xa=function(){tW(this.g,"a")},nZ.prototype.wa=function(e){tW(this.g,new nK(e))},nZ.prototype.va=function(e){tW(this.g,new nq)},nZ.prototype.ua=function(){tW(this.g,"b")},nW.prototype.createWebChannel=nW.prototype.g,nG.prototype.send=nG.prototype.u,nG.prototype.open=nG.prototype.m,nG.prototype.close=nG.prototype.close,rh.NO_ERROR=0,rh.TIMEOUT=8,rh.HTTP_ERROR=6,ru.COMPLETE="complete",rf.EventType=rp,rp.OPEN="a",rp.CLOSE="b",rp.ERROR="c",rp.MESSAGE="d",tz.prototype.listen=tz.prototype.N,nc.prototype.listenOnce=nc.prototype.O,nc.prototype.getLastError=nc.prototype.Oa,nc.prototype.getLastErrorCode=nc.prototype.Ea,nc.prototype.getStatus=nc.prototype.aa,nc.prototype.getResponseJson=nc.prototype.Sa,nc.prototype.getResponseText=nc.prototype.fa,nc.prototype.send=nc.prototype.da,nc.prototype.setWithCredentials=nc.prototype.Ka,eX.createWebChannelTransport=function(){return new nW},eX.getStatEventTarget=function(){return rr()},eX.ErrorCode=rh,eX.EventType=ru,eX.Event=re,eX.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},eX.FetchXmlHttpFactory=ni,eX.WebChannel=rf,eX.XhrIo=nc,r(3454);let nX="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nJ{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nJ.UNAUTHENTICATED=new nJ(null),nJ.GOOGLE_CREDENTIALS=new nJ("google-credentials-uid"),nJ.FIRST_PARTY=new nJ("first-party-uid"),nJ.MOCK_USER=new nJ("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nY="9.18.0",nQ=new ei("@firebase/firestore");function n0(e,...t){if(nQ.logLevel<=eK.DEBUG){let r=t.map(n2);nQ.debug(`Firestore (${nY}): ${e}`,...r)}}function n1(e,...t){if(nQ.logLevel<=eK.ERROR){let r=t.map(n2);nQ.error(`Firestore (${nY}): ${e}`,...r)}}function n2(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function n5(e="Unexpected state"){let t=`FIRESTORE (${nY}) INTERNAL ASSERTION FAILED: `+e;throw n1(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let n4={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class n3 extends j{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n6{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n7{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n8{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nJ.UNAUTHENTICATED))}shutdown(){}}class n9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ie{constructor(e){this.t=e,this.currentUser=nJ.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new n6;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new n6,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{n0("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(n0("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new n6)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(n0("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||n5(),new n7(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||n5(),new nJ(e)}}class it{constructor(e,t,r,n){this.h=e,this.l=t,this.m=r,this.g=n,this.type="FirstParty",this.user=nJ.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||n5(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ir{constructor(e,t,r,n){this.h=e,this.l=t,this.m=r,this.g=n}getToken(){return Promise.resolve(new it(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(nJ.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ii{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class is{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let r=e=>{null!=e.error&&n0("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.A;return this.A=e.token,n0("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{n0("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?n(e):n0("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||n5(),this.A=e.token,new ii(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class io{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let n=0;n<e;n++)r[n]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function ia(e,t){return e<t?-1:e>t?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class il{constructor(e,t,r){void 0===t?t=0:t>e.length&&n5(),void 0===r?r=e.length-t:r>e.length-t&&n5(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===il.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof il?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let i=e.get(n),s=t.get(n);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ih extends il{construct(e,t,r){return new ih(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new n3(n4.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new ih(t)}static emptyPath(){return new ih([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iu{constructor(e){this.path=e}static fromPath(e){return new iu(ih.fromString(e))}static fromName(e){return new iu(ih.fromString(e).popFirst(5))}static empty(){return new iu(ih.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ih.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ih.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new iu(new ih(e.slice()))}}function ic(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class id{constructor(e,t,r,n,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ip{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ip("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ip&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ig extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class im{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(t){throw t instanceof DOMException?new ig("Invalid base64 string: "+t):t}}(e);return new im(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new im(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ia(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function iv(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}im.EMPTY_BYTE_STRING=new im("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iy{constructor(e,t){this.comparator=e,this.root=t||i_.EMPTY}insert(e,t){return new iy(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,i_.BLACK,null,null))}remove(e){return new iy(this.comparator,this.root.remove(e,this.comparator).copy(null,null,i_.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ib(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ib(this.root,e,this.comparator,!1)}getReverseIterator(){return new ib(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ib(this.root,e,this.comparator,!0)}}class ib{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class i_{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:i_.RED,this.left=null!=n?n:i_.EMPTY,this.right=null!=i?i:i_.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new i_(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return i_.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return i_.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,i_.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,i_.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw n5();let e=this.left.check();if(e!==this.right.check())throw n5();return e+(this.isRed()?0:1)}}i_.EMPTY=null,i_.RED=!0,i_.BLACK=!1,i_.EMPTY=new class{constructor(){this.size=0}get key(){throw n5()}get value(){throw n5()}get color(){throw n5()}get left(){throw n5()}get right(){throw n5()}copy(e,t,r,n,i){return this}insert(e,t,r){return new i_(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iw{constructor(e){this.comparator=e,this.data=new iy(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iE(this.data.getIterator())}getIteratorFrom(e){return new iE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof iw)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let n=t.getNext().key,i=r.getNext().key;if(0!==this.comparator(n,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new iw(this.comparator);return t.data=e,t}}class iE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}(p=f||(f={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS",new iy(iu.comparator),new iy(iu.comparator),new iy(iu.comparator),new iw(iu.comparator),new iw(ia);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iI{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){var r;if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(iv(e.integerValue));else if("doubleValue"in e){let n=iv(e.doubleValue);isNaN(n)?this.fe(t,13):(this.fe(t,15),0===n&&1/n==-1/0?t.de(0):t.de(n))}else if("timestampValue"in e){let i=e.timestampValue;this.fe(t,20),"string"==typeof i?t._e(i):(t._e(`${i.seconds||""}`),t.de(i.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge("string"==typeof(r=e.bytesValue)?im.fromBase64String(r):im.fromUint8Array(r)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){let s=e.geoPointValue;this.fe(t,45),t.de(s.latitude||0),t.de(s.longitude||0)}else"mapValue"in e?"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):n5()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){let r=e.fields||{};for(let n of(this.fe(t,55),Object.keys(r)))this.we(n,t),this.he(r[n],t)}Ie(e,t){let r=e.values||[];for(let n of(this.fe(t,50),r))this.he(n,t)}ye(e,t){this.fe(t,37),iu.fromName(e).path.forEach(e=>{this.fe(t,60),this.Te(e,t)})}fe(e,t){e.de(t)}me(e){e.de(2)}}iI.Ee=new iI,new Uint8Array(0);class iT{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new iT(e,iT.DEFAULT_COLLECTION_PERCENTILE,iT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}function ik(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ iT.DEFAULT_COLLECTION_PERCENTILE=10,iT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,iT.DEFAULT=new iT(41943040,iT.DEFAULT_COLLECTION_PERCENTILE,iT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),iT.DISABLED=new iT(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iS{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Ys=e,this.timerId=t,this.po=r,this.Io=n,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();let t=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),n=Math.max(0,t-r);n>0&&n0("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,n,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iA{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new n6,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,o=new iA(e,t,s,n,i);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new n3(n4.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iR{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=nJ.UNAUTHENTICATED,this.clientId=io.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{n0("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(n0("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new n3(n4.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new n6;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=function(e,t){if(n1("AsyncQueue",`${t}: ${e}`),ic(e))return new n3(n4.UNAVAILABLE,`${t}: ${e}`);throw e}(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}let iO=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iC{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new n3(n4.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new n3(n4.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,r,n){if(!0===t&&!0===n)throw new n3(n4.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iN{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iC({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new n3(n4.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new n3(n4.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iC(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new n8;switch(e.type){case"gapi":let t=e.client;return new ir(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new n3(n4.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=iO.get(e);t&&(n0("ComponentProvider","Removing Datastore"),iO.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iD{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new iS(this,"async_queue_retry"),this.Hc=()=>{let e=ik();e&&n0("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ko.Vo()};let e=ik();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;let t=ik();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});let t=new n6;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ic(e))throw e;n0("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){let t=this.qc.then(()=>(this.jc=!0,e().catch(e=>{let t;this.Qc=e,this.jc=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw n1("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.jc=!1,e))));return this.qc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);let n=iA.createAndSchedule(this,e,t,r,e=>this.Xc(e));return this.Gc.push(n),n}Jc(){this.Qc&&n5()}verifyOperationInProgress(){}async ta(){let e;do await (e=this.qc);while(e!==this.qc)}ea(e){for(let t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{for(let t of(this.Gc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Gc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){let t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}class iP extends iN{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new iD,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||function(e){var t,r,n,i;let s=e._freezeSettings(),o=(r=e._databaseId,n=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new id(r,n,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new iR(e._authCredentials,e._appCheckCredentials,e._queue,o)}(this),this._firestoreClient.terminate()}}!function(e,t=!0){nY=eC,eS(new Z("firestore",(e,{instanceIdentifier:r,options:n})=>{let i=e.getProvider("app").getImmediate(),s=new iP(new ie(e.getProvider("auth-internal")),new is(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new n3(n4.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ip(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),ex(nX,"3.9.0",void 0),ex(nX,"3.9.0","esm2017")}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ix="firebasestorage.googleapis.com";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iL extends j{constructor(e,t,r=0){super(iM(e),`Firebase Storage: ${t} (${iM(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,iL.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return iM(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function iM(e){return"storage/"+e}function iU(e){return new iL(g.INVALID_ARGUMENT,e)}function ij(){return new iL(g.APP_DELETED,"The Firebase app was deleted.")}(o=g||(g={})).UNKNOWN="unknown",o.OBJECT_NOT_FOUND="object-not-found",o.BUCKET_NOT_FOUND="bucket-not-found",o.PROJECT_NOT_FOUND="project-not-found",o.QUOTA_EXCEEDED="quota-exceeded",o.UNAUTHENTICATED="unauthenticated",o.UNAUTHORIZED="unauthorized",o.UNAUTHORIZED_APP="unauthorized-app",o.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",o.INVALID_CHECKSUM="invalid-checksum",o.CANCELED="canceled",o.INVALID_EVENT_NAME="invalid-event-name",o.INVALID_URL="invalid-url",o.INVALID_DEFAULT_BUCKET="invalid-default-bucket",o.NO_DEFAULT_BUCKET="no-default-bucket",o.CANNOT_SLICE_BLOB="cannot-slice-blob",o.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",o.NO_DOWNLOAD_URL="no-download-url",o.INVALID_ARGUMENT="invalid-argument",o.INVALID_ARGUMENT_COUNT="invalid-argument-count",o.APP_DELETED="app-deleted",o.INVALID_ROOT_OPERATION="invalid-root-operation",o.INVALID_FORMAT="invalid-format",o.INTERNAL_ERROR="internal-error",o.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iF{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=iF.makeFromUrl(e,t)}catch(n){return new iF(e,"")}if(""===r.path)return r;throw new iL(g.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),a=RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===ix?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),h=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:s},{regex:l,indices:{bucket:1,path:2},postModify:s}];for(let u=0;u<h.length;u++){let c=h[u],d=c.regex.exec(e);if(d){let f=d[c.indices.bucket],p=d[c.indices.path];p||(p=""),r=new iF(f,p),c.postModify(r);break}}if(null==r)throw new iL(g.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class i${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function iB(e,t,r,n){if(n<t)throw iU(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw iU(`Invalid value for '${e}'. Expected ${r} or less.`)}(a=m||(m={}))[a.NO_ERROR=0]="NO_ERROR",a[a.NETWORK_ERROR=1]="NETWORK_ERROR",a[a.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iV{constructor(e,t,r,n,i,s,o,a,l,h,u,c=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=u,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new iH(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===m.NO_ERROR,i=r.getStatus();if(!t||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){let r=-1!==[408,429].indexOf(e),n=-1!==t.indexOf(e);return e>=500&&e<600||r||n}(i,this.additionalRetryCodes_)&&this.retry){let s=r.getErrorCode()===m.ABORT;e(!1,new iH(!1,null,s));return}let o=-1!==this.successCodes_.indexOf(i);e(!0,new iH(o,r))})},t=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let s=this.callback_(i,i.getResponse());void 0!==s?r(s):r()}catch(o){n(o)}else if(null!==i){let a=new iL(g.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");a.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,a):a)}else if(t.canceled){let l=this.appDelete_?ij():new iL(g.CANCELED,"User canceled the upload/download.");n(l)}else{let h=new iL(g.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");n(h)}};this.canceled_?t(!1,new iH(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,r){let n=1,i=null,s=null,o=!1,a=0,l=!1;function h(...e){l||(l=!0,t.apply(null,e))}function u(t){i=setTimeout(()=>{i=null,e(d,2===a)},t)}function c(){s&&clearTimeout(s)}function d(e,...t){let r;if(l){c();return}if(e){c(),h.call(null,e,...t);return}let i=2===a||o;if(i){c(),h.call(null,e,...t);return}n<64&&(n*=2),1===a?(a=2,r=0):r=(n+Math.random())*1e3,u(r)}let f=!1;function p(e){!f&&(f=!0,c(),!l&&(null!==i?(e||(a=2),clearTimeout(i),u(0)):e||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,p(!0)},r),p}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class iH{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iz{constructor(e,t){this._service=e,t instanceof iF?this._location=t:this._location=iF.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new iz(e,t)}get root(){let e=new iF(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new iF(this._location.bucket,e);return new iz(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new iL(g.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function iW(e,t){let r=null==t?void 0:t.storageBucket;return null==r?null:iF.makeFromBucketSpec(r,e)}class iG{constructor(e,t,r,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=ix,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=iF.makeFromBucketSpec(n,this._host):this._bucket=iW(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=iF.makeFromBucketSpec(this._url,e):this._bucket=iW(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iB("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iB("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new iz(this,e)}_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new i$(ij());{let s=function(e,t,r,n,i,s,o=!0){var a,l,h;let u=function(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let i=t(n)+"="+t(e[n]);r=r+i+"&"}return r.slice(0,-1)}(e.urlParams),c=e.url+u,d=Object.assign({},e.headers);return a=d,t&&(a["X-Firebase-GMPID"]=t),l=d,null!==r&&r.length>0&&(l.Authorization="Firebase "+r),d["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),h=d,null!==n&&(h["X-Firebase-AppCheck"]=n),new iV(c,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let iK="@firebase/storage",iq="0.11.2",iZ="storage";eS(new Z(iZ,function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new iG(r,n,i,t,eC)},"PUBLIC").setMultipleInstances(!0)),ex(iK,iq,""),ex(iK,iq,"esm2017");function iX(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function iJ(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let iY=new F("auth","Firebase",iJ()),iQ=new ei("@firebase/auth");function i0(e,...t){iQ.logLevel<=eK.ERROR&&iQ.error(`Auth (${eC}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function i1(e,...t){throw i5(e,...t)}function i2(e,...t){return i5(e,...t)}function i5(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return iY.create(e,...t)}function i4(e,t,...r){if(!e)throw i5(t,...r)}function i3(e){let t="INTERNAL ASSERTION FAILED: "+e;throw i0(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i6=new Map;function i7(e){e instanceof Function||i3("Expected a class definition");let t=i6.get(e);return t?(t instanceof e||i3("Instance stored in cache mismatched with class"),t):(t=new e,i6.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function i8(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function i9(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class se{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||i3("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===i9()||"https:"===i9()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function st(e,t){e.emulator||i3("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sr{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void i3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void i3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void i3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},si=new se(3e4,6e4);function ss(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function so(e,t,r,n,i={}){return sa(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let o=H(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),sr.fetch()(sh(e,e.config.apiHost,r,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function sa(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},sn),t);try{let i=new su(e),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw sc(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===l)throw sc(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===l)throw sc(e,"email-already-in-use",o);if("USER_DISABLED"===l)throw sc(e,"user-disabled",o);let u=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw function(e,t,r){let n=Object.assign(Object.assign({},iJ()),{[t]:r}),i=new F("auth","Firebase",n);return i.create(t,{appName:e.name})}(e,u,h);i1(e,u)}}catch(c){if(c instanceof j)throw c;i1(e,"internal-error",{message:String(c)})}}async function sl(e,t,r,n,i={}){let s=await so(e,t,r,n,i);return"mfaPendingCredential"in s&&i1(e,"multi-factor-auth-required",{_serverResponse:s}),s}function sh(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?st(e.config,i):`${e.config.apiScheme}://${i}`}class su{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(i2(this.auth,"network-request-failed")),si.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sc(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=i2(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sd(e,t){return so(e,"POST","/v1/accounts:delete",t)}async function sf(e,t){return so(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sp(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(r){}}async function sg(e,t=!1){let r=q(e),n=await r.getIdToken(t),i=sv(n);i4(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:sp(sm(i.auth_time)),issuedAtTime:sp(sm(i.iat)),expirationTime:sp(sm(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function sm(e){return 1e3*Number(e)}function sv(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return i0("JWT malformed, contained fewer than 3 sections"),null;try{let i=S(r);if(!i)return i0("Failed to decode base64 JWT payload"),null;return JSON.parse(i)}catch(s){return i0("Caught error parsing JWT payload as JSON",null==s?void 0:s.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sy(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof j&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}{this.errorBackoff=3e4;let n=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=n-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sp(this.lastLoginAt),this.creationTime=sp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sw(e){var t;let r=e.auth,n=await e.getIdToken(),i=await sy(e,sf(r,{idToken:n}));i4(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=iX(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],a=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,o),l=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new s_(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&h};Object.assign(e,u)}async function sE(e){let t=q(e);await sw(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sI(e,t){let r=await sa(e,{},async()=>{let r=H({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=sh(e,n,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",sr.fetch()(s,{method:"POST",headers:o,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sT{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){i4(e.idToken,"internal-error"),i4(void 0!==e.idToken,"internal-error"),i4(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=sv(e);return i4(t,"internal-error"),i4(void 0!==t.exp,"internal-error"),i4(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(i4(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await sI(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new sT;return r&&(i4("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(i4("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(i4("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sT,this.toJSON())}_performRefresh(){return i3("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sk(e,t){i4("string"==typeof e||void 0===e,"internal-error",{appName:t})}class sS{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=iX(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new s_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await sy(this,this.stsTokenManager.getToken(this.auth,e));return i4(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sg(this,e)}reload(){return sE(this)}_assign(e){this!==e&&(i4(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new sS(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){i4(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await sw(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await sy(this,sd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,h;let u=null!==(r=t.displayName)&&void 0!==r?r:void 0,c=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:E}=t;i4(y&&E,e,"internal-error");let I=sT.fromJSON(this.name,E);i4("string"==typeof y,e,"internal-error"),sk(u,e.name),sk(c,e.name),i4("boolean"==typeof b,e,"internal-error"),i4("boolean"==typeof _,e,"internal-error"),sk(d,e.name),sk(f,e.name),sk(p,e.name),sk(g,e.name),sk(m,e.name),sk(v,e.name);let T=new sS({uid:y,auth:e,email:c,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(T.providerData=w.map(e=>Object.assign({},e))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new sT;n.updateFromServerResponse(t);let i=new sS({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await sw(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sR(e,t,r){return`firebase:${e}:${t}:${r}`}sA.type="NONE";class sO{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=sR(this.userKey,n.apiKey,i),this.fullPersistenceKey=sR("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?sS._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new sO(i7(sA),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||i7(sA),s=sR(r,e.config.apiKey,e.name),o=null;for(let a of t)try{let l=await a._get(s);if(l){let h=sS._fromJSON(e,l);a!==i&&(o=h),i=a;break}}catch(u){}let c=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&c.length&&(i=c[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(t){}}))),new sO(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sC(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sx(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(sN(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sM(t))return"Blackberry";if(sU(t))return"Webos";if(sD(t))return"Safari";if((t.includes("chrome/")||sP(t))&&!t.includes("edge/"))return"Chrome";if(sL(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function sN(e=U()){return/firefox\//i.test(e)}function sD(e=U()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sP(e=U()){return/crios\//i.test(e)}function sx(e=U()){return/iemobile/i.test(e)}function sL(e=U()){return/android/i.test(e)}function sM(e=U()){return/blackberry/i.test(e)}function sU(e=U()){return/webos/i.test(e)}function sj(e=U()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function sF(e=U()){return sj(e)||sL(e)||sU(e)||sM(e)||/windows phone/i.test(e)||sx(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function s$(e,t=[]){let r;switch(e){case"Browser":r=sC(U());break;case"Worker":r=`${sC(U())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${eC}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sB{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let i=e(t);r(i)}catch(s){n(s)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(s){for(let n of(t.reverse(),t))try{n()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==s?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sV{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sH(this),this.idTokenSubscription=new sH(this),this.beforeStateQueue=new sB(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iY,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=i7(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await sO.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(l){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(i4(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sw(e)}catch(t){if((null==t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?q(e):null;return t&&i4(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&i4(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(i7(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new F("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&i7(e)||this._popupRedirectResolver;i4(t,this,"argument-error"),this.redirectPersistenceManager=await sO.create(this,[i7(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(i4(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return i4(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s$(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}class sH{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let r=new G(e,void 0);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return i4(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sz(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function sW(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sG{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return i3("not implemented")}_getIdTokenResponse(e){return i3("not implemented")}_linkToIdToken(e,t){return i3("not implemented")}_getReauthenticationResolver(e){return i3("not implemented")}}async function sK(e,t){return so(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sq(e,t){return sl(e,"POST","/v1/accounts:signInWithPassword",ss(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sZ(e,t){return sl(e,"POST","/v1/accounts:signInWithEmailLink",ss(e,t))}async function sX(e,t){return sl(e,"POST","/v1/accounts:signInWithEmailLink",ss(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sJ extends sG{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new sJ(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new sJ(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return sq(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sZ(e,{email:this._email,oobCode:this._password});default:i1(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return sK(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sX(e,{idToken:t,email:this._email,oobCode:this._password});default:i1(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sY(e,t){return sl(e,"POST","/v1/accounts:signInWithIdp",ss(e,t))}class sQ extends sG{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new sQ(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):i1("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=iX(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new sQ(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return sY(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,sY(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,sY(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=H(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function s0(e,t){return so(e,"POST","/v1/accounts:sendVerificationCode",ss(e,t))}async function s1(e,t){return sl(e,"POST","/v1/accounts:signInWithPhoneNumber",ss(e,t))}async function s2(e,t){let r=await sl(e,"POST","/v1/accounts:signInWithPhoneNumber",ss(e,t));if(r.temporaryProof)throw sc(e,"account-exists-with-different-credential",r);return r}let s5={USER_NOT_FOUND:"user-not-found"};async function s4(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return sl(e,"POST","/v1/accounts:signInWithPhoneNumber",ss(e,r),s5)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s3 extends sG{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new s3({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new s3({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return s1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return s2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return s4(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new s3({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class s6{constructor(e){var t,r,n,i,s,o;let a=z(W(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(r=a.oobCode)&&void 0!==r?r:null,u=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);i4(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=z(W(e)).link,r=t?z(W(t)).deep_link_id:null,n=z(W(e)).deep_link_id,i=n?z(W(n)).link:null;return i||n||r||t||e}(e);try{return new s6(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s7{constructor(){this.providerId=s7.PROVIDER_ID}static credential(e,t){return sJ._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=s6.parseLink(t);return i4(r,"argument-error"),sJ._fromEmailAndCode(e,r.code,r.tenantId)}}s7.PROVIDER_ID="password",s7.EMAIL_PASSWORD_SIGN_IN_METHOD="password",s7.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s8{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s9 extends s8{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oe extends s9{constructor(){super("facebook.com")}static credential(e){return sQ._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oe.credential(e.oauthAccessToken)}catch(t){return null}}}oe.FACEBOOK_SIGN_IN_METHOD="facebook.com",oe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ot extends s9{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sQ._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ot.credential(t,r)}catch(n){return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com",ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class or extends s9{constructor(){super("github.com")}static credential(e){return sQ._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch(t){return null}}}or.GITHUB_SIGN_IN_METHOD="github.com",or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class on extends s9{constructor(){super("twitter.com")}static credential(e,t){return sQ._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return on.credential(t,r)}catch(n){return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com",on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await sS._fromIdTokenResponse(e,r,n),s=os(r),o=new oi({user:i,providerId:s,_tokenResponse:r,operationType:t});return o}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=os(r);return new oi({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function os(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oo extends j{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,oo.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new oo(e,t,r,n)}}function oa(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw oo._fromErrorAndOperation(e,r,t,n);throw r})}async function ol(e,t,r=!1){let n=await sy(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return oi._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function oh(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await sy(e,oa(n,i,t,e),r);i4(s.idToken,n,"internal-error");let o=sv(s.idToken);i4(o,n,"internal-error");let{sub:a}=o;return i4(e.uid===a,n,"user-mismatch"),oi._forOperation(e,i,s)}catch(l){throw(null==l?void 0:l.code)==="auth/user-not-found"&&i1(n,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ou(e,t,r=!1){let n="signIn",i=await oa(e,n,t),s=await oi._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}async function oc(e,t){return ou(q(e),t)}function od(e){return q(e).signOut()}new WeakMap;let of="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class op{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(of,"1"),this.storage.removeItem(of),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class og extends op{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=U();return sD(e)||sj(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=sF(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let i=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);(function(){let e=U();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let n of Array.from(r))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}og.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class om extends op{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}om.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ov{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new ov(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(r){return{fulfilled:!1,reason:r}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oy(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}ov.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ob{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=oy("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(h),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function o_(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ow(){return void 0!==o_().WorkerGlobalScope&&"function"==typeof o_().importScripts}async function oE(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oI="firebaseLocalStorageDb",oT="firebaseLocalStorage",ok="fbase_key";class oS{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oA(e,t){return e.transaction([oT],t?"readwrite":"readonly").objectStore(oT)}function oR(){let e=indexedDB.open(oI,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(oT,{keyPath:ok})}catch(n){r(n)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(oT)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(oI);return new oS(e).toPromise()}(),t(await oR()))})})}async function oO(e,t,r){let n=oA(e,!0).put({[ok]:t,value:r});return new oS(n).toPromise()}async function oC(e,t){let r=oA(e,!1).get(t),n=await new oS(r).toPromise();return void 0===n?null:n.value}function oN(e,t){let r=oA(e,!0).delete(t);return new oS(r).toPromise()}class oD{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await oR()),this.db}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ov._getInstance(ow()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oE(),!this.activeServiceWorker)return;this.sender=new ob(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(r){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await oR();return await oO(e,of,"1"),await oN(e,of),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>oO(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>oC(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oN(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=oA(e,!1).getAll();return new oS(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function oP(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function ox(e,t,r){var n,i,s;let o=await r.verify();try{let a;if(i4("string"==typeof o,e,"argument-error"),i4("recaptcha"===r.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let l=a.session;if("phoneNumber"in a){i4("enroll"===l.type,e,"internal-error");let h=await (i={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},so(e,"POST","/v2/accounts/mfaEnrollment:start",ss(e,i)));return h.phoneSessionInfo.sessionInfo}{i4("signin"===l.type,e,"internal-error");let u=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;i4(u,e,"missing-multi-factor-info");let c=await (s={mfaPendingCredential:l.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:o}},so(e,"POST","/v2/accounts/mfaSignIn:start",ss(e,s)));return c.phoneResponseInfo.sessionInfo}}{let{sessionInfo:d}=await s0(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return d}}finally{r._reset()}}oD.type="LOCAL",oP("rcb"),new se(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oL{constructor(e){this.providerId=oL.PROVIDER_ID,this.auth=q(e)}verifyPhoneNumber(e,t){return ox(this.auth,e,q(t))}static credential(e,t){return s3._fromVerification(e,t)}static credentialFromResult(e){return oL.credentialFromTaggedObject(e)}static credentialFromError(e){return oL.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?s3._fromTokenResponse(t,r):null}}oL.PROVIDER_ID="phone",oL.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oM extends sG{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sY(e,this._buildIdpRequest())}_linkToIdToken(e,t){return sY(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return sY(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oU(e){return ou(e.auth,new oM(e),e.bypassAuthState)}function oj(e){let{auth:t,user:r}=e;return i4(r,t,"internal-error"),oh(r,new oM(e),e.bypassAuthState)}async function oF(e){let{auth:t,user:r}=e;return i4(r,t,"internal-error"),ol(r,new oM(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o${constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oU;case"linkViaPopup":case"linkViaRedirect":return oF;case"reauthViaPopup":case"reauthViaRedirect":return oj;default:i1(this.auth,"internal-error")}}resolve(e){this.pendingPromise||i3("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||i3("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oB=new se(2e3,1e4);class oV extends o${constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,oV.currentPopupAction&&oV.currentPopupAction.cancel(),oV.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return i4(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||i3("Popup operations only handle one event");let e=oy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(i2(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(i2(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oV.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(i2(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,oB.get())};e()}}oV.currentPopupAction=null;let oH=new Map;class oz extends o${constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oH.get(this.auth._key());if(!e){try{let t=await oW(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oH.set(this.auth._key(),e)}return this.bypassAuthState||oH.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oW(e,t){let r=sR("pendingRedirect",t.config.apiKey,t.name),n=i7(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function oG(e,t){oH.set(e._key(),t)}async function oK(e,t,r=!1){let n=q(e),i=t?i7(t):(i4(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new oz(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class oq{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oX(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!oX(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(i2(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(oZ(e))}saveEventToCache(e){this.cachedEventUids.add(oZ(e)),this.lastProcessedEventTime=Date.now()}}function oZ(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function oX({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function oJ(e,t={}){return so(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oY=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oQ=/^https?/;async function o0(e){if(e.config.emulator)return;let{authorizedDomains:t}=await oJ(e);for(let r of t)try{if(function(e){let t=i8(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!oQ.test(r))return!1;if(oY.test(e))return n===e;let s=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+s+"|"+s+")$","i");return o.test(n)}(r))return}catch(n){}i1(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let o1=new se(3e4,6e4);function o2(){let e=o_().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}let o5=null,o4=new se(5e3,15e3),o3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function o7(e){let t=await (o5=o5||new Promise((t,r)=>{var n,i,s,o;function a(){o2(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){o2(),r(i2(e,"network-request-failed"))},timeout:o1.get()})}if(null===(i=null===(n=o_().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=o_().gapi)||void 0===s?void 0:s.load)a();else{let l=oP("iframefcb");return o_()[l]=()=>{gapi.load?a():r(i2(e,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${l}`,new Promise((e,t)=>{var r,n;let i=document.createElement("script");i.setAttribute("src",o),i.onload=e,i.onerror=e=>{let r=i2("internal-error");r.customData=e,t(r)},i.type="text/javascript",i.charset="UTF-8",(null!==(n=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==n?n:document).appendChild(i)})).catch(e=>r(e))}}).catch(e=>{throw o5=null,e})),r=o_().gapi;return i4(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;i4(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?st(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:eC},i=o6.get(e.config.apiHost);i&&(n.eid=i);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${H(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o3,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=i2(e,"network-request-failed"),s=o_().setTimeout(()=>{n(i)},o4.get());function o(){o_().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let o8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class o9{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ae(e,t,r,n,i,s){i4(e.config.authDomain,e,"auth-domain-config-required"),i4(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:eC,eventId:i};if(t instanceof s8)for(let[a,l]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[a]=l;if(t instanceof s9){let h=t.getScopes().filter(e=>""!==e);h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);let u=o;for(let c of Object.keys(u))void 0===u[c]&&delete u[c];return`${function({config:e}){return e.emulator?st(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${H(u).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let at="webStorageSupport",ar=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=om,this._completeRedirectFn=oK,this._overrideRedirectResult=oG}async _openPopup(e,t,r,n){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||i3("_initialize() not called before _openPopup()");let s=ae(e,t,r,i8(),n);return function(e,t,r,n=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},o8),{width:n.toString(),height:i.toString(),top:s,left:o}),h=U().toLowerCase();r&&(a=sP(h)?"_blank":r),sN(h)&&(t=t||"http://localhost",l.scrollbars="yes");let u=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=U()){var t;return sj(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",a),new o9(null);let c=window.open(t||"",a,u);i4(c,e,"popup-blocked");try{c.focus()}catch(d){}return new o9(c)}(e,s,oy())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=ae(e,t,r,i8(),n),o_().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:r,promise:n}=this.eventManagers[t];return r?Promise.resolve(r):(n||i3("If manager is not set, promise should be"),n)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await o7(e),r=new oq(e);return t.register("authEvent",t=>{i4(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(at,{type:at},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[at];void 0!==i&&t(!!i),i1(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=o0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sF()||sD()||sj()}};class an{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return i3("unexpected MultiFactorSessionType")}}}class ai extends an{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ai(e)}_finalizeEnroll(e,t,r){return so(e,"POST","/v2/accounts/mfaEnrollment:finalize",ss(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return so(e,"POST","/v2/accounts/mfaSignIn:finalize",ss(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var as="@firebase/auth",ao="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){i4(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let al=x("authIdTokenMaxAge")||300,ah=null,au=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>al)return;let i=null==r?void 0:r.token;ah!==i&&(ah=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};l="Browser",eS(new Z("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=r.options;return((e,r)=>{i4(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),i4(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});let n={apiKey:i,authDomain:s,clientPlatform:l,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s$(l)},o=new sV(e,r,n);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(i7);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(r,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),eS(new Z("auth-internal",e=>{let t=q(e.getProvider("auth").getImmediate());return new aa(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ex(as,ao,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(l)),ex(as,ao,"esm2017");let ac=0===eP().length?eN({apiKey:"AIzaSyD65tGpVAl23Iu_IfLatCO3ikoNQzR347o",authDomain:"climate-profile-app.firebaseapp.com",projectId:"climate-profile-app",storageBucket:"climate-profile-app.appspot.com"}):eP()[0];!function(e,t){let r="object"==typeof e?e:eD(),n=eA(r,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let i=D("firestore");i&&function(e,t,r,n={}){var i;let s=(e=function(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new n3(n4.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":n5()}(e);throw new n3(n4.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}(e,iN))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&function(e){if(nQ.logLevel<=eK.WARN){let t=[].map(n2);nQ.warn(`Firestore (${nY}): ${e}`,...t)}}("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${r}`,ssl:!1})),n.mockUserToken){let o,a;if("string"==typeof n.mockUserToken)o=n.mockUserToken,a=nJ.MOCK_USER;else{o=M(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let l=n.mockUserToken.sub||n.mockUserToken.user_id;if(!l)throw new n3(n4.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nJ(l)}e._authCredentials=new n9(new n7(o,a))}}(n,...i)}}(ac),function(e=eD(),t){e=q(e);let r=eA(e,iZ),n=r.getImmediate({identifier:void 0}),i=D("storage");i&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:M(i,e.app.options.projectId))}(e,t,r,n)}(n,...i)}(ac);let ad=function(e=eD()){let t=eA(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){let r=eA(e,"auth");if(r.isInitialized()){let n=r.getImmediate(),i=r.getOptions();if(B(i,null!=t?t:{}))return n;i1(n,"already-initialized")}let s=r.initialize({options:t});return s}(e,{popupRedirectResolver:ar,persistence:[oD,og,om]}),n=x("authTokenSyncURL");if(n){var i,s;let o=au(n);i=()=>o(r.currentUser),q(r).beforeAuthStateChanged(o,i),s=e=>o(e),q(r).onIdTokenChanged(s,void 0,void 0)}let a=N("auth");return a&&function(e,t,r){let n=q(e);i4(n._canInitEmulator,n,"emulator-config-failed"),i4(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=sz(t),{host:o,port:a}=function(e){let t=sz(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let s=i[1];return{host:s,port:sW(n.substr(s.length+1))}}{let[o,a]=n.split(":");return{host:o,port:sW(a)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${a}`),r}(ac),af={SIGNED_IN:"signedIn",SIGNED_OUT:"signedOut",LOADING:"loading"},ap=async()=>await od(ad),ag=async e=>{let{email:t,password:r}=e;return await oc(q(ad),s7.credential(t,r))},am={authUser:null,authLoading:!0,authStatus:af.LOADING,authError:""},av=(0,y.createContext)();function ay(e){let{children:t}=e,r=function(){let[e,t]=(0,y.useState)(am);return(0,y.useEffect)(()=>{let e=async e=>{if(e){var r,n;if(!(null==e?void 0:e.emailVerified)){t(e=>({...e,authError:"Email not verified. Please verify your email first."})),await od(ad);return}try{let{claims:i}=await e.getIdTokenResult();i.account_level?t(t=>({...t,authStatus:af.SIGNED_IN,authLoading:!1,authError:"",authUser:{uid:e.uid,email:e.email,name:e.displayName,accessToken:e.accessToken,emailVerified:e.emailVerified,account_level:i.account_level}})):(t(e=>({...e,authError:"Missing custom claims",authLoading:!1})),await od(ad))}catch(s){t(e=>{var t;return{...e,authUser:null,authStatus:af.SIGNED_OUT,authLoading:!1,authError:null!==(n=null==s?void 0:null===(t=s.response)||void 0===t?void 0:t.data)&&void 0!==n?n:s.message}})}}else t(e=>({...e,authUser:null,authLoading:!1,authStatus:af.SIGNED_OUT}))},r=q(ad).onAuthStateChanged(e,void 0,void 0);return()=>r()},[]),{authUser:e.authUser,authLoading:e.authLoading,authStatus:e.authStatus,authError:e.authError,authSignOut:ap,authSignIn:ag}}();return(0,v.jsx)(av.Provider,{value:r,children:t})}let ab=()=>(0,y.useContext)(av);var a_=r(1163),aw=function(){return(0,v.jsx)("div",{children:(0,v.jsx)("h1",{children:"Loading..."})})},aE=function(e){return function(t){let r=(0,a_.useRouter)(),{authLoading:n,authError:i,authUser:s}=ab();(0,y.useEffect)(()=>{n||s||r.push("/login")},[s,n,r]);let o=()=>n?(0,v.jsx)(aw,{}):s?(0,v.jsx)(e,{...t}):(0,v.jsx)(aw,{authError:i});return(0,v.jsx)(o,{})}}},5195:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(5893),i=r(7294),s=r(5697),o=r.n(s),a=r(9008),l=r.n(a),h=r(7462),u=r(4819),c=r(6760);let d="function"==typeof Symbol&&Symbol.for;var f=d?Symbol.for("mui.nested"):"__THEME_NESTED__",p=function(e){let{children:t,theme:r}=e,s=(0,c.Z)(),o=i.useMemo(()=>{let e=null===s?r:function(e,t){if("function"==typeof t){let r=t(e);return r}return(0,h.Z)({},e,t)}(s,r);return null!=e&&(e[f]=null!==s),e},[r,s]);return(0,n.jsx)(u.Z.Provider,{value:o,children:t})},g=r(2443),m=r(9718);let v={};function y(e){let t=(0,m.Z)();return(0,n.jsx)(g.T.Provider,{value:"object"==typeof t?t:v,children:e.children})}var b=function(e){let{children:t,theme:r}=e;return(0,n.jsx)(p,{theme:r,children:(0,n.jsx)(y,{children:t})})},_=r(8884),w=r(917);function E(e){let{styles:t,defaultTheme:r={}}=e;return(0,n.jsx)(w.xB,{styles:"function"==typeof t?e=>t(null==e||0===Object.keys(e).length?r:e):t})}var I=r(5165),T=function(e){return(0,n.jsx)(E,(0,h.Z)({},e,{defaultTheme:I.Z}))};let k=(e,t)=>(0,h.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),S=e=>(0,h.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),A=(e,t=!1)=>{var r,n;let i={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,r])=>{var n;i[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(n=r.palette)?void 0:n.mode}});let s=(0,h.Z)({html:k(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,h.Z)({margin:0},S(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i),o=null==(r=e.components)?void 0:null==(n=r.MuiCssBaseline)?void 0:n.styleOverrides;return o&&(s=[s,o]),s};var R=function(e){let t=(0,_.Z)({props:e,name:"MuiCssBaseline"}),{children:r,enableColorScheme:s=!1}=t;return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(T,{styles:e=>A(e,s)}),r]})},O=r(6044),C=r(9655);let N=(0,O.Z)({palette:{primary:{main:"#355a6c",light:"#91cfc2",dark:"#3e4059"},secondary:{main:"#f9e247",light:"#ffffce",dark:"#b3bc6d"},tertiary:{main:"#43a047",light:"#76d275",dark:"#00701a"},error:{main:C.Z.A400}}});var D=r(8417),P=r(3753);let x=(0,D.Z)({key:"css",prepend:!0});function L(e){let{Component:t,emotionCache:r=x,pageProps:i}=e;return(0,n.jsxs)(g.C,{value:r,children:[(0,n.jsx)(l(),{children:(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"})}),(0,n.jsxs)(b,{theme:N,children:[(0,n.jsx)(R,{}),(0,n.jsx)(P.Ho,{children:(0,n.jsx)(t,{...i})})]})]})}L.propTypes={Component:o().elementType.isRequired,emotionCache:o().object,pageProps:o().object.isRequired}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(n){r=o}}();var l=[],h=!1,u=-1;function c(){h&&n&&(h=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!h){var e=a(c);h=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,h=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||h||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},9008:function(e,t,r){e.exports=r(3121)},1163:function(e,t,r){e.exports=r(880)},2703:function(e,t,r){"use strict";var n=r(414);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,s,o){if(o!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,h=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,c=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case c:case s:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case h:case d:case m:case g:case l:return e;default:return t}}case i:return t}}}function E(e){return w(e)===c}t.AsyncMode=u,t.ConcurrentMode=c,t.ContextConsumer=h,t.ContextProvider=l,t.Element=n,t.ForwardRef=d,t.Fragment=s,t.Lazy=m,t.Memo=g,t.Portal=i,t.Profiler=a,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return E(e)||w(e)===u},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===h},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===s},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===g},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===c||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===l||e.$$typeof===h||e.$$typeof===d||e.$$typeof===y||e.$$typeof===b||e.$$typeof===_||e.$$typeof===v)},t.typeOf=w},9864:function(e,t,r){"use strict";e.exports=r(9921)},7462:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);