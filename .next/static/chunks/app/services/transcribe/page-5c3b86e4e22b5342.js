(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{6217:function(e,t,n){Promise.resolve().then(n.bind(n,4595))},4595:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Transcribe}});var r=n(7437),o=n(2265),l=n(9779),c=n.n(l),components_FileButton=e=>{let{name:t,cls:n,content:l}=e,c=(0,o.useRef)(null);return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"file",ref:c,onChange:()=>{let e=c.current.files[0];if(e){let t=new FileReader;t.onload=e=>{let t=e.target.result;l.current.innerText=t},t.readAsText(e)}},style:{display:"none"}}),(0,r.jsx)("a",{className:n,onClick:()=>c.current.click(),children:t})]})},components_DownloadButton=e=>{let{name:t,cls:n,content:l}=e,c=(0,o.useRef)(null);return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{type:"file",ref:c,style:{display:"none"}}),(0,r.jsx)("a",{className:n,onClick:()=>{let e=l.current.innerText||"Default content",t=new Blob([e],{type:"text/plain"}),n=URL.createObjectURL(t);c.current.href=URL.createObjectURL(t),c.current.download="transcript.txt",c.current.click(),URL.revokeObjectURL(n)},children:t})]})};function Transcribe(){let e=(0,o.useRef)();return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)("div",{className:c().boxStyle,children:(0,r.jsx)("p",{ref:e})}),(0,r.jsx)(components_FileButton,{name:"Upload",cls:c().uploadButton,content:e}),(0,r.jsx)(components_DownloadButton,{name:"Download Transcript",cls:c().downloadButton,content:e})]})}},9779:function(e){e.exports={container:"transcribe_container___ye_n",boxStyle:"transcribe_boxStyle__NyyjB",playButton:"transcribe_playButton__JttC5",downloadButton:"transcribe_downloadButton__V3ObP",uploadButton:"transcribe_uploadButton__xKYZx"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,a={},i=null,u=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:c.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=6217)}),_N_E=e.O()}]);