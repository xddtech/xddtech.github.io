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

AppSbParams.beachWidth = 400;
AppSbParams.beachLength = 50;
AppSbParams.beachWidthSegments = 50;
AppSbParams.beachLengthSegments = 50;
AppSbParams.beachHeight = 0.5;
AppSbParams.beachShift = 10;
AppSbParams.waterWidth = 400;
AppSbParams.waterLength = 400;
AppSbParams.waterWidthSegments = 50;
AppSbParams.waterLengthSegments = 50;
AppSbParams.waterShift = AppSbParams.beachShift;
AppSbParams.duneWidth = 400;
AppSbParams.duneLength = 100;
AppSbParams.duneWidthSegments = 150;
AppSbParams.duneLengthSegments = 150;
AppSbParams.duneRoughness = 0.05;
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
        //var width = 100;
        //var length = 100;
        //var widthSegments = 50;
        //var lengthSegments = 50;
        this.beachGeometry = new THREE.PlaneGeometry(__WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachWidth, __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLength, __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachWidthSegments, __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLengthSegments);
        var xmiddle = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachWidth / 2;
        var r = 20;
        var y0;
        var ym = -__WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLength / 2;
        var dyLength = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLength / __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLengthSegments;
        var ymNext = ym + dyLength;
        for (var i = 0, l = this.beachGeometry.vertices.length; i < l; i++) {
            var xyz = this.beachGeometry.vertices[i];
            if (i === 0) {
                y0 = xyz.y;
            }
            var fy = 1 - (xyz.y - y0) / (ym - y0);
            /*
            if (Math.abs(xyz.x) < r) {
              var d = r - Math.sqrt(r*r - xyz.x * xyz.x);
              var f = 1 + 2*d/r;
              xyz.y = xyz.y - fy* d/f;
            } else {
              xyz.y = xyz.y - fy* r/3;
            }
            */
            xyz.z = xyz.z + fy * __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachHeight;
            if (xyz.y < ymNext) {
                var ry = (Math.random() - 0.5) * 2;
                xyz.y = xyz.y + ry;
            }
        }
        var loader = new THREE.TextureLoader();
        var texture = loader.load("assets/textures/beach-1.png");
        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.repeat.set(8, 1);
        texture.flipY = false;
        //texture.anisotropy = 16;
        //var lakeMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
        var beachParam = {
            //color: 0xaaaaaa,
            //shininess: 80,
            //specular: 0xffffff, 
            map: texture
        };
        var beachMaterial = new THREE.MeshPhongMaterial(beachParam);
        beachMaterial.opacity = 0.8;
        beachMaterial.transparent = true;
        //var mat = new THREE.MeshPhongMaterial();
        //mat.map = texture;
        var meshParams = {
            wireframe: true,
            overdraw: 1,
            color: 0x00ffff
        };
        //var beachMesh1 = THREE.SceneUtils.createMultiMaterialObject(this.lakeGeometry,
        //   [new THREE.MeshBasicMaterial(<THREE.MeshBasicMaterialParameters>meshParams),
        //            lakeMaterial
        //      ]);
        var beachMesh = THREE.SceneUtils.createMultiMaterialObject(this.beachGeometry, [beachMaterial]);
        beachMesh.rotation.x = -0.5 * Math.PI;
        beachMesh.position.z = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLength / 2 - __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachShift;
        appScene.add(beachMesh);
    };
    LakeMichigan.prototype.createDeepWater = function (appScene) {
        var width = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterWidth;
        var length = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterLength;
        var widthSegments = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterWidthSegments;
        var lengthSegments = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterLengthSegments;
        this.waterGeometry = new THREE.PlaneGeometry(width, length, widthSegments, lengthSegments);
        var waterGeometry = this.waterGeometry;
        var y0;
        for (var i = 0, l = waterGeometry.vertices.length; i < l; i++) {
            var xyz = waterGeometry.vertices[i];
            if (i === 0) {
                y0 = xyz.y;
                //console.info("createDeepWater-y0=" + y0);
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
        texture.repeat.set(4, 1);
        texture.flipY = false;
        var waterParam = {
            //color: 0xeeeeee,
            shininess: 1,
            specular: 0xffffff,
            map: texture
        };
        var waterMaterial = new THREE.MeshPhongMaterial(waterParam);
        var waterMesh = new THREE.Mesh(waterGeometry, waterMaterial);
        waterMesh.rotation.x = -0.5 * Math.PI;
        waterMesh.position.z = length / 2 + __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLength
            - 5 - __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachShift;
        waterMesh.position.y = -0.1;
        appScene.add(waterMesh);
    };
    LakeMichigan.prototype.animate = function (deltaTime, elapsedTime) {
        /*
        for ( var i = 0, l = this.waterGeometry.vertices.length; i < l; i ++ ) {
          this.waterGeometry.vertices[ i ].z = 0.1 * Math.sin( i / 5 + (elapsedTime + i ) / 7 );
          this.waterGeometry.vertices[ i ].y += 0.06 * Math.sin( i / 5 + (elapsedTime + i ) / 7 );
        }
        */
        var dWaterLen = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterLength / __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterLengthSegments;
        for (var kh = 0; kh <= __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterLengthSegments; kh++) {
            var waterLen = dWaterLen * kh;
            var fw = waterLen / __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterLengthSegments;
            for (var kw = 0; kw < __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterWidthSegments; kw++) {
                var kvetex = kw + kh * (__WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].waterLengthSegments + 1);
                var vetex = this.waterGeometry.vertices[kvetex];
                vetex.z = fw * 0.1 * Math.sin(kvetex / 15 + elapsedTime / 7);
                vetex.y += fw * 0.06 * Math.sin(kvetex / 15 + elapsedTime / 7);
            }
        }
        this.waterGeometry.verticesNeedUpdate = true;
        var dBeachLen = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLength / __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLengthSegments;
        var cutBeachLen = 0.60 * __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLength;
        for (var ih = 0; ih <= __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachLengthSegments; ih++) {
            var beachLen = dBeachLen * ih;
            if (beachLen > cutBeachLen) {
                for (var iw = 0; iw < __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachWidthSegments; iw++) {
                    var ivertex = iw + ih * (__WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].beachWidthSegments + 1);
                    var vert = this.beachGeometry.vertices[ivertex];
                    var iv = 0;
                    vert.z += 0.01 * Math.sin(iv / 5 + (elapsedTime + iv) / 7);
                    vert.y += 0.005 * Math.sin(iv / 5 + (elapsedTime + iv) / 7);
                }
            }
        }
        this.beachGeometry.verticesNeedUpdate = true;
    };
    return LakeMichigan;
}());

