webpackJsonp([37],{2211:function(f,g){YUI.add("squarespace-image-zoom",function(b){b.namespace("Squarespace");var d=b.Squarespace.ImageZoom=b.Base.create("image-zoom",b.Base,[],{initializer:function(){this._shouldInitialize()&&(this.get("host")?this._initializeZoom():console.warn("[squarespace-image-zoom]: Missing host attribute."))},destructor:function(){if(this._shouldInitialize()){var a=this.get("zoomedNode");a&&a.remove(!0);this.get("host").removeClass(d.CSS_PREFIX).removeClass(d.CSS_PREFIX+"--behavior-"+
this.get("behavior"));this.get("dropzone").setStyle("position","").removeClass(d.CSS_PREFIX+"-dropzone");this._zoomTriggerEvent&&this._zoomTriggerEvent.detach();this._mouseMoveEvent&&this._mouseMoveEvent.detach();this._mouseOutEvent&&this._mouseOutEvent.detach();this._resizeEvent&&this._resizeEvent.detach();this._resizeEvent=this._mouseOutEvent=this._mouseMoveEvent=this._zoomTriggerEvent=null}},_bindUI:function(){var a=this.get("host");this._zoomTriggerEvent=a.on(this.get("behavior"),this._toggleZoom,
this);this._mouseMoveEvent=a.on("mousemove",this._trackMovement,this);this._mouseOutEvent=a.on("mouseout",this._zoomOut,this);this._resizeEvent=b.one(window).on("resize",this._refresh,this)},_shouldInitialize:function(){return!b.UA.mobile&&Modernizr.csstransforms},_initializeZoom:function(){var a=this.get("host"),b=a.one("img"),c=this.get("dropzone");a.addClass(d.CSS_PREFIX);a.addClass(d.CSS_PREFIX+"--behavior-"+this.get("behavior"));c.addClass(d.CSS_PREFIX+"-dropzone");"static"===c.getStyle("position")&&
c.setStyle("position","relative");if(b.getAttribute("src"))this._appendZoomedNode(),this._bindUI();else b.once("load",function(){this._appendZoomedNode();this._bindUI()},this)},_appendZoomedNode:function(){var a=this.get("host").one("img"),e=a.getAttribute("data-src");if(!e)return console.warn("[squarespace-image-zoom]: Host image did not load properly; missing data-src."),null;var c=a.getAttribute("data-image-dimensions");c||(c=a.get("clientWidth")+"x"+a.get("clientHeight"));(a=a.getAttribute("data-image-focal-point"))||
(a="0.5,0.5");e=b.Node.create('<div class="'+d.CSS_PREFIX+'-duplicate"><img src="'+e+"?format="+this._getSquarespaceSizeForWidth()+'" data-image-dimensions="'+c+'" data-image-focal-point="'+a+'"></div>');e.setStyle("transform","scale("+this.get("zoom")+")");e.one("img").plug(b.Squarespace.Loader2,{load:!0,mode:"fill"});this.set("zoomedNode",e);this.get("dropzone").append(e)},_refresh:function(){var a=this.get("host").one("img").getAttribute("data-src"),b=this.get("zoomedNode").one("img");b.setAttribute("src",
a+"?format="+this._getSquarespaceSizeForWidth());b.fire("refresh")},_toggleZoom:function(a){this.get("_isZoomedIn")?this._zoomOut():this._zoomIn(a);a.stopPropagation()},_zoomIn:function(a){this.get("host").addClass("is-zoomed");this.set("_isZoomedIn",!0);this._trackMovement(a)},_zoomOut:function(){this.get("host").removeClass("is-zoomed");this.set("_isZoomedIn",!1)},_trackMovement:function(a){if(this.get("_isZoomedIn")){var b=Math.max(100*((a.pageX-this.get("host").getX())/this.get("host").get("clientWidth")),
0);a=Math.max(100*((a.pageY-this.get("host").getY())/this.get("host").get("clientHeight")),0);this.get("zoomedNode").setStyle("transformOrigin",b+"% "+a+"%")}},_getSquarespaceSizeForWidth:function(){var a=this.get("host").one("img").get("clientWidth");return b.Squarespace.Rendering.getSquarespaceSizeForWidth(a*this.get("zoom"))}},{CSS_PREFIX:"sqs-image-zoom",ATTRS:{host:{value:null,validator:function(a){a=b.one(a);return b.instanceOf(a,b.Node)&&a.one("img")&&2>a.all("img").size()},writeOnce:!0},dropzone:{valueFn:function(){return this.get("host")},
validator:function(a){return b.instanceOf(b.one(a),b.Node)},writeOnce:!0},behavior:{value:"hover",validator:function(a){return"hover"!==a&&"click"!==a?(console.warn("[squarespace-image-zoom]: Not a valid behavior, defaulting to hover."),!1):!0},writeOnce:!0},zoom:{value:1.5,validator:function(a){("number"!==typeof a||1>=a||5<a)&&console.warn("[squarespace-image-zoom]: Not a valid zoom value, defaulting to 1.5.");return!0},writeOnce:!0},_isZoomedIn:{value:!1}}})},"1.0",{requires:"base event node squarespace-image-loader squarespace-rendering yui-base".split(" ")})},
4064:function(f,g,b){var d=b(6);YUI.add("squarespace-products-collection-list-v2",function(a){a.namespace("Squarespace.SystemCollections.Products").ListV2=a.Base.create("systemCollectionsProductsListV2",a.Base,[],{initializer:function(){this._loadImages();this._bindUI();this._syncUI()},destructor:function(){this._resizeEvent&&this._resizeEvent.detach();this._tweakChangeEvent&&this._tweakChangeEvent.detach();this._tweakResetEvent&&this._tweakResetEvent.detach();a.Array.each(this._onImageLoadEvents,
function(a){a.detach()});this._onImageLoadEvents=this._tweakResetEvent=this._tweakChangeEvent=this._resizeEvent=null},_loadImages:function(){this._onImageLoadEvents=[];this.get("images").each(function(c){c.plug(a.Squarespace.Loader2,{load:!0,mode:"fill"});this._onImageLoadEvents.push(c.on("load",function(){c.hasClass("ProductList-image--primary")&&c.ancestor(".ProductList-item").addClass("image-is-loaded")}))},this)},_bindUI:function(){this._resizeEvent=a.on("resize",function(){this._syncUI()},a.config.win,
this);this._tweakChangeEvent=a.Global.on("tweak:change",this._tweakChangeHandler,this);this._tweakResetEvent=a.Global.on("tweak:reset",this._syncUI,this);if(window.SQUARESPACE_LOGIN&&window.SQUARESPACE_LOGIN.isLoggedIn())a.on("beforeunload",function(){this.destroy(!0)},this)},_syncUI:function(){this._adjustSubPixelValues();this.get("images").each(function(a){a.fire("refresh")})},_adjustSubPixelValues:function(){var a=this.get("host").all(".ProductList-item");a&&(a.setStyle("width",""),a.setStyle("width",
Math.floor(parseInt(a.getStyle("width")[0],10))+"px"))},_tweakChangeHandler:function(a){var b=a.getName();a=a.getValue();"tweak-product-list-image-aspect-ratio"===b||"tweak-product-list-item-spacing"===b||"tweak-product-list-filter-display"===b||"tweak-product-list-filter-width"===b?this._syncUI():"tweak-product-list-items-per-row"===b?(this._previewTweakChangeItemsPerRow(),this._syncUI()):"tweak-product-list-item-hover-behavior"===b&&a===d("Show Alternate Image")&&(this._loadImages(),this._previewTweakChangeItemHoverBehavior())},
_previewTweakChangeItemsPerRow:function(){var b=parseInt(a.Squarespace.Template.getTweakValue("tweak-product-list-items-per-row"),10);this.get("host").all(".ProductList-item").setStyle("clear","none");this.get("host").all(".ProductList-item:nth-child("+b+"n+1)").setStyle("clear","left");this.get("host").one(".ProductList-grid").setAttribute("data-items-per-row",b)},_previewTweakChangeItemHoverBehavior:function(){var b=this.get("host").one(".ProductList-image--alt"),d=function(){b.setStyle("opacity",
1);a.later(1E3,this,function(){b.setStyle("opacity","")})};if(b.hasClass("loaded"))d();else b.once("load",function(){d()})}},{ATTRS:{host:{value:null,validator:function(b){b=a.one(b);return a.instanceOf(b,a.Node)},writeOnce:!0},images:{getter:function(){return a.one(".tweak-product-list-item-hover-behavior-show-alternate-image")&&a.one(".tweak-product-list-meta-position-under")&&!a.UA.mobile?this.get("host").all(".ProductList-image[data-src]"):this.get("host").all(".ProductList-image--primary[data-src]")}}}});
var b;a.config.win.Squarespace.onInitialize(a,function(){b=[];a.all(".ProductList.products-collection-v2").each(function(c){var d=a.config.win.Static.POLITICC_CONTEXT.tweakJSON["tweak-product-list-items-per-row"];c.one(".ProductList-grid").getDOMNode().dataset.itemsPerRow=d;b.push(new a.Squarespace.SystemCollections.Products.ListV2({host:c}))})});a.config.win.Squarespace.onDestroy(a,function(){b.forEach(function(a){a.destroy()});b=null})},"1.0",{requires:"base node squarespace-beforeunload squarespace-image-loader squarespace-image-zoom squarespace-public-api".split(" ")})},
6733:function(f,g,b){b(4064);b(2211)}},[6733]);
