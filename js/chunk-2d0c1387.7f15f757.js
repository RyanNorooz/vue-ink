(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1387"],{"44b3":function(t,e,n){"use strict";n.r(e),n.d(e,"q",(function(){return x}));n("4d63"),n("ac1f"),n("25f0"),n("a15b"),n("466d");var r,o=c(["abs","acos","aj","aj0","all","and","any","asc","asin","asof","atan","attr","avg","avgs","bin","by","ceiling","cols","cor","cos","count","cov","cross","csv","cut","delete","deltas","desc","dev","differ","distinct","div","do","each","ej","enlist","eval","except","exec","exit","exp","fby","fills","first","fkeys","flip","floor","from","get","getenv","group","gtime","hclose","hcount","hdel","hopen","hsym","iasc","idesc","if","ij","in","insert","inter","inv","key","keys","last","like","list","lj","load","log","lower","lsq","ltime","ltrim","mavg","max","maxs","mcount","md5","mdev","med","meta","min","mins","mmax","mmin","mmu","mod","msum","neg","next","not","null","or","over","parse","peach","pj","plist","prd","prds","prev","prior","rand","rank","ratios","raze","read0","read1","reciprocal","reverse","rload","rotate","rsave","rtrim","save","scan","select","set","setenv","show","signum","sin","sqrt","ss","ssr","string","sublist","sum","sums","sv","system","tables","tan","til","trim","txf","type","uj","ungroup","union","update","upper","upsert","value","var","view","views","vs","wavg","where","where","while","within","wj","wj1","wsum","xasc","xbar","xcol","xcols","xdesc","xexp","xgroup","xkey","xlog","xprev","xrank"]),i=/[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;function c(t){return new RegExp("^("+t.join("|")+")$")}function s(t,e){var n=t.sol(),c=t.next();if(r=null,n){if("/"==c)return(e.tokenize=a)(t,e);if("\\"==c)return t.eol()||/\s/.test(t.peek())?(t.skipToEnd(),/^\\\s*$/.test(t.current())?(e.tokenize=u)(t):e.tokenize=s,"comment"):(e.tokenize=s,"builtin")}if(/\s/.test(c))return"/"==t.peek()?(t.skipToEnd(),"comment"):"null";if('"'==c)return(e.tokenize=d)(t,e);if("`"==c)return t.eatWhile(/[A-Za-z\d_:\/.]/),"macroName";if("."==c&&/\d/.test(t.peek())||/\d/.test(c)){var l=null;return t.backUp(1),t.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/)||t.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/)||t.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/)||t.match(/^\d+[ptuv]{1}/)?l="temporal":(t.match(/^0[NwW]{1}/)||t.match(/^0x[\da-fA-F]*/)||t.match(/^[01]+[b]{1}/)||t.match(/^\d+[chijn]{1}/)||t.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/))&&(l="number"),!l||(c=t.peek())&&!i.test(c)?(t.next(),"error"):l}return/[A-Za-z]|\./.test(c)?(t.eatWhile(/[A-Za-z._\d]/),o.test(t.current())?"keyword":"variable"):/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(c)||/[{}\(\[\]\)]/.test(c)?null:"error"}function a(t,e){return t.skipToEnd(),/\/\s*$/.test(t.current())?(e.tokenize=l)(t,e):e.tokenize=s,"comment"}function l(t,e){var n=t.sol()&&"\\"==t.peek();return t.skipToEnd(),n&&/^\\\s*$/.test(t.current())&&(e.tokenize=s),"comment"}function u(t){return t.skipToEnd(),"comment"}function d(t,e){var n,r=!1,o=!1;while(n=t.next()){if('"'==n&&!r){o=!0;break}r=!r&&"\\"==n}return o&&(e.tokenize=s),"string"}function m(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function p(t){t.indent=t.context.indent,t.context=t.context.prev}var x={startState:function(){return{tokenize:s,context:null,indent:0,col:0}},token:function(t,e){t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation());var n=e.tokenize(t,e);if("comment"!=n&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==r)m(e,")",t.column());else if("["==r)m(e,"]",t.column());else if("{"==r)m(e,"}",t.column());else if(/[\]\}\)]/.test(r)){while(e.context&&"pattern"==e.context.type)p(e);e.context&&r==e.context.type&&p(e)}else"."==r&&e.context&&"pattern"==e.context.type?p(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?m(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(t,e,n){var r=e&&e.charAt(0),o=t.context;if(/[\]\}]/.test(r))while(o&&"pattern"==o.type)o=o.prev;var i=o&&r==o.type;return o?"pattern"==o.type?o.col:o.align?o.col+(i?0:1):o.indent+(i?0:n.unit):0}}}}]);
//# sourceMappingURL=chunk-2d0c1387.7f15f757.js.map