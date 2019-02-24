(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<neuron-navbar></neuron-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Neurons View';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.global.ts":
/*!*******************************!*\
  !*** ./src/app/app.global.ts ***!
  \*******************************/
/*! exports provided: AppGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGlobal", function() { return AppGlobal; });
var AppGlobal = /** @class */ (function () {
    function AppGlobal() {
    }
    return AppGlobal;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar */ "./src/app/components/navbar/navbar.ts");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer */ "./src/app/components/footer/footer.ts");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home */ "./src/app/components/home/home.ts");
/* harmony import */ var _components_vr_vr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/vr/vr */ "./src/app/components/vr/vr.ts");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about */ "./src/app/components/about/about.ts");
/* harmony import */ var _components_neuron_model_model_source__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/neuron-model/model-source */ "./src/app/components/neuron-model/model-source.ts");
/* harmony import */ var _components_home_neurons_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/neurons-view */ "./src/app/components/home/neurons-view.ts");
/* harmony import */ var _services_neuron_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/neuron-service */ "./src/app/services/neuron-service.ts");
/* harmony import */ var _services_wander_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/wander-service */ "./src/app/services/wander-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_8__["default"],
                _components_footer_footer__WEBPACK_IMPORTED_MODULE_9__["default"],
                _components_home_home__WEBPACK_IMPORTED_MODULE_10__["default"],
                _components_vr_vr__WEBPACK_IMPORTED_MODULE_11__["default"],
                _components_about_about__WEBPACK_IMPORTED_MODULE_12__["default"],
                _components_neuron_model_model_source__WEBPACK_IMPORTED_MODULE_13__["default"],
                _components_home_neurons_view__WEBPACK_IMPORTED_MODULE_14__["default"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _components_home_home__WEBPACK_IMPORTED_MODULE_10__["default"] },
                    { path: 'vr', component: _components_vr_vr__WEBPACK_IMPORTED_MODULE_11__["default"] },
                    { path: 'model', component: _components_neuron_model_model_source__WEBPACK_IMPORTED_MODULE_13__["default"] },
                    { path: 'about', component: _components_about_about__WEBPACK_IMPORTED_MODULE_12__["default"] }
                ])
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] },
                _services_neuron_service__WEBPACK_IMPORTED_MODULE_15__["NeuronService"],
                _services_wander_service__WEBPACK_IMPORTED_MODULE_16__["WanderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.html":
/*!*********************************************!*\
  !*** ./src/app/components/about/about.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <h1>{{aboutDescription}}</h1>\r\n  </div>\r\n  <div class=\"well\">\r\n    <div class=\"row text-info bg-info small\">\r\n      {{mainText}}\r\n    </div>\r\n  </div>\r\n\r\n  <wander-footer></wander-footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/about/about.ts":
/*!*******************************************!*\
  !*** ./src/app/components/about/about.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_neuron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/neuron-service */ "./src/app/services/neuron-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(neuronService) {
        var _this = this;
        this.neuronService = neuronService;
        this.aboutDescription = this.neuronService.getAboutDescription().text;
        this.neuronService.getMainText().subscribe(function (data) {
            console.info('data=' + data);
            _this.mainText = data;
        });
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about-page',
            providers: [_services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"]],
            template: __webpack_require__(/*! ./about.html */ "./src/app/components/about/about.html")
        }),
        __metadata("design:paramtypes", [_services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"]])
    ], AboutComponent);
    return AboutComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (AboutComponent);


/***/ }),

/***/ "./src/app/components/footer/footer.html":
/*!***********************************************!*\
  !*** ./src/app/components/footer/footer.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<footer>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <p>Copyright &copy; XDD Tech 2017</p>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.ts":
/*!*********************************************!*\
  !*** ./src/app/components/footer/footer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wander-footer',
            template: __webpack_require__(/*! ./footer.html */ "./src/app/components/footer/footer.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (FooterComponent);


/***/ }),

/***/ "./src/app/components/home/home.html":
/*!*******************************************!*\
  !*** ./src/app/components/home/home.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <neurons-view></neurons-view>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.ts":
/*!*****************************************!*\
  !*** ./src/app/components/home/home.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        ;
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.html */ "./src/app/components/home/home.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (HomeComponent);


/***/ }),

/***/ "./src/app/components/home/neurons-view.css":
/*!**************************************************!*\
  !*** ./src/app/components/home/neurons-view.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".neurons-view-margin {\r\n    margin: 0px;\r\n    border: 0px;\r\n    padding: 0px;\r\n  }\r\n  \r\n  #neurons-view>canvas {\r\n    margin: 0px;\r\n    border: 0px;\r\n    padding: 0px;\r\n  }"

/***/ }),

/***/ "./src/app/components/home/neurons-view.html":
/*!***************************************************!*\
  !*** ./src/app/components/home/neurons-view.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"neuron-view-div\" class=\"container-fluid, wander-land-margin\"></div>"

/***/ }),

/***/ "./src/app/components/home/neurons-view.ts":
/*!*************************************************!*\
  !*** ./src/app/components/home/neurons-view.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_neuron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/neuron-service */ "./src/app/services/neuron-service.ts");
