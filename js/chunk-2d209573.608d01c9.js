(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209573"],{a949:function(e,n,t){"use strict";t.r(n),t.d(n,"coffeeScript",(function(){return x}));t("4d63"),t("ac1f"),t("25f0"),t("a15b"),t("99af"),t("466d");var r="error";function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var i=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,c=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,a=/^[_A-Za-z$][_A-Za-z$0-9]*/,f=/^@[_A-Za-z$][_A-Za-z$0-9]*/,p=o(["and","or","not","is","isnt","in","instanceof","typeof"]),u=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],s=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"],l=o(u.concat(s));u=o(u);var d=/^('{3}|\"{3}|['\"])/,h=/^(\/{3}|\/)/,m=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"],v=o(m);function k(e,n){if(e.sol()){null===n.scope.align&&(n.scope.align=!1);var t=n.scope.offset;if(e.eatSpace()){var o=e.indentation();return o>t&&"coffee"==n.scope.type?"indent":o<t?"dedent":null}t>0&&z(e,n)}if(e.eatSpace())return null;var u=e.peek();if(e.match("####"))return e.skipToEnd(),"comment";if(e.match("###"))return n.tokenize=y,n.tokenize(e,n);if("#"===u)return e.skipToEnd(),"comment";if(e.match(/^-?[0-9\.]/,!1)){var s=!1;if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(s=!0),e.match(/^-?\d+\.\d*/)&&(s=!0),e.match(/^-?\.\d+/)&&(s=!0),s)return"."==e.peek()&&e.backUp(1),"number";var m=!1;if(e.match(/^-?0x[0-9a-f]+/i)&&(m=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(m=!0),e.match(/^-?0(?![\dx])/i)&&(m=!0),m)return"number"}if(e.match(d))return n.tokenize=g(e.current(),!1,"string"),n.tokenize(e,n);if(e.match(h)){if("/"!=e.current()||e.match(/^.*\//,!1))return n.tokenize=g(e.current(),!0,"string.special"),n.tokenize(e,n);e.backUp(1)}return e.match(i)||e.match(p)?"operator":e.match(c)?"punctuation":e.match(v)?"atom":e.match(f)||n.prop&&e.match(a)?"property":e.match(l)?"keyword":e.match(a)?"variable":(e.next(),r)}function g(e,n,t){return function(r,o){while(!r.eol())if(r.eatWhile(/[^'"\/\\]/),r.eat("\\")){if(r.next(),n&&r.eol())return t}else{if(r.match(e))return o.tokenize=k,t;r.eat(/['"\/]/)}return n&&(o.tokenize=k),t}}function y(e,n){while(!e.eol()){if(e.eatWhile(/[^#]/),e.match("###")){n.tokenize=k;break}e.eatWhile("#")}return"comment"}function w(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"coffee",r=0,o=!1,i=null,c=n.scope;c;c=c.prev)if("coffee"===c.type||"}"==c.type){r=c.offset+e.indentUnit;break}"coffee"!==t?(o=null,i=e.column()+e.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:r,type:t,prev:n.scope,align:o,alignOffset:i}}function z(e,n){if(n.scope.prev){if("coffee"===n.scope.type){for(var t=e.indentation(),r=!1,o=n.scope;o;o=o.prev)if(t===o.offset){r=!0;break}if(!r)return!0;while(n.scope.prev&&n.scope.offset!==t)n.scope=n.scope.prev;return!1}return n.scope=n.scope.prev,!1}}function b(e,n){var t=n.tokenize(e,n),o=e.current();"return"===o&&(n.dedent=!0),(("->"===o||"=>"===o)&&e.eol()||"indent"===t)&&w(e,n);var i="[({".indexOf(o);if(-1!==i&&w(e,n,"])}".slice(i,i+1)),u.exec(o)&&w(e,n),"then"==o&&z(e,n),"dedent"===t&&z(e,n))return r;if(i="])}".indexOf(o),-1!==i){while("coffee"==n.scope.type&&n.scope.prev)n.scope=n.scope.prev;n.scope.type==o&&(n.scope=n.scope.prev)}return n.dedent&&e.eol()&&("coffee"==n.scope.type&&n.scope.prev&&(n.scope=n.scope.prev),n.dedent=!1),"indent"==t||"dedent"==t?null:t}var x={startState:function(){return{tokenize:k,scope:{offset:0,type:"coffee",prev:null,align:!1},prop:!1,dedent:0}},token:function(e,n){var t=null===n.scope.align&&n.scope;t&&e.sol()&&(t.align=!1);var r=b(e,n);return r&&"comment"!=r&&(t&&(t.align=!0),n.prop="punctuation"==r&&"."==e.current()),r},indent:function(e,n){if(e.tokenize!=k)return 0;var t=e.scope,r=n&&"])}".indexOf(n.charAt(0))>-1;if(r)while("coffee"==t.type&&t.prev)t=t.prev;var o=r&&t.type===n.charAt(0);return t.align?t.alignOffset-(o?1:0):(o?t.prev:t).offset},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=chunk-2d209573.608d01c9.js.map