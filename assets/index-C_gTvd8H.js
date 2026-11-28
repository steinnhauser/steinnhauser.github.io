(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l,u,d={},f=[],p=/^m(i|n|o|s|text|space)$/,m=Array.isArray,h=f.slice,g=Object.assign;function _(e){e&&e.parentNode&&e.remove()}function v(e,t,n){var r,i,a,o={},s=arguments.length;for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return s>2&&(o.children=s>3?h.call(arguments,2):n),b(e,o,r,i,null)}function y(e,t,n){var r,i,a,o=g({},e.props),s=arguments.length;for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e.type!=`function`?i=t[a]:o[a]=t[a];return s>2&&(o.children=s>3?h.call(arguments,2):n),b(e.type,o,r===void 0?e.key:r,i===void 0?e.ref:i,null)}function b(n,r,i,a,o){var s={type:n,props:r,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o||++t,__i:-1,__u:0};return!o&&e.vnode&&e.vnode(s),s}function x(){return{current:null}}function S(e){return e.children}function C(e,t){this.props=e,this.context=t,this.__g=0}function w(e,t){if(t==null)return e.__?w(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!=`function`||e.props.__P?null:w(e)}function T(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),T(e)}function E(t){(8&t.__g||!(t.__g|=8)||!n.push(t)||i++)&&r==e.debounceRendering||((r=e.debounceRendering)||queueMicrotask)(D)}function D(){var t,r,o,s,c,l,u,d,f;try{for(r=1;n.length;)n.length>r&&n.sort(a),t=n.shift(),r=n.length,8&t.__g&&(s=void 0,c=void 0,l=(c=(o=t).__v).__e,u=[],d=[],(f=o.__P)&&((s=g({constructor:void 0},c)).__v=c.__v+1,e.vnode&&e.vnode(s),oe(f,s,c,o.__n,f.namespaceURI,32&c.__u?[l]:null,u,l||w(c),32&c.__u,d),s.__v=c.__v,s.__.__k[s.__i]=s,ce(u,s,d),c.__=c.__e=null,s.__e!=l&&T(s)))}finally{n.length=i=0}}function ee(e,t,n,r,i,a,o,s,c,l,u){var p,m,h,g,_,v,y=r.__k||f,b=t.length;for(c=O(n,t,y,c,b),p=0;p<b;p++)(h=n.__k[p])!=null&&(m=~h.__i&&y[h.__i]||d,h.__i=p,v=oe(e,h,m,i,a,o,s,c,l,u),g=h.__e,(m.ref!=h.ref||8&m.__u)&&(m.ref&&ue(m.ref,null,h,m),h.ref&&u.push(h.ref,h.__c||g,h)),_||=g,4&h.__u?(c=te(h,c,e,!m.__v),m.__e&&(m.__e=null)):typeof h.type==`function`&&v!==void 0?c=v:g&&(c=g.nextSibling),h.__u&=-7);return n.__e=_,c}function O(e,t,n,r,i){var a,o,s,c,l,u,d,f,p,h,g=n.length,_=g,v=0,y=!1,x=e.__k=Array(i);for(a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o!=`object`||o.constructor==String?o=x[a]=b(null,o):m(o)?o=x[a]=b(S,{children:o}):o.constructor===void 0&&o.__b?o=x[a]=b(o.type,o.props,o.key,o.ref,o.__v):x[a]=o,c=a+v,o.__=e,o.__b=e.__b+1,s=null,~(l=o.__i=ne(o,n,c,_))&&(_--,(s=n[l])&&(s.__u|=2)),s&&s.__v?(o.__u|=2,l==c-1?v--:l==c+1?v++:l!=c&&(l>c?v--:v++,y=!0)):(~l||(i>g?v--:i<g&&v++),typeof o.type!=`function`&&(o.__u|=4))):x[a]=null;if(y){for(u=[],d=[],a=0;a<i;a++)if((o=x[a])&&2&o.__u){for(f=0,p=u.length;f<p;)u[h=f+p>>1]<o.__i?f=h+1:p=h;u[f]=o.__i,d[a]=f+1}for(v=u.length;a--;)d[a]&&(d[a]==v?v--:x[a].__u|=4)}if(_)for(a=0;a<g;a++)!(s=n[a])||2&s.__u||(s.__e==r&&(r=w(s)),de(s,s));return r}function te(e,t,n,r){var i,a,o;if(typeof e.type==`function`){if(e.props.__P)return t;if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&(i[a].__=e,t=te(i[a],t,n,!1));return t}for(t&&!t.parentNode&&(t=w(e))&&!t.parentNode&&(t=null),o=t;o&&o.nodeType==8;)o=o.nextSibling;for(e.__e!=o&&(!r&&n.moveBefore&&e.__e.parentNode?n.moveBefore(e.__e,t):n.insertBefore(e.__e,t||null)),t=e.__e;(t&&=t.nextSibling)&&t.nodeType==8;);return t}function k(e,t){return t||=[],e!=null&&typeof e!=`boolean`&&(m(e)?e.some(function(e){k(e,t)}):t.push(e)),t}function ne(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l&&!(2&l.__u);if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function re(e,t,n){n??=``,t[0]==`-`?e.setProperty(t,n):e[t]=n}function ie(e,t,n,r,i){var a,o;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||re(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||re(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)(e.__e||={})[t]=n,n&&r||(o=l[t]||(l[t]=ae(t)),(e.__a||={})[t]=c,a=t!=(t=t.replace(s,`$1`)),(t=t.slice(2))[0]<`a`&&(t=t.toLowerCase()),n?e.addEventListener(t,o,a):e.removeEventListener(t,o,a));else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function ae(t){return function(n){if(this.__e){var r=this.__e[t];if(n[o]==null)n[o]=c++;else if(n[o]<this.__a[t])return;return r(e.event?e.event(n):n)}}}function oe(t,n,r,i,a,o,s,c,l,u){var d,p,h,v,y,b,x,T,E,D,O,te,k,ne,re,ie,ae,oe,ce,ue,pe=n.type;if(n.constructor!==void 0)return null;if(128&r.__u&&(l=32&r.__u,d=r.__c.__z)){if(n.__u|=l,p=o=[],d.nodeType==8)for(h=1,v=d.nextSibling;v;v=v.nextSibling){if(v.nodeType==8){if(v.data.startsWith(`$s`))h++;else if(v.data.startsWith(`/$s`)&&!--h)break}o.push(v)}else o.push(d);c=o[0]}(d=e.__b)&&d(n);n:if(typeof pe==`function`){y=s.length;try{if(D=n.props,O=(d=pe.prototype)&&d.render,te=(d=pe.contextType)&&i[d.__c],k=d?te?te.props.value:d.__:i,r.__c?2&(b=n.__c=r.__c).__g&&(b.__g|=1):(O?n.__c=b=new pe(D,k):(n.__c=b=new C(D,k),b.constructor=pe,b.render=fe),te&&te.sub(b),b.state||(b.state={}),b.__n=i,b.__g|=8,b.__h=[],b.__k=[]),O&&(b.__s||(b.__s=b.state),pe.getDerivedStateFromProps&&(b.__s==b.state&&(b.__s=g({},b.__s)),g(b.__s,pe.getDerivedStateFromProps(D,b.__s)))),x=b.props,T=b.state,b.__v=n,r.__c){if(O&&!pe.getDerivedStateFromProps&&D!==x&&b.componentWillReceiveProps&&b.componentWillReceiveProps(D,k),n.__v==r.__v&&!(8&b.__g)||!(4&b.__g)&&b.shouldComponentUpdate&&!1===b.shouldComponentUpdate(D,b.__s,k)){n.__v!=r.__v&&(b.props=D,b.state=b.__s,b.__g&=-9),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(e){e&&(e.__=n)}),f.push.apply(b.__h,b.__k),b.__k=[],b.__h.length&&s.push(b),c=w(r);break n}b.componentWillUpdate&&b.componentWillUpdate(D,b.__s,k),O&&b.componentDidUpdate&&b.__h.push(function(){b.componentDidUpdate(x,T,E)})}else O&&!pe.getDerivedStateFromProps&&b.componentWillMount&&b.componentWillMount(),O&&b.componentDidMount&&b.__h.push(b.componentDidMount);if(b.context=k,b.props=D,b.__P=t,b.__g&=-5,ne=e.__r,re=0,O)b.state=b.__s,b.__g&=-9,ne&&ne(n),d=b.render(b.props,b.state,b.context),f.push.apply(b.__h,b.__k),b.__k=[];else do b.__g&=-9,ne&&ne(n),d=b.render(b.props,b.state,b.context),b.state=b.__s;while(8&b.__g&&++re<25);b.state=b.__s,b.getChildContext&&(i=g({},i,b.getChildContext())),O&&r.__c&&b.getSnapshotBeforeUpdate&&(E=b.getSnapshotBeforeUpdate(x,T)),ie=d&&d.type===S&&d.key==null?d.props.children:d,D.__P&&(d=c,a=(t=D.__P).namespaceURI,l=o=null,r.props&&r.props.__P!=t&&(r.__k.some(function(e){e&&de(e,e)}),r.__k=null),c=r.__k?w(r,0):null),c=ee(t,m(ie)?ie:[ie],n,r,i,a,o,s,c,l,u),D.__P&&(n.__e=null,c=d),n.__u&=-161,128&r.__u&&(b.__z=null),p&&p.some(_),b.__h.length&&s.push(b),1&b.__g&&(b.__g&=-4)}catch(t){if(s.length=y,n.__v=null,l||o){if(t.then){if(ae=0,n.__u|=l?160:128,o){for(~(ce=o.indexOf(c||void 0))||(ce=o.length);(ue=o[ce-1])&&ue.nodeType==8;)ce--;for(;ce<o.length;ce++)if(ue=o[ce]){if(o[ce]=null,ue.nodeType==8){if(ue.data.startsWith(`$s`))ae++||(oe=ue);else if(ae&&ue.data.startsWith(`/$s`)&&!--ae){c=ue;break}}else if(!ae)break}}if(!oe){for(;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;oe=c}n.__c.__z||(n.__c.__z=oe),n.__e=c}else o&&o.some(_)}else n.__e=r.__e;n.__k||=r.__k||[],t.then||se(n),e.__e(t,n,r)}}else c=n.__e=le(r.__e,n,r,i,a,o,s,l,u,t);return(d=e.diffed)&&d(n),128&n.__u?void 0:c}function se(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(se))}function ce(t,n,r){for(var i=0;i<r.length;)ue(r[i++],r[i++],r[i++]);e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function le(t,n,r,i,a,o,s,c,l,u){var f,g,v,y,b,x,S,C,T,E=r.props||d,D=n.props,O=n.type;if(O==`svg`?a=`http://www.w3.org/2000/svg`:O==`math`?a=`http://www.w3.org/1998/Math/MathML`:a||=`http://www.w3.org/1999/xhtml`,o){for(f=0;f<o.length;f++)if((b=o[f])&&(O?b.localName==O:b.nodeType==3)){t=b,o[f]=null;break}}if(!t){if(C=u.ownerDocument||document,!O)return C.createTextNode(D);t=C.createElementNS(a,O,D.is&&D),c&&=(e.__m&&e.__m(n,o),!1),o=null}if(O){if(u=O==`template`?t.content:t,o=O==`textarea`&&D.defaultValue!=null?null:o&&h.call(u.childNodes),!c&&o)for(E={},f=0;f<t.attributes.length;f++)E[(b=t.attributes[f]).name]=b.value;for(f in E)b=E[f],f==`dangerouslySetInnerHTML`?v=b:f==`children`||f in D||f==`value`&&`defaultValue`in D||f==`checked`&&`defaultChecked`in D||ie(t,f,null,b,a);for(f in T=1&r.__u,D)b=D[f],f==`children`?y=b:f==`dangerouslySetInnerHTML`?g=b:f==`value`?x=b:f==`checked`?S=b:c&&typeof b!=`function`||!(E[f]!==b||T&&b!=null)||ie(t,f,b,E[f],a);g?(c||v&&(g.__html==v.__html||g.__html==t.innerHTML)||(t.innerHTML=g.__html),n.__k=[]):(v&&(t.textContent=``),(O==`foreignObject`||a==`http://www.w3.org/1998/Math/MathML`&&p.test(O))&&(a=`http://www.w3.org/1999/xhtml`),ee(u,m(y)?y:[y],n,r,i,a,o,s,o?o[0]:r.__k&&w(r,0),c,l),o&&o.some(_)),c&&O!=`textarea`||(f=`value`,O==`progress`&&x==null?t.removeAttribute(f):x==null||x===t[f]&&(O!=`progress`||x)||ie(t,f,x,E[f],a),f=`checked`,S!=null&&S!=t[f]&&ie(t,f,S,E[f],a))}else E===D||c&&t.data==D||(t.data=D);return t}function ue(t,n,r,i){try{typeof t==`function`?n?n.__x=t(n)||1:(i&&=i.__c||i.__e)&&(n=i.__x)&&(i.__x=null,typeof n==`function`?n():t(null)):t.current=n}catch(t){e.__e(t,r)}}function de(t,n,r){var i,a;if(e.unmount&&e.unmount(t),!(i=t.ref)||i.current&&i.current!=t.__e||ue(i,null,n,t),i=t.__c){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){e.__e(t,n)}i.__P=i.__n=null}if(i=t.__k)for(a=0;a<i.length;a++)i[a]&&de(i[a],n,typeof t.type!=`function`||r&&!t.props.__P);(i=t.__e)&&(r||_(i),i.__e&&(i.__e=null)),t.__e=t.__c=t.__=null}function fe(e,t,n){return this.constructor(e,n)}function pe(t,n){var r,i,a,o;e.__&&e.__(t,n),n.nodeType==9&&(n=n.documentElement),i=(r=t&&32&t.__u)?null:n.__k,n.__k=b(S,{children:[t]}),a=[],o=[],oe(n,n.__k,i||d,d,n.namespaceURI,i?null:n.firstChild?h.call(n.childNodes):null,a,i?i.__e:n.firstChild,r,o),ce(a,n.__k,o),n.__k.props.children=null}function me(e,t){e&&typeof e==`object`&&(e.__u|=32),pe(e,t)}function A(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__g|=4,E(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+u++,t.__=e,t.Provider=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}function he(e){return e.children}function ge(e,t){return b(he,{__P:t,children:e})}e={__e:function(e,t,n,r){for(var a,o,s;t=t.__;)if((a=t.__c)&&!(1&a.__g)){a.__g|=4;try{if((o=a.constructor)&&o.getDerivedStateFromError&&(a.setState(o.getDerivedStateFromError(e)),s=8&a.__g),a.componentDidCatch&&(a.componentDidCatch(e,r||{}),s=8&a.__g),s)return void(a.__g|=2)}catch(t){e=t,s=0}}throw i=0,e}},t=0,C.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=g({},this.state)),typeof e==`function`&&(e=e(g({},n),this.props)),e&&(g(n,e),this.__v&&(t&&this.__k.push(t),E(this)))},C.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),E(this))},C.prototype.render=S,n=[],i=0,a=function(e,t){return e.__v.__b-t.__v.__b},o=Symbol(),s=/(PointerCapture)$|Capture$/i,c=0,l={},u=0;var _e,j,ve,ye,be=Object.is,xe=0,Se=[],Ce=[],M=e,we=M.__b,Te=M.__r,Ee=M.diffed,De=M.__c,Oe=M.unmount,ke=M.__;function Ae(e,t){M.__h&&M.__h(j,e,xe||t),xe=0;var n=j.__H||(j.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function je(e){return xe=1,Me(Ke,e)}function Me(e,t,n){var r=Ae(_e++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ke(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);be(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=j,!j.__f)){j.__f=!0;var i=j.shouldComponentUpdate;j.shouldComponentUpdate=function(e,t,n){var r=this.__H;if(!r)return!0;var a=!1,o=this.props!=e;if(r.__.some(function(e){e.__N&&(a=!0,be(e.__[0],e.__N[0])||(o=!0))}),i){var s=i.call(this,e,t,n);return a?s||o:s}return!a||o}}return r.__}function N(e,t){var n=Ae(_e++,3);!M.__s&&Ge(n.__H,t)&&(n.__P=!0,n.__=e,n.u=t,j.__H.__h.push(n))}function Ne(e,t){var n=Ae(_e++,4);!M.__s&&Ge(n.__H,t)&&(n.__P=!1,n.__=e,n.u=t,j.__h.push(n))}function Pe(e){return xe=5,P(function(){return{current:e}},[])}function Fe(e,t,n){xe=6,Ne(function(){if(typeof e==`function`){var n=e(t());return function(){e(null),n&&typeof n==`function`&&n()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function P(e,t){var n=Ae(_e++,7);return Ge(n.__H,t)&&(n.__=e(),n.__H=t),n.__}function Ie(e,t){return xe=8,P(function(){return e},t)}function F(e){var t=j.context[e.__c],n=Ae(_e++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(j)),t.props.value):e.__}function Le(e,t){M.useDebugValue&&M.useDebugValue(t?t(e):e)}function Re(){var e=Ae(_e++,11);if(!e.__){for(var t=j.__v;!t.__m&&t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__=`P`+n[0]+`-`+n[1]++}return e.__}function ze(){var e;do{for(;e=Ce.shift();)try{Ue(e)}catch(t){M.__e(t,{__:(e=e.__P)&&e.__v})}for(;e=Se.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Ue),t.__h.some(We),t.__h=[]}catch(n){t.__h=[],M.__e(n,e.__v)}}}while(Ce.length)}M.__b=function(e){j=null,we&&we(e)},M.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ke&&ke(e,t)},M.__r=function(e){Te&&Te(e),_e=0;var t=(j=e.__c).__H;t&&(ve==j?j.__h=[]:(t.__h.some(Ue),t.__h.some(We),_e=0),t.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})),ve=j},M.diffed=function(e){Ee&&Ee(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&He(Se.push(t)),t.__H.__.some(function(e){e.u&&(e.__H=e.u)})),ve=j=null},M.__c=function(e,t){t.some(function(e){try{e.__h.some(Ue),e.__h=e.__h.filter(function(e){return!e.__||We(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],M.__e(n,e.__v)}}),De&&De(e,t)},M.unmount=function(e){Oe&&Oe(e);var t,n,r=e.__c;r&&r.__H&&(r.__H.__.some(function(r){try{if(r.__P&&r.__c){if(n===void 0){for(n=e.__;n&&(!n.__c||!n.__c.__P);)n=n.__;n&&=n.__c}r.__P=n,He(Ce.push(r))}else Ue(r)}catch(e){t=e}}),r.__H=void 0,t&&M.__e(t,r.__v))};var Be=typeof requestAnimationFrame==`function`;function Ve(e){var t,n=function(){clearTimeout(r),Be&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Be&&(t=requestAnimationFrame(n))}function He(e){e!=1&&ye==M.requestAnimationFrame||((ye=M.requestAnimationFrame)||Ve)(ze)}function Ue(e){var t=j,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),j=t}function We(e){var t=j;e.__c=e.__(),j=t}function Ge(e,t){return!e||e.length!=t.length||t.some(function(t,n){return!be(t,e[n])})}function Ke(e,t){return typeof t==`function`?t(e):t}var qe=function(e,t,n){return e==null?null:k(k(e).map(t.bind(n)))},Je={map:qe,forEach:qe,count:function(e){return e?k(e).length:0},only:function(e){var t=k(e);if(t.length!=1)throw`Children.only`;return t[0]},toArray:k},Ye=Object.assign;function Xe(e,t){for(var n in e)if(n!=`__source`&&e[n]!==t[n])return!0;for(var r in t)if(r!=`__source`&&!(r in e))return!0;return!1}var Ze=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;function Qe(){function e(e,t){this.props=e,this.context=t}return(e.prototype=new C).isPureReactComponent=!0,e.prototype.shouldComponentUpdate=function(e,t){return Xe(this.props,e)||Xe(this.state,t)},e}var $e=Qe(),et=Symbol.for(`react.forward_ref`);function tt(e){function t(t){var n=Ye({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=et,t.render=e,t.prototype.isReactComponent=!0,t.displayName=`ForwardRef(`+(e.displayName||e.name)+`)`,t}function nt(e){e()}function rt(e){return e}function it(){return[!1,nt]}var at=Ne;function ot(e){var t=Pe(e);return t.current=e,function(){return t.current.apply(void 0,arguments)}}function st(e,t){function n(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:Xe(this.props,e)}function r(t){return this.shouldComponentUpdate=n,v(e,t)}return r.displayName=`Memo(`+(e.displayName||e.name)+`)`,r.prototype.isReactComponent=!0,r.type=e,r}function ct(e,t){var n=ge(e,t);return n.containerInfo=t,n}var lt,ut,dt,ft=Symbol.for(`react.element`),pt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,mt=/[A-Z0-9]/g,ht=typeof document<`u`,gt=wt(function(t,n,r){var i=e.__s||ut?(r||n)():n(),a=je({t:{__:i,u:n}}),o=a[0].t,s=a[1];return Ne(function(){o.__=i,o.u=n,_t(o)&&s({t:o})},[t,i,n]),N(function(){return _t(o)&&s({t:o}),t(function(){_t(o)&&s({t:o})})},[t]),i});function _t(e){try{return!Object.is(e.__,e.u())}catch{return!0}}var vt=function(e){return/fil|che|rad/.test(e)};function yt(e,t,n){return t.__k??(t.textContent=``),pe(e,t),typeof n==`function`&&n(),e?e.__c:null}function bt(e,t,n){return me(e,t),typeof n==`function`&&n(),e?e.__c:null}C.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(C.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var xt=e.event;e.event=function(e){return xt&&(e=xt(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var St={configurable:!0,get:function(){return this.class}},Ct=e.vnode;function wt(t){if(!dt){dt=!0;var n=e.__r;e.__r=function(e){n&&n(e),32&e.__u&&(ut=e),lt=e.__c};var r=e.diffed;e.diffed=function(e){r&&r(e),lt=null,ut==e&&(ut=null)}}return t}e.vnode=function(e){if(typeof e.type==`string`)(function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var a in t){var o=t[a];if(!(a==`value`&&`defaultValue`in t&&o==null||ht&&a==`children`&&n==`noscript`||a==`class`||a==`className`)){if(a==`style`&&typeof o==`object`){var s=void 0;for(var c in o)typeof o[c]!=`number`||Ze.test(c)||(s||=o=Ye({},o),o[c]+=`px`)}else if(a==`defaultValue`&&`value`in t&&t.value==null)a=`value`;else if(a==`download`&&!0===o)o=``;else if(a==`translate`&&o===`no`)o=!1;else if(a[0]==`o`&&a[1]==`n`){var l=a.toLowerCase();l==`ondoubleclick`?a=`ondblclick`:l!=`onchange`||n!=`input`&&n!=`textarea`||vt(t.type)?l==`onfocus`?a=`onfocusin`:l==`onblur`&&(a=`onfocusout`):l=a=`oninput`,l==`oninput`&&r[a=l]&&(a=`oninputCapture`)}else i&&pt.test(a)?a=a.replace(mt,`-$&`).toLowerCase():o===null&&(o=void 0);r[a]=o}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=k(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=k(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",St)):t.className&&(r.class=r.className=t.className),e.props=r})(e);else if(typeof e.type==`function`&&(`ref`in e.props&&`prototype`in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=Ye({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!(`ref`in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=ft,Ct&&Ct(e)};var Tt=wt(function(e){if(e.then){if(e.status==`fulfilled`)return e.value;throw e.status==`rejected`?e.reason:(e.status||(e.status=`pending`,e.then(function(t){e.status=`fulfilled`,e.value=t},function(t){e.status=`rejected`,e.reason=t})),e)}var t=e.__c,n=lt.__n[t];return n?(lt[t]||(lt[t]=!0,n.sub(lt)),n.props.value):e.__}),Et={ReactCurrentDispatcher:{current:{readContext:Tt,useCallback:Ie,useContext:F,useDebugValue:Le,useDeferredValue:rt,useEffect:N,useId:Re,useImperativeHandle:Fe,useInsertionEffect:at,useLayoutEffect:Ne,useMemo:P,useReducer:Me,useRef:Pe,useState:je,useSyncExternalStore:gt,useTransition:it}}};function Dt(e,t,n){if(e){var r=e.__c&&e.__c.__H;r&&(r.__.forEach(function(e){e.__P!=null&&(typeof e.__c==`function`&&e.__c(),e.__c=e.__H=void 0)}),r.__h=e.__c.__h=[]),typeof e.type==`string`&&(e.__u|=8),(e=Ye({constructor:void 0},e)).__c!=null&&(e.__c.__P==n&&(e.__c.__P=t),e.__c.__g|=4,e.__c=e.ref=null),e.__k=e.__k&&e.__k.map(function(e){return Dt(e,t,n)})}return e}function Ot(e,t,n){return e&&n&&(typeof e.type==`string`&&(e.__u|=1),e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return Ot(e,t,n)}),e.__c&&e.__c.__P==t&&(e.__e&&n.appendChild(e.__e),e.__c.__g|=4,e.__c.__P=n)),e}function kt(){function t(){this.__u=0,this.i=null,this.__b=null}return function(){var t=e.__e;e.__e=function(e,n,r,i){if(e.then){for(var a,o=n;o=o.__;)if((a=o.__c)&&a.__c)return r&&!r.__c&&(n.__c.__H=void 0),a.__c(e,n)}t(e,n,r,i)};var n=e.unmount;e.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),n&&n(e)}}(),(t.prototype=new C).__c=function(e,t){var n=this,r=t.__c;this.i??=[],this.i.push(r);var i=!1,a=function(){!i&&n.__P&&(i=!0,r.__R=null,s())};r.__R=a;var o=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e=n.state.__a;n.__v.__k[0]=Ot(e,e.__c.__P,e.__c.__O)}var t;for(n.setState({__a:n.__b=null});t=n.i.pop();)t.__P=o,t.forceUpdate()}};this.__u++||32&t.__u||this.setState({__a:this.__b=this.__v.__k[0]}),e.then(a,a)},t.prototype.componentWillUnmount=function(){this.i=[],this.state.__a&&(this.__v.__k[0]=this.state.__a)},t.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=Dt(this.__b,n,r.__O=r.__P)}this.__b=null}return[v(S,null,t.__a?null:e.children),t.__a&&v(S,null,e.fallback)]},t}var At=kt();function jt(e){var t,n,r,i=null;function a(a){if(t||(t=e()).then(function(e){e&&(i=e.default||e),r=!0},function(e){n=e,r=!0}),n)throw n;if(!r)throw t;return i?v(i,a):null}return a.displayName=`Lazy`,a}function Mt(e){return v.bind(null,e)}function Nt(e){return!!e&&e.$$typeof===ft}function Pt(e){return Nt(e)&&e.type==S}function Ft(e){return!!e&&typeof e.displayName==`string`&&e.displayName.indexOf(`Memo(`)==0}function It(e){return Nt(e)?y.apply(null,arguments):e}function Lt(e){return!!e.__k&&(pe(null,e),!0)}function Rt(e){return e&&(e.__v&&e.__v.__e||e.nodeType==1&&e)||null}var zt=function(t,n){var r,i=e.debounceRendering;e.debounceRendering=function(e){r=e};try{var a=t(n);return r&&r(),a}finally{e.debounceRendering=i}};function Bt(e,t){return e(t)}var Vt={useState:je,useId:Re,useReducer:Me,useEffect:N,useLayoutEffect:Ne,useInsertionEffect:at,useTransition:it,useDeferredValue:rt,useSyncExternalStore:gt,useEffectEvent:ot,startTransition:nt,useRef:Pe,useImperativeHandle:Fe,useMemo:P,useCallback:Ie,useContext:F,use:Tt,useDebugValue:Le,version:`19.0.0`,Children:Je,render:yt,hydrate:bt,unmountComponentAtNode:Lt,createPortal:ct,createElement:v,createContext:A,createFactory:Mt,cloneElement:It,createRef:x,Fragment:S,isValidElement:Nt,isElement:Nt,isFragment:Pt,isMemo:Ft,findDOMNode:Rt,Component:C,PureComponent:$e,memo:st,forwardRef:tt,flushSync:zt,unstable_batchedUpdates:Bt,StrictMode:S,Suspense:At,lazy:jt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Et};function Ht(e){return{render:function(t){yt(t,e)},unmount:function(){Lt(e)}}}function Ut(e,t){return bt(t,e),Ht(e)}var Wt=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Gt=/^[\\/]{2}/;function Kt(e,t){return t+e.replace(/\\/g,`/`)}var qt=`popstate`;function Jt(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function Yt(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return $t(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:en(t)}return nn(t,n,null,e)}function I(e,t){if(e===!1||e==null)throw Error(t)}function Xt(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function Zt(){return Math.random().toString(36).substring(2,10)}function Qt(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function $t(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?tn(t):t,state:n,key:t&&t.key||r||Zt(),mask:i}}function en({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function tn(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function nn(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=Jt(e)?e:$t(h.location,e,t);n&&n(r,e),l=u()+1;let d=Qt(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=Jt(e)?e:$t(h.location,e,t);n&&n(r,e),l=u();let i=Qt(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return rn(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(qt,d),c=e,()=>{i.removeEventListener(qt,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function rn(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),I(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:en(t);return i=i.replace(/ $/,`%20`),!n&&Gt.test(i)&&(i=r+i),new URL(i,r)}function an(e,t,n=`/`){return on(e,t,n,!1)}function on(e,t,n,r,i){let a=Dn((typeof t==`string`?tn(t):t).pathname||`/`,n);if(a==null)return null;let o=i??sn(e),s=null,c=En(a);for(let e=0;s==null&&e<o.length;++e)s=Sn(o[e],c,r);return s}function sn(e){let t=cn(e);return un(t),t}function cn(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;I(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Fn([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(I(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),cn(e.children,t,u,l,o)),(e.path!=null||e.index)&&t.push({path:l,score:bn(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Tn(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ln(e.path))a(e,t,!0,n)}),t}function ln(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ln(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function un(e){e.sort((e,t)=>e.score===t.score?xn(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var dn=/^:[\w-]+$/,fn=/^:[\w-]+/,pn=3.5,mn=3,hn=2,gn=1,_n=10,vn=-2,yn=e=>e===`*`;function bn(e,t){let n=e.split(`/`),r=n.length;return n.some(yn)&&(r+=vn),t&&(r+=hn),n.filter(e=>!yn(e)).reduce((e,t)=>e+(dn.test(t)?mn:fn.test(t)?pn:t===``?gn:_n),r)}function xn(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Sn(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?wn(u,l,s.matcher,s.compiledParams):Cn(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Cn({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Fn([a,d.pathname]),pathnameBase:Ln(Fn([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Fn([a,d.pathnameBase]))}return o}function Cn(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Tn(e.path,e.caseSensitive,e.end);return wn(e,t,n,r)}function wn(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=In(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=In(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Tn(e,t=!1,n=!0){Xt(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(?=\/|$|\()/g,`(?:/$1)?`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function En(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return Xt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Dn(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function On(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?tn(e):e,a;return n?(n=Pn(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?kn(n.substring(1),`/`):kn(n,t)):a=t,{pathname:a,search:Rn(r),hash:zn(i)}}function kn(e,t){let n=In(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function An(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jn(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Mn(e){let t=jn(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Nn(e,t,n,r=!1){let i;typeof e==`string`?i=tn(e):(i={...e},I(!i.pathname||!i.pathname.includes(`?`),An(`?`,`pathname`,`search`,i)),I(!i.pathname||!i.pathname.includes(`#`),An(`#`,`pathname`,`hash`,i)),I(!i.search||!i.search.includes(`#`),An(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=On(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Pn=e=>e.replace(/[\\/]{2,}/g,`/`),Fn=e=>Pn(e.join(`/`));function In(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Ln=e=>In(e).replace(/^\/*/,`/`),Rn=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,zn=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Bn=class{status;statusText;data;error;internal;constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Vn(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Hn(e){return Fn(e.map(e=>e.route.path).filter(Boolean))||`/`}var Un=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Wn(e,t){let n=e;if(typeof n!=`string`||!Wt.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Un)try{let e=new URL(window.location.href),r=Gt.test(n)?new URL(Kt(n,e.protocol)):new URL(n),a=Dn(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{Xt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}var Gn=new URL(`http://localhost`);function Kn(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),Gn)}catch{return Gn}}function qn(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function Jn(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function Yn(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!qn(i,n),s=!qn(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Jn(e,i)||!qn(i,a)))throw Error(`External navigation is not allowed`)}var Xn=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Xn);var Zn=[`GET`,...Xn];new Set(Zn);var Qn=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function $n(e){try{return Qn.includes(new URL(e).protocol)}catch{return!1}}var er=A(null);er.displayName=`DataRouter`;var tr=A(null);tr.displayName=`DataRouterState`;var nr=A(null);nr.displayName=`DataRouterData`;var rr=A(null);rr.displayName=`DataRouterNavigation`;var ir=A(!1);function ar(){return F(ir)}var or=A({isTransitioning:!1});or.displayName=`ViewTransition`;var sr=A(null);sr.displayName=`Fetchers`;var cr=A(null);cr.displayName=`Await`;var lr=A(null);lr.displayName=`Navigation`;var ur=A(null);ur.displayName=`Location`;var dr=A({outlet:null,matches:[],isDataRoute:!1});dr.displayName=`Route`;var fr=A(!1);fr.displayName=`IsDataRoute`;var pr=A(void 0);pr.displayName=`RouteId`;var mr=A(null);mr.displayName=`RouteError`;var hr=`REACT_ROUTER_ERROR`,gr=`REDIRECT`,_r=`ROUTE_ERROR_RESPONSE`;function vr(e){if(e.startsWith(`${hr}:${gr}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function yr(e){if(e.startsWith(`${hr}:${_r}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Bn(t.status,t.statusText,t.data)}catch{}}function br(e,{relative:t}={}){I(xr(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=F(lr),{hash:i,pathname:a,search:o}=Er(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Fn([n,a])),r.createHref({pathname:s,search:o,hash:i})}function xr(){return F(ur)!=null}function L(){return I(xr(),`useLocation() may be used only in the context of a <Router> component.`),F(ur).location}var Sr=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Cr(){return F(fr)?Hr():wr()}function wr(){I(xr(),`useNavigate() may be used only in the context of a <Router> component.`);let e=F(er),{basename:t,navigator:n}=F(lr),{matches:r}=F(dr),{pathname:i}=L(),a=JSON.stringify(Mn(r)),o=Pe(!1);return Ne(()=>{o.current=!0}),Ie((r,s={})=>{if(Xt(o.current,Sr),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Nn(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Fn([t,c.pathname])),Yn(typeof r==`string`?r:en(r),n.createHref(c),Kn(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}A(null);function Tr(){let{matches:e}=F(dr);return e[e.length-1]?.params??{}}function Er(e,{relative:t}={}){let{matches:n}=F(dr),{pathname:r}=L(),i=JSON.stringify(Mn(n));return P(()=>Nn(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Dr(e,t){return Or(e,t)}function Or(e,t,n){I(xr(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=F(lr),{matches:i}=F(dr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:`/`;a&&a.route;let c=L(),l;if(t){let e=typeof t==`string`?tn(t):t;I(s===`/`||e.pathname?.startsWith(s),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${e.pathname}" was given in the \`location\` prop.`),l=e}else l=c;let u=l.pathname||`/`,d=u;if(s!==`/`){let e=s.replace(/^\//,``).split(`/`);d=`/`+u.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let f;f=n?n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):n.router.match(n.state.location):an(e,{pathname:d});let p=Fr(f&&f.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Fn([s,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?s:Fn([s,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&p?v(ur.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...l},navigationType:`POP`}},p):p}function kr(){let e=Vr(),t=Vn(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return v(S,null,v(`h2`,null,`Unexpected Application Error!`),v(`h3`,{style:{fontStyle:`italic`}},t),n?v(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var Ar=v(kr,null),jr=class extends C{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=ir;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=yr(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v(dr.Provider,{value:this.props.routeContext},v(fr.Provider,{value:this.props.routeContext.isDataRoute},v(pr.Provider,{value:this.props.routeContext.matches[this.props.routeContext.matches.length-1]?.route.id},v(mr.Provider,{value:e,children:this.props.component}))));return this.context?v(Nr,{error:e},t):t}},Mr=new WeakMap;function Nr({children:e,error:t}){let{basename:n,navigator:r}=F(lr);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=vr(t.digest);if(e){let i=Mr.get(t);if(i)throw i;let a=Wn(e.location,n),o=a.absoluteURL||a.to;if(Yn(e.location,o,Kn(r),`allow-explicit`),$n(o))throw Error(`Invalid redirect location`);if(Un&&!Mr.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Mr.set(t,n),n}}return v(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function Pr({routeContext:e,match:t,children:n}){let r=F(er);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v(dr.Provider,{value:e},v(fr.Provider,{value:e.isDataRoute},v(pr.Provider,{value:t.route.id},n)))}function Fr(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);I(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Hn(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ar,o&&(s<0&&c===0?(Wr(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v(n.route.Component,null):n.route.element?n.route.element:e,v(Pr,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v(jr,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ir(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lr(e){let t=F(er);return I(t,Ir(e)),t}function Rr(e){let t=F(tr);return I(t,Ir(e)),t}function zr(e){let t=F(nr);return I(t,Ir(e)),t}function Br(e){let t=F(pr);return I(t,`${e} can only be used on routes that contain a unique "id"`),t}function Vr(){let e=F(mr),t=zr(`useRouteError`),n=Br(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Hr(){let{router:e}=Lr(`useNavigate`),t=Br(`useNavigate`),n=Pe(!1);return Ne(()=>{n.current=!0}),Ie(async(r,i={})=>{Xt(n.current,Sr),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ur={};function Wr(e,t,n){!t&&!Ur[e]&&(Ur[e]=!0,Xt(!1,n))}st(Gr);function Gr({routes:e,manifest:t,state:n,isStatic:r,onError:i}){let a=F(er);return I(a,`You must render this element inside a <DataRouterContext.Provider> element`),Or(e,void 0,{router:a.router,manifest:t,state:n,isStatic:r,onError:i})}function Kr({to:e,replace:t,state:n,relative:r}){I(xr(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=F(lr);Xt(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=F(dr),{pathname:s}=L(),c=Cr(),l=Nn(e,Mn(o),s,r===`path`);Yn(typeof e==`string`?e:en(e),a.createHref(l),Kn(a),`reject`);let u=JSON.stringify(l);return N(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function qr(e){I(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Jr({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){I(!xr(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=P(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=tn(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=P(()=>{let e=Dn(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return Xt(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v(lr.Provider,{value:c},v(ur.Provider,{children:t,value:h}))}function Yr({children:e,location:t}){return Dr(Xr(e),t)}function Xr(e,t=[]){let n=[];return Je.forEach(e,(e,r)=>{if(!Nt(e))return;let i=[...t,r];if(e.type===S){n.push.apply(n,Xr(e.props.children,i));return}I(e.type===qr,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);let a=e.props;I(!a.index||!a.children,`An index route cannot have child routes.`);let o={id:a.id||i.join(`-`),caseSensitive:a.caseSensitive,element:a.element,Component:a.Component,index:a.index,path:a.path,middleware:a.middleware,loader:a.loader,action:a.action,hydrateFallbackElement:a.hydrateFallbackElement,HydrateFallback:a.HydrateFallback,errorElement:a.errorElement,ErrorBoundary:a.ErrorBoundary,shouldRevalidate:a.shouldRevalidate,handle:a.handle,lazy:a.lazy};a.children&&(o.children=Xr(a.children,i)),n.push(o)}),n}var Zr=`application/x-www-form-urlencoded`;function Qr(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function $r(e){return Qr(e)&&e.tagName.toLowerCase()===`button`}function ei(e){return Qr(e)&&e.tagName.toLowerCase()===`form`}function ti(e){return Qr(e)&&e.tagName.toLowerCase()===`input`}function ni(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ri(e,t){return e.button===0&&(!t||t===`_self`)&&!ni(e)}var ii=null;function ai(){if(ii===null)try{new FormData(document.createElement(`form`),0),ii=!1}catch{ii=!0}return ii}var oi=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function si(e){return e!=null&&!oi.has(e)?(Xt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zr}"`),null):e}function ci(e,t){let n,r,i,a,o;if(ei(e)){let o=e.getAttribute(`action`);r=o?Dn(o,t):null,n=e.getAttribute(`method`)||`get`,i=si(e.getAttribute(`enctype`))||Zr,a=new FormData(e)}else if($r(e)||ti(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Dn(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||`get`,i=si(e.getAttribute(`formenctype`))||si(o.getAttribute(`enctype`))||Zr,a=new FormData(o,e),!ai()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Qr(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=`get`,r=null,i=Zr,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function li(e,t){if(e===!1||e==null)throw Error(t)}function ui(e,t){let n=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n.pathname=n.pathname.endsWith(`/`)?`${n.pathname}_.${t}`:`${n.pathname}.${t}`,n}var di=`modulepreload`,fi=function(e){return`/`+e},pi={},mi=function(e){return e.pathname.endsWith(`.css`)},hi=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},gi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=fi(t,n);let r=s(t),i=mi(r);return hi(pi,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:di,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};async function _i(e,t){if(e.id in t)return t[e.id];try{let n=await gi(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vi(e){return e!=null&&typeof e.page==`string`}function yi(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function bi(e,t,n){return Ti((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await _i(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(yi).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function xi(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function Si(e,t,{includeHydrateFallback:n}={}){return Ci(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Ci(e){return[...new Set(e)]}function wi(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Ti(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!vi(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(wi(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}var Ei=A(void 0);Ei.displayName=`FrameworkContext`;function Di(){let e=F(Ei);return li(e,`You must render this element inside a <HydratedRouter> element`),e}function Oi(e,t){let n=F(Ei),[r,i]=je(!1),[a,o]=je(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=Pe(null);N(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),N(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:ki(s,p),onBlur:ki(c,m),onMouseEnter:ki(l,p),onMouseLeave:ki(u,m),onTouchStart:ki(d,p)}]:[a,f,{}]:[!1,f,{}]}function ki(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ai({page:e,...t}){let n=ar(),{nonce:r}=Di(),{router:i}=Lr(`PrefetchPageLinks`),a=P(()=>i.match(e),[i,i.routes,e]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),v(n?Mi:Ni,{page:e,matches:a,...t})):null}function ji(e){let{manifest:t,routeModules:n}=Di(),[r,i]=je([]);return N(()=>{let r=!1;return bi(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Mi({page:e,matches:t,...n}){let r=L();return v(S,null,P(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ui(e,`rsc`),i=!1,a=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?i=!0:a.push(e.route.id);return i&&a.length>0&&n.searchParams.set(`_routes`,a.join(`,`)),[n.pathname+n.search]},[e,r,t]).map(e=>v(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Ni({page:e,matches:t,...n}){let r=L(),{manifest:i,routeModules:a}=Di(),{matches:o}=Rr(`PrefetchPageLinks`),{loaderData:s}=zr(`PrefetchPageLinks`),c=P(()=>xi(e,t,o,i,r,`data`),[e,t,o,i,r]),l=P(()=>xi(e,t,o,i,r,`assets`),[e,t,o,i,r]),u=P(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,o=!1;if(t.forEach(e=>{let t=i.routes[e.route.id];t&&t.hasLoader&&(!c.some(t=>t.route.id===e.route.id)&&e.route.id in s&&a[e.route.id]?.shouldRevalidate||t.hasClientLoader?o=!0:n.add(e.route.id))}),n.size===0)return[];let l=ui(e,`data`);return o&&n.size>0&&l.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[l.pathname+l.search]},[s,r,i,c,t,e,a]),d=P(()=>Si(l,i),[l,i]),f=ji(l);return v(S,null,u.map(e=>v(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),d.map(e=>v(`link`,{key:e,rel:`modulepreload`,href:e,...n})),f.map(({key:e,link:t})=>v(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Pi(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var Fi=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Fi&&(window.__reactRouterVersion=`8`)}catch{}function Ii({basename:e,children:t,useTransitions:n,window:r}){let i=Pe(null);i.current??=Yt({window:r,v5Compat:!0});let a=i.current,[o,s]=je({action:a.action,location:a.location}),c=Ie(e=>{n===!1?s(e):nt(()=>s(e))},[n]);return Ne(()=>a.listen(c),[a,c]),v(Jr,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var R=tt(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=F(lr),y=typeof l==`string`&&Wt.test(l),b=Wn(l,h);l=b.to;let x=br(l,{relative:r}),C=L(),w=null;if(o){let e=Nn(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Fn([h,e.pathname])),w=g.createHref(e)}let[T,E,D]=Oi(n,p),ee=zi(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||ee(t)}let te=!(b.isExternal||i),k=v(`a`,{...p,...D,href:(te?w:void 0)||b.absoluteURL||x,onClick:te?O:e,ref:Pi(m,E),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return T&&!y?v(S,null,k,v(Ai,{page:x})):k});R.displayName=`Link`;var Li=tt(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Er(a,{relative:c.relative}),d=L(),f=F(rr),{navigator:p,basename:m}=F(lr),h=f!=null&&Wi(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f?.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Dn(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(b)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return v(R,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Li.displayName=`NavLink`;var Ri=tt(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=`get`,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=F(lr),g=Hi(),_=Ui(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&Wt.test(s);return v(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?nt(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Ri.displayName=`Form`;function zi(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=Cr(),d=L(),f=Er(e,{relative:o});return Ie(p=>{if(ri(p,t)){p.preventDefault();let t=n===void 0?en(d)===en(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?nt(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Bi=0,Vi=()=>`__${String(++Bi)}__`;function Hi(){let{router:e}=Lr(`useSubmit`),{basename:t}=F(lr),n=Br(`useSubmit`),r=e.fetch,i=e.navigate;return Ie(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=ci(e,t);a.navigate===!1?await r(a.fetcherKey||Vi(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ui(e,{relative:t}={}){let{basename:n}=F(lr),r=F(dr);I(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Er(e||`.`,{relative:t})},o=L();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Fn([n,a.pathname])),en(a)}function Wi(e,{relative:t}={}){let n=F(or);I(n!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Lr(`useViewTransitionState`),i=Er(e,{relative:t});if(!n.isTransitioning)return!1;let a=Dn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Dn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cn(i.pathname,o)!=null||Cn(i.pathname,a)!=null}var z=`-ms-`,Gi=`-moz-`,B=`-webkit-`,Ki=`comm`,qi=`rule`,Ji=`decl`,Yi=`@import`,Xi=`@namespace`,Zi=`@keyframes`,Qi=`@layer`,$i=Math.abs,ea=String.fromCharCode,ta=Object.assign;function na(e,t){return H(e,0)^45?(((t<<2^H(e,0))<<2^H(e,1))<<2^H(e,2))<<2^H(e,3):0}function ra(e){return e.trim()}function ia(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function aa(e,t,n){return e.indexOf(t,n)}function H(e,t){return e.charCodeAt(t)|0}function oa(e,t,n){return e.slice(t,n)}function sa(e){return e.length}function ca(e){return e.length}function la(e,t){return t.push(e),e}function ua(e,t){return e.map(t).join(``)}function da(e,t){return e.filter(function(e){return!ia(e,t)})}var fa=1,pa=1,ma=0,ha=0,U=0,ga=``;function _a(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:fa,column:pa,length:o,return:``,siblings:s}}function va(e,t){return ta(_a(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function ya(e){for(;e.root;)e=va(e.root,{children:[e]});la(e,e.siblings)}function ba(){return U}function xa(){return U=ha>0?H(ga,--ha):0,pa--,U===10&&(pa=1,fa--),U}function Sa(){return U=ha<ma?H(ga,ha++):0,pa++,U===10&&(pa=1,fa++),U}function Ca(){return H(ga,ha)}function wa(){return ha}function Ta(e,t){return oa(ga,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Da(e){return fa=pa=1,ma=sa(ga=e),ha=0,[]}function Oa(e){return ga=``,e}function ka(e){return ra(Ta(ha-1,Ma(e===91?e+2:e===40?e+1:e)))}function Aa(e){for(;(U=Ca())&&U<33;)Sa();return Ea(e)>2||Ea(U)>3?``:` `}function ja(e,t){for(;--t&&Sa()&&!(U<48||U>102||U>57&&U<65||U>70&&U<97););return Ta(e,wa()+(t<6&&Ca()==32&&Sa()==32))}function Ma(e){for(;Sa();)switch(U){case e:return ha;case 34:case 39:e!==34&&e!==39&&Ma(U);break;case 40:e===41&&Ma(e);break;case 92:Sa()}return ha}function Na(e,t){for(;Sa()&&e+U!==57&&(e+U!==84||Ca()!==47););return`/*`+Ta(t,ha-1)+`*`+ea(e===47?e:Sa())}function Pa(e){for(;!Ea(Ca());)Sa();return Ta(e,ha)}function Fa(e){return Oa(Ia(``,null,null,null,[``],e=Da(e),0,[0],e))}function Ia(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Sa()){case 40:if(m!=108&&H(C,d-1)==58){aa(C+=V(ka(v),`&`,`&\f`),`&\f`,$i(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=ka(v);break;case 9:case 10:case 13:case 32:C+=Aa(m);break;case 92:C+=ja(wa()-1,7);continue;case 47:switch(Ca()){case 42:case 47:la(Ra(Na(Sa(),wa()),t,n,c),c),(Ea(m||1)==5||Ea(Ca()||1)==5)&&sa(C)&&oa(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=sa(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=V(C,/\f/g,``)),p>0&&(sa(C)-d||h===0&&m===47)&&la(p>32?za(C+`;`,r,n,d-1,c):za(V(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(la(S=La(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Ia(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(H(C,3)===110)break;case 108:if(H(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ia(e,S,S,r&&la(La(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ia(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+sa(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&xa()==125)continue}switch(C+=ea(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(sa(C)-1)*_,_=1;break;case 64:Ca()===45&&(C+=ka(Sa())),f=Ca(),u=d=sa(y=C+=Pa(wa())),v++;break;case 45:m===45&&sa(C)==2&&(h=0)}}return a}function La(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=ca(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=oa(e,f+1,f=$i(g=o[h])),b=e;v<m;++v)(b=ra(g>0?p[v]+` `+y:V(y,/&\f/g,p[v])))&&(c[_++]=b);return _a(e,t,n,i===0?qi:s,c,l,u,d)}function Ra(e,t,n,r){return _a(e,t,n,Ki,ea(ba()),oa(e,2,-2),0,r)}function za(e,t,n,r,i){return _a(e,t,n,Ji,oa(e,0,r),oa(e,r+1,-1),r,i)}function Ba(e,t,n){switch(na(e,t)){case 5103:return B+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return B+e+e;case 4855:return B+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Gi+e+z+e+e;case 5936:switch(H(e,t+11)){case 114:return B+e+z+V(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return B+e+z+V(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return B+e+z+V(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return B+e+z+e+e;case 6165:return B+e+z+`flex-`+e+e;case 5187:return B+e+V(e,/(\w+).+(:[^]+)/,B+`box-$1$2`+z+`flex-$1$2`)+e;case 5443:return B+e+z+`flex-item-`+V(e,/flex-|-self/g,``)+(ia(e,/flex-|baseline/)?``:z+`grid-row-`+V(e,/flex-|-self/g,``))+e;case 4675:return B+e+z+`flex-line-pack`+V(e,/align-content|flex-|-self/g,``)+e;case 5548:return B+e+z+V(e,`shrink`,`negative`)+e;case 5292:return B+e+z+V(e,`basis`,`preferred-size`)+e;case 6060:return B+`box-`+V(e,`-grow`,``)+B+e+z+V(e,`grow`,`positive`)+e;case 4554:return B+V(e,/([^-])(transform)/g,`$1`+B+`$2`)+e;case 6187:return V(V(V(e,/(zoom-|grab)/,B+`$1`),/(image-set)/,B+`$1`),e,``)+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,B+`box-pack:$3`+z+`flex-pack:$3`),/space-between/,`justify`)+B+e+e;case 4200:if(!ia(e,/flex-|baseline/))return z+`grid-column-align`+oa(e,t)+e;break;case 2592:case 3360:return z+V(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,ia(e.props,/grid-\w+-end/)})?~aa(e+(n=n[t].value),`span`,0)?e:z+V(e,`-start`,``)+e+z+`grid-row-span:`+(~aa(n,`span`,0)?ia(n,/\d+/):+ia(n,/\d+/)-ia(e,/\d+/))+`;`:z+V(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return ia(e.props,/grid-\w+-start/)})?e:z+V(V(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,B+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sa(e)-1-t>6)switch(H(e,t+1)){case 109:if(H(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,`$1`+B+`$2-$3$1`+Gi+(H(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~aa(e,`stretch`,0)?Ba(V(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return z+n+`:`+r+s+(i?z+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(H(e,t+6)===121)return V(e,`:`,`:`+B)+e;break;case 6444:switch(H(e,H(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+B+(H(e,14)===45?`inline-`:``)+`box$3$1`+B+`$2$3$1`+z+`$2box$3`)+e;case 100:return V(e,`:`,`:`+z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,`scroll-`,`scroll-snap-`)+e}return e}function Va(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ha(e,t,n,r){switch(e.type){case Qi:if(e.children.length)break;case Yi:case Xi:case Ji:return e.return=e.return||e.value;case Ki:return``;case Zi:return e.return=e.value+`{`+Va(e.children,r)+`}`;case qi:if(!sa(e.value=e.props.join(`,`)))return``}return sa(n=Va(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ua(e){var t=ca(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Wa(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ga(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ji:e.return=Ba(e.value,e.length,n);return;case Zi:return Va([va(e,{value:V(e.value,`@`,`@`+B)})],r);case qi:if(e.length)return ua(n=e.props,function(t){switch(ia(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:ya(va(e,{props:[V(t,/:(read-\w+)/,`:`+Gi+`$1`)]})),ya(va(e,{props:[t]})),ta(e,{props:da(n,r)});break;case`::placeholder`:ya(va(e,{props:[V(t,/:(plac\w+)/,`:`+B+`input-$1`)]})),ya(va(e,{props:[V(t,/:(plac\w+)/,`:`+Gi+`$1`)]})),ya(va(e,{props:[V(t,/:(plac\w+)/,z+`input-$1`)]})),ya(va(e,{props:[t]})),ta(e,{props:da(n,r)})}return``})}}function Ka(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var qa=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Ja=`active`,Ya=`data-styled-version`,Xa=`6.6.0`,Za=`/*!sc*/
`,Qa=typeof window<`u`&&typeof document<`u`;if(!Vt.createContext)throw Ka(19);function $a(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var eo=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:$a(`REACT_APP_SC_DISABLE_SPEEDY`)??$a(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),to=`sc-keyframes-`,no=new Map,ro=new Map,io=1,ao=e=>{if(no.has(e))return no.get(e);for(;ro.has(io);)io++;let t=io++;return no.set(e,t),ro.set(t,e),t},oo=e=>ro.get(e),so=(e,t)=>{io=t+1,no.set(e,t),ro.set(t,e)},co=Object.freeze([]),lo=Object.freeze({});function uo(e,t,n=lo){return e.theme!==n.theme&&e.theme||t||n.theme}var fo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,po=/(^-|-$)/g;function mo(e){return e.replace(fo,`-`).replace(po,``)}var ho=/(a)(d)/gi,go=e=>String.fromCharCode(e+(e>25?39:97));function _o(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=go(t%52)+n;return(go(t%52)+n).replace(ho,`$1-$2`)}var vo=5381,yo=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},bo=e=>yo(vo,e);function xo(e){return _o(bo(e)>>>0)}function So(e){return e.displayName||e.name||`Component`}function Co(e){return typeof e==`string`&&!0}function wo(e){return Co(e)?`styled.${e}`:`Styled(${So(e)})`}var To=Symbol.for(`react.memo`),Eo=Symbol.for(`react.forward_ref`),Do={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Oo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ko={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ao={[Eo]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[To]:ko};function jo(e){return(`type`in(t=e)&&t.type.$$typeof)===To?ko:`$$typeof`in e?Ao[e.$$typeof]:Do;var t}var Mo=Object.defineProperty,No=Object.getOwnPropertyNames,Po=Object.getOwnPropertySymbols,Fo=Object.getOwnPropertyDescriptor,Io=Object.getPrototypeOf,Lo=Object.prototype;function Ro(e,t,n){if(typeof t!=`string`){let r=Io(t);r&&r!==Lo&&Ro(e,r,n);let i=No(t).concat(Po(t)),a=jo(e),o=jo(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Oo||n&&n[s]||o&&s in o||a&&s in a)){let n=Fo(t,s);try{Mo(e,s,n)}catch{}}}}return e}function zo(e){return typeof e==`function`}var Bo=Symbol.for(`react.forward_ref`);function Vo(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Bo&&`styledComponentId`in e}function Ho(e,t){return e&&t?e+` `+t:e||t||``}function Uo(e,t){return e.join(t||``)}function Wo(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Go(e,t,n=!1){if(!n&&!Wo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Go(e[n],t[n]);else if(Wo(t))for(let n in t)e[n]=Go(e[n],t[n]);return e}function Ko(e,t){Object.defineProperty(e,"toString",{value:t})}var qo=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Ka(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Za;return t}},Jo=`style[${qa}][${Ya}="${Xa}"]`,Yo=RegExp(`^${qa}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Xo=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Zo=e=>{if(!e)return document;if(Xo(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Xo(t))return t}return document},Qo=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},$o=(e,t)=>{let n=(t.textContent??``).split(Za),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Yo);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(so(n,t),Qo(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},es=e=>{let t=Zo(e.options.target).querySelectorAll(Jo);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(qa)!==Ja&&($o(e,r),r.parentNode&&r.parentNode.removeChild(r))}},ts=!1;function ns(){if(!1!==ts)return ts;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return ts=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return ts=t.getAttribute(`content`)||void 0}return ts=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var rs=(e,t)=>{if(typeof document>`u`)throw Ka(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${qa}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(qa,Ja),i.setAttribute(Ya,Xa);let s=t||ns();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},is=class{constructor(e,t){this.element=rs(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Ka(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},as=class{constructor(e,t){this.element=rs(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},os=Qa,ss={isServer:!Qa,useCSSOMInjection:!eo},cs=class e{static registerId(e){return ao(e)}constructor(e=lo,t={},n){this.options=Object.assign(Object.assign({},ss),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Qa&&os&&(os=!1,es(this)),Ko(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=oo(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=qa+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Qa&&es(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Qa&&t.target!==this.options.target&&Zo(this.options.target)!==Zo(t.target)&&es(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new is(t,n):new as(t,n))(this.options),new qo(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){ao(e),e.startsWith(to)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(ao(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ao(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},ls=new WeakSet,us={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ds(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in us||e.startsWith(`--`)?String(t).trim():t+`px`}var fs=47;function ps(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var ms=Symbol.for(`sc-keyframes`);function hs(e){return typeof e==`object`&&!!e&&ms in e}function gs(e){return zo(e)&&!(e.prototype&&e.prototype.isReactComponent)}var _s=e=>e==null||!1===e||e===``,vs=Symbol.for(`react.client.reference`);function ys(e){return e.$$typeof===vs}function bs(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!_s(r)&&(Array.isArray(r)&&ls.has(r)||zo(r)?t.push(ps(n)+`:`,r,`;`):Wo(r)?(t.push(n+` {`),bs(r,t),t.push(`}`)):t.push(ps(n)+`: `+ds(n,r)+`;`))}}function xs(e,t,n,r,i=[]){if(_s(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return ys(e)?i:gs(e)&&t?xs(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)xs(e[a],t,n,r,i);return i}return Vo(e)?(i.push(`.${e.styledComponentId}`),i):hs(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):ys(e)?i:Wo(e)&&e.toString===Object.prototype.toString?(bs(e,i),i):(i.push(e.toString()),i)}var Ss=bo(Xa),Cs=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=yo(Ss,t),this.baseStyle=n,cs.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(gs(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Uo(xs(r,e,t,n)))}else i+=Uo(xs(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=_o(yo(yo(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ho(r,a)}}return r}},ws=/&/g;function Ts(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Es(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==fs||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===fs&&(o=!1,c++);else if(l!==34&&l!==39||Ts(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Ds(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Ds(a.children,t)}return e}function Os({options:e=lo,plugins:t=co}=lo){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(ws,r).replace(i,a))}),e.prefix&&o.push(Ga),o.push(Ha);let s=[],c=Ua(o.concat(Wa(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Es(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Ts(e,o)){if(s===0){if(t===fs&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==fs);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===fs)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===fs&&o+1<r&&e.charCodeAt(o+1)===fs){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Es(i)):l===0?e:Es(e)}(t),d=Fa(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Ds(d,e.namespace)),s=[],Va(d,c),s},u=e,d=vo;for(let e=0;e<t.length;e++)t[e].name||Ka(15),d=yo(d,t[e].name);return u!=null&&u.namespace&&(d=yo(d,u.namespace)),u!=null&&u.prefix&&(d=yo(d,`p`)),l.hash=d===vo?``:d.toString(),l}var ks=new cs,As=Os(),js=Vt.createContext({shouldForwardProp:void 0,styleSheet:ks,stylis:As,stylisPlugins:void 0});js.Consumer;function Ms(){return Vt.useContext(js)}var Ns=Vt.createContext(void 0);Ns.Consumer;var Ps={};function Fs(e,t){let n=typeof e==`string`?mo(e):`sc`;Ps[n]=(Ps[n]||0)+1;let r=n+`-`+xo(Xa+n+Ps[n]);return t?t+`-`+r:r}function Is(e,t,n){let r=Vo(e),i=e,a=!Co(e),{attrs:o=co,componentId:s=Fs(t.displayName,t.parentComponentId),displayName:c=wo(e)}=t,l=t.displayName&&t.componentId?mo(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new Cs(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=Vt.useContext(Ns),u=Ms(),d=e.shouldForwardProp||u.shouldForwardProp,f=uo(t,l,a)||lo,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=zo(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Ho(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Ho(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,_=Co(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,_,m),b=Ho(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[_&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),v(g,y)}(m,e,t)}p.displayName=c;let m=Vt.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ho(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Go(e,n,!0);return e}({},i.defaultProps,e):e}}),Ko(m,()=>`.${m.styledComponentId}`),a&&Ro(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Ls=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Rs(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var zs=e=>(ls.add(e),e);function W(e,...t){if(zo(e)||Wo(e))return zs(xs(Rs(co,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?xs(n):zs(xs(Rs(n,t)))}function Bs(e,t,n=lo){if(!t)throw Ka(1,t);let r=(r,...i)=>e(t,n,W(r,...i));return r.attrs=r=>Bs(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Bs(e,t,Object.assign(Object.assign({},n),r)),r}var Vs=e=>Bs(Is,e),G=Vs;Ls.forEach(e=>{G[e]=Vs(e)});var Hs,Us=class{constructor(e,t){this[Hs]=!0,this.inject=(e,t=As)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=to+e,this.rules=t,ao(this.id),Ko(this,()=>{throw Ka(12,String(this.name))})}getName(e=As){return e.hash?this.name+_o(e.hash>>>0):this.name}};function Ws(e,...t){let n=Uo(W(e,...t));return new Us(xo(n),n)}Hs=ms,`${qa}`,`${qa}`,`${qa}`;var Gs=`/assets/future-ready-B7OYPyUe.webp`,Ks=`data:image/webp;base64,UklGRtwOAABXRUJQVlA4WAoAAAAgAAAAUwEAUwEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg7gwAAFBUAJ0BKlQBVAE+SSSLRaKiCYTIFAJCWVu4XYBDNV/6H8ivF0wv238mfyM6w/kzv58q92x8LyN/e/uG+Z/9a/2vsV+5D3A/1H/3X9T/uXYb8wH9A/vX/d/w/vZ/hn71/QA/n/9o///Yj/t57AH7demX+2fww/uT+0ftM///WV/P3+R7Tf8jynSRn7Dfsf6fxO8AL8W/l/+S/LHiDwAfV/+2/Z56R2qbej8V5QA/l/7pemD/1/4XzrfmP+K/9P+O+Ar+c/13/m+tB6/P2+9ib90xB7nTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6GUaU7pnU34cdTLTHXG0psx/zEX+RkVVEf5NTooOgUeaVHMNhmpAnI+DZW1Eml2IZ5PBUrShVDXB5rARCwTYIFRRHnXr2C1eHTrSfLxKbGRyrqhErm3giOlNMwiHZDx7M9AIhKykpqRZtRO4AFEUdaeXx4R+6uhFWgZumsV191RmfhQ9xQcGq0/WxyUDU06VsQi3kdCFW3GB5Z1TyUJ/ACiBOM8DTODKRUyRAhXIDxhqIu1F6mRMHbXdMVLnnLKByjzhkzvfeO9hPduuv0FuNe/zgNG5uBpFEtnGilIlKGZV/HD4w6tgpdcZdSplWjvPF2E6zRh6/kSU4q4UfyYNmBMBQVuVExqJ712lrD+kGwkb7JwIryO6VQ/ZqVwH4aohOrMRlEtlH5UdHl6Iu/ld9T7Ju3j/o1mxbnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc6bnTc1gAP7/tMvx5J1tzjHTsqxWukAAAAAAAAAAAAFS5lbMxmd51DBJhPNhAIhhIGP/PXa5HxrvXVLcv1G4cTCweQQJYVLJdWS18N60bUvkFsk8gFjEjcXotPLMVNZw7ZB/INEx//gwW+as+craHnVpfsnp4ns/1j/3Q9FF13Xf9eRa0MWCRSaMBPeQ/fKH/9Mc3bjfAlVQOIbiN/ARInqBg42uZn8bwNXwF6ACXa0KMkkp9pzbQC6ZXW0T8xSadMtG3eG17uvSMvmK+I/KbaR1e3zFX88T+Ro00EJP7Y5zerbc0p6bcEsr5DoDtE/yNspF12yQ6SipJ81Y9gIufyLUyR2WrRBDj8GsTqGJ0IEugICXpqdzMzQUqrtB0eTQoNw7onZTP4DdiGyj3qyUpWZXc2WcA2s5mvTiiPOC37/grvGTcm54umvO/Ve9dcaQgwFSwRvMnQy2p3Fhrfzljyhflh6betecgR5mhgI33ysQqOfA/0vyNN+e5W52qMl3TB4ahXJy4Evq7hYTB4j8szc0tHcuJnOZ2bwut4s7Y/4DO8rOMEBk79Ya65Pzd1/mwNUeYyvhMBbe/2vxpgv+TfEJOYhSajBBJ4y834oYzCggVxgt81Z85Ws5JzX3kjdobfxgzbcswiCPp4NW3OyNvWMwPhZsp4cygJng2dwWsBwy+WEpzu2YqwyHrM/h8rZ1aoclKKgu/6z4PQBPhVAa0r4punE/+i1KbVguM0R3GxrACxEugQaCpTmfmBdKosMnz5vSAMMPnNM2F1NNoGm+of/dB2Jf9RFaDBwLpjGolMGIuecVBz3ehIycz6B8p77VPTBZ1D8tvpBV6KthsSxh00BkOlMlynmQaW47DdNGtxW+so3OL+xQlWrQRpIoAMnaYd19d3oiSwjAE0tGiNELJcm+bQ1optOcEio7aPkbZQXNAjYTwF0pgxw6w8hmX/vVFRnOmp1I6/hTeypLwAClquwQExdVgkR6mixs6Q1SOtmzJw+MRxF8+tG3bbcFJiotTZwjaCDhwQRuPBta/gUH0tmP5s9dBPB4urVrTt8t7yo4cfE+bqqlnKB7Ab9wmr6iKaTeFewBKiBnBfWUbm9/I+qlt/mlRIgtxmzwFrnyvuDvG/aShBnWBxPzID8OR865m5jXkR1BwGVT4ADrKIp9XqHwxWM6oCz3j3lYWJhjZUiO0YvMXeHIDcvyfaoNP0RDAQ0Dhe/nw00R96aibA1xiJcV0vduwwNgLWQkirtSSfT34t0OhtTqteymVFjNpL4aY8Fl3JAzwzXf/juXmMuPdt0bPsyY8J8Hyb962fieyXk4dvDeW4zQOGLGzL4PV5nYCEhmD5zFN/yvDAvXE3to9Zwf14PUEr8fM8eybw8aKuG3iYVvDYxBYA6owvlKjpWy4AXwjrjxTsghyVdOiSR3hzJfP9FzowXHdrU3+v7oplALa9uPx/yBu82P6OLqW9jY/4LdofaFDgwT3uZzKtE2WxDWZH0wdyq2SluSwdRUs6tT35q6nsRjF2P4x+mMhKIxXSiQI2oqGJkpLOF3+r/B33sgi0wyZlWLD+k+qfoWgQwJaQ7askcNLQfpwY/+ppCFbwecTfF0lgr+51PNWoeYKkbBOT4ct68pV7FNzxHSs0Uo2Ne1517ivZVSw8iNibFAd5tsix/SXOHWVsCCooy9lO1u/sOKarc7aB3pQSHBoLvRrX55wxI5zwl3nKeAwIfuCoAkmGx/CoSbbPE3Nqjh+T2xstYOKAXagz3J+GNcJ4OqshCVi1hxPuE4hD5dZUkmYrB5JEfmJcAMW7z/MiA/lzSEk9l8Xi/4GDmF3zgN6gZsx/WY4rv4VQMNXkzJSa5L8iRp+jghna59uJudFmziBMhmVVXIyRf6A3UQRdGUE1dH/+ddYxsf8UxCABpD2ww8FxHH+38UE38GhSsIKSHiFhfh9+bR8fbJA80neFQvsmMk3VI+t3UtRTESKdhkONAfGH4crKQnCs9g+1l2D/QSpqSf/qEVM/gG7QAWeVICmXdeHt+DDnX/l25pITb4e/jTVD+EvVKuF1InL42GogO+PW+X75IlXAmZ7s6EzyMWLRS5030Hnvh5BSN4eWs5S0GNSl3U5oJjysNC15roSpDLuNxqWUq11+IiyfMFAdHeKN/Ga/mIScpsdCgIe4CoW//uv/5NtBwAeMJoE3S/ElRR7QoNBn6xUZeJAO3rvLjkTFy0XirpoU7ZkUEI1xYMa14fUvZKZ79qpbkaCF3oDH4nmgp+zkZPxBl9UURbGFt55/UGYKcW9GepAYFp4h9zAMQD5iPVvlW68fdxb36kmqBD6hAh5xSQuttPJlaxBTFZojzmgmpAWSorJmFQdlOSrDIkfo8DcUZUxjydfqevorzZnTdQOam3VbXCkPoXWUpSyqC6Nr6GrhOWwlM8Dz0utNnOi2VVQsdV2/YPg2kG6IklYymmKzHY7jQmGP4pcu81JvcdlJiGbFU+kLPOf40+dAS45NrH6VyDa+aaRo4VYmHOeFsGhFdL3MFH+YrsKr4ZNYLFCSHbqJQqCVhkog9j9sNYGxKgLx/YUvowsucPmXFMAgb/IxhTgr7+94czHVfjwepY4GzLV8wjr6JxTCY+9yhsFOpKkVGd15e4dnEhngu72l73TEj5lc+z9lnp3mWCZPh4kYIifOXFZwo6H8iEnSzZCLBivfy+KxXHB1qRKwerlRr/vNN9tE4omKIcgfQDAAVCLMC95/yNyCjwRUuFkAGNxzUzc0H3eE/GMKrsPFa7aXUOii+yE+AaTZNx2Bm0jEHDx12+kRi5C5sXP99UohAKqy4fFaDE2OZiZ1hamKUcL0J9WPNIlG9LqnAB6RAiHwKAFQq8h5pO8BPq4QT0232uYDPabG/URUu65EM2oV2iU7AxT72AgCXI1e1MIa+u2XX2r6ON7b3cBEV/9ERgtzlu/M7MZNJlddhjVTXovP8qMY5DNzBBrYas9RNlFrAtJAfylc3bWn7+H/IurOpb7foKwKTYoioHmlmdwFptFz+rQONyxbCQwf0kleXUqRQKuX1PfStZj9EFCZqspCv/nSjsZhiSNb58kTmnSAlJBAiVtJ4tfeVUc+86WYjFA9Oh4JrQ8sVdMPw2jZhmef+dbIJyw9Lv1mTgpwcW0EF5Ykwv8Mwn7kG2sNBb5pIQ+6E+V603Zp3xXj1zMzXZVQciv/PF583IYIeYRFWen/FJtNB2OylmCVqAoHMLs7aAttWTd4kuu6A/S7We7nIIFULFHR2HLYshRWQCnHvDAIz1f5R50+DOZ4SbDOKeUok/3BOl6xfTPstGtFOAeHoSUxiKhDZp96Adkh758y+eyfGCgM+EUWzcn4L62S0pL/bHYB3QnLUCoILbzb27IYNGOI4547hjDcKyRTbIbBlI729PpdPTXFUlCLrGm+VvyiXatdiiDAh8sk3IKEp/bLgjlHzUiR2AkyKN4FR7f/Irq6hmfkGTzhl5fYAAR9sAAAAAAAAAAAAAAAAAAAAAAAA=`,qs=`/assets/sintef-DJRKX1hq.webp`,Js=`/assets/uio-DitADJZI.webp`,Ys=`/assets/minnumst-BHZqdQx6.webp`,Xs=`/assets/recipify-gucAPnOv.webp`,K={name:`Steinn Hauser Magnússon`,location:`Berlin, DE`,email:`hausersteinn@gmail.com`,phone:`+49 179 6047 257`,headline:`Cloud Operator @ SENEC · Berlin`,discipline:`Cloud & platform engineering / Computational physics`,summary:`Cloud operator and software engineer. Runs production Kubernetes platforms at SENEC in Berlin, with a background in computational physics and machine learning.`,cvUrl:`/cv/Steinn-Hauser-Magnusson-CV.pdf`,about:[`I'm a physicist turned platform engineer. My path started in computational neuroscience, where I modelled brain signals at the University of Oslo. From there I moved into data science and NLP, then into building Azure microservices, and now I work in cloud operations at SENEC.`,`Day to day that means Kubernetes clusters managed with Terragrunt, Helm and ArgoCD, GitLab CI/CD pipelines, and observability with Prometheus, Grafana and Alertmanager. I like systems that are secure by default, reproducible, and boring to run.`,`I enjoy building architectures from scratch and joining projects early, while there is still room to shape them: map the problem, research the options, prove the idea, then build it properly. I care about modular, reusable infrastructure code, strict access policies and secure networking, and about changes that are reviewed and promoted through environments before they reach production.`,`I have led and worked closely with UX and design, frontend and backend teams, and I enjoy onboarding and training new team members.`,`Outside work I build open-source projects end to end, such as Minnumst, a self-hosted family history archive, from the app down to the hardened host it runs on, and recipify, a pipeline that turns a kitchen's archive of recipe files into verified, searchable recipes.`]},Zs=[{label:`GitHub`,href:`https://github.com/steinnhauser/`,icon:`github`},{label:`LinkedIn`,href:`https://linkedin.com/in/steinnhauser/`,icon:`linkedin`},{label:`Stack Overflow`,href:`https://stackoverflow.com/users/13819183/steinn-hauser-magnusson/`,icon:`stackoverflow`}],Qs=[{slug:`senec-cloud-operator`,tileTitle:`Cloud Operator`,company:`SENEC GmbH`,logo:Ks,summary:`Runs large-scale Kubernetes clusters and 50+ Ansible-managed servers, with GitOps delivery and automated, mTLS-secured maintenance.`,curves:6,positions:[{title:`Cloud Operator`,period:`February 2026 - Present`,bullets:[`Management of multiple large-scale Kubernetes clusters using Terragrunt, GitLab CI/CD, Helm templating with 10+ custom charts, and ArgoCD, integrated with monitoring systems such as Grafana, Prometheus, and Alertmanager.`,`Operation of 50+ Ansible-managed servers, including in-depth development of a secure pipeline for automated maintenance updates on WireGuard-connected hosts, with a strong focus on strict access policies and secure networking.`,`Oversight and development of an automated server update and maintenance system featuring custom aptly-based repository mirrors, an API gateway for scheduling host update maintenance slots, dashboards for host package lists and update overviews, and a lightweight Go-based client for automated and mTLS-secured maintenance checks.`]}],tags:[`Kubernetes`,`Terragrunt`,`Helm`,`ArgoCD`,`GitLab CI/CD`,`Prometheus`,`Grafana`,`Alertmanager`,`Ansible`,`WireGuard`,`Go`,`mTLS`]},{slug:`senec-software-developer`,tileTitle:`Software Developer`,company:`SENEC GmbH`,logo:Ks,summary:`Oversaw Azure Function App microservices integrating CRM and Business Central, built with Terraform, Terragrunt and modern CI/CD.`,curves:2,positions:[{title:`Software Developer`,period:`March 2023 - January 2026`,bullets:[`Oversaw development, maintenance, and migration of multiple Azure Function App microservices integrating enterprise solutions (CRM, Business Central) with internal and external services.`,`Focused on architectural design and implementation using Terraform and Terragrunt, delivering modularized releases and modern CI/CD pipelines.`,`Contributed significantly to developing a containerized deployment framework for microservices, enforcing strict governance-compliant policies across Azure Key Vault, Storage Account, MongoDB/PostgreSQL, Virtual Network, API Management Service, and Service Bus resources.`,`Demonstrated leadership and communication through team management, stakeholder coordination, and development of frameworks for onboarding and training new team members.`]}],tags:[`Azure Functions`,`Terraform`,`Terragrunt`,`Docker`,`CI/CD`,`Azure Key Vault`,`API Management`,`Service Bus`,`PostgreSQL`,`MongoDB`]},{slug:`future-ready-senior-data-scientist`,tileTitle:`Senior Data Scientist`,company:`Future Ready AS`,logo:Gs,summary:`Built an LLM chatbot platform that simulates call-centre conversations on Django, Flask and Azure, and managed its frontend and UX teams.`,curves:5,positions:[{title:`Senior Data Scientist`,period:`January 2022 - February 2023`,bullets:[`Developed and maintained an application for LLM chatbot technology, providing an online learning platform to simulate call-center conversations using Django, Flask APIs, and an Azure-based architecture.`,`Managed frontend and UX developer teams to design and build an interactive online learning platform.`,`Leadership and communication experience through management meetings with external shareholders and investors, alongside training and management of new team members.`]}],tags:[`LLMs`,`Django`,`Flask`,`Azure`,`Python`,`Docker`,`MongoDB`]},{slug:`future-ready-data-scientist`,tileTitle:`Data Scientist`,company:`Future Ready AS`,logo:Gs,summary:`Sales analytics of telecom data, and a natural language processing model that transcribes calls and captures the sales techniques that lead to sales.`,curves:3,positions:[{title:`Data Scientist`,period:`November 2020 - December 2021`,bullets:[`Provided sales analytics of telecommunications data to identify strengths in sales representatives.`,`Developed a natural language processing model capable of transcribing calls and capturing key sales techniques which lead to product sales.`,`Extensive use of Python libraries such as Rasa, NumPy, pandas, Django, and PySpark.`]}],tags:[`Python`,`NLP`,`Rasa`,`pandas`,`NumPy`,`PySpark`,`Django`]},{slug:`sintef`,tileTitle:`Junior Software Developer`,company:`SINTEF Energi AS`,logo:qs,summary:`A graphical interface for the IEC 61850 digital substation protocol, in C and Python.`,curves:7,positions:[{title:`Junior Software Developer`,period:`June 2020 - August 2020`,bullets:[`Developed a graphical user interface for the IEC 61850 digital substation communication protocol.`,`Extensive use of C (libIEC61850) and Python (PyQt, ZeroMQ), with a focus on high-performance data pipelines, data processing and data visualization.`]}],tags:[`C`,`libIEC61850`,`Python`,`PyQt`,`ZeroMQ`]},{slug:`uio`,tileTitle:`Cluster Project Manager`,company:`University of Oslo, Physics Department`,shortCompany:`University of Oslo`,logo:Js,summary:`Built a rack of compute nodes for the physics department from donated Abel supercomputer hardware, at no additional cost.`,curves:8,positions:[{title:`Cluster Project Manager`,period:`February 2020 - July 2020`,bullets:[`Built a rack of computational nodes for the physics department using hardware donated from the Abel supercomputer.`,`Set up cluster software and node connectivity using the ROCKS High-Performance Computing ISO.`,`Collaborated with members of USIT to assemble the cabinet from unused supercomputing parts, resulting in no additional costs.`]}],tags:[`HPC`,`ROCKS`,`Linux`,`Networking`]}],$s=e=>e.split(`:`)[0],ec=[{title:`Automated server maintenance platform`,context:`SENEC · Cloud Operator · 2026`,summary:`A secure pipeline for automated maintenance updates across 50+ Ansible-managed, WireGuard-connected servers, built with strict access policies and secure networking. Hosts run a lightweight Go client for mTLS-secured maintenance checks, an API gateway schedules each host's maintenance slot, custom aptly-based repository mirrors serve the packages, and dashboards give an overview of host package lists and updates.`,flow:[{label:`Go client`,detail:`mTLS maintenance checks`},{label:`API gateway`,detail:`schedules maintenance slots`},{label:`aptly mirrors`,detail:`custom package repositories`},{label:`Dashboards`,detail:`package lists and update overview`}],tags:[`Go`,`mTLS`,`Ansible`,`WireGuard`,`aptly`,`Linux`],featured:!0,role:`senec-cloud-operator`},{title:`Minnumst: a self-hosted family history archive`,context:`Open source · Personal project`,summary:`A public archive, an editorial desk and an API that keeps every story revision, built end to end from the app to the hardened host it runs on. OpenTofu creates the Hetzner host, Ansible hardens it to the CIS benchmarks (scored with Lynis in CI), and Traefik with Authentik is the only way in. Releases are multi-arch images with an SBOM and build provenance.`,flow:[{label:`OpenTofu`,detail:`Hetzner host, firewall, encrypted state`},{label:`Ansible`,detail:`CIS-hardened host, scored with Lynis`},{label:`Traefik + Authentik`,detail:`TLS edge, auth on every write`},{label:`The app`,detail:`FastAPI, React and PostgreSQL`}],tags:[`OpenTofu`,`Ansible`,`Docker Compose`,`Traefik`,`Authentik`,`FastAPI`,`React`,`PostgreSQL`],links:[{label:`Code on GitHub`,href:`https://github.com/steinnhauser/minnumst`}],featured:!0,personal:!0,image:{src:Ys,width:720,height:634,alt:`Minnumst's public archive in dark mode: a name search beside a photo of Grafarkirkja, a turf church in Höfðaströnd`},page:{slug:`minnumst`,curves:3,intro:`Minnumst (Icelandic: "let us remember") is a shared written history of our ancestors: a public archive for reading stories, an editorial desk for writing them, and an API that keeps every story revision. I built it end to end, from the app to the hardened host it runs on, so that the only thing reachable from the internet is a TLS-terminating proxy and every write is authenticated before it reaches the application.`,figures:[{value:`57 → 75`,label:`Lynis hardening index, scored in CI`},{value:`254 → 0`,label:`Trivy findings, API image moved to Alpine`},{value:`1`,label:`public entry point: Traefik`}],sections:[{title:`Network and access`,points:[`Only Traefik publishes ports. HTTP redirects to HTTPS with Let's Encrypt certificates and HSTS, and the API is rate-limited.`,`Authentik forward-auth, with TOTP MFA, guards the whole editorial desk and every write to the API; reads stay public and there is no in-app login to attack.`,`PostgreSQL sits alone with the API on an internal network with no route in or out. Traefik discovers services through a socket proxy that only lists containers.`]},{title:`Host, provisioned as code`,points:[`OpenTofu creates the Hetzner server, firewall and data volume, with state encrypted before it leaves the operator's machine.`,`Ansible hardens Ubuntu 24.04 to the CIS benchmark (Level 1, selected Level 2), with every setting citing its CIS section and NIST control: LUKS-encrypted data, unattended updates, key-only SSH, a default-deny nftables firewall and auditd.`,`Nightly database backups are encrypted with age to a key that never touches the server, and CI restores one into a fresh database on every change.`]},{title:`Containers and supply chain`,points:[`Every container runs as non-root, with a read-only root filesystem, no Linux capabilities and no-new-privileges, on Alpine images pinned by digest.`,`Dependencies are locked, every GitHub Action is pinned to a commit SHA, and CodeQL, Trivy and zizmor scan the code, images and workflow on every change.`,`Releases are multi-arch images published with build provenance and an SBOM.`]},{title:`Verified, not just configured`,points:[`A CI job applies the host hardening to a real Ubuntu 24.04 VM, requires a second run to change nothing, and reports the Lynis index before and after.`,`An end-to-end job runs the production Compose stack and checks the edge from outside: redirect, HSTS and CSP, refused unauthenticated writes, the rate limit and network isolation.`,`Playwright browser tests of both frontends fail on any Content Security Policy violation.`]}]}},{title:`recipify: a verified document pipeline`,context:`Open source · Personal project`,summary:`Turns about 1,900 mixed recipe files (Word, PDF, spreadsheets, scans) into 524 recipes, each checked word for word against its source and traceable back to it. 100% test coverage, with a live demo built by CI.`,flow:[{label:`Inventory`,detail:`hash, classify and triage each file`},{label:`Extract`,detail:`poppler, python-docx, LibreOffice`},{label:`Structure`,detail:`deterministic rules, no rewriting`},{label:`Assess`,detail:`word-for-word check against the source`},{label:`Viewer`,detail:`one offline HTML file`}],tags:[`Python`,`pytest`,`poppler`,`python-docx`,`GitHub Actions`],links:[{label:`Live demo`,href:`https://steinnhm.com/recipify/demo/`},{label:`Code on GitHub`,href:`https://github.com/steinnhauser/recipify`}],featured:!0,personal:!0,image:{src:Xs,width:880,height:522,alt:`The recipify viewer: a recipe scaled to 2x with one ingredient ticked off`},page:{slug:`recipify`,curves:6,intro:`recipify started from a real archive: about 1,900 files collected over many years by a professional kitchen, mostly in Icelandic. Word documents, PDFs laid out in two or three columns, scanned notebooks, photos, spreadsheets and many copies of the same files. It turns them into verified, structured recipes, publishes them as one offline HTML file that chefs can cook from, and holds back everything it can't check, with the reason.`,figures:[{value:`1,916`,label:`source files in the real archive`},{value:`524`,label:`recipes verified and published`},{value:`100%`,label:`test coverage, enforced in CI`}],sections:[{title:`The pipeline`,points:[`Inventory hashes every file, classifies it by content rather than extension, merges identical copies and triages recipes from books and reference material.`,`Extraction runs locally and for free: poppler in content-stream order (cross-checked against its layout rendering), Word XML including text boxes, and spreadsheets block by block.`,`Documents holding several recipes are split only in clear cases, and every decision, split or not, is stored with its reason. Deterministic rules then structure each recipe into components, ingredients and steps.`]},{title:`Why it can be trusted`,points:[`Nothing is rewritten: the structurer only decides what each source line is, never changes the text.`,`Every published recipe is checked word for word against its source (recall and precision of 1.0), and two extractors must agree on reading order.`,`Hard cases are named, not hidden: the report lists every document that isn't ready, and why.`]},{title:`Cheap to re-run, easy to trace`,points:[`Every artifact is keyed by the source's SHA-256 and the engine version, so re-runs skip finished work, renamed files keep their results and earlier results are never overwritten.`,`recipify trace follows a published recipe back to the file it came from and re-checks every link on the way.`]},{title:`The viewer`,points:[`One HTML file with no external requests: it works offline, can be emailed, and stays readable without JavaScript.`,`Built for cooking: scale from ½× to 4×, tick off ingredients and steps, search that ignores accents, and filters with live counts.`,`recipify lock encrypts the page with AES-256-GCM for public hosting; the key travels in the link's #fragment, which browsers never send to the server.`]}]}},{title:`Cardiac artefact removal for MNE-Python`,context:`Max Planck Institute · Guest Developer · 2024-2025`,summary:`Helped develop, package and formalize a tool that removes cardiac artefacts from spinal electrophysiology data, contributed to the open-source MNE-Python library.`,tags:[`Python`,`MNE-Python`,`Signal processing`,`Open source`],links:[{label:`Pull request #13037`,href:`https://github.com/mne-tools/mne-python/pull/13037`}]},{title:`Predicting brain signals from neuronal networks`,context:`University of Oslo · MSc thesis & publication · 2021-2022`,summary:`Evaluated the kernel and hybrid approximation methods for computing local field potentials across a range of network conditions, simulating neuronal networks in Python with LFPy. Published in PLOS Computational Biology (2022).`,tags:[`Python`,`LFPy`,`Computational neuroscience`,`Simulation`],links:[{label:`Paper`,href:`https://doi.org/10.1371/journal.pcbi.1010353`},{label:`Thesis code`,href:`https://github.com/steinnhauser/msc-thesis-lfp`}]}];function tc(e){let t=e.positions.map(e=>e.period).join(` `),n=(t.match(/\d{4}/g)??[]).map(Number),r=/present/i.test(t)?`now`:String(Math.max(...n)),i=String(Math.min(...n));return i===r?i:`${i} - ${r}`}function nc(e){let[t,n=t]=e.split(/\s+-\s+/),r=e=>e.split(` `)[0].slice(0,3),i=e=>e.split(` `)[1];return/present/i.test(n)?`${r(t)} ${i(t)} – now`:i(t)===i(n)?`${r(t)} – ${r(n)} ${i(n)}`:`${r(t)} ${i(t)} – ${r(n)} ${i(n)}`}var rc=[{title:`Cloud & Infrastructure as Code`,skills:[`Azure`,`AWS`,`Terraform`,`Terragrunt`,`OpenTofu`,`Linux`]},{title:`Containers & GitOps`,skills:[`Kubernetes`,`Docker`,`Helm`,`ArgoCD`]},{title:`CI/CD & Automation`,skills:[`GitLab CI/CD`,`GitHub Actions`,`Ansible`,`Git`]},{title:`Observability`,skills:[`Prometheus`,`Grafana`,`Alertmanager`]},{title:`Networking & Security`,skills:[`WireGuard`,`mTLS`,`Azure Key Vault`,`API Management`]},{title:`Programming & Data`,skills:[`Python`,`Go`,`Bash`,`TypeScript`,`React`,`PostgreSQL`,`MongoDB`,`pandas`,`PySpark`]}],ic=[`Python`,`Terraform`,`Kubernetes`,`Docker`,`Linux`,`Azure`,`Git`,`AWS`],ac=[{code:`AZ-104`,title:`Azure Administrator Associate`,issuer:`Microsoft`,verifyUrl:`https://learn.microsoft.com/en-us/users/steinnhausermagnusson-8948/credentials/e226b60f8028a1af`},{code:`ITIL 4`,title:`ITIL 4 Foundation`,issuer:`PeopleCert · IT Service Management`}],oc=[{language:`English`,level:`Native`},{language:`Icelandic`,level:`Native`},{language:`Norwegian`,level:`Fluent`},{language:`German`,level:`Working proficiency`}],sc=oc.map(e=>e.language),cc=[{label:`Role`,lines:[{text:`Cloud Operator, SENEC`},{text:`Kubernetes platforms`}],evidence:[`Cloud Operator, SENEC GmbH`,`multiple large-scale Kubernetes clusters`]},{label:`Certified`,lines:[{text:`Azure Administrator`,href:ac.find(e=>e.code===`AZ-104`).verifyUrl,title:`Verify the AZ-104 credential on Microsoft Learn`},{text:`ITIL 4 Foundation`}],evidence:[`Azure Administrator Associate`,`ITIL 4 Foundation`]},{label:`Education`,lines:[{text:`MSc Physics, Oslo`},{text:`Grade A, published`,href:`https://doi.org/10.1371/journal.pcbi.1010353`,title:`Read the paper in PLOS Computational Biology`}],evidence:[`Computational Science: Physics`,`University of Oslo`,`Grade: A`,`Magnusson SH`]},{label:`Languages`,lines:[{text:sc.slice(0,2).join(`, `)},{text:sc.slice(2).join(`, `)}],evidence:sc}],lc=[{period:`2022`,title:`Publication`,institution:`PLOS Computational Biology 18(8): e1010353`,details:[`Hagen E, Magnusson SH, et al. "Brain signal predictions from multi-scale networks using a linearized framework."`],link:{label:`doi.org/10.1371/journal.pcbi.1010353`,href:`https://doi.org/10.1371/journal.pcbi.1010353`}},{period:`August 2019 - June 2021`,title:`MSc. in Computational Science: Physics`,institution:`University of Oslo, Norway`,details:[`Thesis: 'Evaluating Approximate Methods for Computing Extracellular Potentials from Neuronal Networks'. Grade: A.`,`Specialization in computational neuroscience, simulating neuronal networks in Python with LFPy.`]},{period:`Spring Semester 2019`,title:`Theoretical Physics (exchange)`,institution:`McGill University, Montréal, Canada`,details:[]},{period:`August 2016 - June 2019`,title:`BSc. in Physics and Astronomy`,institution:`University of Oslo, Norway`,details:[`Specialization in mathematics, statistics and computer science.`,`4D Space Numerical Workshop, Kobe University: simulated ionospheric effects on the NORSAT-1 satellite.`,`CaNoRock XVI, Andøya: simulated rocket trajectories to estimate drag coefficient and landing site.`]}],uc=[{period:`September 2024 - January 2025`,title:`Guest Developer`,organization:`Max Planck Institute for Human Cognitive and Brain Sciences`,description:`Helped develop, package and formalize a tool for cardiac artefact removal in spinal electrophysiology data as part of the open-source MNE-Python library.`,link:{label:`mne-python pull request #13037`,href:`https://github.com/mne-tools/mne-python/pull/13037`}},{period:`January 2017 - June 2020`,title:`Mathematics Tutor`,organization:`ENT3R`,description:`Alongside my own university classes, I tutored students aged 16 to 18, helping them prepare for their final exams in advanced mathematics and the sciences.`}],dc=`https://steinnhm.com`,q={home:`/`,about:`/about`,section:e=>`/#${e}`,experience:e=>`/experience/${e}`,project:e=>`/projects/${e}`,notFound:`/404`},fc=ec.flatMap(e=>e.page?[{...e,page:e.page}]:[]);[q.home,...Qs.map(e=>q.experience(e.slug)),...fc.map(e=>q.project(e.page.slug)),q.about];var pc={"/senec":q.experience(`senec-software-developer`),"/future-ready":q.experience(`future-ready-senior-data-scientist`),"/sintef":q.experience(`sintef`),"/uio":q.experience(`uio`),"/experience/future-ready":q.experience(`future-ready-senior-data-scientist`),"/index.html":q.home,"/about.html":q.about,"/projects.html":q.section(`work`),...Object.fromEntries(fc.map(e=>[`/project/${e.page.slug}`,q.project(e.page.slug)]))};function mc(e){if(!e.startsWith(`#/`))return null;let t=e.slice(1);return pc[t]??t}var hc=K.name,gc={title:hc,description:`Cloud operator and software engineer in Berlin: Kubernetes platforms, infrastructure as code and automation, open-source projects and a physics background.`,canonical:`${dc}/`};function _c(e,t=155){return e.length<=t?e:e.slice(0,e.lastIndexOf(` `,t-1)).replace(/[,;:]$/,``)+`…`}function vc(e){let t=e.replace(/\/+$/,``)||`/`;if(t===q.home)return gc;if(t===q.about)return{title:`About · ${hc}`,description:_c(K.about[0]),canonical:dc+t};let n=Qs.find(e=>q.experience(e.slug)===t);if(n){let[e]=n.positions;return{title:`${n.tileTitle} at ${n.shortCompany??n.company} · ${hc}`,description:_c(`${e.title}, ${n.company} (${e.period}). ${n.summary}`),canonical:dc+t}}let r=fc.find(e=>q.project(e.page.slug)===t);return r?{title:`${$s(r.title)} · ${hc}`,description:_c(r.page.intro),canonical:dc+t}:{title:`Page not found · ${hc}`,description:gc.description}}function yc(){N(()=>{if(!window.matchMedia?.(`(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)`)?.matches)return;let e=[],t=0,n=null,r=e=>{for(let t of e)t.style.removeProperty(`--lx`),t.style.removeProperty(`--ly`)},i=()=>{if(t=0,!n)return;let{clientX:i,clientY:a,target:o}=n,s=[],c=o instanceof Element?o.closest(`[data-light]`):null;for(;c instanceof HTMLElement;)s.push(c),c=c.parentElement?.closest(`[data-light]`)??null;r(e.filter(e=>!s.includes(e)));for(let e of s){let t=e.getBoundingClientRect();e.style.setProperty(`--lx`,`${i-t.left}px`),e.style.setProperty(`--ly`,`${a-t.top}px`)}e=s},a=e=>{n=e,t||=requestAnimationFrame(i)},o=()=>{n=null,r(e),e=[]};return window.addEventListener(`pointermove`,a,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,o),()=>{cancelAnimationFrame(t),window.removeEventListener(`pointermove`,a),document.documentElement.removeEventListener(`pointerleave`,o),r(e)}},[])}var J={primary:`#131316`,secondary:`#3f5787`,tint:`#3f578733`,text:`#ffffff`,muted:`rgba(255, 255, 255, 0.7)`,accent:`#8fa8dc`,sun:`#f0b860`},Y={peach:`#f2a46b`,rose:`#e0708f`,lavender:`#8f7ae6`,blue:`#4f6fb8`},X={display:`"Space Grotesk Variable", "Inter Variable", system-ui, sans-serif`,body:`"Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif`,mono:`"JetBrains Mono Variable", ui-monospace, SFMono-Regular, Menlo, monospace`},Z={mobile:`760px`},bc=`72px`,xc=`clamp(28px, 3.2vw, 56px)`,Sc=W`
  position: relative;
  margin-top: calc(-1 * ${xc});
  clip-path: polygon(0 0, 100% ${xc}, 100% 100%, 0 100%);
`,Cc=(e=420,t=.12)=>`radial-gradient(${e}px circle at var(--lx, -9999px) var(--ly, -9999px), rgba(255, 255, 255, ${t}), transparent 65%)`,wc=W`
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
        ${J.secondary}cc 80%,
        ${J.sun}80
      );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`,Tc=W`
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
`,Ec=0;Array.isArray;function Q(t,n,r,i,a,o){n||={};var s,c,l=n;if(`ref`in l&&typeof t!=`function`)for(c in l={},n)c==`ref`?s=n[c]:l[c]=n[c];var u={type:t,props:l,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ec,__i:-1,__u:0};return(a||o)&&(u.__source=a,u.__self=o),e.vnode&&e.vnode(u),u}function Dc({d:e,title:t}){return Q(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`,width:`100%`,height:`100%`,role:`img`,"aria-label":t,children:Q(`path`,{fill:`currentColor`,stroke:`currentColor`,strokeWidth:`0.1`,d:e})})}var Oc=()=>Q(Dc,{title:`GitHub`,d:`M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z`}),kc=()=>Q(Dc,{title:`LinkedIn`,d:`M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z`}),Ac=()=>Q(Dc,{title:`Stack Overflow`,d:`M 9.914063 0.71875 L 9.085938 1.28125 L 11.894531 5.367188 L 12.71875 4.800781 Z M 7.695313 2.453125 L 7.039063 3.207031 L 10.917969 6.582031 L 11.574219 5.828125 Z M 6.226563 4.804688 L 5.773438 5.695313 L 10.210938 7.953125 L 10.664063 7.0625 Z M 5.363281 7.140625 L 5.136719 8.109375 L 9.976563 9.242188 L 10.203125 8.265625 Z M 3 9 L 3 14 L 12 14 L 12 9 L 11 9 L 11 13 L 4 13 L 4 9 Z M 5.03125 9.25 L 4.96875 10.25 L 9.972656 10.566406 L 10.035156 9.570313 Z M 5 11 L 5 12 L 10 12 L 10 11 Z`}),jc=({dir:e=`right`})=>Q(`svg`,{className:`chevron chevron-${e}`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`,width:`0.72em`,height:`0.72em`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:Q(`path`,{d:e===`left`?`M10 2.5 4.5 8l5.5 5.5`:`M6 2.5l5.5 5.5L6 13.5`})}),Mc=()=>Q(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:Q(`path`,{d:`M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14`})}),Nc=()=>Q(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`6 17 52 29`,width:`100%`,height:`100%`,"aria-hidden":`true`,children:[Q(`defs`,{children:Q(`linearGradient`,{id:`mark-sun`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[Q(`stop`,{offset:`0`,stopColor:`#f6cd85`}),Q(`stop`,{offset:`1`,stopColor:`#e9a443`})]})}),Q(`circle`,{className:`mark-dot`,cx:`12`,cy:`39.5`,r:`4.2`,fill:`url(#mark-sun)`}),Q(`path`,{d:`M27.8 43.46Q24.6 43.46 22.55 42.08Q20.5 40.69 20.08 38.12L23.9 37.13Q24.13 38.28 24.68 38.94Q25.22 39.6 26.03 39.88Q26.84 40.16 27.8 40.16Q29.25 40.16 29.94 39.65Q30.64 39.14 30.64 38.38Q30.64 37.62 29.98 37.21Q29.32 36.8 27.86 36.53L26.94 36.37Q25.22 36.04 23.8 35.46Q22.39 34.88 21.53 33.86Q20.67 32.84 20.67 31.22Q20.67 28.78 22.45 27.47Q24.23 26.17 27.14 26.17Q29.88 26.17 31.69 27.39Q33.51 28.61 34.07 30.59L30.21 31.78Q29.94 30.53 29.13 30Q28.33 29.47 27.14 29.47Q25.95 29.47 25.32 29.88Q24.7 30.3 24.7 31.02Q24.7 31.81 25.36 32.19Q26.02 32.57 27.14 32.77L28.06 32.94Q29.91 33.27 31.41 33.81Q32.91 34.35 33.79 35.36Q34.66 36.37 34.66 38.08Q34.66 40.66 32.8 42.06Q30.93 43.46 27.8 43.46Z`,fill:`#eef1f8`}),Q(`path`,{d:`M37.29 43V19.9H41.45V28.64H42.04Q42.31 28.12 42.87 27.59Q43.43 27.06 44.37 26.71Q45.31 26.37 46.76 26.37Q48.68 26.37 50.11 27.24Q51.55 28.12 52.34 29.65Q53.13 31.19 53.13 33.23V43H48.97V33.56Q48.97 31.71 48.07 30.79Q47.16 29.87 45.48 29.87Q43.56 29.87 42.51 31.14Q41.45 32.41 41.45 34.68V43Z`,fill:`#eef1f8`})]});function Pc(e){return Q(`a`,{target:`_blank`,rel:`noopener noreferrer`,...e})}function Fc(e,t){let[n,r]=je();return N(()=>{if(!t)return;let n=e.flatMap(e=>{let t=document.getElementById(e);return t?[t]:[]}),i=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?r(t.target.id):r(e=>e===t.target.id?void 0:e)},{rootMargin:`-50% 0px -50% 0px`});for(let e of n)i.observe(e);return()=>i.disconnect()},[e,t]),t?n:void 0}function Ic(e){let t=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`;e===null?window.scrollTo({top:0,behavior:t}):document.getElementById(e)?.scrollIntoView({behavior:t})}function Lc(){let{pathname:e}=L(),t=Cr();return n=>r=>{e===q.home&&(r.preventDefault(),Ic(n),t(n?q.section(n):q.home,{replace:!0}))}}var Rc={github:Oc,linkedin:kc,stackoverflow:Ac},zc=G.header`
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
    ${J.primary}99;
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
      ${J.sun}59 85%,
      rgba(255, 255, 255, 0.04)
    );
  }
`,Bc=G.span`
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
  @media (max-width: ${Z.mobile}) {
    span {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }
  }
`,Vc=G.div`
  position: absolute;
  inset: auto 0 0;
  height: 2px;
  background: linear-gradient(90deg, ${J.sun}, ${J.sun}66);
  transform-origin: left;
  transform: scaleX(0);
  display: none;

  @supports (animation-timeline: scroll()) {
    display: block;
    animation: nav-progress linear both;
    animation-timeline: scroll(root block);
  }
`,Hc=G.nav`
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.4vw, 20px);
`,Uc=W`
  position: relative;
  color: ${J.text};
  font-size: clamp(1rem, 1.7vw, 1.3rem);
  font-family: ${X.display};
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
    background: ${J.sun};
    transform: scaleX(0);
    transition: transform 300ms ease;
  }
  &:hover {
    color: ${J.text};
  }
  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`,Wc=G(Li)`
  ${Uc}
`,Gc=G(R)`
  ${Uc}
`;function Kc({id:e,active:t,children:n}){let r=Lc();return Q(Gc,{to:q.section(e),onClick:r(e),className:t?`active`:void 0,"aria-current":t?`location`:void 0,children:n})}var qc=G(Pc)`
  display: block;
  width: 32px;
  height: 32px;
  color: ${J.text};
  transition:
    color 250ms ease,
    transform 250ms ease;

  &:hover {
    color: ${J.accent};
    transform: translateY(-2px);
  }

  /* Phones: the profiles stay in the footer and the About contact card. */
  @media (max-width: ${Z.mobile}) {
    display: none;
  }
`,Jc=[`experience`,`work`];function Yc(){let{pathname:e}=L(),t=e===q.home,n=Fc(Jc,t),r=Lc();return Q(zc,{children:[Q(Gc,{to:q.home,onClick:r(null),className:t&&!n?`active`:void 0,children:Q(Bc,{children:[Q(Nc,{}),Q(`span`,{children:`Home`})]})}),Q(Hc,{children:[Q(Kc,{id:`experience`,active:n===`experience`,children:`Experience`}),Q(Kc,{id:`work`,active:n===`work`,children:`Work`}),Q(Wc,{to:`/about`,children:`About Me`}),Zs.map(({label:e,href:t,icon:n})=>{let r=Rc[n];return Q(qc,{href:t,"aria-label":e,title:e,children:Q(r,{})},e)})]}),Q(Vc,{"aria-hidden":`true`})]})}var Xc=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,Zc=G.a`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 200;
  padding: 10px 18px;
  border-radius: 999px;
  background: ${J.primary};
  color: ${J.text};
  font-family: ${X.mono};
  font-size: 0.82rem;
  translate: 0 -200%;

  &:focus-visible {
    translate: 0;
  }
`,Qc=e=>{e.preventDefault(),document.querySelector(`main`)?.focus()},$c=G.div`
  min-height: 100vh;
  background-color: ${J.primary};
  color: ${J.text};
  font-family: ${X.body};
  line-height: 1.6;

  &::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 200;
    pointer-events: none;
    background-image: ${Xc};
    opacity: 0.045;
    mix-blend-mode: overlay;
  }
`,el=G.footer`
  ${Sc}
  background: ${J.primary};
  padding: calc(${xc} + 40px) 16px 40px;
  text-align: center;
  font-size: 0.85rem;
  color: ${J.muted};

  nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 20px;
    margin-bottom: 14px;
    font-family: ${X.mono};
    font-size: 0.78rem;
  }
`;function tl({children:e}){let{pathname:t,hash:n}=L();yc();let r=Pe(null);return N(()=>{if(r.current===t)return;r.current=t;let e=n&&document.getElementById(n.slice(1));e?e.scrollIntoView():window.scrollTo(0,0)},[t,n]),N(()=>{document.title=vc(t).title},[t]),Q($c,{children:[Q(Zc,{href:`#content`,onClick:Qc,children:`Skip to content`}),Q(Yc,{}),Q(`main`,{tabIndex:-1,children:e}),Q(el,{children:[Q(`nav`,{"aria-label":`Contact`,children:[Q(`a`,{href:`mailto:${K.email}`,children:K.email}),Zs.map(e=>Q(Pc,{href:e.href,children:e.label},e.label))]}),`Made using Vite + Preact + TypeScript.`,Q(`br`,{}),K.name,` `,new Date().getFullYear(),`.`]})]})}var nl=`/assets/coast-sunset-DuZU3pnE.webp`,rl=`/assets/coast-sunset-800-DkqGpYs2.webp`,il=`/assets/portrait-C-wu8zzx.webp`;function $(e,t=0,n=`translateY(14px)`){let r=600+120*t;return{opacity:+!!e,transform:e?`none`:n,transition:`opacity 350ms ease-out, transform ${r}ms ease-in-out, translate 300ms ease, box-shadow 300ms ease`}}function al(e=`-35% 0px -35% 0px`){let t=Pe(null),[n,r]=je(!1);return N(()=>{let n=t.current;if(!n)return;let i=new IntersectionObserver(([e])=>r(e.isIntersecting),{rootMargin:e,threshold:0});return i.observe(n),()=>i.disconnect()},[e]),[t,n]}var ol={dusk:[`radial-gradient(46% 52% at 22% 92%, ${Y.peach}b3, transparent 70%),
     radial-gradient(40% 50% at 50% 84%, ${Y.rose}a6, transparent 70%),
     radial-gradient(42% 52% at 80% 78%, ${Y.lavender}a6, transparent 70%)`,`radial-gradient(36% 42% at 88% 26%, ${Y.blue}99, transparent 70%),
     radial-gradient(30% 36% at 8% 40%, ${Y.rose}66, transparent 70%),
     radial-gradient(34% 30% at 46% 10%, ${Y.lavender}4d, transparent 70%)`],tide:[`radial-gradient(36% 42% at 16% 80%, ${Y.blue}80, transparent 70%),
     radial-gradient(34% 40% at 84% 22%, ${Y.lavender}73, transparent 70%)`,`radial-gradient(26% 30% at 62% 92%, ${Y.rose}4d, transparent 70%),
     radial-gradient(22% 26% at 30% 14%, ${Y.peach}40, transparent 70%)`]},sl=Ws`
  from { transform: translate3d(-3%, 2%, 0) scale(1); }
  to   { transform: translate3d(3%, -3%, 0) scale(1.08); }
`,cl=G.div`
  position: absolute;
  inset: -100px 0; /* room for the parallax shift */
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: ${e=>e.$visible?1:.35};
  transition: opacity 1.4s ease;
`,ll=G.div`
  position: absolute;
  inset: -12%;
  background: ${e=>e.$background};
  animation: ${sl} ${e=>e.$reverse?26:19}s ease-in-out infinite
    alternate${e=>e.$reverse?`-reverse`:``};
  will-change: transform;
`;function ul({variant:e,visible:t}){let[n,r]=ol[e];return Q(cl,{$visible:t,"aria-hidden":`true`,className:`parallax`,style:{"--parallax":`80px`},children:[Q(ll,{$background:r,$reverse:!0}),Q(ll,{$background:n})]})}var dl=`-70 -100 2290 1080`,fl=[[{d:`M-296.187643,563.346753C252.035708,285.454227,433.516541,470.71591,926.917556,270.330824Q1420.318571,69.945738,2289.91423,287.344652`,transform:`translate(.000001 0.000002)`},{d:`M-305.639769,875.266935c716.471206-444.249956,315.701032,20.794678,862.033957-58.603186s839.348854-542.552073,948.993524-474.496761-13.232978,693.7861,586.031857,576.579729q599.264835-117.206371,204.165937-73.726588`,transform:`translate(.000001 0.000001)`}],[{d:`M-341.557851,213.618064C686.833537,612.497812,794.587782,173.919132,1533.744092,497.181866s806.011511,164.140879,1113.689668,284.67459`,transform:`translate(.000001 0)`},{d:`M-305.642155,686.698263c1487.639747-107.845952-6.343879,57.094916,1122.866675,241.067422s-25.375519-926.206412,938.894168-735.890026q964.269687,190.316386,1049.91206,418.696049`,transform:`translate(.000002 0.000001)`}],[{d:`M-173.309995,461.263784C785.135655,175.809557,998.753719,601.15526,1354.153684,323.262734s-117.206372,858.253107,431.016978,676.772274-7.561701-697.566953,361.071241-801.540347q368.632942-103.973394,111.535095-26.465956`,transform:`translate(-26.465953-63.423702)`},{d:`M-78.788728,145.446611C974.17819,500.962717,-473.887625,984.911605,745.436723,907.404166s680.553123-476.387185,1342.201994-446.140381q661.648871,30.246804,160.686154,11.342549`,transform:`translate(.000003 0.000003)`}],[{d:`M-209.228077,516.086119C1034.671801,120.987222,-275.392965,32.13723,770.012252,94.521267s534.990372,741.046737,1257.132854,597.37441q722.142482-143.672327,230.631891-45.370209`,transform:`translate(18.904257 116.278378)`},{d:`M-118.48766,877.15736c1385.681778-20.794678-120.987223-103.973394,1128.583931-351.619114q1249.571154-247.64572,1209.872221-393.208472`,transform:`translate(28.35638 7.561701)`}],[{d:`M-109.035533,26.465955C265.268685,640.854192,87.568702,1034.062665,764.340976,998.144583s582.251006-510.414843,1283.598809-720.252057q701.347803-209.837214,207.946788-60.493611`,transform:`translate(.000002 -100)`},{d:`M-194.104674,349.728689C1040.343077,463.15421,1136.754769,914.965866,1839.992998,784.526518q703.238229-130.439348,415.893577-138.00105`,transform:`translate(0 0)`}],[{d:`M-231.913181,506.633993C637.682478,111.535095,671.710134,310.029757,1284.207946,119.096797q612.497812-190.93296,962.226501,219.28934`,transform:`translate(0 0)`},{d:`M-165.748294,158.795729C819.163311,714.580781,388.146332,943.322247,1108.398389,854.472256s47.260632-266.549974,739.156309-355.399965q691.895677-88.849991,398.879748-54.822335`,transform:`translate(.000001 0)`}],[{d:`M-152.515316,943.322248C875.876072,296.796779,985.520741,1226.886049,1518.620689,776.964817q533.099948-449.921232,731.594608-493.401016`,transform:`translate(.000002 0.000002)`},{d:`M-152.515314,809.102048C947.712235,109.64467,558.284614,888.499912,1329.578155,466.93506Q2100.871696,45.370208,2240.76317,69.945738`,transform:`translate(.000001 0)`}],[{d:`M-75.007877,0C174.528268,550.113776,142.391038,1064.30947,690.614388,1005.706284s586.031856-523.64782,1170.173288-565.237178q584.141432-41.589358,391.318046-30.246806`,transform:`translate(.000002 -40)`},{d:`M-188.433398,336.495712C856.971818,790.197795,694.395238,424.189701,1184.015403,505.110779s449.921231,636.706129,1007.596708,417.416789`,transform:`translate(100.000001 0.000002)`}]];function pl({variant:e,visible:t,color:n}){return Q(`svg`,{xmlns:`http://www.w3.org/2000/svg`,shapeRendering:`geometricPrecision`,viewBox:dl,"aria-hidden":`true`,focusable:`false`,children:fl[e-1].map(e=>Q(`path`,{className:t?`draw`:`fade-out`,d:e.d,transform:e.transform,stroke:n,strokeWidth:`3.84`,strokeMiterlimit:`10`,fill:`none`},e.d))})}var ml=G.section`
  position: relative;
  display: grid;
  /* Page-top sections fill the screen; later ones take at least 85% of it,
     so each still reads as its own "page" without large empty bands. */
  ${e=>e.$compact?W`
          min-height: 85vh;
          min-height: 85svh;
        `:W`
          min-height: 100vh;
          min-height: 100svh;
        `}
  /* Opaque, so a slanted section fully covers the strip it overlaps. */
  background-color: ${J.primary};
  background-image: ${e=>e.$tinted?`linear-gradient(${J.tint}, ${J.tint})`:`none`};
  /* clip (not hidden) keeps the curves contained without becoming a scroll
     container, so position: sticky still works inside sections. */
  overflow: hidden;
  overflow: clip;
  scroll-margin-top: ${bc};

  ${e=>e.$slant&&Sc}
`,hl=G.div`
  position: relative;
  display: grid;
  align-content: center;
  padding: ${e=>e.$compact?`calc(${xc} + clamp(64px, 8vw, 112px)) clamp(16px, 4vw, 48px) clamp(64px, 8vw, 112px)`:`calc(${bc} + 40px) clamp(16px, 4vw, 48px) 72px`};

  /* Phones: less air under the nav on page-top sections. */
  @media (max-width: ${Z.mobile}) {
    ${e=>!e.$compact&&`padding-top: calc(72px + 20px);`}
  }
`,gl=G.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url(${e=>e.$photo.large}) center / cover no-repeat;
  filter: grayscale(0.25) brightness(0.6) contrast(1.05);
  opacity: ${e=>e.$visible?.27:0};

  @media (max-width: ${Z.mobile}) {
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
`,_l=G.div`
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
`,vl=G.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;function yl({curves:e,tinted:t=!1,slant:n=!1,compact:r=!1,photo:i,aurora:a,backdrop:o,id:s,children:c}){let[l,u]=al();return Q(ml,{ref:l,id:s,$tinted:t,$slant:n,$compact:r,children:Q(hl,{$compact:r,children:[i&&Q(gl,{$photo:i,$visible:u,"aria-hidden":`true`}),a&&Q(ul,{variant:a,visible:u}),o?.(u),e!==void 0&&Q(_l,{className:`parallax`,style:{"--parallax":`36px`},children:Q(pl,{variant:e,visible:u,color:J.secondary})}),Q(vl,{children:c(u)})]})})}var bl={"data-light":``},xl=G.div.attrs(bl)`
  ${wc}
  ${Tc}
  padding: 20px 24px;
`,Sl=G.div.attrs(bl)`
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
      ${Y.lavender}1f,
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
`,Cl=G.h2`
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0 0 32px;
`,wl=G.span`
  color: ${J.sun};
`,Tl=G.span`
  color: ${J.muted};
`,El=G.div`
  font-family: ${X.mono};
  color: ${J.sun};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,Dl=G(El)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  &::after {
    content: "";
    width: 48px;
    height: 1px;
    background: ${J.sun}99;
  }
`,Ol=G.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`,kl=G.li`
  font-family: ${X.mono};
  font-size: 0.76rem;
  padding: 4px 11px;
  border-radius: 999px;
  border: 1px solid ${J.secondary};
  background: ${J.secondary}2e;
  white-space: nowrap;

  ${e=>e.$core&&W`
      border-color: ${J.sun}b3;
      background: ${J.sun}1a;
      color: ${J.text};
      font-weight: 500;
    `}
`,Al=G.a.attrs(bl)`
  ${wc}
  ${Tc}
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 22px;
  border: 0;
  border-radius: 999px;
  color: ${J.text};
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${J.text};
  }
  svg {
    width: 18px;
    height: 18px;
  }

  ${e=>e.$primary&&W`
      background:
        ${Cc(200,.18)},
        linear-gradient(120deg, ${J.sun}40, ${Y.rose}33),
        rgba(19, 19, 22, 0.3);
      box-shadow:
        0 10px 32px ${Y.peach}2e,
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    `}
`,jl=G.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: center;

  @media (max-width: ${Z.mobile}) {
    grid-template-columns: 1fr;
  }
`,Ml=W`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`,Nl=G.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: ${Z.mobile}) {
    > * {
      flex: 1 1 auto;
      justify-content: center;
    }
  }
`,Pl=W`
  .chevron {
    flex-shrink: 0;
    transition: translate 250ms ease;
  }
  &:hover .chevron-right,
  &:focus-visible .chevron-right {
    translate: 3px 0;
  }
  &:hover .chevron-left,
  &:focus-visible .chevron-left {
    translate: -3px 0;
  }
`,Fl=W`
  content: "";
  width: 6px;
  height: 6px;
  border-top: 1.5px solid currentColor;
  border-right: 1.5px solid currentColor;
  rotate: 45deg;
`,Il=G(R)`
  ${Pl}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  font-family: ${X.mono};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${J.muted};
  white-space: nowrap;

  &:hover {
    color: ${J.sun};
  }

  @media (max-width: ${Z.mobile}) {
    order: -1;
    flex-basis: 100%;
    margin: 0 0 4px;
  }
`,Ll=G.div`
  margin: 32px 0 12px;
  font-family: ${X.mono};
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${J.muted};
`,Rl=G.ul`
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
    color: ${J.sun};
  }
`,zl=G.nav`
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

  @media (max-width: ${Z.mobile}) {
    flex-direction: column;
    align-items: flex-start;

    > :last-child:not(:only-child) {
      align-self: flex-end;
    }
  }
`,Bl=G(R)`
  ${Pl}
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  color: ${J.muted};
  transition: color 250ms ease;

  &:hover,
  &:focus-visible {
    color: ${J.sun};
  }
`,Vl={github:Oc,linkedin:kc,stackoverflow:Ac},Hl=G.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: clamp(16px, 2.5vw, 28px);
  align-items: start;
  transition: gap 1s ease;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Ul=G(Sl)`
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: 1.05;
  }
  p {
    font-size: clamp(1rem, 1.2vw, 1.06rem);
    line-height: 1.8;
    margin: 0 0 16px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,Wl=G.div`
  display: flex;
  align-items: center;
  gap: clamp(18px, 2.5vw, 28px);
  margin: 10px 0 22px;

  h1 {
    margin: 0;
  }
`,Gl=G.div`
  flex-shrink: 0;
  width: clamp(76px, 9vw, 112px);
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background: conic-gradient(
    from 200deg,
    ${J.sun},
    ${J.secondary} 35%,
    ${J.accent} 60%,
    ${J.secondary} 80%,
    ${J.sun}
  );
  box-shadow:
    0 0 48px ${J.sun}2e,
    0 16px 40px rgba(0, 0, 0, 0.5);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid ${J.primary};
  }
`,Kl=G(Sl)`
  padding: clamp(22px, 3vw, 32px);

  h2 {
    font-size: 1.35rem;
    margin: 8px 0 4px;
  }
  > p {
    margin: 0 0 22px;
    line-height: 1.6;
  }
`,ql=G.dl`
  margin: 0 0 24px;

  div {
    padding: 12px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
  div:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  dt {
    font-family: ${X.mono};
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${J.muted};
  }
  dd {
    margin: 2px 0 0;
    overflow-wrap: anywhere;
  }
`,Jl=G.div`
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
`;function Yl(){let e=K.phone.replace(/\s/g,``);return Q(S,{children:[Q(yl,{curves:4,photo:{large:nl,small:rl},aurora:`dusk`,children:t=>Q(Hl,{className:t?`flex-faded-in-reduced`:`flex-faded-out-reduced`,children:[Q(Ul,{style:$(t,0),children:[Q(El,{children:K.headline}),Q(Wl,{children:[Q(Gl,{children:Q(`img`,{src:il,alt:`Portrait of ${K.name}`,width:480,height:480,fetchPriority:`high`})}),Q(`h1`,{children:[`About me`,Q(wl,{children:`.`})]})]}),K.about.map(e=>Q(`p`,{children:e},e.slice(0,32)))]}),Q(Kl,{as:`aside`,style:$(t,2,`translateY(22px)`),children:[Q(El,{children:`Contact`}),Q(`h2`,{children:`Get in touch`}),Q(`p`,{children:Q(Tl,{children:`For project inquiries, feel free to reach out.`})}),Q(ql,{children:[Q(`div`,{children:[Q(`dt`,{children:`Email`}),Q(`dd`,{children:Q(`a`,{href:`mailto:${K.email}`,children:K.email})})]}),Q(`div`,{children:[Q(`dt`,{children:`Phone`}),Q(`dd`,{children:Q(`a`,{href:`tel:${e}`,children:K.phone})})]}),Q(`div`,{children:[Q(`dt`,{children:`Location`}),Q(`dd`,{children:K.location})]})]}),Q(Nl,{children:[Q(Al,{$primary:!0,href:K.cvUrl,download:!0,children:[Q(Mc,{}),`Download CV`]}),Zs.map(({label:e,href:t,icon:n})=>{let r=Vl[n];return Q(Al,{as:Pc,href:t,children:[Q(r,{}),e]},e)})]})]})]})}),Q(yl,{curves:6,tinted:!0,aurora:`tide`,slant:!0,compact:!0,children:e=>Q(S,{children:[Q(`div`,{style:$(e),children:[Q(Dl,{children:`beyond work`}),Q(Cl,{children:[`Volunteering & open source`,Q(wl,{children:`.`})]})]}),Q(Jl,{children:uc.map((t,n)=>Q(xl,{style:$(e,n+1),children:[Q(El,{children:t.period}),Q(`h3`,{children:t.title}),Q(Tl,{children:t.organization}),t.description&&Q(`p`,{children:t.description}),t.link&&Q(`p`,{children:Q(Pc,{href:t.link.href,children:[t.link.label,` ↗`]})})]},t.title))})]})})]})}var Xl=G(Sl)`
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
`;function Zl(){return Q(yl,{curves:3,aurora:`dusk`,children:e=>Q(Xl,{style:$(e),children:[Q(El,{children:`404 · page not found`}),Q(`h1`,{children:[`Nothing here`,Q(wl,{children:`.`})]}),Q(`p`,{children:`This page doesn't exist, or it has moved. Everything on the site is a click away from the home page.`}),Q(Nl,{children:[Q(Al,{as:R,to:q.home,$primary:!0,children:`Home`}),Q(Al,{as:R,to:q.section(`experience`),children:`Experience`}),Q(Al,{as:R,to:q.section(`work`),children:`Selected work`})]})]})})}var Ql=G(Sl)`
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px);
`,$l=G.div`
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
`,eu=G.div`
  & + & {
    margin-top: 36px;
    padding-top: 28px;
    border-top: 1px solid ${J.secondary}66;
  }

  h1,
  h2 {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    line-height: 1.15;
    margin: 0 0 4px;
  }
`;function tu(){let{slug:e}=Tr(),t=Qs.findIndex(t=>t.slug===e);if(t===-1)return Q(Zl,{});let n=Qs[t],r=Qs[t-1],i=Qs[t+1];return Q(yl,{curves:n.curves,tinted:!0,aurora:`tide`,children:e=>Q(Ql,{style:$(e),children:[Q($l,{children:[Q(`img`,{src:n.logo,alt:`${n.company} logo`}),Q(Tl,{children:n.company}),Q(Il,{to:q.section(`experience`),children:[Q(jc,{dir:`left`}),`All roles`]})]}),n.positions.map((t,n)=>Q(eu,{children:[Q(n===0?`h1`:`h2`,{children:t.title}),Q(El,{children:t.period}),Q(Rl,{children:t.bullets.map((t,n)=>Q(`li`,{className:e?`slide-in`:`slide-out`,style:{transition:`transform ${1e3+200*n}ms ease-in-out`},children:t},t))})]},t.title)),Q(Ll,{id:`technologies`,children:`Technologies`}),Q(Ol,{"aria-labelledby":`technologies`,children:n.tags.map(e=>Q(kl,{children:e},e))}),Q(zl,{"aria-label":`Other experience`,children:[r&&Q(Bl,{to:q.experience(r.slug),children:[Q(jc,{dir:`left`}),r.tileTitle]}),i&&Q(Bl,{to:q.experience(i.slug),children:[i.tileTitle,Q(jc,{})]})]})]})})}var nu=G.div`
  align-self: start;
  position: sticky;
  top: calc(${bc} + 40px);

  @media (max-width: ${Z.mobile}) {
    position: static;
  }
`,ru=G.div`
  display: grid;
  gap: 14px;
`,iu=G(xl)`
  h3 {
    margin: 4px 0 2px;
    font-size: 1.1rem;
  }
  p {
    margin: 8px 0 0;
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;function au(){return Q(yl,{id:`education`,curves:3,aurora:`tide`,slant:!0,compact:!0,children:e=>Q(jl,{children:[Q(nu,{style:$(e),children:[Q(Dl,{children:`04 / education`}),Q(Cl,{children:[`Academic background`,Q(wl,{children:`.`})]})]}),Q(ru,{children:lc.map((t,n)=>Q(iu,{style:$(e,n,`translateX(15px)`),children:[Q(El,{children:t.period}),Q(`h3`,{children:t.title}),Q(Tl,{children:t.institution}),t.details.map(e=>Q(`p`,{children:e},e)),t.link&&Q(`p`,{children:Q(Pc,{href:t.link.href,children:[t.link.label,` ↗`]})})]},t.title))})]})})}var ou=Qs.reduce((e,t)=>{let n=e.at(-1);return n&&n.company===t.company?n.roles.push(t):e.push({company:t.company,logo:t.logo,roles:[t]}),e},[]),su=tc({positions:lc.filter(e=>e.institution.startsWith(`University of Oslo`)&&/Sc\./.test(e.title)).map(e=>({title:e.title,period:e.period,bullets:[]}))}),cu=G.ol`
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
      ${J.sun},
      ${J.accent} 30%,
      ${J.secondary} 80%,
      ${J.secondary}00
    );
    transform-origin: top;
    transform: scaleY(${e=>+!!e.$grow});
    transition: transform 1.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  @media (max-width: ${Z.mobile}) {
    --years: 0px;
    --rail: ${`26px`};
  }
`,lu=G.li`
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
`,uu=G.div`
  padding-top: ${e=>e.$origin?`4px`:`22px`};
  text-align: right;
  font-family: ${X.mono};
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  color: ${e=>e.$current?J.sun:J.muted};
  white-space: nowrap;

  @media (max-width: ${Z.mobile}) {
    display: none;
  }
`,du=Ws`
  0%, 100% { box-shadow: 0 0 0 0 ${J.sun}66, 0 0 18px ${J.sun}55; }
  50% { box-shadow: 0 0 0 7px ${J.sun}00, 0 0 26px ${J.sun}77; }
`,fu=G.span`
  justify-self: center;
  margin-top: 24px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${J.primary};
  border: 2px solid ${J.accent};
  box-shadow: 0 0 0 4px ${J.primary};

  ${e=>e.$current&&W`
      background: ${J.sun};
      border-color: #f6cd85;
      animation: ${du} 2.8s ease-in-out infinite;
    `}
  ${e=>e.$hollow&&W`
      margin-top: 6px;
      border-color: ${J.secondary};
      border-style: dashed;
    `}
`,pu=G(xl)`
  padding: clamp(16px, 2.2vw, 22px) clamp(16px, 2.4vw, 26px);
`,mu=G.header`
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
    font-family: ${X.mono};
    font-size: 0.74rem;
    color: ${J.muted};
    white-space: nowrap;
  }
  @media (max-width: ${Z.mobile}) {
    span {
      display: block;
    }
  }
`,hu=G.div`
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
    background: ${J.secondary};
    mix-blend-mode: color;
    opacity: 0.85;
    transition: opacity 500ms ease;
  }
  ${pu}:hover &::after,
  ${pu}:focus-within &::after {
    opacity: 0;
  }
  ${pu}:hover & img,
  ${pu}:focus-within & img {
    filter: none;
  }
`,gu=G.ol`
  display: grid;
  gap: 4px;
  list-style: none;
  margin: 0 -12px;
  padding: 0;
`,_u=G(R)`
  position: relative;
  display: block;
  padding: 12px 40px 12px 12px;
  border-radius: 12px;
  color: ${J.text};
  transition: background 250ms ease;

  &:hover,
  &:focus-visible {
    color: ${J.text};
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
    ${Fl}
    position: absolute;
    top: 18px;
    right: 18px;
    color: ${J.muted};
    transition:
      translate 250ms ease,
      color 250ms ease;
  }
  &:hover::after,
  &:focus-visible::after {
    translate: 4px 0;
    color: ${J.sun};
  }
`,vu=G.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2px 12px;
  ${e=>e.$step&&W`
      padding-left: 18px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.5em;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        border: 1.5px solid ${J.accent};
      }
    `}

  strong {
    font-family: ${X.display};
    font-size: 1.12rem;
    font-weight: 600;
  }
  & + & {
    margin-top: 4px;
  }
`,yu=G.span`
  font-family: ${X.mono};
  font-size: 0.76rem;
  color: ${J.muted};
  white-space: nowrap;
`,bu=G.span`
  font-family: ${X.mono};
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 1px 8px;
  border-radius: 999px;
  color: ${J.sun};
  border: 1px solid ${J.sun}80;
  background: ${J.sun}14;
`,xu=G.div`
  margin-top: 8px;
  font-family: ${X.mono};
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  color: ${J.accent};
`,Su=G(R)`
  display: block;
  padding: 2px 0 0;
  color: ${J.muted};
  font-size: 0.92rem;
  line-height: 1.6;

  strong {
    color: ${J.text};
    font-weight: 500;
  }
  span {
    color: ${J.accent};
    white-space: nowrap;
  }
  &:hover {
    color: ${J.text};
  }
  &:hover span {
    color: ${J.sun};
  }
`,Cu=e=>e.replace(` - `,` – `),wu=e=>e.positions.some(e=>/present/i.test(e.period));function Tu({exp:e,steps:t}){return Q(_u,{to:q.experience(e.slug),children:[e.positions.map(e=>Q(vu,{$step:t,children:[Q(`strong`,{children:e.title}),/present/i.test(e.period)&&Q(bu,{children:`now`}),Q(yu,{children:nc(e.period)})]},e.title)),Q(`p`,{children:e.summary}),Q(xu,{"aria-label":`Stack`,children:e.tags.slice(0,4).join(` · `)})]})}function Eu(){let e=Lc();return Q(yl,{id:`experience`,curves:2,tinted:!0,slant:!0,compact:!0,children:t=>Q(S,{children:[Q(`div`,{style:$(t),children:[Q(Dl,{children:`01 / experience`}),Q(Cl,{children:[`From physics to platforms`,Q(wl,{children:`.`})]})]}),Q(cu,{$grow:t,children:[ou.map((e,n)=>{let r=e.roles.flatMap(e=>e.positions),i=e.roles.some(wu),a=Cu(tc({positions:r})),o=$(t,n+1,`translateX(18px)`);return Q(lu,{children:[Q(uu,{$current:i,style:$(t,n+1),children:a}),Q(fu,{$current:i,style:$(t,n+1,`scale(0)`)}),Q(pu,{as:`article`,style:o,children:[Q(mu,{children:[Q(hu,{children:Q(`img`,{src:e.logo,alt:``,width:40,height:40})}),Q(`h3`,{children:e.company}),Q(`span`,{children:a})]}),Q(gu,{children:e.roles.map(e=>Q(`li`,{children:Q(Tu,{exp:e,steps:r.length>1})},e.slug))})]})]},e.company)}),Q(lu,{style:$(t,ou.length+1),children:[Q(uu,{$origin:!0,children:Cu(su)}),Q(fu,{$hollow:!0}),Q(Su,{to:q.section(`education`),onClick:e(`education`),children:[Q(`strong`,{children:`Where it started:`}),` physics at the University of Oslo, a BSc in physics and astronomy and then an MSc in computational science. `,Q(`span`,{children:`Education ↓`})]})]})]})]})})}var Du=1.2;function Ou([e,t],n=Du){return[t,n*(1-e*e)*t-e]}function ku(e,t,n=Du){let r=Ou(e,n),i=Ou([e[0]+r[0]*t/2,e[1]+r[1]*t/2],n),a=Ou([e[0]+i[0]*t/2,e[1]+i[1]*t/2],n),o=Ou([e[0]+a[0]*t,e[1]+a[1]*t],n);return[e[0]+t/6*(r[0]+2*i[0]+2*a[0]+o[0]),e[1]+t/6*(r[1]+2*i[1]+2*a[1]+o[1])]}function Au(e=600,t=Du){let n=.01,r=[2,0];for(let e=0;e<4e3;e++)r=ku(r,n,t);let i=[],a=!1;for(let e=0;e<4e3;e++){let e=ku(r,n,t),o=r[1]>0&&e[1]<=0&&e[0]>0;if(o&&a)break;o&&(a=!0),a&&i.push(e),r=e}let o=Math.max(1,Math.floor(i.length/e));return i.filter((e,t)=>t%o===0)}var ju=G.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: ${e=>+!!e.$visible};
  transition: opacity 1.6s ease;

  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Phones: the figure sits behind the text, so keep it faint. */
  @media (max-width: ${Z.mobile}) {
    canvas {
      opacity: 0.45;
    }
  }
`,Mu=G.div`
  position: absolute;
  right: clamp(16px, 4vw, 48px);
  bottom: calc(${xc} + 22px);
  font-family: ${X.mono};
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.4);

  span {
    margin-left: 1.6em;
  }

  @media (max-width: ${Z.mobile}) {
    display: none;
  }
`,Nu=`226, 230, 240`,Pu=`240, 184, 96`,Fu=`244, 238, 226`,Iu=.14,Lu=26,Ru=40,zu=4.4,Bu=6.6,Vu=3,Hu=4.2;function Uu({visible:e}){let t=Pe(null),n=Pe(null);return N(()=>{let r=t.current,i=r?.getContext(`2d`);if(!r||!i)return;let a=document.createElement(`canvas`),o=a.getContext(`2d`);if(!o)return;n.current||={particles:[],cycle:Au()};let s=n.current,c=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches,l=0,u=0,d=0,f=0,p=1,m=1,h=([e,t])=>[d+e*p,f-t*m],g=([e,t])=>{let n=Math.hypot(e/zu,t/Bu),r=Math.max(0,Math.min(1,(1-n)/.78));return r*r*(3-2*r)},_=e=>{let t=o;t.setTransform(e,0,0,e,0,0),t.clearRect(0,0,l,u),t.lineCap=`round`,t.lineJoin=`round`,t.strokeStyle=`rgba(${Nu}, 0.14)`,t.lineWidth=.6,t.beginPath(),t.moveTo(...h([-3,0])),t.lineTo(...h([Vu,0])),t.moveTo(...h([0,-4.2])),t.lineTo(...h([0,Hu]));for(let e=-2;e<=2;e++){if(e===0)continue;let[n,r]=h([e,0]);t.moveTo(n,r-3),t.lineTo(n,r+3)}for(let e=-3;e<=3;e++){if(e===0)continue;let[n,r]=h([0,e]);t.moveTo(n-3,r),t.lineTo(n+3,r)}t.stroke(),t.fillStyle=`rgba(${Nu}, 0.38)`,t.font=`10px ${X.mono}`;let[n,r]=h([Vu,0]);t.fillText(`x`,n+6,r+3.5);let[i,a]=h([0,Hu]);t.fillText(`ẋ`,i+6,a+4);let c=Math.max(20,Math.min(28,p*.34));t.lineWidth=.6;let _=1.9;for(let e=0,n=f-Bu*m;n<f+Bu*m;e++){for(let r=d-zu*p+e%2*(c/2);r<d+zu*p;r+=c){let e=[(r-d)/p,(f-n)/m];if(g(e)<=0)continue;let i=[e];for(let t=0;t<12;t++){let[t,n]=Ou(e),r=Math.hypot(t*p,n*m)||1;e=[e[0]+t/r*_,e[1]+n/r*_],i.push(e)}for(let e=1;e<i.length;e++){let n=(.05+.42*(e/i.length))*g(i[e]);n<.01||(t.strokeStyle=`rgba(${Nu}, ${n})`,t.beginPath(),t.moveTo(...h(i[e-1])),t.lineTo(...h(i[e])),t.stroke())}}n+=c}t.strokeStyle=`rgba(${Pu}, 0.62)`,t.lineWidth=1,t.beginPath(),s.cycle.forEach((e,n)=>n===0?t.moveTo(...h(e)):t.lineTo(...h(e))),t.closePath(),t.stroke()},v=()=>{let e;do e=[(Math.random()*2-1)*zu,(Math.random()*2-1)*Bu];while(g(e)<.35);return{p:e,trail:[],age:0,life:7+Math.random()*7}},y=()=>{let e=Math.min(window.devicePixelRatio||1,2);l=r.clientWidth,u=r.clientHeight;for(let t of[r,a])t.width=Math.round(l*e),t.height=Math.round(u*e);i.setTransform(e,0,0,e,0,0);let t=l<760;d=l*(t?.5:.74),f=u*(t?.58:.45),p=t?l*.15:Math.min(l*.075,u*.124),m=p*.6,s.particles.length===0&&(s.particles=Array.from({length:Lu},()=>{let e=v();return e.age=Math.random()*e.life,e}));for(let e of s.particles)e.trail=[];_(e),b()},b=()=>{i.clearRect(0,0,l,u),i.drawImage(a,0,0,l,u),!c&&(i.lineCap=`round`,i.lineWidth=.9,s.particles.forEach((e,t)=>{if(e.trail.length<2)return;let n=Math.max(0,Math.min(1,e.age,e.life-e.age))*g(e.p),r=t%6==0?Pu:Fu;for(let t=1;t<e.trail.length;t++){let a=t/e.trail.length;i.strokeStyle=`rgba(${r}, ${.6*a*a*n})`,i.beginPath(),i.moveTo(...h(e.trail[t-1])),i.lineTo(...h(e.trail[t])),i.stroke()}}))},x=e=>{for(let t=0;t<s.particles.length;t++){let n=s.particles[t];n.age+=e,n.age>n.life&&(n=s.particles[t]=v()),n.p=ku(n.p,e*Iu),n.trail.push(n.p),n.trail.length>Ru&&n.trail.shift()}},S=new ResizeObserver(y);if(S.observe(r),y(),c||!e)return()=>S.disconnect();let C=0,w=performance.now(),T=e=>{let t=Math.min(.05,(e-w)/1e3);w=e,x(t),b(),C=requestAnimationFrame(T)};return C=requestAnimationFrame(T),()=>{cancelAnimationFrame(C),S.disconnect()}},[e]),Q(ju,{$visible:e,"aria-hidden":`true`,children:[Q(`canvas`,{ref:t}),Q(Mu,{children:[`ẍ − μ(1 − x²)ẋ + x = 0`,Q(`span`,{children:[`μ = `,Du]})]})]})}var Wu=G.div`
  max-width: 760px;
`,Gu=G.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-family: ${X.mono};
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${J.muted};

  &::before {
    content: "";
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${J.sun};
    box-shadow: 0 0 12px ${J.sun}99;
  }
`,Ku=G.h1`
  margin: clamp(18px, 3vh, 28px) 0 clamp(20px, 3vh, 28px);
  font-size: clamp(2.7rem, 7vw, 5.4rem);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.025em;

  /* Given names on the first line, the surname on the second. */
  > span {
    display: block;
  }
`,qu=G.p`
  max-width: 34em;
  margin: 0;
  font-size: clamp(1.02rem, 1.35vw, 1.16rem);
  line-height: 1.7;
  color: ${J.muted};
`,Ju=G.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 30px;
  margin-top: clamp(28px, 4.5vh, 40px);

  @media (max-width: ${Z.mobile}) {
    gap: 14px 24px;

    > :first-child {
      flex: 1 1 100%;
      justify-content: center;
    }
  }
`,Yu=G.a`
  ${Pl}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: ${J.text};
  opacity: 0.78;
  transition:
    opacity 200ms ease,
    color 200ms ease;

  &:hover,
  &:focus-visible {
    opacity: 1;
    color: ${J.sun};
  }
  svg {
    width: 16px;
    height: 16px;
  }
`,Xu=G.dl`
  display: grid;
  grid-template-columns: repeat(${cc.length}, minmax(0, 1fr));
  margin: clamp(56px, 11vh, 112px) 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.22);

  div {
    padding: 18px 20px 4px;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
  }
  div:first-child {
    padding-left: 0;
    border-left: 0;
  }
  dt {
    margin-bottom: 10px;
    font-family: ${X.mono};
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${J.muted};
  }
  dd {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: ${J.text};
  }
  dd a {
    color: inherit;
    text-decoration: none;
  }
  dd a small {
    margin-left: 4px;
    font-size: 0.75em;
    color: ${J.muted};
    transition: color 200ms ease;
  }
  dd a:hover,
  dd a:hover small {
    color: ${J.sun};
  }

  /* Tablets and phones: two by two. */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    div:nth-child(odd) {
      padding-left: 0;
      border-left: 0;
    }
    div:nth-child(n + 3) {
      margin-top: 8px;
    }
  }

  /* Phones: one row per fact, the label beside its lines. */
  @media (max-width: ${Z.mobile}) {
    grid-template-columns: minmax(0, 1fr);

    div,
    div:nth-child(odd) {
      display: grid;
      grid-template-columns: 96px minmax(0, 1fr);
      padding: 12px 0;
      margin: 0;
      border-left: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    dt {
      grid-row: span 2;
      margin: 4px 0 0;
    }
    dd {
      grid-column: 2;
    }
  }
`;function Zu(){let e=Lc(),[t,...n]=K.name.split(` `);return Q(yl,{backdrop:e=>Q(Uu,{visible:e}),children:r=>Q(S,{children:[Q(Wu,{children:[Q(Gu,{style:$(r,0),children:K.discipline}),Q(Ku,{style:$(r,1),children:[Q(`span`,{children:[t,` `,n.slice(0,-1).join(` `),` `]}),Q(`span`,{children:[n.at(-1),Q(wl,{children:`.`})]})]}),Q(qu,{style:$(r,2),children:K.summary}),Q(Ju,{style:$(r,3),children:[Q(Al,{as:R,to:q.section(`experience`),$primary:!0,onClick:e(`experience`),children:`View experience ↓`}),Q(Yu,{as:R,to:q.about,children:[`Get in touch`,Q(jc,{})]}),Q(Yu,{href:K.cvUrl,download:!0,children:[Q(Mc,{}),`Download CV`]})]})]}),Q(Xu,{"aria-label":`At a glance`,children:cc.map((e,t)=>Q(`div`,{style:$(r,4+t),children:[Q(`dt`,{children:e.label}),e.lines.map(e=>Q(`dd`,{children:e.href?Q(Pc,{href:e.href,title:e.title,"aria-label":`${e.text}: ${e.title}`,children:[e.text,Q(`small`,{"aria-hidden":`true`,children:`↗`})]}):e.text},e.text))]},e.label))})]})})}var Qu=G.figure`
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  background: ${J.primary};
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
`;function $u({src:e,alt:t,width:n,height:r,className:i}){return Q(Qu,{className:i,children:Q(`img`,{src:e,alt:t,width:n,height:r,loading:`lazy`,decoding:`async`})})}var ed=G.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  > [data-featured] {
    grid-column: 1 / -1;
  }

  @media (max-width: ${Z.mobile}) {
    grid-template-columns: minmax(0, 1fr);
  }
`,td=G.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  font-size: 0.92rem;
`,nd=G(R)`
  ${Pl}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-self: start;
  font-family: ${X.mono};
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  color: ${J.sun};

  &:hover {
    color: ${J.text};
  }
`,rd=G.div`
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
`,id=G(Sl)`
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
  ${td}, ${Ol} {
    margin-top: auto;
  }
  ${Ol} {
    padding-top: 6px;
  }
  ${td} + ${Ol} {
    margin-top: 0;
  }
`,ad=G.ol`
  display: grid;
  grid-template-columns: repeat(var(--steps), minmax(0, 1fr));
  gap: 28px;
  list-style: none;
  margin: 6px 0;
  padding: 0;

  li {
    ${Ml}
    position: relative;
    padding: 14px 16px;
  }
  /* Arrow to the next step. */
  li + li::before {
    ${Fl}
    position: absolute;
    left: -18px;
    top: calc(50% - 3px);
    color: ${J.sun};
  }
  strong {
    display: block;
    font-family: ${X.mono};
    font-size: 0.86rem;
    font-weight: 500;
    color: ${J.text};
  }
  span {
    display: block;
    margin-top: 2px;
    font-size: 0.8rem;
    line-height: 1.4;
    color: ${J.muted};
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    li + li::before {
      content: none;
    }
  }
`;function od({project:e,index:t,visible:n}){let{title:r,context:i,summary:a,flow:o,tags:s,links:c,featured:l,image:u}=e,d=$s(r),f=e.page?{to:q.project(e.page.slug),label:`Read the full story`}:e.role?{to:q.experience(e.role),label:`More about the role`}:void 0;return Q(id,{as:`article`,$featured:!!l,"data-featured":l||void 0,style:$(n,t),children:[Q(rd,{$image:!!u,children:[Q(`div`,{children:[Q(El,{children:i}),Q(`h3`,{children:r}),Q(`p`,{children:a}),f&&Q(nd,{to:f.to,"aria-label":`${f.label}: ${d}`,children:[f.label,Q(jc,{})]})]}),u&&Q($u,{...u})]}),o&&Q(ad,{"aria-label":`${r}: how it fits together`,style:{"--steps":o.length},children:o.map(e=>Q(`li`,{children:[Q(`strong`,{children:e.label}),Q(`span`,{children:e.detail})]},e.label))}),c&&Q(td,{children:c.map(e=>Q(Pc,{href:e.href,"aria-label":`${e.label}: ${d}`,children:[e.label,` ↗`]},e.href))}),Q(Ol,{"aria-label":`${r}: technologies`,children:s.map(e=>Q(kl,{children:e},e))})]})}function sd(){return Q(yl,{id:`work`,curves:7,aurora:`tide`,slant:!0,compact:!0,children:e=>Q(S,{children:[Q(`div`,{style:$(e),children:[Q(Dl,{children:`02 / selected work`}),Q(Cl,{children:[`Selected work`,Q(wl,{children:`.`})]})]}),Q(ed,{children:ec.map((t,n)=>Q(od,{project:t,index:n+1,visible:e},t.title))})]})})}var cd=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`,ld=G.h3`
  margin: 0 0 14px;
  font-size: 1.05rem;
`,ud=e=>[...e].sort((e,t)=>Number(ic.includes(t))-Number(ic.includes(e))),dd=G.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: -14px 0 24px;
  font-family: ${X.mono};
  font-size: 0.74rem;
  letter-spacing: 0.03em;
  color: ${J.muted};

  ${kl} {
    list-style: none;
  }
`,fd=G.ul`
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
    color: ${J.muted};
  }
`,pd=G(Pc)`
  font-size: 0.86rem;
`,md=G.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 16px;
  margin: 0;

  dd {
    margin: 0;
    color: ${J.muted};
  }
`;function hd(){return Q(yl,{id:`skills`,curves:5,tinted:!0,slant:!0,compact:!0,children:e=>Q(S,{children:[Q(`div`,{style:$(e),children:[Q(Dl,{children:`03 / skills`}),Q(Cl,{children:[`Skills & certifications`,Q(wl,{children:`.`})]}),Q(dd,{children:[Q(kl,{as:`span`,$core:!0,children:`core`}),`the core stack, used at an advanced level`]})]}),Q(cd,{children:[rc.map((t,n)=>Q(xl,{style:$(e,n),children:[Q(ld,{children:t.title}),Q(Ol,{children:ud(t.skills).map(e=>Q(kl,{$core:ic.includes(e),children:e},e))})]},t.title)),Q(xl,{style:$(e,rc.length),children:[Q(ld,{children:`Certifications`}),Q(fd,{children:ac.map(e=>Q(`li`,{children:[Q(El,{children:e.code}),e.title,Q(`small`,{children:e.issuer}),e.verifyUrl&&Q(pd,{href:e.verifyUrl,children:`Verify credential ↗`})]},e.code))})]}),Q(xl,{style:$(e,rc.length+1),children:[Q(ld,{children:`Languages`}),Q(md,{children:oc.map(e=>Q(S,{children:[Q(`dt`,{children:e.language}),Q(`dd`,{children:e.level})]},e.language))})]})]})]})})}function gd(){return Q(S,{children:[Q(Zu,{}),Q(Eu,{}),Q(sd,{}),Q(hd,{}),Q(au,{})]})}var _d=G(Sl)`
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
`,vd=G.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
`,yd=G.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
  gap: 12px;
  margin: 28px 0 8px;

  div {
    ${Ml}
    padding: 14px 16px;
  }
  dt {
    font-family: ${X.mono};
    font-size: clamp(1.3rem, 2.4vw, 1.7rem);
    font-weight: 500;
    color: ${J.sun};
    white-space: nowrap;
  }
  dd {
    margin: 4px 0 0;
    font-size: 0.84rem;
    line-height: 1.4;
    color: ${J.muted};
  }
`,bd=G.section`
  margin-top: 34px;
  padding-top: 26px;
  border-top: 1px solid ${J.secondary}66;

  h2 {
    font-size: clamp(1.25rem, 2.4vw, 1.55rem);
    margin: 0;
  }
`,xd=G(Nl)`
  margin-top: 28px;
`;function Sd(){let{slug:e}=Tr(),t=fc.findIndex(t=>t.page.slug===e);if(t===-1)return Q(Zl,{});let n=fc[t],{page:r}=n,i=fc[t-1],a=fc[t+1];return Q(yl,{curves:r.curves,tinted:!0,aurora:`tide`,children:e=>Q(_d,{as:`article`,style:$(e),children:[Q(vd,{children:[Q(El,{children:n.context}),Q(Il,{to:q.section(`work`),children:[Q(jc,{dir:`left`}),`Selected work`]})]}),Q(`h1`,{children:n.title}),Q(`p`,{children:r.intro}),n.image&&Q($u,{...n.image}),Q(yd,{"aria-label":`Key figures`,children:r.figures.map(e=>Q(`div`,{children:[Q(`dt`,{children:e.value}),Q(`dd`,{children:e.label})]},e.value))}),r.sections.map(e=>Q(bd,{children:[Q(`h2`,{children:e.title}),Q(Rl,{children:e.points.map(e=>Q(`li`,{children:e},e))})]},e.title)),Q(Ll,{id:`technologies`,children:`Technologies`}),Q(Ol,{"aria-labelledby":`technologies`,children:n.tags.map(e=>Q(kl,{children:e},e))}),n.links&&Q(xd,{children:n.links.map((e,t)=>Q(Al,{as:Pc,href:e.href,$primary:t===0,children:[e.label,` ↗`]},e.href))}),Q(zl,{"aria-label":`Other projects`,children:[i&&Q(Bl,{to:q.project(i.page.slug),children:[Q(jc,{dir:`left`}),$s(i.title)]}),a&&Q(Bl,{to:q.project(a.page.slug),children:[$s(a.title),Q(jc,{})]})]})]})})}function Cd(){return Q(tl,{children:Q(Yr,{children:[Q(qr,{path:q.home,element:Q(gd,{})}),Q(qr,{path:q.about,element:Q(Yl,{})}),Q(qr,{path:q.experience(`:slug`),element:Q(tu,{})}),Q(qr,{path:q.project(`:slug`),element:Q(Sd,{})}),Object.entries(pc).map(([e,t])=>Q(qr,{path:e,element:Q(Kr,{to:t,replace:!0})},e)),Q(qr,{path:`*`,element:Q(Zl,{})})]})})}var wd=mc(window.location.hash);wd&&window.history.replaceState(null,``,wd);var Td=Q(S,{children:Q(Ii,{children:Q(Cd,{})})}),Ed=document.getElementById(`root`),Dd=document.querySelector(`meta[name="prerendered-path"]`)?.getAttribute(`content`),Od=window.location.pathname.replace(/\/+$/,``)||`/`;Ed.firstChild&&Dd===Od?Ut(Ed,Td):(Ed.textContent=``,Ht(Ed).render(Td));