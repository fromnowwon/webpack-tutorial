(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p;const e=t.p+"9bfe844746a458f24d1d70247339b694.jpg";document.getElementById("root").appendChild(function({userList:t}){const n=document.createElement("ul");return t.forEach((t=>{n.appendChild(function({name:t}){const n=document.createElement("li");return n.classList.add("user"),n.addEventListener("click",(()=>{alert(t)})),n.innerHTML=`\n\t\t<img src="${e}" alt="${t}" />\n\t\t${t}\n\t`,n}({name:t.name}))})),n}({userList:[{id:1,name:"예리"},{id:2,name:"슬기"},{id:3,name:"웬디"},{id:4,name:"조이"},{id:5,name:"아이린"}]}))})();