/* harmony import */ var _neuron_model_neuron_model_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neuron-model/neuron-model-view */ "./src/app/components/neuron-model/neuron-model-view.ts");
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var neuronViewDiv = "neuron-view-div";
function getNeuronViewElement() {
    return document.getElementById(neuronViewDiv);
}
var NeuronViewComponent = /** @class */ (function () {
    function NeuronViewComponent(neuronService) {
        this.neuronService = neuronService;
        NeuronViewComponent_1.neuronServiceRef = neuronService;
    }
    NeuronViewComponent_1 = NeuronViewComponent;
    NeuronViewComponent.prototype.ngAfterViewInit = function () {
        // hide scrollbar
        $("body").css("overflow", "hidden");
        if (getNeuronViewElement() != null) {
            console.log("get neuronViewElement inside ngAfterViewInit");
        }
        this.initNeuronModelShow();
    };
    NeuronViewComponent.prototype.ngOnDestroy = function () {
        // show scrollbar for other routes
        $("body").css("overflow", "auto");
    };
    NeuronViewComponent.prototype.initNeuronModelShow = function () {
        var _this = this;
        this.showElementReady().then(function () {
            if (_neuron_model_neuron_model_view__WEBPACK_IMPORTED_MODULE_2__["NeuronModelView"].appRender == null) {
                var modelView = new _neuron_model_neuron_model_view__WEBPACK_IMPORTED_MODULE_2__["NeuronModelView"](_this.neuronService);
                modelView.create(getNeuronViewElement());
            }
            else {
                getNeuronViewElement().appendChild(_neuron_model_neuron_model_view__WEBPACK_IMPORTED_MODULE_2__["NeuronModelView"].appRender.domElement);
                console.log("loaded the existing show renderer");
            }
        }).catch(function (error) {
            console.error("failed to init neuron model: " + error);
        });
    };
    NeuronViewComponent.prototype.showElementReady = function () {
        return new Promise(function (resolve, reject) {
            var checkTimes = 0;
            function checkShowElement() {
                if (getNeuronViewElement() == null) {
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
    var NeuronViewComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectElem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NeuronViewComponent.prototype, "el", void 0);
    NeuronViewComponent = NeuronViewComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'neurons-view',
            template: __webpack_require__(/*! ./neurons-view.html */ "./src/app/components/home/neurons-view.html"),
            styles: [__webpack_require__(/*! ./neurons-view.css */ "./src/app/components/home/neurons-view.css")],
            providers: [_services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"]]
        }),
        __metadata("design:paramtypes", [_services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"]])
    ], NeuronViewComponent);
    return NeuronViewComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (NeuronViewComponent);
/*
function resizeWindow() {
  resizeShowWindow(NeuronViewComponent.neuronViewRenderer);
}

function resizeShowWindow(renderer: THREE.WebGLRenderer) {
  if (renderer == null) {
    return;
  }
  //var width = window.innerWidth;
  var width = $(document).innerWidth();

  var navbarHeight =  WanderLandComponent.wanderServiceRef.getNavbarHeight();
  var height = window.innerHeight - navbarHeight;
  console.log("width=" + width + ", height=" + height + ", navbarHeight=" + navbarHeight);

  renderer.setSize(width, height);
}

function initWanderLandShow(): THREE.WebGLRenderer {
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );

   var renderer = new THREE.WebGLRenderer();
   resizeShowWindow(renderer);
   getShowElement().appendChild(renderer.domElement);
   window.addEventListener("resize", resizeWindow);

   var geometry = new THREE.BoxGeometry(1, 1, 1);
   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
   var cube = new THREE.Mesh(geometry, material);
   scene.add( cube );

   camera.position.z = 5;

   var loops = 0;
   var animate = function () {
     if(loops < 500) {
       requestAnimationFrame( animate );
     }

     cube.rotation.x += 0.1;
     cube.rotation.y += 0.1;
     loops = loops + 1;

     renderer.render(scene, camera);
   };

   animate();
   return renderer;
}
*/ 


/***/ }),

/***/ "./src/app/components/navbar/navbar.css":
/*!**********************************************!*\
  !*** ./src/app/components/navbar/navbar.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.navbar-margin-bottom-0 {\r\n  margin-bottom: 0px;\r\n  border-radius: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.html":
/*!***********************************************!*\
  !*** ./src/app/components/navbar/navbar.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #wanderNavbar class=\"navbar navbar-inverse navbar-margin-bottom-0\" role=\"navigation\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Neurons</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink=\"/model\">Model</a></li>\r\n        <li><a routerLink=\"/about\">About</a></li>\r\n      </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </div>\r\n  <!-- /.container -->\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.ts":
/*!*********************************************!*\
  !*** ./src/app/components/navbar/navbar.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_neuron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/neuron-service */ "./src/app/services/neuron-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(neuronService) {
        this.neuronService = neuronService;
    }
    NavbarComponent.prototype.ngAfterViewInit = function () {
        _services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"].navbarElement = this.navbarElement;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('neuronNavbar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavbarComponent.prototype, "navbarElement", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'neuron-navbar',
            template: __webpack_require__(/*! ./navbar.html */ "./src/app/components/navbar/navbar.html"),
            styles: [__webpack_require__(/*! ./navbar.css */ "./src/app/components/navbar/navbar.css")],
            providers: [_services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"]]
        }),
        __metadata("design:paramtypes", [_services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);


/***/ }),

/***/ "./src/app/components/neuron-model/model-cell.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/neuron-model/model-cell.ts ***!
  \*******************************************************/
/*! exports provided: ModelCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelCell", function() { return ModelCell; });
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.global */ "./src/app/app.global.ts");
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />

