webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<wander-navbar></wander-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'XDD Wandering';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer__ = __webpack_require__("../../../../../src/app/components/footer/footer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home__ = __webpack_require__("../../../../../src/app/components/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_about__ = __webpack_require__("../../../../../src/app/components/about/about.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_wander_land__ = __webpack_require__("../../../../../src/app/components/home/wander-land.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_wander_service__ = __webpack_require__("../../../../../src/app/services/wander-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar__["a" /* default */],
            __WEBPACK_IMPORTED_MODULE_8__components_footer_footer__["a" /* default */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home__["a" /* default */],
            __WEBPACK_IMPORTED_MODULE_10__components_about_about__["a" /* default */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_wander_land__["a" /* default */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home__["a" /* default */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__components_about_about__["a" /* default */] }
            ])
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* HashLocationStrategy */] },
            __WEBPACK_IMPORTED_MODULE_12__services_wander_service__["a" /* WanderService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <h1>{{aboutDescription}}</h1>\r\n  </div>\r\n  <div class=\"well\">\r\n    <div class=\"row text-info bg-info small\">\r\n      {{mainText}}\r\n    </div>\r\n  </div>\r\n\r\n  <wander-footer></wander-footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wander_service__ = __webpack_require__("../../../../../src/app/services/wander-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(wanderService) {
        var _this = this;
        this.wanderService = wanderService;
        this.aboutDescription = this.wanderService.getAboutDescription().text;
        //this.mainText = this.wanderService.getMainText();
        this.wanderService.getMainText().subscribe(function (data) {
            _this.mainText = data;
        });
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'about-page',
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */]],
        template: __webpack_require__("../../../../../src/app/components/about/about.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */]) === "function" && _a || Object])
], AboutComponent);
/* harmony default export */ __webpack_exports__["a"] = (AboutComponent);
var _a;
//# sourceMappingURL=about.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.html":
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<footer>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <p>Copyright &copy; XDD Tech 2017</p>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'wander-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.html")
    })
], FooterComponent);
/* harmony default export */ __webpack_exports__["a"] = (FooterComponent);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.html":
/***/ (function(module, exports) {

module.exports = "  <wander-land></wander-land>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        ;
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'wander-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.html")
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
/* harmony default export */ __webpack_exports__["a"] = (HomeComponent);
//# sourceMappingURL=home.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/wander-land.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".wander-land-margin {\r\n  margin: 0px;\r\n  border: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n#wander-land-show>canvas {\r\n  margin: 0px;\r\n  border: 0px;\r\n  padding: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/wander-land.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"wander-land-show\" class=\"container-fluid, wander-land-margin\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/wander-land.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wander_service__ = __webpack_require__("../../../../../src/app/services/wander-service.ts");
// /// <reference path="../../../../node_modules/@types/three/index.d.ts" />
// /// <reference path="../../../typings/three-local.d.ts" />
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var wanderLandShowElemntId = "wander-land-show";
function getShowElement() {
    return document.getElementById(wanderLandShowElemntId);
}
var WanderLandComponent = WanderLandComponent_1 = (function () {
    function WanderLandComponent(wanderService) {
        this.wanderService = wanderService;
        WanderLandComponent_1.wanderServiceRef = wanderService;
    }
    WanderLandComponent.prototype.ngAfterViewInit = function () {
        // hide scrollbar
        $("body").css("overflow", "hidden");
        if (getShowElement() != null) {
            console.log("get showElement inside ngAfterViewInit");
        }
        this.initSetup();
    };
    WanderLandComponent.prototype.ngOnDestroy = function () {
        // show scrollbar for other routes
        $("body").css("overflow", "auto");
    };
    WanderLandComponent.prototype.initSetup = function () {
        this.showElementReady().then(function () {
            if (WanderLandComponent_1.wanderLandRenderer == null) {
                WanderLandComponent_1.wanderLandRenderer = initWanderLandShow();
            }
            else {
                getShowElement().appendChild(WanderLandComponent_1.wanderLandRenderer.domElement);
                console.log("load the existing show renderer");
            }
        }).catch(function () {
            console.error("failed to get the show element");
        });
    };
    WanderLandComponent.prototype.showElementReady = function () {
        return new Promise(function (resolve, reject) {
            var checkTimes = 0;
            function checkShowElement() {
                if (getShowElement() == null) {
                    checkTimes++;
                    if (checkTimes > 10) {
                        reject();
                    }
                    setTimeout(checkShowElement, 200);
                    console.log("checking showElement: " + checkTimes + "...");
                }
                else {
                    console.log("showElement ready");
                    resolve();
                }
            }
            checkShowElement();
        });
    };
    return WanderLandComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('selectElem'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], WanderLandComponent.prototype, "el", void 0);
WanderLandComponent = WanderLandComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'wander-land',
        template: __webpack_require__("../../../../../src/app/components/home/wander-land.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/wander-land.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */]) === "function" && _b || Object])
], WanderLandComponent);
/* harmony default export */ __webpack_exports__["a"] = (WanderLandComponent);
function resizeWindow() {
    resizeShowWindow(WanderLandComponent.wanderLandRenderer);
}
function resizeShowWindow(renderer) {
    if (renderer == null) {
        return;
    }
    //var width = window.innerWidth;
    var width = $(document).innerWidth();
    var navbarHeight = WanderLandComponent.wanderServiceRef.getNavbarHeight();
    var height = window.innerHeight - navbarHeight;
    console.log("width=" + width + ", height=" + height + ", navbarHeight=" + navbarHeight);
    renderer.setSize(width, height);
}
function initWanderLandShow() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    resizeShowWindow(renderer);
    getShowElement().appendChild(renderer.domElement);
    window.addEventListener("resize", resizeWindow);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var loops = 0;
    var animate = function () {
        if (loops < 500) {
            requestAnimationFrame(animate);
        }
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        loops = loops + 1;
        renderer.render(scene, camera);
    };
    animate();
    return renderer;
}
var WanderLandComponent_1, _a, _b;
//# sourceMappingURL=wander-land.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "\r\n.navbar-margin-bottom-0 {\r\n  margin-bottom: 0px;\r\n  border-radius: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.html":
/***/ (function(module, exports) {

module.exports = "<nav #wanderNavbar class=\"navbar navbar-inverse navbar-margin-bottom-0\" role=\"navigation\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Wandering...</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink=\"/about\">About</a></li>\r\n      </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </div>\r\n  <!-- /.container -->\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wander_service__ = __webpack_require__("../../../../../src/app/services/wander-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(wanderService) {
        this.wanderService = wanderService;
    }
    NavbarComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */].navbarElement = this.navbarElement;
    };
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('wanderNavbar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], NavbarComponent.prototype, "navbarElement", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'wander-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_wander_service__["a" /* WanderService */]) === "function" && _b || Object])
], NavbarComponent);
/* harmony default export */ __webpack_exports__["a"] = (NavbarComponent);
var _a, _b;
//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ "../../../../../src/app/services/wander-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* unused harmony export NamedDescription */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WanderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NamedDescription = (function () {
    function NamedDescription(name, text) {
        this.name = name;
        this.text = text;
    }
    return NamedDescription;
}());

var WanderService = WanderService_1 = (function () {
    function WanderService(http) {
        this.http = http;
    }
    WanderService.prototype.getAboutDescription = function () {
        return new NamedDescription("about", descriptions.about);
    };
    WanderService.prototype.getMainText = function () {
        return this.http.get('/index.html')
            .map(function (response) { return response.text(); });
    };
    WanderService.prototype.getNavbarHeight = function () {
        if (WanderService_1.navbarElement == null) {
            return 0;
        }
        return WanderService_1.navbarElement.nativeElement.offsetHeight;
    };
    return WanderService;
}());
WanderService = WanderService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WanderService);

var descriptions = {
    "about": "Fun with Angular, Three.js and Typescript"
};
var WanderService_1, _a;
//# sourceMappingURL=wander-service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map