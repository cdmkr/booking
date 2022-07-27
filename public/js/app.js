/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@easepick/bundle/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@easepick/bundle/dist/index.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmpPlugin": () => (/* binding */ d),
/* harmony export */   "DateTime": () => (/* binding */ t),
/* harmony export */   "KbdPlugin": () => (/* binding */ h),
/* harmony export */   "LockPlugin": () => (/* binding */ a),
/* harmony export */   "PresetPlugin": () => (/* binding */ r),
/* harmony export */   "RangePlugin": () => (/* binding */ c),
/* harmony export */   "TimePlugin": () => (/* binding */ l),
/* harmony export */   "create": () => (/* binding */ n),
/* harmony export */   "easepick": () => (/* binding */ s)
/* harmony export */ });
class t extends Date{static parseDateTime(e,i="YYYY-MM-DD",n="en-US"){if(!e)return new Date((new Date).setHours(0,0,0,0));if(e instanceof t)return e.toJSDate();if(e instanceof Date)return e;if(/^-?\d{10,}$/.test(String(e)))return new Date(Number(e));if("string"==typeof e){const s=[];let o=null;for(;null!=(o=t.regex.exec(i));)"\\"!==o[1]&&s.push(o);if(s.length){const i={year:null,month:null,shortMonth:null,longMonth:null,day:null,hour:0,minute:0,second:0,ampm:null,value:""};s[0].index>0&&(i.value+=".*?");for(const[e,o]of Object.entries(s)){const s=Number(e),{group:a,pattern:r}=t.formatPatterns(o[0],n);i[a]=s+1,i.value+=r,i.value+=".*?"}const o=new RegExp(`^${i.value}$`);if(o.test(e)){const s=o.exec(e),a=Number(s[i.year]);let r=null;i.month?r=Number(s[i.month])-1:i.shortMonth?r=t.shortMonths(n).indexOf(s[i.shortMonth]):i.longMonth&&(r=t.longMonths(n).indexOf(s[i.longMonth]));const c=Number(s[i.day])||1,l=Number(s[i.hour]);let h=Number.isNaN(l)?0:l;const d=Number(s[i.minute]),p=Number.isNaN(d)?0:d,u=Number(s[i.second]),g=Number.isNaN(u)?0:u,m=s[i.ampm];return m&&"PM"===m&&(h+=12,24===h&&(h=0)),new Date(a,r,c,h,p,g,0)}}}return new Date((new Date).setHours(0,0,0,0))}static regex=/(\\)?(Y{2,4}|M{1,4}|D{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|A|a)/g;static MONTH_JS=[0,1,2,3,4,5,6,7,8,9,10,11];static shortMonths(e){return t.MONTH_JS.map((t=>new Date(2019,t).toLocaleString(e,{month:"short"})))}static longMonths(e){return t.MONTH_JS.map((t=>new Date(2019,t).toLocaleString(e,{month:"long"})))}static formatPatterns(e,i){switch(e){case"YY":case"YYYY":return{group:"year",pattern:`(\\d{${e.length}})`};case"M":return{group:"month",pattern:"(\\d{1,2})"};case"MM":return{group:"month",pattern:"(\\d{2})"};case"MMM":return{group:"shortMonth",pattern:`(${t.shortMonths(i).join("|")})`};case"MMMM":return{group:"longMonth",pattern:`(${t.longMonths(i).join("|")})`};case"D":return{group:"day",pattern:"(\\d{1,2})"};case"DD":return{group:"day",pattern:"(\\d{2})"};case"h":case"H":return{group:"hour",pattern:"(\\d{1,2})"};case"hh":case"HH":return{group:"hour",pattern:"(\\d{2})"};case"m":return{group:"minute",pattern:"(\\d{1,2})"};case"mm":return{group:"minute",pattern:"(\\d{2})"};case"s":return{group:"second",pattern:"(\\d{1,2})"};case"ss":return{group:"second",pattern:"(\\d{2})"};case"a":case"A":return{group:"ampm",pattern:"(AM|PM|am|pm)"}}}lang;constructor(e=null,i="YYYY-MM-DD",n="en-US"){super(t.parseDateTime(e,i,n)),this.lang=n}getWeek(t){const e=new Date(this.midnight_ts(this)),i=(this.getDay()+(7-t))%7;e.setDate(e.getDate()-i);const n=e.getTime();return e.setMonth(0,1),e.getDay()!==t&&e.setMonth(0,1+(4-e.getDay()+7)%7),1+Math.ceil((n-e.getTime())/6048e5)}clone(){return new t(this)}toJSDate(){return new Date(this)}inArray(t,e="[]"){return t.some((t=>t instanceof Array?this.isBetween(t[0],t[1],e):this.isSame(t,"day")))}isBetween(t,e,i="()"){switch(i){default:case"()":return this.midnight_ts(this)>this.midnight_ts(t)&&this.midnight_ts(this)<this.midnight_ts(e);case"[)":return this.midnight_ts(this)>=this.midnight_ts(t)&&this.midnight_ts(this)<this.midnight_ts(e);case"(]":return this.midnight_ts(this)>this.midnight_ts(t)&&this.midnight_ts(this)<=this.midnight_ts(e);case"[]":return this.midnight_ts()>=this.midnight_ts(t)&&this.midnight_ts()<=this.midnight_ts(e)}}isBefore(t,e="days"){switch(e){case"day":case"days":return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()>new Date(this.getFullYear(),this.getMonth(),this.getDate()).getTime();case"month":case"months":return new Date(t.getFullYear(),t.getMonth(),1).getTime()>new Date(this.getFullYear(),this.getMonth(),1).getTime();case"year":case"years":return t.getFullYear()>this.getFullYear()}throw new Error("isBefore: Invalid unit!")}isSameOrBefore(t,e="days"){switch(e){case"day":case"days":return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()>=new Date(this.getFullYear(),this.getMonth(),this.getDate()).getTime();case"month":case"months":return new Date(t.getFullYear(),t.getMonth(),1).getTime()>=new Date(this.getFullYear(),this.getMonth(),1).getTime()}throw new Error("isSameOrBefore: Invalid unit!")}isAfter(t,e="days"){switch(e){case"day":case"days":return new Date(this.getFullYear(),this.getMonth(),this.getDate()).getTime()>new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();case"month":case"months":return new Date(this.getFullYear(),this.getMonth(),1).getTime()>new Date(t.getFullYear(),t.getMonth(),1).getTime();case"year":case"years":return this.getFullYear()>t.getFullYear()}throw new Error("isAfter: Invalid unit!")}isSameOrAfter(t,e="days"){switch(e){case"day":case"days":return new Date(this.getFullYear(),this.getMonth(),this.getDate()).getTime()>=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();case"month":case"months":return new Date(this.getFullYear(),this.getMonth(),1).getTime()>=new Date(t.getFullYear(),t.getMonth(),1).getTime()}throw new Error("isSameOrAfter: Invalid unit!")}isSame(t,e="days"){switch(e){case"day":case"days":return new Date(this.getFullYear(),this.getMonth(),this.getDate()).getTime()===new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();case"month":case"months":return new Date(this.getFullYear(),this.getMonth(),1).getTime()===new Date(t.getFullYear(),t.getMonth(),1).getTime()}throw new Error("isSame: Invalid unit!")}add(t,e="days"){switch(e){case"day":case"days":this.setDate(this.getDate()+t);break;case"month":case"months":this.setMonth(this.getMonth()+t)}return this}subtract(t,e="days"){switch(e){case"day":case"days":this.setDate(this.getDate()-t);break;case"month":case"months":this.setMonth(this.getMonth()-t)}return this}diff(t,e="days"){switch(e){default:case"day":case"days":return Math.round((this.midnight_ts()-this.midnight_ts(t))/864e5);case"month":case"months":let e=12*(t.getFullYear()-this.getFullYear());return e-=t.getMonth(),e+=this.getMonth(),e}}format(e,i="en-US"){let n="";const s=[];let o=null;for(;null!=(o=t.regex.exec(e));)"\\"!==o[1]&&s.push(o);if(s.length){s[0].index>0&&(n+=e.substring(0,s[0].index));for(const[t,o]of Object.entries(s)){const a=Number(t);n+=this.formatTokens(o[0],i),s[a+1]&&(n+=e.substring(o.index+o[0].length,s[a+1].index)),a===s.length-1&&(n+=e.substring(o.index+o[0].length))}}return n.replace(/\\/g,"")}midnight_ts(t){return t?new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0).getTime():new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0,0).getTime()}formatTokens(e,i){switch(e){case"YY":return String(this.getFullYear()).slice(-2);case"YYYY":return String(this.getFullYear());case"M":return String(this.getMonth()+1);case"MM":return`0${this.getMonth()+1}`.slice(-2);case"MMM":return t.shortMonths(i)[this.getMonth()];case"MMMM":return t.longMonths(i)[this.getMonth()];case"D":return String(this.getDate());case"DD":return`0${this.getDate()}`.slice(-2);case"H":return String(this.getHours());case"HH":return`0${this.getHours()}`.slice(-2);case"h":return String(this.getHours()%12||12);case"hh":return`0${this.getHours()%12||12}`.slice(-2);case"m":return String(this.getMinutes());case"mm":return`0${this.getMinutes()}`.slice(-2);case"s":return String(this.getSeconds());case"ss":return`0${this.getSeconds()}`.slice(-2);case"a":return this.getHours()<12||24===this.getHours()?"am":"pm";case"A":return this.getHours()<12||24===this.getHours()?"AM":"PM";default:return""}}}class e{picker;constructor(t){this.picker=t}render(e,i){e||(e=new t),e.setDate(1),e.setHours(0,0,0,0),"function"==typeof this[`get${i}View`]&&this[`get${i}View`](e)}getContainerView(t){this.picker.ui.container.innerHTML="",this.picker.options.header&&this.picker.trigger("render",{date:t.clone(),view:"Header"}),this.picker.trigger("render",{date:t.clone(),view:"Main"}),this.picker.options.autoApply||this.picker.trigger("render",{date:t.clone(),view:"Footer"})}getHeaderView(t){const e=document.createElement("header");this.picker.options.header instanceof HTMLElement&&e.appendChild(this.picker.options.header),"string"==typeof this.picker.options.header&&(e.innerHTML=this.picker.options.header),this.picker.ui.container.appendChild(e),this.picker.trigger("view",{target:e,date:t.clone(),view:"Header"})}getMainView(t){const e=document.createElement("main");this.picker.ui.container.appendChild(e);const i=document.createElement("div");i.className=`calendars grid-${this.picker.options.grid}`;for(let e=0;e<this.picker.options.calendars;e++){const n=document.createElement("div");n.className="calendar",i.appendChild(n);const s=this.getCalendarHeaderView(t.clone());n.appendChild(s),this.picker.trigger("view",{date:t.clone(),view:"CalendarHeader",index:e,target:s});const o=this.getCalendarDayNamesView();n.appendChild(o),this.picker.trigger("view",{date:t.clone(),view:"CalendarDayNames",index:e,target:o});const a=this.getCalendarDaysView(t.clone());n.appendChild(a),this.picker.trigger("view",{date:t.clone(),view:"CalendarDays",index:e,target:a});const r=this.getCalendarFooterView(this.picker.options.lang,t.clone());n.appendChild(r),this.picker.trigger("view",{date:t.clone(),view:"CalendarFooter",index:e,target:r}),this.picker.trigger("view",{date:t.clone(),view:"CalendarItem",index:e,target:n}),t.add(1,"month")}e.appendChild(i),this.picker.trigger("view",{date:t.clone(),view:"Calendars",target:i}),this.picker.trigger("view",{date:t.clone(),view:"Main",target:e})}getFooterView(t){const e=document.createElement("footer"),i=document.createElement("div");i.className="footer-buttons";const n=document.createElement("button");n.className="cancel-button unit",n.innerHTML=this.picker.options.locale.cancel,i.appendChild(n);const s=document.createElement("button");s.className="apply-button unit",s.innerHTML=this.picker.options.locale.apply,s.disabled=!0,i.appendChild(s),e.appendChild(i),this.picker.ui.container.appendChild(e),this.picker.trigger("view",{date:t,target:e,view:"Footer"})}getCalendarHeaderView(t){const e=document.createElement("div");e.className="header";const i=document.createElement("div");i.className="month-name",i.innerHTML=`<span>${t.toLocaleString(this.picker.options.lang,{month:"long"})}</span> ${t.format("YYYY")}`,e.appendChild(i);const n=document.createElement("button");n.className="previous-button unit",n.innerHTML=this.picker.options.locale.previousMonth,e.appendChild(n);const s=document.createElement("button");return s.className="next-button unit",s.innerHTML=this.picker.options.locale.nextMonth,e.appendChild(s),e}getCalendarDayNamesView(){const t=document.createElement("div");t.className="daynames-row";for(let e=1;e<=7;e++){const i=3+this.picker.options.firstDay+e,n=document.createElement("div");n.className="dayname",n.innerHTML=new Date(1970,0,i,12,0,0,0).toLocaleString(this.picker.options.lang,{weekday:"short"}),n.title=new Date(1970,0,i,12,0,0,0).toLocaleString(this.picker.options.lang,{weekday:"long"}),t.appendChild(n),this.picker.trigger("view",{dayIdx:i,view:"CalendarDayName",target:n})}return t}getCalendarDaysView(t){const e=document.createElement("div");e.className="days-grid";const i=this.calcOffsetDays(t,this.picker.options.firstDay),n=32-new Date(t.getFullYear(),t.getMonth(),32).getDate();for(let t=0;t<i;t++){const t=document.createElement("div");t.className="offset",e.appendChild(t)}for(let i=1;i<=n;i++){t.setDate(i);const n=this.getCalendarDayView(t);e.appendChild(n),this.picker.trigger("view",{date:t,view:"CalendarDay",target:n})}return e}getCalendarDayView(e){const i=this.picker.options.date?new t(this.picker.options.date):null,n=new t,s=document.createElement("div");return s.className="day unit",s.innerHTML=e.format("D"),s.dataset.time=String(e.getTime()),e.isSame(n,"day")&&s.classList.add("today"),[0,6].includes(e.getDay())&&s.classList.add("weekend"),this.picker.datePicked.length?this.picker.datePicked[0].isSame(e,"day")&&s.classList.add("selected"):i&&e.isSame(i,"day")&&s.classList.add("selected"),this.picker.trigger("view",{date:e,view:"CalendarDay",target:s}),s}getCalendarFooterView(t,e){const i=document.createElement("div");return i.className="footer",i}calcOffsetDays(t,e){let i=t.getDay()-e;return i<0&&(i+=7),i}}class i{picker;instances={};constructor(t){this.picker=t}initialize(){const t=[];this.picker.options.plugins.forEach((e=>{"function"==typeof e?t.push(new e):"string"==typeof e&&"undefined"!=typeof easepick&&Object.prototype.hasOwnProperty.call(easepick,e)?t.push(new easepick[e]):console.warn(`easepick: ${e} not found.`)})),t.sort(((t,e)=>t.priority>e.priority?-1:t.priority<e.priority||t.dependencies.length>e.dependencies.length?1:t.dependencies.length<e.dependencies.length?-1:0)),t.forEach((t=>{t.attach(this.picker),this.instances[t.getName()]=t}))}getInstance(t){return this.instances[t]}addInstance(t){if(Object.prototype.hasOwnProperty.call(this.instances,t))console.warn(`easepick: ${t} already added.`);else{if("undefined"!=typeof easepick&&Object.prototype.hasOwnProperty.call(easepick,t)){const e=new easepick[t];return e.attach(this.picker),this.instances[e.getName()]=e,e}if("undefined"!==this.getPluginFn(t)){const e=new(this.getPluginFn(t));return e.attach(this.picker),this.instances[e.getName()]=e,e}console.warn(`easepick: ${t} not found.`)}return null}removeInstance(t){return t in this.instances&&this.instances[t].detach(),delete this.instances[t]}reloadInstance(t){return this.removeInstance(t),this.addInstance(t)}getPluginFn(t){return[...this.picker.options.plugins].filter((e=>"function"==typeof e&&(new e).getName()===t)).shift()}}class n{Calendar=new e(this);PluginManager=new i(this);calendars=[];datePicked=[];cssLoaded=0;binds={hidePicker:this.hidePicker.bind(this),show:this.show.bind(this)};options={doc:document,css:[],element:null,firstDay:1,grid:1,calendars:1,lang:"en-US",date:null,format:"YYYY-MM-DD",readonly:!0,autoApply:!0,header:!1,inline:!1,scrollToDate:!0,locale:{nextMonth:'<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',previousMonth:'<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',cancel:"Cancel",apply:"Apply"},documentClick:this.binds.hidePicker,plugins:[]};ui={container:null,shadowRoot:null,wrapper:null};version="1.2.0";constructor(t){const e={...this.options.locale,...t.locale};this.options={...this.options,...t},this.options.locale=e,this.handleOptions(),this.ui.wrapper=document.createElement("span"),this.ui.wrapper.style.display="none",this.ui.wrapper.style.position="absolute",this.ui.wrapper.style.pointerEvents="none",this.ui.wrapper.className="easepick-wrapper",this.ui.wrapper.attachShadow({mode:"open"}),this.ui.shadowRoot=this.ui.wrapper.shadowRoot,this.ui.container=document.createElement("div"),this.ui.container.className="container",this.options.zIndex&&(this.ui.container.style.zIndex=String(this.options.zIndex)),this.options.inline&&(this.ui.wrapper.style.position="relative",this.ui.container.classList.add("inline")),this.ui.shadowRoot.appendChild(this.ui.container),this.options.element.after(this.ui.wrapper),this.handleCSS(),this.options.element.addEventListener("click",this.binds.show),this.on("view",this.onView.bind(this)),this.on("render",this.onRender.bind(this)),this.PluginManager.initialize(),this.parseValues(),"function"==typeof this.options.setup&&this.options.setup(this),this.on("click",this.onClick.bind(this));const i=this.options.scrollToDate?this.getDate():null;this.renderAll(i)}on(t,e,i={}){this.ui.container.addEventListener(t,e,i)}off(t,e,i={}){this.ui.container.removeEventListener(t,e,i)}trigger(t,e={}){return this.ui.container.dispatchEvent(new CustomEvent(t,{detail:e}))}destroy(){this.options.element.removeEventListener("click",this.binds.show),"function"==typeof this.options.documentClick&&document.removeEventListener("click",this.options.documentClick,!0),Object.keys(this.PluginManager.instances).forEach((t=>{this.PluginManager.removeInstance(t)})),this.ui.wrapper.remove()}onRender(t){const{view:e,date:i}=t.detail;this.Calendar.render(i,e)}onView(t){const{view:e,target:i}=t.detail;"Footer"===e&&this.datePicked.length&&(i.querySelector(".apply-button").disabled=!1)}onClickHeaderButton(t){this.isCalendarHeaderButton(t)&&(t.classList.contains("next-button")?this.calendars[0].add(1,"month"):this.calendars[0].subtract(1,"month"),this.renderAll(this.calendars[0]))}onClickCalendarDay(e){if(this.isCalendarDay(e)){const i=new t(e.dataset.time);this.options.autoApply?(this.setDate(i),this.trigger("select",{date:this.getDate()}),this.hide()):(this.datePicked[0]=i,this.trigger("preselect",{date:this.getDate()}),this.renderAll())}}onClickApplyButton(t){if(this.isApplyButton(t)){if(this.datePicked[0]instanceof Date){const t=this.datePicked[0].clone();this.setDate(t)}this.hide(),this.trigger("select",{date:this.getDate()})}}onClickCancelButton(t){this.isCancelButton(t)&&this.hide()}onClick(t){const e=t.target;if(e instanceof HTMLElement){const t=e.closest(".unit");if(!(t instanceof HTMLElement))return;this.onClickHeaderButton(t),this.onClickCalendarDay(t),this.onClickApplyButton(t),this.onClickCancelButton(t)}}isShown(){return this.ui.container.classList.contains("inline")||this.ui.container.classList.contains("show")}show(t){if(this.isShown())return;const e=t&&"target"in t?t.target:this.options.element,{top:i,left:n}=this.adjustPosition(e);this.ui.container.style.top=`${i}px`,this.ui.container.style.left=`${n}px`,this.ui.container.classList.add("show"),this.trigger("show",{target:e})}hide(){this.ui.container.classList.remove("show"),this.datePicked.length=0,this.renderAll(),this.trigger("hide")}setDate(e){const i=new t(e,this.options.format);this.options.date=i.clone(),this.updateValues(),this.calendars.length&&this.renderAll()}getDate(){return this.options.date instanceof t?this.options.date.clone():null}parseValues(){this.options.date?this.setDate(this.options.date):this.options.element instanceof HTMLInputElement&&this.options.element.value.length&&this.setDate(this.options.element.value),this.options.date instanceof Date||(this.options.date=null)}updateValues(){const t=this.getDate(),e=t instanceof Date?t.format(this.options.format,this.options.lang):"",i=this.options.element;i instanceof HTMLInputElement?i.value=e:i instanceof HTMLElement&&(i.innerText=e)}hidePicker(t){let e=t.target,i=null;e.shadowRoot&&(e=t.composedPath()[0],i=e.getRootNode().host),this.isShown()&&i!==this.ui.wrapper&&e!==this.options.element&&this.hide()}renderAll(t){this.trigger("render",{view:"Container",date:(t||this.calendars[0]).clone()})}isCalendarHeaderButton(t){return["previous-button","next-button"].some((e=>t.classList.contains(e)))}isCalendarDay(t){return t.classList.contains("day")}isApplyButton(t){return t.classList.contains("apply-button")}isCancelButton(t){return t.classList.contains("cancel-button")}gotoDate(e){const i=new t(e,this.options.format);i.setDate(1),this.calendars[0]=i.clone(),this.renderAll()}clear(){this.options.date=null,this.datePicked.length=0,this.updateValues(),this.renderAll(),this.trigger("clear")}handleOptions(){this.options.element instanceof HTMLElement||(this.options.element=this.options.doc.querySelector(this.options.element)),"function"==typeof this.options.documentClick&&document.addEventListener("click",this.options.documentClick,!0),this.options.element instanceof HTMLInputElement&&(this.options.element.readOnly=this.options.readonly),this.options.date?this.calendars[0]=new t(this.options.date,this.options.format):this.calendars[0]=new t}handleCSS(){if(Array.isArray(this.options.css))this.options.css.forEach((t=>{const e=document.createElement("link");e.href=t,e.rel="stylesheet";const i=()=>{this.cssLoaded++,this.cssLoaded===this.options.css.length&&(this.ui.wrapper.style.display="")};e.addEventListener("load",i),e.addEventListener("error",i),this.ui.shadowRoot.append(e)}));else if("string"==typeof this.options.css){const t=document.createElement("style"),e=document.createTextNode(this.options.css);t.appendChild(e),this.ui.shadowRoot.append(t),this.ui.wrapper.style.display=""}else"function"==typeof this.options.css&&(this.options.css.call(this,this),this.ui.wrapper.style.display="")}adjustPosition(t){const e=t.getBoundingClientRect(),i=this.ui.wrapper.getBoundingClientRect();this.ui.container.classList.add("calc");const n=this.ui.container.getBoundingClientRect();this.ui.container.classList.remove("calc");let s=e.bottom-i.bottom,o=e.left-i.left;return"undefined"!=typeof window&&(window.innerHeight<s+n.height&&s-n.height>=0&&(s=e.top-i.top-n.height),window.innerWidth<o+n.width&&e.right-n.width>=0&&(o=e.right-i.right-n.width)),{left:o,top:s}}}var s=Object.freeze({__proto__:null,Core:n,create:n});class o{picker;options;priority=0;dependencies=[];attach(t){const e=this.getName(),i={...this.options};this.options={...this.options,...t.options[e]||{}};for(const n of Object.keys(i))if(null!==i[n]&&"object"==typeof i[n]&&Object.keys(i[n]).length&&e in t.options&&n in t.options[e]){const s={...t.options[e][n]};null!==s&&"object"==typeof s&&Object.keys(s).length&&Object.keys(s).every((t=>Object.keys(i[n]).includes(t)))&&(this.options[n]={...i[n],...s})}if(this.picker=t,this.dependenciesNotFound()){const t=this.dependencies.filter((t=>!this.pluginsAsStringArray().includes(t)));return void console.warn(`${this.getName()}: required dependencies (${t.join(", ")}).`)}const n=this.camelCaseToKebab(this.getName());this.picker.ui.container.classList.add(n),this.onAttach()}detach(){const t=this.camelCaseToKebab(this.getName());this.picker.ui.container.classList.remove(t),"function"==typeof this.onDetach&&this.onDetach()}dependenciesNotFound(){return this.dependencies.length&&!this.dependencies.every((t=>this.pluginsAsStringArray().includes(t)))}pluginsAsStringArray(){return this.picker.options.plugins.map((t=>"function"==typeof t?(new t).getName():t))}camelCaseToKebab(t){return t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()}}class a extends o{priority=1;binds={onView:this.onView.bind(this)};options={minDate:null,maxDate:null,minDays:null,maxDays:null,selectForward:null,selectBackward:null,presets:!0,inseparable:!1,filter:null};getName(){return"LockPlugin"}onAttach(){if(this.options.minDate&&(this.options.minDate=new t(this.options.minDate,this.picker.options.format,this.picker.options.lang)),this.options.maxDate&&(this.options.maxDate=new t(this.options.maxDate,this.picker.options.format,this.picker.options.lang),this.options.maxDate instanceof t&&this.picker.options.calendars>1&&this.picker.calendars[0].isSame(this.options.maxDate,"month"))){const t=this.picker.calendars[0].clone().subtract(1,"month");this.picker.gotoDate(t)}if((this.options.minDays||this.options.maxDays||this.options.selectForward||this.options.selectBackward)&&!this.picker.options.plugins.includes("RangePlugin")){const t=["minDays","maxDays","selectForward","selectBackward"];console.warn(`${this.getName()}: options ${t.join(", ")} required RangePlugin.`)}this.picker.on("view",this.binds.onView)}onDetach(){this.picker.off("view",this.binds.onView)}onView(e){const{view:i,target:n,date:s}=e.detail;if("CalendarHeader"===i&&(this.options.minDate instanceof t&&s.isSameOrBefore(this.options.minDate,"month")&&n.classList.add("no-previous-month"),this.options.maxDate instanceof t&&s.isSameOrAfter(this.options.maxDate,"month")&&n.classList.add("no-next-month")),"CalendarDay"===i){const t=this.picker.datePicked.length?this.picker.datePicked[0]:null;if(this.testFilter(s))return void n.classList.add("locked");if(this.options.inseparable){if(this.options.minDays){const t=s.clone().subtract(this.options.minDays-1,"day"),e=s.clone().add(this.options.minDays-1,"day");let i=!1,o=!1;for(;t.isBefore(s,"day");){if(this.testFilter(t)){i=!0;break}t.add(1,"day")}for(;e.isAfter(s,"day");){if(this.testFilter(e)){o=!0;break}e.subtract(1,"day")}i&&o&&n.classList.add("not-available")}this.rangeIsNotAvailable(s,t)&&n.classList.add("not-available")}this.dateIsNotAvailable(s,t)&&n.classList.add("not-available")}if(this.options.presets&&"PresetPluginButton"===i){const e=new t(Number(n.dataset.start)),i=new t(Number(n.dataset.end)),s=i.diff(e,"day"),o=this.options.minDays&&s<this.options.minDays,a=this.options.maxDays&&s>this.options.maxDays;(o||a||this.lockMinDate(e)||this.lockMaxDate(e)||this.lockMinDate(i)||this.lockMaxDate(i)||this.rangeIsNotAvailable(e,i))&&n.setAttribute("disabled","disabled")}}dateIsNotAvailable(t,e){return this.lockMinDate(t)||this.lockMaxDate(t)||this.lockMinDays(t,e)||this.lockMaxDays(t,e)||this.lockSelectForward(t)||this.lockSelectBackward(t)}rangeIsNotAvailable(t,e){if(!t||!e)return!1;const i=(t.isSameOrBefore(e,"day")?t:e).clone(),n=(e.isSameOrAfter(t,"day")?e:t).clone();for(;i.isSameOrBefore(n,"day");){if(this.testFilter(i))return!0;i.add(1,"day")}return!1}lockMinDate(e){return this.options.minDate instanceof t&&e.isBefore(this.options.minDate,"day")}lockMaxDate(e){return this.options.maxDate instanceof t&&e.isAfter(this.options.maxDate,"day")}lockMinDays(t,e){if(this.options.minDays&&e){const i=e.clone().subtract(this.options.minDays-1,"day"),n=e.clone().add(this.options.minDays-1,"day");return t.isBetween(i,n)}return!1}lockMaxDays(t,e){if(this.options.maxDays&&e){const i=e.clone().subtract(this.options.maxDays,"day"),n=e.clone().add(this.options.maxDays,"day");return!t.isBetween(i,n)}return!1}lockSelectForward(t){if(1===this.picker.datePicked.length&&this.options.selectForward){const e=this.picker.datePicked[0].clone();return t.isBefore(e,"day")}return!1}lockSelectBackward(t){if(1===this.picker.datePicked.length&&this.options.selectBackward){const e=this.picker.datePicked[0].clone();return t.isAfter(e,"day")}return!1}testFilter(t){return"function"==typeof this.options.filter&&this.options.filter(t,this.picker.datePicked)}}class r extends o{dependencies=["RangePlugin"];binds={onView:this.onView.bind(this),onClick:this.onClick.bind(this)};options={customLabels:["Today","Yesterday","Last 7 Days","Last 30 Days","This Month","Last Month"],customPreset:{},position:"left"};getName(){return"PresetPlugin"}onAttach(){if(!Object.keys(this.options.customPreset).length){const e=new t,i=()=>{const i=e.clone();i.setDate(1);const n=new Date(e.getFullYear(),e.getMonth()+1,0);return[new t(i),new t(n)]},n=()=>{const i=e.clone();i.setMonth(i.getMonth()-1),i.setDate(1);const n=new Date(e.getFullYear(),e.getMonth(),0);return[new t(i),new t(n)]},s=[[e.clone(),e.clone()],[e.clone().subtract(1,"day"),e.clone().subtract(1,"day")],[e.clone().subtract(6,"day"),e.clone()],[e.clone().subtract(29,"day"),e.clone()],i(),n()];Object.values(this.options.customLabels).forEach(((t,e)=>{this.options.customPreset[t]=s[e]}))}this.picker.on("view",this.binds.onView),this.picker.on("click",this.binds.onClick)}onDetach(){this.picker.off("view",this.binds.onView),this.picker.off("click",this.binds.onClick)}onView(t){const{view:e,target:i}=t.detail;if("Main"===e){const t=document.createElement("div");t.className="preset-plugin-container",Object.keys(this.options.customPreset).forEach((e=>{if(Object.prototype.hasOwnProperty.call(this.options.customPreset,e)){const i=this.options.customPreset[e],n=document.createElement("button");n.className="preset-button unit",n.innerHTML=e,n.dataset.start=i[0].getTime(),n.dataset.end=i[1].getTime(),t.appendChild(n),this.picker.trigger("view",{view:"PresetPluginButton",target:n})}})),i.appendChild(t),i.classList.add(`preset-${this.options.position}`),this.picker.trigger("view",{view:"PresetPluginContainer",target:t})}}onClick(e){const i=e.target;if(i instanceof HTMLElement){const e=i.closest(".unit");if(!(e instanceof HTMLElement))return;if(this.isPresetButton(e)){const i=new t(Number(e.dataset.start)),n=new t(Number(e.dataset.end));this.picker.options.autoApply?(this.picker.setDateRange(i,n),this.picker.trigger("select",{start:this.picker.getStartDate(),end:this.picker.getEndDate()}),this.picker.hide()):(this.picker.datePicked=[i,n],this.picker.renderAll())}}}isPresetButton(t){return t.classList.contains("preset-button")}}class c extends o{tooltipElement;triggerElement;binds={setStartDate:this.setStartDate.bind(this),setEndDate:this.setEndDate.bind(this),setDateRange:this.setDateRange.bind(this),getStartDate:this.getStartDate.bind(this),getEndDate:this.getEndDate.bind(this),onView:this.onView.bind(this),onShow:this.onShow.bind(this),onMouseEnter:this.onMouseEnter.bind(this),onMouseLeave:this.onMouseLeave.bind(this),onClickCalendarDay:this.onClickCalendarDay.bind(this),onClickApplyButton:this.onClickApplyButton.bind(this),parseValues:this.parseValues.bind(this),updateValues:this.updateValues.bind(this),clear:this.clear.bind(this)};options={elementEnd:null,startDate:null,endDate:null,repick:!1,strict:!0,delimiter:" - ",tooltip:!0,tooltipNumber:t=>t,locale:{zero:"",one:"day",two:"",few:"",many:"",other:"days"},documentClick:this.hidePicker.bind(this)};getName(){return"RangePlugin"}onAttach(){this.binds._setStartDate=this.picker.setStartDate,this.binds._setEndDate=this.picker.setEndDate,this.binds._setDateRange=this.picker.setDateRange,this.binds._getStartDate=this.picker.getStartDate,this.binds._getEndDate=this.picker.getEndDate,this.binds._parseValues=this.picker.parseValues,this.binds._updateValues=this.picker.updateValues,this.binds._clear=this.picker.clear,this.binds._onClickCalendarDay=this.picker.onClickCalendarDay,this.binds._onClickApplyButton=this.picker.onClickApplyButton,Object.defineProperties(this.picker,{setStartDate:{configurable:!0,value:this.binds.setStartDate},setEndDate:{configurable:!0,value:this.binds.setEndDate},setDateRange:{configurable:!0,value:this.binds.setDateRange},getStartDate:{configurable:!0,value:this.binds.getStartDate},getEndDate:{configurable:!0,value:this.binds.getEndDate},parseValues:{configurable:!0,value:this.binds.parseValues},updateValues:{configurable:!0,value:this.binds.updateValues},clear:{configurable:!0,value:this.binds.clear},onClickCalendarDay:{configurable:!0,value:this.binds.onClickCalendarDay},onClickApplyButton:{configurable:!0,value:this.binds.onClickApplyButton}}),this.options.elementEnd&&(this.options.elementEnd instanceof HTMLElement||(this.options.elementEnd=this.picker.options.doc.querySelector(this.options.elementEnd)),this.options.elementEnd instanceof HTMLInputElement&&(this.options.elementEnd.readOnly=this.picker.options.readonly),"function"==typeof this.picker.options.documentClick&&(document.removeEventListener("click",this.picker.options.documentClick,!0),"function"==typeof this.options.documentClick&&document.addEventListener("click",this.options.documentClick,!0)),this.options.elementEnd.addEventListener("click",this.picker.show.bind(this.picker))),this.options.repick=this.options.repick&&this.options.elementEnd instanceof HTMLElement,this.picker.options.date=null,this.picker.on("view",this.binds.onView),this.picker.on("show",this.binds.onShow),this.picker.on("mouseenter",this.binds.onMouseEnter,!0),this.picker.on("mouseleave",this.binds.onMouseLeave,!0),this.checkIntlPluralLocales()}onDetach(){Object.defineProperties(this.picker,{setStartDate:{configurable:!0,value:this.binds._setStartDate},setEndDate:{configurable:!0,value:this.binds._setEndDate},setDateRange:{configurable:!0,value:this.binds._setDateRange},getStartDate:{configurable:!0,value:this.binds._getStartDate},getEndDate:{configurable:!0,value:this.binds._getEndDate},parseValues:{configurable:!0,value:this.binds._parseValues},updateValues:{configurable:!0,value:this.binds._updateValues},clear:{configurable:!0,value:this.binds._clear},onClickCalendarDay:{configurable:!0,value:this.binds._onClickCalendarDay},onClickApplyButton:{configurable:!0,value:this.binds._onClickApplyButton}}),this.picker.off("view",this.binds.onView),this.picker.off("show",this.binds.onShow),this.picker.off("mouseenter",this.binds.onMouseEnter,!0),this.picker.off("mouseleave",this.binds.onMouseLeave,!0)}parseValues(){if(this.options.startDate||this.options.endDate)this.options.strict?this.options.startDate&&this.options.endDate?this.setDateRange(this.options.startDate,this.options.endDate):(this.options.startDate=null,this.options.endDate=null):(this.options.startDate&&this.setStartDate(this.options.startDate),this.options.endDate&&this.setEndDate(this.options.endDate));else if(this.options.elementEnd)this.options.strict?this.picker.options.element instanceof HTMLInputElement&&this.picker.options.element.value.length&&this.options.elementEnd instanceof HTMLInputElement&&this.options.elementEnd.value.length&&this.setDateRange(this.picker.options.element.value,this.options.elementEnd.value):(this.picker.options.element instanceof HTMLInputElement&&this.picker.options.element.value.length&&this.setStartDate(this.picker.options.element.value),this.options.elementEnd instanceof HTMLInputElement&&this.options.elementEnd.value.length&&this.setEndDate(this.options.elementEnd.value));else if(this.picker.options.element instanceof HTMLInputElement&&this.picker.options.element.value.length){const[t,e]=this.picker.options.element.value.split(this.options.delimiter);this.options.strict?t&&e&&this.setDateRange(t,e):(t&&this.setStartDate(t),e&&this.setEndDate(e))}}updateValues(){const t=this.picker.options.element,e=this.options.elementEnd,i=this.picker.getStartDate(),n=this.picker.getEndDate(),s=i instanceof Date?i.format(this.picker.options.format,this.picker.options.lang):"",o=n instanceof Date?n.format(this.picker.options.format,this.picker.options.lang):"";if(e)t instanceof HTMLInputElement?t.value=s:t instanceof HTMLElement&&(t.innerText=s),e instanceof HTMLInputElement?e.value=o:e instanceof HTMLElement&&(e.innerText=o);else{const e=`${s}${s||o?this.options.delimiter:""}${o}`;t instanceof HTMLInputElement?t.value=e:t instanceof HTMLElement&&(t.innerText=e)}}clear(){this.options.startDate=null,this.options.endDate=null,this.picker.datePicked.length=0,this.updateValues(),this.picker.renderAll(),this.picker.trigger("clear")}onShow(t){const{target:e}=t.detail;this.triggerElement=e,this.picker.options.scrollToDate&&this.getStartDate()instanceof Date&&this.picker.gotoDate(this.getStartDate()),this.initializeRepick()}onView(e){const{view:i,target:n}=e.detail;if("Main"===i&&(this.tooltipElement=document.createElement("span"),this.tooltipElement.className="range-plugin-tooltip",n.appendChild(this.tooltipElement)),"CalendarDay"===i){const e=new t(n.dataset.time),i=this.picker.datePicked,s=i.length?this.picker.datePicked[0]:this.getStartDate(),o=i.length?this.picker.datePicked[1]:this.getEndDate();s&&s.isSame(e,"day")&&n.classList.add("start"),s&&o&&(o.isSame(e,"day")&&n.classList.add("end"),e.isBetween(s,o)&&n.classList.add("in-range"))}if("Footer"===i){const t=1===this.picker.datePicked.length&&!this.options.strict||2===this.picker.datePicked.length;n.querySelector(".apply-button").disabled=!t}}hidePicker(t){let e=t.target,i=null;e.shadowRoot&&(e=t.composedPath()[0],i=e.getRootNode().host),this.picker.isShown()&&i!==this.picker.ui.wrapper&&e!==this.picker.options.element&&e!==this.options.elementEnd&&this.picker.hide()}setStartDate(e){const i=new t(e,this.picker.options.format);this.options.startDate=i?i.clone():null,this.updateValues(),this.picker.renderAll()}setEndDate(e){const i=new t(e,this.picker.options.format);this.options.endDate=i?i.clone():null,this.updateValues(),this.picker.renderAll()}setDateRange(e,i){const n=new t(e,this.picker.options.format),s=new t(i,this.picker.options.format);this.options.startDate=n?n.clone():null,this.options.endDate=s?s.clone():null,this.updateValues(),this.picker.renderAll()}getStartDate(){return this.options.startDate instanceof Date?this.options.startDate.clone():null}getEndDate(){return this.options.endDate instanceof Date?this.options.endDate.clone():null}onMouseEnter(e){const i=e.target;if(i instanceof HTMLElement){this.isContainer(i)&&this.initializeRepick();const e=i.closest(".unit");if(!(e instanceof HTMLElement))return;if(this.picker.isCalendarDay(e)){if(1!==this.picker.datePicked.length)return;let i=this.picker.datePicked[0].clone(),n=new t(e.dataset.time),s=!1;if(i.isAfter(n,"day")){const t=i.clone();i=n.clone(),n=t.clone(),s=!0}if([...this.picker.ui.container.querySelectorAll(".day")].forEach((o=>{const a=new t(o.dataset.time),r=this.picker.Calendar.getCalendarDayView(a);a.isBetween(i,n)&&r.classList.add("in-range"),a.isSame(this.picker.datePicked[0],"day")&&(r.classList.add("start"),r.classList.toggle("flipped",s)),o===e&&(r.classList.add("end"),r.classList.toggle("flipped",s)),o.className=r.className})),this.options.tooltip){const t=this.options.tooltipNumber(n.diff(i,"day")+1);if(t>0){const i=new Intl.PluralRules(this.picker.options.lang).select(t),n=`${t} ${this.options.locale[i]}`;this.showTooltip(e,n)}else this.hideTooltip()}}}}onMouseLeave(t){if(this.isContainer(t.target)&&this.options.repick){const t=this.getStartDate(),e=this.getEndDate();t&&e&&(this.picker.datePicked.length=0,this.picker.renderAll())}}onClickCalendarDay(e){if(this.picker.isCalendarDay(e)){2===this.picker.datePicked.length&&(this.picker.datePicked.length=0);const i=new t(e.dataset.time);if(this.picker.datePicked[this.picker.datePicked.length]=i,2===this.picker.datePicked.length&&this.picker.datePicked[0].isAfter(this.picker.datePicked[1])){const t=this.picker.datePicked[1].clone();this.picker.datePicked[1]=this.picker.datePicked[0].clone(),this.picker.datePicked[0]=t.clone()}1!==this.picker.datePicked.length&&this.picker.options.autoApply||this.picker.trigger("preselect",{start:this.picker.datePicked[0]instanceof Date?this.picker.datePicked[0].clone():null,end:this.picker.datePicked[1]instanceof Date?this.picker.datePicked[1].clone():null}),1===this.picker.datePicked.length&&(!this.options.strict&&this.picker.options.autoApply&&(this.picker.options.element===this.triggerElement&&this.setStartDate(this.picker.datePicked[0]),this.options.elementEnd===this.triggerElement&&this.setEndDate(this.picker.datePicked[0]),this.picker.trigger("select",{start:this.picker.getStartDate(),end:this.picker.getEndDate()})),this.picker.renderAll()),2===this.picker.datePicked.length&&(this.picker.options.autoApply?(this.setDateRange(this.picker.datePicked[0],this.picker.datePicked[1]),this.picker.trigger("select",{start:this.picker.getStartDate(),end:this.picker.getEndDate()}),this.picker.hide()):(this.hideTooltip(),this.picker.renderAll()))}}onClickApplyButton(t){this.picker.isApplyButton(t)&&(1!==this.picker.datePicked.length||this.options.strict||(this.picker.options.element===this.triggerElement&&(this.options.endDate=null,this.setStartDate(this.picker.datePicked[0])),this.options.elementEnd===this.triggerElement&&(this.options.startDate=null,this.setEndDate(this.picker.datePicked[0]))),2===this.picker.datePicked.length&&this.setDateRange(this.picker.datePicked[0],this.picker.datePicked[1]),this.picker.trigger("select",{start:this.picker.getStartDate(),end:this.picker.getEndDate()}),this.picker.hide())}showTooltip(t,e){this.tooltipElement.style.visibility="visible",this.tooltipElement.innerHTML=e;const i=this.picker.ui.container.getBoundingClientRect(),n=this.tooltipElement.getBoundingClientRect(),s=t.getBoundingClientRect();let o=s.top,a=s.left;o-=i.top,a-=i.left,o-=n.height,a-=n.width/2,a+=s.width/2,this.tooltipElement.style.top=`${o}px`,this.tooltipElement.style.left=`${a}px`}hideTooltip(){this.tooltipElement.style.visibility="hidden"}checkIntlPluralLocales(){if(!this.options.tooltip)return;const t=[...new Set([new Intl.PluralRules(this.picker.options.lang).select(0),new Intl.PluralRules(this.picker.options.lang).select(1),new Intl.PluralRules(this.picker.options.lang).select(2),new Intl.PluralRules(this.picker.options.lang).select(6),new Intl.PluralRules(this.picker.options.lang).select(18)])],e=Object.keys(this.options.locale);t.every((t=>e.includes(t)))||console.warn(`${this.getName()}: provide locales (${t.join(", ")}) for correct tooltip text.`)}initializeRepick(){if(!this.options.repick)return;const t=this.getStartDate(),e=this.getEndDate();e&&this.triggerElement===this.picker.options.element&&(this.picker.datePicked[0]=e),t&&this.triggerElement===this.options.elementEnd&&(this.picker.datePicked[0]=t)}isContainer(t){return t===this.picker.ui.container}}class l extends o{options={native:!1,seconds:!1,stepHours:1,stepMinutes:5,stepSeconds:5,format12:!1};rangePlugin;timePicked={input:null,start:null,end:null};timePrePicked={input:null,start:null,end:null};binds={getDate:this.getDate.bind(this),getStartDate:this.getStartDate.bind(this),getEndDate:this.getEndDate.bind(this),onView:this.onView.bind(this),onInput:this.onInput.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),setTime:this.setTime.bind(this),setStartTime:this.setStartTime.bind(this),setEndTime:this.setEndTime.bind(this)};getName(){return"TimePlugin"}onAttach(){this.binds._getDate=this.picker.getDate,this.binds._getStartDate=this.picker.getStartDate,this.binds._getEndDate=this.picker.getEndDate,Object.defineProperties(this.picker,{getDate:{configurable:!0,value:this.binds.getDate},getStartDate:{configurable:!0,value:this.binds.getStartDate},getEndDate:{configurable:!0,value:this.binds.getEndDate},setTime:{configurable:!0,value:this.binds.setTime},setStartTime:{configurable:!0,value:this.binds.setStartTime},setEndTime:{configurable:!0,value:this.binds.setEndTime}}),this.rangePlugin=this.picker.PluginManager.getInstance("RangePlugin"),this.parseValues(),this.picker.on("view",this.binds.onView),this.picker.on("input",this.binds.onInput),this.picker.on("change",this.binds.onChange),this.picker.on("click",this.binds.onClick)}onDetach(){delete this.picker.setTime,delete this.picker.setStartTime,delete this.picker.setEndTime,Object.defineProperties(this.picker,{getDate:{configurable:!0,value:this.binds._getDate},getStartDate:{configurable:!0,value:this.binds._getStartDate},getEndDate:{configurable:!0,value:this.binds._getEndDate}}),this.picker.off("view",this.binds.onView),this.picker.off("input",this.binds.onInput),this.picker.off("change",this.binds.onChange),this.picker.off("click",this.binds.onClick)}onView(t){const{view:e,target:i}=t.detail;if("Main"===e){this.rangePlugin=this.picker.PluginManager.getInstance("RangePlugin");const t=document.createElement("div");if(t.className="time-plugin-container",this.rangePlugin){const e=this.getStartInput();t.appendChild(e),this.picker.trigger("view",{view:"TimePluginInput",target:e});const i=this.getEndInput();t.appendChild(i),this.picker.trigger("view",{view:"TimePluginInput",target:i})}else{const e=this.getSingleInput();t.appendChild(e),this.picker.trigger("view",{view:"TimePluginInput",target:e})}i.appendChild(t),this.picker.trigger("view",{view:"TimePluginContainer",target:t})}}onInput(e){const i=e.target;if(i instanceof HTMLInputElement&&i.classList.contains("time-plugin-input")){const e=this.timePicked[i.name]||new t,[n,s]=i.value.split(":");e.setHours(Number(n)||0,Number(s)||0,0,0),this.picker.options.autoApply?(this.timePicked[i.name]=e,this.picker.updateValues()):this.timePrePicked[i.name]=e}}onChange(e){const i=e.target;if(i instanceof HTMLSelectElement&&i.classList.contains("time-plugin-custom-input")){const e=/(\w+)\[(\w+)\]/,[,n,s]=i.name.match(e),o=Number(i.value);let a=new t;switch(!this.picker.options.autoApply&&this.timePrePicked[n]instanceof Date?a=this.timePrePicked[n].clone():this.timePicked[n]instanceof Date&&(a=this.timePicked[n].clone()),s){case"HH":if(this.options.format12){const t=i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[period]"]`).value,e=this.handleFormat12(t,a,o);a.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),0)}else a.setHours(o,a.getMinutes(),a.getSeconds(),0);break;case"mm":a.setHours(a.getHours(),o,a.getSeconds(),0);break;case"ss":a.setHours(a.getHours(),a.getMinutes(),o,0);break;case"period":if(this.options.format12){const t=i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[HH]"]`).value,e=this.handleFormat12(i.value,a,Number(t));a.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),0)}}if(this.picker.options.autoApply)this.timePicked[n]=a,this.picker.updateValues();else{this.timePrePicked[n]=a;const t=this.picker.ui.container.querySelector(".apply-button");if(this.rangePlugin){const e=this.rangePlugin.options,i=this.picker.datePicked,n=e.strict&&2===i.length||!e.strict&&i.length>0||!i.length&&e.strict&&e.startDate instanceof Date&&e.endDate instanceof Date||!i.length&&!e.strict&&(e.startDate instanceof Date||e.endDate instanceof Date);t.disabled=!n}else this.picker.datePicked.length&&(t.disabled=!1)}}}onClick(t){const e=t.target;if(e instanceof HTMLElement){const t=e.closest(".unit");if(!(t instanceof HTMLElement))return;this.picker.isApplyButton(t)&&(Object.keys(this.timePicked).forEach((t=>{this.timePrePicked[t]instanceof Date&&(this.timePicked[t]=this.timePrePicked[t].clone())})),this.picker.updateValues(),this.timePrePicked={input:null,start:null,end:null}),this.picker.isCancelButton(t)&&(this.timePrePicked={input:null,start:null,end:null},this.picker.renderAll())}}setTime(t){const e=this.handleTimeString(t);this.timePicked.input=e.clone(),this.picker.renderAll(),this.picker.updateValues()}setStartTime(t){const e=this.handleTimeString(t);this.timePicked.start=e.clone(),this.picker.renderAll(),this.picker.updateValues()}setEndTime(t){const e=this.handleTimeString(t);this.timePicked.end=e.clone(),this.picker.renderAll(),this.picker.updateValues()}handleTimeString(e){const i=new t,[n,s,o]=e.split(":").map((t=>Number(t))),a=n&&!Number.isNaN(n)?n:0,r=s&&!Number.isNaN(s)?s:0,c=o&&!Number.isNaN(o)?o:0;return i.setHours(a,r,c,0),i}getDate(){if(this.picker.options.date instanceof Date){const e=new t(this.picker.options.date,this.picker.options.format);if(this.timePicked.input instanceof Date){const t=this.timePicked.input;e.setHours(t.getHours(),t.getMinutes(),t.getSeconds(),0)}return e}return null}getStartDate(){if(this.rangePlugin.options.startDate instanceof Date){const e=new t(this.rangePlugin.options.startDate,this.picker.options.format);if(this.timePicked.start instanceof Date){const t=this.timePicked.start;e.setHours(t.getHours(),t.getMinutes(),t.getSeconds(),0)}return e}return null}getEndDate(){if(this.rangePlugin.options.endDate instanceof Date){const e=new t(this.rangePlugin.options.endDate,this.picker.options.format);if(this.timePicked.end instanceof Date){const t=this.timePicked.end;e.setHours(t.getHours(),t.getMinutes(),t.getSeconds(),0)}return e}return null}getSingleInput(){return this.options.native?this.getNativeInput("input"):this.getCustomInput("input")}getStartInput(){return this.options.native?this.getNativeInput("start"):this.getCustomInput("start")}getEndInput(){return this.options.native?this.getNativeInput("end"):this.getCustomInput("end")}getNativeInput(t){const e=document.createElement("input");e.type="time",e.name=t,e.className="time-plugin-input unit";const i=this.timePicked[t];if(i){const t=`0${i.getHours()}`.slice(-2),n=`0${i.getMinutes()}`.slice(-2);e.value=`${t}:${n}`}return e}getCustomInput(t){const e=document.createElement("div");e.className="time-plugin-custom-block";const i=document.createElement("select");i.className="time-plugin-custom-input unit",i.name=`${t}[HH]`;const n=this.options.format12?1:0,s=this.options.format12?13:24;let o=null;!this.picker.options.autoApply&&this.timePrePicked[t]instanceof Date?o=this.timePrePicked[t].clone():this.timePicked[t]instanceof Date&&(o=this.timePicked[t].clone());for(let t=n;t<s;t+=this.options.stepHours){const e=document.createElement("option");e.value=String(t),e.text=String(t),o&&(this.options.format12?(o.getHours()%12?o.getHours()%12:12)===t&&(e.selected=!0):o.getHours()===t&&(e.selected=!0)),i.appendChild(e)}e.appendChild(i);const a=document.createElement("select");a.className="time-plugin-custom-input unit",a.name=`${t}[mm]`;for(let t=0;t<60;t+=this.options.stepMinutes){const e=document.createElement("option");e.value=`0${String(t)}`.slice(-2),e.text=`0${String(t)}`.slice(-2),o&&o.getMinutes()===t&&(e.selected=!0),a.appendChild(e)}if(e.appendChild(a),this.options.seconds){const i=document.createElement("select");i.className="time-plugin-custom-input unit",i.name=`${t}[ss]`;const n=60;for(let t=0;t<n;t+=this.options.stepSeconds){const e=document.createElement("option");e.value=`0${String(t)}`.slice(-2),e.text=`0${String(t)}`.slice(-2),o&&o.getSeconds()===t&&(e.selected=!0),i.appendChild(e)}e.appendChild(i)}if(this.options.format12){const i=document.createElement("select");i.className="time-plugin-custom-input unit",i.name=`${t}[period]`,["AM","PM"].forEach((t=>{const e=document.createElement("option");e.value=t,e.text=t,o&&"PM"===t&&o.getHours()>=12&&(e.selected=!0),i.appendChild(e)})),e.appendChild(i)}return e}handleFormat12(t,e,i){const n=e.clone();switch(t){case"AM":12===i?n.setHours(0,n.getMinutes(),n.getSeconds(),0):n.setHours(i,n.getMinutes(),n.getSeconds(),0);break;case"PM":12!==i?n.setHours(i+12,n.getMinutes(),n.getSeconds(),0):n.setHours(i,n.getMinutes(),n.getSeconds(),0)}return n}parseValues(){if(this.rangePlugin){if(this.rangePlugin.options.strict){if(this.rangePlugin.options.startDate&&this.rangePlugin.options.endDate){const e=new t(this.rangePlugin.options.startDate,this.picker.options.format),i=new t(this.rangePlugin.options.endDate,this.picker.options.format);this.timePicked.start=e.clone(),this.timePicked.end=i.clone()}}else{if(this.rangePlugin.options.startDate){const e=new t(this.rangePlugin.options.startDate,this.picker.options.format);this.timePicked.start=e.clone()}if(this.rangePlugin.options.endDate){const e=new t(this.rangePlugin.options.endDate,this.picker.options.format);this.timePicked.end=e.clone()}}if(this.rangePlugin.options.elementEnd)if(this.rangePlugin.options.strict){if(this.picker.options.element instanceof HTMLInputElement&&this.picker.options.element.value.length&&this.rangePlugin.options.elementEnd instanceof HTMLInputElement&&this.rangePlugin.options.elementEnd.value.length){const e=new t(this.picker.options.element.value,this.picker.options.format),i=new t(this.rangePlugin.options.elementEnd.value,this.picker.options.format);this.timePicked.start=e.clone(),this.timePicked.end=i.clone()}}else{if(this.picker.options.element instanceof HTMLInputElement&&this.picker.options.element.value.length){const e=new t(this.picker.options.element.value,this.picker.options.format);this.timePicked.start=e.clone()}if(this.rangePlugin.options.elementEnd instanceof HTMLInputElement&&this.rangePlugin.options.elementEnd.value.length){const e=new t(this.rangePlugin.options.elementEnd.value,this.picker.options.format);this.timePicked.start=e.clone()}}else if(this.picker.options.element instanceof HTMLInputElement&&this.picker.options.element.value.length){const[e,i]=this.picker.options.element.value.split(this.rangePlugin.options.delimiter);if(this.rangePlugin.options.strict){if(e&&i){const n=new t(e,this.picker.options.format),s=new t(i,this.picker.options.format);this.timePicked.start=n.clone(),this.timePicked.end=s.clone()}}else{if(e){const i=new t(e,this.picker.options.format);this.timePicked.start=i.clone()}if(i){const e=new t(i,this.picker.options.format);this.timePicked.start=e.clone()}}}}else{if(this.picker.options.date){const e=new t(this.picker.options.date,this.picker.options.format);this.timePicked.input=e.clone()}if(this.picker.options.element instanceof HTMLInputElement&&this.picker.options.element.value.length){const e=new t(this.picker.options.element.value,this.picker.options.format);this.timePicked.input=e.clone()}}}}class h extends o{docElement=null;rangePlugin;binds={onView:this.onView.bind(this),onKeydown:this.onKeydown.bind(this)};options={unitIndex:1,dayIndex:2};getName(){return"KbdPlugin"}onAttach(){const t=this.picker.options.element,e=t.getBoundingClientRect();if(this.docElement=document.createElement("span"),this.docElement.style.position="absolute",this.docElement.style.top=`${t.offsetTop}px`,this.docElement.style.left=t.offsetLeft+e.width-25+"px",this.docElement.attachShadow({mode:"open"}),this.options.html)this.docElement.shadowRoot.innerHTML=this.options.html;else{const t=`\n      <style>\n      button {\n        border: none;\n        background: transparent;\n        font-size: ${window.getComputedStyle(this.picker.options.element).fontSize};\n      }\n      </style>\n\n      <button>&#128197;</button>\n      `;this.docElement.shadowRoot.innerHTML=t}const i=this.docElement.shadowRoot.querySelector("button");i&&(i.addEventListener("click",(t=>{t.preventDefault(),this.picker.show({target:this.picker.options.element})}),{capture:!0}),i.addEventListener("keydown",(t=>{"Escape"===t.code&&this.picker.hide()}),{capture:!0})),this.picker.options.element.after(this.docElement),this.picker.on("view",this.binds.onView),this.picker.on("keydown",this.binds.onKeydown)}onDetach(){this.docElement&&this.docElement.isConnected&&this.docElement.remove(),this.picker.off("view",this.binds.onView),this.picker.off("keydown",this.binds.onKeydown)}onView(t){const{view:e,target:i}=t.detail;i&&"querySelector"in i&&("CalendarDay"!==e||["locked","not-available"].some((t=>i.classList.contains(t)))?[...i.querySelectorAll(".unit:not(.day)")].forEach((t=>t.tabIndex=this.options.unitIndex)):i.tabIndex=this.options.dayIndex)}onKeydown(t){switch(this.onMouseEnter(t),t.code){case"ArrowUp":case"ArrowDown":this.verticalMove(t);break;case"ArrowLeft":case"ArrowRight":this.horizontalMove(t);break;case"Enter":case"Space":this.handleEnter(t);break;case"Escape":this.picker.hide()}}findAllowableDaySibling(t,e,i){const n=Array.from(t.querySelectorAll(`.day[tabindex="${this.options.dayIndex}"]`)),s=n.indexOf(e);return n.filter(((t,e)=>i(e,s)&&t.tabIndex===this.options.dayIndex))[0]}changeMonth(t){const e={ArrowLeft:"previous",ArrowRight:"next"},i=this.picker.ui.container.querySelector(`.${e[t.code]}-button[tabindex="${this.options.unitIndex}"]`);i&&!i.parentElement.classList.contains(`no-${e[t.code]}-month`)&&(i.dispatchEvent(new Event("click",{bubbles:!0})),setTimeout((()=>{let e=null;switch(t.code){case"ArrowLeft":const t=this.picker.ui.container.querySelectorAll(`.day[tabindex="${this.options.dayIndex}"]`);e=t[t.length-1];break;case"ArrowRight":e=this.picker.ui.container.querySelector(`.day[tabindex="${this.options.dayIndex}"]`)}e&&e.focus()})))}verticalMove(t){const e=t.target;if(e.classList.contains("day")){t.preventDefault();const i=this.findAllowableDaySibling(this.picker.ui.container,e,((e,i)=>e===("ArrowUp"===t.code?i-7:i+7)));i&&i.focus()}}horizontalMove(t){const e=t.target;if(e.classList.contains("day")){t.preventDefault();const i=this.findAllowableDaySibling(this.picker.ui.container,e,((e,i)=>e===("ArrowLeft"===t.code?i-1:i+1)));i?i.focus():this.changeMonth(t)}}handleEnter(t){const e=t.target;e.classList.contains("day")&&(t.preventDefault(),e.dispatchEvent(new Event("click",{bubbles:!0})),setTimeout((()=>{if(this.rangePlugin=this.picker.PluginManager.getInstance("RangePlugin"),this.rangePlugin||!this.picker.options.autoApply){const t=this.picker.ui.container.querySelector(".day.selected");t&&setTimeout((()=>{t.focus()}))}})))}onMouseEnter(t){t.target.classList.contains("day")&&setTimeout((()=>{const t=this.picker.ui.shadowRoot.activeElement;t&&t.dispatchEvent(new Event("mouseenter",{bubbles:!0}))}))}}class d extends o{rangePlugin;lockPlugin;priority=10;binds={onView:this.onView.bind(this),onColorScheme:this.onColorScheme.bind(this)};options={dropdown:{months:!1,years:!1,minYear:1950,maxYear:null},darkMode:!0,locale:{resetButton:'<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>'}};matchMedia;getName(){return"AmpPlugin"}onAttach(){this.options.darkMode&&window&&"matchMedia"in window&&(this.matchMedia=window.matchMedia("(prefers-color-scheme: dark)"),this.matchMedia.matches&&(this.picker.ui.container.dataset.theme="dark"),this.matchMedia.addEventListener("change",this.binds.onColorScheme)),this.options.weekNumbers&&this.picker.ui.container.classList.add("week-numbers"),this.picker.on("view",this.binds.onView)}onDetach(){this.options.darkMode&&window&&"matchMedia"in window&&this.matchMedia.removeEventListener("change",this.binds.onColorScheme),this.picker.ui.container.removeAttribute("data-theme"),this.picker.ui.container.classList.remove("week-numbers"),this.picker.off("view",this.binds.onView)}onView(t){this.lockPlugin=this.picker.PluginManager.getInstance("LockPlugin"),this.rangePlugin=this.picker.PluginManager.getInstance("RangePlugin"),this.handleDropdown(t),this.handleResetButton(t),this.handleWeekNumbers(t)}onColorScheme(t){const e=t.matches?"dark":"light";this.picker.ui.container.dataset.theme=e}handleDropdown(e){const{view:i,target:n,date:s,index:o}=e.detail;if("CalendarHeader"===i){const e=n.querySelector(".month-name");if(this.options.dropdown.months){e.childNodes[0].remove();const i=document.createElement("select");i.className="month-name--select month-name--dropdown";for(let e=0;e<12;e+=1){const n=document.createElement("option"),o=new t(new Date(s.getFullYear(),e,2,0,0,0)),a=new t(new Date(s.getFullYear(),e,1,0,0,0));n.value=String(e),n.text=o.toLocaleString(this.picker.options.lang,{month:"long"}),this.lockPlugin&&(n.disabled=this.lockPlugin.options.minDate&&a.isBefore(new t(this.lockPlugin.options.minDate),"month")||this.lockPlugin.options.maxDate&&a.isAfter(new t(this.lockPlugin.options.maxDate),"month")),n.selected=a.getMonth()===s.getMonth(),i.appendChild(n)}i.addEventListener("change",(t=>{const e=t.target;this.picker.calendars[0].setDate(1),this.picker.calendars[0].setMonth(Number(e.value)),this.picker.renderAll()})),e.prepend(i)}if(this.options.dropdown.years){e.childNodes[1].remove();const i=document.createElement("select");i.className="month-name--select";const n=this.options.dropdown.minYear,o=this.options.dropdown.maxYear?this.options.dropdown.maxYear:(new Date).getFullYear();if(s.getFullYear()>o){const t=document.createElement("option");t.value=String(s.getFullYear()),t.text=String(s.getFullYear()),t.selected=!0,t.disabled=!0,i.appendChild(t)}for(let e=o;e>=n;e-=1){const n=document.createElement("option"),o=new t(new Date(e,0,1,0,0,0));n.value=String(e),n.text=String(e),this.lockPlugin&&(n.disabled=this.lockPlugin.options.minDate&&o.isBefore(new t(this.lockPlugin.options.minDate),"year")||this.lockPlugin.options.maxDate&&o.isAfter(new t(this.lockPlugin.options.maxDate),"year")),n.selected=s.getFullYear()===e,i.appendChild(n)}if(s.getFullYear()<n){const t=document.createElement("option");t.value=String(s.getFullYear()),t.text=String(s.getFullYear()),t.selected=!0,t.disabled=!0,i.appendChild(t)}if("asc"===this.options.dropdown.years){const t=Array.prototype.slice.call(i.childNodes).reverse();i.innerHTML="",t.forEach((t=>{t.innerHTML=t.value,i.appendChild(t)}))}i.addEventListener("change",(t=>{const e=t.target;this.picker.calendars[0].setFullYear(Number(e.value)),this.picker.renderAll()})),e.appendChild(i)}}}handleResetButton(t){const{view:e,target:i}=t.detail;if("CalendarHeader"===e&&this.options.resetButton){const t=document.createElement("button");t.className="reset-button unit",t.innerHTML=this.options.locale.resetButton,t.addEventListener("click",(t=>{t.preventDefault();let e=!0;"function"==typeof this.options.resetButton&&(e=this.options.resetButton.call(this)),e&&this.picker.clear()})),i.appendChild(t)}}handleWeekNumbers(e){if(this.options.weekNumbers){const{view:i,target:n}=e.detail;if("CalendarDayNames"===i){const t=document.createElement("div");t.className="wnum-header",t.innerHTML="Wk",n.prepend(t)}"CalendarDays"===i&&[...n.children].forEach(((e,i)=>{if(0===i||i%7==0){let i;if(e.classList.contains("day"))i=new t(e.dataset.time);else{const e=n.querySelector(".day");i=new t(e.dataset.time)}let s=i.getWeek(this.picker.options.firstDay);53===s&&0===i.getMonth()&&(s="53/1");const o=document.createElement("div");o.className="wnum-item",o.innerHTML=String(s),n.insertBefore(o,e)}}))}}}


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _easepick_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @easepick/bundle */ "./node_modules/@easepick/bundle/dist/index.esm.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_1__);



if (document.getElementById('datepicker')) {
  var picker = new _easepick_bundle__WEBPACK_IMPORTED_MODULE_0__.easepick.create({
    element: document.getElementById('datepicker'),
    css: ['css/app.css'],
    plugins: [_easepick_bundle__WEBPACK_IMPORTED_MODULE_0__.RangePlugin],
    RangePlugin: {
      tooltipNumber: function tooltipNumber(num) {
        return num - 1;
      },
      delimiter: "_"
    }
  });
}

if (document.getElementById('phone')) {
  var input = document.getElementById('phone');
  intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default()(input, {
    // any initialisation options go here
    separateDialCode: false
  });
}

/***/ }),

/***/ "./node_modules/intl-tel-input/build/js/intlTelInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/js/intlTelInput.js ***!
  \**************************************************************/
/***/ ((module) => {

/*
 * International Telephone Input v17.0.18
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// wrap in UMD
(function(factory) {
    if ( true && module.exports) module.exports = factory(); else window.intlTelInput = factory();
})(function(undefined) {
    "use strict";
    return function() {
        // Array of country objects for the flag dropdown.
        // Here is the criteria for the plugin to support a given country/territory
        // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
        // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
        // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
        // Each country array has the following information:
        // [
        //    Country name,
        //    iso2 code,
        //    International dial code,
        //    Order (if >1 country with same dial code),
        //    Area codes
        // ]
        var allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Ascension Island", "ac", "247" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Eswatini", "sz", "268" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "North Macedonia (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ], [ "Saint Lucia", "lc", "1", 19, [ "758" ] ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ] ];
        // loop over all of the countries above, restructuring the data to be objects with named keys
        for (var i = 0; i < allCountries.length; i++) {
            var c = allCountries[i];
            allCountries[i] = {
                name: c[0],
                iso2: c[1],
                dialCode: c[2],
                priority: c[3] || 0,
                areaCodes: c[4] || null
            };
        }
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var intlTelInputGlobals = {
            getInstance: function getInstance(input) {
                var id = input.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[id];
            },
            instances: {},
            // using a global like this allows us to mock it in the tests
            documentReady: function documentReady() {
                return document.readyState === "complete";
            }
        };
        if (typeof window === "object") window.intlTelInputGlobals = intlTelInputGlobals;
        // these vars persist through all instances of the plugin
        var id = 0;
        var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // if there is just a dial code in the input: remove it on blur
            autoHideDialCode: true,
            // add a placeholder in the input with an example number for the selected country
            autoPlaceholder: "polite",
            // modify the parentClass
            customContainer: "",
            // modify the auto placeholder
            customPlaceholder: null,
            // append menu to specified element
            dropdownContainer: null,
            // don't display these countries
            excludeCountries: [],
            // format the input value during initialisation and on setNumber
            formatOnDisplay: true,
            // geoIp lookup function
            geoIpLookup: null,
            // inject a hidden input with this name, and on submit, populate it with the result of getNumber
            hiddenInput: "",
            // initial country
            initialCountry: "",
            // localized country names e.g. { 'de': 'Deutschland' }
            localizedCountries: null,
            // don't insert international dial codes
            nationalMode: true,
            // display only these countries
            onlyCountries: [],
            // number type to use for placeholders
            placeholderNumberType: "MOBILE",
            // the countries at the top of the list. defaults to united states and united kingdom
            preferredCountries: [ "us", "gb" ],
            // display the country dial code next to the selected flag so it's not part of the typed number
            separateDialCode: false,
            // specify the path to the libphonenumber script to enable validation/formatting
            utilsScript: ""
        };
        // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
        var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
        // utility function to iterate over an object. can't use Object.entries or native forEach because
        // of IE11
        var forEachProp = function forEachProp(obj, callback) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                callback(keys[i], obj[keys[i]]);
            }
        };
        // run a method on each instance of the plugin
        var forEachInstance = function forEachInstance(method) {
            forEachProp(window.intlTelInputGlobals.instances, function(key) {
                window.intlTelInputGlobals.instances[key][method]();
            });
        };
        // this is our plugin class that we will create an instance of
        // eslint-disable-next-line no-unused-vars
        var Iti = /*#__PURE__*/
        function() {
            function Iti(input, options) {
                var _this = this;
                _classCallCheck(this, Iti);
                this.id = id++;
                this.telInput = input;
                this.activeItem = null;
                this.highlightedItem = null;
                // process specified options / defaults
                // alternative to Object.assign, which isn't supported by IE11
                var customOptions = options || {};
                this.options = {};
                forEachProp(defaults, function(key, value) {
                    _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
                });
                this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
            }
            _createClass(Iti, [ {
                key: "_init",
                value: function _init() {
                    var _this2 = this;
                    // if in nationalMode, disable options relating to dial codes
                    if (this.options.nationalMode) this.options.autoHideDialCode = false;
                    // if separateDialCode then doesn't make sense to A) insert dial code into input
                    // (autoHideDialCode), and B) display national numbers (because we're displaying the country
                    // dial code next to them)
                    if (this.options.separateDialCode) {
                        this.options.autoHideDialCode = this.options.nationalMode = false;
                    }
                    // we cannot just test screen size as some smartphones/website meta tags will report desktop
                    // resolutions
                    // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
                    // rest of these declarations
                    // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
                    this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (this.isMobile) {
                        // trigger the mobile dropdown css
                        document.body.classList.add("iti-mobile");
                        // on mobile, we want a full screen dropdown, so we must append it to the body
                        if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                    }
                    // these promises get resolved when their individual requests complete
                    // this way the dev can do something like iti.promise.then(...) to know when all requests are
                    // complete
                    if (typeof Promise !== "undefined") {
                        var autoCountryPromise = new Promise(function(resolve, reject) {
                            _this2.resolveAutoCountryPromise = resolve;
                            _this2.rejectAutoCountryPromise = reject;
                        });
                        var utilsScriptPromise = new Promise(function(resolve, reject) {
                            _this2.resolveUtilsScriptPromise = resolve;
                            _this2.rejectUtilsScriptPromise = reject;
                        });
                        this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                    } else {
                        // prevent errors when Promise doesn't exist
                        this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                        this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                    }
                    // in various situations there could be no country selected initially, but we need to be able
                    // to assume this variable exists
                    this.selectedCountryData = {};
                    // process all the data: onlyCountries, excludeCountries, preferredCountries etc
                    this._processCountryData();
                    // generate the markup
                    this._generateMarkup();
                    // set the initial state of the input value and the selected flag
                    this._setInitialState();
                    // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
                    this._initListeners();
                    // utils script, and auto country
                    this._initRequests();
                }
            }, {
                key: "_processCountryData",
                value: function _processCountryData() {
                    // process onlyCountries or excludeCountries array if present
                    this._processAllCountries();
                    // process the countryCodes map
                    this._processCountryCodes();
                    // process the preferredCountries
                    this._processPreferredCountries();
                    // translate countries according to localizedCountries option
                    if (this.options.localizedCountries) this._translateCountriesByLocale();
                    // sort countries by name
                    if (this.options.onlyCountries.length || this.options.localizedCountries) {
                        this.countries.sort(this._countryNameSort);
                    }
                }
            }, {
                key: "_addCountryCode",
                value: function _addCountryCode(iso2, countryCode, priority) {
                    if (countryCode.length > this.countryCodeMaxLen) {
                        this.countryCodeMaxLen = countryCode.length;
                    }
                    if (!this.countryCodes.hasOwnProperty(countryCode)) {
                        this.countryCodes[countryCode] = [];
                    }
                    // bail if we already have this country for this countryCode
                    for (var i = 0; i < this.countryCodes[countryCode].length; i++) {
                        if (this.countryCodes[countryCode][i] === iso2) return;
                    }
                    // check for undefined as 0 is falsy
                    var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
                    this.countryCodes[countryCode][index] = iso2;
                }
            }, {
                key: "_processAllCountries",
                value: function _processAllCountries() {
                    if (this.options.onlyCountries.length) {
                        var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                        });
                    } else if (this.options.excludeCountries.length) {
                        var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                        });
                    } else {
                        this.countries = allCountries;
                    }
                }
            }, {
                key: "_translateCountriesByLocale",
                value: function _translateCountriesByLocale() {
                    for (var i = 0; i < this.countries.length; i++) {
                        var iso = this.countries[i].iso2.toLowerCase();
                        if (this.options.localizedCountries.hasOwnProperty(iso)) {
                            this.countries[i].name = this.options.localizedCountries[iso];
                        }
                    }
                }
            }, {
                key: "_countryNameSort",
                value: function _countryNameSort(a, b) {
                    return a.name.localeCompare(b.name);
                }
            }, {
                key: "_processCountryCodes",
                value: function _processCountryCodes() {
                    this.countryCodeMaxLen = 0;
                    // here we store just dial codes
                    this.dialCodes = {};
                    // here we store "country codes" (both dial codes and their area codes)
                    this.countryCodes = {};
                    // first: add dial codes
                    for (var i = 0; i < this.countries.length; i++) {
                        var c = this.countries[i];
                        if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                        this._addCountryCode(c.iso2, c.dialCode, c.priority);
                    }
                    // next: add area codes
                    // this is a second loop over countries, to make sure we have all of the "root" countries
                    // already in the map, so that we can access them, as each time we add an area code substring
                    // to the map, we also need to include the "root" country's code, as that also matches
                    for (var _i = 0; _i < this.countries.length; _i++) {
                        var _c = this.countries[_i];
                        // area codes
                        if (_c.areaCodes) {
                            var rootCountryCode = this.countryCodes[_c.dialCode][0];
                            // for each area code
                            for (var j = 0; j < _c.areaCodes.length; j++) {
                                var areaCode = _c.areaCodes[j];
                                // for each digit in the area code to add all partial matches as well
                                for (var k = 1; k < areaCode.length; k++) {
                                    var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                                    // start with the root country, as that also matches this dial code
                                    this._addCountryCode(rootCountryCode, partialDialCode);
                                    this._addCountryCode(_c.iso2, partialDialCode);
                                }
                                // add the full area code
                                this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                            }
                        }
                    }
                }
            }, {
                key: "_processPreferredCountries",
                value: function _processPreferredCountries() {
                    this.preferredCountries = [];
                    for (var i = 0; i < this.options.preferredCountries.length; i++) {
                        var countryCode = this.options.preferredCountries[i].toLowerCase();
                        var countryData = this._getCountryData(countryCode, false, true);
                        if (countryData) this.preferredCountries.push(countryData);
                    }
                }
            }, {
                key: "_createEl",
                value: function _createEl(name, attrs, container) {
                    var el = document.createElement(name);
                    if (attrs) forEachProp(attrs, function(key, value) {
                        return el.setAttribute(key, value);
                    });
                    if (container) container.appendChild(el);
                    return el;
                }
            }, {
                key: "_generateMarkup",
                value: function _generateMarkup() {
                    // if autocomplete does not exist on the element and its form, then
                    // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                    // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                    // autocompleted number, which on submit could mean wrong number is saved (esp in nationalMode)
                    if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
                        this.telInput.setAttribute("autocomplete", "off");
                    }
                    // containers (mostly for positioning)
                    var parentClass = "iti";
                    if (this.options.allowDropdown) parentClass += " iti--allow-dropdown";
                    if (this.options.separateDialCode) parentClass += " iti--separate-dial-code";
                    if (this.options.customContainer) {
                        parentClass += " ";
                        parentClass += this.options.customContainer;
                    }
                    var wrapper = this._createEl("div", {
                        "class": parentClass
                    });
                    this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                    this.flagsContainer = this._createEl("div", {
                        "class": "iti__flag-container"
                    }, wrapper);
                    wrapper.appendChild(this.telInput);
                    // selected flag (displayed to left of input)
                    this.selectedFlag = this._createEl("div", {
                        "class": "iti__selected-flag",
                        role: "combobox",
                        "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                        "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                        "aria-expanded": "false"
                    }, this.flagsContainer);
                    this.selectedFlagInner = this._createEl("div", {
                        "class": "iti__flag"
                    }, this.selectedFlag);
                    if (this.options.separateDialCode) {
                        this.selectedDialCode = this._createEl("div", {
                            "class": "iti__selected-dial-code"
                        }, this.selectedFlag);
                    }
                    if (this.options.allowDropdown) {
                        // make element focusable and tab navigable
                        this.selectedFlag.setAttribute("tabindex", "0");
                        this.dropdownArrow = this._createEl("div", {
                            "class": "iti__arrow"
                        }, this.selectedFlag);
                        // country dropdown: preferred countries, then divider, then all countries
                        this.countryList = this._createEl("ul", {
                            "class": "iti__country-list iti__hide",
                            id: "iti-".concat(this.id, "__country-listbox"),
                            role: "listbox",
                            "aria-label": "List of countries"
                        });
                        if (this.preferredCountries.length) {
                            this._appendListItems(this.preferredCountries, "iti__preferred", true);
                            this._createEl("li", {
                                "class": "iti__divider",
                                role: "separator",
                                "aria-disabled": "true"
                            }, this.countryList);
                        }
                        this._appendListItems(this.countries, "iti__standard");
                        // create dropdownContainer markup
                        if (this.options.dropdownContainer) {
                            this.dropdown = this._createEl("div", {
                                "class": "iti iti--container"
                            });
                            this.dropdown.appendChild(this.countryList);
                        } else {
                            this.flagsContainer.appendChild(this.countryList);
                        }
                    }
                    if (this.options.hiddenInput) {
                        var hiddenInputName = this.options.hiddenInput;
                        var name = this.telInput.getAttribute("name");
                        if (name) {
                            var i = name.lastIndexOf("[");
                            // if input name contains square brackets, then give the hidden input the same name,
                            // replacing the contents of the last set of brackets with the given hiddenInput name
                            if (i !== -1) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                        }
                        this.hiddenInput = this._createEl("input", {
                            type: "hidden",
                            name: hiddenInputName
                        });
                        wrapper.appendChild(this.hiddenInput);
                    }
                }
            }, {
                key: "_appendListItems",
                value: function _appendListItems(countries, className, preferred) {
                    // we create so many DOM elements, it is faster to build a temp string
                    // and then add everything to the DOM in one go at the end
                    var tmp = "";
                    // for each country
                    for (var i = 0; i < countries.length; i++) {
                        var c = countries[i];
                        var idSuffix = preferred ? "-preferred" : "";
                        // open the list item
                        tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "' aria-selected='false'>");
                        // add the flag
                        tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
                        // and the country name and dial code
                        tmp += "<span class='iti__country-name'>".concat(c.name, "</span>");
                        tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>");
                        // close the list item
                        tmp += "</li>";
                    }
                    this.countryList.insertAdjacentHTML("beforeend", tmp);
                }
            }, {
                key: "_setInitialState",
                value: function _setInitialState() {
                    // fix firefox bug: when first load page (with input with value set to number with intl dial
                    // code) and initialising plugin removes the dial code from the input, then refresh page,
                    // and we try to init plugin again but this time on number without dial code so get grey flag
                    var attributeValue = this.telInput.getAttribute("value");
                    var inputValue = this.telInput.value;
                    var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                    var val = useAttribute ? attributeValue : inputValue;
                    var dialCode = this._getDialCode(val);
                    var isRegionlessNanp = this._isRegionlessNanp(val);
                    var _this$options = this.options, initialCountry = _this$options.initialCountry, nationalMode = _this$options.nationalMode, autoHideDialCode = _this$options.autoHideDialCode, separateDialCode = _this$options.separateDialCode;
                    // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                    // flag, else fall back to the default country
                    if (dialCode && !isRegionlessNanp) {
                        this._updateFlagFromNumber(val);
                    } else if (initialCountry !== "auto") {
                        // see if we should select a flag
                        if (initialCountry) {
                            this._setFlag(initialCountry.toLowerCase());
                        } else {
                            if (dialCode && isRegionlessNanp) {
                                // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                                this._setFlag("us");
                            } else {
                                // no dial code and no initialCountry, so default to first in list
                                this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                if (!val) {
                                    this._setFlag(this.defaultCountry);
                                }
                            }
                        }
                        // if empty and no nationalMode and no autoHideDialCode then insert the default dial code
                        if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) {
                            this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                        }
                    }
                    // NOTE: if initialCountry is set to auto, that will be handled separately
                    // format - note this wont be run after _updateDialCode as that's only called if no val
                    if (val) this._updateValFromNumber(val);
                }
            }, {
                key: "_initListeners",
                value: function _initListeners() {
                    this._initKeyListeners();
                    if (this.options.autoHideDialCode) this._initBlurListeners();
                    if (this.options.allowDropdown) this._initDropdownListeners();
                    if (this.hiddenInput) this._initHiddenInputListener();
                }
            }, {
                key: "_initHiddenInputListener",
                value: function _initHiddenInputListener() {
                    var _this3 = this;
                    this._handleHiddenInputSubmit = function() {
                        _this3.hiddenInput.value = _this3.getNumber();
                    };
                    if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                }
            }, {
                key: "_getClosestLabel",
                value: function _getClosestLabel() {
                    var el = this.telInput;
                    while (el && el.tagName !== "LABEL") {
                        el = el.parentNode;
                    }
                    return el;
                }
            }, {
                key: "_initDropdownListeners",
                value: function _initDropdownListeners() {
                    var _this4 = this;
                    // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                    // open the dropdown would then automatically trigger a 2nd click on the input which would
                    // close it again
                    this._handleLabelClick = function(e) {
                        // if the dropdown is closed, then focus the input, else ignore the click
                        if (_this4.countryList.classList.contains("iti__hide")) _this4.telInput.focus(); else e.preventDefault();
                    };
                    var label = this._getClosestLabel();
                    if (label) label.addEventListener("click", this._handleLabelClick);
                    // toggle country dropdown on click
                    this._handleClickSelectedFlag = function() {
                        // only intercept this event if we're opening the dropdown
                        // else let it bubble up to the top ("click-off-to-close" listener)
                        // we cannot just stopPropagation as it may be needed to close another instance
                        if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
                            _this4._showDropdown();
                        }
                    };
                    this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                    // open dropdown list if currently focused
                    this._handleFlagsContainerKeydown = function(e) {
                        var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");
                        if (isDropdownHidden && [ "ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter" ].indexOf(e.key) !== -1) {
                            // prevent form from being submitted if "ENTER" was pressed
                            e.preventDefault();
                            // prevent event from being handled again by document
                            e.stopPropagation();
                            _this4._showDropdown();
                        }
                        // allow navigation from dropdown to input on TAB
                        if (e.key === "Tab") _this4._closeDropdown();
                    };
                    this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                }
            }, {
                key: "_initRequests",
                value: function _initRequests() {
                    var _this5 = this;
                    // if the user has specified the path to the utils script, fetch it on window.load, else resolve
                    if (this.options.utilsScript && !window.intlTelInputUtils) {
                        // if the plugin is being initialised after the window.load event has already been fired
                        if (window.intlTelInputGlobals.documentReady()) {
                            window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                        } else {
                            // wait until the load event so we don't block any other requests e.g. the flags image
                            window.addEventListener("load", function() {
                                window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                            });
                        }
                    } else this.resolveUtilsScriptPromise();
                    if (this.options.initialCountry === "auto") this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                }
            }, {
                key: "_loadAutoCountry",
                value: function _loadAutoCountry() {
                    // 3 options:
                    // 1) already loaded (we're done)
                    // 2) not already started loading (start)
                    // 3) already started loading (do nothing - just wait for loading callback to fire)
                    if (window.intlTelInputGlobals.autoCountry) {
                        this.handleAutoCountry();
                    } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                        // don't do this twice!
                        window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                        if (typeof this.options.geoIpLookup === "function") {
                            this.options.geoIpLookup(function(countryCode) {
                                window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                                // tell all instances the auto country is ready
                                // TODO: this should just be the current instances
                                // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                                // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                                // setTimeout means that the current thread of execution will finish before executing
                                // this, which allows the plugin to finish initialising.
                                setTimeout(function() {
                                    return forEachInstance("handleAutoCountry");
                                });
                            }, function() {
                                return forEachInstance("rejectAutoCountryPromise");
                            });
                        }
                    }
                }
            }, {
                key: "_initKeyListeners",
                value: function _initKeyListeners() {
                    var _this6 = this;
                    // update flag on keyup
                    this._handleKeyupEvent = function() {
                        if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
                            _this6._triggerCountryChange();
                        }
                    };
                    this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                    // update flag on cut/paste events (now supported in all major browsers)
                    this._handleClipboardEvent = function() {
                        // hack because "paste" event is fired before input is updated
                        setTimeout(_this6._handleKeyupEvent);
                    };
                    this.telInput.addEventListener("cut", this._handleClipboardEvent);
                    this.telInput.addEventListener("paste", this._handleClipboardEvent);
                }
            }, {
                key: "_cap",
                value: function _cap(number) {
                    var max = this.telInput.getAttribute("maxlength");
                    return max && number.length > max ? number.substr(0, max) : number;
                }
            }, {
                key: "_initBlurListeners",
                value: function _initBlurListeners() {
                    var _this7 = this;
                    // on blur or form submit: if just a dial code then remove it
                    this._handleSubmitOrBlurEvent = function() {
                        _this7._removeEmptyDialCode();
                    };
                    if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                    this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                }
            }, {
                key: "_removeEmptyDialCode",
                value: function _removeEmptyDialCode() {
                    if (this.telInput.value.charAt(0) === "+") {
                        var numeric = this._getNumeric(this.telInput.value);
                        // if just a plus, or if just a dial code
                        if (!numeric || this.selectedCountryData.dialCode === numeric) {
                            this.telInput.value = "";
                        }
                    }
                }
            }, {
                key: "_getNumeric",
                value: function _getNumeric(s) {
                    return s.replace(/\D/g, "");
                }
            }, {
                key: "_trigger",
                value: function _trigger(name) {
                    // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
                    var e = document.createEvent("Event");
                    e.initEvent(name, true, true);
                    // can bubble, and is cancellable
                    this.telInput.dispatchEvent(e);
                }
            }, {
                key: "_showDropdown",
                value: function _showDropdown() {
                    this.countryList.classList.remove("iti__hide");
                    this.selectedFlag.setAttribute("aria-expanded", "true");
                    this._setDropdownPosition();
                    // update highlighting and scroll to active list item
                    if (this.activeItem) {
                        this._highlightListItem(this.activeItem, false);
                        this._scrollTo(this.activeItem, true);
                    }
                    // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                    this._bindDropdownListeners();
                    // update the arrow
                    this.dropdownArrow.classList.add("iti__arrow--up");
                    this._trigger("open:countrydropdown");
                }
            }, {
                key: "_toggleClass",
                value: function _toggleClass(el, className, shouldHaveClass) {
                    if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className); else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                }
            }, {
                key: "_setDropdownPosition",
                value: function _setDropdownPosition() {
                    var _this8 = this;
                    if (this.options.dropdownContainer) {
                        this.options.dropdownContainer.appendChild(this.dropdown);
                    }
                    if (!this.isMobile) {
                        var pos = this.telInput.getBoundingClientRect();
                        // windowTop from https://stackoverflow.com/a/14384091/217866
                        var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                        var inputTop = pos.top + windowTop;
                        var dropdownHeight = this.countryList.offsetHeight;
                        // dropdownFitsBelow = (dropdownBottom < windowBottom)
                        var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                        var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                        // by default, the dropdown will be below the input. If we want to position it above the
                        // input, we add the dropup class.
                        this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove);
                        // if dropdownContainer is enabled, calculate postion
                        if (this.options.dropdownContainer) {
                            // by default the dropdown will be directly over the input because it's not in the flow.
                            // If we want to position it below, we need to add some extra top value.
                            var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                            // calculate placement
                            this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                            this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                            // close menu on window scroll
                            this._handleWindowScroll = function() {
                                return _this8._closeDropdown();
                            };
                            window.addEventListener("scroll", this._handleWindowScroll);
                        }
                    }
                }
            }, {
                key: "_getClosestListItem",
                value: function _getClosestListItem(target) {
                    var el = target;
                    while (el && el !== this.countryList && !el.classList.contains("iti__country")) {
                        el = el.parentNode;
                    }
                    // if we reached the countryList element, then return null
                    return el === this.countryList ? null : el;
                }
            }, {
                key: "_bindDropdownListeners",
                value: function _bindDropdownListeners() {
                    var _this9 = this;
                    // when mouse over a list item, just highlight that one
                    // we add the class "highlight", so if they hit "enter" we know which one to select
                    this._handleMouseoverCountryList = function(e) {
                        // handle event delegation, as we're listening for this event on the countryList
                        var listItem = _this9._getClosestListItem(e.target);
                        if (listItem) _this9._highlightListItem(listItem, false);
                    };
                    this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                    // listen for country selection
                    this._handleClickCountryList = function(e) {
                        var listItem = _this9._getClosestListItem(e.target);
                        if (listItem) _this9._selectListItem(listItem);
                    };
                    this.countryList.addEventListener("click", this._handleClickCountryList);
                    // click off to close
                    // (except when this initial opening click is bubbling up)
                    // we cannot just stopPropagation as it may be needed to close another instance
                    var isOpening = true;
                    this._handleClickOffToClose = function() {
                        if (!isOpening) _this9._closeDropdown();
                        isOpening = false;
                    };
                    document.documentElement.addEventListener("click", this._handleClickOffToClose);
                    // listen for up/down scrolling, enter to select, or letters to jump to country name.
                    // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                    // just hit down and hold it to scroll down (no keyup event).
                    // listen on the document because that's where key events are triggered if no input has focus
                    var query = "";
                    var queryTimer = null;
                    this._handleKeydownOnDropdown = function(e) {
                        // prevent down key from scrolling the whole page,
                        // and enter key from submitting a form etc
                        e.preventDefault();
                        // up and down to navigate
                        if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") _this9._handleUpDownKey(e.key); else if (e.key === "Enter") _this9._handleEnterKey(); else if (e.key === "Escape") _this9._closeDropdown(); else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                            // jump to countries that start with the query string
                            if (queryTimer) clearTimeout(queryTimer);
                            query += e.key.toLowerCase();
                            _this9._searchForCountry(query);
                            // if the timer hits 1 second, reset the query
                            queryTimer = setTimeout(function() {
                                query = "";
                            }, 1e3);
                        }
                    };
                    document.addEventListener("keydown", this._handleKeydownOnDropdown);
                }
            }, {
                key: "_handleUpDownKey",
                value: function _handleUpDownKey(key) {
                    var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                    if (next) {
                        // skip the divider
                        if (next.classList.contains("iti__divider")) {
                            next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
                        }
                        this._highlightListItem(next, true);
                    }
                }
            }, {
                key: "_handleEnterKey",
                value: function _handleEnterKey() {
                    if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                }
            }, {
                key: "_searchForCountry",
                value: function _searchForCountry(query) {
                    for (var i = 0; i < this.countries.length; i++) {
                        if (this._startsWith(this.countries[i].name, query)) {
                            var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i].iso2));
                            // update highlighting and scroll
                            this._highlightListItem(listItem, false);
                            this._scrollTo(listItem, true);
                            break;
                        }
                    }
                }
            }, {
                key: "_startsWith",
                value: function _startsWith(a, b) {
                    return a.substr(0, b.length).toLowerCase() === b;
                }
            }, {
                key: "_updateValFromNumber",
                value: function _updateValFromNumber(originalNumber) {
                    var number = originalNumber;
                    if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                        var useNational = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) !== "+");
                        var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                        var format = useNational ? NATIONAL : INTERNATIONAL;
                        number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                    }
                    number = this._beforeSetNumber(number);
                    this.telInput.value = number;
                }
            }, {
                key: "_updateFlagFromNumber",
                value: function _updateFlagFromNumber(originalNumber) {
                    // if we're in nationalMode and we already have US/Canada selected, make sure the number starts
                    // with a +1 so _getDialCode will be able to extract the area code
                    // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
                    // from the number), that means we're initialising the plugin with a number that already has a
                    // dial code, so fine to ignore this bit
                    var number = originalNumber;
                    var selectedDialCode = this.selectedCountryData.dialCode;
                    var isNanp = selectedDialCode === "1";
                    if (number && this.options.nationalMode && isNanp && number.charAt(0) !== "+") {
                        if (number.charAt(0) !== "1") number = "1".concat(number);
                        number = "+".concat(number);
                    }
                    // update flag if user types area code for another country
                    if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
                        number = "+".concat(selectedDialCode).concat(number);
                    }
                    // try and extract valid dial code from input
                    var dialCode = this._getDialCode(number, true);
                    var numeric = this._getNumeric(number);
                    var countryCode = null;
                    if (dialCode) {
                        var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                        // check if the right country is already selected. this should be false if the number is
                        // longer than the matched dial code because in this case we need to make sure that if
                        // there are multiple country matches, that the first one is selected (note: we could
                        // just check that here, but it requires the same loop that we already have later)
                        var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                        var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
                        // only update the flag if:
                        // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
                        // AND
                        // B) the right country is not already selected
                        if (!isRegionlessNanpNumber && !alreadySelected) {
                            // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
                            // non-empty index
                            for (var j = 0; j < countryCodes.length; j++) {
                                if (countryCodes[j]) {
                                    countryCode = countryCodes[j];
                                    break;
                                }
                            }
                        }
                    } else if (number.charAt(0) === "+" && numeric.length) {
                        // invalid dial code, so empty
                        // Note: use getNumeric here because the number has not been formatted yet, so could contain
                        // bad chars
                        countryCode = "";
                    } else if (!number || number === "+") {
                        // empty, or just a plus, so default
                        countryCode = this.defaultCountry;
                    }
                    if (countryCode !== null) {
                        return this._setFlag(countryCode);
                    }
                    return false;
                }
            }, {
                key: "_isRegionlessNanp",
                value: function _isRegionlessNanp(number) {
                    var numeric = this._getNumeric(number);
                    if (numeric.charAt(0) === "1") {
                        var areaCode = numeric.substr(1, 3);
                        return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                    }
                    return false;
                }
            }, {
                key: "_highlightListItem",
                value: function _highlightListItem(listItem, shouldFocus) {
                    var prevItem = this.highlightedItem;
                    if (prevItem) prevItem.classList.remove("iti__highlight");
                    this.highlightedItem = listItem;
                    this.highlightedItem.classList.add("iti__highlight");
                    if (shouldFocus) this.highlightedItem.focus();
                }
            }, {
                key: "_getCountryData",
                value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                    var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                    for (var i = 0; i < countryList.length; i++) {
                        if (countryList[i].iso2 === countryCode) {
                            return countryList[i];
                        }
                    }
                    if (allowFail) {
                        return null;
                    }
                    throw new Error("No country data for '".concat(countryCode, "'"));
                }
            }, {
                key: "_setFlag",
                value: function _setFlag(countryCode) {
                    var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                    // do this first as it will throw an error and stop if countryCode is invalid
                    this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                    // update the defaultCountry - we only need the iso2 from now on, so just store that
                    if (this.selectedCountryData.iso2) {
                        this.defaultCountry = this.selectedCountryData.iso2;
                    }
                    this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                    // update the selected country's title attribute
                    var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                    this.selectedFlag.setAttribute("title", title);
                    if (this.options.separateDialCode) {
                        var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                        this.selectedDialCode.innerHTML = dialCode;
                        // offsetWidth is zero if input is in a hidden container during initialisation
                        var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                        // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css
                        this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                    }
                    // and the input's placeholder
                    this._updatePlaceholder();
                    // update the active list item
                    if (this.options.allowDropdown) {
                        var prevItem = this.activeItem;
                        if (prevItem) {
                            prevItem.classList.remove("iti__active");
                            prevItem.setAttribute("aria-selected", "false");
                        }
                        if (countryCode) {
                            // check if there is a preferred item first, else fall back to standard
                            var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                            nextItem.setAttribute("aria-selected", "true");
                            nextItem.classList.add("iti__active");
                            this.activeItem = nextItem;
                            this.selectedFlag.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
                        }
                    }
                    // return if the flag has changed or not
                    return prevCountry.iso2 !== countryCode;
                }
            }, {
                key: "_getHiddenSelectedFlagWidth",
                value: function _getHiddenSelectedFlagWidth() {
                    // to get the right styling to apply, all we need is a shallow clone of the container,
                    // and then to inject a deep clone of the selectedFlag element
                    var containerClone = this.telInput.parentNode.cloneNode();
                    containerClone.style.visibility = "hidden";
                    document.body.appendChild(containerClone);
                    var flagsContainerClone = this.flagsContainer.cloneNode();
                    containerClone.appendChild(flagsContainerClone);
                    var selectedFlagClone = this.selectedFlag.cloneNode(true);
                    flagsContainerClone.appendChild(selectedFlagClone);
                    var width = selectedFlagClone.offsetWidth;
                    containerClone.parentNode.removeChild(containerClone);
                    return width;
                }
            }, {
                key: "_updatePlaceholder",
                value: function _updatePlaceholder() {
                    var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                    if (window.intlTelInputUtils && shouldSetPlaceholder) {
                        var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                        var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                        placeholder = this._beforeSetNumber(placeholder);
                        if (typeof this.options.customPlaceholder === "function") {
                            placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                        }
                        this.telInput.setAttribute("placeholder", placeholder);
                    }
                }
            }, {
                key: "_selectListItem",
                value: function _selectListItem(listItem) {
                    // update selected flag and active list item
                    var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                    this._closeDropdown();
                    this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
                    // focus the input
                    this.telInput.focus();
                    // put cursor at end - this fix is required for FF and IE11 (with nationalMode=false i.e. auto
                    // inserting dial code), who try to put the cursor at the beginning the first time
                    var len = this.telInput.value.length;
                    this.telInput.setSelectionRange(len, len);
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "_closeDropdown",
                value: function _closeDropdown() {
                    this.countryList.classList.add("iti__hide");
                    this.selectedFlag.setAttribute("aria-expanded", "false");
                    // update the arrow
                    this.dropdownArrow.classList.remove("iti__arrow--up");
                    // unbind key events
                    document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                    document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                    this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                    this.countryList.removeEventListener("click", this._handleClickCountryList);
                    // remove menu from container
                    if (this.options.dropdownContainer) {
                        if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                        if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                    }
                    this._trigger("close:countrydropdown");
                }
            }, {
                key: "_scrollTo",
                value: function _scrollTo(element, middle) {
                    var container = this.countryList;
                    // windowTop from https://stackoverflow.com/a/14384091/217866
                    var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                    var containerHeight = container.offsetHeight;
                    var containerTop = container.getBoundingClientRect().top + windowTop;
                    var containerBottom = containerTop + containerHeight;
                    var elementHeight = element.offsetHeight;
                    var elementTop = element.getBoundingClientRect().top + windowTop;
                    var elementBottom = elementTop + elementHeight;
                    var newScrollTop = elementTop - containerTop + container.scrollTop;
                    var middleOffset = containerHeight / 2 - elementHeight / 2;
                    if (elementTop < containerTop) {
                        // scroll up
                        if (middle) newScrollTop -= middleOffset;
                        container.scrollTop = newScrollTop;
                    } else if (elementBottom > containerBottom) {
                        // scroll down
                        if (middle) newScrollTop += middleOffset;
                        var heightDifference = containerHeight - elementHeight;
                        container.scrollTop = newScrollTop - heightDifference;
                    }
                }
            }, {
                key: "_updateDialCode",
                value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
                    var inputVal = this.telInput.value;
                    // save having to pass this every time
                    var newDialCode = "+".concat(newDialCodeBare);
                    var newNumber;
                    if (inputVal.charAt(0) === "+") {
                        // there's a plus so we're dealing with a replacement (doesn't matter if nationalMode or not)
                        var prevDialCode = this._getDialCode(inputVal);
                        if (prevDialCode) {
                            // current number contains a valid dial code, so replace it
                            newNumber = inputVal.replace(prevDialCode, newDialCode);
                        } else {
                            // current number contains an invalid dial code, so ditch it
                            // (no way to determine where the invalid dial code ends and the rest of the number begins)
                            newNumber = newDialCode;
                        }
                    } else if (this.options.nationalMode || this.options.separateDialCode) {
                        // don't do anything
                        return;
                    } else {
                        // nationalMode is disabled
                        if (inputVal) {
                            // there is an existing value with no dial code: prefix the new dial code
                            newNumber = newDialCode + inputVal;
                        } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                            // no existing value and either they've just selected a list item, or autoHideDialCode is
                            // disabled: insert new dial code
                            newNumber = newDialCode;
                        } else {
                            return;
                        }
                    }
                    this.telInput.value = newNumber;
                }
            }, {
                key: "_getDialCode",
                value: function _getDialCode(number, includeAreaCode) {
                    var dialCode = "";
                    // only interested in international numbers (starting with a plus)
                    if (number.charAt(0) === "+") {
                        var numericChars = "";
                        // iterate over chars
                        for (var i = 0; i < number.length; i++) {
                            var c = number.charAt(i);
                            // if char is number (https://stackoverflow.com/a/8935649/217866)
                            if (!isNaN(parseInt(c, 10))) {
                                numericChars += c;
                                // if current numericChars make a valid dial code
                                if (includeAreaCode) {
                                    if (this.countryCodes[numericChars]) {
                                        // store the actual raw string (useful for matching later)
                                        dialCode = number.substr(0, i + 1);
                                    }
                                } else {
                                    if (this.dialCodes[numericChars]) {
                                        dialCode = number.substr(0, i + 1);
                                        // if we're just looking for a dial code, we can break as soon as we find one
                                        break;
                                    }
                                }
                                // stop searching as soon as we can - in this case when we hit max len
                                if (numericChars.length === this.countryCodeMaxLen) {
                                    break;
                                }
                            }
                        }
                    }
                    return dialCode;
                }
            }, {
                key: "_getFullNumber",
                value: function _getFullNumber() {
                    var val = this.telInput.value.trim();
                    var dialCode = this.selectedCountryData.dialCode;
                    var prefix;
                    var numericVal = this._getNumeric(val);
                    if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
                        // when using separateDialCode, it is visible so is effectively part of the typed number
                        prefix = "+".concat(dialCode);
                    } else {
                        prefix = "";
                    }
                    return prefix + val;
                }
            }, {
                key: "_beforeSetNumber",
                value: function _beforeSetNumber(originalNumber) {
                    var number = originalNumber;
                    if (this.options.separateDialCode) {
                        var dialCode = this._getDialCode(number);
                        // if there is a valid dial code
                        if (dialCode) {
                            // in case _getDialCode returned an area code as well
                            dialCode = "+".concat(this.selectedCountryData.dialCode);
                            // a lot of numbers will have a space separating the dial code and the main number, and
                            // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
                            // rid of it
                            // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc
                            var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                            number = number.substr(start);
                        }
                    }
                    return this._cap(number);
                }
            }, {
                key: "_triggerCountryChange",
                value: function _triggerCountryChange() {
                    this._trigger("countrychange");
                }
            }, {
                key: "handleAutoCountry",
                value: function handleAutoCountry() {
                    if (this.options.initialCountry === "auto") {
                        // we must set this even if there is an initial val in the input: in case the initial val is
                        // invalid and they delete it - they should see their auto country
                        this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                        // if there's no initial value in the input, then update the flag
                        if (!this.telInput.value) {
                            this.setCountry(this.defaultCountry);
                        }
                        this.resolveAutoCountryPromise();
                    }
                }
            }, {
                key: "handleUtils",
                value: function handleUtils() {
                    // if the request was successful
                    if (window.intlTelInputUtils) {
                        // if there's an initial value in the input, then format it
                        if (this.telInput.value) {
                            this._updateValFromNumber(this.telInput.value);
                        }
                        this._updatePlaceholder();
                    }
                    this.resolveUtilsScriptPromise();
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var form = this.telInput.form;
                    if (this.options.allowDropdown) {
                        // make sure the dropdown is closed (and unbind listeners)
                        this._closeDropdown();
                        this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                        this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                        // label click hack
                        var label = this._getClosestLabel();
                        if (label) label.removeEventListener("click", this._handleLabelClick);
                    }
                    // unbind hiddenInput listeners
                    if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                    // unbind autoHideDialCode listeners
                    if (this.options.autoHideDialCode) {
                        if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                        this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                    }
                    // unbind key events, and cut/paste events
                    this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                    this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                    this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                    // remove attribute of id instance: data-intl-tel-input-id
                    this.telInput.removeAttribute("data-intl-tel-input-id");
                    // remove markup (but leave the original input)
                    var wrapper = this.telInput.parentNode;
                    wrapper.parentNode.insertBefore(this.telInput, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                    delete window.intlTelInputGlobals.instances[this.id];
                }
            }, {
                key: "getExtension",
                value: function getExtension() {
                    if (window.intlTelInputUtils) {
                        return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                    }
                    return "";
                }
            }, {
                key: "getNumber",
                value: function getNumber(format) {
                    if (window.intlTelInputUtils) {
                        var iso2 = this.selectedCountryData.iso2;
                        return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                    }
                    return "";
                }
            }, {
                key: "getNumberType",
                value: function getNumberType() {
                    if (window.intlTelInputUtils) {
                        return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                    }
                    return -99;
                }
            }, {
                key: "getSelectedCountryData",
                value: function getSelectedCountryData() {
                    return this.selectedCountryData;
                }
            }, {
                key: "getValidationError",
                value: function getValidationError() {
                    if (window.intlTelInputUtils) {
                        var iso2 = this.selectedCountryData.iso2;
                        return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                    }
                    return -99;
                }
            }, {
                key: "isValidNumber",
                value: function isValidNumber() {
                    var val = this._getFullNumber().trim();
                    var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                    return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
                }
            }, {
                key: "setCountry",
                value: function setCountry(originalCountryCode) {
                    var countryCode = originalCountryCode.toLowerCase();
                    // check if already selected
                    if (!this.selectedFlagInner.classList.contains("iti__".concat(countryCode))) {
                        this._setFlag(countryCode);
                        this._updateDialCode(this.selectedCountryData.dialCode, false);
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setNumber",
                value: function setNumber(number) {
                    // we must update the flag first, which updates this.selectedCountryData, which is used for
                    // formatting the number before displaying it
                    var flagChanged = this._updateFlagFromNumber(number);
                    this._updateValFromNumber(number);
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setPlaceholderNumberType",
                value: function setPlaceholderNumberType(type) {
                    this.options.placeholderNumberType = type;
                    this._updatePlaceholder();
                }
            } ]);
            return Iti;
        }();
        /********************
 *  STATIC METHODS
 ********************/
        // get the country data object
        intlTelInputGlobals.getCountryData = function() {
            return allCountries;
        };
        // inject a <script> element to load utils.js
        var injectScript = function injectScript(path, handleSuccess, handleFailure) {
            // inject a new script element into the page
            var script = document.createElement("script");
            script.onload = function() {
                forEachInstance("handleUtils");
                if (handleSuccess) handleSuccess();
            };
            script.onerror = function() {
                forEachInstance("rejectUtilsScriptPromise");
                if (handleFailure) handleFailure();
            };
            script.className = "iti-load-utils";
            script.async = true;
            script.src = path;
            document.body.appendChild(script);
        };
        // load the utils script
        intlTelInputGlobals.loadUtils = function(path) {
            // 2 options:
            // 1) not already started loading (start)
            // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
            // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                // only do this once
                window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                // if we have promises, then return a promise
                if (typeof Promise !== "undefined") {
                    return new Promise(function(resolve, reject) {
                        return injectScript(path, resolve, reject);
                    });
                }
                injectScript(path);
            }
            return null;
        };
        // default options
        intlTelInputGlobals.defaults = defaults;
        // version
        intlTelInputGlobals.version = "17.0.18";
        // convenience wrapper
        return function(input, options) {
            var iti = new Iti(input, options);
            iti._init();
            input.setAttribute("data-intl-tel-input-id", iti.id);
            window.intlTelInputGlobals.instances[iti.id] = iti;
            return iti;
        };
    }();
});

/***/ }),

/***/ "./node_modules/intl-tel-input/index.js":
/*!**********************************************!*\
  !*** ./node_modules/intl-tel-input/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Exposing intl-tel-input as a component
 */
module.exports = __webpack_require__(/*! ./build/js/intlTelInput */ "./node_modules/intl-tel-input/build/js/intlTelInput.js");


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;