var ModelCell = /** @class */ (function () {
    function ModelCell(params) {
        this.label = null;
        ModelCell.initStatic();
        this.appScene = params.appScene;
        this.xyz = (params.xyz == null) ? new THREE.Vector3(0, 0, 0) : params.xyz;
        this.label = params.label;
        this.cellType = params.cellType;
        this.layerIndex = params.layerIndex;
        this.seqIndex = params.seqIndex;
        this.activation = params.activation;
        this.create();
    }
    ModelCell.initStatic = function () {
        if (ModelCell.initStaticDone) {
            return;
        }
        ModelCell.initStaticDone = true;
        ModelCell.cellGeometry.faces[4].color = ModelCell.topColor;
        ModelCell.cellGeometry.faces[5].color = ModelCell.topColor;
        ModelCell.cellGeometry.faces[6].color = ModelCell.bottomColor;
        ModelCell.cellGeometry.faces[7].color = ModelCell.bottomColor;
        ModelCell.cellGeometry.faces[0].color = ModelCell.gray1;
        ModelCell.cellGeometry.faces[1].color = ModelCell.gray1;
        ModelCell.cellGeometry.faces[2].color = ModelCell.gray1;
        ModelCell.cellGeometry.faces[3].color = ModelCell.gray1;
        ModelCell.cellGeometry.faces[8].color = ModelCell.gray2;
        ModelCell.cellGeometry.faces[9].color = ModelCell.gray2;
        ModelCell.cellGeometry.faces[10].color = ModelCell.gray2;
        ModelCell.cellGeometry.faces[11].color = ModelCell.gray2;
        ModelCell.biasGeometry.faces[0].color = ModelCell.gray1;
        ModelCell.biasGeometry.faces[1].color = ModelCell.gray2;
        ModelCell.biasGeometry.faces[2].color = ModelCell.gray1;
        ModelCell.biasGeometry.faces[3].color = ModelCell.gray2;
        ModelCell.biasGeometry.faces[4].color = ModelCell.topColor;
        ModelCell.biasGeometry.faces[5].color = ModelCell.topColor;
        ModelCell.biasGeometry.faces[6].color = ModelCell.topColor;
        ModelCell.biasGeometry.faces[7].color = ModelCell.topColor;
    };
    ModelCell.prototype.create = function () {
        var mesh;
        if (this.cellType == ModelCell.BIAS) {
            mesh = new THREE.Mesh(ModelCell.biasGeometry, ModelCell.cellMaterial);
        }
        else if (this.cellType == ModelCell.INPUT) {
            mesh = new THREE.Mesh(ModelCell.inputGeometry, ModelCell.inputMaterial);
        }
        else if (this.cellType == ModelCell.OUTPUT) {
            mesh = new THREE.Mesh(ModelCell.outputGeometry, ModelCell.outputMaterial);
        }
        else {
            mesh = new THREE.Mesh(ModelCell.cellGeometry, ModelCell.cellMaterial);
        }
        mesh.matrixAutoUpdate = false;
        mesh.position.x = this.xyz.x;
        mesh.position.y = this.xyz.y;
        mesh.position.z = this.xyz.z;
        this.cellMesh = mesh;
        mesh.updateMatrix();
        this.appScene.add(mesh);
        if (this.cellType == ModelCell.INPUT) {
            var from = this.xyz.clone();
            from.setY(from.y - 0.3);
            var direction = this.xyz.clone().sub(from);
            var length = direction.length() - ModelCell.size / 2;
            var headLength = 0.4 * length;
            var headWidth = 0.8 * headLength;
            var arrowHelper = new THREE.ArrowHelper(direction.normalize(), from, length, 0xff00ff, headLength, headWidth);
            this.appScene.add(arrowHelper);
        }
        if (this.label != null) {
            this.createCellLabel();
        }
    };
    ModelCell.prototype.createCellLabel = function () {
        var lsize = 0.1;
        var lheight = 0.025;
        var dx = 0;
        var dy = 0;
        if (this.cellType == ModelCell.INPUT) {
            dx = -0.05;
            dy = -ModelCell.size - 0.3;
        }
        else if (this.cellType == ModelCell.OUTPUT) {
            dx = -0.05;
            dy = ModelCell.size / 2 + 0.05;
        }
        var param = {
            font: _app_global__WEBPACK_IMPORTED_MODULE_0__["AppGlobal"].labelFont,
            size: lsize,
            height: lheight
        };
        var pref = '';
        if (this.activation.indexOf('Softmax') > 0) {
            pref = 's';
        }
        var textGeo = new THREE.TextGeometry(pref + this.label, param);
        var material = new THREE.MeshPhongMaterial({ color: 0x000000, flatShading: true });
        textGeo.computeBoundingBox();
        textGeo.computeVertexNormals();
        var mesh = new THREE.Mesh(textGeo, material);
        mesh.position.x = this.xyz.x + dx;
        mesh.position.y = this.xyz.y + dy;
        mesh.position.z = this.xyz.z;
        this.appScene.add(mesh);
    };
    ModelCell.prototype.createLink = function (targetCell, layers) {
        var thisLayer = layers[this.layerIndex];
        var toLayer = layers[targetCell.layerIndex];
        var weight;
        if (this.cellType == ModelCell.BIAS) {
            weight = thisLayer.b[targetCell.seqIndex];
        }
        else {
            weight = thisLayer.W[targetCell.seqIndex];
        }
        var params = this.getLinkSizeColor(weight);
        var from = this.cellMesh.position.clone();
        from.setY(this.cellMesh.position.y + ModelCell.size / 2);
        var to = targetCell.cellMesh.position.clone();
        to.setY(targetCell.cellMesh.position.y - ModelCell.size / 2);
        /*
        var material = new THREE.LineBasicMaterial( params );
        var geometry = new THREE.Geometry();
        geometry.vertices.push(from);
        geometry.vertices.push(to);
        var line = new THREE.Line( geometry, material );
        this.appSense.add(line);
        */
        var lineGeom = new THREE.LineGeometry();
        var positions = [];
        var colors = [];
        positions.push(from.x, from.y, from.z);
        positions.push(to.x, to.y, to.z);
        colors.push(params.rc, params.gc, params.bc);
        colors.push(params.rc, params.gc, params.bc);
        lineGeom.setPositions(positions);
        lineGeom.setColors(colors);
        var lineMat = new THREE.LineMaterial({
            color: 0xffffff,
            linewidth: params.linewidth,
            vertexColors: THREE.VertexColors,
            //resolution:  // need
            dashed: false
        });
        lineMat.resolution.set(window.innerWidth, window.innerHeight);
        var line2 = new THREE.Line2(lineGeom, lineMat);
        line2.computeLineDistances();
        line2.scale.set(1, 1, 1);
        this.appScene.add(line2);
    };
    ModelCell.prototype.getLinkSizeColor = function (weight) {
        /*
        LineBasicMaterialParameters extends MaterialParameters {
          color?: number|string;
          linewidth?: number;
          linecap?: string;
          linejoin?: string;
        */
        var wlineWidth = 1;
        var r = 0;
        var g = 0;
        var b = 0;
        if (weight > 0) {
            r = 255 * weight;
            if (r > 255) {
                r = 255;
            }
        }
        else {
            b = 255 * (-weight);
            if (b > 255) {
                b = 255;
            }
        }
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        wlineWidth = Math.abs(weight) / 1.0;
        if (wlineWidth < 1) {
            //wlineWidth = 1;
            wlineWidth = wlineWidth + 0.2;
        }
        return {
            rc: r,
            gc: g,
            bc: b,
            linewidth: wlineWidth
        };
    };
    ModelCell.size = 0.2;
    ModelCell.cellGeometry = new THREE.BoxGeometry(ModelCell.size, ModelCell.size, ModelCell.size);
    ModelCell.cellMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors });
    ModelCell.topColor = new THREE.Color(0, 1, 0);
    ModelCell.bottomColor = new THREE.Color(0, 0, 1);
    ModelCell.gray1 = new THREE.Color(0.7, 0.7, 0.7);
    ModelCell.gray2 = new THREE.Color(0.8, 0.8, 0.8);
    //THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
    ModelCell.biasGeometry = new THREE.CylinderGeometry(ModelCell.size / 2, 0, ModelCell.size, 4, 1, false);
    ModelCell.inputGeometry = new THREE.CylinderGeometry(ModelCell.size / 2, ModelCell.size / 2, ModelCell.size, 16);
    //static inputMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    ModelCell.inputMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff, specular: 0xff0000,
        shininess: 30 });
    ModelCell.outputGeometry = new THREE.SphereGeometry(ModelCell.size / 2, 32, 32);
    //static outputMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    ModelCell.outputMaterial = new THREE.MeshNormalMaterial();
    ModelCell.initStaticDone = false;
    ModelCell.NET = 'NET';
    ModelCell.BIAS = 'BIAS';
    ModelCell.INPUT = 'INPUT';
    ModelCell.OUTPUT = 'OUTPUT';
    return ModelCell;
}());



/***/ }),

/***/ "./src/app/components/neuron-model/model-data.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/neuron-model/model-data.ts ***!
  \*******************************************************/
/*! exports provided: ModelData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelData", function() { return ModelData; });
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />
var ModelData = /** @class */ (function () {
    function ModelData() {
    }
    return ModelData;
}());



/***/ }),

/***/ "./src/app/components/neuron-model/model-layers-view.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/neuron-model/model-layers-view.ts ***!
  \**************************************************************/
/*! exports provided: ModelLayersView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelLayersView", function() { return ModelLayersView; });
/* harmony import */ var _model_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-cell */ "./src/app/components/neuron-model/model-cell.ts");
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />

