(this["webpackJsonpmy-compare-price"]=this["webpackJsonpmy-compare-price"]||[]).push([[0],{139:function(e,t,a){},188:function(e,t,a){},19:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return r}));var c="sudaxia.vip",n="",i="",r="development"},190:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(20),r=a.n(i),s=a(35),o=a(37),l=a.n(o),d=a(18);a.n(d).a.init(l.a,{requestDefaults:{autoLoading:!0,msgKey:"msg",dataKey:"data",codeKey:"code",successCode:0}}),l.a.defaults.timeout=3e4,l.a.defaults.withCredentials=!0,l.a.interceptors.request.use((function(e){return void 0===e.autoLoading||e.autoLoading,function(e){e.headers.Authorization=window.localStorage.getItem("tokenKey")}(e),function(e){var t=e.params,a=void 0===t?{}:t;e.params=Object(s.a)({},a)}(e),e}),(function(e){return console.error("\u52a0\u8f7d\u8d85\u65f6"),Promise.reject(e)})),l.a.interceptors.response.use((function(e){e.config.autoLoading;return(Object.prototype.hasOwnProperty.call(e.data,"status")||Object.prototype.hasOwnProperty.call(e.data,"msg"))&&(e.data.error_msg=e.data.msg,e.data.dm_error=e.data.status,delete e.data.status,delete e.data.msg),e}),(function(e){return console.error("\u52a0\u8f7d\u5931\u8d25"),Promise.reject(e)}));a(139);var u,j=a(34),p=a(4),b=(a(41),a(10)),h=a.n(b),m=a(3),f=(a(188),a(0)),O=function(){return Object(f.jsxs)("div",{className:"no-collect-wrapper",children:[Object(f.jsx)("div",{className:"no-collect-picture"}),Object(f.jsx)("div",{className:"no-collect-tip",children:"\u628a\u4f60\u5e38\u7528\u6216\u60f3\u4e70\u7684\u5316\u5986\u54c1\u52a0\u5165\u68b3\u5986\u53f0 \u65f6\u65f6\u67e5\u770b\u5168\u7f51\u5e95\u4ef7\uff5e"})]})},x=(a(190),function(e){var t=Object(c.useState)([]),a=Object(m.a)(t,2),n=a[0],i=a[1],r=Object(p.f)();Object(c.useEffect)((function(){e.result&&e.result.length&&i(e.result)}),[e.result]);var s=function(e){r.push({pathname:"/detail",search:"?stid=".concat(e.standard.standard_id,"&reid=").concat(e.standard.relation_id)})};return Object(f.jsx)("div",{className:"have-collect-wrapepr",children:n.map((function(e,t){return Object(f.jsxs)("div",{className:"collect-item",onClick:s.bind(undefined,e),children:[Object(f.jsx)("img",{src:e.standard.pic,alt:e.standard.title}),Object(f.jsx)("span",{className:"collect-text",children:e.standard.title}),Object(f.jsx)("span",{className:"collect-text-tip",children:e.standard.props.toString()}),Object(f.jsxs)("span",{className:"collect-text-bottom",children:[Object(f.jsxs)("label",{className:"collect-text-price",children:[Object(f.jsx)("label",{children:"\uffe5"}),Object(f.jsx)("label",{children:e.standard.price_min}),Object(f.jsx)("label",{children:"\u8d77"})]}),Object(f.jsxs)("label",{className:"collect-text-num",children:[Object(f.jsx)("label",{children:e.standard.item_count}),Object(f.jsx)("label",{children:"\u4e2a\u5e97\u94fa\u5728\u552e"})]})]})]},t)}))})}),g=(a(97),a(102)),v=a.n(g),w=(a(196),a(48)),y=a.n(w),N=a(71),_=a.n(N),k=a(103),S=a(24),C=a(25),P=Object(d.getRequestsByRoot)({root:C.a.root}),U=P.get,D=P.post,L=new function e(){Object(S.a)(this,e),this.checkPhone=U("api/user/checkUser",{},{autoLoading:!1}),this.getCode=D("api/user/sendSms",{},{autoLoading:!1}),this.login=D("api/user/login",{},{autoLoading:!1})},R=(a(206),60),T=!1,A=/^[1][3,4,5,7,8][0-9]{9}$/,E=function(e,t){var a=Object(c.useState)(0),n=Object(m.a)(a,2),i=n[0],r=n[1],o=Object(c.useState)(!1),l=Object(m.a)(o,2),d=l[0],j=l[1],p=Object(c.useState)(!1),b=Object(m.a)(p,2),O=b[0],x=b[1],g=Object(c.useState)(!1),w=Object(m.a)(g,2),N=w[0],S=w[1],C=Object(c.useState)(void 0),P=Object(m.a)(C,2),U=P[0],D=P[1],E=Object(c.useState)(void 0),q=Object(m.a)(E,2),I=q[0],Q=q[1],K=Object(c.useState)(void 0),B=Object(m.a)(K,2),F=B[0],$=B[1];function z(e,t){var a;return setTimeout((function c(){e();var n=a;a=setTimeout(c,t),T&&clearTimeout(a),clearTimeout(n)}),t)}Object(c.useImperativeHandle)(t,(function(){return{show:function(){S(!0)}}}));var J=function(){var e=Object(k.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.test(U)){e.next=3;break}return h.a.fail("\u624b\u673a\u53f7\u4e0d\u5408\u6cd5",1),e.abrupt("return");case 3:if(!d){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,L.checkPhone({phone:U}).catch((function(e){h.a.fail(e.error_msg,1)}));case 7:t=e.sent,u=0===t.is_reg?1:2,x(0===t.is_reg),M(),j(!0),r(R),T=!1,z((function(){R?r(R-=1):(T=!0,j(!1),R=60)}),1e3);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){L.getCode({phone:U,purpose:u}).then((function(e){console.log(e)})).catch((function(e){h.a.fail(e.error_msg,1)}))};return Object(f.jsx)("div",{className:N?"mask-wrapper":"mask-wrapper hide",children:Object(f.jsxs)("div",{className:"login-wrapper",children:[Object(f.jsx)("div",{className:"login-top-icon"}),Object(f.jsx)("span",{className:"login-close-icon",onClick:function(){S(!1)}}),Object(f.jsx)("div",{className:"login-tile",children:"\u767b\u5f55"}),Object(f.jsxs)(v.a,{className:"login-list-message",children:[Object(f.jsx)(y.a,{type:"money",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",value:U,onChange:function(e){D(e)},clear:!0,moneyKeyboardAlign:"left",children:"\u624b\u673a\u53f7"}),Object(f.jsxs)("div",{className:"login-yanzheng-wrapper",children:[Object(f.jsx)(y.a,{type:"money",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",value:I,onChange:function(e){Q(e)},moneyKeyboardAlign:"left",children:"\u9a8c\u8bc1\u7801"}),Object(f.jsx)("span",{className:"login-yanzheng-send",onClick:J,children:d?"".concat(i,"s"):"\u53d1\u9001"})]}),O?Object(f.jsx)(y.a,{type:"money",placeholder:"\u586b\u5199\u9080\u8bf7\u7801\uff0c\u6ca1\u6709\u53ef\u4e0d\u586b",value:F,onChange:function(e){$(e)},clear:!0,moneyKeyboardAlign:"left",children:"\u9080\u8bf7\u7801"}):""]}),Object(f.jsx)("div",{className:"login-submit-btn",onClick:function(){L.login(Object(s.a)({phone:U,sms_code:1*I},F?{invite_code:F}:{})).then((function(e){window.localStorage.setItem("tokenKey","".concat(e.token_type," ").concat(e.access_token)),h.a.success("\u767b\u5f55\u6210\u529f",1),S(!1),window.location.reload()})).catch((function(e){h.a.fail(e.error_msg,1)}))},children:"\u63d0\u4ea4"})]})})},q=Object(c.memo)(Object(c.forwardRef)(E)),I=Object(d.getRequestsByRoot)({root:C.a.root}).get,Q=new function e(){Object(S.a)(this,e),this.getDresserTable=I("api/dresser/query",{},{autoLoading:!1}),this.getUser=I("api/user/me",{},{autoLoading:!1})},K=(a(207),function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(!1),r=Object(m.a)(i,2),s=r[0],o=r[1],l=Object(c.useState)({}),d=Object(m.a)(l,2),u=d[0],j=d[1],b=Object(c.useRef)(),g=Object(p.f)();Object(c.useEffect)((function(){v(),w()}),[]);var v=function(){Q.getUser({}).then((function(e){j(e.data)})).catch((function(e){1005===e.code&&o(!0),h.a.fail(e.error_msg,1)}))},w=function(){Q.getDresserTable({page:1}).then((function(e){var t;null===(t=e.data)||void 0===t||t.forEach((function(e){e.standard={pic:e.pic,title:e.title,props:e.props,price_min:e.price_min,standard_id:e.standard_id,relation_id:e.relation_id,relation_name:e.relation_name,item_count:e.item_count}})),n(e.data?e.data:[])})).catch((function(e){h.a.fail(e.error_msg,1)}))};return Object(f.jsxs)("div",{className:"collect-wrapper",children:[Object(f.jsx)(q,{ref:b}),Object(f.jsxs)("div",{className:"collect-top",children:[Object(f.jsxs)("div",{className:"collect-top-vip-wrapper",children:[u.is_vip?Object(f.jsx)("span",{className:"collect-vip-icon"}):"",s?Object(f.jsx)("span",{className:"collect-vip-num",onClick:function(){b.current.show()},children:"\u70b9\u51fb\u767b\u5f55"}):Object(f.jsx)("span",{className:"collect-vip-num",children:u.phone})]}),Object(f.jsx)("div",{className:"collect-title",children:"\u4e70\u5316\u5986\u54c1\uff0c\u5148\u627e\u82cf\u5927\u4fa0\u6bd4\u4ef7"}),Object(f.jsxs)("div",{className:"collect-search-wrapper",children:[Object(f.jsx)("span",{className:"collect-search-icon"}),Object(f.jsx)("input",{className:"collect-search-input",type:"text",placeholder:"\u641c\u7d22\u4f60\u60f3\u4e70\u7684\u5316\u5986\u54c1\uff0c\u67e5\u770b\u5168\u7f51\u5e95\u4ef7",onFocus:function(){g.push({pathname:"search"})}})]})]}),Object(f.jsxs)("div",{className:"collect-content",children:[Object(f.jsx)("div",{className:"collect-content-title",children:"\u6211\u7684\u68b3\u5986\u53f0"}),Object(f.jsx)("div",{className:"collect-content-list-wrapper",children:a.length?Object(f.jsx)(x,{result:a}):Object(f.jsx)(O,{})})]})]})}),B=(a(208),function(){return Object(f.jsxs)("div",{className:"no-search-wrapper",children:[Object(f.jsx)("div",{className:"no-search-img"}),Object(f.jsx)("div",{className:"no-search-text",children:"\u6ca1\u6709\u627e\u5230\u4f60\u60f3\u8981\u7684\u5316\u5986\u54c1\u6362\u4e2a\u641c\u7d22\u8bcd\u8bd5\u8bd5\uff5e"})]})}),F=navigator.userAgent,$=Object.prototype.toString,z={ua:function(){var e={android:/android/i,iphone:/iphone/i,ipad:/ipad/i,ipod:/ipod/i,weixin:/micromessenger/i,mqq:/QQ\//i,app:/inke/i,alipay:/aliapp/i,weibo:/weibo/i,chrome:/chrome\//i},t={};return Object.keys(e).forEach((function(a){var c=e[a];t[a]=c.test(F)})),t.ios=t.iphone||t.ipad||t.ipod,t.mobile=t.ios||t.android,t.pc=!t.mobile,t.chrome=!!window.chrome,t}(),regs:{telephone:/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/},stringifyParams:function(e,t){var a,c,n="";for(a in e)c=e[a],n+="".concat(a,"=").concat("function"===typeof t?t(c,a):c,"&");return n.slice(0,-1)},getUrlParams:function(e){var t;if(!(t=e?e.indexOf("?")>-1?e.split("?").slice(-1).toString():e:window.location.href.indexOf("?")>-1&&window.location.href.split("?").slice(-1).toString().replace(/#!\/.+/,"")))return{};var a=decodeURIComponent(t).split("&"),c={};return a.map((function(e){var t=e.split("=");if(c[t[0]])return!1;c[t[0]]=unescape(t[1])})),c},getUrlQuery:function(e){var t=new RegExp("(^|&)".concat(e,"=([^&]*)(&|$)"),"i"),a=window.location.search.substring(1)||window.location.href.split("?")[1]&&window.location.href.split("?")[1].replace(/#!\/.+/,"");if(!a)return!1;var c=a.replace("#","").match(t);if(null==c)return null;var n=unescape(c[2]);switch(n){case"true":return!0;case"null":return null;case"false":return!1;case"undefined":return;default:return n}},getUrlParam:function(e){var t=new RegExp("(^|&)".concat(e,"=([^&]*)(&|$)"),"i"),a=window.location.search.substring(1)||window.location.href.split("?")[1]&&window.location.href.split("?")[1].replace(/#!\/.+/,"");if(!a)return!1;var c=a.replace("#","").match(t);if(null==c)return null;var n=decodeURI(c[2]);switch(n){case"true":return!0;case"null":return null;case"false":return!1;case"undefined":return;default:return n}},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isObject:function(e){return"[object Object]"===$.call(e)},copy:function(){var e=(arguments.length<=0?void 0:arguments[0])||{},t=1,a=arguments.length,c=!1;for("boolean"===typeof e&&(c=e,e=(arguments.length<=1?void 0:arguments[1])||{},t++),"object"!==typeof e&&"function"!==typeof e&&(e={});t<a;t++){var n=void 0;if(null!=(n=t<0||arguments.length<=t?void 0:arguments[t]))for(var i in n){var r=e[i],s=n[i];if(e!==s){var o=void 0;if(c&&s&&z.isObject(s)||(o=Array.isArray(s))){var l=void 0;o?(o=!1,l=r&&Array.isArray(r)?r:[]):l=r&&z.isObject(s)?r:{},e[i]=z.copy(c,l,s)}else null!=s&&(e[i]=s)}}}return e},throttle:function(e,t){var a,c,n,i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=0;r||(r={});var o=function(){s=!1===r.leading?0:Date.now(),a=null,i=e.apply(c,n),a||(c=n=null)},l=function(){var l=Date.now();s||!1!==r.leading||(s=l);var d=t-(l-s);return c=this,n=arguments,d<=0||d>t?(a&&(clearTimeout(a),a=null),s=l,i=e.apply(c,n),a||(c=n=null)):a||!1===r.trailing||(a=setTimeout(o,d)),i};return l.cancel=function(){clearTimeout(a),s=0,a=c=n=null},l},genId:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})).toUpperCase()},noop:function(){},isDef:function(e){return void 0!==e},emptyObj:{}},J=z,M=(a(209),Object(d.getRequestsByRoot)({root:C.a.root}).get),H=new function e(){Object(S.a)(this,e),this.search=M("api/search",{},{autoLoading:!1})},G="",V=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(void 0),r=Object(m.a)(i,2),s=r[0],o=r[1],l=Object(p.f)();Object(c.useEffect)((function(){J.getUrlParam("keyword")&&(o(J.getUrlParam("keyword")),d())}),[]);var d=function(){H.search({keyword:J.getUrlParam("keyword")}).then((function(e){e.data&&e.data.length&&n(e.data)})).catch((function(e){h.a.fail(e.error_msg,1)}))};return Object(f.jsxs)("div",{className:"search-wrapper",children:[Object(f.jsxs)("div",{className:"search-top",children:[Object(f.jsx)("span",{className:"search-back",onClick:function(){l.push({pathname:"/collect"})}}),Object(f.jsx)("input",{type:"text",className:"search-input",placeholder:"\u641c\u7d22\u4f60\u60f3\u4e70\u7684\u5316\u5986\u54c1\uff0c\u67e5\u770b\u5168\u7f51\u5e95\u4ef7",value:s,onChange:function(e){G=e.target.value.trim(),o(G)},onKeyDown:function(e){13===e.keyCode&&window.location.replace("".concat(window.location.origin).concat(window.location.pathname,"?keyword=").concat(G))}})]}),Object(f.jsx)("div",{className:"search-driver"}),a.length?Object(f.jsx)(x,{result:a}):Object(f.jsx)(B,{})]})},W=(a(210),function(e){var t=Object(c.useState)([]),a=Object(m.a)(t,2),n=a[0],i=a[1],r={0:"tian-mao",1:"tiao-bao",2:"jing-dong"};return Object(c.useEffect)((function(){var t;(null===(t=e.listData)||void 0===t?void 0:t.length)?i(e.listData):i([])}),[e.listData]),Object(f.jsx)("div",{className:"detail-list",children:n.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"detail-list-item",children:[Object(f.jsxs)("div",{className:"detail-list-item-li",children:[Object(f.jsxs)("span",{className:"detail-list-item-name",children:[Object(f.jsx)("i",{className:r[e.platform_id]}),Object(f.jsx)("label",{children:e.shop_info.shop_name})]}),Object(f.jsx)("span",{className:"detail-list-item-pirce-text",children:e.return_type_name})]}),Object(f.jsxs)("div",{className:"detail-list-item-price",children:[Object(f.jsx)("span",{children:"\uffe5"}),Object(f.jsx)("span",{children:e.final_price})]}),Object(f.jsxs)("div",{className:"detail-list-item-rate",children:[e.shop_info.shop_type_name&&1!==e.platform_id?Object(f.jsx)("span",{className:"detail-shop-info",children:e.shop_info.shop_type_name}):Object(f.jsx)("span",{}),Object(f.jsx)("span",{className:"detail-list-item-buy",children:"\u53bb\u8d2d\u4e70"})]})]}),Object(f.jsx)("div",{className:"detail-list-driver"})]},t)}))})}),X=(a(211),Object(d.getRequestsByRoot)({root:C.a.root}).get),Y=new function e(){Object(S.a)(this,e),this.getDetail=X("api/query/detail",{},{autoLoading:!1}),this.getComparePrice=X("api/query/comparePrice",{},{autoLoading:!1}),this.addDressingTable=X("api/dresser/add",{},{autoLoading:!1}),this.removeDressingTable=X("api/dresser/del",{},{autoLoading:!1})},Z=void 0,ee=[],te=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(0),r=Object(m.a)(i,2),s=r[0],o=r[1],l=Object(c.useState)([]),d=Object(m.a)(l,2),u=d[0],j=d[1],b=Object(c.useState)(0),O=Object(m.a)(b,2),x=O[0],g=O[1],v=Object(c.useState)({}),w=Object(m.a)(v,2),y=w[0],N=w[1],_=Object(c.useState)([]),k=Object(m.a)(_,2),S=k[0],C=k[1],P=Object(c.useState)(!0),U=Object(m.a)(P,2),D=U[0],L=U[1],R=Object(p.f)();Object(c.useEffect)((function(){T(),A(J.getUrlQuery("reid"))}),[]);var T=function(){Y.getDetail({stid:J.getUrlQuery("stid"),reid:J.getUrlQuery("reid")}).then((function(e){N(e.data?e.data:{}),n(e.data.relations?e.data.relations:[]),L(e.data.dresser_is_del)})).catch((function(e){h.a.fail(e.error_msg,1)}))},A=function(e){Y.getComparePrice({stid:J.getUrlQuery("stid"),reid:e,page:1}).then((function(e){j(e.data.comparelist_data?e.data.comparelist_data:[]),ee=e.data.product_group_list?e.data.product_group_list:[],C(e.data.product_group_list?e.data.product_group_list.flat(1/0):[])})).catch((function(e){h.a.fail(e.error_msg,1)}))},E=function(e,t){o(e),A(t.relation_id)},q=function(e,t){g(e);var a=ee.flat(1/0);if(""!==t){var c=a.filter((function(e){return e.platform_id===1*t}));C(c)}else C(a)};return Object(f.jsxs)("div",{className:"detail-wrapper",children:[Object(f.jsxs)("div",{className:"detail-wrapper-top",children:[Object(f.jsxs)("div",{className:"detail-top",children:[Object(f.jsx)("div",{className:"detail-back",onClick:function(){R.go(-1)}}),Object(f.jsxs)("div",{className:"detail-show-img-wrapper",children:[Object(f.jsx)("img",{className:"detail-show-img",alt:"",src:y.pic}),Object(f.jsx)("div",{className:"detail-show-text",children:y.title})]}),Object(f.jsx)("div",{className:"detail-list",children:a.map((function(e,t){return Object(f.jsxs)("div",{className:s===t?"detail-list-item item-active":"detail-list-item",onClick:E.bind(Z,t,e),children:[Object(f.jsx)("div",{className:"detail-list-img-wrapper",children:Object(f.jsx)("img",{className:"detail-list-item-img",src:e.pic,alt:""})}),Object(f.jsx)("div",{className:s===t?"detail-list-item-model":"detail-list-item-model item-model-color",children:e.relation_name}),Object(f.jsx)("div",{className:s===t?"detail-list-item-text":"detail-list-item-text item-text-color",children:e.name}),Object(f.jsxs)("div",{className:"detail-list-item-price",children:[Object(f.jsxs)("label",{children:["\uffe5",e.price_min]}),Object(f.jsx)("label",{children:"\u8d77"})]})]},t)}))}),Object(f.jsx)("div",{className:"detai-price-site",children:u.map((function(e,t){return Object(f.jsxs)("div",{className:x===t?"detail-price-item detail-price-item-active":"detail-price-item",onClick:q.bind(Z,t,e.value),children:[Object(f.jsx)("span",{children:e.name}),Object(f.jsxs)("span",{children:["\uffe5",e.price]})]},t)}))})]}),Object(f.jsx)(W,{listData:S})]}),Object(f.jsx)("div",{className:"detail-bottom",children:D?Object(f.jsx)("span",{onClick:function(){Y.removeDressingTable({stid:J.getUrlQuery("stid"),reid:J.getUrlQuery("reid")}).then((function(e){h.a.success("\u79fb\u9664\u6210\u529f",1)})).catch((function(e){h.a.fail(e.error_msg,1)}))},children:"\u4ece\u68b3\u5986\u53f0\u79fb\u9664"}):Object(f.jsx)("span",{onClick:function(){Y.addDressingTable({stid:J.getUrlQuery("stid"),reid:J.getUrlQuery("reid")}).then((function(e){h.a.success("\u6dfb\u52a0\u6210\u529f",1)})).catch((function(e){h.a.fail(e.error_msg,1)}))},children:"\u52a0\u5165\u68b3\u5986\u53f0"})})]})};var ae=function(){return Object(f.jsx)(j.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{exact:!0,path:"/",children:Object(f.jsx)(K,{})}),Object(f.jsx)(p.a,{exact:!0,path:"/collect",children:Object(f.jsx)(K,{})}),Object(f.jsx)(p.a,{exact:!0,path:"/search",children:Object(f.jsx)(V,{})}),Object(f.jsx)(p.a,{exact:!0,path:"/detail",children:Object(f.jsx)(te,{})}),Object(f.jsx)(p.a,{exact:!0,path:"/login",children:Object(f.jsx)(q,{})})]})})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,214)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(ae,{})}),document.getElementById("root")),ce()},25:function(e,t,a){"use strict";(function(e){var c,n=a(35),i=a(36),r=a(19),s=window.location.host,o=e&&!1,l=([r.a,r.c,r.d].find((function(e){return 0===s.indexOf(e)}))||r.b,c={},Object(i.a)(c,r.c,{root:"//sudaxia.vip:8009/"}),Object(i.a)(c,r.a,{root:""}),Object(i.a)(c,r.d,{root:""}),c),d=(r.c,l[Object.keys(l).find((function(e){var t=s.match(new RegExp(e));return t&&0===t.index}))||r.c]||{}),u=function(e){return Object.keys(d).reduce((function(t,a){return a&&(t[a]=e(d[a])),t}),{})},j={APIS:u((function(e){return e||"/"}))},p={APIS:Object(n.a)({},u((function(){return"/"})))},b=o?p:j;t.a=b.APIS}).call(this,a(76))}},[[212,1,2]]]);