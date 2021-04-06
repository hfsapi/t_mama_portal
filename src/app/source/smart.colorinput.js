
/* Smart UI v9.1.0 (2020-Dec) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}({20:function(e,t){Smart("smart-color-input",class extends Smart.Input{static get properties(){return{dataSource:{type:"any",value:null},displayMode:{value:"default",allowedValues:["default","grid"],type:"string"},dropDownHeight:{type:"any",value:"auto"},messages:{value:{en:{standardColors:"Standard colors",themeShadeColors:"",themeColors:"Theme colors"}},type:"object",extend:!0},placeholder:{value:"Please Select Color",type:"string"},valueDisplayMode:{value:"default",allowedValues:["default","colorBox","colorCode"],type:"string"},valueFormat:{value:"hex",allowedValues:["rgb","rgba","hex"],type:"string"}}}static get listeners(){return{"input.focus":"_focusHandler","input.blur":"_blurHandler","input.keydown":"_keyDownHandler","input.keyup":"_keyUpHandler","input.keypress":"_keyPressHandler","input.select":"_inputSelectHandler","input.change":"_inputChangeHandler","dropDownButton.down":"_dropDownButtonDownHandler","inputContainer.down":"_downHandler","document.up":"_documentUpHandler"}}template(){return'<div id="inputContainer" role="presentation">\n                    <div class="smart-content">\n                        <div class="smart-buttons-container" role="presentation" id="buttonsContainer">\n                            <div class="smart-action-button" id="actionButton">\n                                <div id="colorSampleContainer" class="smart-color-box color-picker-sample-container" role="presentation">\n                                    <div id="colorSample" class="color-picker-sample"></div>\n                                </div>\n                                <input class="smart-input smart-color-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\'\n                                    value=\'[[value]]\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" spellcheck="false" />\n                            </div>\n                            <div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup">\n                                <div id="arrow" class="smart-drop-down-button-icon" aria-hidden="true"></div>\n                            </div>\n                        </div>\n                        <span id="hint" class="smart-hint smart-hidden" inner-h-t-m-l="[[hint]]"></span>\n                    </div>\n                </div>'}open(){const e=this;let t;e.dropDownDataSource?(e.query="",t="function"==typeof e.dataSource?e.dataSource(e.query):e.dataSource):t="function"==typeof e.dropDownDataSource?e.dropDownDataSource(e.query):e.dropDownDataSource,e._process(t);const r=e.$.menu.querySelector(".color-sample.selected");if(r){const t=e.$.input.dataValue,a=e.$.menu.querySelectorAll(".color-sample");for(let o=0;o<a.length;o++){const l=a[o],n=l.getAttribute("data-label"),s=l.getAttribute("value");if(void 0!==t&&s===t||void 0===t&&n===e.$.input.value){r.removeAttribute("aria-current"),r.classList.remove("selected"),l.classList.add("selected"),l.setAttribute("aria-current",!0),e._setActiveDescendant(l),e.$.input.dataValue=s;break}}}e.ensureVisible(),e.$.input.focus(),setTimeout((function(){e.$.input.focus()}),25)}_blurHandler(){const e=this;e.opened||(e.removeAttribute("focus"),e.$.actionButton.removeAttribute("focus"),e.$.dropDownButton.removeAttribute("focus")),delete e._preventLookup,e._isValidColor(e.value)||(e.$.input.value=e.$.input.dataValue=e.value="",e.$colorSampleContainer.addClass("no-color"))}_focusHandler(){const e=this;e.setAttribute("focus",""),e.$.actionButton.setAttribute("focus",""),e.$.dropDownButton.setAttribute("focus",""),e.readonly||0!==e.minLength||0!==e.$.input.value.length||e._preventLookup?delete e._preventLookup:e._lookup()}_lookup(e){const t=this;let r=[];t.query=t.$.input.value,t.$.input.readonly&&(t._incrementalSearchQuery||(t._incrementalSearchQuery=""),t._incrementalSearchQuery+=e.key,t._incrementalSearchTimer&&clearTimeout(t._incrementalSearchTimer),t.query=t._incrementalSearchQuery,t._incrementalSearchTimer=setTimeout((function(){t._incrementalSearchQuery=""}),700)),t.query.length<t.minLength?t.close():(r="function"==typeof t.dataSource?t.dataSource(t.query):t.dataSource,clearTimeout(t._autoCompleteTimeout),t._autoCompleteTimeout=setTimeout((function(){const e=t.context;t.context=t,t._process(r),t.context=e}),t.autoCompleteDelay))}_getDefaultColors(){let e=this._generateColors();if("grid"===this.displayMode)return e;let t=[];for(let r=0;r<e.length;r++)t=t.concat(Object.values(e[r])[0]);return t}_generateColors(){const e=this;return"default"===e.displayMode?e._defaultModeColors?e._defaultModeColors:e._defaultModeColors=[{themeColors:["#FFFFFF","#000000","#E6E6E6","#495469","#5671C2","#D48439","#A5A5A5","#EEC328","#7399D3","#85AA4C"]},{themeShadeColors:["#F2F2F2","#808080","#D0CECE","#D6DCE4","#DDEBF7","#FCE4D6","#EBEBEB","#FFF2CC","#DDE5F7","#E2EFDA","#D8D8D8","#595959","#AEAAAA","#ACB9CA","#BDD7EE","#F6CAAD","#DBDBDB","#FFE699","#B4C6E7","#C6E0B4","#BFBFBF","#404040","#757171","#8497B0","#9BC2E6","#F4B084","#C0C0C0","#FFD966","#8EA9DB","#A9D08E","#A6A6A6","#262626","#312F2F","#333F4F","#2F75B5","#C65911","#7B7B7B","#BF8F00","#305496","#548235","#808080","#0D0D0D","#161616","#222B35","#1F4E78","#833C0C","#525252","#806000","#203764","#375623"]},{standardColors:["#A52A0D","#DB3A15","#EEC328","#FEFE33","#A6CD57","#62AC54","#65ADEE","#3F6FBE","#10205F","#64379E"]}]:e._gridColors?e._gridColors:e._gridColors=["rgba(255, 255, 255, 0)","rgb(0, 0, 0)","rgb(153, 51, 0)","rgb(51, 51, 0)","rgb(0, 51, 0)","rgb(0, 51, 102)","rgb(0, 0, 128)","rgb(51, 51, 153)","rgb(51, 51, 51)","rgb(128, 0, 0)","rgb(255, 102, 0)","rgb(128, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 128)","rgb(0, 0, 255)","rgb(102, 102, 153)","rgb(128, 128, 128)","rgb(255, 0, 0)","rgb(255, 153, 0)","rgb(153, 204, 0)","rgb(51, 153, 102)","rgb(51, 204, 204)","rgb(51, 102, 255)","rgb(128, 0, 128)","rgb(153, 153, 153)","rgb(255, 0, 255)","rgb(255, 204, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 204, 255)","rgb(153, 51, 102)","rgb(192, 192, 192)","rgb(255, 153, 204)","rgb(255, 204, 153)","rgb(255, 255, 153)","rgb(204, 255, 204)","rgb(204, 255, 255)","rgb(153, 204, 255)","rgb(204, 153, 255)","rgb(255, 255, 255)"]}_downHandler(e){const t=this;(t.readonly||e.originalEvent.target.closest(".smart-color-box"))&&t._dropDownButtonDownHandler(e)}_documentUpHandler(e){const t=this,r=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;r===t||r.closest&&r.closest(".smart-buttons-container")===t.$.buttonsContainer||(t.$.scrollView.contains(r.shadowParent||r)?t._isPointerDown&&(t._isPointerDown=!1,t.opened&&(t._preventLookup=!0),t.$.input.focus()):(t.opened&&(t._preventLookup=!0),t._isPointerDown=!1,t.close()))}_formatValue(e){const t=this;if(!t._isValidColor(e))return"";const r=t._getRGBA(e);switch(t.valueFormat){case"hex":e=t._rgbArrayToHEX([r.r,r.g,r.b,r.a]);break;case"rgb":e="rgb("+r.r+", "+r.g+", "+r.b+")";break;case"rgba":e=null!==r.r&&null!==r.g&&null!==r.b?"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")":null}return e||null}_getRGBA(e){const t=this,r=e||t.value;let a=1;r&&(t._isRGBA(r)&&/rgba\((\d*.\d+|\d+),(\d*.\d+|\d+),(\d*.\d+|\d+)\,(\d*.\d+|\d+)\)/gi.test(r.replace(/\s/g,""))?a=/rgba\((\d*.\d+|\d+),(\d*.\d+|\d+),(\d*.\d+|\d+)\,(\d*.\d+|\d+)\)/gi.exec(r.replace(/\s/g,""))[4]:t._isHEX(e)&&/(^#[0-9A-F]{8}$)/gi.test(e.replace(/\s/g,""))&&(a=parseInt(/(^#[0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2}$)/gi.exec(e.replace(/\s/g,""))[4],16)/255),a=Math.min(1,Math.max(0,parseFloat(a))),isNaN(a)&&(a=1)),e=t._HSVtoRGBA(t._colorToHSV(r),a);const o=/rgba\((\d*.\d+|\d+),(\d*.\d+|\d+),(\d*.\d+|\d+)\,(\d*.\d+|\d+)\)/gi.exec(e.replace(/\s/g,""));return{r:parseInt(o[1]),g:parseInt(o[2]),b:parseInt(o[3]),a:parseFloat(o[4])}}_colorToHSV(e){if(!this._isValidColor(e))return;e=this._toRGBA(e).replace(/\s/g,"");const t=/rgba\((\d*.\d+|\d+),(\d*.\d+|\d+),(\d*.\d+|\d+)\,(\d*.\d+|\d+)\)/gi.exec(e),r=Math.min(255,Math.max(0,parseFloat(t[1])))/255,a=Math.min(255,Math.max(0,parseFloat(t[2])))/255,o=Math.min(255,Math.max(0,parseFloat(t[3])))/255;let l={h:0,s:0,v:0},n=0,s=0;if(r>=a&&r>=o?(s=r,n=a>o?o:a):a>=o&&a>=r?(s=a,n=r>o?o:r):(s=o,n=a>r?r:a),l.v=s,l.s=s?(s-n)/s:0,l.s){const e=s-n;l.h=r===s?(a-o)/e:a===s?2+(o-r)/e:4+(r-a)/e,l.h=60*l.h,l.h<0&&(l.h+=360)}else l.h=0;return l.s=parseFloat(l.s),l.v=parseFloat(l.v),l}_rgbArrayToHEX(e){let t="#";if(Array.isArray(e)&&null===e[0])return null;for(let r=0;r<3;r++){let a=parseInt(e[r]).toString(16).toUpperCase();a=1===a.length?0+a:a,t+=a}let r=parseFloat(e[3]);return isNaN(r)||(r=parseInt(255*r).toString(16).toUpperCase(),"FF"!==r&&(t=t.slice(0,7)+(1===r.length?0+r:r))),t}_HSVtoRGBA(e,t){const r=(e=e||{h:0,s:0,v:0}).h,a=e.s,o=e.v;let l,n,s,i=o*a,d=r/60,c=i*(1-Math.abs(d%2-1));d>=0&&d<=1?[l,n,s]=[i,c,0]:d>=1&&d<=2?[l,n,s]=[c,i,0]:d>=2&&d<=3?[l,n,s]=[0,i,c]:d>=3&&d<=4?[l,n,s]=[0,c,i]:d>=4&&d<=5?[l,n,s]=[c,0,i]:d>=5&&d<=6&&([l,n,s]=[i,0,c]);const u=o-i;return"rgba("+Math.round(255*(l+u))+", "+Math.round(255*(n+u))+", "+Math.round(255*(s+u))+", "+(void 0!==t?t:this._getRGBA().a||0)+")"}_toRGBA(e,t){const r=this;let a=r.value;function o(e){const r=/^#(.)(.)(.)$/gi.exec(e),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e),o=r?parseInt(r[1]+r[1],16):parseInt(a[1],16),l=r?parseInt(r[2]+r[2],16):parseInt(a[2],16),n=r?parseInt(r[3]+r[3],16):parseInt(a[3],16),s=r?parseInt(r[4]+r[4],16):parseInt(a[4],16);return t?"rgba("+o+", "+l+", "+n+", 1)":"rgba("+o+", "+l+", "+n+", "+(isNaN(s)?"1":s/255)+")"}if(r._isRGBA(e)){if(t){return"rgba("+e.match(/(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/gi)+", 1)"}return e}if(r._isValidColorName(e))a=o(r._cssColorNamesHEX[e.trim().toLowerCase()]);else if(r._isHEX(e))a=o(e);else{if(!r._isRGB(e))return!1;a=e.toLowerCase(),a=a.replace("rgb","rgba"),a=a.replace(")",", 1)")}return a}_isHEX(e){return/(^#[0-9A-F]{3}$)|(^#[0-9A-F]{6}$)|(^#[0-9A-F]{8}$)/i.test(e)}_isRGB(e){return/rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\)/i.test(e)}_isValidColorName(e){return!(!e||void 0===this._cssColorNamesHEX[e.trim().toLowerCase()])}_isRGBA(e){return/rgba\((\d*.\d+|\d+)\s*,\s*(\d*.\d+|\d+)\s*,\s*(\d*.\d+|\d+)\s*,\s*(\d*.\d+|\d+)\)/i.test(e)}_isValidColor(e){return this._isHEX(e)||this._isRGB(e)||this._isRGBA(e)||this._isValidColorName(e)}_performSelect(e){const t=this;let r,a,o;t.opened?(r=t.$.menu.querySelector(".selected")||t.$.menu.querySelector(".color-sample"),a=r.getAttribute("data-label"),o=r.getAttribute("value")):a=o=t.$.input.value;const l=e||t.value,n=t.$.input.dataValue;t.set("value",t.$.colorSample.style.backgroundColor=t._formatValue(a)),t.$.input.dataValue=o,t.setAttribute("data-value",o),t._isValidColor(t.value)?(t.$colorSampleContainer.removeClass("no-color"),t.$.colorSample.setAttribute("aria-label",t.value)):(t.$colorSampleContainer.addClass("no-color"),t.$.colorSample.setAttribute("aria-label","No color")),r&&(r.classList.add("selected"),r.setAttribute("aria-current",!0)),a===l&&o===n||t.$.fireEvent("change",{value:o,label:a,oldValue:n,oldLabel:l}),t.close()}_process(e){const t=this;if(e||(e=[]),"string"==typeof(e=e.slice(0))&&(e=t.$.deserialize(e,"array")),t.matcher)e=e.filter(e=>t.matcher(e)>-1);else if(t.query){let r=[];for(let e in t._cssColorNamesHEX)t._matcher(e,!0)>-1&&r.push(t._cssColorNamesHEX[e]);if(r.length)e=r;else if(e.length||null!==t.dataSource&&void 0!==t.dataSource)e=e.filter(e=>t._matcher(e)>-1);else{let r=t._generateColors();"default"===t.displayMode&&(r=[].concat.apply([],r.map(e=>Object.values(e)[0]))),e=r.filter(e=>t._matcher(e)>-1)}}!e.length&&t.opened&&t.close(),t.query.length>0&&!e.length||!e.length&&null!==t.dataSource&&void 0!==t.dataSource||(t.query.length>0?t._render(e.slice(0,t.items)):t._render(e),t._open(),t._refreshMenu(),t.ensureVisible())}_matcher(e,t){const r=this.query;if(e=t?e.label||e:this._formatValue(e.label||e),!r)return-1;switch(this.queryMode){case"startsWith":return e.startsWith(r);case"startsWithIgnoreCase":return e.toLowerCase().startsWith(r.toLowerCase());case"doesNotContain":return e.indexOf(r)<0;case"doesNotContainIgnoreCase":return e.toLowerCase().indexOf(r.toLowerCase())<0;case"contains":return e.indexOf(r)>-1;default:case"containsIgnoreCase":return e.toLowerCase().indexOf(r.toLowerCase());case"equals":return 0===e.localeCompare(r);case"equalsIgnoreCase":return 0===e.toLowerCase().localeCompare(r.toLowerCase());case"endsWith":return e.endsWith(r);case"endsWithIgnoreCase":return e.toLowerCase().endsWith(r.toLowerCase())}}_render(e){const t=this;if(t.$.menu.innerHTML="",e.length)t.$.menu.appendChild(t._createColorGroup(t._createColorSamples(e)));else if((null===t.dataSource||void 0===t.dataSource)&&!t.query.length)if(e=t._generateColors(),"default"===t.displayMode){const e=t._generateColors();for(let r=0;r<e.length;r++){const a=Object.keys(e[r])[0],o=Object.values(e[r])[0],l=document.createElement("div");l.classList.add("standard-colors-label"),l.innerHTML=t.localize(a),l.id=t.id+a+"Label",t.$.menu.appendChild(l),t.$.menu.appendChild(t._createColorGroup(t._createColorSamples(o),a+"Label"))}}else t.$.menu.appendChild(t._createColorGroup(t._createColorSamples(e)))}_createColorGroup(e,t){const r=this,a=document.createElement("div");function o(){const e=r.$.menu.getElementsByClassName("selected");e[0]&&(e[0].removeAttribute("aria-current"),e[0].classList.remove("selected")),this.classList.add("selected"),this.setAttribute("aria-current",!0),r._setActiveDescendant(this)}a.classList.add("grid-samples-container"),a.setAttribute("role","menu"),t&&a.setAttribute("aria-labelledby",r.id+t);for(let t=0;t<e.length;t++){const l=e[t];a.appendChild(l),l.onmouseenter=o,l.onclick=o,l.onmouseleave=function(){this.removeAttribute("aria-current"),this.classList.remove("selected"),r._setActiveDescendant(null)}}return a}_createColorSamples(e){const t=this;t.value;let r=[];for(let a=0;a<e.length;a++){const o=e[a];let l=o,n=o;"object"==typeof o&&(l=o.label,n=o.value||l);const s=document.createElement("div");s.id=t.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),s.setAttribute("data-label",l),s.setAttribute("value",n),s.setAttribute("role","menuitem"),s.setAttribute("aria-label",l),s.classList.add("color-sample"),s.style.backgroundColor=l,"rgba(255, 255, 255, 0)"===l||"#FFFFFF00"===l||"transparent"===l?s.setAttribute("transparent",""):s.removeAttribute("transparent"),s.classList[l||n?"remove":"add"]("no-color"),r.push(s)}if(r.length>0&&!t.$.menu.querySelector(".selected")){const a=Math.max(0,e.indexOf(t.value));r[a].classList.add("selected"),r[a].setAttribute("aria-current",!0),t._setActiveDescendant(r[0])}return r}ensureVisible(){this.$.menu.querySelector(".color-sample.selected")}_next(){const e=this,t=e.$.menu.querySelector(".color-sample.selected");if(!t){const t=e.$.menu.querySelector(".color-sample");return t.classList.add("selected"),t.setAttribute("aria-current",!0),void e._setActiveDescendant(t)}t.removeAttribute("aria-current"),t.classList.remove("selected");let r=t.nextElementSibling;if(!r){let a=t.parentElement.nextElementSibling;for(;a;){if(a.classList.contains("grid-samples-container")){r=a.children[0];break}a=a.nextElementSibling}r||(r=e.$.menu.querySelector(".color-sample"))}r.classList.add("selected"),r.setAttribute("aria-current",!0),e._setActiveDescendant(r),e.ensureVisible()}_prev(){const e=this,t=e.$.menu.querySelector(".color-sample.selected");if(!t){const t=e.$.menu.querySelector(".color-sample");return t.classList.add("selected"),t.setAttribute("aria-current",!0),void e._setActiveDescendant(t)}t.removeAttribute("aria-current"),t.classList.remove("selected");let r=t.previousElementSibling;if(!r){let a=t.parentElement.previousElementSibling;for(;a;){if(a.classList.contains("grid-samples-container")){r=a.children[a.children.length-1];break}a=a.previousElementSibling}r||(r=e.$.menu.querySelector(".grid-samples-container:last-of-type .color-sample:last-of-type"))}r.classList.add("selected"),r.setAttribute("aria-current",!0),e._setActiveDescendant(r),e.ensureVisible()}_move(e){const t=this;if(t.opened){switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 37:case 38:e.preventDefault(),t[t.rightToLeft?"_next":"_prev"]();break;case 39:case 40:e.preventDefault(),t[t.rightToLeft?"_prev":"_next"]()}e.stopPropagation()}}_inputSelectHandler(){const e=this;e.readonly&&(e.$.input.selectionStart=e.$.input.selectionEnd)}_inputChangeHandler(e){e.stopPropagation(),this._performSelect()}_keyDownHandler(e){const t=this;t._suppressKeyPressRepeat=![37,38,39,40,9,13,27,16,17,18].includes(e.keyCode),e.shiftKey||e.ctrlKey||(e.altKey?"ArrowUp"===e.key?t.close():"ArrowDown"===e.key&&t.open():t._move(e))}_keyUpHandler(e){const t=this;if(!(e.shiftKey||e.altKey||e.ctrlKey))switch(e.keyCode){case 40:case 39:case 38:case 37:case 16:case 17:case 18:40===e.keyCode&&e.altKey&&t.open(),38===e.keyCode&&e.altKey&&t.close();break;case 9:case 13:if(!t.opened)return void(13===e.keyCode&&t.open());t._performSelect(),e.stopPropagation(),e.preventDefault();break;case 27:if(!t.opened)return;t.close(),e.stopPropagation(),e.preventDefault();break;default:if(t.readonly)return void(32!==e.keyCode||t.opened||t.open());t._lookup(e),!t.opened||e.ctrlKey||e.shiftKey||(e.stopPropagation(),e.preventDefault()),t.$.input.dataValue=t.$.input.value,t._isValidColor(t.value)||(t.$colorSampleContainer.addClass("no-color"),t.$.colorSample.setAttribute("aria-label","No color"),t.$.colorSample.style.backgroundColor="")}}propertyChangedHandler(e,t,r){const a=this;if("dropDownHeight"===e)a.$.scrollView.style.setProperty("--smart-input-drop-down-menu-height",a.dropDownHeight+"px");else if("opened"===e)a.opened=t,r?a.open():a.close();else if("placeholder"===e){if(a.readonly){const e=a.getAttribute("aria-label");if(e&&e!==t)return;r?a.setAttribute("aria-label",r):a.removeAttribute("aria-label")}}else"readonly"===e?a._setAriaRelations():"theme"===e?a.$.scrollView.setAttribute(e,r):"rightToLeft"===e?r?a.$.scrollView.setAttribute("right-to-left",""):a.$.scrollView.removeAttribute("right-to-left"):"valueFormat"===e?(a.value=a._formatValue(a.value),a.$.input.dataValue=a.value):"displayMode"===e?a.open():"value"===e?(a.$.input.value=r,a._performSelect(t)):super.propertyChangedHandler(e,t,r)}_createElement(){const e=this,t=document.createElement("div"),r=document.createElement("div");r.classList.add("smart-color-input-drop-down-menu","smart-color-panel"),r.setAttribute("theme",e.theme),e.$.scrollView=r,e.rightToLeft?e.$.scrollView.setAttribute("right-to-left",""):e.$.scrollView.removeAttribute("right-to-left"),e.$.menu=t,e.$.menu.classList.add("default-samples-container","grid-mode-container","smart-container"),e.$.scrollView.onclick=function(t){t.stopPropagation(),t.preventDefault(),e._performSelect(),e.$.input.focus()},e.classList.add("smart-drop-down-box","smart-color-picker"),e.value?(e.$colorSampleContainer.removeClass("no-color"),e.$.colorSample.setAttribute("aria-label",e.value)):(e.$colorSampleContainer.addClass("no-color"),e.$.colorSample.setAttribute("aria-label","No color")),e._cssColorNamesHEX={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},e._performSelect(e.value)}_setAriaRelations(){const e=this,t=e.getAttribute("aria-label");e.readonly?(e.setAttribute("role","button"),!t&&e.placeholder&&e.setAttribute("aria-label",e.placeholder),e.$.input.setAttribute("aria-hidden",!0),e.$.input.removeAttribute("aria-activedescendant"),e.$.input.removeAttribute("aria-controls"),e.$.dropDownButton.setAttribute("aria-hidden",!0)):(e.setAttribute("role","combobox"),t&&t===e.placeholder&&e.removeAttribute("aria-label"),e.$.input.setAttribute("role","searchbox"),e.$.input.removeAttribute("aria-hidden",!0),e.$.dropDownButton.removeAttribute("aria-hidden")),e.setAttribute("aria-expanded",e.opened),e.setAttribute("aria-haspopup","listbox"),e.$.scrollView.setAttribute("role","listbox")}})}});