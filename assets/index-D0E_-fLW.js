(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l,u,d={},f=[],p=/^m(i|n|o|s|text|space)$/,m=Array.isArray,h=f.slice,g=Object.assign;function _(e){e&&e.parentNode&&e.remove()}function v(e,t,n){var r,i,a,o={},s=arguments.length;for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return s>2&&(o.children=s>3?h.call(arguments,2):n),b(e,o,r,i,null)}function y(e,t,n){var r,i,a,o=g({},e.props),s=arguments.length;for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e.type!=`function`?i=t[a]:o[a]=t[a];return s>2&&(o.children=s>3?h.call(arguments,2):n),b(e.type,o,r===void 0?e.key:r,i===void 0?e.ref:i,null)}function b(n,r,i,a,o){var s={type:n,props:r,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o||++t,__i:-1,__u:0};return!o&&e.vnode&&e.vnode(s),s}function x(){return{current:null}}function S(e){return e.children}function C(e,t){this.props=e,this.context=t,this.__g=0}function ee(e,t){if(t==null)return e.__?ee(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!=`function`||e.props.__P?null:ee(e)}function te(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),te(e)}function w(t){(8&t.__g||!(t.__g|=8)||!n.push(t)||i++)&&r==e.debounceRendering||((r=e.debounceRendering)||queueMicrotask)(T)}function T(){var t,r,o,s,c,l,u,d,f;try{for(r=1;n.length;)n.length>r&&n.sort(a),t=n.shift(),r=n.length,8&t.__g&&(s=void 0,c=void 0,l=(c=(o=t).__v).__e,u=[],d=[],(f=o.__P)&&((s=g({constructor:void 0},c)).__v=c.__v+1,e.vnode&&e.vnode(s),ce(f,s,c,o.__n,f.namespaceURI,32&c.__u?[l]:null,u,l||ee(c),32&c.__u,d),s.__v=c.__v,s.__.__k[s.__i]=s,ue(u,s,d),c.__=c.__e=null,s.__e!=l&&te(s)))}finally{n.length=i=0}}function ne(e,t,n,r,i,a,o,s,c,l,u){var p,m,h,g,_,v,y=r.__k||f,b=t.length;for(c=E(n,t,y,c,b),p=0;p<b;p++)(h=n.__k[p])!=null&&(m=~h.__i&&y[h.__i]||d,h.__i=p,v=ce(e,h,m,i,a,o,s,c,l,u),g=h.__e,(m.ref!=h.ref||8&m.__u)&&(m.ref&&fe(m.ref,null,h,m),h.ref&&u.push(h.ref,h.__c||g,h)),_||=g,4&h.__u?(c=re(h,c,e,!m.__v),m.__e&&(m.__e=null)):typeof h.type==`function`&&v!==void 0?c=v:g&&(c=g.nextSibling),h.__u&=-7);return n.__e=_,c}function E(e,t,n,r,i){var a,o,s,c,l,u,d,f,p,h,g=n.length,_=g,v=0,y=!1,x=e.__k=Array(i);for(a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o!=`object`||o.constructor==String?o=x[a]=b(null,o):m(o)?o=x[a]=b(S,{children:o}):o.constructor===void 0&&o.__b?o=x[a]=b(o.type,o.props,o.key,o.ref,o.__v):x[a]=o,c=a+v,o.__=e,o.__b=e.__b+1,s=null,~(l=o.__i=ie(o,n,c,_))&&(_--,(s=n[l])&&(s.__u|=2)),s&&s.__v?(o.__u|=2,l==c-1?v--:l==c+1?v++:l!=c&&(l>c?v--:v++,y=!0)):(~l||(i>g?v--:i<g&&v++),typeof o.type!=`function`&&(o.__u|=4))):x[a]=null;if(y){for(u=[],d=[],a=0;a<i;a++)if((o=x[a])&&2&o.__u){for(f=0,p=u.length;f<p;)u[h=f+p>>1]<o.__i?f=h+1:p=h;u[f]=o.__i,d[a]=f+1}for(v=u.length;a--;)d[a]&&(d[a]==v?v--:x[a].__u|=4)}if(_)for(a=0;a<g;a++)!(s=n[a])||2&s.__u||(s.__e==r&&(r=ee(s)),pe(s,s));return r}function re(e,t,n,r){var i,a,o;if(typeof e.type==`function`){if(e.props.__P)return t;if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&(i[a].__=e,t=re(i[a],t,n,!1));return t}for(t&&!t.parentNode&&(t=ee(e))&&!t.parentNode&&(t=null),o=t;o&&o.nodeType==8;)o=o.nextSibling;for(e.__e!=o&&(!r&&n.moveBefore&&e.__e.parentNode?n.moveBefore(e.__e,t):n.insertBefore(e.__e,t||null)),t=e.__e;(t&&=t.nextSibling)&&t.nodeType==8;);return t}function D(e,t){return t||=[],e!=null&&typeof e!=`boolean`&&(m(e)?e.some(function(e){D(e,t)}):t.push(e)),t}function ie(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l&&!(2&l.__u);if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function ae(e,t,n){n??=``,t[0]==`-`?e.setProperty(t,n):e[t]=n}function oe(e,t,n,r,i){var a,o;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||ae(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||ae(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)(e.__e||={})[t]=n,n&&r||(o=l[t]||(l[t]=se(t)),(e.__a||={})[t]=c,a=t!=(t=t.replace(s,`$1`)),(t=t.slice(2))[0]<`a`&&(t=t.toLowerCase()),n?e.addEventListener(t,o,a):e.removeEventListener(t,o,a));else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function se(t){return function(n){if(this.__e){var r=this.__e[t];if(n[o]==null)n[o]=c++;else if(n[o]<this.__a[t])return;return r(e.event?e.event(n):n)}}}function ce(t,n,r,i,a,o,s,c,l,u){var d,p,h,v,y,b,x,te,w,T,E,re,D,ie,ae,oe,se,ce,ue,fe,he=n.type;if(n.constructor!==void 0)return null;if(128&r.__u&&(l=32&r.__u,d=r.__c.__z)){if(n.__u|=l,p=o=[],d.nodeType==8)for(h=1,v=d.nextSibling;v;v=v.nextSibling){if(v.nodeType==8){if(v.data.startsWith(`$s`))h++;else if(v.data.startsWith(`/$s`)&&!--h)break}o.push(v)}else o.push(d);c=o[0]}(d=e.__b)&&d(n);n:if(typeof he==`function`){y=s.length;try{if(T=n.props,E=(d=he.prototype)&&d.render,re=(d=he.contextType)&&i[d.__c],D=d?re?re.props.value:d.__:i,r.__c?2&(b=n.__c=r.__c).__g&&(b.__g|=1):(E?n.__c=b=new he(T,D):(n.__c=b=new C(T,D),b.constructor=he,b.render=me),re&&re.sub(b),b.state||(b.state={}),b.__n=i,b.__g|=8,b.__h=[],b.__k=[]),E&&(b.__s||(b.__s=b.state),he.getDerivedStateFromProps&&(b.__s==b.state&&(b.__s=g({},b.__s)),g(b.__s,he.getDerivedStateFromProps(T,b.__s)))),x=b.props,te=b.state,b.__v=n,r.__c){if(E&&!he.getDerivedStateFromProps&&T!==x&&b.componentWillReceiveProps&&b.componentWillReceiveProps(T,D),n.__v==r.__v&&!(8&b.__g)||!(4&b.__g)&&b.shouldComponentUpdate&&!1===b.shouldComponentUpdate(T,b.__s,D)){n.__v!=r.__v&&(b.props=T,b.state=b.__s,b.__g&=-9),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(e){e&&(e.__=n)}),f.push.apply(b.__h,b.__k),b.__k=[],b.__h.length&&s.push(b),c=ee(r);break n}b.componentWillUpdate&&b.componentWillUpdate(T,b.__s,D),E&&b.componentDidUpdate&&b.__h.push(function(){b.componentDidUpdate(x,te,w)})}else E&&!he.getDerivedStateFromProps&&b.componentWillMount&&b.componentWillMount(),E&&b.componentDidMount&&b.__h.push(b.componentDidMount);if(b.context=D,b.props=T,b.__P=t,b.__g&=-5,ie=e.__r,ae=0,E)b.state=b.__s,b.__g&=-9,ie&&ie(n),d=b.render(b.props,b.state,b.context),f.push.apply(b.__h,b.__k),b.__k=[];else do b.__g&=-9,ie&&ie(n),d=b.render(b.props,b.state,b.context),b.state=b.__s;while(8&b.__g&&++ae<25);b.state=b.__s,b.getChildContext&&(i=g({},i,b.getChildContext())),E&&r.__c&&b.getSnapshotBeforeUpdate&&(w=b.getSnapshotBeforeUpdate(x,te)),oe=d&&d.type===S&&d.key==null?d.props.children:d,T.__P&&(d=c,a=(t=T.__P).namespaceURI,l=o=null,r.props&&r.props.__P!=t&&(r.__k.some(function(e){e&&pe(e,e)}),r.__k=null),c=r.__k?ee(r,0):null),c=ne(t,m(oe)?oe:[oe],n,r,i,a,o,s,c,l,u),T.__P&&(n.__e=null,c=d),n.__u&=-161,128&r.__u&&(b.__z=null),p&&p.some(_),b.__h.length&&s.push(b),1&b.__g&&(b.__g&=-4)}catch(t){if(s.length=y,n.__v=null,l||o){if(t.then){if(se=0,n.__u|=l?160:128,o){for(~(ue=o.indexOf(c||void 0))||(ue=o.length);(fe=o[ue-1])&&fe.nodeType==8;)ue--;for(;ue<o.length;ue++)if(fe=o[ue]){if(o[ue]=null,fe.nodeType==8){if(fe.data.startsWith(`$s`))se++||(ce=fe);else if(se&&fe.data.startsWith(`/$s`)&&!--se){c=fe;break}}else if(!se)break}}if(!ce){for(;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;ce=c}n.__c.__z||(n.__c.__z=ce),n.__e=c}else o&&o.some(_)}else n.__e=r.__e;n.__k||=r.__k||[],t.then||le(n),e.__e(t,n,r)}}else c=n.__e=de(r.__e,n,r,i,a,o,s,l,u,t);return(d=e.diffed)&&d(n),128&n.__u?void 0:c}function le(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(le))}function ue(t,n,r){for(var i=0;i<r.length;)fe(r[i++],r[i++],r[i++]);e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function de(t,n,r,i,a,o,s,c,l,u){var f,g,v,y,b,x,S,C,te,w=r.props||d,T=n.props,E=n.type;if(E==`svg`?a=`http://www.w3.org/2000/svg`:E==`math`?a=`http://www.w3.org/1998/Math/MathML`:a||=`http://www.w3.org/1999/xhtml`,o){for(f=0;f<o.length;f++)if((b=o[f])&&(E?b.localName==E:b.nodeType==3)){t=b,o[f]=null;break}}if(!t){if(C=u.ownerDocument||document,!E)return C.createTextNode(T);t=C.createElementNS(a,E,T.is&&T),c&&=(e.__m&&e.__m(n,o),!1),o=null}if(E){if(u=E==`template`?t.content:t,o=E==`textarea`&&T.defaultValue!=null?null:o&&h.call(u.childNodes),!c&&o)for(w={},f=0;f<t.attributes.length;f++)w[(b=t.attributes[f]).name]=b.value;for(f in w)b=w[f],f==`dangerouslySetInnerHTML`?v=b:f==`children`||f in T||f==`value`&&`defaultValue`in T||f==`checked`&&`defaultChecked`in T||oe(t,f,null,b,a);for(f in te=1&r.__u,T)b=T[f],f==`children`?y=b:f==`dangerouslySetInnerHTML`?g=b:f==`value`?x=b:f==`checked`?S=b:c&&typeof b!=`function`||!(w[f]!==b||te&&b!=null)||oe(t,f,b,w[f],a);g?(c||v&&(g.__html==v.__html||g.__html==t.innerHTML)||(t.innerHTML=g.__html),n.__k=[]):(v&&(t.textContent=``),(E==`foreignObject`||a==`http://www.w3.org/1998/Math/MathML`&&p.test(E))&&(a=`http://www.w3.org/1999/xhtml`),ne(u,m(y)?y:[y],n,r,i,a,o,s,o?o[0]:r.__k&&ee(r,0),c,l),o&&o.some(_)),c&&E!=`textarea`||(f=`value`,E==`progress`&&x==null?t.removeAttribute(f):x==null||x===t[f]&&(E!=`progress`||x)||oe(t,f,x,w[f],a),f=`checked`,S!=null&&S!=t[f]&&oe(t,f,S,w[f],a))}else w===T||c&&t.data==T||(t.data=T);return t}function fe(t,n,r,i){try{typeof t==`function`?n?n.__x=t(n)||1:(i&&=i.__c||i.__e)&&(n=i.__x)&&(i.__x=null,typeof n==`function`?n():t(null)):t.current=n}catch(t){e.__e(t,r)}}function pe(t,n,r){var i,a;if(e.unmount&&e.unmount(t),!(i=t.ref)||i.current&&i.current!=t.__e||fe(i,null,n,t),i=t.__c){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){e.__e(t,n)}i.__P=i.__n=null}if(i=t.__k)for(a=0;a<i.length;a++)i[a]&&pe(i[a],n,typeof t.type!=`function`||r&&!t.props.__P);(i=t.__e)&&(r||_(i),i.__e&&(i.__e=null)),t.__e=t.__c=t.__=null}function me(e,t,n){return this.constructor(e,n)}function he(t,n){var r,i,a,o;e.__&&e.__(t,n),n.nodeType==9&&(n=n.documentElement),i=(r=t&&32&t.__u)?null:n.__k,n.__k=b(S,{children:[t]}),a=[],o=[],ce(n,n.__k,i||d,d,n.namespaceURI,i?null:n.firstChild?h.call(n.childNodes):null,a,i?i.__e:n.firstChild,r,o),ue(a,n.__k,o),n.__k.props.children=null}function ge(e,t){e&&typeof e==`object`&&(e.__u|=32),he(e,t)}function O(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__g|=4,w(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+u++,t.__=e,t.Provider=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}function _e(e){return e.children}function ve(e,t){return b(_e,{__P:t,children:e})}e={__e:function(e,t,n,r){for(var a,o,s;t=t.__;)if((a=t.__c)&&!(1&a.__g)){a.__g|=4;try{if((o=a.constructor)&&o.getDerivedStateFromError&&(a.setState(o.getDerivedStateFromError(e)),s=8&a.__g),a.componentDidCatch&&(a.componentDidCatch(e,r||{}),s=8&a.__g),s)return void(a.__g|=2)}catch(t){e=t,s=0}}throw i=0,e}},t=0,C.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=g({},this.state)),typeof e==`function`&&(e=e(g({},n),this.props)),e&&(g(n,e),this.__v&&(t&&this.__k.push(t),w(this)))},C.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),w(this))},C.prototype.render=S,n=[],i=0,a=function(e,t){return e.__v.__b-t.__v.__b},o=Symbol(),s=/(PointerCapture)$|Capture$/i,c=0,l={},u=0;var ye,k,be,xe,Se=Object.is,Ce=0,we=[],Te=[],A=e,Ee=A.__b,De=A.__r,Oe=A.diffed,ke=A.__c,Ae=A.unmount,je=A.__;function Me(e,t){A.__h&&A.__h(k,e,Ce||t),Ce=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ne(e){return Ce=1,Pe(Ye,e)}function Pe(e,t,n){var r=Me(ye++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ye(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);Se(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=k,!k.__f)){k.__f=!0;var i=k.shouldComponentUpdate;k.shouldComponentUpdate=function(e,t,n){var r=this.__H;if(!r)return!0;var a=!1,o=this.props!=e;if(r.__.some(function(e){e.__N&&(a=!0,Se(e.__[0],e.__N[0])||(o=!0))}),i){var s=i.call(this,e,t,n);return a?s||o:s}return!a||o}}return r.__}function Fe(e,t){var n=Me(ye++,3);!A.__s&&Je(n.__H,t)&&(n.__P=!0,n.__=e,n.u=t,k.__H.__h.push(n))}function Ie(e,t){var n=Me(ye++,4);!A.__s&&Je(n.__H,t)&&(n.__P=!1,n.__=e,n.u=t,k.__h.push(n))}function Le(e){return Ce=5,j(function(){return{current:e}},[])}function Re(e,t,n){Ce=6,Ie(function(){if(typeof e==`function`){var n=e(t());return function(){e(null),n&&typeof n==`function`&&n()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function j(e,t){var n=Me(ye++,7);return Je(n.__H,t)&&(n.__=e(),n.__H=t),n.__}function ze(e,t){return Ce=8,j(function(){return e},t)}function M(e){var t=k.context[e.__c],n=Me(ye++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(k)),t.props.value):e.__}function Be(e,t){A.useDebugValue&&A.useDebugValue(t?t(e):e)}function Ve(){var e=Me(ye++,11);if(!e.__){for(var t=k.__v;!t.__m&&t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__=`P`+n[0]+`-`+n[1]++}return e.__}function He(){var e;do{for(;e=Te.shift();)try{Ke(e)}catch(t){A.__e(t,{__:(e=e.__P)&&e.__v})}for(;e=we.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Ke),t.__h.some(qe),t.__h=[]}catch(n){t.__h=[],A.__e(n,e.__v)}}}while(Te.length)}A.__b=function(e){k=null,Ee&&Ee(e)},A.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),je&&je(e,t)},A.__r=function(e){De&&De(e),ye=0;var t=(k=e.__c).__H;t&&(be==k?k.__h=[]:(t.__h.some(Ke),t.__h.some(qe),ye=0),t.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})),be=k},A.diffed=function(e){Oe&&Oe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&Ge(we.push(t)),t.__H.__.some(function(e){e.u&&(e.__H=e.u)})),be=k=null},A.__c=function(e,t){t.some(function(e){try{e.__h.some(Ke),e.__h=e.__h.filter(function(e){return!e.__||qe(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],A.__e(n,e.__v)}}),ke&&ke(e,t)},A.unmount=function(e){Ae&&Ae(e);var t,n,r=e.__c;r&&r.__H&&(r.__H.__.some(function(r){try{if(r.__P&&r.__c){if(n===void 0){for(n=e.__;n&&(!n.__c||!n.__c.__P);)n=n.__;n&&=n.__c}r.__P=n,Ge(Te.push(r))}else Ke(r)}catch(e){t=e}}),r.__H=void 0,t&&A.__e(t,r.__v))};var Ue=typeof requestAnimationFrame==`function`;function We(e){var t,n=function(){clearTimeout(r),Ue&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Ue&&(t=requestAnimationFrame(n))}function Ge(e){e!=1&&xe==A.requestAnimationFrame||((xe=A.requestAnimationFrame)||We)(He)}function Ke(e){var t=k,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),k=t}function qe(e){var t=k;e.__c=e.__(),k=t}function Je(e,t){return!e||e.length!=t.length||t.some(function(t,n){return!Se(t,e[n])})}function Ye(e,t){return typeof t==`function`?t(e):t}var Xe=function(e,t,n){return e==null?null:D(D(e).map(t.bind(n)))},Ze={map:Xe,forEach:Xe,count:function(e){return e?D(e).length:0},only:function(e){var t=D(e);if(t.length!=1)throw`Children.only`;return t[0]},toArray:D},Qe=Object.assign;function $e(e,t){for(var n in e)if(n!=`__source`&&e[n]!==t[n])return!0;for(var r in t)if(r!=`__source`&&!(r in e))return!0;return!1}var et=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;function tt(){function e(e,t){this.props=e,this.context=t}return(e.prototype=new C).isPureReactComponent=!0,e.prototype.shouldComponentUpdate=function(e,t){return $e(this.props,e)||$e(this.state,t)},e}var nt=tt(),rt=Symbol.for(`react.forward_ref`);function it(e){function t(t){var n=Qe({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=rt,t.render=e,t.prototype.isReactComponent=!0,t.displayName=`ForwardRef(`+(e.displayName||e.name)+`)`,t}function at(e){e()}function ot(e){return e}function st(){return[!1,at]}var ct=Ie;function lt(e){var t=Le(e);return t.current=e,function(){return t.current.apply(void 0,arguments)}}function ut(e,t){function n(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:$e(this.props,e)}function r(t){return this.shouldComponentUpdate=n,v(e,t)}return r.displayName=`Memo(`+(e.displayName||e.name)+`)`,r.prototype.isReactComponent=!0,r.type=e,r}function dt(e,t){var n=ve(e,t);return n.containerInfo=t,n}var ft,pt,mt,ht=Symbol.for(`react.element`),gt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,_t=/[A-Z0-9]/g,vt=typeof document<`u`,yt=Dt(function(t,n,r){var i=e.__s||pt?(r||n)():n(),a=Ne({t:{__:i,u:n}}),o=a[0].t,s=a[1];return Ie(function(){o.__=i,o.u=n,bt(o)&&s({t:o})},[t,i,n]),Fe(function(){return bt(o)&&s({t:o}),t(function(){bt(o)&&s({t:o})})},[t]),i});function bt(e){try{return!Object.is(e.__,e.u())}catch{return!0}}var xt=function(e){return/fil|che|rad/.test(e)};function St(e,t,n){return t.__k??(t.textContent=``),he(e,t),typeof n==`function`&&n(),e?e.__c:null}function Ct(e,t,n){return ge(e,t),typeof n==`function`&&n(),e?e.__c:null}C.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(C.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var wt=e.event;e.event=function(e){return wt&&(e=wt(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Tt={configurable:!0,get:function(){return this.class}},Et=e.vnode;function Dt(t){if(!mt){mt=!0;var n=e.__r;e.__r=function(e){n&&n(e),32&e.__u&&(pt=e),ft=e.__c};var r=e.diffed;e.diffed=function(e){r&&r(e),ft=null,pt==e&&(pt=null)}}return t}e.vnode=function(e){if(typeof e.type==`string`)(function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var a in t){var o=t[a];if(!(a==`value`&&`defaultValue`in t&&o==null||vt&&a==`children`&&n==`noscript`||a==`class`||a==`className`)){if(a==`style`&&typeof o==`object`){var s=void 0;for(var c in o)typeof o[c]!=`number`||et.test(c)||(s||=o=Qe({},o),o[c]+=`px`)}else if(a==`defaultValue`&&`value`in t&&t.value==null)a=`value`;else if(a==`download`&&!0===o)o=``;else if(a==`translate`&&o===`no`)o=!1;else if(a[0]==`o`&&a[1]==`n`){var l=a.toLowerCase();l==`ondoubleclick`?a=`ondblclick`:l!=`onchange`||n!=`input`&&n!=`textarea`||xt(t.type)?l==`onfocus`?a=`onfocusin`:l==`onblur`&&(a=`onfocusout`):l=a=`oninput`,l==`oninput`&&r[a=l]&&(a=`oninputCapture`)}else i&&gt.test(a)?a=a.replace(_t,`-$&`).toLowerCase():o===null&&(o=void 0);r[a]=o}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=D(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=D(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",Tt)):t.className&&(r.class=r.className=t.className),e.props=r})(e);else if(typeof e.type==`function`&&(`ref`in e.props&&`prototype`in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=Qe({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!(`ref`in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=ht,Et&&Et(e)};var Ot=Dt(function(e){if(e.then){if(e.status==`fulfilled`)return e.value;throw e.status==`rejected`?e.reason:(e.status||(e.status=`pending`,e.then(function(t){e.status=`fulfilled`,e.value=t},function(t){e.status=`rejected`,e.reason=t})),e)}var t=e.__c,n=ft.__n[t];return n?(ft[t]||(ft[t]=!0,n.sub(ft)),n.props.value):e.__}),kt={ReactCurrentDispatcher:{current:{readContext:Ot,useCallback:ze,useContext:M,useDebugValue:Be,useDeferredValue:ot,useEffect:Fe,useId:Ve,useImperativeHandle:Re,useInsertionEffect:ct,useLayoutEffect:Ie,useMemo:j,useReducer:Pe,useRef:Le,useState:Ne,useSyncExternalStore:yt,useTransition:st}}};function At(e,t,n){if(e){var r=e.__c&&e.__c.__H;r&&(r.__.forEach(function(e){e.__P!=null&&(typeof e.__c==`function`&&e.__c(),e.__c=e.__H=void 0)}),r.__h=e.__c.__h=[]),typeof e.type==`string`&&(e.__u|=8),(e=Qe({constructor:void 0},e)).__c!=null&&(e.__c.__P==n&&(e.__c.__P=t),e.__c.__g|=4,e.__c=e.ref=null),e.__k=e.__k&&e.__k.map(function(e){return At(e,t,n)})}return e}function jt(e,t,n){return e&&n&&(typeof e.type==`string`&&(e.__u|=1),e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return jt(e,t,n)}),e.__c&&e.__c.__P==t&&(e.__e&&n.appendChild(e.__e),e.__c.__g|=4,e.__c.__P=n)),e}function Mt(){function t(){this.__u=0,this.i=null,this.__b=null}return function(){var t=e.__e;e.__e=function(e,n,r,i){if(e.then){for(var a,o=n;o=o.__;)if((a=o.__c)&&a.__c)return r&&!r.__c&&(n.__c.__H=void 0),a.__c(e,n)}t(e,n,r,i)};var n=e.unmount;e.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),n&&n(e)}}(),(t.prototype=new C).__c=function(e,t){var n=this,r=t.__c;this.i??=[],this.i.push(r);var i=!1,a=function(){!i&&n.__P&&(i=!0,r.__R=null,s())};r.__R=a;var o=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e=n.state.__a;n.__v.__k[0]=jt(e,e.__c.__P,e.__c.__O)}var t;for(n.setState({__a:n.__b=null});t=n.i.pop();)t.__P=o,t.forceUpdate()}};this.__u++||32&t.__u||this.setState({__a:this.__b=this.__v.__k[0]}),e.then(a,a)},t.prototype.componentWillUnmount=function(){this.i=[],this.state.__a&&(this.__v.__k[0]=this.state.__a)},t.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=At(this.__b,n,r.__O=r.__P)}this.__b=null}return[v(S,null,t.__a?null:e.children),t.__a&&v(S,null,e.fallback)]},t}var Nt=Mt();function Pt(e){var t,n,r,i=null;function a(a){if(t||(t=e()).then(function(e){e&&(i=e.default||e),r=!0},function(e){n=e,r=!0}),n)throw n;if(!r)throw t;return i?v(i,a):null}return a.displayName=`Lazy`,a}function Ft(e){return v.bind(null,e)}function It(e){return!!e&&e.$$typeof===ht}function Lt(e){return It(e)&&e.type==S}function Rt(e){return!!e&&typeof e.displayName==`string`&&e.displayName.indexOf(`Memo(`)==0}function zt(e){return It(e)?y.apply(null,arguments):e}function Bt(e){return!!e.__k&&(he(null,e),!0)}function Vt(e){return e&&(e.__v&&e.__v.__e||e.nodeType==1&&e)||null}var Ht=function(t,n){var r,i=e.debounceRendering;e.debounceRendering=function(e){r=e};try{var a=t(n);return r&&r(),a}finally{e.debounceRendering=i}};function Ut(e,t){return e(t)}var Wt={useState:Ne,useId:Ve,useReducer:Pe,useEffect:Fe,useLayoutEffect:Ie,useInsertionEffect:ct,useTransition:st,useDeferredValue:ot,useSyncExternalStore:yt,useEffectEvent:lt,startTransition:at,useRef:Le,useImperativeHandle:Re,useMemo:j,useCallback:ze,useContext:M,use:Ot,useDebugValue:Be,version:`19.0.0`,Children:Ze,render:St,hydrate:Ct,unmountComponentAtNode:Bt,createPortal:dt,createElement:v,createContext:O,createFactory:Ft,cloneElement:zt,createRef:x,Fragment:S,isValidElement:It,isElement:It,isFragment:Lt,isMemo:Rt,findDOMNode:Vt,Component:C,PureComponent:nt,memo:ut,forwardRef:it,flushSync:Ht,unstable_batchedUpdates:Ut,StrictMode:S,Suspense:Nt,lazy:Pt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:kt};function Gt(e){return{render:function(t){St(t,e)},unmount:function(){Bt(e)}}}function Kt(e,t){return Ct(t,e),Gt(e)}var qt=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Jt=/^[\\/]{2}/;function Yt(e,t){return t+e.replace(/\\/g,`/`)}var Xt=`popstate`;function Zt(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function Qt(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return nn(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:rn(t)}return on(t,n,null,e)}function N(e,t){if(e===!1||e==null)throw Error(t)}function $t(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function en(){return Math.random().toString(36).substring(2,10)}function tn(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function nn(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?an(t):t,state:n,key:t&&t.key||r||en(),mask:i}}function rn({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function an(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function on(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=Zt(e)?e:nn(h.location,e,t);n&&n(r,e),l=u()+1;let d=tn(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=Zt(e)?e:nn(h.location,e,t);n&&n(r,e),l=u();let i=tn(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return sn(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(Xt,d),c=e,()=>{i.removeEventListener(Xt,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function sn(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),N(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:rn(t);return i=i.replace(/ $/,`%20`),!n&&Jt.test(i)&&(i=r+i),new URL(i,r)}function cn(e,t,n=`/`){return ln(e,t,n,!1)}function ln(e,t,n,r,i){let a=An((typeof t==`string`?an(t):t).pathname||`/`,n);if(a==null)return null;let o=i??un(e),s=null,c=kn(a);for(let e=0;s==null&&e<o.length;++e)s=Tn(o[e],c,r);return s}function un(e){let t=dn(e);return pn(t),t}function dn(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;N(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Rn([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(N(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),dn(e.children,t,u,l,o)),(e.path!=null||e.index)&&t.push({path:l,score:Cn(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=On(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of fn(e.path))a(e,t,!0,n)}),t}function fn(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=fn(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function pn(e){e.sort((e,t)=>e.score===t.score?wn(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var mn=/^:[\w-]+$/,hn=/^:[\w-]+/,gn=3.5,_n=3,vn=2,yn=1,bn=10,xn=-2,Sn=e=>e===`*`;function Cn(e,t){let n=e.split(`/`),r=n.length;return n.some(Sn)&&(r+=xn),t&&(r+=vn),n.filter(e=>!Sn(e)).reduce((e,t)=>e+(mn.test(t)?_n:hn.test(t)?gn:t===``?yn:bn),r)}function wn(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Tn(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Dn(u,l,s.matcher,s.compiledParams):En(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=En({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Rn([a,d.pathname]),pathnameBase:Bn(Rn([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Rn([a,d.pathnameBase]))}return o}function En(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=On(e.path,e.caseSensitive,e.end);return Dn(e,t,n,r)}function Dn(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=zn(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=zn(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function On(e,t=!1,n=!0){$t(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(?=\/|$|\()/g,`(?:/$1)?`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function kn(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return $t(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function An(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function jn(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?an(e):e,a;return n?(n=Ln(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?Mn(n.substring(1),`/`):Mn(n,t)):a=t,{pathname:a,search:Vn(r),hash:Hn(i)}}function Mn(e,t){let n=zn(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Nn(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pn(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Fn(e){let t=Pn(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function In(e,t,n,r=!1){let i;typeof e==`string`?i=an(e):(i={...e},N(!i.pathname||!i.pathname.includes(`?`),Nn(`?`,`pathname`,`search`,i)),N(!i.pathname||!i.pathname.includes(`#`),Nn(`#`,`pathname`,`hash`,i)),N(!i.search||!i.search.includes(`#`),Nn(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=jn(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ln=e=>e.replace(/[\\/]{2,}/g,`/`),Rn=e=>Ln(e.join(`/`));function zn(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Bn=e=>zn(e).replace(/^\/*/,`/`),Vn=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Hn=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Un=class{status;statusText;data;error;internal;constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Wn(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Gn(e){return Rn(e.map(e=>e.route.path).filter(Boolean))||`/`}var Kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function qn(e,t){let n=e;if(typeof n!=`string`||!qt.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Kn)try{let e=new URL(window.location.href),r=Jt.test(n)?new URL(Yt(n,e.protocol)):new URL(n),a=An(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{$t(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}var Jn=new URL(`http://localhost`);function Yn(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),Jn)}catch{return Jn}}function Xn(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function Zn(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function Qn(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!Xn(i,n),s=!Xn(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Zn(e,i)||!Xn(i,a)))throw Error(`External navigation is not allowed`)}var $n=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set($n);var er=[`GET`,...$n];new Set(er);var tr=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function nr(e){try{return tr.includes(new URL(e).protocol)}catch{return!1}}var rr=O(null);rr.displayName=`DataRouter`;var ir=O(null);ir.displayName=`DataRouterState`;var ar=O(null);ar.displayName=`DataRouterData`;var or=O(null);or.displayName=`DataRouterNavigation`;var sr=O(!1);function cr(){return M(sr)}var lr=O({isTransitioning:!1});lr.displayName=`ViewTransition`;var ur=O(null);ur.displayName=`Fetchers`;var dr=O(null);dr.displayName=`Await`;var P=O(null);P.displayName=`Navigation`;var fr=O(null);fr.displayName=`Location`;var pr=O({outlet:null,matches:[],isDataRoute:!1});pr.displayName=`Route`;var mr=O(!1);mr.displayName=`IsDataRoute`;var hr=O(void 0);hr.displayName=`RouteId`;var gr=O(null);gr.displayName=`RouteError`;var _r=`REACT_ROUTER_ERROR`,vr=`REDIRECT`,yr=`ROUTE_ERROR_RESPONSE`;function br(e){if(e.startsWith(`${_r}:${vr}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function xr(e){if(e.startsWith(`${_r}:${yr}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Un(t.status,t.statusText,t.data)}catch{}}function Sr(e,{relative:t}={}){N(Cr(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=M(P),{hash:i,pathname:a,search:o}=Or(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Rn([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Cr(){return M(fr)!=null}function F(){return N(Cr(),`useLocation() may be used only in the context of a <Router> component.`),M(fr).location}var wr=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Tr(){return M(mr)?Wr():Er()}function Er(){N(Cr(),`useNavigate() may be used only in the context of a <Router> component.`);let e=M(rr),{basename:t,navigator:n}=M(P),{matches:r}=M(pr),{pathname:i}=F(),a=JSON.stringify(Fn(r)),o=Le(!1);return Ie(()=>{o.current=!0}),ze((r,s={})=>{if($t(o.current,wr),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=In(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Rn([t,c.pathname])),Qn(typeof r==`string`?r:rn(r),n.createHref(c),Yn(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}O(null);function Dr(){let{matches:e}=M(pr);return e[e.length-1]?.params??{}}function Or(e,{relative:t}={}){let{matches:n}=M(pr),{pathname:r}=F(),i=JSON.stringify(Fn(n));return j(()=>In(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function kr(e,t){return Ar(e,t)}function Ar(e,t,n){N(Cr(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=M(P),{matches:i}=M(pr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:`/`;a&&a.route;let c=F(),l;if(t){let e=typeof t==`string`?an(t):t;N(s===`/`||e.pathname?.startsWith(s),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${e.pathname}" was given in the \`location\` prop.`),l=e}else l=c;let u=l.pathname||`/`,d=u;if(s!==`/`){let e=s.replace(/^\//,``).split(`/`);d=`/`+u.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let f;f=n?n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):n.router.match(n.state.location):cn(e,{pathname:d});let p=Lr(f&&f.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Rn([s,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?s:Rn([s,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&p?v(fr.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...l},navigationType:`POP`}},p):p}function jr(){let e=Ur(),t=Wn(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return v(S,null,v(`h2`,null,`Unexpected Application Error!`),v(`h3`,{style:{fontStyle:`italic`}},t),n?v(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var Mr=v(jr,null),Nr=class extends C{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=sr;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=xr(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v(pr.Provider,{value:this.props.routeContext},v(mr.Provider,{value:this.props.routeContext.isDataRoute},v(hr.Provider,{value:this.props.routeContext.matches[this.props.routeContext.matches.length-1]?.route.id},v(gr.Provider,{value:e,children:this.props.component}))));return this.context?v(Fr,{error:e},t):t}},Pr=new WeakMap;function Fr({children:e,error:t}){let{basename:n,navigator:r}=M(P);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=br(t.digest);if(e){let i=Pr.get(t);if(i)throw i;let a=qn(e.location,n),o=a.absoluteURL||a.to;if(Qn(e.location,o,Yn(r),`allow-explicit`),nr(o))throw Error(`Invalid redirect location`);if(Kn&&!Pr.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Pr.set(t,n),n}}return v(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function Ir({routeContext:e,match:t,children:n}){let r=M(rr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v(pr.Provider,{value:e},v(mr.Provider,{value:e.isDataRoute},v(hr.Provider,{value:t.route.id},n)))}function Lr(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);N(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Gn(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Mr,o&&(s<0&&c===0?(Kr(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v(n.route.Component,null):n.route.element?n.route.element:e,v(Ir,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v(Nr,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Rr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zr(e){let t=M(rr);return N(t,Rr(e)),t}function Br(e){let t=M(ir);return N(t,Rr(e)),t}function Vr(e){let t=M(ar);return N(t,Rr(e)),t}function Hr(e){let t=M(hr);return N(t,`${e} can only be used on routes that contain a unique "id"`),t}function Ur(){let e=M(gr),t=Vr(`useRouteError`),n=Hr(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Wr(){let{router:e}=zr(`useNavigate`),t=Hr(`useNavigate`),n=Le(!1);return Ie(()=>{n.current=!0}),ze(async(r,i={})=>{$t(n.current,wr),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Gr={};function Kr(e,t,n){!t&&!Gr[e]&&(Gr[e]=!0,$t(!1,n))}ut(qr);function qr({routes:e,manifest:t,state:n,isStatic:r,onError:i}){let a=M(rr);return N(a,`You must render this element inside a <DataRouterContext.Provider> element`),Ar(e,void 0,{router:a.router,manifest:t,state:n,isStatic:r,onError:i})}function Jr({to:e,replace:t,state:n,relative:r}){N(Cr(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=M(P);$t(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=M(pr),{pathname:s}=F(),c=Tr(),l=In(e,Fn(o),s,r===`path`);Qn(typeof e==`string`?e:rn(e),a.createHref(l),Yn(a),`reject`);let u=JSON.stringify(l);return Fe(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function Yr(e){N(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Xr({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){N(!Cr(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=j(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=an(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=j(()=>{let e=An(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return $t(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v(P.Provider,{value:c},v(fr.Provider,{children:t,value:h}))}function Zr({children:e,location:t}){return kr(Qr(e),t)}function Qr(e,t=[]){let n=[];return Ze.forEach(e,(e,r)=>{if(!It(e))return;let i=[...t,r];if(e.type===S){n.push.apply(n,Qr(e.props.children,i));return}N(e.type===Yr,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);let a=e.props;N(!a.index||!a.children,`An index route cannot have child routes.`);let o={id:a.id||i.join(`-`),caseSensitive:a.caseSensitive,element:a.element,Component:a.Component,index:a.index,path:a.path,middleware:a.middleware,loader:a.loader,action:a.action,hydrateFallbackElement:a.hydrateFallbackElement,HydrateFallback:a.HydrateFallback,errorElement:a.errorElement,ErrorBoundary:a.ErrorBoundary,shouldRevalidate:a.shouldRevalidate,handle:a.handle,lazy:a.lazy};a.children&&(o.children=Qr(a.children,i)),n.push(o)}),n}var $r=`application/x-www-form-urlencoded`;function ei(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function ti(e){return ei(e)&&e.tagName.toLowerCase()===`button`}function ni(e){return ei(e)&&e.tagName.toLowerCase()===`form`}function ri(e){return ei(e)&&e.tagName.toLowerCase()===`input`}function ii(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ai(e,t){return e.button===0&&(!t||t===`_self`)&&!ii(e)}var oi=null;function si(){if(oi===null)try{new FormData(document.createElement(`form`),0),oi=!1}catch{oi=!0}return oi}var ci=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function li(e){return e!=null&&!ci.has(e)?($t(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$r}"`),null):e}function ui(e,t){let n,r,i,a,o;if(ni(e)){let o=e.getAttribute(`action`);r=o?An(o,t):null,n=e.getAttribute(`method`)||`get`,i=li(e.getAttribute(`enctype`))||$r,a=new FormData(e)}else if(ti(e)||ri(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?An(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||`get`,i=li(e.getAttribute(`formenctype`))||li(o.getAttribute(`enctype`))||$r,a=new FormData(o,e),!si()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(ei(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=`get`,r=null,i=$r,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function di(e,t){if(e===!1||e==null)throw Error(t)}function fi(e,t){let n=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n.pathname=n.pathname.endsWith(`/`)?`${n.pathname}_.${t}`:`${n.pathname}.${t}`,n}var pi=`modulepreload`,mi=function(e){return`/`+e},hi={},gi=function(e){return e.pathname.endsWith(`.css`)},_i=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},vi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=mi(t,n);let r=s(t),i=gi(r);return _i(hi,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:pi,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};async function yi(e,t){if(e.id in t)return t[e.id];try{let n=await vi(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bi(e){return e!=null&&typeof e.page==`string`}function xi(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Si(e,t,n){return Di((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await yi(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(xi).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function Ci(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function wi(e,t,{includeHydrateFallback:n}={}){return Ti(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Ti(e){return[...new Set(e)]}function Ei(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Di(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!bi(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Ei(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}var Oi=O(void 0);Oi.displayName=`FrameworkContext`;function ki(){let e=M(Oi);return di(e,`You must render this element inside a <HydratedRouter> element`),e}function Ai(e,t){let n=M(Oi),[r,i]=Ne(!1),[a,o]=Ne(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=Le(null);Fe(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),Fe(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:ji(s,p),onBlur:ji(c,m),onMouseEnter:ji(l,p),onMouseLeave:ji(u,m),onTouchStart:ji(d,p)}]:[a,f,{}]:[!1,f,{}]}function ji(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Mi({page:e,...t}){let n=cr(),{nonce:r}=ki(),{router:i}=zr(`PrefetchPageLinks`),a=j(()=>i.match(e),[i,i.routes,e]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),v(n?Pi:Fi,{page:e,matches:a,...t})):null}function Ni(e){let{manifest:t,routeModules:n}=ki(),[r,i]=Ne([]);return Fe(()=>{let r=!1;return Si(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Pi({page:e,matches:t,...n}){let r=F();return v(S,null,j(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=fi(e,`rsc`),i=!1,a=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?i=!0:a.push(e.route.id);return i&&a.length>0&&n.searchParams.set(`_routes`,a.join(`,`)),[n.pathname+n.search]},[e,r,t]).map(e=>v(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Fi({page:e,matches:t,...n}){let r=F(),{manifest:i,routeModules:a}=ki(),{matches:o}=Br(`PrefetchPageLinks`),{loaderData:s}=Vr(`PrefetchPageLinks`),c=j(()=>Ci(e,t,o,i,r,`data`),[e,t,o,i,r]),l=j(()=>Ci(e,t,o,i,r,`assets`),[e,t,o,i,r]),u=j(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,o=!1;if(t.forEach(e=>{let t=i.routes[e.route.id];t&&t.hasLoader&&(!c.some(t=>t.route.id===e.route.id)&&e.route.id in s&&a[e.route.id]?.shouldRevalidate||t.hasClientLoader?o=!0:n.add(e.route.id))}),n.size===0)return[];let l=fi(e,`data`);return o&&n.size>0&&l.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[l.pathname+l.search]},[s,r,i,c,t,e,a]),d=j(()=>wi(l,i),[l,i]),f=Ni(l);return v(S,null,u.map(e=>v(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),d.map(e=>v(`link`,{key:e,rel:`modulepreload`,href:e,...n})),f.map(({key:e,link:t})=>v(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Ii(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var Li=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Li&&(window.__reactRouterVersion=`8`)}catch{}function Ri({basename:e,children:t,useTransitions:n,window:r}){let i=Le(null);i.current??=Qt({window:r,v5Compat:!0});let a=i.current,[o,s]=Ne({action:a.action,location:a.location}),c=ze(e=>{n===!1?s(e):at(()=>s(e))},[n]);return Ie(()=>a.listen(c),[a,c]),v(Xr,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var I=it(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=M(P),y=typeof l==`string`&&qt.test(l),b=qn(l,h);l=b.to;let x=Sr(l,{relative:r}),C=F(),ee=null;if(o){let e=In(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Rn([h,e.pathname])),ee=g.createHref(e)}let[te,w,T]=Ai(n,p),ne=Vi(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function E(t){e&&e(t),t.defaultPrevented||ne(t)}let re=!(b.isExternal||i),D=v(`a`,{...p,...T,href:(re?ee:void 0)||b.absoluteURL||x,onClick:re?E:e,ref:Ii(m,w),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return te&&!y?v(S,null,D,v(Mi,{page:x})):D});I.displayName=`Link`;var zi=it(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Or(a,{relative:c.relative}),d=F(),f=M(or),{navigator:p,basename:m}=M(P),h=f!=null&&Ki(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f?.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=An(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(b)===`/`),C={isActive:x,isPending:S,isTransitioning:h},ee=x?e:void 0,te;te=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let w=typeof i==`function`?i(C):i;return v(I,{...c,"aria-current":ee,className:te,ref:l,style:w,to:a,viewTransition:o},typeof s==`function`?s(C):s)});zi.displayName=`NavLink`;var Bi=it(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=`get`,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=M(P),g=Wi(),_=Gi(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&qt.test(s);return v(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?at(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Bi.displayName=`Form`;function Vi(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=Tr(),d=F(),f=Or(e,{relative:o});return ze(p=>{if(ai(p,t)){p.preventDefault();let t=n===void 0?rn(d)===rn(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?at(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Hi=0,Ui=()=>`__${String(++Hi)}__`;function Wi(){let{router:e}=zr(`useSubmit`),{basename:t}=M(P),n=Hr(`useSubmit`),r=e.fetch,i=e.navigate;return ze(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=ui(e,t);a.navigate===!1?await r(a.fetcherKey||Ui(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Gi(e,{relative:t}={}){let{basename:n}=M(P),r=M(pr);N(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Or(e||`.`,{relative:t})},o=F();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Rn([n,a.pathname])),rn(a)}function Ki(e,{relative:t}={}){let n=M(lr);N(n!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=zr(`useViewTransitionState`),i=Or(e,{relative:t});if(!n.isTransitioning)return!1;let a=An(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=An(n.nextLocation.pathname,r)||n.nextLocation.pathname;return En(i.pathname,o)!=null||En(i.pathname,a)!=null}var L=`-ms-`,qi=`-moz-`,R=`-webkit-`,Ji=`comm`,Yi=`rule`,Xi=`decl`,Zi=`@import`,Qi=`@namespace`,$i=`@keyframes`,ea=`@layer`,ta=Math.abs,na=String.fromCharCode,ra=Object.assign;function ia(e,t){return B(e,0)^45?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}function aa(e){return e.trim()}function oa(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function sa(e,t,n){return e.indexOf(t,n)}function B(e,t){return e.charCodeAt(t)|0}function ca(e,t,n){return e.slice(t,n)}function la(e){return e.length}function ua(e){return e.length}function da(e,t){return t.push(e),e}function fa(e,t){return e.map(t).join(``)}function pa(e,t){return e.filter(function(e){return!oa(e,t)})}var ma=1,ha=1,ga=0,V=0,H=0,_a=``;function va(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ma,column:ha,length:o,return:``,siblings:s}}function ya(e,t){return ra(va(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function ba(e){for(;e.root;)e=ya(e.root,{children:[e]});da(e,e.siblings)}function xa(){return H}function Sa(){return H=V>0?B(_a,--V):0,ha--,H===10&&(ha=1,ma--),H}function Ca(){return H=V<ga?B(_a,V++):0,ha++,H===10&&(ha=1,ma++),H}function wa(){return B(_a,V)}function Ta(){return V}function Ea(e,t){return ca(_a,e,t)}function Da(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oa(e){return ma=ha=1,ga=la(_a=e),V=0,[]}function ka(e){return _a=``,e}function Aa(e){return aa(Ea(V-1,Na(e===91?e+2:e===40?e+1:e)))}function ja(e){for(;(H=wa())&&H<33;)Ca();return Da(e)>2||Da(H)>3?``:` `}function Ma(e,t){for(;--t&&Ca()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return Ea(e,Ta()+(t<6&&wa()==32&&Ca()==32))}function Na(e){for(;Ca();)switch(H){case e:return V;case 34:case 39:e!==34&&e!==39&&Na(H);break;case 40:e===41&&Na(e);break;case 92:Ca()}return V}function Pa(e,t){for(;Ca()&&e+H!==57&&(e+H!==84||wa()!==47););return`/*`+Ea(t,V-1)+`*`+na(e===47?e:Ca())}function Fa(e){for(;!Da(wa());)Ca();return Ea(e,V)}function Ia(e){return ka(La(``,null,null,null,[``],e=Oa(e),0,[0],e))}function La(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Ca()){case 40:if(m!=108&&B(C,d-1)==58){sa(C+=z(Aa(v),`&`,`&\f`),`&\f`,ta(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Aa(v);break;case 9:case 10:case 13:case 32:C+=ja(m);break;case 92:C+=Ma(Ta()-1,7);continue;case 47:switch(wa()){case 42:case 47:da(za(Pa(Ca(),Ta()),t,n,c),c),(Da(m||1)==5||Da(wa()||1)==5)&&la(C)&&ca(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=la(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=z(C,/\f/g,``)),p>0&&(la(C)-d||h===0&&m===47)&&da(p>32?Ba(C+`;`,r,n,d-1,c):Ba(z(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(da(S=Ra(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)La(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(B(C,3)===110)break;case 108:if(B(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?La(e,S,S,r&&da(Ra(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):La(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+la(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Sa()==125)continue}switch(C+=na(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(la(C)-1)*_,_=1;break;case 64:wa()===45&&(C+=Aa(Ca())),f=wa(),u=d=la(y=C+=Fa(Ta())),v++;break;case 45:m===45&&la(C)==2&&(h=0)}}return a}function Ra(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=ua(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=ca(e,f+1,f=ta(g=o[h])),b=e;v<m;++v)(b=aa(g>0?p[v]+` `+y:z(y,/&\f/g,p[v])))&&(c[_++]=b);return va(e,t,n,i===0?Yi:s,c,l,u,d)}function za(e,t,n,r){return va(e,t,n,Ji,na(xa()),ca(e,2,-2),0,r)}function Ba(e,t,n,r,i){return va(e,t,n,Xi,ca(e,0,r),ca(e,r+1,-1),r,i)}function Va(e,t,n){switch(ia(e,t)){case 5103:return R+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return R+e+e;case 4855:return R+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return qi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+qi+e+L+e+e;case 5936:switch(B(e,t+11)){case 114:return R+e+L+z(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return R+e+L+z(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return R+e+L+z(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return R+e+L+e+e;case 6165:return R+e+L+`flex-`+e+e;case 5187:return R+e+z(e,/(\w+).+(:[^]+)/,R+`box-$1$2`+L+`flex-$1$2`)+e;case 5443:return R+e+L+`flex-item-`+z(e,/flex-|-self/g,``)+(oa(e,/flex-|baseline/)?``:L+`grid-row-`+z(e,/flex-|-self/g,``))+e;case 4675:return R+e+L+`flex-line-pack`+z(e,/align-content|flex-|-self/g,``)+e;case 5548:return R+e+L+z(e,`shrink`,`negative`)+e;case 5292:return R+e+L+z(e,`basis`,`preferred-size`)+e;case 6060:return R+`box-`+z(e,`-grow`,``)+R+e+L+z(e,`grow`,`positive`)+e;case 4554:return R+z(e,/([^-])(transform)/g,`$1`+R+`$2`)+e;case 6187:return z(z(z(e,/(zoom-|grab)/,R+`$1`),/(image-set)/,R+`$1`),e,``)+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,R+`box-pack:$3`+L+`flex-pack:$3`),/space-between/,`justify`)+R+e+e;case 4200:if(!oa(e,/flex-|baseline/))return L+`grid-column-align`+ca(e,t)+e;break;case 2592:case 3360:return L+z(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,oa(e.props,/grid-\w+-end/)})?~sa(e+(n=n[t].value),`span`,0)?e:L+z(e,`-start`,``)+e+L+`grid-row-span:`+(~sa(n,`span`,0)?oa(n,/\d+/):+oa(n,/\d+/)-oa(e,/\d+/))+`;`:L+z(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return oa(e.props,/grid-\w+-start/)})?e:L+z(z(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,R+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(la(e)-1-t>6)switch(B(e,t+1)){case 109:if(B(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,`$1`+R+`$2-$3$1`+qi+(B(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~sa(e,`stretch`,0)?Va(z(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return L+n+`:`+r+s+(i?L+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(B(e,t+6)===121)return z(e,`:`,`:`+R)+e;break;case 6444:switch(B(e,B(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+R+(B(e,14)===45?`inline-`:``)+`box$3$1`+R+`$2$3$1`+L+`$2box$3`)+e;case 100:return z(e,`:`,`:`+L)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,`scroll-`,`scroll-snap-`)+e}return e}function Ha(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ua(e,t,n,r){switch(e.type){case ea:if(e.children.length)break;case Zi:case Qi:case Xi:return e.return=e.return||e.value;case Ji:return``;case $i:return e.return=e.value+`{`+Ha(e.children,r)+`}`;case Yi:if(!la(e.value=e.props.join(`,`)))return``}return la(n=Ha(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Wa(e){var t=ua(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ga(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ka(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Xi:e.return=Va(e.value,e.length,n);return;case $i:return Ha([ya(e,{value:z(e.value,`@`,`@`+R)})],r);case Yi:if(e.length)return fa(n=e.props,function(t){switch(oa(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:ba(ya(e,{props:[z(t,/:(read-\w+)/,`:`+qi+`$1`)]})),ba(ya(e,{props:[t]})),ra(e,{props:pa(n,r)});break;case`::placeholder`:ba(ya(e,{props:[z(t,/:(plac\w+)/,`:`+R+`input-$1`)]})),ba(ya(e,{props:[z(t,/:(plac\w+)/,`:`+qi+`$1`)]})),ba(ya(e,{props:[z(t,/:(plac\w+)/,L+`input-$1`)]})),ba(ya(e,{props:[t]})),ra(e,{props:pa(n,r)})}return``})}}function qa(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Ja=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Ya=`active`,Xa=`data-styled-version`,Za=`6.6.0`,Qa=`/*!sc*/
`,$a=typeof window<`u`&&typeof document<`u`;if(!Wt.createContext)throw qa(19);function eo(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var to=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:eo(`REACT_APP_SC_DISABLE_SPEEDY`)??eo(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),no=`sc-keyframes-`,ro=new Map,io=new Map,ao=1,oo=e=>{if(ro.has(e))return ro.get(e);for(;io.has(ao);)ao++;let t=ao++;return ro.set(e,t),io.set(t,e),t},so=e=>io.get(e),co=(e,t)=>{ao=t+1,ro.set(e,t),io.set(t,e)},lo=Object.freeze([]),uo=Object.freeze({});function fo(e,t,n=uo){return e.theme!==n.theme&&e.theme||t||n.theme}var po=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mo=/(^-|-$)/g;function ho(e){return e.replace(po,`-`).replace(mo,``)}var go=/(a)(d)/gi,_o=e=>String.fromCharCode(e+(e>25?39:97));function vo(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=_o(t%52)+n;return(_o(t%52)+n).replace(go,`$1-$2`)}var yo=5381,bo=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},xo=e=>bo(yo,e);function So(e){return vo(xo(e)>>>0)}function Co(e){return e.displayName||e.name||`Component`}function wo(e){return typeof e==`string`&&!0}function To(e){return wo(e)?`styled.${e}`:`Styled(${Co(e)})`}var Eo=Symbol.for(`react.memo`),Do=Symbol.for(`react.forward_ref`),Oo={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ko={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ao={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jo={[Do]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Eo]:Ao};function Mo(e){return(`type`in(t=e)&&t.type.$$typeof)===Eo?Ao:`$$typeof`in e?jo[e.$$typeof]:Oo;var t}var No=Object.defineProperty,Po=Object.getOwnPropertyNames,Fo=Object.getOwnPropertySymbols,Io=Object.getOwnPropertyDescriptor,Lo=Object.getPrototypeOf,Ro=Object.prototype;function zo(e,t,n){if(typeof t!=`string`){let r=Lo(t);r&&r!==Ro&&zo(e,r,n);let i=Po(t).concat(Fo(t)),a=Mo(e),o=Mo(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in ko||n&&n[s]||o&&s in o||a&&s in a)){let n=Io(t,s);try{No(e,s,n)}catch{}}}}return e}function Bo(e){return typeof e==`function`}var Vo=Symbol.for(`react.forward_ref`);function Ho(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Vo&&`styledComponentId`in e}function Uo(e,t){return e&&t?e+` `+t:e||t||``}function Wo(e,t){return e.join(t||``)}function Go(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Ko(e,t,n=!1){if(!n&&!Go(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Ko(e[n],t[n]);else if(Go(t))for(let n in t)e[n]=Ko(e[n],t[n]);return e}function qo(e,t){Object.defineProperty(e,"toString",{value:t})}var Jo=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw qa(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Qa;return t}},Yo=`style[${Ja}][${Xa}="${Za}"]`,Xo=RegExp(`^${Ja}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Zo=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Qo=e=>{if(!e)return document;if(Zo(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Zo(t))return t}return document},$o=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},es=(e,t)=>{let n=(t.textContent??``).split(Qa),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Xo);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(co(n,t),$o(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},ts=e=>{let t=Qo(e.options.target).querySelectorAll(Yo);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Ja)!==Ya&&(es(e,r),r.parentNode&&r.parentNode.removeChild(r))}},ns=!1;function rs(){if(!1!==ns)return ns;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return ns=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return ns=t.getAttribute(`content`)||void 0}return ns=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var is=(e,t)=>{if(typeof document>`u`)throw qa(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Ja}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Ja,Ya),i.setAttribute(Xa,Za);let s=t||rs();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},as=class{constructor(e,t){this.element=is(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw qa(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},os=class{constructor(e,t){this.element=is(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},ss=$a,cs={isServer:!$a,useCSSOMInjection:!to},ls=class e{static registerId(e){return oo(e)}constructor(e=uo,t={},n){this.options=Object.assign(Object.assign({},cs),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&$a&&ss&&(ss=!1,ts(this)),qo(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=so(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Ja+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&$a&&ts(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&$a&&t.target!==this.options.target&&Qo(this.options.target)!==Qo(t.target)&&ts(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new as(t,n):new os(t,n))(this.options),new Jo(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){oo(e),e.startsWith(no)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(oo(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(oo(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},us=new WeakSet,ds={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fs(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in ds||e.startsWith(`--`)?String(t).trim():t+`px`}var ps=47;function ms(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var hs=Symbol.for(`sc-keyframes`);function gs(e){return typeof e==`object`&&!!e&&hs in e}function _s(e){return Bo(e)&&!(e.prototype&&e.prototype.isReactComponent)}var vs=e=>e==null||!1===e||e===``,ys=Symbol.for(`react.client.reference`);function bs(e){return e.$$typeof===ys}function xs(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!vs(r)&&(Array.isArray(r)&&us.has(r)||Bo(r)?t.push(ms(n)+`:`,r,`;`):Go(r)?(t.push(n+` {`),xs(r,t),t.push(`}`)):t.push(ms(n)+`: `+fs(n,r)+`;`))}}function Ss(e,t,n,r,i=[]){if(vs(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return bs(e)?i:_s(e)&&t?Ss(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)Ss(e[a],t,n,r,i);return i}return Ho(e)?(i.push(`.${e.styledComponentId}`),i):gs(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):bs(e)?i:Go(e)&&e.toString===Object.prototype.toString?(xs(e,i),i):(i.push(e.toString()),i)}var Cs=xo(Za),ws=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=bo(Cs,t),this.baseStyle=n,ls.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(_s(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Wo(Ss(r,e,t,n)))}else i+=Wo(Ss(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=vo(bo(bo(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Uo(r,a)}}return r}},Ts=/&/g;function Es(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Ds(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==ps||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===ps&&(o=!1,c++);else if(l!==34&&l!==39||Es(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Os(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Os(a.children,t)}return e}function ks({options:e=uo,plugins:t=lo}=uo){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Ts,r).replace(i,a))}),e.prefix&&o.push(Ka),o.push(Ua);let s=[],c=Wa(o.concat(Ga(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Ds(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Es(e,o)){if(s===0){if(t===ps&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==ps);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===ps)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===ps&&o+1<r&&e.charCodeAt(o+1)===ps){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Ds(i)):l===0?e:Ds(e)}(t),d=Ia(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Os(d,e.namespace)),s=[],Ha(d,c),s},u=e,d=yo;for(let e=0;e<t.length;e++)t[e].name||qa(15),d=bo(d,t[e].name);return u!=null&&u.namespace&&(d=bo(d,u.namespace)),u!=null&&u.prefix&&(d=bo(d,`p`)),l.hash=d===yo?``:d.toString(),l}var As=new ls,js=ks(),Ms=Wt.createContext({shouldForwardProp:void 0,styleSheet:As,stylis:js,stylisPlugins:void 0});Ms.Consumer;function Ns(){return Wt.useContext(Ms)}var Ps=Wt.createContext(void 0);Ps.Consumer;var Fs={};function Is(e,t){let n=typeof e==`string`?ho(e):`sc`;Fs[n]=(Fs[n]||0)+1;let r=n+`-`+So(Za+n+Fs[n]);return t?t+`-`+r:r}function Ls(e,t,n){let r=Ho(e),i=e,a=!wo(e),{attrs:o=lo,componentId:s=Is(t.displayName,t.parentComponentId),displayName:c=To(e)}=t,l=t.displayName&&t.componentId?ho(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new ws(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=Wt.useContext(Ps),u=Ns(),d=e.shouldForwardProp||u.shouldForwardProp,f=fo(t,l,a)||uo,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Bo(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Uo(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Uo(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,_=wo(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,_,m),b=Uo(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[_&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),v(g,y)}(m,e,t)}p.displayName=c;let m=Wt.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Uo(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Ko(e,n,!0);return e}({},i.defaultProps,e):e}}),qo(m,()=>`.${m.styledComponentId}`),a&&zo(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Rs=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function zs(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Bs=e=>(us.add(e),e);function U(e,...t){if(Bo(e)||Go(e))return Bs(Ss(zs(lo,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Ss(n):Bs(Ss(zs(n,t)))}function Vs(e,t,n=uo){if(!t)throw qa(1,t);let r=(r,...i)=>e(t,n,U(r,...i));return r.attrs=r=>Vs(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Vs(e,t,Object.assign(Object.assign({},n),r)),r}var Hs=e=>Vs(Ls,e),W=Hs;Rs.forEach(e=>{W[e]=Hs(e)});var Us,Ws=class{constructor(e,t){this[Us]=!0,this.inject=(e,t=js)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=no+e,this.rules=t,oo(this.id),qo(this,()=>{throw qa(12,String(this.name))})}getName(e=js){return e.hash?this.name+vo(e.hash>>>0):this.name}};function Gs(e,...t){let n=Wo(U(e,...t));return new Ws(So(n),n)}Us=hs,`${Ja}`,`${Ja}`,`${Ja}`;var Ks=`/assets/future-ready-B7OYPyUe.webp`,qs=`data:image/webp;base64,UklGRtwOAABXRUJQVlA4WAoAAAAgAAAAUwEAUwEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg7gwAAFBUAJ0BKlQBVAE+SSSLRaKiCYTIFAJCWVu4XYBDNV/6H8ivF0wv238mfyM6w/kzv58q92x8LyN/e/uG+Z/9a/2vsV+5D3A/1H/3X9T/uXYb8wH9A/vX/d/w/vZ/hn71/QA/n/9o///Yj/t57AH7demX+2fww/uT+0ftM///WV/P3+R7Tf8jynSRn7Dfsf6fxO8AL8W/l/+S/LHiDwAfV/+2/Z56R2qbej8V5QA/l/7pemD/1/4XzrfmP+K/9P+O+Ar+c/13/m+tB6/P2+9ib90xB7nTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6GUaU7pnU34cdTLTHXG0psx/zEX+RkVVEf5NTooOgUeaVHMNhmpAnI+DZW1Eml2IZ5PBUrShVDXB5rARCwTYIFRRHnXr2C1eHTrSfLxKbGRyrqhErm3giOlNMwiHZDx7M9AIhKykpqRZtRO4AFEUdaeXx4R+6uhFWgZumsV191RmfhQ9xQcGq0/WxyUDU06VsQi3kdCFW3GB5Z1TyUJ/ACiBOM8DTODKRUyRAhXIDxhqIu1F6mRMHbXdMVLnnLKByjzhkzvfeO9hPduuv0FuNe/zgNG5uBpFEtnGilIlKGZV/HD4w6tgpdcZdSplWjvPF2E6zRh6/kSU4q4UfyYNmBMBQVuVExqJ712lrD+kGwkb7JwIryO6VQ/ZqVwH4aohOrMRlEtlH5UdHl6Iu/ld9T7Ju3j/o1mxbnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc1gAP7/tMvx5J1tzjHTsqxWukAAAAAAAAAAAAFS5lbMxmd51DBJhPNhAIhhIGP/PXa5HxrvXVLcv1G4cTCweQQJYVLJdWS18N60bUvkFsk8gFjEjcXotPLMVNZw7ZB/INEx//gwW+as+craHnVpfsnp4ns/1j/3Q9FF13Xf9eRa0MWCRSaMBPeQ/fKH/9Mc3bjfAlVQOIbiN/ARInqBg42uZn8bwNXwF6ACXa0KMkkp9pzbQC6ZXW0T8xSadMtG3eG17uvSMvmK+I/KbaR1e3zFX88T+Ro00EJP7Y5zerbc0p6bcEsr5DoDtE/yNspF12yQ6SipJ81Y9gIufyLUyR2WrRBDj8GsTqGJ0IEugICXpqdzMzQUqrtB0eTQoNw7onZTP4DdiGyj3qyUpWZXc2WcA2s5mvTiiPOC37/grvGTcm54umvO/Ve9dcaQgwFSwRvMnQy2p3Fhrfzljyhflh6betecgR5mhgI33ysQqOfA/0vyNN+e5W52qMl3TB4ahXJy4Evq7hYTB4j8szc0tHcuJnOZ2bwut4s7Y/4DO8rOMEBk79Ya65Pzd1/mwNUeYyvhMBbe/2vxpgv+TfEJOYhSajBBJ4y834oYzCggVxgt81Z85Ws5JzX3kjdobfxgzbcswiCPp4NW3OyNvWMwPhZsp4cygJng2dwWsBwy+WEpzu2YqwyHrM/h8rZ1aoclKKgu/6z4PQBPhVAa0r4punE/+i1KbVguM0R3GxrACxEugQaCpTmfmBdKosMnz5vSAMMPnNM2F1NNoGm+of/dB2Jf9RFaDBwLpjGolMGIuecVBz3ehIycz6B8p77VPTBZ1D8tvpBV6KthsSxh00BkOlMlynmQaW47DdNGtxW+so3OL+xQlWrQRpIoAMnaYd19d3oiSwjAE0tGiNELJcm+bQ1optOcEio7aPkbZQXNAjYTwF0pgxw6w8hmX/vVFRnOmp1I6/hTeypLwAClquwQExdVgkR6mixs6Q1SOtmzJw+MRxF8+tG3bbcFJiotTZwjaCDhwQRuPBta/gUH0tmP5s9dBPB4urVrTt8t7yo4cfE+bqqlnKB7Ab9wmr6iKaTeFewBKiBnBfWUbm9/I+qlt/mlRIgtxmzwFrnyvuDvG/aShBnWBxPzID8OR865m5jXkR1BwGVT4ADrKIp9XqHwxWM6oCz3j3lYWJhjZUiO0YvMXeHIDcvyfaoNP0RDAQ0Dhe/nw00R96aibA1xiJcV0vduwwNgLWQkirtSSfT34t0OhtTqteymVFjNpL4aY8Fl3JAzwzXf/juXmMuPdt0bPsyY8J8Hyb962fieyXk4dvDeW4zQOGLGzL4PV5nYCEhmD5zFN/yvDAvXE3to9Zwf14PUEr8fM8eybw8aKuG3iYVvDYxBYA6owvlKjpWy4AXwjrjxTsghyVdOiSR3hzJfP9FzowXHdrU3+v7oplALa9uPx/yBu82P6OLqW9jY/4LdofaFDgwT3uZzKtE2WxDWZH0wdyq2SluSwdRUs6tT35q6nsRjF2P4x+mMhKIxXSiQI2oqGJkpLOF3+r/B33sgi0wyZlWLD+k+qfoWgQwJaQ7askcNLQfpwY/+ppCFbwecTfF0lgr+51PNWoeYKkbBOT4ct68pV7FNzxHSs0Uo2Ne1517ivZVSw8iNibFAd5tsix/SXOHWVsCCooy9lO1u/sOKarc7aB3pQSHBoLvRrX55wxI5zwl3nKeAwIfuCoAkmGx/CoSbbPE3Nqjh+T2xstYOKAXagz3J+GNcJ4OqshCVi1hxPuE4hD5dZUkmYrB5JEfmJcAMW7z/MiA/lzSEk9l8Xi/4GDmF3zgN6gZsx/WY4rv4VQMNXkzJSa5L8iRp+jghna59uJudFmziBMhmVVXIyRf6A3UQRdGUE1dH/+ddYxsf8UxCABpD2ww8FxHH+38UE38GhSsIKSHiFhfh9+bR8fbJA80neFQvsmMk3VI+t3UtRTESKdhkONAfGH4crKQnCs9g+1l2D/QSpqSf/qEVM/gG7QAWeVICmXdeHt+DDnX/l25pITb4e/jTVD+EvVKuF1InL42GogO+PW+X75IlXAmZ7s6EzyMWLRS5030Hnvh5BSN4eWs5S0GNSl3U5oJjysNC15roSpDLuNxqWUq11+IiyfMFAdHeKN/Ga/mIScpsdCgIe4CoW//uv/5NtBwAeMJoE3S/ElRR7QoNBn6xUZeJAO3rvLjkTFy0XirpoU7ZkUEI1xYMa14fUvZKZ79qpbkaCF3oDH4nmgp+zkZPxBl9UURbGFt55/UGYKcW9GepAYFp4h9zAMQD5iPVvlW68fdxb36kmqBD6hAh5xSQuttPJlaxBTFZojzmgmpAWSorJmFQdlOSrDIkfo8DcUZUxjydfqevorzZnTdQOam3VbXCkPoXWUpSyqC6Nr6GrhOWwlM8Dz0utNnOi2VVQsdV2/YPg2kG6IklYymmKzHY7jQmGP4pcu81JvcdlJiGbFU+kLPOf40+dAS45NrH6VyDa+aaRo4VYmHOeFsGhFdL3MFH+YrsKr4ZNYLFCSHbqJQqCVhkog9j9sNYGxKgLx/YUvowsucPmXFMAgb/IxhTgr7+94czHVfjwepY4GzLV8wjr6JxTCY+9yhsFOpKkVGd15e4dnEhngu72l73TEj5lc+z9lnp3mWCZPh4kYIifOXFZwo6H8iEnSzZCLBivfy+KxXHB1qRKwerlRr/vNN9tE4omKIcgfQDAAVCLMC95/yNyCjwRUuFkAGNxzUzc0H3eE/GMKrsPFa7aXUOii+yE+AaTZNx2Bm0jEHDx12+kRi5C5sXP99UohAKqy4fFaDE2OZiZ1hamKUcL0J9WPNIlG9LqnAB6RAiHwKAFQq8h5pO8BPq4QT0232uYDPabG/URUu65EM2oV2iU7AxT72AgCXI1e1MIa+u2XX2r6ON7b3cBEV/9ERgtzlu/M7MZNJlddhjVTXovP8qMY5DNzBBrYas9RNlFrAtJAfylc3bWn7+H/IurOpb7foKwKTYoioHmlmdwFptFz+rQONyxbCQwf0kleXUqRQKuX1PfStZj9EFCZqspCv/nSjsZhiSNb58kTmnSAlJBAiVtJ4tfeVUc+86WYjFA9Oh4JrQ8sVdMPw2jZhmef+dbIJyw9Lv1mTgpwcW0EF5Ykwv8Mwn7kG2sNBb5pIQ+6E+V603Zp3xXj1zMzXZVQciv/PF583IYIeYRFWen/FJtNB2OylmCVqAoHMLs7aAttWTd4kuu6A/S7We7nIIFULFHR2HLYshRWQCnHvDAIz1f5R50+DOZ4SbDOKeUok/3BOl6xfTPstGtFOAeHoSUxiKhDZp96Adkh758y+eyfGCgM+EUWzcn4L62S0pL/bHYB3QnLUCoILbzb27IYNGOI4547hjDcKyRTbIbBlI729PpdPTXFUlCLrGm+VvyiXatdiiDAh8sk3IKEp/bLgjlHzUiR2AkyKN4FR7f/Irq6hmfkGTzhl5fYAAR9sAAAAAAAAAAAAAAAAAAAAAAAA=`,Js=`/assets/sintef-DJRKX1hq.webp`,Ys=`/assets/uio-DitADJZI.webp`,Xs=`/assets/minnumst-BHZqdQx6.webp`,Zs=`/assets/recipify-gucAPnOv.webp`,G={name:`Steinn Hauser Magnússon`,location:`Berlin, DE`,email:`hausersteinn@gmail.com`,phone:`+49 179 6047 257`,headline:`Cloud Operator @ SENEC · Berlin`,greeting:`I'm Steinn`,cvUrl:`/cv/Steinn-Hauser-Magnusson-CV.pdf`,welcome:[`a cloud operator and software engineer based in Berlin. At SENEC I run large-scale Kubernetes platforms and build the infrastructure as code, GitOps delivery and automation that keep them secure, observable and up to date.`,`My background is in computational physics and data science: an MSc from the University of Oslo, peer-reviewed research in computational neuroscience, and production machine-learning work. In my own time I build open-source projects end to end, like [Minnumst](/projects/minnumst) and [recipify](/projects/recipify). I work in four languages: English, Icelandic, Norwegian and German.`],about:[`I'm a physicist turned platform engineer. My path started in computational neuroscience, where I modelled brain signals at the University of Oslo. From there I moved into data science and NLP, then into building Azure microservices, and now I work in cloud operations at SENEC.`,`Day to day that means Kubernetes clusters managed with Terragrunt, Helm and ArgoCD, GitLab CI/CD pipelines, and observability with Prometheus, Grafana and Alertmanager. I like systems that are secure by default, reproducible, and boring to run.`,`I enjoy building architectures from scratch and joining projects early, while there is still room to shape them: map the problem, research the options, prove the idea, then build it properly. I care about modular, reusable infrastructure code, strict access policies and secure networking, and about changes that are reviewed and promoted through environments before they reach production.`,`I have led and worked closely with UX and design, frontend and backend teams, and I enjoy onboarding and training new team members.`,`Outside work I build open-source projects end to end, such as Minnumst, a self-hosted family history archive, from the app down to the hardened host it runs on, and recipify, a pipeline that turns a kitchen's archive of recipe files into verified, searchable recipes.`]},Qs=[{label:`GitHub`,href:`https://github.com/steinnhauser/`,icon:`github`},{label:`LinkedIn`,href:`https://linkedin.com/in/steinnhauser/`,icon:`linkedin`},{label:`Stack Overflow`,href:`https://stackoverflow.com/users/13819183/steinn-hauser-magnusson/`,icon:`stackoverflow`}],$s=[{slug:`senec-cloud-operator`,tileTitle:`Cloud Operator`,company:`SENEC GmbH`,logo:qs,summary:`Runs large-scale Kubernetes clusters and 50+ Ansible-managed servers, with GitOps delivery and automated, mTLS-secured maintenance.`,curves:6,positions:[{title:`Cloud Operator`,period:`February 2026 - Present`,bullets:[`Management of multiple large-scale Kubernetes clusters using Terragrunt, GitLab CI/CD, Helm templating with 10+ custom charts, and ArgoCD, integrated with monitoring systems such as Grafana, Prometheus, and Alertmanager.`,`Operation of 50+ Ansible-managed servers, including in-depth development of a secure pipeline for automated maintenance updates on WireGuard-connected hosts, with a strong focus on strict access policies and secure networking.`,`Oversight and development of an automated server update and maintenance system featuring custom aptly-based repository mirrors, an API gateway for scheduling host update maintenance slots, dashboards for host package lists and update overviews, and a lightweight Go-based client for automated and mTLS-secured maintenance checks.`]}],tags:[`Kubernetes`,`Terragrunt`,`Helm`,`ArgoCD`,`GitLab CI/CD`,`Prometheus`,`Grafana`,`Alertmanager`,`Ansible`,`WireGuard`,`Go`,`mTLS`]},{slug:`senec-software-developer`,tileTitle:`Software Developer`,company:`SENEC GmbH`,logo:qs,summary:`Oversaw Azure Function App microservices integrating CRM and Business Central, built with Terraform, Terragrunt and modern CI/CD.`,curves:2,positions:[{title:`Software Developer`,period:`March 2023 - January 2026`,bullets:[`Oversaw development, maintenance, and migration of multiple Azure Function App microservices integrating enterprise solutions (CRM, Business Central) with internal and external services.`,`Focused on architectural design and implementation using Terraform and Terragrunt, delivering modularized releases and modern CI/CD pipelines.`,`Contributed significantly to developing a containerized deployment framework for microservices, enforcing strict governance-compliant policies across Azure Key Vault, Storage Account, MongoDB/PostgreSQL, Virtual Network, API Management Service, and Service Bus resources.`,`Demonstrated leadership and communication through team management, stakeholder coordination, and development of frameworks for onboarding and training new team members.`]}],tags:[`Azure Functions`,`Terraform`,`Terragrunt`,`Docker`,`CI/CD`,`Azure Key Vault`,`API Management`,`Service Bus`,`PostgreSQL`,`MongoDB`]},{slug:`future-ready-senior-data-scientist`,tileTitle:`Senior Data Scientist`,company:`Future Ready AS`,logo:Ks,summary:`Built an LLM chatbot platform that simulates call-centre conversations on Django, Flask and Azure, and managed its frontend and UX teams.`,curves:5,positions:[{title:`Senior Data Scientist`,period:`January 2022 - February 2023`,bullets:[`Developed and maintained an application for LLM chatbot technology, providing an online learning platform to simulate call-center conversations using Django, Flask APIs, and an Azure-based architecture.`,`Managed frontend and UX developer teams to design and build an interactive online learning platform.`,`Leadership and communication experience through management meetings with external shareholders and investors, alongside training and management of new team members.`]}],tags:[`LLMs`,`Django`,`Flask`,`Azure`,`Python`,`Docker`,`MongoDB`]},{slug:`future-ready-data-scientist`,tileTitle:`Data Scientist`,company:`Future Ready AS`,logo:Ks,summary:`Sales analytics of telecom data, and a natural language processing model that transcribes calls and captures the sales techniques that lead to sales.`,curves:3,positions:[{title:`Data Scientist`,period:`November 2020 - December 2021`,bullets:[`Provided sales analytics of telecommunications data to identify strengths in sales representatives.`,`Developed a natural language processing model capable of transcribing calls and capturing key sales techniques which lead to product sales.`,`Extensive use of Python libraries such as Rasa, NumPy, pandas, Django, and PySpark.`]}],tags:[`Python`,`NLP`,`Rasa`,`pandas`,`NumPy`,`PySpark`,`Django`]},{slug:`sintef`,tileTitle:`Junior Software Developer`,company:`SINTEF Energi AS`,logo:Js,summary:`A graphical interface for the IEC 61850 digital substation protocol, in C and Python.`,curves:7,positions:[{title:`Junior Software Developer`,period:`June 2020 - August 2020`,bullets:[`Developed a graphical user interface for the IEC 61850 digital substation communication protocol.`,`Extensive use of C (libIEC61850) and Python (PyQt, ZeroMQ), with a focus on high-performance data pipelines, data processing and data visualization.`]}],tags:[`C`,`libIEC61850`,`Python`,`PyQt`,`ZeroMQ`]},{slug:`uio`,tileTitle:`Cluster Project Manager`,company:`University of Oslo, Physics Department`,shortCompany:`University of Oslo`,logo:Ys,summary:`Built a rack of compute nodes for the physics department from donated Abel supercomputer hardware, at no additional cost.`,curves:8,positions:[{title:`Cluster Project Manager`,period:`February 2020 - July 2020`,bullets:[`Built a rack of computational nodes for the physics department using hardware donated from the Abel supercomputer.`,`Set up cluster software and node connectivity using the ROCKS High-Performance Computing ISO.`,`Collaborated with members of USIT to assemble the cabinet from unused supercomputing parts, resulting in no additional costs.`]}],tags:[`HPC`,`ROCKS`,`Linux`,`Networking`]}],ec=e=>e.split(`:`)[0],tc=[{title:`Automated server maintenance platform`,context:`SENEC · Cloud Operator · 2026`,summary:`A secure pipeline for automated maintenance updates across 50+ Ansible-managed, WireGuard-connected servers, built with strict access policies and secure networking. Hosts run a lightweight Go client for mTLS-secured maintenance checks, an API gateway schedules each host's maintenance slot, custom aptly-based repository mirrors serve the packages, and dashboards give an overview of host package lists and updates.`,flow:[{label:`Go client`,detail:`mTLS maintenance checks`},{label:`API gateway`,detail:`schedules maintenance slots`},{label:`aptly mirrors`,detail:`custom package repositories`},{label:`Dashboards`,detail:`package lists and update overview`}],tags:[`Go`,`mTLS`,`Ansible`,`WireGuard`,`aptly`,`Linux`],featured:!0,role:`senec-cloud-operator`},{title:`Minnumst: a self-hosted family history archive`,context:`Open source · Personal project`,summary:`A public archive, an editorial desk and an API that keeps every story revision, built end to end from the app to the hardened host it runs on. OpenTofu creates the Hetzner host, Ansible hardens it to the CIS benchmarks (scored with Lynis in CI), and Traefik with Authentik is the only way in. Releases are multi-arch images with an SBOM and build provenance.`,flow:[{label:`OpenTofu`,detail:`Hetzner host, firewall, encrypted state`},{label:`Ansible`,detail:`CIS-hardened host, scored with Lynis`},{label:`Traefik + Authentik`,detail:`TLS edge, auth on every write`},{label:`The app`,detail:`FastAPI, React and PostgreSQL`}],tags:[`OpenTofu`,`Ansible`,`Docker Compose`,`Traefik`,`Authentik`,`FastAPI`,`React`,`PostgreSQL`],links:[{label:`Code on GitHub`,href:`https://github.com/steinnhauser/minnumst`}],featured:!0,personal:!0,image:{src:Xs,width:720,height:634,alt:`Minnumst's public archive in dark mode: a name search beside a photo of Grafarkirkja, a turf church in Höfðaströnd`},page:{slug:`minnumst`,curves:3,intro:`Minnumst (Icelandic: "let us remember") is a shared written history of our ancestors: a public archive for reading stories, an editorial desk for writing them, and an API that keeps every story revision. I built it end to end, from the app to the hardened host it runs on, so that the only thing reachable from the internet is a TLS-terminating proxy and every write is authenticated before it reaches the application.`,figures:[{value:`57 → 75`,label:`Lynis hardening index, scored in CI`},{value:`254 → 0`,label:`Trivy findings, API image moved to Alpine`},{value:`1`,label:`public entry point: Traefik`}],sections:[{title:`Network and access`,points:[`Only Traefik publishes ports. HTTP redirects to HTTPS with Let's Encrypt certificates and HSTS, and the API is rate-limited.`,`Authentik forward-auth, with TOTP MFA, guards the whole editorial desk and every write to the API; reads stay public and there is no in-app login to attack.`,`PostgreSQL sits alone with the API on an internal network with no route in or out. Traefik discovers services through a socket proxy that only lists containers.`]},{title:`Host, provisioned as code`,points:[`OpenTofu creates the Hetzner server, firewall and data volume, with state encrypted before it leaves the operator's machine.`,`Ansible hardens Ubuntu 24.04 to the CIS benchmark (Level 1, selected Level 2), with every setting citing its CIS section and NIST control: LUKS-encrypted data, unattended updates, key-only SSH, a default-deny nftables firewall and auditd.`,`Nightly database backups are encrypted with age to a key that never touches the server, and CI restores one into a fresh database on every change.`]},{title:`Containers and supply chain`,points:[`Every container runs as non-root, with a read-only root filesystem, no Linux capabilities and no-new-privileges, on Alpine images pinned by digest.`,`Dependencies are locked, every GitHub Action is pinned to a commit SHA, and CodeQL, Trivy and zizmor scan the code, images and workflow on every change.`,`Releases are multi-arch images published with build provenance and an SBOM.`]},{title:`Verified, not just configured`,points:[`A CI job applies the host hardening to a real Ubuntu 24.04 VM, requires a second run to change nothing, and reports the Lynis index before and after.`,`An end-to-end job runs the production Compose stack and checks the edge from outside: redirect, HSTS and CSP, refused unauthenticated writes, the rate limit and network isolation.`,`Playwright browser tests of both frontends fail on any Content Security Policy violation.`]}]}},{title:`recipify: a verified document pipeline`,context:`Open source · Personal project`,summary:`Turns about 1,900 mixed recipe files (Word, PDF, spreadsheets, scans) into 524 recipes, each checked word for word against its source and traceable back to it. 100% test coverage, with a live demo built by CI.`,flow:[{label:`Inventory`,detail:`hash, classify and triage each file`},{label:`Extract`,detail:`poppler, python-docx, LibreOffice`},{label:`Structure`,detail:`deterministic rules, no rewriting`},{label:`Assess`,detail:`word-for-word check against the source`},{label:`Viewer`,detail:`one offline HTML file`}],tags:[`Python`,`pytest`,`poppler`,`python-docx`,`GitHub Actions`],links:[{label:`Live demo`,href:`https://steinnhm.com/recipify/demo/`},{label:`Code on GitHub`,href:`https://github.com/steinnhauser/recipify`}],featured:!0,personal:!0,image:{src:Zs,width:880,height:522,alt:`The recipify viewer: a recipe scaled to 2x with one ingredient ticked off`},page:{slug:`recipify`,curves:6,intro:`recipify started from a real archive: about 1,900 files collected over many years by a professional kitchen, mostly in Icelandic. Word documents, PDFs laid out in two or three columns, scanned notebooks, photos, spreadsheets and many copies of the same files. It turns them into verified, structured recipes, publishes them as one offline HTML file that chefs can cook from, and holds back everything it can't check, with the reason.`,figures:[{value:`1,916`,label:`source files in the real archive`},{value:`524`,label:`recipes verified and published`},{value:`100%`,label:`test coverage, enforced in CI`}],sections:[{title:`The pipeline`,points:[`Inventory hashes every file, classifies it by content rather than extension, merges identical copies and triages recipes from books and reference material.`,`Extraction runs locally and for free: poppler in content-stream order (cross-checked against its layout rendering), Word XML including text boxes, and spreadsheets block by block.`,`Documents holding several recipes are split only in clear cases, and every decision, split or not, is stored with its reason. Deterministic rules then structure each recipe into components, ingredients and steps.`]},{title:`Why it can be trusted`,points:[`Nothing is rewritten: the structurer only decides what each source line is, never changes the text.`,`Every published recipe is checked word for word against its source (recall and precision of 1.0), and two extractors must agree on reading order.`,`Hard cases are named, not hidden: the report lists every document that isn't ready, and why.`]},{title:`Cheap to re-run, easy to trace`,points:[`Every artifact is keyed by the source's SHA-256 and the engine version, so re-runs skip finished work, renamed files keep their results and earlier results are never overwritten.`,`recipify trace follows a published recipe back to the file it came from and re-checks every link on the way.`]},{title:`The viewer`,points:[`One HTML file with no external requests: it works offline, can be emailed, and stays readable without JavaScript.`,`Built for cooking: scale from ½× to 4×, tick off ingredients and steps, search that ignores accents, and filters with live counts.`,`recipify lock encrypts the page with AES-256-GCM for public hosting; the key travels in the link's #fragment, which browsers never send to the server.`]}]}},{title:`Cardiac artefact removal for MNE-Python`,context:`Max Planck Institute · Guest Developer · 2024-2025`,summary:`Helped develop, package and formalize a tool that removes cardiac artefacts from spinal electrophysiology data, contributed to the open-source MNE-Python library.`,tags:[`Python`,`MNE-Python`,`Signal processing`,`Open source`],links:[{label:`Pull request #13037`,href:`https://github.com/mne-tools/mne-python/pull/13037`}]},{title:`Predicting brain signals from neuronal networks`,context:`University of Oslo · MSc thesis & publication · 2021-2022`,summary:`Evaluated the kernel and hybrid approximation methods for computing local field potentials across a range of network conditions, simulating neuronal networks in Python with LFPy. Published in PLOS Computational Biology (2022).`,tags:[`Python`,`LFPy`,`Computational neuroscience`,`Simulation`],links:[{label:`Paper`,href:`https://doi.org/10.1371/journal.pcbi.1010353`},{label:`Thesis code`,href:`https://github.com/steinnhauser/msc-thesis-lfp`}]}];function nc(e){let t=e.positions.map(e=>e.period).join(` `),n=(t.match(/\d{4}/g)??[]).map(Number),r=/present/i.test(t)?`now`:String(Math.max(...n)),i=String(Math.min(...n));return i===r?i:`${i} - ${r}`}function rc(e){let[t,n=t]=e.split(/\s+-\s+/),r=e=>e.split(` `)[0].slice(0,3),i=e=>e.split(` `)[1];return/present/i.test(n)?`${r(t)} ${i(t)} – now`:i(t)===i(n)?`${r(t)} – ${r(n)} ${i(n)}`:`${r(t)} ${i(t)} – ${r(n)} ${i(n)}`}var ic=[{title:`Cloud & Infrastructure as Code`,skills:[`Azure`,`AWS`,`Terraform`,`Terragrunt`,`OpenTofu`,`Linux`]},{title:`Containers & GitOps`,skills:[`Kubernetes`,`Docker`,`Helm`,`ArgoCD`]},{title:`CI/CD & Automation`,skills:[`GitLab CI/CD`,`GitHub Actions`,`Ansible`,`Git`]},{title:`Observability`,skills:[`Prometheus`,`Grafana`,`Alertmanager`]},{title:`Networking & Security`,skills:[`WireGuard`,`mTLS`,`Azure Key Vault`,`API Management`]},{title:`Programming & Data`,skills:[`Python`,`Go`,`Bash`,`TypeScript`,`React`,`PostgreSQL`,`MongoDB`,`pandas`,`PySpark`]}],ac=[`Python`,`Terraform`,`Kubernetes`,`Docker`,`Linux`,`Azure`,`Git`,`AWS`],oc=[{code:`AZ-104`,title:`Azure Administrator Associate`,issuer:`Microsoft`,verifyUrl:`https://learn.microsoft.com/en-us/users/steinnhausermagnusson-8948/credentials/e226b60f8028a1af`},{code:`ITIL 4`,title:`ITIL 4 Foundation`,issuer:`PeopleCert · IT Service Management`}],sc=[{language:`English`,level:`Native`},{language:`Icelandic`,level:`Native`},{language:`Norwegian`,level:`Fluent`},{language:`German`,level:`Working proficiency`}],cc=[{value:`6+`,label:`years in cloud, software and data roles`,evidence:[`February 2020 - July 2020`]},{value:`50+`,label:`production servers operated with Ansible`,evidence:[`Operation of 50+ Ansible-managed servers`]},{value:`10+`,label:`custom Helm charts on large-scale Kubernetes`,evidence:[`multiple large-scale Kubernetes clusters`,`Helm templating with 10+ custom charts`]},{value:`AZ-104`,label:`Microsoft Certified: Azure Administrator Associate`,evidence:[`Azure Administrator Associate`,`AZ104`],link:{href:oc.find(e=>e.code===`AZ-104`).verifyUrl,label:`Verify the AZ-104 credential on Microsoft Learn`}},{value:`MSc`,label:`computational physics, Grade A, peer-reviewed paper`,evidence:[`Computational Science: Physics`,`Grade: A`,`Magnusson SH`],link:{href:`https://doi.org/10.1371/journal.pcbi.1010353`,label:`Read the paper in PLOS Computational Biology`}}],lc=[{period:`2022`,title:`Publication`,institution:`PLOS Computational Biology 18(8): e1010353`,details:[`Hagen E, Magnusson SH, et al. "Brain signal predictions from multi-scale networks using a linearized framework."`],link:{label:`doi.org/10.1371/journal.pcbi.1010353`,href:`https://doi.org/10.1371/journal.pcbi.1010353`}},{period:`August 2019 - June 2021`,title:`MSc. in Computational Science: Physics`,institution:`University of Oslo, Norway`,details:[`Thesis: 'Evaluating Approximate Methods for Computing Extracellular Potentials from Neuronal Networks'. Grade: A.`,`Specialization in computational neuroscience, simulating neuronal networks in Python with LFPy.`]},{period:`Spring Semester 2019`,title:`Theoretical Physics (exchange)`,institution:`McGill University, Montréal, Canada`,details:[]},{period:`August 2016 - June 2019`,title:`BSc. in Physics and Astronomy`,institution:`University of Oslo, Norway`,details:[`Specialization in mathematics, statistics and computer science.`,`4D Space Numerical Workshop, Kobe University: simulated ionospheric effects on the NORSAT-1 satellite.`,`CaNoRock XVI, Andøya: simulated rocket trajectories to estimate drag coefficient and landing site.`]}],uc=[{period:`September 2024 - January 2025`,title:`Guest Developer`,organization:`Max Planck Institute for Human Cognitive and Brain Sciences`,description:`Helped develop, package and formalize a tool for cardiac artefact removal in spinal electrophysiology data as part of the open-source MNE-Python library.`,link:{label:`mne-python pull request #13037`,href:`https://github.com/mne-tools/mne-python/pull/13037`}},{period:`January 2017 - June 2020`,title:`Mathematics Tutor`,organization:`ENT3R`,description:`Alongside my own university classes, I tutored students aged 16 to 18, helping them prepare for their final exams in advanced mathematics and the sciences.`}],dc=`https://steinnhm.com`,K={home:`/`,about:`/about`,section:e=>`/#${e}`,experience:e=>`/experience/${e}`,project:e=>`/projects/${e}`,notFound:`/404`},fc=tc.flatMap(e=>e.page?[{...e,page:e.page}]:[]);[K.home,...$s.map(e=>K.experience(e.slug)),...fc.map(e=>K.project(e.page.slug)),K.about];var pc={"/senec":K.experience(`senec-software-developer`),"/future-ready":K.experience(`future-ready-senior-data-scientist`),"/sintef":K.experience(`sintef`),"/uio":K.experience(`uio`),"/experience/future-ready":K.experience(`future-ready-senior-data-scientist`),"/index.html":K.home,"/about.html":K.about,"/projects.html":K.section(`work`),...Object.fromEntries(fc.map(e=>[`/project/${e.page.slug}`,K.project(e.page.slug)]))};function mc(e){if(!e.startsWith(`#/`))return null;let t=e.slice(1);return pc[t]??t}var hc=G.name,gc={title:hc,description:`Cloud operator and software engineer in Berlin: Kubernetes platforms, infrastructure as code and automation, open-source projects and a physics background.`,canonical:`${dc}/`};function _c(e,t=155){return e.length<=t?e:e.slice(0,e.lastIndexOf(` `,t-1)).replace(/[,;:]$/,``)+`…`}function vc(e){let t=e.replace(/\/+$/,``)||`/`;if(t===K.home)return gc;if(t===K.about)return{title:`About · ${hc}`,description:_c(G.about[0]),canonical:dc+t};let n=$s.find(e=>K.experience(e.slug)===t);if(n){let[e]=n.positions;return{title:`${n.tileTitle} at ${n.shortCompany??n.company} · ${hc}`,description:_c(`${e.title}, ${n.company} (${e.period}). ${n.summary}`),canonical:dc+t}}let r=fc.find(e=>K.project(e.page.slug)===t);return r?{title:`${ec(r.title)} · ${hc}`,description:_c(r.page.intro),canonical:dc+t}:{title:`Page not found · ${hc}`,description:gc.description}}function yc(){Fe(()=>{if(!window.matchMedia?.(`(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)`)?.matches)return;let e=[],t=0,n=null,r=e=>{for(let t of e)t.style.removeProperty(`--lx`),t.style.removeProperty(`--ly`)},i=()=>{if(t=0,!n)return;let{clientX:i,clientY:a,target:o}=n,s=[],c=o instanceof Element?o.closest(`[data-light]`):null;for(;c instanceof HTMLElement;)s.push(c),c=c.parentElement?.closest(`[data-light]`)??null;r(e.filter(e=>!s.includes(e)));for(let e of s){let t=e.getBoundingClientRect();e.style.setProperty(`--lx`,`${i-t.left}px`),e.style.setProperty(`--ly`,`${a-t.top}px`)}e=s},a=e=>{n=e,t||=requestAnimationFrame(i)},o=()=>{n=null,r(e),e=[]};return window.addEventListener(`pointermove`,a,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,o),()=>{cancelAnimationFrame(t),window.removeEventListener(`pointermove`,a),document.documentElement.removeEventListener(`pointerleave`,o),r(e)}},[])}var q={primary:`#131316`,secondary:`#3f5787`,tint:`#3f578733`,text:`#ffffff`,muted:`rgba(255, 255, 255, 0.7)`,accent:`#8fa8dc`,sun:`#f0b860`},J={peach:`#f2a46b`,rose:`#e0708f`,lavender:`#8f7ae6`,blue:`#4f6fb8`},Y={display:`"Space Grotesk Variable", "Inter Variable", system-ui, sans-serif`,body:`"Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif`,mono:`"JetBrains Mono Variable", ui-monospace, SFMono-Regular, Menlo, monospace`},X={mobile:`760px`},bc=`72px`,xc=`clamp(28px, 3.2vw, 56px)`,Sc=U`
  position: relative;
  margin-top: calc(-1 * ${xc});
  clip-path: polygon(0 0, 100% ${xc}, 100% 100%, 0 100%);
`,Cc=(e=420,t=.12)=>`radial-gradient(${e}px circle at var(--lx, -9999px) var(--ly, -9999px), rgba(255, 255, 255, ${t}), transparent 65%)`,wc=U`
  position: relative;
  background:
    ${Cc()},
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.035) 40%,
      rgba(255, 255, 255, 0.02) 65%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    rgba(19, 19, 22, 0.28);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border-radius: 16px;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    inset 0 -1px 0 rgba(255, 255, 255, 0.03);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background:
      ${Cc(260,.85)},
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.42),
        rgba(255, 255, 255, 0.1) 28%,
        rgba(255, 255, 255, 0.03) 55%,
        ${q.secondary}cc 80%,
        ${q.sun}80
      );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`,Tc=U`
  transition:
    translate 300ms ease,
    box-shadow 300ms ease;

  @media (hover: hover) {
    &:hover {
      translate: 0 -3px;
      box-shadow:
        0 18px 50px rgba(0, 0, 0, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
  }
`,Ec=0;Array.isArray;function Z(t,n,r,i,a,o){n||={};var s,c,l=n;if(`ref`in l&&typeof t!=`function`)for(c in l={},n)c==`ref`?s=n[c]:l[c]=n[c];var u={type:t,props:l,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ec,__i:-1,__u:0};return(a||o)&&(u.__source=a,u.__self=o),e.vnode&&e.vnode(u),u}function Dc({d:e,title:t}){return Z(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`,width:`100%`,height:`100%`,role:`img`,"aria-label":t,children:Z(`path`,{fill:`currentColor`,stroke:`currentColor`,strokeWidth:`0.1`,d:e})})}var Oc=()=>Z(Dc,{title:`GitHub`,d:`M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z`}),kc=()=>Z(Dc,{title:`LinkedIn`,d:`M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z`}),Ac=()=>Z(Dc,{title:`Stack Overflow`,d:`M 9.914063 0.71875 L 9.085938 1.28125 L 11.894531 5.367188 L 12.71875 4.800781 Z M 7.695313 2.453125 L 7.039063 3.207031 L 10.917969 6.582031 L 11.574219 5.828125 Z M 6.226563 4.804688 L 5.773438 5.695313 L 10.210938 7.953125 L 10.664063 7.0625 Z M 5.363281 7.140625 L 5.136719 8.109375 L 9.976563 9.242188 L 10.203125 8.265625 Z M 3 9 L 3 14 L 12 14 L 12 9 L 11 9 L 11 13 L 4 13 L 4 9 Z M 5.03125 9.25 L 4.96875 10.25 L 9.972656 10.566406 L 10.035156 9.570313 Z M 5 11 L 5 12 L 10 12 L 10 11 Z`}),jc=()=>Z(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:Z(`path`,{d:`M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14`})}),Mc=()=>Z(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`6 17 52 29`,width:`100%`,height:`100%`,"aria-hidden":`true`,children:[Z(`defs`,{children:Z(`linearGradient`,{id:`mark-sun`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[Z(`stop`,{offset:`0`,stopColor:`#f6cd85`}),Z(`stop`,{offset:`1`,stopColor:`#e9a443`})]})}),Z(`circle`,{className:`mark-dot`,cx:`12`,cy:`39.5`,r:`4.2`,fill:`url(#mark-sun)`}),Z(`path`,{d:`M27.8 43.46Q24.6 43.46 22.55 42.08Q20.5 40.69 20.08 38.12L23.9 37.13Q24.13 38.28 24.68 38.94Q25.22 39.6 26.03 39.88Q26.84 40.16 27.8 40.16Q29.25 40.16 29.94 39.65Q30.64 39.14 30.64 38.38Q30.64 37.62 29.98 37.21Q29.32 36.8 27.86 36.53L26.94 36.37Q25.22 36.04 23.8 35.46Q22.39 34.88 21.53 33.86Q20.67 32.84 20.67 31.22Q20.67 28.78 22.45 27.47Q24.23 26.17 27.14 26.17Q29.88 26.17 31.69 27.39Q33.51 28.61 34.07 30.59L30.21 31.78Q29.94 30.53 29.13 30Q28.33 29.47 27.14 29.47Q25.95 29.47 25.32 29.88Q24.7 30.3 24.7 31.02Q24.7 31.81 25.36 32.19Q26.02 32.57 27.14 32.77L28.06 32.94Q29.91 33.27 31.41 33.81Q32.91 34.35 33.79 35.36Q34.66 36.37 34.66 38.08Q34.66 40.66 32.8 42.06Q30.93 43.46 27.8 43.46Z`,fill:`#eef1f8`}),Z(`path`,{d:`M37.29 43V19.9H41.45V28.64H42.04Q42.31 28.12 42.87 27.59Q43.43 27.06 44.37 26.71Q45.31 26.37 46.76 26.37Q48.68 26.37 50.11 27.24Q51.55 28.12 52.34 29.65Q53.13 31.19 53.13 33.23V43H48.97V33.56Q48.97 31.71 48.07 30.79Q47.16 29.87 45.48 29.87Q43.56 29.87 42.51 31.14Q41.45 32.41 41.45 34.68V43Z`,fill:`#eef1f8`})]});function Nc(e){return Z(`a`,{target:`_blank`,rel:`noopener noreferrer`,...e})}function Pc(e,t){let[n,r]=Ne();return Fe(()=>{if(!t)return;let n=e.flatMap(e=>{let t=document.getElementById(e);return t?[t]:[]}),i=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?r(t.target.id):r(e=>e===t.target.id?void 0:e)},{rootMargin:`-50% 0px -50% 0px`});for(let e of n)i.observe(e);return()=>i.disconnect()},[e,t]),t?n:void 0}function Fc(e){let t=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`;e===null?window.scrollTo({top:0,behavior:t}):document.getElementById(e)?.scrollIntoView({behavior:t})}function Ic(){let{pathname:e}=F(),t=Tr();return n=>r=>{e===K.home&&(r.preventDefault(),Fc(n),t(n?K.section(n):K.home,{replace:!0}))}}var Lc={github:Oc,linkedin:kc,stackoverflow:Ac},Rc=W.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${bc};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(16px, 3vw, 48px);
  /* Liquid-glass bar: tinted, strongly blurred, with a light rim along its
     bottom edge that warms towards the right. */
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent),
    ${q.primary}99;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.18) 40%,
      ${q.sun}59 85%,
      rgba(255, 255, 255, 0.04)
    );
  }
`,zc=W.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 41px;
    height: 23px;
    flex-shrink: 0;
  }
  /* The gold dot lifts a little on hover, like a prompt waiting. */
  .mark-dot {
    transition: transform 400ms ease;
  }
  a:hover & .mark-dot,
  a:focus-visible & .mark-dot {
    transform: translateY(-5px);
  }

  /* Phones: the mark alone stands for Home, to make room for the
     section links. */
  @media (max-width: ${X.mobile}) {
    span {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }
  }
`,Bc=W.div`
  position: absolute;
  inset: auto 0 0;
  height: 2px;
  background: linear-gradient(90deg, ${q.sun}, ${q.sun}66);
  transform-origin: left;
  transform: scaleX(0);
  display: none;

  @supports (animation-timeline: scroll()) {
    display: block;
    animation: nav-progress linear both;
    animation-timeline: scroll(root block);
  }
`,Vc=W.nav`
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.4vw, 20px);
`,Hc=U`
  position: relative;
  color: ${q.text};
  font-size: clamp(1rem, 1.7vw, 1.3rem);
  font-family: ${Y.display};
  font-weight: 700;
  letter-spacing: -0.02em;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 2px;
    border-radius: 2px;
    background: ${q.sun};
    transform: scaleX(0);
    transition: transform 300ms ease;
  }
  &:hover {
    color: ${q.text};
  }
  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`,Uc=W(zi)`
  ${Hc}
`,Wc=W(I)`
  ${Hc}
`;function Gc({id:e,active:t,children:n}){let r=Ic();return Z(Wc,{to:K.section(e),onClick:r(e),className:t?`active`:void 0,"aria-current":t?`location`:void 0,children:n})}var Kc=W(Nc)`
  display: block;
  width: 32px;
  height: 32px;
  color: ${q.text};
  transition:
    color 250ms ease,
    transform 250ms ease;

  &:hover {
    color: ${q.accent};
    transform: translateY(-2px);
  }

  /* Phones: the profiles stay in the footer and the About contact card. */
  @media (max-width: ${X.mobile}) {
    display: none;
  }
`,qc=[`experience`,`work`];function Jc(){let{pathname:e}=F(),t=e===K.home,n=Pc(qc,t),r=Ic();return Z(Rc,{children:[Z(Wc,{to:K.home,onClick:r(null),className:t&&!n?`active`:void 0,children:Z(zc,{children:[Z(Mc,{}),Z(`span`,{children:`Home`})]})}),Z(Vc,{children:[Z(Gc,{id:`experience`,active:n===`experience`,children:`Experience`}),Z(Gc,{id:`work`,active:n===`work`,children:`Work`}),Z(Uc,{to:`/about`,children:`About Me`}),Qs.map(({label:e,href:t,icon:n})=>{let r=Lc[n];return Z(Kc,{href:t,"aria-label":e,title:e,children:Z(r,{})},e)})]}),Z(Bc,{"aria-hidden":`true`})]})}var Yc=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,Xc=W.a`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 200;
  padding: 10px 18px;
  border-radius: 999px;
  background: ${q.primary};
  color: ${q.text};
  font-family: ${Y.mono};
  font-size: 0.82rem;
  translate: 0 -200%;

  &:focus-visible {
    translate: 0;
  }
`,Zc=e=>{e.preventDefault(),document.querySelector(`main`)?.focus()},Qc=W.div`
  min-height: 100vh;
  background-color: ${q.primary};
  color: ${q.text};
  font-family: ${Y.body};
  line-height: 1.6;

  &::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 200;
    pointer-events: none;
    background-image: ${Yc};
    opacity: 0.045;
    mix-blend-mode: overlay;
  }
`,$c=W.footer`
  ${Sc}
  background: ${q.primary};
  padding: calc(${xc} + 40px) 16px 40px;
  text-align: center;
  font-size: 0.85rem;
  color: ${q.muted};

  nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 20px;
    margin-bottom: 14px;
    font-family: ${Y.mono};
    font-size: 0.78rem;
  }
`;function el({children:e}){let{pathname:t,hash:n}=F();yc();let r=Le(null);return Fe(()=>{if(r.current===t)return;r.current=t;let e=n&&document.getElementById(n.slice(1));e?e.scrollIntoView():window.scrollTo(0,0)},[t,n]),Fe(()=>{document.title=vc(t).title},[t]),Z(Qc,{children:[Z(Xc,{href:`#content`,onClick:Zc,children:`Skip to content`}),Z(Jc,{}),Z(`main`,{tabIndex:-1,children:e}),Z($c,{children:[Z(`nav`,{"aria-label":`Contact`,children:[Z(`a`,{href:`mailto:${G.email}`,children:G.email}),Qs.map(e=>Z(Nc,{href:e.href,children:e.label},e.label))]}),`Made using Vite + Preact + TypeScript.`,Z(`br`,{}),G.name,` `,new Date().getFullYear(),`.`]})]})}var tl=`/assets/coast-sunset-DuZU3pnE.webp`,nl=`/assets/coast-sunset-800-DkqGpYs2.webp`;function Q(e,t=0,n=`translateY(14px)`){let r=600+120*t;return{opacity:+!!e,transform:e?`none`:n,transition:`opacity 350ms ease-out, transform ${r}ms ease-in-out, translate 300ms ease, box-shadow 300ms ease`}}function rl(e=`-35% 0px -35% 0px`){let t=Le(null),[n,r]=Ne(!1);return Fe(()=>{let n=t.current;if(!n)return;let i=new IntersectionObserver(([e])=>r(e.isIntersecting),{rootMargin:e,threshold:0});return i.observe(n),()=>i.disconnect()},[e]),[t,n]}var il={dusk:[`radial-gradient(46% 52% at 22% 92%, ${J.peach}b3, transparent 70%),
     radial-gradient(40% 50% at 50% 84%, ${J.rose}a6, transparent 70%),
     radial-gradient(42% 52% at 80% 78%, ${J.lavender}a6, transparent 70%)`,`radial-gradient(36% 42% at 88% 26%, ${J.blue}99, transparent 70%),
     radial-gradient(30% 36% at 8% 40%, ${J.rose}66, transparent 70%),
     radial-gradient(34% 30% at 46% 10%, ${J.lavender}4d, transparent 70%)`],tide:[`radial-gradient(36% 42% at 16% 80%, ${J.blue}80, transparent 70%),
     radial-gradient(34% 40% at 84% 22%, ${J.lavender}73, transparent 70%)`,`radial-gradient(26% 30% at 62% 92%, ${J.rose}4d, transparent 70%),
     radial-gradient(22% 26% at 30% 14%, ${J.peach}40, transparent 70%)`]},al=Gs`
  from { transform: translate3d(-3%, 2%, 0) scale(1); }
  to   { transform: translate3d(3%, -3%, 0) scale(1.08); }
`,ol=W.div`
  position: absolute;
  inset: -100px 0; /* room for the parallax shift */
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: ${e=>e.$visible?1:.35};
  transition: opacity 1.4s ease;
`,sl=W.div`
  position: absolute;
  inset: -12%;
  background: ${e=>e.$background};
  animation: ${al} ${e=>e.$reverse?26:19}s ease-in-out infinite
    alternate${e=>e.$reverse?`-reverse`:``};
  will-change: transform;
`;function cl({variant:e,visible:t}){let[n,r]=il[e];return Z(ol,{$visible:t,"aria-hidden":`true`,className:`parallax`,style:{"--parallax":`80px`},children:[Z(sl,{$background:r,$reverse:!0}),Z(sl,{$background:n})]})}var ll=`-70 -100 2290 1080`,ul=[[{d:`M-296.187643,563.346753C252.035708,285.454227,433.516541,470.71591,926.917556,270.330824Q1420.318571,69.945738,2289.91423,287.344652`,transform:`translate(.000001 0.000002)`},{d:`M-305.639769,875.266935c716.471206-444.249956,315.701032,20.794678,862.033957-58.603186s839.348854-542.552073,948.993524-474.496761-13.232978,693.7861,586.031857,576.579729q599.264835-117.206371,204.165937-73.726588`,transform:`translate(.000001 0.000001)`}],[{d:`M-341.557851,213.618064C686.833537,612.497812,794.587782,173.919132,1533.744092,497.181866s806.011511,164.140879,1113.689668,284.67459`,transform:`translate(.000001 0)`},{d:`M-305.642155,686.698263c1487.639747-107.845952-6.343879,57.094916,1122.866675,241.067422s-25.375519-926.206412,938.894168-735.890026q964.269687,190.316386,1049.91206,418.696049`,transform:`translate(.000002 0.000001)`}],[{d:`M-173.309995,461.263784C785.135655,175.809557,998.753719,601.15526,1354.153684,323.262734s-117.206372,858.253107,431.016978,676.772274-7.561701-697.566953,361.071241-801.540347q368.632942-103.973394,111.535095-26.465956`,transform:`translate(-26.465953-63.423702)`},{d:`M-78.788728,145.446611C974.17819,500.962717,-473.887625,984.911605,745.436723,907.404166s680.553123-476.387185,1342.201994-446.140381q661.648871,30.246804,160.686154,11.342549`,transform:`translate(.000003 0.000003)`}],[{d:`M-209.228077,516.086119C1034.671801,120.987222,-275.392965,32.13723,770.012252,94.521267s534.990372,741.046737,1257.132854,597.37441q722.142482-143.672327,230.631891-45.370209`,transform:`translate(18.904257 116.278378)`},{d:`M-118.48766,877.15736c1385.681778-20.794678-120.987223-103.973394,1128.583931-351.619114q1249.571154-247.64572,1209.872221-393.208472`,transform:`translate(28.35638 7.561701)`}],[{d:`M-109.035533,26.465955C265.268685,640.854192,87.568702,1034.062665,764.340976,998.144583s582.251006-510.414843,1283.598809-720.252057q701.347803-209.837214,207.946788-60.493611`,transform:`translate(.000002 -100)`},{d:`M-194.104674,349.728689C1040.343077,463.15421,1136.754769,914.965866,1839.992998,784.526518q703.238229-130.439348,415.893577-138.00105`,transform:`translate(0 0)`}],[{d:`M-231.913181,506.633993C637.682478,111.535095,671.710134,310.029757,1284.207946,119.096797q612.497812-190.93296,962.226501,219.28934`,transform:`translate(0 0)`},{d:`M-165.748294,158.795729C819.163311,714.580781,388.146332,943.322247,1108.398389,854.472256s47.260632-266.549974,739.156309-355.399965q691.895677-88.849991,398.879748-54.822335`,transform:`translate(.000001 0)`}],[{d:`M-152.515316,943.322248C875.876072,296.796779,985.520741,1226.886049,1518.620689,776.964817q533.099948-449.921232,731.594608-493.401016`,transform:`translate(.000002 0.000002)`},{d:`M-152.515314,809.102048C947.712235,109.64467,558.284614,888.499912,1329.578155,466.93506Q2100.871696,45.370208,2240.76317,69.945738`,transform:`translate(.000001 0)`}],[{d:`M-75.007877,0C174.528268,550.113776,142.391038,1064.30947,690.614388,1005.706284s586.031856-523.64782,1170.173288-565.237178q584.141432-41.589358,391.318046-30.246806`,transform:`translate(.000002 -40)`},{d:`M-188.433398,336.495712C856.971818,790.197795,694.395238,424.189701,1184.015403,505.110779s449.921231,636.706129,1007.596708,417.416789`,transform:`translate(100.000001 0.000002)`}]];function dl({variant:e,visible:t,color:n}){return Z(`svg`,{xmlns:`http://www.w3.org/2000/svg`,shapeRendering:`geometricPrecision`,viewBox:ll,"aria-hidden":`true`,focusable:`false`,children:ul[e-1].map(e=>Z(`path`,{className:t?`draw`:`fade-out`,d:e.d,transform:e.transform,stroke:n,strokeWidth:`3.84`,strokeMiterlimit:`10`,fill:`none`},e.d))})}var fl=W.section`
  position: relative;
  display: grid;
  /* Page-top sections fill the screen; later ones take at least 85% of it,
     so each still reads as its own "page" without large empty bands. */
  ${e=>e.$compact?U`
          min-height: 85vh;
          min-height: 85svh;
        `:U`
          min-height: 100vh;
          min-height: 100svh;
        `}
  /* Opaque, so a slanted section fully covers the strip it overlaps. */
  background-color: ${q.primary};
  background-image: ${e=>e.$tinted?`linear-gradient(${q.tint}, ${q.tint})`:`none`};
  /* clip (not hidden) keeps the curves contained without becoming a scroll
     container, so position: sticky still works inside sections. */
  overflow: hidden;
  overflow: clip;
  scroll-margin-top: ${bc};

  ${e=>e.$slant&&Sc}
`,pl=W.div`
  position: relative;
  display: grid;
  align-content: center;
  padding: ${e=>e.$compact?`calc(${xc} + clamp(64px, 8vw, 112px)) clamp(16px, 4vw, 48px) clamp(64px, 8vw, 112px)`:`calc(${bc} + 40px) clamp(16px, 4vw, 48px) 72px`};

  /* Phones: less air under the nav on page-top sections. */
  @media (max-width: ${X.mobile}) {
    ${e=>!e.$compact&&`padding-top: calc(72px + 20px);`}
  }
`,ml=W.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url(${e=>e.$photo.large}) center / cover no-repeat;
  filter: grayscale(0.25) brightness(0.6) contrast(1.05);
  opacity: ${e=>e.$visible?.27:0};

  @media (max-width: ${X.mobile}) {
    background-image: url(${e=>e.$photo.small});
    opacity: ${e=>e.$visible?.2:0};
  }
  transition: opacity 1.2s ease;
  mask-image: radial-gradient(
    ellipse 85% 80% at 50% 50%,
    #000 35%,
    transparent 100%
  );
  pointer-events: none;
`,hl=W.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  svg {
    width: 100%;
    min-width: 900px;
    flex-shrink: 0;
  }
`,gl=W.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;function _l({curves:e,tinted:t=!1,slant:n=!1,compact:r=!1,photo:i,aurora:a,id:o,children:s}){let[c,l]=rl();return Z(fl,{ref:c,id:o,$tinted:t,$slant:n,$compact:r,children:Z(pl,{$compact:r,children:[i&&Z(ml,{$photo:i,$visible:l,"aria-hidden":`true`}),a&&Z(cl,{variant:a,visible:l}),Z(hl,{className:`parallax`,style:{"--parallax":`36px`},children:Z(dl,{variant:e,visible:l,color:q.secondary})}),Z(gl,{children:s(l)})]})})}var vl={"data-light":``},yl=W.div.attrs(vl)`
  ${wc}
  ${Tc}
  padding: 20px 24px;
`,bl=W.div.attrs(vl)`
  ${wc}
  border-radius: 26px;
  padding: clamp(24px, 4vw, 44px);
  background:
    ${Cc(520,.11)},
    radial-gradient(
      120% 70% at 0% 0%,
      rgba(255, 255, 255, 0.13),
      transparent 55%
    ),
    radial-gradient(
      80% 60% at 100% 100%,
      ${J.lavender}1f,
      transparent 60%
    ),
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.02) 50%,
      rgba(255, 255, 255, 0.05)
    ),
    rgba(19, 19, 22, 0.34);
  backdrop-filter: blur(26px) saturate(185%);
  -webkit-backdrop-filter: blur(26px) saturate(185%);
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -1px 0 rgba(255, 255, 255, 0.04),
    inset 0 0 40px rgba(255, 255, 255, 0.025);
`,xl=W.h2`
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0 0 32px;
`,Sl=W.span`
  color: ${q.sun};
`,Cl=W.span`
  color: ${q.muted};
`,wl=W.div`
  font-family: ${Y.mono};
  color: ${q.sun};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,Tl=W(wl)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  &::after {
    content: "";
    width: 48px;
    height: 1px;
    background: ${q.sun}99;
  }
`,El=W.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`,Dl=W.li`
  font-family: ${Y.mono};
  font-size: 0.76rem;
  padding: 4px 11px;
  border-radius: 999px;
  border: 1px solid ${q.secondary};
  background: ${q.secondary}2e;
  white-space: nowrap;

  ${e=>e.$core&&U`
      border-color: ${q.sun}b3;
      background: ${q.sun}1a;
      color: ${q.text};
      font-weight: 500;
    `}
`,$=W.a.attrs(vl)`
  ${wc}
  ${Tc}
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 22px;
  border: 0;
  border-radius: 999px;
  color: ${q.text};
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${q.text};
  }
  svg {
    width: 18px;
    height: 18px;
  }

  ${e=>e.$primary&&U`
      background:
        ${Cc(200,.18)},
        linear-gradient(120deg, ${q.sun}40, ${J.rose}33),
        rgba(19, 19, 22, 0.3);
      box-shadow:
        0 10px 32px ${J.peach}2e,
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    `}
`,Ol=W.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: center;

  @media (max-width: ${X.mobile}) {
    grid-template-columns: 1fr;
  }
`,kl=U`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`,Al=W.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: ${X.mobile}) {
    > * {
      flex: 1 1 auto;
      justify-content: center;
    }
  }
`,jl=W(I)`
  margin-left: auto;
  font-family: ${Y.mono};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${q.muted};
  white-space: nowrap;

  &:hover {
    color: ${q.sun};
  }

  @media (max-width: ${X.mobile}) {
    order: -1;
    flex-basis: 100%;
    margin: 0 0 4px;
  }
`,Ml=W.div`
  margin: 32px 0 12px;
  font-family: ${Y.mono};
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${q.muted};
`,Nl=W.ul`
  margin: 16px 0 0;
  padding-left: 1.15em;

  li {
    color: rgba(255, 255, 255, 0.86);
    line-height: 1.7;
    margin-bottom: 11px;
    padding-left: 4px;
  }
  li::marker {
    content: "▸";
    color: ${q.sun};
  }
`,Pl=W.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;

  > :only-child {
    margin-left: auto;
  }

  @media (max-width: ${X.mobile}) {
    flex-direction: column;

    > * {
      justify-content: center;
    }
  }
`,Fl={github:Oc,linkedin:kc,stackoverflow:Ac},Il=W.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: clamp(16px, 2.5vw, 28px);
  align-items: start;
  transition: gap 1s ease;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Ll=W(bl)`
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: 1.05;
    margin: 10px 0 22px;
  }
  p {
    font-size: clamp(1rem, 1.2vw, 1.06rem);
    line-height: 1.8;
    margin: 0 0 16px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,Rl=W(bl)`
  padding: clamp(22px, 3vw, 32px);

  h2 {
    font-size: 1.35rem;
    margin: 8px 0 4px;
  }
  > p {
    margin: 0 0 22px;
    line-height: 1.6;
  }
`,zl=W.dl`
  margin: 0 0 24px;

  div {
    padding: 12px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
  div:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  dt {
    font-family: ${Y.mono};
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${q.muted};
  }
  dd {
    margin: 2px 0 0;
    overflow-wrap: anywhere;
  }
`,Bl=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 16px;

  h3 {
    margin: 6px 0 2px;
  }
  p {
    margin: 12px 0 0;
    line-height: 1.65;
  }
`;function Vl(){let e=G.phone.replace(/\s/g,``);return Z(S,{children:[Z(_l,{curves:4,photo:{large:tl,small:nl},aurora:`dusk`,children:t=>Z(Il,{className:t?`flex-faded-in-reduced`:`flex-faded-out-reduced`,children:[Z(Ll,{style:Q(t,0),children:[Z(wl,{children:G.headline}),Z(`h1`,{children:[`About me`,Z(Sl,{children:`.`})]}),G.about.map(e=>Z(`p`,{children:e},e.slice(0,32)))]}),Z(Rl,{as:`aside`,style:Q(t,2,`translateY(22px)`),children:[Z(wl,{children:`Contact`}),Z(`h2`,{children:`Get in touch`}),Z(`p`,{children:Z(Cl,{children:`For project inquiries, feel free to reach out.`})}),Z(zl,{children:[Z(`div`,{children:[Z(`dt`,{children:`Email`}),Z(`dd`,{children:Z(`a`,{href:`mailto:${G.email}`,children:G.email})})]}),Z(`div`,{children:[Z(`dt`,{children:`Phone`}),Z(`dd`,{children:Z(`a`,{href:`tel:${e}`,children:G.phone})})]}),Z(`div`,{children:[Z(`dt`,{children:`Location`}),Z(`dd`,{children:G.location})]})]}),Z(Al,{children:[Z($,{$primary:!0,href:G.cvUrl,download:!0,children:[Z(jc,{}),`Download CV`]}),Qs.map(({label:e,href:t,icon:n})=>{let r=Fl[n];return Z($,{as:Nc,href:t,children:[Z(r,{}),e]},e)})]})]})]})}),Z(_l,{curves:6,tinted:!0,aurora:`tide`,slant:!0,compact:!0,children:e=>Z(S,{children:[Z(`div`,{style:Q(e),children:[Z(Tl,{children:`beyond work`}),Z(xl,{children:[`Volunteering & open source`,Z(Sl,{children:`.`})]})]}),Z(Bl,{children:uc.map((t,n)=>Z(yl,{style:Q(e,n+1),children:[Z(wl,{children:t.period}),Z(`h3`,{children:t.title}),Z(Cl,{children:t.organization}),t.description&&Z(`p`,{children:t.description}),t.link&&Z(`p`,{children:Z(Nc,{href:t.link.href,children:[t.link.label,` ↗`]})})]},t.title))})]})})]})}var Hl=W(bl)`
  max-width: 620px;
  margin: 0 auto;

  h1 {
    font-size: clamp(2.4rem, 6vw, 3.6rem);
    line-height: 1.05;
    margin: 10px 0 18px;
  }
  p {
    line-height: 1.7;
    margin: 0 0 28px;
  }
`;function Ul(){return Z(_l,{curves:3,aurora:`dusk`,children:e=>Z(Hl,{style:Q(e),children:[Z(wl,{children:`404 · page not found`}),Z(`h1`,{children:[`Nothing here`,Z(Sl,{children:`.`})]}),Z(`p`,{children:`This page doesn't exist, or it has moved. Everything on the site is a click away from the home page.`}),Z(Al,{children:[Z($,{as:I,to:K.home,$primary:!0,children:`Home`}),Z($,{as:I,to:K.section(`experience`),children:`Experience`}),Z($,{as:I,to:K.section(`work`),children:`Selected work`})]})]})})}var Wl=W(bl)`
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px);
`,Gl=W.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    flex-shrink: 0;
  }
`,Kl=W.div`
  & + & {
    margin-top: 36px;
    padding-top: 28px;
    border-top: 1px solid ${q.secondary}66;
  }

  h1,
  h2 {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    line-height: 1.15;
    margin: 0 0 4px;
  }
`;function ql(){let{slug:e}=Dr(),t=$s.findIndex(t=>t.slug===e);if(t===-1)return Z(Ul,{});let n=$s[t],r=$s[t-1],i=$s[t+1];return Z(_l,{curves:n.curves,tinted:!0,aurora:`tide`,children:e=>Z(Wl,{style:Q(e),children:[Z(Gl,{children:[Z(`img`,{src:n.logo,alt:`${n.company} logo`}),Z(Cl,{children:n.company}),Z(jl,{to:K.section(`experience`),children:`← All roles`})]}),n.positions.map((t,n)=>Z(Kl,{children:[Z(n===0?`h1`:`h2`,{children:t.title}),Z(wl,{children:t.period}),Z(Nl,{children:t.bullets.map((t,n)=>Z(`li`,{className:e?`slide-in`:`slide-out`,style:{transition:`transform ${1e3+200*n}ms ease-in-out`},children:t},t))})]},t.title)),Z(Ml,{id:`technologies`,children:`Technologies`}),Z(El,{"aria-labelledby":`technologies`,children:n.tags.map(e=>Z(Dl,{children:e},e))}),Z(Pl,{"aria-label":`Other experience`,children:[r&&Z($,{as:I,to:K.experience(r.slug),children:[`← `,r.tileTitle]}),i&&Z($,{as:I,to:K.experience(i.slug),children:[i.tileTitle,` →`]})]})]})})}var Jl=W.div`
  align-self: start;
  position: sticky;
  top: calc(${bc} + 40px);

  @media (max-width: ${X.mobile}) {
    position: static;
  }
`,Yl=W.div`
  display: grid;
  gap: 14px;
`,Xl=W(yl)`
  h3 {
    margin: 4px 0 2px;
    font-size: 1.1rem;
  }
  p {
    margin: 8px 0 0;
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;function Zl(){return Z(_l,{id:`education`,curves:3,aurora:`tide`,slant:!0,compact:!0,children:e=>Z(Ol,{children:[Z(Jl,{style:Q(e),children:[Z(Tl,{children:`04 / education`}),Z(xl,{children:[`Academic background`,Z(Sl,{children:`.`})]})]}),Z(Yl,{children:lc.map((t,n)=>Z(Xl,{style:Q(e,n,`translateX(15px)`),children:[Z(wl,{children:t.period}),Z(`h3`,{children:t.title}),Z(Cl,{children:t.institution}),t.details.map(e=>Z(`p`,{children:e},e)),t.link&&Z(`p`,{children:Z(Nc,{href:t.link.href,children:[t.link.label,` ↗`]})})]},t.title))})]})})}var Ql=$s.reduce((e,t)=>{let n=e.at(-1);return n&&n.company===t.company?n.roles.push(t):e.push({company:t.company,logo:t.logo,roles:[t]}),e},[]),$l=nc({positions:lc.filter(e=>e.institution.startsWith(`University of Oslo`)&&/Sc\./.test(e.title)).map(e=>({title:e.title,period:e.period,bullets:[]}))}),eu=W.ol`
  --years: ${`116px`};
  --rail: ${`44px`};
  position: relative;
  display: grid;
  gap: clamp(18px, 2.4vw, 26px);
  list-style: none;
  margin: 0;
  padding: 0;

  /* The spine: draws itself downwards when the section comes into view,
     like the background curves. */
  &::before {
    content: "";
    position: absolute;
    top: 14px;
    bottom: 10px;
    left: calc(var(--years) + var(--rail) / 2 - 1px);
    width: 2px;
    border-radius: 2px;
    background: linear-gradient(
      180deg,
      ${q.sun},
      ${q.accent} 30%,
      ${q.secondary} 80%,
      ${q.secondary}00
    );
    transform-origin: top;
    transform: scaleY(${e=>+!!e.$grow});
    transition: transform 1.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  @media (max-width: ${X.mobile}) {
    --years: 0px;
    --rail: ${`26px`};
  }
`,tu=W.li`
  display: grid;
  grid-template-columns: var(--years) var(--rail) minmax(0, 1fr);
  align-items: start;

  > :nth-child(1) {
    grid-column: 1;
  }
  > :nth-child(2) {
    grid-column: 2;
  }
  > :nth-child(3) {
    grid-column: 3;
  }
`,nu=W.div`
  padding-top: ${e=>e.$origin?`4px`:`22px`};
  text-align: right;
  font-family: ${Y.mono};
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  color: ${e=>e.$current?q.sun:q.muted};
  white-space: nowrap;

  @media (max-width: ${X.mobile}) {
    display: none;
  }
`,ru=Gs`
  0%, 100% { box-shadow: 0 0 0 0 ${q.sun}66, 0 0 18px ${q.sun}55; }
  50% { box-shadow: 0 0 0 7px ${q.sun}00, 0 0 26px ${q.sun}77; }
`,iu=W.span`
  justify-self: center;
  margin-top: 24px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${q.primary};
  border: 2px solid ${q.accent};
  box-shadow: 0 0 0 4px ${q.primary};

  ${e=>e.$current&&U`
      background: ${q.sun};
      border-color: #f6cd85;
      animation: ${ru} 2.8s ease-in-out infinite;
    `}
  ${e=>e.$hollow&&U`
      margin-top: 6px;
      border-color: ${q.secondary};
      border-style: dashed;
    `}
`,au=W(yl)`
  padding: clamp(16px, 2.2vw, 22px) clamp(16px, 2.4vw, 26px);
`,ou=W.header`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 6px;

  h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  /* Year range, on phones only (the column holds it on wider screens). */
  span {
    display: none;
    margin-left: auto;
    font-family: ${Y.mono};
    font-size: 0.74rem;
    color: ${q.muted};
    white-space: nowrap;
  }
  @media (max-width: ${X.mobile}) {
    span {
      display: block;
    }
  }
`,su=W.div`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) contrast(1.05) brightness(0.8);
    transition: filter 500ms ease;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${q.secondary};
    mix-blend-mode: color;
    opacity: 0.85;
    transition: opacity 500ms ease;
  }
  ${au}:hover &::after,
  ${au}:focus-within &::after {
    opacity: 0;
  }
  ${au}:hover & img,
  ${au}:focus-within & img {
    filter: none;
  }
`,cu=W.ol`
  display: grid;
  gap: 4px;
  list-style: none;
  margin: 0 -12px;
  padding: 0;
`,lu=W(I)`
  position: relative;
  display: block;
  padding: 12px 40px 12px 12px;
  border-radius: 12px;
  color: ${q.text};
  transition: background 250ms ease;

  &:hover,
  &:focus-visible {
    color: ${q.text};
    background: rgba(255, 255, 255, 0.045);
  }
  p {
    margin: 6px 0 0;
    font-size: 0.92rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.78);
    max-width: 68ch;
  }
  /* Arrow to the details page. */
  &::after {
    content: "→";
    position: absolute;
    top: 12px;
    right: 14px;
    font-family: ${Y.mono};
    color: ${q.muted};
    transition:
      translate 250ms ease,
      color 250ms ease;
  }
  &:hover::after,
  &:focus-visible::after {
    translate: 4px 0;
    color: ${q.sun};
  }
`,uu=W.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2px 12px;
  ${e=>e.$step&&U`
      padding-left: 18px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.5em;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        border: 1.5px solid ${q.accent};
      }
    `}

  strong {
    font-family: ${Y.display};
    font-size: 1.12rem;
    font-weight: 600;
  }
  & + & {
    margin-top: 4px;
  }
`,du=W.span`
  font-family: ${Y.mono};
  font-size: 0.76rem;
  color: ${q.muted};
  white-space: nowrap;
`,fu=W.span`
  font-family: ${Y.mono};
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 1px 8px;
  border-radius: 999px;
  color: ${q.sun};
  border: 1px solid ${q.sun}80;
  background: ${q.sun}14;
`,pu=W.div`
  margin-top: 8px;
  font-family: ${Y.mono};
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  color: ${q.accent};
`,mu=W(I)`
  display: block;
  padding: 2px 0 0;
  color: ${q.muted};
  font-size: 0.92rem;
  line-height: 1.6;

  strong {
    color: ${q.text};
    font-weight: 500;
  }
  span {
    color: ${q.accent};
    white-space: nowrap;
  }
  &:hover {
    color: ${q.text};
  }
  &:hover span {
    color: ${q.sun};
  }
`,hu=e=>e.replace(` - `,` – `),gu=e=>e.positions.some(e=>/present/i.test(e.period));function _u({exp:e,steps:t}){return Z(lu,{to:K.experience(e.slug),children:[e.positions.map(e=>Z(uu,{$step:t,children:[Z(`strong`,{children:e.title}),/present/i.test(e.period)&&Z(fu,{children:`now`}),Z(du,{children:rc(e.period)})]},e.title)),Z(`p`,{children:e.summary}),Z(pu,{"aria-label":`Stack`,children:e.tags.slice(0,4).join(` · `)})]})}function vu(){let e=Ic();return Z(_l,{id:`experience`,curves:2,tinted:!0,slant:!0,compact:!0,children:t=>Z(S,{children:[Z(`div`,{style:Q(t),children:[Z(Tl,{children:`01 / experience`}),Z(xl,{children:[`From physics to platforms`,Z(Sl,{children:`.`})]})]}),Z(eu,{$grow:t,children:[Ql.map((e,n)=>{let r=e.roles.flatMap(e=>e.positions),i=e.roles.some(gu),a=hu(nc({positions:r})),o=Q(t,n+1,`translateX(18px)`);return Z(tu,{children:[Z(nu,{$current:i,style:Q(t,n+1),children:a}),Z(iu,{$current:i,style:Q(t,n+1,`scale(0)`)}),Z(au,{as:`article`,style:o,children:[Z(ou,{children:[Z(su,{children:Z(`img`,{src:e.logo,alt:``,width:40,height:40})}),Z(`h3`,{children:e.company}),Z(`span`,{children:a})]}),Z(cu,{children:e.roles.map(e=>Z(`li`,{children:Z(_u,{exp:e,steps:r.length>1})},e.slug))})]})]},e.company)}),Z(tu,{style:Q(t,Ql.length+1),children:[Z(nu,{$origin:!0,children:hu($l)}),Z(iu,{$hollow:!0}),Z(mu,{to:K.section(`education`),onClick:e(`education`),children:[Z(`strong`,{children:`Where it started:`}),` physics at the University of Oslo, a BSc in physics and astronomy and then an MSc in computational science. `,Z(`span`,{children:`Education ↓`})]})]})]})]})})}var yu=`/assets/lava-field-PsqZZp8-.webp`,bu=`/assets/lava-field-800-B4GOwm_t.webp`,xu=`/assets/portrait-C-wu8zzx.webp`;function Su({text:e}){let t=e.split(/\[([^\]]+)\]\((\/[^)]*)\)/);return Z(S,{children:t.map((e,n)=>n%3==1?Z(I,{to:t[n+1],children:e},n):n%3==2?null:Z(S,{children:e},n))})}var Cu=W.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: gap 1s ease;

  /* Phones (portrait): stack, with the portrait centred above
     left-aligned text, which reads far better than centred paragraphs. */
  @media (max-width: ${X.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`,wu=U`
  flex-shrink: 0;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 4px;
  background: conic-gradient(
    from 200deg,
    ${q.sun},
    ${q.secondary} 35%,
    ${q.accent} 60%,
    ${q.secondary} 80%,
    ${q.sun}
  );

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid ${q.primary};
  }
`,Tu=W.div`
  ${wu}
  position: relative;
  align-self: center;
  width: clamp(190px, 24vw, 320px);
  box-shadow:
    0 0 80px ${q.sun}2e,
    0 24px 60px rgba(0, 0, 0, 0.55);

  /* Phones: the portrait moves into the panel, beside the heading (Avatar),
     so the introduction and its actions fit on the first screen. */
  @media (max-width: ${X.mobile}) {
    display: none;
  }
`,Eu=W.div`
  ${wu}
  display: none;
  width: 72px;
  padding: 3px;
  box-shadow: 0 0 36px ${q.sun}2e;

  img {
    border-width: 2px;
  }
  @media (max-width: ${X.mobile}) {
    display: block;
  }
`,Du=W.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 10px 0 22px;

  @media (max-width: ${X.mobile}) {
    margin: 14px 0 18px;
  }
`,Ou=W(bl)`
  max-width: 660px;
  padding: clamp(24px, 3.2vw, 40px);

  h1 {
    font-size: clamp(2.6rem, 6vw, 4rem);
    line-height: 1.1;
    margin: 0;
  }
  p {
    line-height: 1.7;
    margin: 0 0 14px;
  }

  @media (max-width: ${X.mobile}) {
    padding: 22px 20px 24px;

    h1 {
      font-size: 2.3rem;
    }
    p {
      line-height: 1.6;
    }
  }
`,ku=W(Al)`
  margin-top: 26px;
`,Au=W.dl`
  display: grid;
  grid-template-columns: repeat(${cc.length}, minmax(0, 1fr));
  gap: 14px;
  margin: clamp(40px, 6vh, 64px) 0 0;

  div {
    ${wc}
    ${Tc}
    overflow: hidden;
    border-radius: 14px;
    padding: 16px 18px 18px;

    /* Thin sunlit edge along the top of each figure. */
    &::after {
      content: "";
      position: absolute;
      inset: 0 0 auto;
      height: 2px;
      background: linear-gradient(90deg, ${q.sun}, transparent 80%);
      opacity: 0.8;
    }
  }
  dt {
    font-family: ${Y.mono};
    font-size: clamp(1.4rem, 2.4vw, 1.9rem);
    font-weight: 500;
    color: ${q.sun};
    line-height: 1.15;
    white-space: nowrap;
  }
  dt a {
    color: inherit;
  }
  /* Small arrow on figures that link to their proof. */
  dt small {
    margin-left: 6px;
    font-size: 0.5em;
    vertical-align: super;
    color: ${q.muted};
    transition: color 250ms ease;
  }
  dt a:hover small {
    color: ${q.sun};
  }
  dd {
    margin: 6px 0 0;
    font-size: 0.82rem;
    color: ${q.muted};
    line-height: 1.4;
  }

  /* Tablets: three on the first row, the rest share the second. */
  @media (max-width: 1000px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));

    div {
      grid-column: span 2;
    }
    div:nth-child(n + 4) {
      grid-column: span 3;
    }
  }
  @media (max-width: ${X.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    div,
    div:nth-child(n + 4) {
      grid-column: auto;
    }
    /* An odd figure out spans the full row instead of sitting alone. */
    div:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }
`;function ju(){let e=Ic();return Z(_l,{curves:1,photo:{large:yu,small:bu},children:t=>Z(S,{children:[Z(Cu,{className:t?`flex-faded-in`:`flex-faded-out`,children:[Z(Tu,{style:Q(t,2,`scale(0.96)`),children:Z(`img`,{src:xu,alt:`Portrait of ${G.name}`,width:480,height:480,fetchPriority:`high`})}),Z(Ou,{style:Q(t,0),children:[Z(wl,{children:G.headline}),Z(Du,{children:[Z(Eu,{children:Z(`img`,{src:xu,alt:``,width:72,height:72})}),Z(`h1`,{children:[G.greeting,Z(Sl,{children:`,`})]})]}),G.welcome.map(e=>Z(`p`,{children:Z(Su,{text:e})},e.slice(0,24))),Z(ku,{children:[Z($,{as:I,to:K.section(`experience`),$primary:!0,onClick:e(`experience`),children:`View experience ↓`}),Z($,{as:I,to:K.about,children:`Get in touch`}),Z($,{href:G.cvUrl,download:!0,children:[Z(jc,{}),`Download CV`]})]})]})]}),Z(Au,{"aria-label":`Key figures`,children:cc.map((e,n)=>Z(`div`,{"data-light":!0,style:Q(t,3+n),children:[Z(`dt`,{children:e.link?Z(Nc,{href:e.link.href,"aria-label":`${e.value}: ${e.link.label}`,title:e.link.label,children:[e.value,Z(`small`,{"aria-hidden":`true`,children:`↗`})]}):e.value}),Z(`dd`,{children:e.label})]},e.value))})]})})}var Mu=W.figure`
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  background: ${q.primary};
  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.1);

  /* Window bar with three muted dots. */
  &::before {
    content: "";
    display: block;
    height: 22px;
    background:
      radial-gradient(circle, #ffffff40 3px, transparent 3.5px) 12px 50% / 14px
        14px no-repeat,
      radial-gradient(circle, #ffffff2a 3px, transparent 3.5px) 28px 50% / 14px
        14px no-repeat,
      radial-gradient(circle, #ffffff1a 3px, transparent 3.5px) 44px 50% / 14px
        14px no-repeat,
      rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;function Nu({src:e,alt:t,width:n,height:r,className:i}){return Z(Mu,{className:i,children:Z(`img`,{src:e,alt:t,width:n,height:r,loading:`lazy`,decoding:`async`})})}var Pu=W.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  > [data-featured] {
    grid-column: 1 / -1;
  }

  @media (max-width: ${X.mobile}) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Fu=W.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  font-size: 0.92rem;
`,Iu=W(I)`
  font-family: ${Y.mono};
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  color: ${q.sun};

  &:hover {
    color: ${q.text};
  }
`,Lu=W.div`
  display: grid;
  grid-template-columns: ${e=>e.$image?`minmax(0, 1.25fr) minmax(0, 1fr)`:`minmax(0, 1fr)`};
  gap: 14px clamp(20px, 3vw, 36px);
  align-items: start;

  > div {
    display: grid;
    gap: 14px;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Ru=W(bl)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: clamp(22px, 3vw, 34px);

  h3 {
    margin: 0;
    font-size: ${e=>e.$featured?`clamp(1.4rem, 2.4vw, 1.9rem)`:`1.3rem`};
    line-height: 1.2;
  }
  p {
    margin: 0;
    line-height: 1.7;
    max-width: 72ch;
  }
  /* Links and tags sit at the bottom, so cards in a row line up. */
  ${Fu}, ${El} {
    margin-top: auto;
  }
  ${El} {
    padding-top: 6px;
  }
  ${Fu} + ${El} {
    margin-top: 0;
  }
`,zu=W.ol`
  display: grid;
  grid-template-columns: repeat(var(--steps), minmax(0, 1fr));
  gap: 28px;
  list-style: none;
  margin: 6px 0;
  padding: 0;

  li {
    ${kl}
    position: relative;
    padding: 14px 16px;
  }
  /* Arrow to the next step. */
  li + li::before {
    content: "→";
    position: absolute;
    left: -21px;
    top: 50%;
    translate: 0 -50%;
    color: ${q.sun};
    font-family: ${Y.mono};
  }
  strong {
    display: block;
    font-family: ${Y.mono};
    font-size: 0.86rem;
    font-weight: 500;
    color: ${q.text};
  }
  span {
    display: block;
    margin-top: 2px;
    font-size: 0.8rem;
    line-height: 1.4;
    color: ${q.muted};
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    li + li::before {
      content: none;
    }
  }
`;function Bu({project:e,index:t,visible:n}){let{title:r,context:i,summary:a,flow:o,tags:s,links:c,featured:l,image:u}=e,d=ec(r),f=e.page?{to:K.project(e.page.slug),label:`Read the full story`}:e.role?{to:K.experience(e.role),label:`More about the role`}:void 0;return Z(Ru,{as:`article`,$featured:!!l,"data-featured":l||void 0,style:Q(n,t),children:[Z(Lu,{$image:!!u,children:[Z(`div`,{children:[Z(wl,{children:i}),Z(`h3`,{children:r}),Z(`p`,{children:a}),f&&Z(Iu,{to:f.to,"aria-label":`${f.label}: ${d}`,children:[f.label,` →`]})]}),u&&Z(Nu,{...u})]}),o&&Z(zu,{"aria-label":`${r}: how it fits together`,style:{"--steps":o.length},children:o.map(e=>Z(`li`,{children:[Z(`strong`,{children:e.label}),Z(`span`,{children:e.detail})]},e.label))}),c&&Z(Fu,{children:c.map(e=>Z(Nc,{href:e.href,"aria-label":`${e.label}: ${d}`,children:[e.label,` ↗`]},e.href))}),Z(El,{"aria-label":`${r}: technologies`,children:s.map(e=>Z(Dl,{children:e},e))})]})}function Vu(){return Z(_l,{id:`work`,curves:7,aurora:`tide`,slant:!0,compact:!0,children:e=>Z(S,{children:[Z(`div`,{style:Q(e),children:[Z(Tl,{children:`02 / selected work`}),Z(xl,{children:[`Selected work`,Z(Sl,{children:`.`})]})]}),Z(Pu,{children:tc.map((t,n)=>Z(Bu,{project:t,index:n+1,visible:e},t.title))})]})})}var Hu=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`,Uu=W.h3`
  margin: 0 0 14px;
  font-size: 1.05rem;
`,Wu=e=>[...e].sort((e,t)=>Number(ac.includes(t))-Number(ac.includes(e))),Gu=W.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: -14px 0 24px;
  font-family: ${Y.mono};
  font-size: 0.74rem;
  letter-spacing: 0.03em;
  color: ${q.muted};

  ${Dl} {
    list-style: none;
  }
`,Ku=W.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;

  li {
    display: grid;
    gap: 2px;
  }
  small {
    color: ${q.muted};
  }
`,qu=W(Nc)`
  font-size: 0.86rem;
`,Ju=W.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 16px;
  margin: 0;

  dd {
    margin: 0;
    color: ${q.muted};
  }
`;function Yu(){return Z(_l,{id:`skills`,curves:5,tinted:!0,slant:!0,compact:!0,children:e=>Z(S,{children:[Z(`div`,{style:Q(e),children:[Z(Tl,{children:`03 / skills`}),Z(xl,{children:[`Skills & certifications`,Z(Sl,{children:`.`})]}),Z(Gu,{children:[Z(Dl,{as:`span`,$core:!0,children:`core`}),`the core stack, used at an advanced level`]})]}),Z(Hu,{children:[ic.map((t,n)=>Z(yl,{style:Q(e,n),children:[Z(Uu,{children:t.title}),Z(El,{children:Wu(t.skills).map(e=>Z(Dl,{$core:ac.includes(e),children:e},e))})]},t.title)),Z(yl,{style:Q(e,ic.length),children:[Z(Uu,{children:`Certifications`}),Z(Ku,{children:oc.map(e=>Z(`li`,{children:[Z(wl,{children:e.code}),e.title,Z(`small`,{children:e.issuer}),e.verifyUrl&&Z(qu,{href:e.verifyUrl,children:`Verify credential ↗`})]},e.code))})]}),Z(yl,{style:Q(e,ic.length+1),children:[Z(Uu,{children:`Languages`}),Z(Ju,{children:sc.map(e=>Z(S,{children:[Z(`dt`,{children:e.language}),Z(`dd`,{children:e.level})]},e.language))})]})]})]})})}function Xu(){return Z(S,{children:[Z(ju,{}),Z(vu,{}),Z(Vu,{}),Z(Yu,{}),Z(Zl,{})]})}var Zu=W(bl)`
  max-width: 920px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px);

  h1 {
    font-size: clamp(1.9rem, 4.4vw, 2.8rem);
    line-height: 1.12;
    margin: 10px 0 18px;
  }
  > p {
    line-height: 1.75;
    margin: 0 0 28px;
    max-width: 72ch;
  }
`,Qu=W.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
`,$u=W.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
  gap: 12px;
  margin: 28px 0 8px;

  div {
    ${kl}
    padding: 14px 16px;
  }
  dt {
    font-family: ${Y.mono};
    font-size: clamp(1.3rem, 2.4vw, 1.7rem);
    font-weight: 500;
    color: ${q.sun};
    white-space: nowrap;
  }
  dd {
    margin: 4px 0 0;
    font-size: 0.84rem;
    line-height: 1.4;
    color: ${q.muted};
  }
`,ed=W.section`
  margin-top: 34px;
  padding-top: 26px;
  border-top: 1px solid ${q.secondary}66;

  h2 {
    font-size: clamp(1.25rem, 2.4vw, 1.55rem);
    margin: 0;
  }
`,td=W(Al)`
  margin-top: 28px;
`;function nd(){let{slug:e}=Dr(),t=fc.findIndex(t=>t.page.slug===e);if(t===-1)return Z(Ul,{});let n=fc[t],{page:r}=n,i=fc[t-1],a=fc[t+1];return Z(_l,{curves:r.curves,tinted:!0,aurora:`tide`,children:e=>Z(Zu,{as:`article`,style:Q(e),children:[Z(Qu,{children:[Z(wl,{children:n.context}),Z(jl,{to:K.section(`work`),children:`← Selected work`})]}),Z(`h1`,{children:n.title}),Z(`p`,{children:r.intro}),n.image&&Z(Nu,{...n.image}),Z($u,{"aria-label":`Key figures`,children:r.figures.map(e=>Z(`div`,{children:[Z(`dt`,{children:e.value}),Z(`dd`,{children:e.label})]},e.value))}),r.sections.map(e=>Z(ed,{children:[Z(`h2`,{children:e.title}),Z(Nl,{children:e.points.map(e=>Z(`li`,{children:e},e))})]},e.title)),Z(Ml,{id:`technologies`,children:`Technologies`}),Z(El,{"aria-labelledby":`technologies`,children:n.tags.map(e=>Z(Dl,{children:e},e))}),n.links&&Z(td,{children:n.links.map((e,t)=>Z($,{as:Nc,href:e.href,$primary:t===0,children:[e.label,` ↗`]},e.href))}),Z(Pl,{"aria-label":`Other projects`,children:[i&&Z($,{as:I,to:K.project(i.page.slug),children:[`← `,ec(i.title)]}),a&&Z($,{as:I,to:K.project(a.page.slug),children:[ec(a.title),` →`]})]})]})})}function rd(){return Z(el,{children:Z(Zr,{children:[Z(Yr,{path:K.home,element:Z(Xu,{})}),Z(Yr,{path:K.about,element:Z(Vl,{})}),Z(Yr,{path:K.experience(`:slug`),element:Z(ql,{})}),Z(Yr,{path:K.project(`:slug`),element:Z(nd,{})}),Object.entries(pc).map(([e,t])=>Z(Yr,{path:e,element:Z(Jr,{to:t,replace:!0})},e)),Z(Yr,{path:`*`,element:Z(Ul,{})})]})})}var id=mc(window.location.hash);id&&window.history.replaceState(null,``,id);var ad=Z(S,{children:Z(Ri,{children:Z(rd,{})})}),od=document.getElementById(`root`),sd=document.querySelector(`meta[name="prerendered-path"]`)?.getAttribute(`content`),cd=window.location.pathname.replace(/\/+$/,``)||`/`;od.firstChild&&sd===cd?Kt(od,ad):(od.textContent=``,Gt(od).render(ad));