var ModelLayersView = /** @class */ (function () {
    function ModelLayersView(neuronService, appScene, modelData) {
        this.neuronService = neuronService;
        this.appScene = appScene;
        this.modelData = modelData;
        this.cellGap = 1;
        this.maxRowCells = 20;
        //cellLayout = ModelLayersView.ROW_FILL;
        this.cellLayout = ModelLayersView.SQUARE;
        this.create();
    }
    ModelLayersView.prototype.create = function () {
        var layers = this.modelData.layers;
        if (layers == null || layers.length == 0) {
            console.warn('nuerons layers are empty');
            return;
        }
        var ypos = -1.5;
        var layerIndex;
        var length = layers.length;
        var prevLayer;
        for (layerIndex = 0; layerIndex < length; layerIndex++) {
            var currentLayer = this.createLayer(layerIndex, layers[layerIndex], ypos);
            ypos = ypos + this.cellGap;
            if (prevLayer != null) {
                this.linkLayerCells(prevLayer, currentLayer);
            }
            prevLayer = currentLayer;
        }
        var currentLayer = this.createOutputLayer(length - 1, layers[length - 1], ypos);
        this.linkLayerCells(prevLayer, currentLayer);
    };
    ModelLayersView.prototype.createOutputLayer = function (layerIndex, layer, ypos) {
        var nout = layer.conf.layer.nout;
        var type = _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"].OUTPUT;
        var activation = layer.conf.layer.activationFn['@class'];
        return this.createGenericLayer(layerIndex, layer, ypos, nout, type, true, activation);
    };
    ModelLayersView.prototype.createLayer = function (layerIndex, layer, ypos) {
        var nin = layer.conf.layer.nin;
        var type = layerIndex == 0 ? _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"].INPUT : _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"].NET;
        var activation = layer.conf.layer.activationFn['@class'];
        return this.createGenericLayer(layerIndex, layer, ypos, nin, type, false, activation);
    };
    ModelLayersView.prototype.createGenericLayer = function (layerIndex, layer, ypos, cnum, type, isOutput, activation) {
        var hasBias = false;
        if (isOutput == false && layer.b != null && layer.b.length > 0) {
            hasBias = true;
        }
        var totalNum = hasBias ? cnum + 1 : cnum;
        //var nin = layer.conf.layer.nin;
        var xcenter = 0;
        var zcenter = 0;
        var maxXRowCells = this.maxRowCells;
        if (this.cellLayout == ModelLayersView.SQUARE) {
            maxXRowCells = Math.round(Math.sqrt(totalNum));
            xcenter = Math.floor((maxXRowCells - 1) * this.cellGap / 2);
            zcenter = Math.floor(xcenter);
        }
        var maxZRowCells = Math.ceil(totalNum / maxXRowCells);
        var cellList = new Array();
        var xCounter = 0;
        var xpos = 0;
        var zpos = 0;
        for (var i = 0; i < totalNum; i++) {
            if (xCounter >= maxXRowCells) {
                xCounter = 0;
                zpos -= this.cellGap;
                xpos = 0;
            }
            xCounter++;
            var xyz = new THREE.Vector3(xpos - xcenter, ypos, zpos + zcenter);
            var ctype = type;
            if (hasBias && (i == totalNum - 1)) {
                ctype = _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"].BIAS;
            }
            var label = null;
            if (ctype === _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"].INPUT || ctype === _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"].OUTPUT) {
                label = '' + i;
            }
            else if (ctype == _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"].BIAS) {
                label = 'b';
            }
            var cell = new _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"]({
                appScene: this.appScene,
                xyz: xyz,
                cellType: ctype,
                layerIndex: layerIndex,
                seqIndex: i,
                label: label,
                activation: activation
            });
            cellList.push(cell);
            cell.label = "" + i;
            xpos += this.cellGap;
        }
        /*
        // output has no bias cell
        if (isOutput) {
          return cellList;
        }
        var zMiddle = -this.cellGap * (Math.ceil(maxZRowCells / 2) - 1);
        if (layer.b != null && layer.b.length > 0) {
          var xyz = new THREE.Vector3(-1, ypos, zMiddle);
          var cell = new ModelCell({
            appScene: this.appScene,
            xyz: xyz,
            cellType: ModelCell.BIAS,
            layerIndex: layerIndex
          });
          cellList.push(cell);
          cell.label = "b";
        }
        */
        return cellList;
    };
    ModelLayersView.prototype.linkLayerCells = function (prevLayer, currentLayer) {
        for (var i = 0; i < prevLayer.length; i++) {
            var c1 = prevLayer[i];
            for (var j = 0; j < currentLayer.length; j++) {
                var c2 = currentLayer[j];
                if (c2.cellType != _model_cell__WEBPACK_IMPORTED_MODULE_0__["ModelCell"].BIAS) {
                    c1.createLink(c2, this.modelData.layers);
                }
            }
        }
    };
    ModelLayersView.SQUARE = 'SQUARE';
    ModelLayersView.ROW_FILL = 'ROW_FILL';
    return ModelLayersView;
}());



/***/ }),

/***/ "./src/app/components/neuron-model/model-source.html":
/*!***********************************************************!*\
  !*** ./src/app/components/neuron-model/model-source.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row text-center\">\r\n      <h1>{{modelHeader}}</h1>\r\n    </div>\r\n    <div class=\"well\">\r\n      <div *ngFor='let layer of layers; let num = index'>\r\n          <div class=\"row text-info bg-info small\">\r\n              <b>{{num}}. {{layer.type}}</b>, nin: {{layer.conf.layer.nin}}, nout: {{layer.conf.layer.nout}},\r\n              hasBias: {{layer.conf.layer.hasBias}}, activationFn: {{layer.conf.layer.activationFn['@class']}} <br>\r\n              W: [{{layer.W}}] <br>\r\n              b: [{{layer.b}}] <br>\r\n          </div>\r\n        </div>\r\n      <div class=\"row text-info bg-info small\">\r\n        <!--{{modelSourceText}}-->\r\n      </div>\r\n    </div>\r\n  \r\n    <wander-footer></wander-footer>\r\n  </div>  "

/***/ }),

/***/ "./src/app/components/neuron-model/model-source.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/neuron-model/model-source.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_neuron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/neuron-service */ "./src/app/services/neuron-service.ts");
/* harmony import */ var _model_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-data */ "./src/app/components/neuron-model/model-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelSourceComponent = /** @class */ (function () {
    function ModelSourceComponent(neuronService) {
        var _this = this;
        this.neuronService = neuronService;
        this.modelHeader = 'Network Model';
        this.neuronService.getNetworkModel().subscribe(function (json) {
            _this.modelData = new _model_data__WEBPACK_IMPORTED_MODULE_2__["ModelData"]();
            Object.assign(_this.modelData, json);
            _this.modelHeader = _this.modelData.name;
            _this.layers = _this.modelData.layers;
            _this.modelSourceText = JSON.stringify(json);
        });
    }
    ModelSourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'model-source',
            providers: [_services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"]],
            template: __webpack_require__(/*! ./model-source.html */ "./src/app/components/neuron-model/model-source.html")
        }),
        __metadata("design:paramtypes", [_services_neuron_service__WEBPACK_IMPORTED_MODULE_1__["NeuronService"]])
    ], ModelSourceComponent);
    return ModelSourceComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (ModelSourceComponent);


/***/ }),

/***/ "./src/app/components/neuron-model/neuron-model-view.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/neuron-model/neuron-model-view.ts ***!
  \**************************************************************/
