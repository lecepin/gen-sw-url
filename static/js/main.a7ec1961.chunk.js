(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(15),r=n.n(i),c=(n(99),n(83)),l=n(84),s=n(92),u=n(85),d=n(93),p=n(47),f=n.n(p),h=n(46),v=n.n(h),m=n(91),w=n.n(m),g=n(90),b=n.n(g),y=n(89),k=n.n(y),A=n(87),E=n.n(A),C=n(86),S=n.n(C),j=(n(101),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={inData:"",outData:"",tip:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.inData,a=t.outData,i=t.tip;return o.a.createElement("div",{className:"App"},o.a.createElement(E.a,{position:"static"},o.a.createElement(k.a,{variant:"h6",color:"inherit"},"PreCache\u8d44\u6e90\u63d0\u53d6")),o.a.createElement(v.a,{className:"input-textA",fullWidth:!0,label:"\u7f51\u9875\u4ee3\u7801",multiline:!0,rows:"15",value:n,onChange:function(t){return e.setState({inData:t.target.value})},margin:"normal",helperText:"\u7c98\u8d34\u4ee3\u7801\u5230\u6b64\u5904",variant:"outlined"}),o.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){var t=n.match(/\"(https:)?\/\/.+alicdn.+\.(js|css)(\?.*?)?\"/gm);Array.isArray(t)&&e.setState({outData:"\t"+t.map(function(e){return 0===(e=e.replace(/"/g,"")).indexOf("//")&&(e='"https:'.concat(e,'"')),e}).join(",\n\t")})}},"\u63d0\u53d6"),a&&o.a.createElement(b.a,{onClickAway:function(){return e.setState({tip:!1})}},o.a.createElement(w.a,{PopperProps:{disablePortal:!0},onClose:function(){return e.setState({tip:!1})},open:i,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,placement:"right",title:"\u5df2\u590d\u5236"},o.a.createElement(f.a,{className:"App-copy",variant:"contained",color:"secondary",onClick:function(){new S.a(".App-copy");var t=document.querySelector(".App-copy");t&&(t.setAttribute("data-clipboard-text",e.state.outData),t.click(),e.setState({tip:!0}))}},"\u590d\u5236"))),o.a.createElement(v.a,{className:"input-textA",fullWidth:!0,label:"\u63d0\u53d6\u7ed3\u679c",multiline:!0,rows:"8",value:a,onChange:function(t){return e.setState({outData:t.target.value})},margin:"normal",helperText:"\u590d\u5236\u6b64\u5904\u4ee3\u7801(\u8bf7\u6ce8\u610f\u5e26\u53ef\u53d8\u65f6\u95f4\u6233\u7684\u8d44\u6e90)",variant:"outlined"}))}}]),t}(a.Component)),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");W?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):x(t,e)})}}()},94:function(e,t,n){e.exports=n(243)},99:function(e,t,n){}},[[94,2,1]]]);
//# sourceMappingURL=main.a7ec1961.chunk.js.map