(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),l=t.n(a),i=t(667),c=t.n(i),s=new URL(t(668),t.b),d=l()(o()),p=c()(s);d.push([n.id,`:root {\n  --bodyBg: rgb(38, 89, 106);\n  --headBg: rgb(8, 40, 48);\n  --headC: rgb(123, 185, 204);\n  --borderC: rgb(9, 19, 22);\n  --blackCell: rgb(48, 59, 60);\n  --whiteCell: rgb(129, 159, 161);\n  --pathCell: rgb(70, 149, 85);\n  --paraC: rgb(70, 149, 85);\n}\n\n/* roboto-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 400;\n  src: url(${p}) format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/*****************\n  ***Body section***\n  ******************/\n\nbody {\n  text-align: center;\n  font-size: 15px;\n  font-family: Roboto, sans-serif;\n  display: grid;\n  place-items: center;\n  background-color: var(--bodyBg);\n}\n\n/*******************\n***Header section***\n*******************/\n\nheader {\n  min-width: 100%;\n  background-color: var(--headBg);\n  color: var(--headC);\n  padding: 0.5rem;\n}\n\nheader * {\n  padding: 0.5rem;\n}\n\n#pathParagraph {\n  color: var(--paraC);\n  transition-duration: 1.4s;\n  margin: 0 2rem;\n}\n\n/**********************\n***Container section***\n**********************/\n\n.container {\n  min-width: 100%;\n  padding: 0.5rem 0.5rem;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  place-items: center;\n}\n\n/******************\n***Table section***\n******************/\n\n#table {\n  box-shadow: 0px 0px 13px 5px var(--borderC);\n  margin: 2rem;\n  display: grid;\n  grid-template: repeat(8, 1fr) / repeat(8, 1fr);\n  place-items: center;\n  width: 520px;\n  height: 520px;\n}\n\n.cell {\n  width: 65px;\n  height: 65px;\n  font-size: 1.25rem;\n  color: rgb(9, 19, 22);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.cell:hover {\n  opacity: 0.4;\n}\n\n.blackCell {\n  background-color: var(--blackCell);\n}\n\n.whiteCell {\n  background-color: var(--whiteCell);\n}\n\n.pathCell {\n  background-color: var(--pathCell) !important;\n  transition-duration: 0.6s;\n}\n\n/**************************\n***Cell columns and rows***\n**************************/\n\n.cell::before {\n  position: absolute;\n  right: 75px;\n}\n\n.cell::after {\n  position: absolute;\n  top: 75px;\n}\n\n.cell:nth-child(1)::before {\n  content: "8";\n}\n\n.cell:nth-child(9)::before {\n  content: "7";\n}\n\n.cell:nth-child(17)::before {\n  content: "6";\n}\n\n.cell:nth-child(25)::before {\n  content: "5";\n}\n\n.cell:nth-child(33)::before {\n  content: "4";\n}\n\n.cell:nth-child(41)::before {\n  content: "3";\n}\n\n.cell:nth-child(49)::before {\n  content: "2";\n}\n\n.cell:nth-child(57)::before {\n  content: "1";\n}\n\n.cell:nth-child(57)::after {\n  content: "A";\n}\n\n.cell:nth-child(58)::after {\n  content: "B";\n}\n\n.cell:nth-child(59)::after {\n  content: "C";\n}\n\n.cell:nth-child(60)::after {\n  content: "D";\n}\n\n.cell:nth-child(61)::after {\n  content: "E";\n}\n\n.cell:nth-child(62)::after {\n  content: "F";\n}\n\n.cell:nth-child(63)::after {\n  content: "G";\n}\n\n.cell:nth-child(64)::after {\n  content: "H";\n}\n\nimg {\n  width: 80%;\n  height: 80%;\n}\n\n/************************\n***Media query section***\n************************/\n\n@media screen and (max-width: 750px) {\n  #table {\n    width: 400px;\n    height: 400px;\n  }\n\n  .cell {\n    width: 50px;\n    height: 50px;\n    font-size: 1rem;\n  }\n  .cell::before {\n    right: 60px;\n  }\n  .cell::after {\n    top: 60px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  #table {\n    width: 320px;\n    height: 320px;\n  }\n\n  .cell {\n    width: 40px;\n    height: 40px;\n    font-size: 1rem;\n  }\n  .cell::before {\n    right: 50px;\n  }\n  .cell::after {\n    top: 50px;\n  }\n}\n`,""]);const h=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var l={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(l[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&l[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},l=[],i=0;i<n.length;i++){var c=n[i],s=r.base?c[0]+r.base:c[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var h=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var f=o(u,r);r.byIndex=i,e.splice(i,0,{identifier:p,updater:f,references:1})}l.push(p)}return l}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var l=0;l<a.length;l++){var i=t(a[l]);e[i].references--}for(var c=r(n,o),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},668:(n,e,t)=>{n.exports=t.p+"b009a76ad6afe4ebd301.woff2"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=[[2,1],[2,-1],[1,2],[1,-2],[-2,1],[-2,-1],[-1,2],[-1,-2]],e=t.p+"161c8461993678135a1b.svg",r=document.getElementById("table"),o=document.getElementById("pathParagraph");let a=[];const l={0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h"};var i=t(379),c=t.n(i),s=t(795),d=t.n(s),p=t(569),h=t.n(p),u=t(565),f=t.n(u),g=t(216),m=t.n(g),b=t(589),v=t.n(b),y=t(426),x={};x.styleTagTransform=v(),x.setAttributes=f(),x.insert=h().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=m(),c()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,((t=[7,1])=>{let i=`${t[0]}${t[1]}`,c=[];for(let n=0;n<8;n++)for(let e=0;e<8;e++){let t=document.createElement("div");t.classList.add((n+e)%2==0?"whiteCell":"blackCell"),t.classList.add("cell"),t.setAttribute("id",`${n}${e}`),r.appendChild(t)}const s=document.createElement("img");s.src=e,s.setAttribute("alt","knight"),document.getElementById(i).appendChild(s),document.querySelectorAll(".cell").forEach((e=>{e.addEventListener("click",(()=>{t.length<1||c.length>1?((n=>{for(let e=1;e<n.length;e++){let t=document.getElementById(`${n[e][0]}${n[e][1]}`);t.classList.remove("pathCell"),t.innerHTML=""}})(a),t.push(+e.id[0]),t.push(+e.id[1]),e.appendChild(s)):(c.push(+e.id[0]),c.push(+e.id[1]),a=((e,t)=>{const r=(()=>{const n=[];for(let e=0;e<8;e++){n[e]=[];for(let t=0;t<8;t++)n[e].push({level:"null",path:[]});n.push(n[e])}return n})();let o=0;for(r[e[0]][e[1]].level=o,r[e[0]][e[1]].path.push(e);"null"==r[t[0]][t[1]].level;){for(let e=0;e<8;e++)for(let t=0;t<8;t++)r[e][t].level==o&&n.forEach((n=>{let a=[n[0]+e,n[1]+t];a[0]>=0&&a[0]<=7&&a[1]>=0&&a[1]<=7&&"null"==r[a[0]][a[1]].level&&(r[a[0]][a[1]].level=o+1,r[a[0]][a[1]].path=[...r[e][t].path,[a[0],a[1]]])}));o++}return{board:r}})(t,c).board[c[0]][c[1]].path,(n=>{let e="";for(let t=1;t<n.length;t++){let r=document.getElementById(`${n[t][0]}${n[t][1]}`);r.classList.add("pathCell"),r.innerHTML=t,e+=`${t}. B${l[n[t][1]]}${8-n[t][0]}, `}e=e.slice(0,-2),o.innerHTML=`Knight (B) moves: ${l[n[0][1]]}${8-n[0][0]} => ${l[n[n.length-1][1]]}${8-n[n.length-1][0]}. You made it in ${n.length-1} moves!  Here's your path: ${e}`})(a),t=[],c=[])}))}))})()})()})();