/*! exports provided: NeuronModelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeuronModelView", function() { return NeuronModelView; });
/* harmony import */ var _model_layers_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-layers-view */ "./src/app/components/neuron-model/model-layers-view.ts");
/* harmony import */ var _model_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-data */ "./src/app/components/neuron-model/model-data.ts");
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />


var NeuronModelView = /** @class */ (function () {
    //static labelFont: any;
    function NeuronModelView(neuronService) {
        this.neuronService = neuronService;
        NeuronModelView.neuronServiceRef = neuronService;
    }
    NeuronModelView.prototype.create = function (showElement) {
        NeuronModelView.appScene = new THREE.Scene();
        this.addCameraAndControls();
        NeuronModelView.appRender = new THREE.WebGLRenderer({ antialias: true });
        NeuronModelView.appRender.setClearColor(new THREE.Color(0xEEEEEE));
        NeuronModelView_onWindowResize();
        showElement.appendChild(NeuronModelView.appRender.domElement);
        window.addEventListener("resize", NeuronModelView_onWindowResize);
        this.addBackground();
        this.addShowObjects();
        this.addShowLights();
        NeuronModelView_animate();
    };
    NeuronModelView.prototype.addCameraAndControls = function () {
        var fov = 30;
        var aspect = this.getCameraAspect();
        var near = 0.1;
        var far = 500;
        NeuronModelView.appCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        var camera = NeuronModelView.appCamera;
        camera.position.x = 0;
        camera.position.y = 2;
        camera.position.z = 12;
        var lookAt = new THREE.Vector3(0, 8, -1);
        camera.lookAt(lookAt);
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
        //NeuronModelView.appCamControl = camControls;
        */
        var trackballControls = new THREE.TrackballControls(camera);
        trackballControls.rotateSpeed = 1.0;
        trackballControls.zoomSpeed = 1.0;
        trackballControls.panSpeed = 1.0;
        trackballControls.noZoom = false;
        trackballControls.noPan = false;
        trackballControls.staticMoving = true;
        trackballControls.dynamicDampingFactor = 0.3;
        //NeuronModelView.trackballControl = trackballControls;
        trackballControls.keys = [65, 83, 68];
        trackballControls.addEventListener('change', NeuronModelView_render);
        NeuronModelView.appCamControl = trackballControls;
    };
    NeuronModelView.prototype.addShowObjects = function () {
        var axisHelper = new THREE.AxisHelper(100);
        //NeuronModelView.appScene.add(axisHelper);
        /*
        var geometry = new THREE.CylinderBufferGeometry( 0, 10, 30, 4, 1 );
        var material = new THREE.MeshPhongMaterial( { color: 0xbbbbbb, flatShading: true } );
        for ( var i = 0; i < 500; i ++ ) {
          var mesh = new THREE.Mesh( geometry, material );
          mesh.position.x = ( Math.random() - 0.5 ) * 1000;
          mesh.position.y = ( Math.random() - 0.5 ) * 1000;
          mesh.position.z = ( Math.random() - 0.5 ) * 1000;
          mesh.updateMatrix();
          mesh.matrixAutoUpdate = false;
          //NeuronModelView.appScene.add( mesh );
        }
        */
        this.addNeuronsModel();
        /*
        var loader = new THREE.FontLoader();
        loader.load( '/libs/fonts/helvetiker_regular.typeface.json', function ( font ) {
          var param = {
            font: <any>font,
            size: 0.2,
            height: 0.1
          };
          var textGeo = new THREE.TextGeometry( 'Hello three.js!', <THREE.TextGeometryParameters>param);
          var material = new THREE.MeshPhongMaterial( { color: 0xbb0000, flatShading: true } );
          textGeo.computeBoundingBox();
          textGeo.computeVertexNormals();
          var mesh = new THREE.Mesh( textGeo, material );
          mesh.position.x = -0;
          mesh.position.y = -0;
          mesh.position.z = -0;
          //NeuronModelView.appScene.add( mesh );
        } );
        */
    };
    NeuronModelView.prototype.addNeuronsModel = function () {
        var _this = this;
        this.neuronService.getNetworkModel().subscribe(function (json) {
            var modelData = new _model_data__WEBPACK_IMPORTED_MODULE_1__["ModelData"]();
            Object.assign(modelData, json);
            var modelLayersView = new _model_layers_view__WEBPACK_IMPORTED_MODULE_0__["ModelLayersView"](_this.neuronService, NeuronModelView.appScene, modelData);
        });
    };
    NeuronModelView.prototype.addBackground = function () {
        /*
        var loader = new THREE.TextureLoader();
        var texture = loader.load("assets/background-1.png");
        NeuronModelView.appScene.background = texture;
        */
        NeuronModelView.appScene.background = new THREE.Color(0xcce0ff);
        //SleepingBearShow.appScene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
    };
    NeuronModelView.prototype.addShowLights = function () {
        NeuronModelView.appScene.add(new THREE.AmbientLight(0xffffff));
        var light = new THREE.DirectionalLight(0xdfebff, 1.75);
        light.position.set(50, 200, 100);
        light.position.multiplyScalar(1.3);
        light.castShadow = false;
        NeuronModelView.appScene.add(light);
        var light = new THREE.DirectionalLight(0xdfebff, 0.8);
        //light.position.multiplyScalar( 1 );
        light.position.set(-250, 510, 1150);
        light.castShadow = false;
        NeuronModelView.appScene.add(light);
    };
    NeuronModelView.prototype.getCameraAspect = function () {
        var navbarHeight = this.neuronService.getNavbarHeight();
        var height = window.innerHeight - navbarHeight;
        return window.innerWidth / height;
    };
    NeuronModelView.showClock = new THREE.Clock();
    return NeuronModelView;
}());

var NeuronModelView_animate = function () {
    requestAnimationFrame(NeuronModelView_animate);
    var deltaTime = NeuronModelView.showClock.getDelta(), elapsedTime = NeuronModelView.showClock.getElapsedTime() * 10;
    if (NeuronModelView.appRender != null) {
        try {
            NeuronModelView.appRender.render(NeuronModelView.appScene, NeuronModelView.appCamera);
            if (NeuronModelView.appCamControl instanceof THREE.FirstPersonControls) {
                NeuronModelView.appCamControl.update(deltaTime);
            }
            else if (NeuronModelView.appCamControl instanceof THREE.TrackballControls) {
                NeuronModelView.appCamControl.update();
            }
        }
        catch (error) {
            console.error("render error " + error);
        }
    }
    else {
        console.error("appRender is null");
    }
};
function NeuronModelView_onWindowResize() {
    var navbarHeight = NeuronModelView.neuronServiceRef.getNavbarHeight();
    var height = window.innerHeight - navbarHeight;
    NeuronModelView.appRender.setSize(window.innerWidth, height);
}
function NeuronModelView_render() {
    NeuronModelView.appRender.render(NeuronModelView.appScene, NeuronModelView.appCamera);
}


/***/ }),

/***/ "./src/app/components/vr/cube-show.ts":
/*!********************************************!*\
  !*** ./src/app/components/vr/cube-show.ts ***!
  \********************************************/
