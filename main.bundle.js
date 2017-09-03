webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
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
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home__["a" /* default */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__components_about_about__["a" /* default */] }
            ])
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */] },
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sleeping_bear_sleeping_bear_show__ = __webpack_require__("../../../../../src/app/components/sleeping-bear/sleeping-bear-show.ts");
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
        //this.initSetup();
        this.initSleepingBear();
    };
    WanderLandComponent.prototype.ngOnDestroy = function () {
        // show scrollbar for other routes
        $("body").css("overflow", "auto");
    };
    WanderLandComponent.prototype.initSleepingBear = function () {
        var _this = this;
        this.showElementReady().then(function () {
            if (__WEBPACK_IMPORTED_MODULE_2__sleeping_bear_sleeping_bear_show__["a" /* SleepingBearShow */].appRender == null) {
                var sleepingBearShow = new __WEBPACK_IMPORTED_MODULE_2__sleeping_bear_sleeping_bear_show__["a" /* SleepingBearShow */](_this.wanderService);
                sleepingBearShow.create(getShowElement());
            }
            else {
                getShowElement().appendChild(__WEBPACK_IMPORTED_MODULE_2__sleeping_bear_sleeping_bear_show__["a" /* SleepingBearShow */].appRender.domElement);
                console.log("load the existing show renderer");
            }
        }).catch(function (error) {
            console.error("failed to init sleeping bear: " + error);
        });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('selectElem'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], WanderLandComponent.prototype, "el", void 0);
WanderLandComponent = WanderLandComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('wanderNavbar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], NavbarComponent.prototype, "navbarElement", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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

/***/ "../../../../../src/app/components/sleeping-bear/appsb-params.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSbParams; });
var AppSbParams = (function () {
    function AppSbParams() {
    }
    return AppSbParams;
}());

AppSbParams.beachHeight = 5;
//# sourceMappingURL=appsb-params.js.map

/***/ }),

/***/ "../../../../../src/app/components/sleeping-bear/lake-michigan.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LakeMichigan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appsb_params__ = __webpack_require__("../../../../../src/app/components/sleeping-bear/appsb-params.ts");
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />

var LakeMichigan = (function () {
    function LakeMichigan(wanderService) {
        this.wanderService = wanderService;
    }
    LakeMichigan.prototype.create = function (appScene) {
        this.createBeach(appScene);
        this.createDeepWater(appScene);
    };
    LakeMichigan.prototype.createBeach = function (appScene) {
        var width = 100;
        var length = 100;
        var widthSegments = 50;
        var lengthSegments = 50;
        this.lakeGeometry = new THREE.PlaneGeometry(width, length, widthSegments, lengthSegments);
        var xmiddle = width / 2;
        var r = 20;
        var y0;
        var ym = -length / 2;
        for (var i = 0, l = this.lakeGeometry.vertices.length; i < l; i++) {
            var xyz = this.lakeGeometry.vertices[i];
            if (i === 0) {
                y0 = xyz.y;
                console.info("y0=" + y0);
            }
            var fy = 1 - (xyz.y - y0) / (ym - y0);
            if (Math.abs(xyz.x) < r) {
                var d = r - Math.sqrt(r * r - xyz.x * xyz.x);
                var f = 1 + 2 * d / r;
                xyz.y = xyz.y - fy * d / f;
            }
            else {
                xyz.y = xyz.y - fy * r / 3;
            }
            xyz.z = xyz.z + fy * __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachHeight;
        }
        var loader = new THREE.TextureLoader();
        var texture = loader.load("assets/textures/beach-1.png");
        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.repeat.set(2, 1);
        texture.flipY = false;
        //texture.anisotropy = 16;
        //var lakeMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
        var lakeMaterial = new THREE.MeshPhongMaterial({ map: texture });
        lakeMaterial.opacity = 0.8;
        lakeMaterial.transparent = true;
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;
        var meshParams = {
            wireframe: true,
            overdraw: 1,
            color: 0x00ffff
        };
        var lakeMesh1 = THREE.SceneUtils.createMultiMaterialObject(this.lakeGeometry, [new THREE.MeshBasicMaterial(meshParams),
            lakeMaterial
        ]);
        var lakeMesh = THREE.SceneUtils.createMultiMaterialObject(this.lakeGeometry, [lakeMaterial]);
        lakeMesh.rotation.x = -0.5 * Math.PI;
        lakeMesh.position.z = length / 2;
        appScene.add(lakeMesh);
    };
    LakeMichigan.prototype.createDeepWater = function (appScene) {
        var width = 100;
        var length = 100;
        var widthSegments = 20;
        var lengthSegments = 10;
        var waterGeometry = new THREE.PlaneGeometry(width, length, widthSegments, lengthSegments);
        var y0;
        for (var i = 0, l = waterGeometry.vertices.length; i < l; i++) {
            var xyz = waterGeometry.vertices[i];
            if (i === 0) {
                y0 = xyz.y;
                console.info("createDeepWater-y0=" + y0);
            }
            if (xyz.y === y0) {
                var d = (0.5 - Math.random()) * 4;
                xyz.y = xyz.y + d;
            }
        }
        var loader = new THREE.TextureLoader();
        var texture = loader.load("assets/textures/lake-water-1.png");
        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.repeat.set(1, 1);
        texture.flipY = false;
        var waterMaterial = new THREE.MeshPhongMaterial({ map: texture });
        var waterMesh = new THREE.Mesh(waterGeometry, waterMaterial);
        waterMesh.rotation.x = -0.5 * Math.PI;
        waterMesh.position.z = length / 2 + 100 - 4;
        waterMesh.position.y = -0.1;
        appScene.add(waterMesh);
    };
    LakeMichigan.prototype.animate = function (deltaTime, elapsedTime) {
        for (var i = 0, l = this.lakeGeometry.vertices.length; i < l; i++) {
            this.lakeGeometry.vertices[i].y = 35 * Math.sin(i / 5 + (elapsedTime + i) / 7);
        }
        this.lakeGeometry.verticesNeedUpdate = true;
    };
    return LakeMichigan;
}());

