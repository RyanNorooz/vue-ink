(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aeb55"],{"0ae3":function(t,e,n){"use strict";n.r(e),n.d(e,"turtle",(function(){return x}));var o;n("4d63"),n("ac1f"),n("25f0"),n("a15b"),n("466d");function r(t){return new RegExp("^(?:"+t.join("|")+")$","i")}r([]);var i=r(["@prefix","@base","a"]),c=/[*+\-<>=&|]/;function a(t,e){var n=t.next();if(o=null,"<"!=n||t.match(/^[\s\u00a0=]/,!1)){if('"'==n||"'"==n)return e.tokenize=l(n),e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(n))return o=n,null;if("#"==n)return t.skipToEnd(),"comment";if(c.test(n))return t.eatWhile(c),null;if(":"==n)return"operator";if(t.eatWhile(/[_\w\d]/),":"==t.peek())return"variableName.special";var r=t.current();return i.test(r)?"meta":n>="A"&&n<="Z"?"comment":"keyword"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function l(t){return function(e,n){var o,r=!1;while(null!=(o=e.next())){if(o==t&&!r){n.tokenize=a;break}r=!r&&"\\"==o}return"string"}}function u(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function p(t){t.indent=t.context.indent,t.context=t.context.prev}var x={startState:function(){return{tokenize:a,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);if("comment"!=n&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==o)u(e,")",t.column());else if("["==o)u(e,"]",t.column());else if("{"==o)u(e,"}",t.column());else if(/[\]\}\)]/.test(o)){while(e.context&&"pattern"==e.context.type)p(e);e.context&&o==e.context.type&&p(e)}else"."==o&&e.context&&"pattern"==e.context.type?p(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?u(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(t,e,n){var o=e&&e.charAt(0),r=t.context;if(/[\]\}]/.test(o))while(r&&"pattern"==r.type)r=r.prev;var i=r&&o==r.type;return r?"pattern"==r.type?r.col:r.align?r.col+(i?0:1):r.indent+(i?0:n.unit):0},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=chunk-2d0aeb55.ca97714e.js.map