/*! exports provided: CubeShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeShow", function() { return CubeShow; });
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />
var CubeShow = /** @class */ (function () {
    function CubeShow(wanderService) {
        CubeShow.wanderService = wanderService;
    }
    CubeShow.prototype.create = function (showElement) {
        var appScene = new THREE.Scene();
        CubeShow.appScene = appScene;
        this.addCameraAndControls();
        CubeShow.raycaster = new THREE.Raycaster();
        var appRender = new THREE.WebGLRenderer({ antialias: true });
        CubeShow.appRender = appRender;
        appRender.setPixelRatio(window.devicePixelRatio);
        //renderer.setSize( window.innerWidth, window.innerHeight );
        CubeShow.onWindowResize();
        appRender.vr.enabled = true;
        showElement.appendChild(appRender.domElement);
        showElement.appendChild(WEBVR.createButton(appRender));
        window.addEventListener("resize", CubeShow.onWindowResize, false);
        appRender.domElement.addEventListener('mousedown', CubeShow.onMouseDown, false);
        appRender.domElement.addEventListener('mouseup', CubeShow.onMouseUp, false);
        appRender.domElement.addEventListener('touchstart', CubeShow.onMouseDown, false);
        appRender.domElement.addEventListener('touchend', CubeShow.onMouseUp, false);
        window.addEventListener('vrdisplaypointerrestricted', CubeShow.onPointerRestricted, false);
        window.addEventListener('vrdisplaypointerunrestricted', CubeShow.onPointerUnrestricted, false);
        this.addShowObjects();
        var info = document.createElement('div');
        info.style.position = 'absolute';
        info.style.top = '50px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank" rel="noopener">three.js - cube vr</a>';
        showElement.appendChild(info);
        CubeShow.animate();
    };
    CubeShow.onWindowResize = function () {
        var navbarHeight = CubeShow.wanderService.getNavbarHeight();
        var height = window.innerHeight - navbarHeight;
        CubeShow.appRender.setSize(window.innerWidth, height);
        CubeShow.appCamera.aspect = window.innerWidth / height;
        CubeShow.appCamera.updateProjectionMatrix();
    };
    CubeShow.prototype.addCameraAndControls = function () {
        var fov = 70;
        var aspect = this.getCameraAspect();
        var near = 0.1;
        var far = 10;
        var appCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        CubeShow.appCamera = appCamera;
        CubeShow.appScene.add(appCamera);
        var crosshair = new THREE.Mesh(new THREE.RingGeometry(0.02, 0.04, 32), new THREE.MeshBasicMaterial({
            color: 0xffffff,
            opacity: 0.5,
            transparent: true
        }));
        crosshair.position.z = -2;
        appCamera.add(crosshair);
    };
    CubeShow.prototype.getCameraAspect = function () {
        var navbarHeight = CubeShow.wanderService.getNavbarHeight();
        var height = window.innerHeight - navbarHeight;
        return window.innerWidth / height;
    };
    CubeShow.prototype.addShowObjects = function () {
        var axisHelper = new THREE.AxisHelper(200);
        //CubeShow.appScene.add(axisHelper);
        var room = new THREE.Mesh(new THREE.BoxGeometry(6, 6, 6, 8, 8, 8), new THREE.MeshBasicMaterial({ color: 0x404040, wireframe: true }));
        CubeShow.room = room;
        //room.position.y = 3;
        CubeShow.appScene.add(room);
        CubeShow.appScene.add(new THREE.HemisphereLight(0x606060, 0x404040));
        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(1, 1, 1).normalize();
        CubeShow.appScene.add(light);
        var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        for (var i = 0; i < 200; i++) {
            var object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));
            object.position.x = Math.random() * 4 - 2;
            object.position.y = Math.random() * 4 - 2;
            object.position.z = Math.random() * 4 - 2;
            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;
            object.scale.x = Math.random() + 0.5;
            object.scale.y = Math.random() + 0.5;
            object.scale.z = Math.random() + 0.5;
            object.userData.velocity = new THREE.Vector3();
            object.userData.velocity.x = Math.random() * 0.01 - 0.005;
            object.userData.velocity.y = Math.random() * 0.01 - 0.005;
            object.userData.velocity.z = Math.random() * 0.01 - 0.005;
            room.add(object);
        }
    };
    CubeShow.onMouseDown = function () {
        CubeShow.isMouseDown = true;
    };
    CubeShow.onMouseUp = function () {
        CubeShow.isMouseDown = false;
    };
    CubeShow.onPointerRestricted = function () {
        var pointerLockElement = CubeShow.appRender.domElement;
        if (pointerLockElement && typeof (pointerLockElement.requestPointerLock) === 'function') {
            pointerLockElement.requestPointerLock();
        }
    };
    CubeShow.onPointerUnrestricted = function () {
        var currentPointerLockElement = document.pointerLockElement;
        var expectedPointerLockElement = CubeShow.appRender.domElement;
        if (currentPointerLockElement && currentPointerLockElement === expectedPointerLockElement && typeof (document.exitPointerLock) === 'function') {
            document.exitPointerLock();
        }
    };
    CubeShow.animate = function () {
        requestAnimationFrame(CubeShow.animate);
        var delta = CubeShow.showClock.getDelta() * 60;
        var room = CubeShow.room;
        if (CubeShow.isMouseDown === true) {
            var cube = room.children[0];
            room.remove(cube);
            cube.position.set(0, 0, -0.75);
            cube.position.applyQuaternion(CubeShow.appCamera.quaternion);
            cube.userData.velocity.x = (Math.random() - 0.5) * 0.02 * delta;
            cube.userData.velocity.y = (Math.random() - 0.5) * 0.02 * delta;
            cube.userData.velocity.z = (Math.random() * 0.01 - 0.05) * delta;
            cube.userData.velocity.applyQuaternion(CubeShow.appCamera.quaternion);
            room.add(cube);
        }
        // find intersections
        CubeShow.raycaster.setFromCamera({ x: 0, y: 0 }, CubeShow.appCamera);
        var intersects = CubeShow.raycaster.intersectObjects(room.children);
        if (intersects.length > 0) {
            if (CubeShow.INTERSECTED != intersects[0].object) {
                if (CubeShow.INTERSECTED) {
                    CubeShow.INTERSECTED.material.emissive.setHex(CubeShow.INTERSECTED.currentHex);
                }
                CubeShow.INTERSECTED = intersects[0].object;
                CubeShow.INTERSECTED.currentHex = CubeShow.INTERSECTED.material.emissive.getHex();
                CubeShow.INTERSECTED.material.emissive.setHex(0xff0000);
            }
        }
        else {
            if (CubeShow.INTERSECTED)
                CubeShow.INTERSECTED.material.emissive.setHex(CubeShow.INTERSECTED.currentHex);
            CubeShow.INTERSECTED = undefined;
        }
        // Keep cubes inside room
        for (var i = 0; i < room.children.length; i++) {
            var cube = room.children[i];
            cube.userData.velocity.multiplyScalar(1 - (0.001 * delta));
            cube.position.add(cube.userData.velocity);
            if (cube.position.x < -3 || cube.position.x > 3) {
                cube.position.x = THREE.Math.clamp(cube.position.x, -3, 3);
                cube.userData.velocity.x = -cube.userData.velocity.x;
            }
            if (cube.position.y < -3 || cube.position.y > 3) {
                cube.position.y = THREE.Math.clamp(cube.position.y, -3, 3);
                cube.userData.velocity.y = -cube.userData.velocity.y;
            }
            if (cube.position.z < -3 || cube.position.z > 3) {
                cube.position.z = THREE.Math.clamp(cube.position.z, -3, 3);
                cube.userData.velocity.z = -cube.userData.velocity.z;
            }
            cube.rotation.x += cube.userData.velocity.x * 2 * delta;
            cube.rotation.y += cube.userData.velocity.y * 2 * delta;
            cube.rotation.z += cube.userData.velocity.z * 2 * delta;
        }
        if (CubeShow.appRender != null) {
            try {
                CubeShow.appRender.render(CubeShow.appScene, CubeShow.appCamera);
            }
            catch (error) {
                console.error("CubeShow render error " + error);
            }
        }
        else {
            console.error("CubeShow appRender is null");
        }
    };
    CubeShow.showClock = new THREE.Clock();
    CubeShow.isMouseDown = false;
    return CubeShow;
}());