//# sourceMappingURL=lake-michigan.js.map

/***/ }),

/***/ "../../../../../src/app/components/sleeping-bear/sand-dune.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandDune; });
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />
var SandDune = (function () {
    function SandDune(wanderService) {
        this.wanderService = wanderService;
        this.duneWidth = 100;
        this.duneLength = 100;
        this.widthSegments = 50;
        this.lengthSegments = 50;
    }
    SandDune.prototype.create = function (appScene) {
        this.duneGeometry = new THREE.PlaneGeometry(this.duneWidth, this.duneLength, this.widthSegments, this.lengthSegments);
        this.createCurve();
        this.createSlope();
        var meshParams = {
            wireframe: true,
            overdraw: 1,
            color: 0x00ffff
        };
        var duneMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111 });
        var duneMesh = THREE.SceneUtils.createMultiMaterialObject(this.duneGeometry, [new THREE.MeshBasicMaterial(meshParams),
            duneMaterial
        ]);
        //duneMesh.rotation.x = 0;
        duneMesh.position.y = this.duneLength / 2;
        appScene.add(duneMesh);
    };
    SandDune.prototype.createCurve = function () {
        var depthTop = 20;
        var depthBottom = 10;
        var xcenter = 0;
        var zreduce = 0.5;
        var dLength = this.duneLength / this.lengthSegments;
        for (var ih = 0; ih <= this.lengthSegments; ih++) {
            var y0 = this.duneLength / 2;
            var dy = y0 - ih * dLength;
            var yrate = 1 - ih / this.lengthSegments;
            var depth = depthTop * yrate + (1 - yrate) * depthBottom;
            var depth2 = depth * depth;
            for (var iw = 0; iw <= this.widthSegments; iw++) {
                var ivertex = iw + ih * (this.widthSegments + 1);
                var vert = this.duneGeometry.vertices[ivertex];
                var dx = vert.x - xcenter;
                var dx2 = dx * dx;
                var dz = 0;
                if (dx2 <= depth2) {
                    dz = Math.sqrt(depth2 - dx2);
                    var zf = (1 - dx2 / depth2) * zreduce;
                    dz = zf * dz;
                    vert.z = vert.z - dz;
                }
            }
        }
    };
    SandDune.prototype.createSlope = function () {
        var length = this.duneLength;
        var sections = [];
        var s0 = {
            start: 0,
            end: 10,
            slope1: 40 * Math.PI / 180,
            slope2: 60 * Math.PI / 180
        };
        var s1 = {
            start: 10,
            end: 50,
            slope1: 60 * Math.PI / 180,
            slope2: 60 * Math.PI / 180
        };
        var s2 = {
            start: 50,
            end: 70,
            slope1: 60 * Math.PI / 180,
            slope2: 40 * Math.PI / 180
        };
        var s3 = {
            start: 70,
            end: 90,
            slope1: 40 * Math.PI / 180,
            slope2: 20 * Math.PI / 180
        };
        var s4 = {
            start: 90,
            end: 95,
            slope1: 20 * Math.PI / 180,
            slope2: 10 * Math.PI / 180
        };
        var s5 = {
            start: 90,
            end: this.duneLength,
            slope1: 10 * Math.PI / 180,
            slope2: 5 * Math.PI / 180
        };
        sections.push(s0);
        sections.push(s1);
        sections.push(s2);
        sections.push(s3);
        sections.push(s4);
        sections.push(s5);
        var dLength = this.duneLength / this.lengthSegments;
        var indexLen = this.duneGeometry.vertices.length;
        console.log("vertex len=" + indexLen);
        var zbase = 0;
        var ybase = -this.duneLength / 2;
        for (var ih = 1; ih <= this.lengthSegments; ih++) {
            var iLength = ih * dLength;
            var section = this.getSection(sections, iLength);
            for (var iw = 0; iw <= this.widthSegments; iw++) {
                var ivertex = indexLen - 1 - (iw + ih * (this.widthSegments + 1));
                var ivertexBase = indexLen - 1 - (iw + (ih - 1) * (this.widthSegments + 1));
                var vert = this.duneGeometry.vertices[ivertex];
                if (ih === 1) {
                    console.log("vert: " + vert.x + ", " + vert.y + ", " + vert.z);
                }
                var vertBase = this.duneGeometry.vertices[ivertexBase];
                var slope = this.getSlope(section, iLength);
                //if (dy < 50) {
                //  slope = 60 * Math.PI / 180;
                //} else {
                //  slope = 30 * Math.PI / 180;
                //}
                var dz = dLength * Math.cos(slope) + zbase;
                var dy = dLength * Math.sin(slope) + ybase;
                vert.z = vert.z - dz;
                vert.y = dy;
                //vert.z = vert.z - dLength * Math.cos(slope);
                //vert.y = vertBase.y + dLength * Math.sin(slope);
                if (iw === this.widthSegments) {
                    zbase = dz;
                    ybase = dy;
                }
            }
        }
    };
    SandDune.prototype.getSection = function (sections, x) {
        for (var j = 0; j < sections.length; j++) {
            var s = sections[j];
            if (x >= s.start && x < s.end) {
                return s;
            }
        }
        return sections[sections.length - 1];
    };
    SandDune.prototype.getSlope = function (section, x) {
        var len = section.end - section.start;
        var d = x - section.start;
        var f = Math.abs(d / len);
        var slope = section.slope1 * (1 - f) + section.slope2 * f;
        return Math.abs(slope);
    };
    return SandDune;
}());

