(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(o,n){o.exports="/HTMLPractice/dist/img/logo-icon.svg"},133:function(o,n){o.exports="/HTMLPractice/dist/img/logo-brand.svg"},134:function(o,n){o.exports="/HTMLPractice/dist/img/twitter-icon.svg"},135:function(o,n){o.exports="/HTMLPractice/dist/img/facebook-icon.svg"},136:function(o,n){o.exports="/HTMLPractice/dist/img/instagram-icon.svg"},138:function(o,n,t){},139:function(o,n,t){},140:function(o,n,t){"use strict";(function(o){t(141);var n=t(132),e=t.n(n),s=t(133),i=t.n(s);o(".logo__icon").attr("src",e.a),o(".logo__brand").attr("src",i.a)}).call(this,t(1))},141:function(o,n,t){},142:function(o,n,t){"use strict";t(143),t(4)},143:function(o,n,t){},144:function(o,n,t){},145:function(o,n,t){"use strict";(function(o){t(146),t(0),t(149),t(150),t(151),t(152),t(3),t(155),t(156),t(157),t(158),t(159),t(160);o(".form").submit(function(n){o(this).find(".form__input").each(function(){""==this.value?(t=!0,this.classList.add("form__input_has_error")):(t=!1,this.classList.remove("form__input_has_error"))});var t=!1;o(this).find(".date__input").each(function(){""==this.value?(t=!0,this.classList.add("date__input_has_error")):(t=!1,this.classList.remove("date__input_has_error"))}),console.log(!1,t),t&&n.preventDefault()}),o(".checkbox[data-expandable]").click(function(){var n=o(this),t="false"===n.attr("data-opened")?"true":"false";n.attr("data-opened",t),"true"===t?(n.find(".checkbox__options").css("display","block"),n.find(".checkbox__arrow").css("transform","rotateZ(180deg)")):(n.find(".checkbox__options").css("display","none"),n.find(".checkbox__arrow").css("transform","rotateZ(0deg)"))})}).call(this,t(1))},146:function(o,n,t){},148:function(o,n,t){var e={"./af":5,"./af.js":5,"./ar":6,"./ar-dz":7,"./ar-dz.js":7,"./ar-kw":8,"./ar-kw.js":8,"./ar-ly":9,"./ar-ly.js":9,"./ar-ma":10,"./ar-ma.js":10,"./ar-sa":11,"./ar-sa.js":11,"./ar-tn":12,"./ar-tn.js":12,"./ar.js":6,"./az":13,"./az.js":13,"./be":14,"./be.js":14,"./bg":15,"./bg.js":15,"./bm":16,"./bm.js":16,"./bn":17,"./bn.js":17,"./bo":18,"./bo.js":18,"./br":19,"./br.js":19,"./bs":20,"./bs.js":20,"./ca":21,"./ca.js":21,"./cs":22,"./cs.js":22,"./cv":23,"./cv.js":23,"./cy":24,"./cy.js":24,"./da":25,"./da.js":25,"./de":26,"./de-at":27,"./de-at.js":27,"./de-ch":28,"./de-ch.js":28,"./de.js":26,"./dv":29,"./dv.js":29,"./el":30,"./el.js":30,"./en-SG":31,"./en-SG.js":31,"./en-au":32,"./en-au.js":32,"./en-ca":33,"./en-ca.js":33,"./en-gb":34,"./en-gb.js":34,"./en-ie":35,"./en-ie.js":35,"./en-il":36,"./en-il.js":36,"./en-nz":37,"./en-nz.js":37,"./eo":38,"./eo.js":38,"./es":39,"./es-do":40,"./es-do.js":40,"./es-us":41,"./es-us.js":41,"./es.js":39,"./et":42,"./et.js":42,"./eu":43,"./eu.js":43,"./fa":44,"./fa.js":44,"./fi":45,"./fi.js":45,"./fo":46,"./fo.js":46,"./fr":47,"./fr-ca":48,"./fr-ca.js":48,"./fr-ch":49,"./fr-ch.js":49,"./fr.js":47,"./fy":50,"./fy.js":50,"./ga":51,"./ga.js":51,"./gd":52,"./gd.js":52,"./gl":53,"./gl.js":53,"./gom-latn":54,"./gom-latn.js":54,"./gu":55,"./gu.js":55,"./he":56,"./he.js":56,"./hi":57,"./hi.js":57,"./hr":58,"./hr.js":58,"./hu":59,"./hu.js":59,"./hy-am":60,"./hy-am.js":60,"./id":61,"./id.js":61,"./is":62,"./is.js":62,"./it":63,"./it-ch":64,"./it-ch.js":64,"./it.js":63,"./ja":65,"./ja.js":65,"./jv":66,"./jv.js":66,"./ka":67,"./ka.js":67,"./kk":68,"./kk.js":68,"./km":69,"./km.js":69,"./kn":70,"./kn.js":70,"./ko":71,"./ko.js":71,"./ku":72,"./ku.js":72,"./ky":73,"./ky.js":73,"./lb":74,"./lb.js":74,"./lo":75,"./lo.js":75,"./lt":76,"./lt.js":76,"./lv":77,"./lv.js":77,"./me":78,"./me.js":78,"./mi":79,"./mi.js":79,"./mk":80,"./mk.js":80,"./ml":81,"./ml.js":81,"./mn":82,"./mn.js":82,"./mr":83,"./mr.js":83,"./ms":84,"./ms-my":85,"./ms-my.js":85,"./ms.js":84,"./mt":86,"./mt.js":86,"./my":87,"./my.js":87,"./nb":88,"./nb.js":88,"./ne":89,"./ne.js":89,"./nl":90,"./nl-be":91,"./nl-be.js":91,"./nl.js":90,"./nn":92,"./nn.js":92,"./pa-in":93,"./pa-in.js":93,"./pl":94,"./pl.js":94,"./pt":95,"./pt-br":96,"./pt-br.js":96,"./pt.js":95,"./ro":97,"./ro.js":97,"./ru":98,"./ru.js":98,"./sd":99,"./sd.js":99,"./se":100,"./se.js":100,"./si":101,"./si.js":101,"./sk":102,"./sk.js":102,"./sl":103,"./sl.js":103,"./sq":104,"./sq.js":104,"./sr":105,"./sr-cyrl":106,"./sr-cyrl.js":106,"./sr.js":105,"./ss":107,"./ss.js":107,"./sv":108,"./sv.js":108,"./sw":109,"./sw.js":109,"./ta":110,"./ta.js":110,"./te":111,"./te.js":111,"./tet":112,"./tet.js":112,"./tg":113,"./tg.js":113,"./th":114,"./th.js":114,"./tl-ph":115,"./tl-ph.js":115,"./tlh":116,"./tlh.js":116,"./tr":117,"./tr.js":117,"./tzl":118,"./tzl.js":118,"./tzm":119,"./tzm-latn":120,"./tzm-latn.js":120,"./tzm.js":119,"./ug-cn":121,"./ug-cn.js":121,"./uk":122,"./uk.js":122,"./ur":123,"./ur.js":123,"./uz":124,"./uz-latn":125,"./uz-latn.js":125,"./uz.js":124,"./vi":126,"./vi.js":126,"./x-pseudo":127,"./x-pseudo.js":127,"./yo":128,"./yo.js":128,"./zh-cn":129,"./zh-cn.js":129,"./zh-hk":130,"./zh-hk.js":130,"./zh-tw":131,"./zh-tw.js":131};function s(o){var n=i(o);return t(n)}function i(o){if(!t.o(e,o)){var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}return e[o]}s.keys=function(){return Object.keys(e)},s.resolve=i,o.exports=s,s.id=148},151:function(o,n,t){},154:function(o,n,t){},155:function(o,n,t){},156:function(o,n,t){},157:function(o,n,t){},158:function(o,n,t){},159:function(o,n,t){},160:function(o,n,t){},161:function(o,n,t){var e=t(162);e.keys().forEach(e)},162:function(o,n,t){var e={"./favicon.ico":163};function s(o){var n=i(o);return t(n)}function i(o){if(!t.o(e,o)){var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}return e[o]}s.keys=function(){return Object.keys(e)},s.resolve=i,o.exports=s,s.id=162},163:function(o,n,t){o.exports=t.p+"favicons/favicon.ico"},2:function(o,n,t){"use strict";(function(o){t(138),t(139),t(140),t(142),t(144),t(145),t(161);var n=t(134),e=t.n(n),s=t(135),i=t.n(s),d=t(136),r=t.n(d),a=[e.a,i.a,r.a],l=o(".content"),p=o(".header__content");o(".header__menu").click(function(){l.toggleClass("content_shifted"),p.toggleClass("header__content_shifted")}),window.addEventListener("touchmove",function(){l.removeClass("content_shifted"),p.removeClass("header__content_shifted")}),o(".footer__social-image").map(function(o,n){n.setAttribute("src",a[o])})}).call(this,t(1))},3:function(o,n,t){"use strict";(function(o,n){t(154);function e(){this.listeners=[]}function s(o,n){this.DropdownView=o,this.DropdownModel=n,this.init(),this.DropdownView.setPlaceholder(this.DropdownModel.updatePlaceholder())}function i(o){this.$container=o,this.$dropdown=void 0,this.onReducing=new e,this.onIncreasing=new e,this.onClosing=new e,this.onClosingAndOpening=new e,this.onClearing=new e}function d(o){this.params=o,this.valuePattern=o.valuePattern?o.valuePattern:"T",this.specClass=o.specClass?o.specClass:"",this.placeholder=o.placeholder?o.placeholder:"Parameters",this.TPlaceholderSpelling=o.TPlaceholderSpelling?o.TPlaceholderSpelling:function(){},this.SPlaceholderSpelling=o.SPlaceholderSpelling?o.SPlaceholderSpelling:function(){},this.dataSize=o.dataSize?o.dataSize:"short",this.options=o.options?o.options:[],this.clearBtn=null!=o.clearBtn&&o.clearBtn,this.applyBtn=null!=o.applyBtn&&o.applyBtn,this.minAmount=0;for(var n=0;n<this.options.length;n++)null!=this.options[n].value?this.minAmount+=this.options[n].value:this.options[n].value=0,null==this.options[n].min&&(this.options[n].min=0),null==this.options[n].max&&(this.options[n].max=-1);this.amount=this.minAmount}!function(o){o.fn.dropdown=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0;t<this.length;t++){var e=new d(n),r=new i(o(this[t]));this[t].controller=new s(r,e)}}}(o),e.prototype.add=function(o){this.listeners.push(o)},e.prototype.manage=function(){for(var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=0;n<this.listeners.length;n++)return this.listeners[n](o)},s.prototype.createDropdown=function(o){var t=n('<div style="height: 44px;" data-size="'+o.dataSize+'"></div>');this.DropdownView.$container.append(t),this.DropdownView.pos=t.position();var e='<div style="left: '+this.DropdownView.pos.left+"px; top: "+this.DropdownView.pos.top+'px;" class="dropdown dropdown_default"><div class="dropdown__head"><div class="dropdown__arrow"></div><div type="text" name="';if(null!=o.specClass?e+=o.specClass:e+="dropdown",e+='" class="dropdown__placeholder">',null!=o.placeholder&&(e+=o.placeholder),e+='</div></div><div class="dropdown__body">',null!=o.options)for(var s=0;s<o.options.length;s++)e+='<div class="dropdown__option"><div class="dropdown__title">'+o.options[s].title+'</div><div class="dropdown__buttons" data-index="'+s+'"><div class="dropdown__button dropdown__button_disabled" data-action="reduce">-</div><input readonly="readonly" class="dropdown__value" name="'+o.options[s].title+'" value="',null!=o.options[s].value?e+=o.options[s].value:e+="0",e+='"/><div class="dropdown__button" data-action="increase">+</div></div></div>';null==o.clearBtn&&null==o.applyBtn||(e+='<div class="dropdown__option">',null!=o.clearBtn&&o.clearBtn&&(e+='<div class="dropdown__clear">Очистить</div>'),null!=o.applyBtn&&o.applyBtn&&(e+='<div class="dropdown__apply">Применить</div>'),e+="</div>"),e+="</div></div>",this.DropdownView.$dropdown=n(e),this.DropdownView.$container.append(this.DropdownView.$dropdown),this.DropdownView.addListeners()},s.prototype.init=function(){this.createDropdown(this.DropdownModel.getParamData());var o=this;this.DropdownView.onReducing.add(function(n){o.reduceValue(n)}),this.DropdownView.onIncreasing.add(function(n){o.increaseValue(n)}),this.DropdownView.onClosing.add(function(){o.close()}),this.DropdownView.onClosingAndOpening.add(function(){o.closeAndOpen()}),this.DropdownView.onClearing.add(function(){o.clear()})},s.prototype.reduceValue=function(o){this.DropdownModel.amount--;var n=parseInt(o.parentNode.getAttribute("data-index"));this.DropdownModel.options[n].value--;var t=this.DropdownModel.options[n].value;o.parentNode.children[1].value=t,t==this.DropdownModel.options[n].min&&o.classList.add("dropdown__button_disabled"),o.parentNode.children[2].classList.remove("dropdown__button_disabled"),this.DropdownView.setPlaceholder(this.DropdownModel.updatePlaceholder())},s.prototype.increaseValue=function(o){this.DropdownModel.amount++;var n=parseInt(o.parentNode.getAttribute("data-index"));this.DropdownModel.options[n].value++;var t=this.DropdownModel.options[n].value;o.parentNode.children[1].value=t,t==this.DropdownModel.options[n].max&&o.classList.add("dropdown__button_disabled"),o.parentNode.children[0].classList.remove("dropdown__button_disabled"),this.DropdownView.setPlaceholder(this.DropdownModel.updatePlaceholder())},s.prototype.close=function(){this.DropdownView.$dropdown.removeClass("dropdown_extended").removeClass("dropdown_default").addClass("dropdown_default")},s.prototype.closeAndOpen=function(){this.DropdownView.$dropdown.toggleClass("dropdown_default"),this.DropdownView.$dropdown.toggleClass("dropdown_extended")},s.prototype.clear=function(){this.DropdownView.$dropdown.find(".dropdown__placeholder").val(this.DropdownModel.placeholder),this.DropdownView.$dropdown.find('.dropdown__button[data-action="reduce"]').removeClass("dropdown__button_disabled").addClass("dropdown__button_disabled"),this.DropdownView.$dropdown.find('.dropdown__button[data-action="increase"]').removeClass("dropdown__button_disabled");for(var o=this.DropdownView.$dropdown.find(".dropdown__value"),n=0;n<o.length;n++)o[n].value=this.DropdownModel.options[n].min,this.DropdownModel.options[n].value=this.DropdownModel.options[n].min;this.DropdownModel.amount=this.DropdownModel.minAmount},s.prototype.update=function(){this.DropdownModel.amount=0;for(var o=0;o<this.DropdownModel.options.length;o++)this.DropdownModel.amount+=this.DropdownModel.options[o].value;this.DropdownView.setPlaceholder(this.DropdownModel.updatePlaceholder())},s.prototype.setOptionValue=function(o,t){for(var e=0;e<this.DropdownModel.options.length;e++)if(this.DropdownModel.options[e].title==o){this.DropdownModel.options[e].value=t;var s=n(".dropdown__buttons")[e];s.children[1].value=t,t==this.DropdownModel.options[e].max?(s.children[0].classList.remove("dropdown__button_disabled"),s.children[2].classList.add("dropdown__button_disabled")):t>0&&s.children[0].classList.remove("dropdown__button_disabled");break}this.update()},i.prototype.addListeners=function(){var o=this;document.addEventListener("click",function(n){0==o.$dropdown.find(n.target).length&&o.onClosing.manage()}),this.$dropdown.children().eq(0).click(function(){o.onClosingAndOpening.manage()}),this.$dropdown.children().eq(1).click(function(t){if(o.$dropdown.find(".dropdown__apply")[0]!=t.target)if(o.$dropdown.find(".dropdown__clear")[0]!=t.target){if(!n(t.target).hasClass("dropdown__button_disabled"))for(var e=o.$dropdown.find('.dropdown__button[data-action="reduce"]'),s=o.$dropdown.find('.dropdown__button[data-action="increase"]'),i=0;i<e.length;i++)t.target==e[i]?o.onReducing.manage(t.target):t.target==s[i]&&o.onIncreasing.manage(t.target)}else o.onClearing.manage();else o.onClosingAndOpening.manage()})},i.prototype.setPlaceholder=function(o){this.$dropdown.find(".dropdown__placeholder").html(o)},d.prototype.getParamData=function(){return this.params},d.prototype.TPattern=function(){return this.amount+" "+this.TPlaceholderSpelling(this.amount)},d.prototype.SPattern=function(){for(var o="",n=0;n<this.options.length;n++)0!=this.options[n].value&&(o+=this.options[n].value+" "+this.SPlaceholderSpelling(n,this.options[n].value)+", ");return o.slice(0,-2)},d.prototype.updatePlaceholder=function(){if(0==this.amount)return this.placeholder;var o;switch(this.valuePattern){case"TS":o=this.TPattern()+", "+this.SPattern();break;case"ST":o=this.SPattern()+", "+this.TPattern();break;case"T":o=this.TPattern();break;case"S":o=this.SPattern()}return o}}).call(this,t(1),t(1))},4:function(o,n,t){}}]);