/***/ }),

/***/ "./src/app/components/vr/gear-show.ts":
/*!********************************************!*\
  !*** ./src/app/components/vr/gear-show.ts ***!
  \********************************************/
/*! exports provided: GearShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearShow", function() { return GearShow; });
/// <reference path="../../../typings/_reference-three.d.ts" />
/// <reference path="../../../typings/_reference-jquery.d.ts" />
var GearShow = /** @class */ (function () {
    function GearShow(wanderService) {
        GearShow.wanderService = wanderService;
    }
    GearShow.prototype.create = function (showElement) {
        var appScene = new THREE.Scene();
        GearShow.appScene = appScene;
        this.addCameraAndControls();
        /*
        var appRender = new THREE.WebGLRenderer({ antialias: true });
        GearShow.appRender = appRender;
        appRender.setClearColor(new THREE.Color(0xEE0000));
        GearShow.onWindowResize();
        showElement.appendChild(appRender.domElement);
        */
        var appRender = new THREE.WebGLRenderer({ antialias: true });
        GearShow.appRender = appRender;
        appRender.setPixelRatio(window.devicePixelRatio);
        //renderer.setSize( window.innerWidth, window.innerHeight );
        GearShow.onWindowResize();
        appRender.vr.enabled = true;
        showElement.appendChild(appRender.domElement);
        showElement.appendChild(WEBVR.createButton(appRender));
        window.addEventListener("resize", GearShow.onWindowResize);
        this.addShowObjects();
        var info = document.createElement('div');
        info.style.position = 'absolute';
        info.style.top = '50px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank" rel="noopener">three.js - gear vr</a>';
        showElement.appendChild(info);
        GearShow.animate();
    };
    GearShow.onWindowResize = function () {
        var navbarHeight = GearShow.wanderService.getNavbarHeight();
        var height = window.innerHeight - navbarHeight;
        GearShow.appRender.setSize(window.innerWidth, height);
    };
    GearShow.prototype.addCameraAndControls = function () {
        var fov = 70;
        var aspect = this.getCameraAspect();
        var near = 0.1;
        var far = 10;
        var appCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        GearShow.appCamera = appCamera;
        /*
        appCamera.position.x = 5;
        appCamera.position.y = 5;
        appCamera.position.z = 5;
  
        var lookAt = new THREE.Vector3(0, 0, 0);
        appCamera.lookAt(lookAt);
        */
        this.camBox = new THREE.Object3D();
        this.camBox.position.y = 1.8;
        this.camBox.add(GearShow.appCamera);
        GearShow.appScene.add(this.camBox);
        var controller = new THREE.GearVRController();
        GearShow.gearController = controller;
        this.camBox.position.y = 1.8;
        controller.setHand('right');
        this.camBox.add(controller);
    };
    GearShow.prototype.getCameraAspect = function () {
        var navbarHeight = GearShow.wanderService.getNavbarHeight();
        var height = window.innerHeight - navbarHeight;
        return window.innerWidth / height;
    };
    GearShow.prototype.addShowObjects = function () {
        var axisHelper = new THREE.AxisHelper(200);
        GearShow.appScene.add(axisHelper);
        var room = new THREE.Mesh(new THREE.BoxGeometry(6, 6, 6, 8, 8, 8), new THREE.MeshBasicMaterial({ color: 0x404040, wireframe: true }));
        GearShow.room = room;
        room.position.y = 3;
        GearShow.appScene.add(room);
        GearShow.appScene.add(new THREE.HemisphereLight(0x606060, 0x404040));
        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(1, 1, 1).normalize();
        GearShow.appScene.add(light);
        var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        for (var i = 0; i < 200; i++) {
            var object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));
            object.position.x = Math.random() * 4 - 2;
            object.position.y = Math.random() * 4 - 2;
            object.position.z = Math.random() * 4 - 2;
            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;
            object.scale.x = Math.random() + 0.5;
            object.scale.y = Math.random() + 0.5;
            object.scale.z = Math.random() + 0.5;
            object.userData.velocity = new THREE.Vector3();
            object.userData.velocity.x = Math.random() * 0.01 - 0.005;
            object.userData.velocity.y = Math.random() * 0.01 - 0.005;
            object.userData.velocity.z = Math.random() * 0.01 - 0.005;
            room.add(object);
        }
    };
    GearShow.animate = function () {
        requestAnimationFrame(GearShow.animate);
        var deltaTime = GearShow.showClock.getDelta(), elapsedTime = GearShow.showClock.getElapsedTime() * 10;
        GearShow.gearController.update();
        var room = GearShow.room;
        for (var i = 0; i < room.children.length; i++) {
            var cube = room.children[i];
            if (cube.geometry instanceof THREE.BoxGeometry === false)
                continue;
            if (cube.position.x < -3 || cube.position.x > 3) {
                cube.position.x = THREE.Math.clamp(cube.position.x, -3, 3);
                cube.userData.velocity.x = -cube.userData.velocity.x;
            }
            if (cube.position.y < -3 || cube.position.y > 3) {
                cube.position.y = THREE.Math.clamp(cube.position.y, -3, 3);
                cube.userData.velocity.y = -cube.userData.velocity.y;
            }
            if (cube.position.z < -3 || cube.position.z > 3) {
                cube.position.z = THREE.Math.clamp(cube.position.z, -3, 3);
                cube.userData.velocity.z = -cube.userData.velocity.z;
            }
            cube.rotation.x += 0.01 * deltaTime;
            cube.rotation.z += 0.005;
            //cube.position.x += 0.005;
        }
        if (GearShow.appRender != null) {
            try {
                GearShow.appRender.render(GearShow.appScene, GearShow.appCamera);
            }
            catch (error) {
                console.error("GearShow render error " + error);
            }
        }
        else {
            console.error("GearShow appRender is null");
        }
    };
    GearShow.showClock = new THREE.Clock();
    return GearShow;
}());



