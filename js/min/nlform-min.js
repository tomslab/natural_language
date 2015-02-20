!function(t){"use strict";function e(t){this.el=t,this.overlay=n.querySelectorAll(".nl-overlay"),this.fields=[],this.fldOpen=-1,this._init()}function i(t,e,i,n){this.form=t,this.elOriginal=e,this.pos=n,this.type=i,this._create(),this._initEvents()}var n=t.document;String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),e.prototype={_init:function(){var t=this;Array.prototype.slice.call(this.el.querySelectorAll("select")).forEach(function(e,n){t.fldOpen++,t.fields.push(new i(t,e,"dropdown",t.fldOpen))});var e;for(e=0;e<this.overlay.length;e++)this.overlay[e].addEventListener("click",function(e){t._closeFlds()}),this.overlay[e].addEventListener("touchend",function(e){t._closeFlds()})},_closeFlds:function(){-1!==this.fldOpen&&this.fields[this.fldOpen].close()}},i.prototype={_create:function(){"dropdown"===this.type&&this._createDropDown()},_createDropDown:function(){var t=this;this.fld=n.createElement("div"),this.fld.className="nl-field nl-dd",this.toggle=n.createElement("a"),this.toggle.innerHTML=this.elOriginal.options[this.elOriginal.selectedIndex].innerHTML,this.toggle.className="nl-field-toggle",this.optionsList=n.createElement("ul");var e="";Array.prototype.slice.call(this.elOriginal.querySelectorAll("option")).forEach(function(i,n){e+=t.elOriginal.selectedIndex===n?'<li class="nl-dd-checked">'+i.innerHTML+"</li>":"<li>"+i.innerHTML+"</li>",t.elOriginal.selectedIndex===n&&(t.selectedIdx=n)}),this.optionsList.innerHTML=e,this.fld.appendChild(this.toggle),this.fld.appendChild(this.optionsList),this.elOriginal.parentNode.insertBefore(this.fld,this.elOriginal),this.elOriginal.style.display="none"},_createInput:function(){var t=this;this.fld=n.createElement("div"),this.fld.className="nl-field nl-ti-text",this.toggle=n.createElement("a"),this.toggle.innerHTML=this.elOriginal.getAttribute("placeholder"),this.toggle.className="nl-field-toggle",this.optionsList=n.createElement("ul"),this.getinput=n.createElement("input"),this.getinput.setAttribute("type","text"),this.getinput.setAttribute("placeholder",this.elOriginal.getAttribute("placeholder")),this.getinputWrapper=n.createElement("li"),this.getinputWrapper.className="nl-ti-input",this.inputsubmit=n.createElement("button"),this.inputsubmit.className="nl-field-go",this.inputsubmit.innerHTML="Go",this.getinputWrapper.appendChild(this.getinput),this.getinputWrapper.appendChild(this.inputsubmit),this.example=n.createElement("li"),this.example.className="nl-ti-example",this.example.innerHTML=this.elOriginal.getAttribute("data-subline"),this.optionsList.appendChild(this.getinputWrapper),this.optionsList.appendChild(this.example),this.fld.appendChild(this.toggle),this.fld.appendChild(this.optionsList),this.elOriginal.parentNode.insertBefore(this.fld,this.elOriginal),this.elOriginal.style.display="none"},_initEvents:function(){var t=this;if(this.toggle.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t._open()}),this.toggle.addEventListener("touchend",function(e){e.preventDefault(),e.stopPropagation(),t._open()}),"dropdown"===this.type){var e=Array.prototype.slice.call(this.optionsList.querySelectorAll("li"));e.forEach(function(i,n){i.addEventListener("click",function(n){n.preventDefault(),t.close(i,e.indexOf(i))}),i.addEventListener("touchend",function(n){n.preventDefault(),t.close(i,e.indexOf(i))})})}},_open:function(){if(this.open)return!1;this.open=!0,this.form.fldOpen=this.pos;var t=this;this.fld.className+=" nl-field-open"},close:function(t,e){if(!this.open)return!1;if(this.open=!1,this.form.fldOpen=-1,this.fld.className=this.fld.className.replace(/\b nl-field-open\b/,""),"dropdown"===this.type&&t){var i=this.optionsList.children[this.selectedIdx];i.className="",t.className="nl-dd-checked",this.toggle.innerHTML=t.innerHTML,this.selectedIdx=e,this.elOriginal.value=this.elOriginal.children[this.selectedIdx].value}}},t.NLForm=e}(window);