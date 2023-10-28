!function(){"use strict";var e,r={47:function(){var e=window.wp.blocks,r=window.wp.i18n,t=window.wp.element,o=window.wp.components,n=window.wp.data;const i={BLOCK_SIDEBAR_TYPE_INCOMPATIBLE:(0,r.__)("Error: This block is not compatible with this sidebar.","wporg-learn"),BLOCK_POST_TYPE_INCOMPATIBLE:(0,r.__)("Error: This block is not compatible with this post type.","wporg-learn")};(0,e.registerBlockType)("wporg-learn/workshop-details",{title:(0,r.__)("Workshop Details","wporg-learn"),description:(0,r.__)("Show details about the workshop, pulled from post meta.","wporg-learn"),category:"widgets",icon:"smiley",supports:{html:!1},edit:function(e){let{clientId:l}=e;const s=((e,r,t,o)=>{if(null===r){if(!t)return i.BLOCK_SIDEBAR_TYPE_INCOMPATIBLE}else if("wporg_workshop"!==r)return i.BLOCK_POST_TYPE_INCOMPATIBLE;return o})(0,(0,n.useSelect)((e=>{const{getCurrentPostType:r}=e("core/editor");return r()})),((e,r)=>(0,n.useSelect)((r=>{const{getBlockAttributes:t,getBlockName:o,getBlockParents:n}=r("core/block-editor");return n(e).some((e=>{if("core/widget-area"!==o(e))return!1;const{id:r}=t(e);return"wporg-learn-workshops"===r}))})))(l),(0,r.__)("This will be dynamically populated based on settings in the Workshop Details meta box.","wporg-learn"));return(0,t.createElement)(o.Placeholder,{label:(0,r.__)("Workshop Details","wporg-learn")},(0,t.createElement)("p",null,s))},save:()=>null})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,e=[],o.O=function(r,t,n,i){if(!t){var l=1/0;for(c=0;c<e.length;c++){t=e[c][0],n=e[c][1],i=e[c][2];for(var s=!0,a=0;a<t.length;a++)(!1&i||l>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(s=!1,i<l&&(l=i));if(s){e.splice(c--,1);var p=n();void 0!==p&&(r=p)}}return r}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,n,i]},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={126:0,224:0};o.O.j=function(r){return 0===e[r]};var r=function(r,t){var n,i,l=t[0],s=t[1],a=t[2],p=0;if(l.some((function(r){return 0!==e[r]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(a)var c=a(o)}for(r&&r(t);p<l.length;p++)i=l[p],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},t=self.webpackChunkwporg_learn_plugin=self.webpackChunkwporg_learn_plugin||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var n=o.O(void 0,[224],(function(){return o(47)}));n=o.O(n)}();