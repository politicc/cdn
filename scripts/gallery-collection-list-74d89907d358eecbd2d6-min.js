webpackJsonp([43],{4066:function(r,s){YUI.add("squarespace-gallery-collection-list",function(c){var p=c.config.win,r=c.config.win.document,s=function(){function l(a,b){var e=c.Squarespace.Template.getTweakValue(a);b?e=parseFloat(e):"string"===typeof e&&(e=e.toLowerCase());"true"===e?e=!0:"false"===e&&(e=!1);return e}function n(a){var b=0;(a=a&&a.match(/(\d+):(\d+)/))&&3===a.length&&(b=a[1]/a[2]);return b}function x(){var a=b.gallery.one(".slide.sqs-active-slide"),g=a&&a.getAttribute("data-slide-id")||
null;if(g=b.gallery.one('.slide-meta[data-slide-id="'+g+'"]'))b.body.hasClass(d.crop)?g.setStyles({top:null,bottom:null,left:null,width:null}):(b.body.hasClass(d.circlesNav)?(g.setStyle("top",(parseFloat(a._node.clientHeight)-parseFloat(a.one("img")._node.clientHeight))/2),g.setStyle("bottom",null)):(g.setStyle("top",null),g.setStyle("bottom",(parseFloat(a._node.clientHeight)-parseFloat(a.one("img")._node.clientHeight))/2)),g.setStyles({left:a.one("img").getComputedStyle("left"),width:a.one("img")._node.clientWidth}))}
function r(a,b,e){var c,f;if(b&&(a=b.one(".title"),c=b.one(".description"),a&&a._node.innerHTML||c&&c._node.innerHTML))e?f=!0:(b.addClass(d.show),x());return f}function s(a){var g=b.gallery.one(".slide.sqs-active-slide"),e=g&&g.one("img"),c=g&&g.getAttribute("data-slide-id")||null,f;b.gallery.all(".slide-meta").removeClass(d.show);a&&(Modernizr&&!Modernizr.touch)&&b.gallery.addClass(d.interaction);y()?(b.gallery.addClass(d.iframe),b.gallery.removeClass(d.mouseenterleft),b.gallery.removeClass(d.mouseenterright)):
(b.gallery.removeClass(d.iframe),a&&"Gallery:currentIndexChange"===a.type&&(-1===a.direction?b.gallery.addClass(d.mouseenterleft):b.gallery.addClass(d.mouseenterright)));c&&(r(g,b.gallery.one('.slide-meta[data-slide-id="'+c+'"]')),e&&b.body.hasClass(d.circlesNav)&&(a=function(){f=Math.max(0,(parseFloat(g._node.clientHeight)-parseFloat(e._node.clientHeight))/2);b.circles.setStyle("bottom",f)},e.get("complete")?a():q.push(e.on("load",a))))}function f(){var a=l("gallery-loop"),g=l("gallery-auto-crop"),
e=l("gallery-autoplay"),f=l("gallery-transitions"),h=1E3*l("galleryAutoplaySpeed",!0),r=l("gallery-navigation"),v=l("gallery-aspect-ratio"),p=v.split(" ")[0],t=!w(),u=0,p=parseInt(v.split(":")[1],10)/parseInt(v.split(":")[0],10),v=b.gallery._node.clientWidth*p;b.gallery.removeClass(d.init);b.gallery.removeClass(d.ready);b.gallery.removeClass(d.interaction);b.gallery.removeClass(d.mouseenterleft);b.gallery.removeClass(d.mouseenterright);b.gallery.all(".slide-meta").removeClass(d.show);k&&(u=k.get("currentIndex"),
b.gallery.all(".sqs-disabled").removeClass("sqs-disabled"),b.gallery.all(".sqs-active-slide").removeClass("sqs-active-slide"),b.gallery.all(".slide, img").setStyles({visibility:null,left:null,top:null,overflow:null,width:null,height:null}),k.destroy());m&&(b.gallery.all(".thumbnail img[data-src]").each(function(a){a.setStyles({height:null,width:null,top:null,left:null})}),m.destroy());b.gallery.one(".slides-controls").setStyle("height",t?null:v);b.slideWrapper.setStyle("minHeight",t?null:v);k=new c.SQS.Gallery.Gallery2({container:".slides",
slides:".slide",currentIndex:u,elements:{next:".next-slide, .simple .next",previous:".previous-slide, .simple .previous",controls:".dots, .numbers, .circles",currentIndex:".current-index",totalSlides:".total-slides"},loop:a,autoplay:t?!1:e,autoplayOptions:{randomize:!1,timeout:h,pauseOnMouseover:[".thumbnail-wrapper"]},lazyLoad:!0,loaderOptions:{mode:t?"auto"===l("aspect-ratio")?"none":"fill":g?"fill":"fit"},design:t?"autocolumns":"stacked",designOptions:{transition:f,lightbox:t,clickBehavior:"auto",
gutter:l("gridSpacing",!0),columnWidth:l("gridSize",!0),aspectRatio:n(l("aspect-ratio"))},historyHash:!0});b.gallery.all(".arrow").each(function(a){a.setStyle("top",b.slideWrapper._node.clientHeight/2)});!t&&"thumbnails"===r&&(m=new c.SQS.Gallery.Gallery2({container:".thumbnail-wrapper",currentIndex:u,loaderOptions:{mode:"fill",load:!0},lazyLoad:!0,design:"strip"}),k.addChild(m));a=k.after("currentIndexChange",s);s();g=k.after("image-loaded",x);x();b.gallery.addClass(d.ready);q.push(a,g)}function p(a){"function"===
typeof a&&(window.throttleTimeout&&clearTimeout(window.throttleTimeout),window.throttleTimeout=setTimeout(a,750))}function z(a,c){var e=a._event.offsetX||a._event.layerX;b.gallery.addClass(d.interaction);if(a._event.target&&("img"===a._event.target.localName||"sqs-video-opaque"===a._event.target.className||a.target.hasClass("slide")))c?(b.gallery.removeClass(d.mouseenterleft),b.gallery.removeClass(d.mouseenterright)):e<=a._currentTarget.clientWidth/2?(b.gallery.removeClass(d.mouseenterright),b.gallery.addClass(d.mouseenterleft)):
(b.gallery.removeClass(d.mouseenterleft),b.gallery.addClass(d.mouseenterright))}function B(a){a=a.keyCode;(37===a||39===a&&w())&&b.gallery.addClass(d.interaction)}function y(){var a=b.gallery.one(".slide.sqs-active-slide");return a&&"video"===a.getAttribute("data-type")&&a.one("iframe")}function w(){return"grid"!==l("gallery-design")}function C(){var a=new c.Squarespace.ResizeEmitter({timeout:100});a.on("resize:end",function(){window.innerWidth!==A&&(A=window.innerWidth,p(f))});u.push(a);Modernizr&&
!Modernizr.touch&&q.push(c.on("mousemove",function(a){w()&&z(a,!1)},b.gallery.one(".slides-controls")),c.on("mouseleave",function(a){w()&&(z(a,!0),b.gallery.removeClass(d.iframe))},b.gallery.one(".slides-controls")),c.on("mouseenter",function(a){w()&&y()&&b.gallery.addClass(d.iframe)},b.gallery.one(".slides-controls")));q.push(c.on("keydown",B))}function h(a,b){q.push(c.Global.on("tweak:change",function(c){c.getName()===a&&"function"===typeof b&&(c=c.getValue(),"true"===c?c=!0:"false"===c&&(c=!1),
b(c))}))}function D(){h("gallery-loop",f);h("gallery-transitions",f);h("gallery-auto-crop",f);h("gallery-navigation",function(a){"Thumbnails"===a&&!b.gallery.one(".thumbnail-wrapper img[src]")&&f();x()});h("gallery-autoplay",function(a){k.set("autoplay",a)});h("gallery-aspect-ratio",function(){f()});h("galleryAutoplaySpeed",function(){p(f)});h("galleryInfoBackground",function(){s()});h("gallery-design",f);h("aspect-ratio",f);h("gridSpacing",f);h("gridSize",f);c.Global&&q.push(c.Global.on(["tweak:reset",
"tweak:close"],function(a){c.later(500,this,f)},this))}var b={body:c.one("body"),gallery:c.one(".sqs-system-gallery"),slideWrapper:c.one(".sqs-system-gallery").one(".gallery-wrapper"),slidesAndControls:c.one(".sqs-system-gallery").one(".slides-controls"),circles:c.one(".sqs-system-gallery").one(".circles")},d={show:"show",ready:"sqs-system-gallery-ready",interaction:"sqs-system-gallery-interaction",mouseenterleft:"sqs-system-gallery-hover-slides-left",mouseenterright:"sqs-system-gallery-hover-slides-right",
init:"sqs-system-gallery-init",circlesNav:"gallery-navigation-circles",crop:"gallery-auto-crop",iframe:"sqs-system-gallery-video-iframe"},k=null,m=null,A=window.innerWidth,q=[],u=[];return{init:function(){f();C();c.Lang.isValue(Static.SQUARESPACE_CONTEXT.authenticatedAccount)&&D()},destroy:function(){q=q.filter(function(a){a.detach();return!1});u=u.filter(function(a){"function"===typeof a.destroy&&a.destroy();return!1});k&&(k.get("container")&&k.get("container").hide(),"function"===typeof k.destroy&&
k.destroy());m&&(m.get("container")&&m.get("container").hide(),"function"===typeof m.destroy&&m.destroy())}}},n;p.Squarespace.onInitialize(c,function(){r.querySelector(".sqs-gallery-list")&&(n=new s,n.init())});p.Squarespace.onDestroy(c,function(){n&&(n.destroy&&"function"===typeof n.destroy&&n.destroy(),n=null)})},"1.0",{requires:"base node squarespace-dom-emitters-resize squarespace-gallery-ng squarespace-image-loader squarespace-public-api".split(" ")})},6736:function(r,s,c){c(4066)}},[6736]);
