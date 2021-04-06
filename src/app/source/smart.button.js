
/* Smart UI v9.1.0 (2020-Dec) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({5:function(e,t){Smart("smart-button",class extends Smart.ContentElement{static get properties(){return{value:{type:"string"},name:{type:"string"},type:{value:"button",type:"string"},clickMode:{allowedValues:["hover","press","release","pressAndRelease"],type:"string",value:"release"}}}static get styleUrls(){return["smart.button.css"]}template(){return"<button class=\"smart-button smart-unselectable\" inner-h-t-m-l='[[innerHTML]]' id='button' type='[[type]]' name='[[name]]' value='[[value]]' disabled='[[disabled]]' role=\"presentation\"></button>"}refresh(){}static get listeners(){return{"button.down":"_downHandler","button.mouseenter":"_mouseEnterHandler","button.mouseleave":"_mouseLeaveHandler","button.touchend":"_touchEndHandler","button.click":"_clickHandler","button.up":"_upHandler",up:"_upHandler","button.focus":"_focusHandler","button.blur":"_blurHandler"}}focus(){const e=this;e.$.button?e.$.button.focus():HTMLElement.prototype.focus.call(e)}blur(){const e=this;e.$.button?e.$.button.blur():HTMLElement.prototype.blur.call(e)}_upHandler(e){e.stopPropagation(),this.$.setAttributeValue("active",!1)}_focusHandler(){this.$.setAttributeValue("focus",!0),this.$.fireEvent("focus")}_blurHandler(){this.$.setAttributeValue("focus",!1),this.$.fireEvent("blur")}_clickHandler(e){("release"!==this.clickMode&&"pressAndRelease"!==this.clickMode||this.readonly)&&(e.preventDefault(),e.stopPropagation())}_downHandler(e){const t=this;if(!(t.disabled||(t.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(t,e.pageX,e.pageY),t.$.setAttributeValue("active",!0),"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||t.readonly))){const n="buttons"in e?e.buttons:e.which;t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY})}}_mouseEnterHandler(e){const t=this;if(!t.readonly&&(t.$button.setAttributeValue("hover",!0),t.$.setAttributeValue("hover",!0),"hover"===t.clickMode)){const n="buttons"in e?e.buttons:e.which;t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY})}}_touchEndHandler(){const e=this;setTimeout((function(){e.$button.setAttributeValue("hover",!1),e.$.setAttributeValue("hover",!1)}),300)}_mouseLeaveHandler(){this.$button.setAttributeValue("hover",!1),this.$.setAttributeValue("hover",!1)}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const r=this;"disabled"===e?(r._setFocusable(),r.$button&&r.$button.setAttributeValue("hover",!1),r.$.setAttributeValue("hover",!1),r instanceof Smart.RepeatButton&&r._stopRepeat()):"unfocusable"===e&&r._setFocusable()}_setFocusable(){const e=this.$.button?this.$.button:this;if(this.disabled||this.unfocusable)return e.removeAttribute("tabindex"),void(e.tabIndex=-1);e.tabIndex=this.tabIndex>0?this.tabIndex:0}ready(){const e=this;super.ready(),e.setAttribute("role","button"),e._setFocusable(),e.enableShadowDOM&&e.$.hiddenInput&&e.appendChild(e.$.hiddenInput)}}),Smart("smart-repeat-button",class extends Smart.Button{static get properties(){return{delay:{value:50,type:"number"},initialDelay:{value:150,type:"number"}}}static get listeners(){return{"button.down":"_startRepeat","button.mouseenter":"_overriddenHandler","button.mouseleave":"_overriddenHandler","button.pointerenter":"_updateInBoundsFlag","button.pointerleave":"_updateInBoundsFlag","button.touchmove":"_touchmoveHandler","document.up":"_stopRepeat"}}_clickHandler(e){const t=this;("release"!==t.clickMode||t.preventDefaultClick||t.readonly||t.disabled)&&(e.preventDefault(),e.stopPropagation(),t.preventDefaultClick=!1)}_updateInBoundsFlag(e){const t=this;-1!==e.type.indexOf("leave")?(t._isPointerInBounds=!1,t.$button.setAttributeValue("hover",!1),t.$.setAttributeValue("hover",!1)):(t._isPointerInBounds=!0,t.$button.setAttributeValue("hover",!0),t.$.setAttributeValue("hover",!0)),1!==("buttons"in e?e.buttons:e.which)&&t._stopRepeat(e)}_startRepeat(e){const t=this;t.setAttribute("active",""),t._initialTimer||t.readonly||(t._initialTimer=setTimeout((function(){t._repeatTimer=setInterval(()=>{if(t._isPointerInBounds){const n="buttons"in e?e.buttons:e.which;t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY}),t.preventDefaultClick=!0}},t.delay)}),t.initialDelay))}_stopRepeat(e){const t=this;t.readonly||e&&("pointercancel"===e.type||e.originalEvent&&"pointercancel"===e.originalEvent.type)||(t.$.setAttributeValue("active",!1),t._repeatTimer&&(clearInterval(t._repeatTimer),t._repeatTimer=null),t._initialTimer&&(clearTimeout(t._initialTimer),t._initialTimer=null))}_touchmoveHandler(e){this.preventDefaultClick&&e.cancelable&&(e.preventDefault(),e.stopPropagation())}_overriddenHandler(){}}),Smart("smart-toggle-button",class extends Smart.Button{static get properties(){return{checked:{value:!1,type:"boolean?"},falseContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminate:{value:!1,type:"boolean"},trueContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateTemplate:{value:null,type:"any"},trueTemplate:{value:null,type:"any"},falseTemplate:{value:null,type:"any"},type:{value:"toggle",type:"string",defaultReflectToAttribute:!0,readonly:!0}}}static get listeners(){return{keydown:"_keyHandler",keyup:"_keyHandler",dragstart:"_dragStartHandler","button.click":"_buttonClickHandler","button.mouseenter":"_buttonMouseEnterHandler","button.mouseleave":"_buttonMouseLeaveHandler","document.up":"_documentUpHandler"}}ready(){super.ready(),this._setAriaState()}_setAriaState(){const e=this,t=e.checked;null!==t?e.setAttribute("aria-pressed",t):e.setAttribute("aria-pressed","mixed")}_buttonClickHandler(){}_buttonMouseLeaveHandler(){this.removeAttribute("hover")}_buttonMouseEnterHandler(){this.setAttribute("hover",""),this.disabled||this.readonly||"hover"!==this.clickMode||(this._changeCheckState("pointer"),this.focus(),this._updateHidenInputNameAndValue())}_documentUpHandler(e){this._pressed&&(this._pressed=!1,this.disabled||this.readonly||"press"===this.clickMode||"pointercancel"===e.originalEvent.type||(this._changeCheckState("pointer"),this.focus(),this._updateHidenInputNameAndValue()))}_downHandler(e){const t=this;t.disabled||t.readonly||(t.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(t,e.pageX,e.pageY),t._pressed=!0,"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||(t._changeCheckState("pointer"),t.$.fireEvent("click"),t._updateHidenInputNameAndValue()),"press"===t.clickMode&&(e.preventDefault(),e.stopPropagation()))}_dragStartHandler(e){e.preventDefault()}_keyHandler(e){const t=this;if(!0!==t.disabled&&!t.readonly&&32===e.keyCode){if("keydown"===e.type)return void e.preventDefault();if("none"===t.switchMode)return;t._changeCheckState("keyboard"),t._updateHidenInputNameAndValue()}}_changeCheckState(e){const t=this;let n=null;null===t.checked?t.checked=!0:(n=t.checked,t.checked=!t.checked),t._handleTextSelection(),t.$.fireEvent("change",{value:t.checked,oldValue:n,changeType:e}),t.checked?t.$.fireEvent("checkValue",{changeType:e}):t.$.fireEvent("uncheckValue",{changeType:e}),t._setAriaState()}_handleTextSelection(){const e=this;e.$.addClass("smart-unselectable"),e.timer&&clearTimeout(e.timer),e.timer=setTimeout(()=>e.$.removeClass("smart-unselectable"),500)}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const r=this;if("checked"===e)return r.$.fireEvent("change",{value:n,oldValue:t,changeType:"api"}),void r._setAriaState();switch(e){case"trueTemplate":r._handleTemplate(!0);break;case"falseTemplate":r._handleTemplate(!1);break;case"indeterminateTemplate":r._handleTemplate()}}_htmlBindOnInitialization(){this._bindContentProperty("trueContent","smart-true-content"),this._bindContentProperty("falseContent","smart-false-content"),this._bindContentProperty("indeterminateContent","smart-indeterminate-content")}_bindContentProperty(e,t){const n=this;if(!n.$[e+"Container"])return;let r=document.createElement("div");r.innerHTML=n.innerHTML;let a,i=r.getElementsByClassName(t);if(i.length>0)for(let e=0;e<i.length;e++)a=i[e];""===n[e]&&(n[e]=void 0===a?"":a.outerHTML),n.$[e+"Container"].innerHTML=n[e]}_updateContentProperties(){const e=this;function t(t){e.$[t+"Container"]&&(e[t]=e.$[t+"Container"].innerHTML)}t("trueContent"),t("falseContent"),t("indeterminateContent")}_updateHidenInputValue(){const e=this;if(!e.$.hiddenInput)return;let t;t=null===e.checked?"null":!1===e.checked?"off":e.value||"on",e.$.hiddenInput.setAttribute("value",t)}_updateHidenInputName(){if(!this.$.hiddenInput)return;let e=!1===this.checked?"":this.name||"";this.$.hiddenInput.setAttribute("name",e)}_updateHidenInputNameAndValue(){this._updateHidenInputName(),this._updateHidenInputValue()}_handleTemplate(e,t){const n=this;let r,a,i;if(!0===e?(r=n.trueTemplate,a=n.$.trueContentContainer,i=n.trueContent):!1===e?(r=n.falseTemplate,a=n.$.falseContentContainer,i=n.falseContent):(r=n.indeterminateTemplate,a=n.$.indeterminateContentContainer,i=n.indeterminateContent),t&&(a.innerHTML=i||""),null===r||!r)return;if("function"==typeof r)return void r(a,{value:i});if(!("content"in document.createElement("template")))return void n.error(n.localize("htmlTemplateNotSuported",{elementType:n.nodeName.toLowerCase()}));if(r=document.getElementById(r),null===r||!("content"in r))return void n.error(n.localize("invalidTemplate",{elementType:n.nodeName.toLowerCase(),property:"template"}));const o=r.content,l=o.childNodes.length,s=/{{\w+}}/g;let u,d=[];for(let e=0;e<l;e++)for(u=s.exec(o.childNodes[e].innerHTML);u;)d.push({childNodeIndex:e,bindingString:u[0]}),u=s.exec(o.childNodes[e].innerHTML);const c=d.length;let p,h,b=document.importNode(r.content,!0);for(let e=0;e<c;e++){p=b.childNodes[d[e].childNodeIndex],h=d.length;for(let t=0;t<h;t++)p.innerHTML=p.innerHTML.replace(d[e].bindingString,i)}a.innerHTML="";for(let e=0;e<b.childNodes.length;e++)b.childNodes[e].outerHTML&&(a.innerHTML+=b.childNodes[e].outerHTML)}})}});