(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4c4c"],{9241:function(n,r,t){"use strict";t.r(r),t.d(r,"http",(function(){return f}));t("ac1f"),t("466d"),t("a9e3");function u(n,r){return n.skipToEnd(),r.cur=d,"error"}function c(n,r){return n.match(/^HTTP\/\d\.\d/)?(r.cur=e,"keyword"):n.match(/^[A-Z]+/)&&/[ \t]/.test(n.peek())?(r.cur=i,"keyword"):u(n,r)}function e(n,r){var t=n.match(/^\d+/);if(!t)return u(n,r);r.cur=o;var c=Number(t[0]);return c>=100&&c<400?"atom":"error"}function o(n,r){return n.skipToEnd(),r.cur=d,null}function i(n,r){return n.eatWhile(/\S/),r.cur=a,"string.special"}function a(n,r){return n.match(/^HTTP\/\d\.\d$/)?(r.cur=d,"keyword"):u(n,r)}function d(n){return n.sol()&&!n.eat(/[ \t]/)?n.match(/^.*?:/)?"atom":(n.skipToEnd(),"error"):(n.skipToEnd(),"string")}function s(n){return n.skipToEnd(),null}var f={token:function(n,r){var t=r.cur;return t!=d&&t!=s&&n.eatSpace()?null:t(n,r)},blankLine:function(n){n.cur=s},startState:function(){return{cur:c}}}}}]);
//# sourceMappingURL=chunk-2d0e4c4c.224d4135.js.map