//# sourceMappingURL=sand-dune.js.map

/***/ }),

/***/ "../../../../../src/app/components/sleeping-bear/sleeping-bear-show.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepingBearShow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lake_michigan__ = __webpack_require__("../../../../../src/app/components/sleeping-bear/lake-michigan.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sand_dune__ = __webpack_require__("../../../../../src/app/components/sleeping-bear/sand-dune.ts");
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />


var SleepingBearShow = (function () {
    function SleepingBearShow(wanderService) {
        this.wanderService = wanderService;
        SleepingBearShow.wanderServiceRef = wanderService;
    }
    SleepingBearShow.prototype.create = function (showElement) {
        SleepingBearShow.appScene = new THREE.Scene();
        this.addCameraAndControls();
        SleepingBearShow.appRender = new THREE.WebGLRenderer({ antialias: true });
        SleepingBearShow.appRender.setClearColor(new THREE.Color(0xEEEEEE));
        SleepingBearShow_onWindowResize();
        showElement.appendChild(SleepingBearShow.appRender.domElement);
        window.addEventListener("resize", SleepingBearShow_onWindowResize);
        this.addShowObjects();
        this.addShowLights();
        SleepingBearShow_animate();
    };
    SleepingBearShow.prototype.addCameraAndControls = function () {
        var fov = 50;
        var aspect = this.getCameraAspect();
        var near = 0.1;
        var far = 1000;
        SleepingBearShow.appCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        var camera = SleepingBearShow.appCamera;
        camera.position.x = 0;
        camera.position.y = 30 + 100;
        camera.position.z = -200 + 150;
        camera.lookAt(SleepingBearShow.appScene.position);
        /*
        var camControls = new THREE.FirstPersonControls(camera, document);
            camControls.lookSpeed = 0.4;
            camControls.movementSpeed = 20;
            camControls.noFly = true;
            camControls.lookVertical = true;
            camControls.constrainVertical = true;
            camControls.verticalMin = 1.0;
            camControls.verticalMax = 2.0;
            camControls.lon = -150;
            camControls.lat = 120;
        SleepingBearShow.appCamControl = camControls;
        */
        var trackballControls = new THREE.TrackballControls(camera, document);
        trackballControls.rotateSpeed = 1.0;
        trackballControls.zoomSpeed = 1.0;
        trackballControls.panSpeed = 1.0;
        //trackballControls.noZoom=false;
        //trackballControls.noPan=false;
        trackballControls.staticMoving = true;
        //trackballControls.dynamicDampingFactor=0.3;
        SleepingBearShow.trackballControl = trackballControls;
    };
    SleepingBearShow.prototype.addShowObjects = function () {
        /*
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh(geometry, material);
        SleepingBearShow.appScene.add( cube );
        */
        var axisHelper = new THREE.AxisHelper(200);
        SleepingBearShow.appScene.add(axisHelper);
        SleepingBearShow.lakeMichigan = new __WEBPACK_IMPORTED_MODULE_0__lake_michigan__["a" /* LakeMichigan */](SleepingBearShow.wanderServiceRef);
        SleepingBearShow.lakeMichigan.create(SleepingBearShow.appScene);
        var sandDune = new __WEBPACK_IMPORTED_MODULE_1__sand_dune__["a" /* SandDune */](SleepingBearShow.wanderServiceRef);
        sandDune.create(SleepingBearShow.appScene);
    };
    SleepingBearShow.prototype.addShowLights = function () {
        SleepingBearShow.appScene.add(new THREE.AmbientLight(0xffffff));
        /*
        var light = new THREE.DirectionalLight( 0xdfebff, 1.75 );
        light.position.set( 50, 200, 100 );
        light.position.multiplyScalar( 1.3 );
        light.castShadow = false;
        //SleepingBearShow.appScene.add( light );
        */
        var light = new THREE.DirectionalLight(0xdfebff, 0.5);
        light.position.set(50, -200, 100);
        //light.position.multiplyScalar( 1.3 );
        light.castShadow = true;
        //SleepingBearShow.appScene.add( light );
    };
    SleepingBearShow.prototype.getCameraAspect = function () {
        var navbarHeight = this.wanderService.getNavbarHeight();
        var height = window.innerHeight - navbarHeight;
        return window.innerWidth / height;
    };
    return SleepingBearShow;
}());

SleepingBearShow.showClock = new THREE.Clock();
var SleepingBearShow_animate = function () {
    requestAnimationFrame(SleepingBearShow_animate);
    var deltaTime = SleepingBearShow.showClock.getDelta(), elapsedTime = SleepingBearShow.showClock.getElapsedTime() * 10;
    //SleepingBearShow.lakeMichigan.animate(deltaTime, elapsedTime);
    if (SleepingBearShow.appRender != null) {
        try {
            SleepingBearShow.appRender.render(SleepingBearShow.appScene, SleepingBearShow.appCamera);
            //SleepingBearShow.appCamControl.update(deltaTime);
            SleepingBearShow.trackballControl.update();
        }
        catch (error) {
            console.error("render error " + error);
        }
    }
    else {
        console.error("appRender is null");
    }
};
function SleepingBearShow_onWindowResize() {
    var navbarHeight = SleepingBearShow.wanderServiceRef.getNavbarHeight();
    var height = window.innerHeight - navbarHeight;
    SleepingBearShow.appRender.setSize(window.innerWidth, height);
}
//# sourceMappingURL=sleeping-bear-show.js.map

/***/ }),

/***/ "../../../../../src/app/services/wander-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NamedDescription */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WanderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map