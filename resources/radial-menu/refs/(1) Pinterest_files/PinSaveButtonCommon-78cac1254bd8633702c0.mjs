(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["PinSaveButtonCommon",12,53,"PinRepEditButtonCommon"],{"/QE7":function(e,t,n){n.d(t,"a",(function(){return r}));var i=n("q1tI"),o=n("z19Z"),a=n("EC67");function r(e){const{children:t,__dangerouslyDisableSpammyDomainCheck:n,externalData:r,href:s,isExternalLink:c=!1,onClick:l,onHistoryChange:u,target:d}=e,[p,h]=Object(i.useState)(null),[m,f]=Object(i.useState)(!1),g=Object(a.g)(),b=Object(a.h)();return Object(i.useEffect)(()=>(f(!0),()=>{f(!1)}),[]),Object(i.useEffect)(()=>{c&&!n&&null===p&&Object(o.a)({isMounted:m,pin:null==r?void 0:r.pin,location:b,spamCheckCallback:e=>h(e),href:s})},[e]),t({handleClick:({event:e})=>{Object(o.b)({isExternalLink:c,event:e})||(e.nativeEvent.preventDefault(),l&&l({event:e}),s&&(c?Object(o.c)({href:s,pinId:null==r?void 0:r.pinId,pin:null==r?void 0:r.pin,location:b,auxData:null==r?void 0:r.auxData,spamCheck:p}):Object(o.d)({event:e,onHistoryChange:u,href:s,history:g,target:"blank"===d?"blank":null})))}})}},"0YPa":function(e,t,n){var i=n("q1tI");t.a=(e,t)=>{const n=Object(i.useRef)(()=>{});Object(i.useEffect)(()=>{n.current=e},[e]),Object(i.useEffect)(()=>{if(null===t)return()=>{};const e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])}},"2qKt":function(e,t,n){var i=n("q1tI"),o=n.n(i),a=n("/MKj"),r=n("Y+p1"),s=n.n(r),c=(n("17x9"),n("r8eU")),l=n("Vzit"),u=n("vh5K"),d=n("pLLR"),p=n("ANjH");function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m={shouldUsePlacedExperience:!0,dispatchMountActionDuringSSR:!1,isAdvertiserPlacement:!1};t.a=(e,t={},n)=>i=>{const r=function(e){return t=>{const n=t.experiences.eligibleExperiences[e],{advertiserId:i}=t;return t.advertiserId?{advertiserId:i,experience:n}:{experience:n}}}(e);n={...m,...n};const f=function(e,t,n=!0,i=!0,a=!1,r){var d,p;return p=d=class extends o.a.Component{constructor(e){super(e),h(this,"state",{extraContext:void 0}),h(this,"setExtraContextState",e=>{s()(this.state.extraContext,e)||this.setState({extraContext:e})})}componentDidMount(){a||this.dispatchPlacementMount(!1)}UNSAFE_componentWillUpdate(n,i){const{dispatch:o,experience:a,requestContext:r}=n,d=new c.b(r,"web_bypass_eligible_experience_v2").enabledWithNoActivation();let p=t;if(d&&"function"==typeof t){const a=t(this.props,this.state.extraContext||{});p=t(n,i.extraContext||{}),s()(a,p)||o(Object(l.c)(e,p,d))}else{if("function"==typeof t){const e=i.extraContext||{};p=t(n,e)}if(!Object(u.e)(a)&&"function"==typeof t&&p&&Object.keys(p).length){const n=t(this.props,this.state.extraContext||{});s()(n,p)||o(Object(l.c)(e,p))}}!a||this.props.experience&&a.id===this.props.experience.id||o(Object(l.i)(e,p))}componentWillUnmount(){const{dispatch:t}=this.props;t(Object(l.k)(e))}dispatchPlacementMount(n){const{advertiserId:i,dispatch:o,requestContext:r}=this.props;let s={};s="function"==typeof t?t(this.props,this.state):{...t};const u=!n&&new c.b(r,"web_bypass_eligible_experience_v2").enabled(),d=a?{advertiserId:i}:void 0;o(Object(l.j)(e,s,n,u,d))}render(){const{experience:e}=this.props,t={[a?"advertiserExperience":"experience"]:Object(u.e)(e)?e:null};return o.a.createElement(r,Object.assign({},this.props,{setPlacementExtraContext:this.setExtraContextState},t))}},h(d,"displayName",`withPlacement(${r.displayName||r.name||"Component"})`),p}(e,t,n.shouldUsePlacedExperience,n.dispatchMountActionDuringSSR,n.isAdvertiserPlacement,i);return Object(p.compose)(d.e,Object(a.connect)(r))(f)}},"3/Bf":function(e,t,n){n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return g}));var i=n("7w6Q"),o=n("FZ8N"),a=n("LrH5");const r=Object(a.a)("logPwtStats");let s=null;const c=i.a.getSampleRate(.2);let l=!0;const u=e=>{s=e},d=e=>{s&&(s.historyAction=e)},p=e=>{s&&(s.initialAppLoadSurface=e)},h=(e,t)=>{if(!s)return void i.a.increment("performanceEntries.no_context",c,{name:e});const{deviceType:n,initialAppLoadSurface:a,isBot:r,isSocialBot:l}=s;if(!a)return void i.a.increment("performanceEntries.no_surface",c,{name:e});const u=`performanceEntries.${(l?"socialBot":r&&"bot")||"nonbot"}.${n}.${a}.${e}`;o.c||i.a.timing(u,t,c)},m=(e,t,n=!0)=>{if(!s)return r("pwt.metrics_quality.no_context"),void i.a.increment("pwt.metrics_quality.no_context",c,{eventName:e});const{browserName:a,browserVersion:l,deviceType:u,isBot:d,isSocialBot:p}=s,h=`pwt.${(p?"socialBot":d&&"bot")||"nonbot"}.metrics_quality.${u}.${e}`,m={...(null==t?void 0:t.tags)||{},browserName:a,browserVersion:(null==l?void 0:l.split(".")[0])||"0"},f=null==t?void 0:t.count;n&&(r(`${h}: ${"number"==typeof f?f:1}`),(null==t?void 0:t.tags)&&r(Object.entries(t.tags))),o.c||i.a.count(h,"number"==typeof f?f:1,c,m)},f=(e,t)=>m(`ERROR.${(null==t?void 0:t.action)?t.action+".":""}${e}`,{tags:t}),g=({appLoadName:e,clientNavName:t},n)=>{if(s){const i="APP_VOLUME.";l?(m(i.concat(e),{tags:{browserSupportsPwtProfiler:!!n}}),l=!1):"PUSH"===s.historyAction&&m(i.concat(t),{tags:{browserSupportsPwtProfiler:!!n}})}else i.a.increment("pwt.metrics_quality.no_context",c,{eventName:e.concat("."+t)})}},"B2N+":function(e,t,n){var i=n("q1tI"),o=n.n(i),a=n("n6mq");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends o.a.Component{constructor(...e){super(...e),r(this,"state",{anchorHeight:0,anchorWidth:0,horizontalOffset:0,verticalOffset:0}),r(this,"subjectRef",o.a.createRef()),r(this,"calculateAndSetOffsets",({anchorHeight:e,anchorWidth:t,subjectHeight:n,subjectWidth:i})=>{const o=-(i/2-t/2),a=-(n/2-e/2);this.setState({anchorHeight:e,anchorWidth:t,horizontalOffset:o,verticalOffset:a})}),r(this,"positionSubject",()=>{const e=this.subjectRef.current,{anchor:t}=this.props;if(t&&e){const{height:n,width:i}=t.getBoundingClientRect(),{height:o,width:a}=e.getBoundingClientRect();this.calculateAndSetOffsets({anchorHeight:n,anchorWidth:i,subjectHeight:o,subjectWidth:a})}})}componentDidMount(){this.positionSubject()}componentDidUpdate(e,t){const{anchor:n}=this.props,{height:i,width:o}=n.getBoundingClientRect();(i!==t.anchorHeight||o!==t.anchorWidth)&&this.positionSubject()}render(){const{children:e,zIndex:t}=this.props,{horizontalOffset:n,verticalOffset:i}=this.state,r=t?new a.p(t):void 0;return o.a.createElement(a.e,{ref:this.subjectRef,position:"absolute",dangerouslySetInlineStyle:{__style:{left:n,top:i}},zIndex:r},e)}}t.a=function(e){const{anchor:t,onTouch:n,paused:i,size:r,zIndex:c}=e;return t?o.a.createElement(s,{anchor:t,zIndex:c},o.a.createElement(a.U,{fullWidth:!1,onTap:({event:e})=>n(e),rounding:"circle"},o.a.createElement(a.G,{paused:i,size:r}))):null}},EC51:function(e,t,n){var i=n("q1tI"),o=n.n(i),a=n("/QE7"),r=n("zwad"),s=n("n6mq");const c=Object(i.forwardRef)((e,t)=>{const{accessibilityLabel:n,children:i,__dangerouslyDisableSpammyDomainCheck:c,externalData:l,hoverStyle:u,href:d,id:p,inline:h,onBlur:m,onClick:f,onFocus:g,onHistoryChange:b,target:_}=e,v=r.a.isOffsiteUrl(d);return o.a.createElement(a.a,{__dangerouslyDisableSpammyDomainCheck:v?c:void 0,href:d,isExternalLink:v,externalData:v?l:void 0,onClick:f,onHistoryChange:v?void 0:b,target:v?void 0:_},({handleClick:e})=>o.a.createElement(s.z,{accessibilityLabel:n,hoverStyle:u,href:d,id:p,inline:h,onBlur:m,onClick:e,onFocus:g,ref:t,rel:v?"nofollow":void 0},i))});c.displayName="Link",t.a=c},FZ8N:function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));const i=window.location.search.includes("debug_tracing"),o=window.location.search.includes("debug_lab_tracing"),a=i||o},HMdf:function(e,t,n){n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return f}));var i=n("vzKb"),o=n("SyXB");function a(e){var t,n;return(null===(t=window)||void 0===t||null===(n=t.performance)||void 0===n?void 0:n.getEntriesByType)&&window.performance.getEntriesByType(e)||[]}var r=n("FZ8N"),s=n("3/Bf");let c;function l(){window.performance&&window.performance.clearResourceTimings&&(Object(o.c)("resourceBufferCleared"),r.b&&console.info("Warning: Clearing resource timings in default buffer."),Object(s.c)("resourceBufferSize",{count:a("resource").length}),window.performance.clearResourceTimings())}const u=({size:e})=>{if(window.performance){window.PerformanceObserver?(c=a("resource"),Object(i.a)({entryTypes:["resource"]},t=>{c=(c||[]).concat(t.getEntries()),c.length>e&&(c=c.slice(-e))})):(window.addEventListener("popstate",()=>{a("resource").length>e&&l()}),window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(e));try{window.performance.onresourcetimingbufferfull=()=>{c||l()}}catch(t){}}},d=()=>c||a("resource"),p=()=>{c&&(Object(s.c)("customBufferSize",{count:c.length}),c=[]),l()},h=()=>({customBufferSize:c?c.length:0,defaultBufferSize:a("resource").length}),m=(e,t=!0)=>{let n=0,i=0;const o=(a=e.filter(e=>t?(e.responseEnd||"img"!==e.initiatorType||(n+=1),e.transferSize||"img"!==e.initiatorType||(i+=1),!!e.responseEnd&&!!e.transferSize&&"img"===e.initiatorType):!!e.responseEnd&&!!e.transferSize).map(e=>8*(e.transferSize||0)/((e.responseEnd-e.responseStart)/1e3)/1e3)).length?a.reduce((e,t)=>e+t,0)/a.length:null;var a;return t&&(n>0&&Object(s.c)("images.downloadSpeed.noResponseEnd",{tags:{count:n}},!1),i>0&&Object(s.c)("images.downloadSpeed.transferSize",{tags:{count:i}},!1)),o},f=()=>(e=>{if(!e)return"unknown";const t=Math.floor(e/1e3);return t<1?"0-1":t<5?"1-5":t<10?"5-10":t<20?"10-20":t<40?"20-40":t<80?"40-80":"80_or_above"})(m(d()))},LrH5:function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var i=n("FZ8N");const o=(e,t)=>{i.b&&e instanceof HTMLImageElement&&(e.style.outline="10px solid "+t,e.style.outlineOffset="-30px")},a=e=>(t,...n)=>{i.b&&console.log("string"==typeof t?`[PWT:${e}] ${t}`:t,...n)}},NdXn:function(e,t,n){function i(e){return e.replace(/[_.-](\w|$)/g,(e,t)=>t.toUpperCase())}n.d(t,"a",(function(){return i}))},PNKV:function(e,t,n){},SyXB:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u}));var i=n("XtwW");const o="masonryPagination";let a={};const r=e=>"📌 "+e,s=()=>{const e={};return Object.keys(a).forEach(t=>{(a[t]||[]).slice(0,3).forEach((n,i)=>{e[i?`${t}_${i+1}`:t]=n})}),e},c=(e,t)=>(a[e]||[]).filter(e=>e<t).length,l=(e,t)=>c(e,t)>0,u=()=>{i.a&&Object.keys(a).forEach(e=>((e,t)=>{const n=r(t);e.clearMarks(n),e.clearMeasures(n)})(i.a,e)),a={}};t.c=e=>{i.a&&(a[e]=(a[e]||[]).concat([i.a.now()]),((e,t)=>{const n=r(t);e.mark(n),e.measure(n)})(i.a,e))}},WnNx:function(e,t,n){function i(e){return{type:"SHOW_REPIN_ANIMATION",payload:{pinId:e}}}function o(){return{type:"HIDE_REPIN_ANIMATION"}}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},XtwW:function(e,t,n){var i;t.a=(i=window.performance)&&i.clearMarks&&i.clearMeasures&&i.clearResourceTimings&&i.getEntries&&i.getEntriesByName&&i.getEntriesByType&&i.mark&&i.measure&&i.now&&i.setResourceTimingBufferSize?i:null},bNC6:function(e,t,n){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));const i={id:14,name:"own_profile"},o={id:15,name:"other_profile"},a={initial_app_load:{unauth:{board:{id:114,name:"board_page_interactive"},pin_closeup:{id:113,name:"pin_page_interactive"},other_profile:{id:115,name:"user_page_interactive"},topic:{id:119,name:"topic_page_interactive"},sterling_signup:{id:201,name:"sterling_signup_main_pageload"},sterling_login:{id:202,name:"sterling_login_main_pageload"}},auth:{bizhub:{id:607,name:"bizhub_pinteractive"},homefeed:{id:19,name:"home_feed_pinteractive"},sterling_reporting_details:{id:218,name:"sterling_reporting_details_pageload"},sterling_reporting_overview:{id:219,name:"sterling_reporting_overview_pageload"},sterling_ads_create:{id:221,name:"sterling_adscreate_main_pageload"},sterling_ads_duplicate:{id:206,name:"sterling_adsduplication_main_pageload"},sterling_ads_edit:{id:204,name:"sterling_adsedit_main_pageload"},sterling_billing_profile:{id:203,name:"sterling_billingprofile_main_pageload"},sterling_bulk_editor:{id:205,name:"sterling_bulkeditor_main_pageload"},sterling_pin_builder:{id:222,name:"sterling_adscreate_pinbuilder_pageload"}}},client_route_push:{unauth:{},auth:{bizhub:{id:608,name:"bizhub_page_render"},homefeed:{id:2,name:"home_feed_render"},search:{id:3,name:"search_feed_render"},pin_closeup:{id:13,name:"pin_closeup_details"},own_profile:i,other_profile:o}},client_route_replace:{unauth:{},auth:{own_profile:i,other_profile:o}}},r={client_route_push:{auth:{pin_closeup:{story_pin:{id:700,name:"story_pin_closeup"}}}}},s={board_picker:16,grid_bottom_spinner:12,facebook_autologin:500,google_autologin:501,story_pin_step:701},c=e=>{var t,n;const{navigationType:i,isAuthenticated:o,segment:s,surface:c}=e,l=o?"auth":"unauth",u=null===(t=r[i])||void 0===t||null===(n=t[l])||void 0===n?void 0:n[c];return s&&u&&u[s]||a[i][l][c]},l=e=>{if("stopwatch"===e.type)return s[e.name]||null;const t=c(e);return t?t.id:null},u=e=>{if("stopwatch"===e.type)return e.name;const{navigationType:t,isAuthenticated:n,segment:i,surface:o}=e,a=n?"auth":"unauth",r=c(e);return r?r.name:`${t}_${a}_${o}${i?"_"+i:""}`}},bZU8:function(e,t,n){n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));const i="pwt-grid-item",o=['div[data-grid-item="true"]',"div.Masonry div.Collection-Item","div.Grid__Item",`div[data-test-id="${i}"]`],a=o.join(","),r=o.map(e=>e+" img").join(","),s=o.map(e=>e+" div[style*=background-image]").join(",")},dMCU:function(e,t,n){n.d(t,"a",(function(){return c}));var i=n("q1tI"),o=n.n(i),a=n("/MKj"),r=n("v/Q4"),s=n("+PUW");function c(e){const t=t=>{const n=Object(a.useDispatch)(),{isAuth:i,isLimitedLogin:c}=Object(r.a)(),l=!i||c?e=>e=>{e&&e.stopPropagation(),n(s.b)}:e=>e;return o.a.createElement(e,Object.assign({authAction:l,dispatch:n,isAuth:i,isLimitedLogin:c},t))};return t.displayName=`WithAuthenticatedAction(${String(e.displayName||e.name)})`,t}},gg0E:function(e,t,n){n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return _}));var i=n("q1tI"),o=n("SyXB"),a=n("0YPa"),r=n("bNC6"),s=n("HMdf"),c=n("3/Bf"),l=n("y2Ga"),u=n("bZU8");const d=(e,t)=>{const n=(e=>e instanceof HTMLDivElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null)(e);if(!n)return Object(c.b)("missing_client_rect"),!1;return!(e instanceof HTMLImageElement&&n.width<100&&n.height<100)&&(({top:e,height:t},{foldY:n,pageYOffset:i})=>{const o=e+i;if(o>=n)return!1;const a=Math.min(t,n-o);return a>.5*t||a>.2*n})(n,t)},p=()=>{const e=(()=>{if(!document.querySelector)return Object(c.b)("missing_document_query_selector"),null;const e=document.querySelectorAll(u.d);return e[e.length-1]||null})();if(!e)return!1;const t=window.innerHeight||0,n=window.pageYOffset||0;return e.getBoundingClientRect().top+n>=t},h=e=>{if(!document.querySelector)return Object(c.b)("missing_document_query_selector"),[];const t={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},n=[u.b,...e?[u.a]:[]].join(",");return[...document.querySelectorAll(n)].reduce((e,n)=>{if((n instanceof HTMLImageElement||n instanceof HTMLDivElement)&&d(n,t)){const t=(e=>{if(e instanceof HTMLImageElement)return e.src;const t=((e.style||{}).backgroundImage||"").match(/^url\(["'](http.*)["']\)$/);return t&&t[1]||null})(n);if(t)return e.concat([{htmlElement:n,url:t}])}return e},[])};var m=n("LrH5");const f=Object(m.a)("GridProfiler"),g=()=>!!(window.addEventListener&&window.removeEventListener&&"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&document.querySelector&&document.querySelectorAll),b=(e,t)=>{if(!t){const t=document.querySelector?document.querySelectorAll(u.d).length:(Object(c.b)("missing_document_query_selector"),0);if(t===e)return f("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!p())return f("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}};function _({isAtEndOfFeed:e,includeBackgroundImages:t}){const n=Object(l.c)(),u=null==n?void 0:n.id,d=null==n?void 0:n.setVisuallyCompleteResult,[p,g]=Object(i.useState)({status:"DISABLED"});Object(i.useEffect)(()=>{g(d?{status:"LAYOUT",failedCount:0,numOfItemsChecked:0}:{status:"DISABLED"})},[u,d]),Object(i.useEffect)(()=>{if("DISABLED"!==p.status&&Object(o.c)("GridVisuallyCompleteProfiler_"+p.status),f("new status",p),"LAYOUT"===p.status){const e=((e,t)=>{const n=()=>{window.removeEventListener(e,n),t()};return window.addEventListener(e,n),()=>window.removeEventListener(e,n)})("scroll",()=>{Object(o.c)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[p.status]),Object(a.a)(()=>{if(!n||!d)return;const{abort:i,metricId:o}=n;switch(p.status){case"LAYOUT":{const n=b(p.numOfItemsChecked,e);n.complete?g({status:"TIMING",failedCount:0,images:h(t).map(({htmlElement:e,url:t})=>({fileName:(t||"").replace(/.*\//,""),element:e}),[])}):500*p.failedCount>6e4?(Object(c.c)(`images.${Object(r.b)(o)}.visuallyComplete.maxLayoutAttempt`),i("visuallyComplete_layoutTimeout"),g({status:"DISABLED"})):g({...p,failedCount:p.failedCount+1,numOfItemsChecked:n.numOfItemsChecked});break}case"TIMING":{const e=Object(s.c)(),t=p.images.length,n=[];let a=0,l=0,u=0;p.images.forEach(({element:t,fileName:i})=>{const o=e.find(e=>("img"===e.initiatorType||"css"===e.initiatorType)&&e.name.endsWith(i));o?o.responseEnd?(n.push(o),Object(m.b)(t,"green")):(u+=1,Object(m.b)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(l+=1,Object(m.b)(t,"red")):(a+=1,Object(m.b)(t,"greenyellow"))}),a||u?100*p.failedCount>6e4?(Object(c.c)(`images.${Object(r.b)(o)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:t,incompleteCount:a,noTimingCount:l,noTimingResponseEndCount:u}}),i("visuallyComplete_timingTimeout"),g({status:"DISABLED"})):g({...p,failedCount:p.failedCount+1}):(f(`All ${n.length} images are fetched`),d({imageTimings:n}),g({status:"DISABLED"}),Object(c.c)(`images.${Object(r.b)(o)}.visuallyComplete.complete`,{tags:{totalImageCount:t,noTimingCount:l}}));break}}},(e=>("LAYOUT"===e.status?500:"TIMING"===e.status&&100)||null)(p))}},jZhD:function(e,t,n){n.d(t,"a",(function(){return r}));var i=n("q1tI"),o=(n("17x9"),n("pdBG"));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class r extends i.Component{constructor(...e){super(...e),a(this,"searchCache",Object.create(null)),a(this,"lastSearchedQuery",null),a(this,"search",e=>{this.lastSearchedQuery=e,e in this.searchCache?this.props.onTypeaheadSuggestionsChange(this.searchCache[e],e):this.provider.search(e,({items:t})=>{this.searchCache[e]=t,e===this.lastSearchedQuery&&this.props.onTypeaheadSuggestionsChange(t,e)})})}componentDidMount(){const e=this.props.resourceOptions||{};this.provider=new o.a({resource_name:this.props.resourceName,...e});const{value:t}=this.props;null!=t&&this.props.allowSearchOnMount&&this.search(this.props.value)}componentDidUpdate(e){const{value:t}=this.props;null!=t&&t!==e.value&&this.search(t)}render(){return this.props.children||null}}a(r,"defaultProps",{resourceName:"TypeaheadResource"})},pdBG:function(e,t,n){var i=n("AHhP"),o=n.n(i);const a=function(e,t){this.uid=e,this.item=t,this.next=null,this.prev=null},r=function(e){this._maxNumItems=e||10,this._uidToData={},this._numItems=0,this._firstData=null,this._lastData=null};r.prototype.set=function(e,t){let n=this._uidToData[e];n||(n=new a(e,t),this._uidToData[e]=n,this._numItems+=1),this._moveToFront(n),this._numItems>this._maxNumItems&&this._evict()},r.prototype.get=function(e){const t=this._uidToData[e];return t?(this._moveToFront(t),t.item):null},r.prototype.remove=function(e){const t=this._uidToData[e];t&&(delete this._uidToData[e],this._firstData===t&&(this._firstData=t.next),this._lastData===t&&(this._lastData=t.prev),t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),this._numItems-=1)},r.prototype._moveToFront=function(e){this._firstData!==e&&(this._firstData?(this._lastData===e&&(this._lastData=e.prev),e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),this._firstData.prev=e,e.next=this._firstData,e.prev=null,this._firstData=e):(this._firstData=e,this._lastData=e))},r.prototype._evict=function(){delete this._uidToData[this._lastData.uid],this._firstData===this._lastData?(this._firstData=null,this._lastData=null):(this._lastData=this._lastData.prev,this._lastData.next=null),this._numItems-=1};var s=r,c=n("eOdZ"),l=n("mBfy");const u=function(e){e=e||{},this.tags=e.tags,this.enable_recent_queries=!!e.enable_recent_queries,this.minimum_term_character_length=e.minimum_term_character_length||0,this.bypass_lru_cache=e.bypass_lru_cache;const t={tags:e.tags,pin:e.pin_id},n=e.num_places;n?t.num_places=n:t.count="count"in e?e.count:5,e.exclude_non_followers&&(t.exclude_non_followers=!0),e.field_set_key&&(t.field_set_key=e.field_set_key),e.pin_scope&&(t.pin_scope=e.pin_scope),e.suggestion_type&&(t.suggestion_type=e.suggestion_type);let i="TypeaheadResource";e.resource_name&&(i=e.resource_name),this.searchResource=c.a.create(i,t),this.itemsCache=new s};Object.assign(u.prototype,o.a),Object.assign(u.prototype,{search(e,t){let n;if(!e&&"pinners_and_contacts"===this.tags)return this.abortSearch(),this.publishData(e,[],{},t);if(!e&&l.default.isLimitedLogin())return this.abortSearch(),this.publishData(e,[],{},t);if(!e&&this.enable_recent_queries&&l.default&&l.default.isAuthenticated())n="recent_search";else{const n=this.bypass_lru_cache?{}:this.itemsCache.get(e);if(n){const i=n.items;if(i&&i.length){this.abortSearch();const o=n.hint;return void this.publishData(e,i,o,t)}}}e.length>=this.minimum_term_character_length?this.fetch(e,n,t):this.publishData(e,[],{},t)},getResource(){return this.searchResource},abortSearch(){this.getResource().abort()},publishData(e,t,n,i){const o={term:e,items:t,hint:n};this.trigger("data",o),i&&i(o)},setAutocompleteScope(e){this.getResource().set("autocompleteScope",e)},fetch(e,t,n){const i=this.getResource();if(i.isCalling()){const t=i.get("term");if(e===t)return;this.abortSearch()}""!==this.tags&&(i.set("term",e),i.set("tags",t||this.tags),i.resetBookmark(),i.callGet({showError:!1}).then(t=>{const i=t.resource_response.data,o=i.items,a=i.hint||{},r={hint:a,items:o};this.cacheData(e,r),this.publishData(e,o,a,n)},e=>{this.trigger("fetchError",e)}),this.warm=!0)},removeCacheForTerm(e){this.itemsCache.remove(e)},cacheData(e,t){this.itemsCache.set(e,t)},prefetch(){if(this.warm)return;c.a.create("TypeaheadPrepareResource").callGet({showError:!1}),this.warm=!0}});t.a=u},rO08:function(e,t,n){n.r(t),n.d(t,"PinSaveButton",(function(){return O}));var i=n("q1tI"),o=n.n(i),a=n("/MKj"),r=n("Ye/N"),s=n("TiQD"),c=n("rYoy"),l=n("dMCU"),u=n("2qKt"),d=n("n6mq"),p=n("rm3W"),h=n("d90F"),m=n("0nTG"),f=n("lm6u"),g=n("y9Ij"),b=n("B6Tf"),_=n("seP0"),v=n("ANjH"),y=n("xjIv"),C=n("EC67");function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=Object(i.lazy)(()=>n.e("FirstPinCreateCommon").then(n.bind(null,"kj35"))),S=[500639,11022];class O extends i.Component{constructor(e){super(e),E(this,"componentWillUnmount",()=>{this._repinCompletionPromise&&this._repinCompletionPromise.cancel()}),E(this,"setCompletionPromise",e=>{this._repinCompletionPromise=e,this._repinCompletionPromise.promise.then(()=>{this.handleRepinHideAndToggle()})}),E(this,"_repinCompletionPromise",null),E(this,"handleRepinHideAndToggle",()=>{this.setState({isRepinModalOpen:!1});const{onToggleModal:e}=this.props;e&&e(!1)}),E(this,"handleSaveButtonClick",({shouldStopEventPropagation:e=!0}={shouldStopEventPropagation:!0})=>this.props.authAction(t=>{t&&(t.preventDefault(),e&&t.stopPropagation());const{onClickCallback:n,onToggleModal:i,oneTapSave:o,boardPickerStopwatch:a,pathname:r}=this.props;n&&n(),o?o.saved||"function"!=typeof o.save||o.save():(a&&(a.start(),Object(_.b)(a,r)),i&&i(!0),this.setState({isRepinModalOpen:this.props.isAuth}))})),E(this,"handleUnsaved",()=>{const{unsave:e,pin:t}=this.props;e(t.id)}),E(this,"handleBoardEdited",({boardId:e,title:t,url:n})=>{const{pin:i,save:o}=this.props;o(i.id,e,t,n)}),E(this,"handleSavedButtonClick",()=>{const{history:e,pin:t,pinSavedInfo:n,viewerId:i}=this.props;let o;t.pinner.id===i?o=t.board.url:n&&(o=n.url),o&&e.push(o)}),E(this,"saveButtonRef",Object(i.createRef)()),E(this,"renderPinToBoardRepin",()=>{const{isCloseupPin:e,onToggleModal:t,pin:n}=this.props,{isFPE:i,isRepinModalOpen:a}=this.state;return a&&i?this.renderFPE():i?null:o.a.createElement(f.a,{action:"repin",additionalCreateFields:{is_stl_pin:Object(m.i)(n)},onClose:this.handleRepinHideAndToggle,setCompletionPromise:this.setCompletionPromise,shouldShowToast:!0,onToggleModal:t,pin:n},({dismissModal:i,displaySuccessAnimation:r,handleAbort:s,handleNewBoardAnimationCompletion:c,handleSocialConnectSet:l,handleSaveToBoard:u,newPin:d,updateDescription:p,modalTitle:h,setModalTitle:m})=>o.a.createElement(b.b,{dismissModal:i,displaySuccessAnimation:r,handleSocialConnectSet:l,handleSaveToBoard:u,anchorRef:this.saveButtonRef.current,handleAbort:s,handleNewBoardAnimationCompletion:c,newPin:d,isCloseupPin:e,isInModal:!0,onToggleModal:t,pin:n,pwtAuxData:{pin_create_method:"repin"},modalTitle:h,setModalTitle:m,shouldRenderContent:a,updateDescription:p}))});const{experience:t,showRepinOnInitialRender:n}=e;this.state={isFPE:!!t&&S.includes(t.experience_id),isRepinModalOpen:n||!1}}componentDidMount(){const{onMount:e}=this.props;e&&e()}isFPERemoved(e){const{isFPE:t}=this.state,{experience:n}=e;return t&&(!n||!S.includes(n.experience_id))}renderFPE(){const{completePinSave:e,experience:t,pin:n}=this.props;return o.a.createElement(h.a,{name:"web_fbc_profile_board_to_collection"},({anyEnabled:i})=>o.a.createElement(s.b,{accessibilityModalLabel:i?r.a._("Create collection","createCollection.modal.accessibilityTitle","Accessible create collection education modal label"):r.a._("Create board","Accessible create board education modal label","Accessible create board education modal label"),heading:i?r.a._("Create collection","createCollection.modal.title","Create collection education modal label"):r.a._("Create board","Create board education modal label","Create board education modal label"),onDismiss:this.handleRepinHideAndToggle,size:"lg"},o.a.createElement(d.e,{dangerouslySetInlineStyle:{__style:{marginBottom:64}}},o.a.createElement(c.a,null,o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,{anchorRef:this.saveButtonRef.current,experience:t,inBoardToCollectionsExp:i,isInModal:!0,onClose:this.handleRepinHideAndToggle,onComplete:e,pin:n,pwtAuxData:{pin_create_method:"repin"}}))))))}render(){const{iconOnly:e,isCloseupPin:t,oneTapSave:n,onToggleModal:a,pin:r,renderPinSaveTooltip:s,renderSavedStatus:c,variant:l,viewerId:u,viewParameter:p}=this.props,h=!!(r.pinner.id===u||r.saved||r.savedInfo||"controlled"===(null==n?void 0:n.type)&&n.saved),m="controlled"===(null==n?void 0:n.type)?"controlled":"classic";return o.a.createElement(i.Fragment,null,o.a.createElement(d.e,{ref:this.saveButtonRef},t?o.a.createElement(g.a,{iconOnly:e,isCloseupPin:t,isPulsarDisplayed:!this.state.isRepinModalOpen,onClick:this.handleSaveButtonClick({shouldStopEventPropagation:!1}),onSavedClick:this.handleSavedButtonClick,saveButtonType:m,saved:h,variant:l}):o.a.createElement(g.b,{carouselData:r.carousel_data,iconOnly:e,isCloseupPin:t,onBoardUpdated:this.handleBoardEdited,onClick:this.handleSaveButtonClick({shouldStopEventPropagation:!0}),onSavedClick:this.handleSavedButtonClick,onToggleModal:a,onUnsaved:this.handleUnsaved,renderSavedStatus:c,saveButtonType:m,saved:h,savedInfo:r.savedInfo,variant:l,viewParameter:p}),this.renderPinToBoardRepin()),!!s&&this.saveButtonRef.current&&s(this.saveButtonRef.current))}}E(O,"defaultProps",{anchorString:""}),t.default=Object(v.compose)(Object(a.connect)((function({pins:e,viewer:t},{pin:n}){return{email:t.isAuth?t.email:void 0,isAuth:t.isAuth,pinSavedInfo:e[n.id]&&e[n.id].savedInfo,viewerId:t.isAuth?t.id:""}}),(function(e){return{completePinSave:()=>e(Object(p.b)()),save:(t,n,i,o)=>e(Object(y.a)(t,n,i,o)),unsave:t=>e(Object(y.b)(t))}})),l.a,Object(u.a)(33),C.k)((function(e){const t=Object(_.c)(),{pathname:n}=Object(C.h)();return o.a.createElement(O,Object.assign({},e,{boardPickerStopwatch:t,pathname:n}))}))},rVUJ:function(e,t,n){var i,o,a,r=n("q1tI"),s=n.n(r),c=n("/MKj"),l=n("B2N+"),u=n("n6mq");class d extends r.Component{renderPulsar(){const{anchor:e,handleComplete:t,zIndex:n}=this.props;return s.a.createElement(l.a,{anchor:e,onTouch:t,zIndex:n})}renderFlyout(){const{anchor:e,overflow:t,tooltip:n,handleDismiss:i,handleComplete:o}=this.props;if(!n)return null;const{cancelButtonText:a,confirmButtonText:r,mainText:c,idealDirection:l="down"}=n,d=a&&i&&r&&o;return s.a.createElement(u.q,{anchor:e,color:"blue",idealDirection:l,onDismiss:i,shouldFocus:!1,showCaret:!0,size:"flexible"},s.a.createElement(u.e,{maxWidth:284,padding:3,width:"max-content"},s.a.createElement(u.V,{color:"white",overflow:t,weight:"bold"},c),d?s.a.createElement(u.e,{marginTop:2,display:"flex",alignItems:"center"},s.a.createElement(u.e,{column:6,marginEnd:1},s.a.createElement(u.f,{color:"transparentWhiteText",onClick:e=>i(e),size:"md",text:String(a)})),s.a.createElement(u.e,{column:6},s.a.createElement(u.f,{color:"white",size:"md",text:String(r),onClick:o}))):null))}render(){const{anchor:e,pulserOnly:t}=this.props;return e?t?this.renderPulsar():this.renderFlyout():null}}a={overflow:"breakWord"},(o="defaultProps")in(i=d)?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a;var p=n("NdXn"),h=n("AAEI"),m=n("gC5q");t.a=({anchor:e,anchorElementRef:t,children:n,containerBoxConfig:i,experience:o,isHidden:a,onCompleteClick:l,overflow:f,zIndex:g})=>{var b;const _=(({anchor:e,anchorExperiences:t,passedExperience:n})=>n||(t?t[e]:null))({anchor:e,anchorExperiences:Object(c.useSelector)(({experiences:e})=>null==e?void 0:e.anchorExperiences),passedExperience:o}),v=Object(h.a)(null==_?void 0:_.placement_id),y=(null==_||null===(b=_.display_data)||void 0===b?void 0:b.delay)||0,[C,E]=Object(r.useState)(!!y);if(Object(r.useEffect)(()=>{if(y>0&&C){const e=setTimeout(()=>{E(!1)});return()=>clearTimeout(e)}return()=>{}},[y,C]),Object(r.useEffect)(()=>{!C&&_&&v.viewExperience(_.placement_id,_.experience_id)},[C,_]),!_||C||a)return s.a.Children.only(n);const w=(e=>{const{display_data:t}=e;return t.tooltip&&(t.tooltip={...t.tooltip.options,...t.tooltip},delete t.tooltip.options),Object(m.a)(p.a,!0)(t)})(_);return s.a.createElement(u.e,{position:"relative",height:null==i?void 0:i.height,display:null==i?void 0:i.display},s.a.createElement(u.U,{onMouseEnter:()=>{var e;(null===(e=_.display_data)||void 0===e?void 0:e.complete_on_hover)&&v.completeExperience(_.placement_id,_.experience_id)},onTap:()=>{l&&l(),v.completeExperience(_.placement_id,_.experience_id)}},s.a.Children.only(n)),s.a.createElement(d,{anchor:t||null,handleComplete:()=>{t instanceof HTMLElement&&t.click()},handleDismiss:e=>{(null==e?void 0:e.event)&&e.event.stopPropagation(),v.dismissExperience(_.placement_id,_.experience_id)},overflow:f,pulserOnly:!!w.pulserOnly,tooltip:w.tooltip,tooltipOnly:!!w.tooltipOnly,zIndex:g}))}},rm3W:function(e,t,n){function i(e){return{type:"UPDATE_PIN_ACTIONS",payload:e}}function o(){return{type:"COMPLETE_APP_INSTALL"}}function a(){return{type:"COMPLETE_PIN_SAVE"}}n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}))},uyxo:function(e,t,n){n.d(t,"a",(function(){return s}));var i=n("q1tI"),o=n.n(i),a=n("jHGc"),r=n("n6mq");function s(e){const{children:t,currentCarouselIndex:n,onDeleteSavedState:i,onEditSubmit:s,onToggleModal:c,pinId:l,variant:u,viewParameter:d}=e,p="pin"===u?{bgColor:"white",iconColor:"darkGray",size:"sm"}:{bgColor:"transparent",iconColor:"darkGray",size:"sm"};return o.a.createElement(r.e,{display:"flex",direction:"row",alignItems:"center",width:"closeup"===u?"100%":void 0,paddingX:"closeup"===u?2:void 0,marginStart:"pin"===u?-1:void 0,marginEnd:"pin"===u?-1:void 0},t&&o.a.createElement(r.e,{paddingX:1,"data-test-id":"saved-info",flex:"grow"},t),o.a.createElement(r.e,{paddingX:1,flex:"none",marginStart:"auto"},o.a.createElement(a.default,{component:0,onDelete:i,onSubmit:s,pinId:l,onToggleModal:c,viewParameter:d,carouselSlotCurrentIndex:n,style:p,useLegoStyles:"pin"===u})))}},vzKb:function(e,t,n){t.a=(e,t,n)=>{if(window.PerformanceObserver)try{const i=new window.PerformanceObserver(t);i.observe(e),window.addEventListener("beforeunload",()=>{i.disconnect()}),n&&window.addEventListener("popstate",()=>{n()})}catch(i){}}},y2Ga:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r}));var i=n("1dBE");const{Consumer:o,Provider:a,useHook:r}=Object(i.b)("pwtSurfaceContext")},y9Ij:function(e,t,n){n.d(t,"a",(function(){return p}));var i=n("q1tI"),o=n.n(i),a=(n("PNKV"),n("TSYQ")),r=n.n(a),s=n("rVUJ"),c=n("Ye/N"),l=n("uyxo"),u=n("n6mq");const d=Object(i.memo)(Object(i.forwardRef)(({carouselData:e,disabled:t=!1,iconOnly:n,isCloseupPin:i,onBoardUpdated:a,onClick:s,onSavedClick:d,onToggleModal:p,onUnsaved:h,renderSavedStatus:m,saveButtonType:f="classic",saved:g,savedInfo:b,variant:_="classic",viewParameter:v},y)=>g&&"controlled"===f?o.a.createElement(u.f,{disabled:!0,text:c.a._("Saved"),size:"sm"}):!i&&b&&m&&h&&a&&"classic"===f?o.a.createElement(l.a,{currentCarouselIndex:e&&e.index,onDeleteSavedState:h,onEditSubmit:a,onToggleModal:p,pinId:b.localPinId,variant:"pin",viewParameter:v},m()):g&&"classic"===f&&i?o.a.createElement(u.f,{accessibilityLabel:c.a._("Saved button","saveButton.saved.label","Saved state label on save button"),text:c.a._("Saved!","saveButton.saved","Saved state text on save button"),size:"md",color:"white",onClick:d}):n?o.a.createElement("div",{ref:y,"data-test-id":"SaveButton"},o.a.createElement(u.u,{accessibilityLabel:c.a._("Save","Accessibility label for the save button","Accessibility label for the save button"),bgColor:"white",icon:"pin",onClick:({event:e})=>s(e),iconColor:"darkGray"})):o.a.createElement(u.e,{display:i?void 0:"flex",justifyContent:"end"},o.a.createElement("div",{ref:y,className:r()("SaveButton",t?"SaveButton--disabled":"SaveButton--enabled",{"SaveButton--lego":"lego"===_}),"data-test-id":"SaveButton",onClick:t?void 0:s,onKeyPress:t?void 0:e=>{32!==e.charCode&&13!==e.charCode||(e.preventDefault(),s(e))},role:"button",tabIndex:"0"},o.a.createElement("div",{className:r()("SaveButton__background",t?"SaveButton__background--disabled":"SaveButton__background--enabled",{"SaveButton__background--lego":"lego"===_})},o.a.createElement(u.e,{alignItems:"center",minHeight:40,dangerouslySetInlineStyle:{__style:{padding:"10px 14px"}},display:"flex"},o.a.createElement(u.V,{color:t?"gray":"white",size:"lego"===_?"sm":"md",weight:"bold"},o.a.createElement("span",{className:r()("SaveButton__label",{"SaveButton__label--lego":"lego"===_})},c.a._("Save","Pin save button label","Pin save button label"))))))))),p=({isPulsarDisplayed:e,...t})=>{const[n,a]=Object(i.useState)(null),r=Object(i.useCallback)(e=>{a(e)},[n]);return o.a.createElement(s.a,{anchor:".PinActionBar .repin.pinActionBarButton",anchorElementRef:n,isHidden:!e},o.a.createElement(d,Object.assign({ref:r},t)))};t.b=d}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/PinSaveButtonCommon-78cac1254bd8633702c0.mjs.map