/***/ }),

/***/ "./src/app/components/vr/vr.css":
/*!**************************************!*\
  !*** ./src/app/components/vr/vr.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vr-margin {\r\n    margin: 0px;\r\n    border: 0px;\r\n    padding: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/vr/vr.html":
/*!***************************************!*\
  !*** ./src/app/components/vr/vr.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"vr-show\" class=\"container-fluid vr-margin\"></div>"

/***/ }),

/***/ "./src/app/components/vr/vr.ts":
/*!*************************************!*\
  !*** ./src/app/components/vr/vr.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_wander_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/wander-service */ "./src/app/services/wander-service.ts");
/* harmony import */ var _gear_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gear-show */ "./src/app/components/vr/gear-show.ts");
/* harmony import */ var _cube_show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cube-show */ "./src/app/components/vr/cube-show.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var vrShowElemntId = "vr-show";
function getShowElement() {
    return document.getElementById(vrShowElemntId);
}
var VRComponent = /** @class */ (function () {
    function VRComponent(wanderService) {
        this.wanderService = wanderService;
    }
    VRComponent.prototype.ngAfterViewInit = function () {
        // hide scrollbar
        $("body").css("overflow", "hidden");
        if (getShowElement() != null) {
            console.log("VRComponent get showElement inside ngAfterViewInit");
        }
        //this.initGearShow();
        this.initCubeShow();
    };
    VRComponent.prototype.ngOnDestroy = function () {
        // show scrollbar for other routes
        $("body").css("overflow", "auto");
    };
    VRComponent.prototype.initCubeShow = function () {
        var _this = this;
        this.showElementReady().then(function () {
            if (_cube_show__WEBPACK_IMPORTED_MODULE_3__["CubeShow"].appRender == null) {
                var cubeShow = new _cube_show__WEBPACK_IMPORTED_MODULE_3__["CubeShow"](_this.wanderService);
                cubeShow.create(getShowElement());
            }
            else {
                getShowElement().appendChild(_cube_show__WEBPACK_IMPORTED_MODULE_3__["CubeShow"].appRender.domElement);
                console.log("load the existing cube show renderer");
            }
        }).catch(function (error) {
            console.error("failed to init cube show: " + error);
        });
    };
    VRComponent.prototype.initGearShow = function () {
        var _this = this;
        this.showElementReady().then(function () {
            if (_gear_show__WEBPACK_IMPORTED_MODULE_2__["GearShow"].appRender == null) {
                var gearShow = new _gear_show__WEBPACK_IMPORTED_MODULE_2__["GearShow"](_this.wanderService);
                gearShow.create(getShowElement());
            }
            else {
                getShowElement().appendChild(_gear_show__WEBPACK_IMPORTED_MODULE_2__["GearShow"].appRender.domElement);
                console.log("load the existing show renderer");
            }
        }).catch(function (error) {
            console.error("failed to init gear show: " + error);
        });
    };
    VRComponent.prototype.showElementReady = function () {
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
    VRComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vr-page',
            template: __webpack_require__(/*! ./vr.html */ "./src/app/components/vr/vr.html"),
            styles: [__webpack_require__(/*! ./vr.css */ "./src/app/components/vr/vr.css")],
            providers: [_services_wander_service__WEBPACK_IMPORTED_MODULE_1__["WanderService"]]
        }),
        __metadata("design:paramtypes", [_services_wander_service__WEBPACK_IMPORTED_MODULE_1__["WanderService"]])
    ], VRComponent);
    return VRComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (VRComponent);


/***/ }),

/***/ "./src/app/services/neuron-service.ts":
/*!********************************************!*\
  !*** ./src/app/services/neuron-service.ts ***!
  \********************************************/
/*! exports provided: NamedDescription, NeuronService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedDescription", function() { return NamedDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeuronService", function() { return NeuronService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NamedDescription = /** @class */ (function () {
    function NamedDescription(name, text) {
        this.name = name;
        this.text = text;
    }
    return NamedDescription;
}());

var NeuronService = /** @class */ (function () {
    function NeuronService(http) {
        this.http = http;
    }
    NeuronService_1 = NeuronService;
    NeuronService.prototype.getMainText = function () {
        var reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'plain/text'
        });
        return this.http.get('/index.html', { headers: reqHeaders, responseType: 'text' });
    };
    NeuronService.prototype.getNetworkModel = function () {
        var reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json'
        });
        //return this.http.get('/assets/csvexample-layers.json', {headers: reqHeaders, responseType: 'json'});
        //return this.http.get('assets/csvexample-layers.json', {headers: reqHeaders, responseType: 'json'});
        //return this.http.get('/assets/regression-math-layers.json', {headers: reqHeaders, responseType: 'json'});
        return this.http.get('/assets/csvexample-30-layers.json', { headers: reqHeaders, responseType: 'json' });
    };
    NeuronService.prototype.getNavbarHeight = function () {
        if (NeuronService_1.navbarElement == null) {
            return 0;
        }
        return NeuronService_1.navbarElement.nativeElement.offsetHeight;
    };
    NeuronService.prototype.getAboutDescription = function () {
        return new NamedDescription("about", "Fun with Neurons Network");
    };
    var NeuronService_1;
    NeuronService = NeuronService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NeuronService);
    return NeuronService;
}());



/***/ }),

/***/ "./src/app/services/wander-service.ts":
/*!********************************************!*\
  !*** ./src/app/services/wander-service.ts ***!
  \********************************************/
/*! exports provided: NamedDescription, WanderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedDescription", function() { return NamedDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderService", function() { return WanderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NamedDescription = /** @class */ (function () {
    function NamedDescription(name, text) {
        this.name = name;
        this.text = text;
    }
    return NamedDescription;
}());

var WanderService = /** @class */ (function () {
    function WanderService(http) {
        this.http = http;
    }
    WanderService_1 = WanderService;
    WanderService.prototype.getAboutDescription = function () {
        return new NamedDescription("about", descriptions.about);
    };
    WanderService.prototype.getMainText = function () {
        var reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'plain/text'
        });
        return this.http.get('/index.html', { headers: reqHeaders, responseType: 'text' });
    };
    WanderService.prototype.getNavbarHeight = function () {
        if (WanderService_1.navbarElement == null) {
            return 0;
        }
        return WanderService_1.navbarElement.nativeElement.offsetHeight;
    };
    var WanderService_1;
    WanderService = WanderService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WanderService);
    return WanderService;
}());

var descriptions = {
    "about": "Fun with Angular, Three.js and Typescript"
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.global */ "./src/app/app.global.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var loader = new THREE.FontLoader();
loader.load('/libs/fonts/helvetiker_regular_typeface.json', function (font) {
    _app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].labelFont = font;
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xdd-learn\xdd-neurons\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map