//# sourceMappingURL=lake-michigan.js.map

/***/ }),

/***/ "../../../../../src/app/components/sleeping-bear/sand-dune.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandDune; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appsb_params__ = __webpack_require__("../../../../../src/app/components/sleeping-bear/appsb-params.ts");
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />

var SandDune = (function () {
    function SandDune(wanderService) {
        this.wanderService = wanderService;
        this.duneWidth = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].duneWidth;
        this.duneLength = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].duneLength;
        this.widthSegments = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].duneWidthSegments;
        this.lengthSegments = __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].duneLengthSegments;
    }
    SandDune.prototype.create = function (appScene) {
        this.duneGeometry = new THREE.PlaneGeometry(this.duneWidth, this.duneLength, this.widthSegments, this.lengthSegments);
        //this.createCurve();
        this.createSlope();
        this.createCurveLater();
        this.createRoughness();
        this.extractMiddleLine();
        this.duneGeometry.normalsNeedUpdate = true;
        this.duneGeometry.verticesNeedUpdate = true;
        this.duneGeometry.computeFaceNormals();
        this.duneGeometry.computeVertexNormals();
        /*
        var meshParams = {
          wireframe: true,
          overdraw: 1,
          color: 0x00ffff
        };
        var duneMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111} );
        var duneMesh = THREE.SceneUtils.createMultiMaterialObject(this.duneGeometry,
           [new THREE.MeshBasicMaterial(<THREE.MeshBasicMaterialParameters>meshParams),
                    duneMaterial
              ]);
        */
        var loader = new THREE.TextureLoader();
        var texture = loader.load("assets/textures/sand.png");
        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.repeat.set(8, 2);
        texture.flipY = false;
        //texture.anisotropy = 16;
        //var sandMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
        var sandParam = {
            color: 0xaaaaaa,
            shininess: 100,
            specular: 0xffffff,
            map: texture
        };
        var sandMaterial = new THREE.MeshPhongMaterial(sandParam);
        //var sandMaterial = new THREE.MeshPhongMaterial( {map: texture } );
        //sandMaterial.opacity = 0.8;
        //sandMaterial.transparent = true;
        var duneMesh = THREE.SceneUtils.createMultiMaterialObject(this.duneGeometry, [sandMaterial]);
        //duneMesh.rotation.x = 0;
        duneMesh.position.y = this.duneLength / 2;
        appScene.add(duneMesh);
        try {
            this.createTexts(appScene);
        }
        catch (error) {
            console.error("sand-dune.ts: createTexts-" + error);
        }
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
    SandDune.prototype.createCurveLater = function () {
        var depthTop = 50;
        var depthBottom = 30;
        var xcenter = 0;
        var zreduce = 0.5;
        this.duneGeometry.computeFaceNormals();
        //this.duneGeometry.computeVertexNormals();
        var dLength = this.duneLength / this.lengthSegments;
        var iface = 0;
        for (var ih = 0; ih <= this.lengthSegments; ih++) {
            var yLen = ih * dLength;
            var yrate = 1 - ih / this.lengthSegments;
            var depth = depthTop * yrate + (1 - yrate) * depthBottom;
            var depth2 = depth * depth;
            for (var iw = 0; iw <= this.widthSegments; iw++) {
                var ivertex = iw + ih * (this.widthSegments + 1);
                var vert = this.duneGeometry.vertices[ivertex];
                var dx = vert.x - xcenter;
                var dx2 = dx * dx;
                var dz = 0;
                var face = this.duneGeometry.faces[iface];
                var normal = face.normal;
                if (dx2 <= depth2) {
                    var dn = Math.sqrt(depth2 - dx2);
                    var zf = (1 - dx2 / depth2) * zreduce;
                    dn = zf * dn;
                    var ny = -normal.y * dn;
                    var nz = -normal.z * dn;
                    vert.z = vert.z + nz;
                    vert.y = vert.y + ny;
                }
                // add ramdom
                var randomFactor = 1;
                var ry = randomFactor * Math.random();
                vert.y = vert.y + ry;
                if (iw < this.widthSegments) {
                    iface = iface + 1;
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
                var dz = dLength * Math.cos(slope) + zbase;
                //var dy = dLength * Math.sin(slope) + ybase;
                var dy = dLength * Math.sin(slope) + vertBase.y;
                vert.z = vert.z - dz;
                vert.y = dy;
                if (iw === this.widthSegments) {
                    zbase = dz;
                    ybase = dy;
                }
                /*
                var slope1 = Math.PI / 2 - slope;
                var l1 = Math.abs(vert.z * Math.tan(slope1));
                var za1 = vert.z / Math.cos(slope1);
                var zb1 = (dLength - l1) * Math.sin(slope1);
                var z1 = za1 + zb1;
                var y1 = (dLength - l1) * Math.cos(slope1);
                vert.y = vertBase.y - y1;
                //vert.z =  z1;
                */
            }
        }
    };
    SandDune.prototype.createRoughness = function () {
        for (var i = 0; i < this.duneGeometry.vertices.length; i++) {
            var vert = this.duneGeometry.vertices[i];
            var rz = Math.random() - 0.5;
            vert.z = vert.z + rz * __WEBPACK_IMPORTED_MODULE_0__appsb_params__["a" /* AppSbParams */].duneRoughness;
        }
    };
    SandDune.prototype.extractMiddleLine = function () {
        var indexLen = this.duneGeometry.vertices.length;
        for (var ih = 0; ih <= this.lengthSegments; ih++) {
            var iw = this.widthSegments / 2;
            var ivertex = indexLen - 1 - (iw + ih * (this.widthSegments + 1));
            var vert = this.duneGeometry.vertices[ivertex];
            SandDune.sandDuneCenterLine.push(vert);
            var faceLength = this.duneGeometry.faces.length;
            var iface = faceLength - (2 * iw + 2 * this.widthSegments * ih);
            var face = this.duneGeometry.faces[iface];
            //var normal = face.normal;
            //SandDune.sandDuneCenterNormal.push(normal);
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
    SandDune.prototype.createTexts = function (appScene) {
        var loader = new THREE.FontLoader();
        loader.load('assets/fonts/helvetiker_regular.typeface.json', function (response) {
            var font = response;
            var options = {
                size: 5,
                height: 5,
                weight: "normal",
                font: font,
                bevelThickness: 2,
                bevelSize: 0.5,
                bevelSegments: 3,
                bevelEnabled: true,
                curveSegments: 12,
                steps: 1
            };
            var textGeom = new THREE.TextGeometry("Sleeping Bear", options);
            var meshMaterial = new THREE.MeshPhongMaterial({
                specular: 0xffffff,
                color: 0x88aaee,
                shininess: 100
            });
            var text = THREE.SceneUtils.createMultiMaterialObject(textGeom, [meshMaterial]);
            text.position.z = -60;
            text.position.y = 50;
            text.position.x = -20;
            appScene.add(text);
        });
    };
    SandDune.prototype.createTextsOld = function (appScene) {
        //console.log(THREE.FontUtils.faces);
        var options = {
            size: 90,
            height: 90,
            weight: "normal",
            font: new THREE.Font("helvetiker"),
            bevelThickness: 2,
            bevelSize: 0.5,
            bevelSegments: 3,
            bevelEnabled: true,
            curveSegments: 12,
            steps: 1
        };
        //var fontName = "helvetiker";
        //var fontWeight = "regular";
        //var fontLoaded;
        //var loader = new THREE.FontLoader();
        //		loader.load( 'fonts/' + fontName + '_' + fontWeight + '.typeface.json', function ( response ) {
        //			fontLoaded = response;
        //		} );
        var textGeom = new THREE.TextGeometry("Sleeping", options);
        var meshMaterial = new THREE.MeshPhongMaterial({
            specular: 0xffffff,
            color: 0xeeffff,
            shininess: 100
        });
        var text = THREE.SceneUtils.createMultiMaterialObject(textGeom, [meshMaterial]);
        text.position.z = -30;
        text.position.y = 30;
        appScene.add(text);
    };
    return SandDune;
}());

SandDune.sandDuneCenterLine = new Array();
SandDune.sandDuneCenterNormal = new Array();
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
        this.addBackground();
        this.addShowObjects();
        this.addShowLights();
        SleepingBearShow.sbearControl.setSandDuneParams(__WEBPACK_IMPORTED_MODULE_1__sand_dune__["a" /* SandDune */].sandDuneCenterLine, __WEBPACK_IMPORTED_MODULE_1__sand_dune__["a" /* SandDune */].sandDuneCenterLine);
        SleepingBearShow_animate();
    };
    SleepingBearShow.prototype.addCameraAndControls = function () {
        var fov = 50;
        var aspect = this.getCameraAspect();
        var near = 0.1;
        var far = 1000;
        SleepingBearShow.appCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        var camera = SleepingBearShow.appCamera;
        camera.position.x = 150;
        //camera.position.y = 30 + 100;
        //camera.position.z = -200 + 150;
        camera.position.y = 15;
        camera.position.z = 50;
        var lookAt = new THREE.Vector3(-50, 0, 0);
        camera.lookAt(lookAt);
        //SleepingBearShow.appScene.position = lookAt;
        //camera.lookAt(SleepingBearShow.appScene.position);
        /*
        var camControls = new THREE.FirstPersonControls(camera, document);
            camControls.lookSpeed = 0; //0.4;
            camControls.movementSpeed = 20;
            camControls.noFly = false;
            camControls.lookVertical = false;
            camControls.constrainVertical = true;
            //camControls.verticalMin = 1.0;
            //camControls.verticalMax = 2.0;
            //camControls.lon = -150;
            //camControls.lat = 120;
        SleepingBearShow.appCamControl = camControls;
        */
        var sbearControl = new THREE.SleepingBearControls(camera, document);
        sbearControl.lookSpeed = 0.4;
        sbearControl.movementSpeed = 20;
        sbearControl.noFly = false;
        sbearControl.lookVertical = false;
        sbearControl.constrainVertical = true;
        sbearControl.target = lookAt;
        sbearControl.activeLook = true;
        sbearControl.init();
        //camControls.verticalMin = 1.0;
        //camControls.verticalMax = 2.0;
        //camControls.lon = -150;
        //camControls.lat = 120;
        SleepingBearShow.sbearControl = sbearControl;
        /*
        var trackballControls = new THREE.TrackballControls(camera, document);
            trackballControls.rotateSpeed = 1.0;
            trackballControls.zoomSpeed = 1.0;
            trackballControls.panSpeed = 1.0;
            //trackballControls.noZoom=false;
            //trackballControls.noPan=false;
            trackballControls.staticMoving = true;
            //trackballControls.dynamicDampingFactor=0.3;
        SleepingBearShow.trackballControl = trackballControls;
        */
    };
    SleepingBearShow.prototype.addShowObjects = function () {
        var axisHelper = new THREE.AxisHelper(200);
        //SleepingBearShow.appScene.add(axisHelper);
        SleepingBearShow.lakeMichigan = new __WEBPACK_IMPORTED_MODULE_0__lake_michigan__["a" /* LakeMichigan */](SleepingBearShow.wanderServiceRef);
        SleepingBearShow.lakeMichigan.create(SleepingBearShow.appScene);
        var sandDune = new __WEBPACK_IMPORTED_MODULE_1__sand_dune__["a" /* SandDune */](SleepingBearShow.wanderServiceRef);
        sandDune.create(SleepingBearShow.appScene);
    };
    SleepingBearShow.prototype.addBackground = function () {
        var loader = new THREE.TextureLoader();
        var texture = loader.load("assets/background-1.png");
        SleepingBearShow.appScene.background = texture;
        //SleepingBearShow.appScene.background = new THREE.Color( 0xcce0ff );
        //SleepingBearShow.appScene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
    };
    SleepingBearShow.prototype.addShowLights = function () {
        SleepingBearShow.appScene.add(new THREE.AmbientLight(0xffffff));
        var light = new THREE.DirectionalLight(0xdfebff, 1.75);
        light.position.set(50, 200, 100);
        light.position.multiplyScalar(1.3);
        light.castShadow = false;
        //SleepingBearShow.appScene.add( light );
        var light = new THREE.DirectionalLight(0xdfebff, 0.8);
        //light.position.multiplyScalar( 1 );
        light.position.set(-250, 510, 1150);
        light.castShadow = false;
        SleepingBearShow.appScene.add(light);
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
    SleepingBearShow.lakeMichigan.animate(deltaTime, elapsedTime);
    if (SleepingBearShow.appRender != null) {
        try {
            SleepingBearShow.appRender.render(SleepingBearShow.appScene, SleepingBearShow.appCamera);
            //SleepingBearShow.appCamControl.update(deltaTime);
            SleepingBearShow.sbearControl.update(deltaTime);
            //SleepingBearShow.trackballControl.update();
        }
        catch (error) {
            console.error("render error " + error);
        }
    }
    else {
        console.error("appRender is null");
    }
    //var p = SleepingBearShow.appScene.position;
    //var p = SleepingBearShow.appCamera.position;
    //console.log("cx=" + p.x + ", " + p.y + ", " + p.z);
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