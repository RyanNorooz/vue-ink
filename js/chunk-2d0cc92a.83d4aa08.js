(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc92a"],{"4f02":function(e,t,r){"use strict";r.r(t),r.d(t,"ez80",(function(){return a})),r.d(t,"z80",(function(){return i}));r("ac1f"),r("466d");function n(e){var t,r;e?(t=/^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i,r=/^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i):(t=/^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i,r=/^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i);var n=/^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i,i=/^(n?[zc]|p[oe]?|m)\b/i,a=/^([hl][xy]|i[xy][hl]|slia|sll)\b/i,c=/^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;return{startState:function(){return{context:0}},token:function(l,s){if(l.column()||(s.context=0),l.eatSpace())return null;var u;if(l.eatWhile(/\w/)){if(e&&l.eat(".")&&l.eatWhile(/\w/),u=l.current(),!l.indentation())return l.match(c)?"number":null;if((1==s.context||4==s.context)&&n.test(u))return s.context=4,"variable";if(2==s.context&&i.test(u))return s.context=4,"variableName.special";if(t.test(u))return s.context=1,"keyword";if(r.test(u))return s.context=2,"keyword";if(4==s.context&&c.test(u))return"number";if(a.test(u))return"error"}else{if(l.eat(";"))return l.skipToEnd(),"comment";if(l.eat('"')){while(u=l.next()){if('"'==u)break;"\\"==u&&l.next()}return"string"}if(l.eat("'")){if(l.match(/\\?.'/))return"number"}else if(l.eat(".")||l.sol()&&l.eat("#")){if(s.context=5,l.eatWhile(/\w/))return"def"}else if(l.eat("$")){if(l.eatWhile(/[\da-f]/i))return"number"}else if(l.eat("%")){if(l.eatWhile(/[01]/))return"number"}else l.next()}return null}}}var i=n(!1),a=n(!0)}}]);
//# sourceMappingURL=chunk-2d0cc92a.83d4aa08.js.map