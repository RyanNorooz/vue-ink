(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9b07"],{"8f36":function(e,t,n){"use strict";n.r(t),n.d(t,"julia",(function(){return P}));n("4d63"),n("ac1f"),n("25f0"),n("a15b"),n("466d"),n("99af");function r(e,t){return"undefined"===typeof t&&(t="\\b"),new RegExp("^(("+e.join(")|(")+"))"+t)}var a="\\\\[0-7]{1,3}",i="\\\\x[A-Fa-f0-9]{1,2}",s="\\\\[abefnrtv0%?'\"\\\\]",u="([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])",o=r(["[<>]:","[<>=]=","<<=?",">>>?=?","=>","->","\\/\\/","[\\\\%*+\\-<>!=\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),c=/^[;,()[\]{}]/,l=/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,f=r([a,i,s,u],"'"),m=["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],p=["end","else","elseif","catch","finally"],h=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],d=["true","false","nothing","NaN","Inf"],k=r(m),b=r(p),F=r(h),g=r(d),v=/^@[_A-Za-z][\w]*/,x=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,y=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;function z(e){return e.nestedArrays>0}function A(e){return e.nestedGenerators>0}function w(e,t){return"undefined"===typeof t&&(t=0),e.scopes.length<=t?null:e.scopes[e.scopes.length-(t+1)]}function E(e,t){if(e.match("#=",!1))return t.tokenize=D,t.tokenize(e,t);var n=t.leavingExpr;if(e.sol()&&(n=!1),t.leavingExpr=!1,n&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var r,a=e.peek();if("#"===a)return e.skipToEnd(),"comment";if("["===a&&(t.scopes.push("["),t.nestedArrays++),"("===a&&(t.scopes.push("("),t.nestedGenerators++),z(t)&&"]"===a){while(t.scopes.length&&"["!==w(t))t.scopes.pop();t.scopes.pop(),t.nestedArrays--,t.leavingExpr=!0}if(A(t)&&")"===a){while(t.scopes.length&&"("!==w(t))t.scopes.pop();t.scopes.pop(),t.nestedGenerators--,t.leavingExpr=!0}if(z(t)){if("end"==t.lastToken&&e.match(":"))return"operator";if(e.match("end"))return"number"}if((r=e.match(k,!1))&&t.scopes.push(r[0]),e.match(b,!1)&&t.scopes.pop(),e.match(/^::(?![:\$])/))return t.tokenize=_,t.tokenize(e,t);if(!n&&e.match(x)||e.match(/:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/))return"builtin";if(e.match(o))return"operator";if(e.match(/^\.?\d/,!1)){var i=RegExp(/^im\b/),s=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(s=!0),e.match(/^0x[0-9a-f_]+/i)&&(s=!0),e.match(/^0b[01_]+/i)&&(s=!0),e.match(/^0o[0-7_]+/i)&&(s=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(s=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(s=!0),s)return e.match(i),t.leavingExpr=!0,"number"}if(e.match("'"))return t.tokenize=T,t.tokenize(e,t);if(e.match(y))return t.tokenize=C(e.current()),t.tokenize(e,t);if(e.match(v))return"meta";if(e.match(c))return null;if(e.match(F))return"keyword";if(e.match(g))return"builtin";var u=t.isDefinition||"function"==t.lastToken||"macro"==t.lastToken||"type"==t.lastToken||"struct"==t.lastToken||"immutable"==t.lastToken;return e.match(l)?u?"."===e.peek()?(t.isDefinition=!0,"variable"):(t.isDefinition=!1,"def"):(t.leavingExpr=!0,"variable"):(e.next(),"error")}function _(e,t){return e.match(/.*?(?=[,;{}()=\s]|$)/),e.match("{")?t.nestedParameters++:e.match("}")&&t.nestedParameters>0&&t.nestedParameters--,t.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():0==t.nestedParameters&&(t.tokenize=E),"builtin"}function D(e,t){return e.match("#=")&&t.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match("=#")&&(t.nestedComments--,0==t.nestedComments&&(t.tokenize=E)),"comment"}function T(e,t){var n,r=!1;if(e.match(f))r=!0;else if(n=e.match(/\\u([a-f0-9]{1,4})(?=')/i)){var a=parseInt(n[1],16);(a<=55295||a>=57344)&&(r=!0,e.next())}else if(n=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){a=parseInt(n[1],16);a<=1114111&&(r=!0,e.next())}return r?(t.leavingExpr=!0,t.tokenize=E,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match("'")&&(t.tokenize=E),"error")}function C(e){function t(t,n){if(t.eat("\\"))t.next();else{if(t.match(e))return n.tokenize=E,n.leavingExpr=!0,"string";t.eat(/[`"]/)}return t.eatWhile(/[^\\`"]/),"string"}return'"""'===e.substr(-3)?e='"""':'"'===e.substr(-1)&&(e='"'),t}var P={startState:function(){return{tokenize:E,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,t){var n=t.tokenize(e,t),r=e.current();return r&&n&&(t.lastToken=r),n},indent:function(e,t,n){var r=0;return("]"===t||")"===t||/^end\b/.test(t)||/^else/.test(t)||/^catch\b/.test(t)||/^elseif\b/.test(t)||/^finally/.test(t))&&(r=-1),(e.scopes.length+r)*n.unit},languageData:{indentOnInput:/^\s*(end|else|catch|finally)\b$/,commentTokens:{line:"#",block:{open:"#=",close:"=#"}},closeBrackets:{brackets:["(","[","{",'"']},autocomplete:h.concat(d)}}}}]);
//# sourceMappingURL=chunk-2d0e9b07.5844c34e.js.map