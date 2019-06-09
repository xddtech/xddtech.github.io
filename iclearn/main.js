(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../src/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ../src/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
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
webpackEmptyAsyncContext.id = "../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../src/app/app.component.css":
/*!************************************!*\
  !*** ../src/app/app.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../src/app/app.component.html":
/*!*************************************!*\
  !*** ../src/app/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../src/app/app.component.ts":
/*!***********************************!*\
  !*** ../src/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'iclearn';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "../src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../src/app/app.config.ts":
/*!********************************!*\
  !*** ../src/app/app.config.ts ***!
  \********************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.prototype.toString = function () { };
    ;
    AppConfig.showDebugRoute = false;
    AppConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "../src/app/app.module.ts":
/*!********************************!*\
  !*** ../src/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "../src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar */ "../src/app/components/navbar/navbar.ts");
/* harmony import */ var _components_neurons_neurons_stage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/neurons/neurons-stage */ "../src/app/components/neurons/neurons-stage.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/app-service */ "../src/app/services/app-service.ts");
/* harmony import */ var _services_app_states__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/app-states */ "../src/app/services/app-states.ts");
/* harmony import */ var _components_model_model_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/model/model-source */ "../src/app/components/model/model-source.ts");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about */ "../src/app/components/about/about.ts");
/* harmony import */ var _components_debug_debug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/debug/debug */ "../src/app/components/debug/debug.ts");
/* harmony import */ var _components_tools_modelnav_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tools/modelnav-panel */ "../src/app/components/tools/modelnav-panel.ts");
/* harmony import */ var _components_tools_layersnav_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tools/layersnav-panel */ "../src/app/components/tools/layersnav-panel.ts");
/* harmony import */ var _components_tools_datainput_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tools/datainput-panel */ "../src/app/components/tools/datainput-panel.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_7__["default"],
                _components_neurons_neurons_stage__WEBPACK_IMPORTED_MODULE_8__["default"],
                _components_model_model_source__WEBPACK_IMPORTED_MODULE_11__["default"],
                _components_about_about__WEBPACK_IMPORTED_MODULE_12__["default"],
                _components_debug_debug__WEBPACK_IMPORTED_MODULE_13__["default"],
                _components_tools_modelnav_panel__WEBPACK_IMPORTED_MODULE_14__["default"],
                _components_tools_layersnav_panel__WEBPACK_IMPORTED_MODULE_15__["default"],
                _components_tools_datainput_panel__WEBPACK_IMPORTED_MODULE_16__["default"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _components_neurons_neurons_stage__WEBPACK_IMPORTED_MODULE_8__["default"] },
                    { path: 'model', component: _components_model_model_source__WEBPACK_IMPORTED_MODULE_11__["default"] },
                    { path: 'about', component: _components_about_about__WEBPACK_IMPORTED_MODULE_12__["default"] },
                    { path: 'debug', component: _components_debug_debug__WEBPACK_IMPORTED_MODULE_13__["default"] }
                ])
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] },
                _services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
                _services_app_states__WEBPACK_IMPORTED_MODULE_10__["AppStates"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../src/app/components/about/about.css":
/*!*********************************************!*\
  !*** ../src/app/components/about/about.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about-page {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.about-header {\r\n    color: blue;\r\n    font-size: 3em;\r\n    font-style: italic;\r\n    padding: 20px;\r\n}\r\n.about-text {\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0LXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmFib3V0LWhlYWRlciB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "../src/app/components/about/about.html":
/*!**********************************************!*\
  !*** ../src/app/components/about/about.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about-page\" class=\"container\">\r\n   <div class=\"row text-center\">\r\n      <div class=\"about-header text-shadow-extra\">iclearn</div>\r\n   </div>\r\n   <div class=\"row text-center\">\r\n      <div class=\"about-text text-shadow-extra\">{{aboutText}}</div>\r\n     </div>\r\n</div>"

/***/ }),

/***/ "../src/app/components/about/about.ts":
/*!********************************************!*\
  !*** ../src/app/components/about/about.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-service */ "../src/app/services/app-service.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(appService) {
        this.appService = appService;
        this.load();
    }
    AboutComponent.prototype.load = function () {
        var _this = this;
        this.appService.getAboutHtml().subscribe(function (data) {
            _this.aboutText = data;
        });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about-page',
            template: __webpack_require__(/*! ./about.html */ "../src/app/components/about/about.html"),
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]],
            styles: [__webpack_require__(/*! ./about.css */ "../src/app/components/about/about.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AboutComponent);
    return AboutComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (AboutComponent);


/***/ }),

/***/ "../src/app/components/debug/debug.html":
/*!**********************************************!*\
  !*** ../src/app/components/debug/debug.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n   <div class=\"row text-center\">\r\n      <h4>Debug Info</h4>\r\n   </div>\r\n   <div class=\"well\">\r\n      <div class=\"row text-left\">App States:</div>\r\n      <div *ngFor=\"let item of appStatesDebug | keyvalue\" class=\"row text-info bg-info small\">\r\n          <b>{{item.key}}</b>: {{ toString(item.value) }}\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "../src/app/components/debug/debug.ts":
/*!********************************************!*\
  !*** ../src/app/components/debug/debug.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-states */ "../src/app/services/app-states.ts");



var AppDebugComponent = /** @class */ (function () {
    function AppDebugComponent() {
        this.load();
    }
    AppDebugComponent.prototype.load = function () {
        this.appStatesDebug = _services_app_states__WEBPACK_IMPORTED_MODULE_2__["AppStates"].toDebug();
    };
    AppDebugComponent.prototype.toString = function (obj) {
        return JSON.stringify(obj);
    };
    AppDebugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-debug',
            template: __webpack_require__(/*! ./debug.html */ "../src/app/components/debug/debug.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppDebugComponent);
    return AppDebugComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (AppDebugComponent);


/***/ }),

/***/ "../src/app/components/model/bias-cell.ts":
/*!************************************************!*\
  !*** ../src/app/components/model/bias-cell.ts ***!
  \************************************************/
/*! exports provided: BiasCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiasCell", function() { return BiasCell; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");

var BiasCell = /** @class */ (function () {
    function BiasCell() {
    }
    BiasCell.createMesh = function (modelCell) {
        if (!BiasCell.geometry) {
            var size = modelCell.inputSize;
            var cellColor = { color: 0x444444, specular: 0xaaaaaa, shininess: 30 };
            BiasCell.geometry = new three__WEBPACK_IMPORTED_MODULE_0__["CylinderGeometry"](size / 2, 0, size, 4, 1, false);
            BiasCell.material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"](cellColor);
        }
        var mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](BiasCell.geometry, BiasCell.material);
        return mesh;
    };
    return BiasCell;
}());



/***/ }),

/***/ "../src/app/components/model/input-cell.ts":
/*!*************************************************!*\
  !*** ../src/app/components/model/input-cell.ts ***!
  \*************************************************/
/*! exports provided: InputCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCell", function() { return InputCell; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");

var InputCell = /** @class */ (function () {
    function InputCell() {
    }
    InputCell.createMesh = function (modelCell) {
        if (!InputCell.geometry) {
            var size = modelCell.inputSize;
            var cellColor = { color: 0x004444, specular: 0xaaaaaa, shininess: 30 };
            InputCell.geometry = new three__WEBPACK_IMPORTED_MODULE_0__["CylinderGeometry"](size / 2, size / 2, size, 16);
            InputCell.material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"](cellColor);
        }
        var mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](InputCell.geometry, InputCell.material);
        return mesh;
    };
    return InputCell;
}());



/***/ }),

/***/ "../src/app/components/model/link-info.ts":
/*!************************************************!*\
  !*** ../src/app/components/model/link-info.ts ***!
  \************************************************/
/*! exports provided: LinkInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkInfo", function() { return LinkInfo; });
var LinkInfo = /** @class */ (function () {
    function LinkInfo() {
    }
    LinkInfo.clone = function (linkData) {
        if (linkData == null) {
            return null;
        }
        var link = Object.assign(new LinkInfo(), linkData);
        return link;
    };
    return LinkInfo;
}());



/***/ }),

/***/ "../src/app/components/model/model-cell.ts":
/*!*************************************************!*\
  !*** ../src/app/components/model/model-cell.ts ***!
  \*************************************************/
/*! exports provided: ModelCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelCell", function() { return ModelCell; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");
/* harmony import */ var _net_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./net-cell */ "../src/app/components/model/net-cell.ts");
/* harmony import */ var _input_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-cell */ "../src/app/components/model/input-cell.ts");
/* harmony import */ var _output_cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output-cell */ "../src/app/components/model/output-cell.ts");
/* harmony import */ var _bias_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bias-cell */ "../src/app/components/model/bias-cell.ts");
/* harmony import */ var _link_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link-info */ "../src/app/components/model/link-info.ts");
/* harmony import */ var _neurons_model_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../neurons/model-main */ "../src/app/components/neurons/model-main.ts");







var ModelCell = /** @class */ (function () {
    function ModelCell() {
        this.netSize = 0.1;
        this.inputSize = 0.1;
        this.xyz = [0, 0, 0];
        this.linkToList = [];
        this.linkFromList = [];
    }
    ModelCell.prototype.create = function (layerGroup, layerType) {
        this.createMesh(layerType);
        if (!this.cellMesh) {
            console.error('Failed to create cell mesh at layer ' + this.layerIndex + ', cell seqIndex ' + this.seqIndex);
            return;
        }
        this.cellMesh.matrixAutoUpdate = false;
        this.cellMesh.position.x = this.xyz[0];
        this.cellMesh.position.y = this.xyz[1];
        this.cellMesh.position.z = this.xyz[2];
        this.cellMesh.updateMatrix();
        layerGroup.add(this.cellMesh);
        this.createCellLinks(layerGroup);
        if (this.label != null) {
            this.createCellLabel();
        }
    };
    ModelCell.prototype.createMesh = function (layerType) {
        var type = this.cellType == null ? layerType : this.cellType;
        switch (type) {
            case ModelCell.NET: {
                this.cellMesh = _net_cell__WEBPACK_IMPORTED_MODULE_1__["NetCell"].createMesh(this);
                break;
            }
            case ModelCell.INPUT: {
                this.cellMesh = _input_cell__WEBPACK_IMPORTED_MODULE_2__["InputCell"].createMesh(this);
                break;
            }
            case ModelCell.BIAS: {
                this.cellMesh = _bias_cell__WEBPACK_IMPORTED_MODULE_4__["BiasCell"].createMesh(this);
                break;
            }
            case ModelCell.OUTPUT: {
                this.cellMesh = _output_cell__WEBPACK_IMPORTED_MODULE_3__["OutputCell"].createMesh(this);
                break;
            }
            default: {
                console.error('No implementation for createMesh on cell type: ' + this.cellType);
                break;
            }
        }
    };
    ModelCell.prototype.createCellLinks = function (layerGroup) {
        if (this.linkToList == null || this.linkToList.length == 0) {
            return;
        }
        for (var i in this.linkToList) {
            var linkInfo = this.linkToList[i];
            var toCell = _neurons_model_main__WEBPACK_IMPORTED_MODULE_6__["ModelMain"].currentNeoronsModel.getCellOnLink(linkInfo);
            var line = this.createLinkLine(toCell);
            layerGroup.add(line);
        }
    };
    ModelCell.prototype.createLinkLine = function (toCell) {
        var material = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: 0x0000ff });
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]();
        var from = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](this.xyz[0], this.xyz[1], this.xyz[2]);
        var to = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](toCell.xyz[0], toCell.xyz[1], toCell.xyz[2]);
        geometry.vertices.push(from);
        geometry.vertices.push(to);
        var line = new three__WEBPACK_IMPORTED_MODULE_0__["Line"](geometry, material);
        return line;
    };
    ModelCell.prototype.createCellLabel = function () {
    };
    ModelCell.prototype.getDescription = function () {
        return this.label ? this.label : this.seqIndex;
    };
    ModelCell.prototype.connectTo = function (target) {
        var to = new _link_info__WEBPACK_IMPORTED_MODULE_5__["LinkInfo"]();
        to.layerIndex = target.layerIndex;
        to.seqIndex = target.seqIndex;
        to.weight = 0; //?????
        this.linkToList.push(to);
        var from = new _link_info__WEBPACK_IMPORTED_MODULE_5__["LinkInfo"]();
        from.layerIndex = this.layerIndex;
        from.seqIndex = this.seqIndex;
        from.weight = 0; ///???
        target.linkFromList.push(from);
    };
    ModelCell.prototype.setXyz = function (x, y, z) {
        this.xyz[0] = x;
        this.xyz[1] = y;
        this.xyz[2] = z;
    };
    ModelCell.clone = function (cellData) {
        if (cellData == null) {
            return null;
        }
        var cell = Object.assign(new ModelCell(), cellData);
        // linkTo, linkFrom?
        for (var i in cell.linkTo) {
            cell.linkTo[i] = _link_info__WEBPACK_IMPORTED_MODULE_5__["LinkInfo"].clone(cell.linkTo[i]);
        }
        for (var i in cell.linkFrom) {
            cell.linkFrom[i] = _link_info__WEBPACK_IMPORTED_MODULE_5__["LinkInfo"].clone(cell.linkFrom[i]);
        }
        return cell;
    };
    ModelCell.NET = 'NET';
    ModelCell.BIAS = 'BIAS';
    ModelCell.INPUT = 'INPUT';
    ModelCell.OUTPUT = 'OUTPUT';
    return ModelCell;
}());



/***/ }),

/***/ "../src/app/components/model/model-config.ts":
/*!***************************************************!*\
  !*** ../src/app/components/model/model-config.ts ***!
  \***************************************************/
/*! exports provided: ModelConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelConfig", function() { return ModelConfig; });
var ModelConfig = /** @class */ (function () {
    function ModelConfig() {
    }
    ModelConfig.clone = function (configData) {
        if (configData == null) {
            return null;
        }
        var modelConfig = Object.assign(new ModelConfig(), configData);
        return modelConfig;
    };
    return ModelConfig;
}());



/***/ }),

/***/ "../src/app/components/model/model-layer.ts":
/*!**************************************************!*\
  !*** ../src/app/components/model/model-layer.ts ***!
  \**************************************************/
/*! exports provided: ModelLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelLayer", function() { return ModelLayer; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");
/* harmony import */ var _model_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-cell */ "../src/app/components/model/model-cell.ts");
/* harmony import */ var _neurons_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neurons-model */ "../src/app/components/model/neurons-model.ts");



var ModelLayer = /** @class */ (function () {
    function ModelLayer() {
        this.cellList = [];
        this.hasBias = false;
    }
    ModelLayer.prototype.create = function (rootGroup) {
        this.layerGroup = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
        rootGroup.add(this.layerGroup);
        var i;
        for (i = 0; i < this.cellList.length; i++) {
            this.cellList[i].create(this.layerGroup, this.layerType);
        }
    };
    ModelLayer.prototype.collectLayerInfo = function () {
        for (var i in this.cellList) {
            if (this.cellList[i].cellType == _model_cell__WEBPACK_IMPORTED_MODULE_1__["ModelCell"].BIAS) {
                this.hasBias = true;
            }
        }
    };
    ModelLayer.prototype.addCell = function (cell) {
        cell.layerIndex = this.layerIndex;
        this.cellList.push(cell);
    };
    ModelLayer.prototype.setLayerIndex = function (index) {
        this.layerIndex = index;
        var i;
        for (i = 0; i < this.cellList.length; i++) {
            this.cellList[i].layerIndex = this.layerIndex;
        }
    };
    ModelLayer.prototype.setupCellLayout = function (cellLayout, cellGap, maxRowCells) {
        if (cellLayout === _neurons_model__WEBPACK_IMPORTED_MODULE_2__["NeuronsModel"].SQUARE) {
            this.setupCellLayoutSquare(this.layerHeight, cellGap);
        }
        else {
            this.setupCellLayoutRowFill(this.layerHeight, cellGap, maxRowCells);
        }
    };
    ModelLayer.prototype.setupCellLayoutRowFill = function (layerHeight, cellGap, maxRowCells) {
        if (this.cellList == null || this.cellList.length == 0) {
            console.error('cellList is empty at layer ' + this.layerIndex);
            return;
        }
        var cellsCount = this.cellList.length;
        var zpos = 0;
        var rowCells = cellsCount > maxRowCells ? maxRowCells : cellsCount;
        var xpos = -(rowCells - 1) * cellGap / 2;
        var ypos = layerHeight;
        var seq;
        var rowCount = 0;
        for (seq = 0; seq < cellsCount; seq++) {
            var cell = this.cellList[seq];
            cell.seqIndex = seq;
            cell.setXyz(xpos, ypos, zpos);
            rowCount++;
            if (rowCount > maxRowCells) {
                rowCount = 0;
                zpos = -cellGap;
                rowCells = (cellsCount - seq) > maxRowCells ? maxRowCells : (cellsCount - seq);
                xpos = -rowCells * cellGap / 2;
            }
            else {
                xpos += cellGap;
            }
        }
    };
    ModelLayer.prototype.setupCellLayoutSquare = function (layerHeight, cellGap) {
    };
    ModelLayer.prototype.getDescription = function () {
        return this.layerType + ": " + this.cellList.length;
    };
    ModelLayer.clone = function (layerData) {
        if (layerData == null) {
            return null;
        }
        var layer = Object.assign(new ModelLayer(), layerData);
        for (var i in layer.cellList) {
            layer.cellList[i] = _model_cell__WEBPACK_IMPORTED_MODULE_1__["ModelCell"].clone(layer.cellList[i]);
        }
        return layer;
    };
    ModelLayer.NET = 'NET';
    ModelLayer.INPUT = 'INPUT';
    ModelLayer.OUTPUT = 'OUTPUT';
    ModelLayer.DENSELAYER = "DenseLayer";
    return ModelLayer;
}());



/***/ }),

/***/ "../src/app/components/model/model-source.html":
/*!*****************************************************!*\
  !*** ../src/app/components/model/model-source.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row text-center\">\r\n      <h3>{{neuronsModelName}}</h3>\r\n    </div>\r\n    <div class=\"row text-center\">\r\n        {{neuronsModelPath}}\r\n    </div>\r\n    <div id=\"model-source-detail\">\r\n        <div [innerHtml]=\"sourceHtmlDetail\"></div>\r\n    </div>\r\n</div>  "

/***/ }),

/***/ "../src/app/components/model/model-source.ts":
/*!***************************************************!*\
  !*** ../src/app/components/model/model-source.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-service */ "../src/app/services/app-service.ts");
/* harmony import */ var _services_app_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-states */ "../src/app/services/app-states.ts");





var ModelSourceComponent = /** @class */ (function () {
    function ModelSourceComponent(appService, appStates, sanitizer) {
        this.appService = appService;
        this.appStates = appStates;
        this.sanitizer = sanitizer;
    }
    ModelSourceComponent.prototype.ngOnInit = function () {
        this.getModelSource();
    };
    ModelSourceComponent.prototype.ngAfterViewInit = function () {
    };
    ModelSourceComponent.prototype.getModelSource = function () {
        this.neuronsModelSrc = this.appStates.getCurrentNeuronsModelSrc();
        if (this.neuronsModelSrc) {
            this.generateModelDetail();
        }
        else {
            this.neuronsModelName = "undefined";
            this.sourceDetail = "neuronsModelSrc is null";
        }
        this.neuronsModelPath = _services_app_states__WEBPACK_IMPORTED_MODULE_4__["AppStates"].neuronsModelPath;
        this.sourceHtmlDetail = this.sanitizer.bypassSecurityTrustHtml(this.sourceDetail);
    };
    ModelSourceComponent.prototype.generateModelDetail = function () {
        var rawJson = JSON.parse(this.neuronsModelSrc);
        this.neuronsModelName = rawJson.name;
        //this.sourceDetail = this.neuronsModelSrc;
        this.sourceDetail = '<ul>';
        this.traverseObject('root', rawJson);
        this.sourceDetail += '</ul>';
    };
    ModelSourceComponent.prototype.traverseObject = function (key, obj) {
        var type = typeof obj;
        if (type == 'object') {
            for (var key in obj) {
                var child = obj[key];
                var isChildObject = typeof child == 'object' ? true : false;
                if (isChildObject) {
                    this.sourceDetail += '<li>' + key + ':<ul>';
                }
                this.traverseObject(key, obj[key]);
                if (isChildObject) {
                    this.sourceDetail += '</ul></li>';
                }
            }
        }
        else {
            this.sourceDetail += '<li>';
            this.sourceDetail += key + ': ' + ((obj == null) ? 'null' : JSON.stringify(obj)) + ',';
            this.sourceDetail += '</li>';
        }
    };
    ModelSourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'model-source',
            template: __webpack_require__(/*! ./model-source.html */ "../src/app/components/model/model-source.html"),
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_4__["AppStates"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_4__["AppStates"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ModelSourceComponent);
    return ModelSourceComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (ModelSourceComponent);


/***/ }),

/***/ "../src/app/components/model/net-cell.ts":
/*!***********************************************!*\
  !*** ../src/app/components/model/net-cell.ts ***!
  \***********************************************/
/*! exports provided: NetCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetCell", function() { return NetCell; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");

var NetCell = /** @class */ (function () {
    function NetCell() {
    }
    NetCell.createMesh = function (modelCell) {
        var cellColor = { color: 0xe58d3b, specular: 0xaaaaaa, shininess: 30 };
        var size = modelCell.netSize;
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxBufferGeometry"](size, size, size);
        var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshLambertMaterial"](cellColor);
        var mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        return mesh;
    };
    return NetCell;
}());



/***/ }),

/***/ "../src/app/components/model/neurons-model.ts":
/*!****************************************************!*\
  !*** ../src/app/components/model/neurons-model.ts ***!
  \****************************************************/
/*! exports provided: NeuronsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeuronsModel", function() { return NeuronsModel; });
/* harmony import */ var _model_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-config */ "../src/app/components/model/model-config.ts");
/* harmony import */ var _model_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-layer */ "../src/app/components/model/model-layer.ts");
/* harmony import */ var _model_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-cell */ "../src/app/components/model/model-cell.ts");



var NeuronsModel = /** @class */ (function () {
    function NeuronsModel() {
        this.networkType = NeuronsModel.MULTILAYER_NETWORK;
        this.name = '';
        this.cellGap = 0.5;
        this.layerGap = 1;
        this.maxRowCells = 20;
        this.cellLayout = NeuronsModel.ROW_FILL;
    }
    NeuronsModel.prototype.create = function (rootGroup) {
        var index;
        for (index = 0; index < this.layers.length; index++) {
            this.layers[index].create(rootGroup);
        }
    };
    NeuronsModel.prototype.preProcess = function () {
        if (!this.validate()) {
            return;
        }
        this.collectModelInfo();
        this.setupLayout();
        this.setupLayerLinks();
    };
    NeuronsModel.prototype.collectModelInfo = function () {
        for (var i in this.layers) {
            this.layers[i].collectLayerInfo();
        }
    };
    NeuronsModel.prototype.validate = function () {
        if (this.layers == null || this.layers.length == 0) {
            console.warn('No layers in neurons network');
            return false;
        }
        if (this.layers.length == 1) {
            console.warn('Only one layer in neurons network');
            return false;
        }
        var cellList0 = this.layers[0].cellList;
        if (cellList0 == null || cellList0.length == 0) {
            console.warn('Empty input cells');
            return false;
        }
        return true;
    };
    NeuronsModel.prototype.setupLayout = function () {
        // set input layer position below 
        var layerHeight = -this.layerGap;
        var index;
        for (index = 0; index < this.layers.length; index++) {
            var layer = this.layers[index];
            layer.setLayerIndex(index);
            layer.layerHeight = layerHeight;
            layer.setupCellLayout(this.cellLayout, this.cellGap, this.maxRowCells);
            layerHeight += this.layerGap;
        }
    };
    NeuronsModel.prototype.updateLayersLayoutOnly = function () {
        var index;
        for (index = 0; index < this.layers.length; index++) {
            var layer = this.layers[index];
            layer.setupCellLayout(this.cellLayout, this.cellGap, this.maxRowCells);
        }
    };
    NeuronsModel.prototype.setupLayerLinks = function () {
        var index;
        for (index = 0; index < this.layers.length - 1; index++) {
            var layer = this.layers[index];
            var nextLayer = this.layers[index + 1];
            this.connectLayers(layer, nextLayer);
        }
    };
    NeuronsModel.prototype.connectLayers = function (layer, nextLayer) {
        switch (layer.linkType) {
            case _model_layer__WEBPACK_IMPORTED_MODULE_1__["ModelLayer"].DENSELAYER: {
                this.connectDenseLayers(layer, nextLayer);
                break;
            }
            default: {
                console.error('Invalid layer link type at ' + layer.layerIndex);
                break;
            }
        }
    };
    NeuronsModel.prototype.connectDenseLayers = function (layer, nextLayer) {
        if (layer.cellList == null || nextLayer.cellList == null) {
            console.error('Null cellList at one of layers ' + layer.layerIndex + ", " + nextLayer.layerIndex);
            return;
        }
        for (var i in layer.cellList) {
            for (var j in nextLayer.cellList) {
                var jcell = nextLayer.cellList[j];
                if (jcell.cellType != _model_cell__WEBPACK_IMPORTED_MODULE_2__["ModelCell"].BIAS) {
                    layer.cellList[i].connectTo(jcell);
                }
            }
        }
    };
    NeuronsModel.prototype.getCellOnLink = function (linkInfo) {
        var layer = this.layers[linkInfo.layerIndex];
        return layer.cellList[linkInfo.seqIndex];
    };
    NeuronsModel.clone = function (modelData) {
        if (modelData == null) {
            return null;
        }
        var model = Object.assign(new NeuronsModel(), modelData);
        model.config = _model_config__WEBPACK_IMPORTED_MODULE_0__["ModelConfig"].clone(model.config);
        for (var i in model.layers) {
            model.layers[i] = _model_layer__WEBPACK_IMPORTED_MODULE_1__["ModelLayer"].clone(model.layers[i]);
        }
        return model;
    };
    NeuronsModel.MULTILAYER_NETWORK = 'MultiLayerNetwork';
    NeuronsModel.SQUARE = 'SQUARE';
    NeuronsModel.ROW_FILL = 'ROW_FILL';
    return NeuronsModel;
}());



/***/ }),

/***/ "../src/app/components/model/output-cell.ts":
/*!**************************************************!*\
  !*** ../src/app/components/model/output-cell.ts ***!
  \**************************************************/
/*! exports provided: OutputCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputCell", function() { return OutputCell; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");

var OutputCell = /** @class */ (function () {
    function OutputCell() {
    }
    OutputCell.createMesh = function (modelCell) {
        if (!OutputCell.geometry) {
            var size = modelCell.inputSize;
            var cellColor = { color: 0x004444, specular: 0xaaaaaa, shininess: 30 };
            OutputCell.geometry = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](size / 2, 32, 32);
            OutputCell.material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"](cellColor);
        }
        var mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](OutputCell.geometry, OutputCell.material);
        return mesh;
    };
    return OutputCell;
}());



/***/ }),

/***/ "../src/app/components/navbar/navbar.css":
/*!***********************************************!*\
  !*** ../src/app/components/navbar/navbar.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.brand-style {\r\n  color: white;\r\n  float: left;\r\n  height: 40px;\r\n  padding: 15px 15px;\r\n  font-size: 16px;\r\n  font-style: italic;\r\n  line-height: 16px;\r\n  text-shadow: 0 1px 0 #ccc,\r\n               0 2px 0 #c9c9c9,\r\n               0 3px 0 #bbb,\r\n               0 4px 0 #b9b9b9,\r\n               0 5px 0 #aaa,\r\n               0 6px 1px rgba(0,0,0,.1),\r\n               0 0 5px rgba(0,0,0,.1),\r\n               0 1px 3px rgba(0,0,0,.3),\r\n               0 3px 5px rgba(0,0,0,.2),\r\n               0 5px 10px rgba(0,0,0,.25),\r\n               0 10px 10px rgba(0,0,0,.2),\r\n               0 20px 20px rgba(0,0,0,.15);\r\n}\r\n\r\n.navbar-customized {\r\n    margin-bottom: 0px !important;\r\n    border-radius: 0px !important;\r\n    padding: 0px !important;\r\n    height: 40px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakI7Ozs7Ozs7Ozs7OzBDQVd3QztBQUMxQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJyYW5kLXN0eWxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNjY2MsXHJcbiAgICAgICAgICAgICAgIDAgMnB4IDAgI2M5YzljOSxcclxuICAgICAgICAgICAgICAgMCAzcHggMCAjYmJiLFxyXG4gICAgICAgICAgICAgICAwIDRweCAwICNiOWI5YjksXHJcbiAgICAgICAgICAgICAgIDAgNXB4IDAgI2FhYSxcclxuICAgICAgICAgICAgICAgMCA2cHggMXB4IHJnYmEoMCwwLDAsLjEpLFxyXG4gICAgICAgICAgICAgICAwIDAgNXB4IHJnYmEoMCwwLDAsLjEpLFxyXG4gICAgICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLDAsMCwuMyksXHJcbiAgICAgICAgICAgICAgIDAgM3B4IDVweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgICAgICAgMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yNSksXHJcbiAgICAgICAgICAgICAgIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjIpLFxyXG4gICAgICAgICAgICAgICAwIDIwcHggMjBweCByZ2JhKDAsMCwwLC4xNSk7XHJcbn1cclxuXHJcbi5uYXZiYXItY3VzdG9taXplZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "../src/app/components/navbar/navbar.html":
/*!************************************************!*\
  !*** ../src/app/components/navbar/navbar.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #appNavbar class=\"navbar navbar-inverse navbar-customized\" role=\"navigation\">\r\n  <div class=\"\">\r\n     <span class=\"brand-style\">iclearn</span>\r\n  </div>\r\n\r\n  <ul class=\"nav navbar-nav\">\r\n       <li><a routerLink=\"/\">Home</a></li>\r\n       <li><a routerLink=\"/model\">Model</a></li>\r\n       <li><a routerLink=\"/about\">About</a></li>\r\n       <li *ngIf=\"showDebugRoute\"><a routerLink=\"/debug\">Debug</a></li>\r\n   </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "../src/app/components/navbar/navbar.ts":
/*!**********************************************!*\
  !*** ../src/app/components/navbar/navbar.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-states */ "../src/app/services/app-states.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.config */ "../src/app/app.config.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(appStates) {
        this.appStates = appStates;
        this.showDebugRoute = _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].showDebugRoute;
    }
    NavbarComponent.prototype.ngAfterViewInit = function () {
        _services_app_states__WEBPACK_IMPORTED_MODULE_2__["AppStates"].navbarElem = this.navbarElement;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNavbar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavbarComponent.prototype, "navbarElement", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.html */ "../src/app/components/navbar/navbar.html"),
            providers: [_services_app_states__WEBPACK_IMPORTED_MODULE_2__["AppStates"]],
            styles: [__webpack_require__(/*! ./navbar.css */ "../src/app/components/navbar/navbar.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_states__WEBPACK_IMPORTED_MODULE_2__["AppStates"]])
    ], NavbarComponent);
    return NavbarComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);


/***/ }),

/***/ "../src/app/components/neurons/model-main.ts":
/*!***************************************************!*\
  !*** ../src/app/components/neurons/model-main.ts ***!
  \***************************************************/
/*! exports provided: ModelMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelMain", function() { return ModelMain; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");
/* harmony import */ var _neurons_neurons_model_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../neurons/neurons-model-view */ "../src/app/components/neurons/neurons-model-view.ts");
/* harmony import */ var _model_neurons_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/neurons-model */ "../src/app/components/model/neurons-model.ts");



var ModelMain = /** @class */ (function () {
    function ModelMain(viewScene, appService, appStates) {
        this.viewScene = viewScene;
        this.appService = appService;
        this.appStates = appStates;
        this.init();
    }
    ModelMain.prototype.init = function () {
        this.rootGroup = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
        this.viewScene.add(this.rootGroup);
        ModelMain.mainRootGroup = this.rootGroup;
        var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__["AxesHelper"](100);
        this.rootGroup.add(axesHelper);
    };
    ModelMain.prototype.loadCreateModel = function () {
        var _this = this;
        /*
        this.appService.loadDefaultModel().subscribe(modelData => {
           this.neuronsModel = NeuronsModel.clone(modelData);
           ModelMain.currentNeoronsModel = this.neuronsModel;
           this.appStates.setCurrentNeuronsModel(this.neuronsModel, JSON.stringify(modelData));
           this.neuronsModel.preProcess();
           this.neuronsModel.create(this.rootGroup);
        });
        */
        this.appService.loadDefaultModelSrc().subscribe(function (modelDataSrc) {
            // keep original text
            var srcJson = JSON.stringify(modelDataSrc);
            // convert to a model
            var modelData = new _model_neurons_model__WEBPACK_IMPORTED_MODULE_2__["NeuronsModel"]();
            Object.assign(modelData, modelDataSrc);
            // do deep clone
            _this.neuronsModel = _model_neurons_model__WEBPACK_IMPORTED_MODULE_2__["NeuronsModel"].clone(modelData);
            ModelMain.currentNeoronsModel = _this.neuronsModel;
            _this.appStates.setCurrentNeuronsModel(_this.neuronsModel, srcJson);
            // preprocess the model
            _this.neuronsModel.preProcess();
            // create graphs
            _this.neuronsModel.create(_this.rootGroup);
        });
    };
    ModelMain.prototype.create = function () {
        //var geometry = new THREE.BoxBufferGeometry( 0.1, 0.1, 0.1 );
        //var material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } );
        //var object = new THREE.Mesh( geometry, material );
        //this.rootGroup.add(object);
        this.loadCreateModel();
    };
    ModelMain.toggleLayerVisibility = function (index, visible) {
        var neuronsModel = ModelMain.currentNeoronsModel;
        if (neuronsModel == null) {
            console.error('toggleLayerVisibility has null currentNeoronsModel');
            return;
        }
        var layer = neuronsModel.layers[index];
        if (layer.layerGroup == null) {
            console.error('toggleLayerVisibility has null layerGroup at ' + index);
            return;
        }
        if (visible) {
            layer.layerGroup.traverse(function (object) { object.visible = true; });
        }
        else {
            layer.layerGroup.traverse(function (object) { object.visible = false; });
        }
        _neurons_neurons_model_view__WEBPACK_IMPORTED_MODULE_1__["NeuronsModelView"].animate();
    };
    return ModelMain;
}());



/***/ }),

/***/ "../src/app/components/neurons/neurons-model-view.ts":
/*!***********************************************************!*\
  !*** ../src/app/components/neurons/neurons-model-view.ts ***!
  \***********************************************************/
/*! exports provided: NeuronsModelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeuronsModelView", function() { return NeuronsModelView; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");
/* harmony import */ var _controls_TrackballControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controls/TrackballControls.js */ "../src/app/controls/TrackballControls.js");
/* harmony import */ var _model_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-main */ "../src/app/components/neurons/model-main.ts");



// /// <reference path="../../../typings/app.threex.d.ts" />
var NeuronsModelView = /** @class */ (function () {
    function NeuronsModelView(neuronsStageElement, appService, appStates) {
        this.neuronsStageElement = neuronsStageElement;
        this.appService = appService;
        this.appStates = appStates;
        NeuronsModelView.appStatesRef = this.appStates;
    }
    NeuronsModelView.prototype.create = function () {
        NeuronsModelView.viewScene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.addCameraAndControls();
        NeuronsModelView.viewRender = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({ antialias: true });
        var vrender = NeuronsModelView.viewRender;
        vrender.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0xEEEEEE));
        NeuronsModelView.onWindowResize();
        this.neuronsStageElement.appendChild(vrender.domElement);
        window.addEventListener("resize", NeuronsModelView.onWindowResize);
        NeuronsModelView.listenNeuronsStageEvents();
        this.addBackground();
        this.addShowObjects();
        this.addShowLights();
        NeuronsModelView.animate();
    };
    NeuronsModelView.prototype.addCameraAndControls = function () {
        var fov = 30;
        var aspect = this.getCameraAspect();
        var near = 0.1;
        var far = 500;
        NeuronsModelView.viewCamera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](fov, aspect, near, far);
        var vcamera = NeuronsModelView.viewCamera;
        vcamera.position.x = 0;
        vcamera.position.y = 2;
        vcamera.position.z = 12;
        var lookAt = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0);
        vcamera.lookAt(lookAt);
        // right mouse not work when pass element
        var trackball = new three__WEBPACK_IMPORTED_MODULE_0__["TrackballControls"](vcamera, document.getElementById('neurons-stage-div'));
        //var trackball = new THREE.TrackballControls(vcamera);
        NeuronsModelView.appCamControl = trackball;
        trackball.rotateSpeed = 1.0;
        trackball.zoomSpeed = 1.0;
        trackball.panSpeed = 1.0;
        trackball.noZoom = false;
        trackball.noPan = false;
        trackball.staticMoving = true;
        trackball.dynamicDampingFactor = 0.3;
        trackball.keys = [65, 83, 68];
        trackball.addEventListener('change', NeuronsModelView.renderScene);
    };
    NeuronsModelView.prototype.addShowObjects = function () {
        var vscene = NeuronsModelView.viewScene;
        var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__["AxesHelper"](100);
        //vscene.add(axesHelper);
        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](1, 1, 1);
        var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: 0x00ff00 });
        var cube = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        //vscene.add(cube);
        var modelMain = new _model_main__WEBPACK_IMPORTED_MODULE_2__["ModelMain"](vscene, this.appService, this.appStates);
        modelMain.create();
    };
    NeuronsModelView.prototype.addBackground = function () {
        NeuronsModelView.viewScene.background = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0xcce0ff);
    };
    NeuronsModelView.prototype.addShowLights = function () {
        NeuronsModelView.viewScene.add(new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0xffffff));
        var light1 = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](0xdfebff, 1.75);
        light1.position.set(50, 200, 100);
        light1.position.multiplyScalar(1.3);
        light1.castShadow = false;
        NeuronsModelView.viewScene.add(light1);
        var light2 = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](0xdfebff, 0.8);
        light2.position.set(-250, 510, 1150);
        light2.castShadow = false;
        NeuronsModelView.viewScene.add(light2);
    };
    NeuronsModelView.prototype.getCameraAspect = function () {
        var navbarHeight = this.appStates.getNavbarHeight();
        var height = window.innerHeight - navbarHeight;
        return window.innerWidth / height;
    };
    NeuronsModelView.onWindowResize = function () {
        var navbarHeight = NeuronsModelView.appStatesRef.getNavbarHeight();
        var height = window.innerHeight - navbarHeight;
        NeuronsModelView.viewRender.setSize(window.innerWidth, height);
        NeuronsModelView.animate();
    };
    NeuronsModelView.listenNeuronsStageEvents = function () {
        var myObj = document.getElementById('neurons-stage-div');
        for (var key in myObj) {
            if (key.search('on') === 0) {
                myObj.addEventListener(key.slice(2), NeuronsModelView.onNeuronsStageEvents);
            }
        }
    };
    NeuronsModelView.onNeuronsStageEvents = function (event) {
        if (!NeuronsModelView.letAnimateRun) {
            NeuronsModelView.animate();
        }
    };
    NeuronsModelView.animate = function () {
        NeuronsModelView.letAnimateRun = true;
        NeuronsModelView.animateStartTime = NeuronsModelView.showClock.getElapsedTime();
        NeuronsModelView.animateWork();
    };
    NeuronsModelView.animateWork = function () {
        if (!NeuronsModelView.letAnimateRun) {
            return;
        }
        var dt = NeuronsModelView.showClock.getElapsedTime() - NeuronsModelView.animateStartTime;
        if (dt > NeuronsModelView.animateLiveSecDefault) {
            NeuronsModelView.letAnimateRun = false;
        }
        requestAnimationFrame(NeuronsModelView.animateWork);
        if (NeuronsModelView.viewRender == null) {
            console.error("viewRender is null");
            return;
        }
        var deltaTime = NeuronsModelView.showClock.getDelta();
        var elapsedTime = NeuronsModelView.showClock.getElapsedTime() * 10;
        try {
            NeuronsModelView.renderScene();
            if (NeuronsModelView.appCamControl instanceof three__WEBPACK_IMPORTED_MODULE_0__["TrackballControls"]) {
                NeuronsModelView.appCamControl.update();
            }
            /*} else if (NeuronModelView.appCamControl instanceof THREE.TrackballControls) {
               NeuronModelView.appCamControl.update();
            }*/
        }
        catch (error) {
            console.error("render error " + error);
        }
    };
    NeuronsModelView.renderScene = function () {
        NeuronsModelView.viewRender.render(NeuronsModelView.viewScene, NeuronsModelView.viewCamera);
    };
    NeuronsModelView.showClock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
    NeuronsModelView.animateLiveSecDefault = 10;
    return NeuronsModelView;
}());



/***/ }),

/***/ "../src/app/components/neurons/neurons-stage.css":
/*!*******************************************************!*\
  !*** ../src/app/components/neurons/neurons-stage.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".neurons-stage-margin {\r\n    margin: 0px;\r\n    border: 0px;\r\n    padding: 0px;\r\n  }\r\n  \r\n#neurons-stage>canvas {\r\n    margin: 0px;\r\n    border: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXVyb25zL25ldXJvbnMtc3RhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldXJvbnMvbmV1cm9ucy1zdGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV1cm9ucy1zdGFnZS1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgXHJcbiNuZXVyb25zLXN0YWdlPmNhbnZhcyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "../src/app/components/neurons/neurons-stage.html":
/*!********************************************************!*\
  !*** ../src/app/components/neurons/neurons-stage.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"neurons-stage-div\" class=\"container-fluid, neurons-stage-margin\"></div>\r\n<modelnav-panel></modelnav-panel>"

/***/ }),

/***/ "../src/app/components/neurons/neurons-stage.ts":
/*!******************************************************!*\
  !*** ../src/app/components/neurons/neurons-stage.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-service */ "../src/app/services/app-service.ts");
/* harmony import */ var _services_app_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-states */ "../src/app/services/app-states.ts");
/* harmony import */ var _neurons_model_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neurons-model-view */ "../src/app/components/neurons/neurons-model-view.ts");





var neuronsStageDiv = "neurons-stage-div";
var NeuronsStageComponent = /** @class */ (function () {
    function NeuronsStageComponent(appService, appStates) {
        this.appService = appService;
        this.appStates = appStates;
    }
    NeuronsStageComponent.prototype.ngAfterViewInit = function () {
        // hide scrollbar
        $("body").css("overflow", "hidden");
        this.afterShowElementReady();
    };
    NeuronsStageComponent.prototype.ngOnDestroy = function () {
        // show scrollbar for other routes
        $("body").css("overflow", "auto");
    };
    NeuronsStageComponent.prototype.getNeuronsStageElement = function () {
        return document.getElementById(neuronsStageDiv);
    };
    NeuronsStageComponent.prototype.afterShowElementReady = function () {
        if (this.getNeuronsStageElement() == null) {
            console.log("show element not ready, waiting ...");
            setTimeout(this.afterShowElementReady, 200);
            return;
        }
        this.createShow();
    };
    NeuronsStageComponent.prototype.createShow = function () {
        if (this.neuronsModelView == null) {
            this.neuronsModelView = new _neurons_model_view__WEBPACK_IMPORTED_MODULE_4__["NeuronsModelView"](this.getNeuronsStageElement(), this.appService, this.appStates);
            this.neuronsModelView.create();
        }
        else {
            this.getNeuronsStageElement().appendChild(_neurons_model_view__WEBPACK_IMPORTED_MODULE_4__["NeuronsModelView"].viewRender.domElement);
            console.log("loaded the existing show renderer");
        }
    };
    NeuronsStageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'neurons-stage',
            template: __webpack_require__(/*! ./neurons-stage.html */ "../src/app/components/neurons/neurons-stage.html"),
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_3__["AppStates"]],
            styles: [__webpack_require__(/*! ./neurons-stage.css */ "../src/app/components/neurons/neurons-stage.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_3__["AppStates"]])
    ], NeuronsStageComponent);
    return NeuronsStageComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (NeuronsStageComponent);


/***/ }),

/***/ "../src/app/components/tools/datainput-panel.css":
/*!*******************************************************!*\
  !*** ../src/app/components/tools/datainput-panel.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#datainput-panel {\r\n    position: absolute;\r\n    z-index: 9;\r\n}\r\n\r\n.input-action-menu {\r\n    background: rgba(0, 0, 0, 0.2) !important;\r\n    border-radius: 100% 100% 0 0;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.action-close {\r\n    text-align: left;\r\n}\r\n\r\n.action-go {\r\n    text-align: center;\r\n}\r\n\r\n.action-go a {\r\n    color: black;\r\n    padding: 2px;\r\n    margin: 0px 0px 0px 0px;\r\n    vertical-align: top;\r\n    border: none;\r\n    border-radius: 100% 100% 100% 100%;\r\n    background: rgba(0, 255, 0, 0.4) !important;\r\n    box-shadow: 2px 2px 2px black;\r\n}\r\n\r\n.action-type {\r\n    text-align: right;\r\n}\r\n\r\n.action-type select {\r\n    background: rgba(0, 255, 0, 0.4) !important;\r\n    border: 0px;\r\n    border-radius: 20% 20% 20% 20%;\r\n    box-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#input-table {\r\n    width: 100% !important;\r\n    background: rgba(220, 220, 220, 0.1)!important;\r\n}\r\n\r\n.input-table-x {\r\n    border-left: 1px grey;\r\n    border-right: 1px grey;\r\n    border-bottom: 1px grey;\r\n    border: 1;\r\n}\r\n\r\n#input-table th {\r\n    text-align: center;\r\n    font-size: 0.8em;\r\n}\r\n\r\n#input-table input {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    border: 0px;\r\n    width: 100px;\r\n    background: rgba(0, 220, 220, 0)!important;\r\n}\r\n\r\n#input-table td {\r\n    width: 10px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    background: rgba(0, 220, 220, 0.1)!important;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9kYXRhaW5wdXQtcGFuZWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUMzQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSwyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWiw0Q0FBNEM7RUFDOUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xzL2RhdGFpbnB1dC1wYW5lbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGF0YWlucHV0LXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi5pbnB1dC1hY3Rpb24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgMTAwJSAwIDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmFjdGlvbi1jbG9zZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYWN0aW9uLWdvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWN0aW9uLWdvIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAxMDAlIDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmFjdGlvbi10eXBlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5hY3Rpb24tdHlwZSBzZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlIDIwJSAyMCUgMjAlO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbiNpbnB1dC10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjEpIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LXRhYmxlLXgge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBncmV5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZ3JleTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBncmV5O1xyXG4gICAgYm9yZGVyOiAxO1xyXG59XHJcblxyXG4jaW5wdXQtdGFibGUgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuI2lucHV0LXRhYmxlIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIyMCwgMjIwLCAwKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNpbnB1dC10YWJsZSB0ZCB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyMjAsIDIyMCwgMC4xKSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "../src/app/components/tools/datainput-panel.html":
/*!********************************************************!*\
  !*** ../src/app/components/tools/datainput-panel.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"datainput-panel\" #dataInputPanelRoot class=\"conatiner\">\r\n    <div class=\"row\">\r\n        <div id=\"input-action-header\" class=\"col-sm-4 input-action-menu action-close\">\r\n            <a (click)=\"closeDataInputView()\"><span class=\"glyphicon glyphicon-remove-sign close-sign-extra\"></span></a>\r\n        </div>\r\n        <div class=\"col-sm-4 input-action-menu action-go\">\r\n            <a (click)=\"processInput()\">Go</a>\r\n        </div>\r\n        <div class=\"col-sm-4 input-action-menu action-type\">\r\n            <select class=\"select-button\" (change)=\"onInputTypeChange($event.target.value)\">\r\n                <option *ngFor=\"let opt of inputTypesOpt\" [value]=\"opt\">{{opt}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"neuronsModel\" class=\"row\" >\r\n        <table id=\"input-table\" border=\"1\" class=\"input-table-x\">\r\n            <thead>\r\n            <tr>\r\n               <th *ngFor=\"let cell of neuronsModel.layers[0].cellList; let i = index\">\r\n                   {{cell.getDescription()}}\r\n               </th>\r\n               <th>expected</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n               <td *ngFor=\"let cell of neuronsModel.layers[0].cellList; let i = index\">\r\n                   <input id=\"input-value-{{cell.seqIndex}}\" autocomplete=\"off\" />\r\n               </td>\r\n               <td><input id=\"expected-input\" [disabled]=\"expectedDisabled\" /></td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../src/app/components/tools/datainput-panel.ts":
/*!******************************************************!*\
  !*** ../src/app/components/tools/datainput-panel.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-service */ "../src/app/services/app-service.ts");
/* harmony import */ var _services_app_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-states */ "../src/app/services/app-states.ts");
/* harmony import */ var _model_neurons_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/neurons-model */ "../src/app/components/model/neurons-model.ts");





var DataInputPanelComponent = /** @class */ (function () {
    function DataInputPanelComponent(appService, appStates) {
        this.appService = appService;
        this.appStates = appStates;
        this.closeDataInputPanelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputTypesOpt = ['Predict', 'Learn', 'Test'];
        this.inputType = 'Predict';
        this.expectedDisabled = true;
    }
    DataInputPanelComponent.prototype.ngAfterViewInit = function () {
        //this.inputLayer = this.neuronsModel.layers[0];
    };
    DataInputPanelComponent.prototype.ngAfterContentChecked = function () {
    };
    DataInputPanelComponent.prototype.onInputTypeChange = function (newValue) {
        this.inputType = newValue;
        var bg = 'rgba(0, 220, 220, 0)!important';
        if (this.inputType == 'Predict') {
            this.expectedDisabled = true;
        }
        else {
            this.expectedDisabled = false;
            bg = 'rgba(0, 0, 0, 0)!important';
        }
        // not work??
        $('#expected-input').css('background-color', 'red !important');
    };
    DataInputPanelComponent.prototype.processInput = function () {
    };
    DataInputPanelComponent.prototype.closeDataInputView = function () {
        this.closeDataInputPanelEvent.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataInputPanelRoot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DataInputPanelComponent.prototype, "rootRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataInputPanelComponent.prototype, "closeDataInputPanelEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_neurons_model__WEBPACK_IMPORTED_MODULE_4__["NeuronsModel"])
    ], DataInputPanelComponent.prototype, "neuronsModel", void 0);
    DataInputPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'datainput-panel',
            template: __webpack_require__(/*! ./datainput-panel.html */ "../src/app/components/tools/datainput-panel.html"),
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_3__["AppStates"]],
            styles: [__webpack_require__(/*! ./datainput-panel.css */ "../src/app/components/tools/datainput-panel.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_3__["AppStates"]])
    ], DataInputPanelComponent);
    return DataInputPanelComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataInputPanelComponent);


/***/ }),

/***/ "../src/app/components/tools/layersnav-panel.css":
/*!*******************************************************!*\
  !*** ../src/app/components/tools/layersnav-panel.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-nonfluid {\r\n    width: 100px !important;\r\n    background: rgba(60, 209, 184, 0.3)!important;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 4px;\r\n    top: 70px;\r\n    left: 550px;\r\n    width: 200px;\r\n    padding: 2px;\r\n}\r\n#layersnav-panel {\r\n    position: absolute;\r\n    z-index: 9;\r\n }\r\n#layersnav-head {\r\n    background: rgba(0, 0, 0, 0.2) !important;\r\n    border-radius: 100% 100% 0 0;\r\n    text-align: center;\r\n    padding-bottom: 1px;\r\n    padding-top: 2px;\r\n}\r\n#layers {\r\n    font-size: 0.8em;\r\n }\r\n#layers th {\r\n    text-align: center;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9sYXllcnNuYXYtcGFuZWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QywyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0NBQ2I7QUFDQTtJQUNHLHlDQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQztJQUNHLGdCQUFnQjtDQUNuQjtBQUNBO0lBQ0csa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29scy9sYXllcnNuYXYtcGFuZWwuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLW5vbmZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg2MCwgMjA5LCAxODQsIDAuMykhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgbGVmdDogNTUwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuI2xheWVyc25hdi1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gfVxyXG4gI2xheWVyc25hdi1oZWFkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAxMDAlIDAgMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcbiAjbGF5ZXJzIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiB9XHJcbiAjbGF5ZXJzIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH0iXX0= */"

/***/ }),

/***/ "../src/app/components/tools/layersnav-panel.html":
/*!********************************************************!*\
  !*** ../src/app/components/tools/layersnav-panel.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"layersnav-panel\">\r\n    <div id=\"layersnav-head\">\r\n        <a (click)=\"closeLayersView()\"><span class=\"glyphicon glyphicon-remove-sign close-sign-extra\"></span></a>\r\n    </div>\r\n    <table id=\"layers\" *ngIf=\"neuronsModel\" class=\"table table-condensed table-bordered table-hover table-nonfluid\">\r\n    <thead>\r\n        <tr>\r\n           <th></th>\r\n           <th>Layers</th>\r\n           <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let layer of neuronsModel.layers; let i = index\">\r\n            <td>{{layer.layerIndex}}</td>\r\n            <td>{{layer.getDescription()}}</td>\r\n            <td><input type=\"checkbox\" checked=\"true\" (change)=\"toggleLayerVisible(i)\" /></td>\r\n        </tr>\r\n    </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../src/app/components/tools/layersnav-panel.ts":
/*!******************************************************!*\
  !*** ../src/app/components/tools/layersnav-panel.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_element_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/element-draggable */ "../src/app/utils/element-draggable.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-service */ "../src/app/services/app-service.ts");
/* harmony import */ var _services_app_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-states */ "../src/app/services/app-states.ts");
/* harmony import */ var _model_neurons_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/neurons-model */ "../src/app/components/model/neurons-model.ts");
/* harmony import */ var _neurons_model_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../neurons/model-main */ "../src/app/components/neurons/model-main.ts");







var LayersNavPanelComponent = /** @class */ (function () {
    function LayersNavPanelComponent(appService, appStates) {
        this.appService = appService;
        this.appStates = appStates;
        this.closeLayersPanelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layersViewMap = {};
    }
    LayersNavPanelComponent.prototype.ngAfterViewInit = function () {
        _utils_element_draggable__WEBPACK_IMPORTED_MODULE_2__["ElementDraggable"].register('layersnav-head', 'layersnav-panel', {});
    };
    LayersNavPanelComponent.prototype.closeLayersView = function () {
        this.closeLayersPanelEvent.emit();
    };
    LayersNavPanelComponent.prototype.toggleLayerVisible = function (index) {
        var visible = false;
        if (this.layersViewMap[index] || this.layersViewMap[index] == false) {
            visible = !this.layersViewMap[index];
            this.layersViewMap[index] = visible;
        }
        else {
            this.layersViewMap[index] = false;
            visible = false;
        }
        _neurons_model_main__WEBPACK_IMPORTED_MODULE_6__["ModelMain"].toggleLayerVisibility(index, visible);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LayersNavPanelComponent.prototype, "closeLayersPanelEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_neurons_model__WEBPACK_IMPORTED_MODULE_5__["NeuronsModel"])
    ], LayersNavPanelComponent.prototype, "neuronsModel", void 0);
    LayersNavPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layersnav-panel',
            template: __webpack_require__(/*! ./layersnav-panel.html */ "../src/app/components/tools/layersnav-panel.html"),
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_4__["AppStates"]],
            styles: [__webpack_require__(/*! ./layersnav-panel.css */ "../src/app/components/tools/layersnav-panel.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_4__["AppStates"]])
    ], LayersNavPanelComponent);
    return LayersNavPanelComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (LayersNavPanelComponent);


/***/ }),

/***/ "../src/app/components/tools/modelnav-panel.css":
/*!******************************************************!*\
  !*** ../src/app/components/tools/modelnav-panel.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modelnav-head {\r\n    background: rgba(220, 220, 220, 0.1)!important;\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n    -webkit-transform: scaleY(0.6);\r\n            transform: scaleY(0.6);\r\n }\r\n.modelnav-head:hover {\r\n    background: rgba(220, 220, 220, 0.5)!important;\r\n    -webkit-transform: scaleY(1);\r\n            transform: scaleY(1);\r\n }\r\n.modelnav-item {\r\n    background: rgba(0, 200, 0, 0.2)!important;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    border-bottom: 4px solid grey;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    margin-top: 4px;\r\n }\r\n.modelnav-item:hover {\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n }\r\n#modelnav-panel {\r\n    position: absolute;\r\n    z-index: 9;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 4px;\r\n    top: 70px;\r\n    left: 50px;\r\n    width: 40px;\r\n    padding: 2px;\r\n    padding-right: 2px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29scy9tb2RlbG5hdi1wYW5lbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSw4Q0FBOEM7SUFDOUMsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksMENBQTBDO0lBQzFDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBQ0E7SUFDRyw2QkFBcUI7WUFBckIscUJBQXFCO0NBQ3hCO0FBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvbW9kZWxuYXYtcGFuZWwuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGVsbmF2LWhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjEpIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcclxuIH1cclxuLm1vZGVsbmF2LWhlYWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjUpIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gfVxyXG4ubW9kZWxuYXYtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIwMCwgMCwgMC4yKSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGdyZXk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gfVxyXG4gLm1vZGVsbmF2LWl0ZW06aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gfVxyXG4gI21vZGVsbmF2LXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiB9Il19 */"

/***/ }),

/***/ "../src/app/components/tools/modelnav-panel.html":
/*!*******************************************************!*\
  !*** ../src/app/components/tools/modelnav-panel.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modelnav-panel\" #modelNavPanel class=\"container text-center\">\r\n\r\n   <a id=\"modelnav-head\" class=\"modelnav-head\" data-toggle=\"collapse\" data-target=\"#modelnav-menu\">\r\n      <span class=\"glyphicon glyphicon-th-large\"></span>\r\n   </a>\r\n   <div id=\"modelnav-menu\" class=\"collapse\">\r\n      <div><button type=\"button\" class=\"btn modelnav-item\" (click)=\"resetModelView()\">\r\n          <span class=\"glyphicon glyphicon-circle-arrow-up\"></span></button></div>\r\n      <div><button type=\"button\" class=\"btn modelnav-item\" (click)=\"toggleLayersPanel()\">\r\n          <span class=\"glyphicon glyphicon-align-justify\"></span></button></div>\r\n      <div><button type=\"button\" class=\"btn modelnav-item\" (click)=\"openDataInputPanel()\">\r\n            <span class=\"glyphicon glyphicon-signal\"></span></button></div>\r\n   </div>\r\n</div>\r\n<layersnav-panel #layersNavPanel [hidden]=\"hideLayersNavPanel\" (closeLayersPanelEvent)=\"closeLayersPanel()\"\r\n     [neuronsModel]=\"neuronsModel\"></layersnav-panel>\r\n<datainput-panel #dataInputPanel [hidden]=\"hideDataInputPanel\" (closeDataInputPanelEvent)=\"closeDataInputPanel()\"\r\n     [neuronsModel]=\"neuronsModel\"></datainput-panel>"

/***/ }),

/***/ "../src/app/components/tools/modelnav-panel.ts":
/*!*****************************************************!*\
  !*** ../src/app/components/tools/modelnav-panel.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_element_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/element-draggable */ "../src/app/utils/element-draggable.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-service */ "../src/app/services/app-service.ts");
/* harmony import */ var _services_app_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-states */ "../src/app/services/app-states.ts");
/* harmony import */ var _neurons_neurons_model_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../neurons/neurons-model-view */ "../src/app/components/neurons/neurons-model-view.ts");






var ModelNavPanelComponent = /** @class */ (function () {
    function ModelNavPanelComponent(appService, appStates) {
        this.appService = appService;
        this.appStates = appStates;
        this.hideLayersNavPanel = true;
        this.hideDataInputPanel = true;
        this.inputPanelDragRegistered = false;
    }
    ModelNavPanelComponent.prototype.ngAfterViewInit = function () {
        var top = 10 + this.appStates.getNavbarHeight();
        $('#modelnav-panel').css('top', top + 'px');
        $('#modelnav-panel').css('left', '10px');
        _utils_element_draggable__WEBPACK_IMPORTED_MODULE_2__["ElementDraggable"].register('modelnav-head', 'modelnav-panel', {});
    };
    ModelNavPanelComponent.prototype.resetModelView = function () {
        _neurons_neurons_model_view__WEBPACK_IMPORTED_MODULE_5__["NeuronsModelView"].appCamControl.reset();
    };
    ModelNavPanelComponent.prototype.toggleLayersPanel = function () {
        if (this.hideLayersNavPanel) {
            this.openLayersPanel();
            this.hideLayersNavPanel = false;
        }
        /* disable toggle
        this.hideLayersNavPanel = !this.hideLayersNavPanel;
        if (!this.hideLayersNavPanel) {
            this.openLayersPanel();
        }
        */
    };
    ModelNavPanelComponent.prototype.openLayersPanel = function () {
        var menuElem = this.modelNavPanelRef.nativeElement;
        var top = menuElem.offsetTop;
        var left = menuElem.offsetLeft + menuElem.offsetWidth + 10;
        $('#layersnav-panel').css('top', top + 'px');
        $('#layersnav-panel').css('left', left + 'px');
        this.neuronsModel = this.appStates.getCurrentNeuronsModel();
    };
    ModelNavPanelComponent.prototype.openDataInputPanel = function () {
        var _this = this;
        this.hideDataInputPanel = false;
        this.neuronsModel = this.appStates.getCurrentNeuronsModel();
        //NeuronsModelView.appCamControl.dispose(); for input avail?
        if (!this.inputPanelDragRegistered) {
            // do for the first time
            setTimeout(function () {
                _this.positionDataInputPanel();
            }, 600);
        }
    };
    ModelNavPanelComponent.prototype.positionDataInputPanel = function () {
        var inputPanel = this.dataInputPanelRef;
        var nativeElement = inputPanel.rootRef.nativeElement;
        var top = window.innerHeight - nativeElement.offsetHeight - 20;
        var left = window.innerWidth / 2 - nativeElement.offsetWidth / 2;
        $('#datainput-panel').css('top', top + 'px');
        $('#datainput-panel').css('left', left + 'px');
        if (!this.inputPanelDragRegistered) {
            _utils_element_draggable__WEBPACK_IMPORTED_MODULE_2__["ElementDraggable"].register('input-action-header', 'datainput-panel', {});
            this.inputPanelDragRegistered = true;
        }
    };
    ModelNavPanelComponent.prototype.closeLayersPanel = function () {
        this.hideLayersNavPanel = true;
    };
    ModelNavPanelComponent.prototype.closeDataInputPanel = function () {
        this.hideDataInputPanel = true;
        //NeuronsModelView.appCamControl.addListeners();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modelNavPanel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModelNavPanelComponent.prototype, "modelNavPanelRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('layersNavPanel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModelNavPanelComponent.prototype, "layersNavPanelRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataInputPanel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModelNavPanelComponent.prototype, "dataInputPanelRef", void 0);
    ModelNavPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modelnav-panel',
            template: __webpack_require__(/*! ./modelnav-panel.html */ "../src/app/components/tools/modelnav-panel.html"),
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_4__["AppStates"]],
            styles: [__webpack_require__(/*! ./modelnav-panel.css */ "../src/app/components/tools/modelnav-panel.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_app_states__WEBPACK_IMPORTED_MODULE_4__["AppStates"]])
    ], ModelNavPanelComponent);
    return ModelNavPanelComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (ModelNavPanelComponent);


/***/ }),

/***/ "../src/app/controls/TrackballControls.js":
/*!************************************************!*\
  !*** ../src/app/controls/TrackballControls.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "../node_modules/three/build/three.module.js");


/**
 * @author Eberhard Graether / http://egraether.com/
 * @author Mark Lundin 	/ http://mark-lundin.com
 * @author Simone Manini / http://daron1337.github.io
 * @author Luca Antiga 	/ http://lantiga.github.io
 */

three__WEBPACK_IMPORTED_MODULE_0__["TrackballControls"] = function ( object, domElement ) {

	var _this = this;
	var STATE = { NONE: - 1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	this.enabled = true;

	this.screen = { left: 0, top: 0, width: 0, height: 0 };

	this.rotateSpeed = 1.0;
	this.zoomSpeed = 1.2;
	this.panSpeed = 0.3;

	this.noRotate = false;
	this.noZoom = false;
	this.noPan = false;

	this.staticMoving = false;
	this.dynamicDampingFactor = 0.2;

	this.minDistance = 0;
	this.maxDistance = Infinity;

	this.keys = [ 65 /*A*/, 83 /*S*/, 68 /*D*/ ];

	// internals

	this.target = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();

	var EPS = 0.000001;

	var lastPosition = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();

	var _state = STATE.NONE,
		_prevState = STATE.NONE,

		_eye = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),

		_movePrev = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](),
		_moveCurr = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](),

		_lastAxis = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
		_lastAngle = 0,

		_zoomStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](),
		_zoomEnd = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](),

		_touchZoomDistanceStart = 0,
		_touchZoomDistanceEnd = 0,

		_panStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](),
		_panEnd = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();

	// for reset

	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.up0 = this.object.up.clone();

	// events

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };


	// methods

	this.handleResize = function () {

		if ( this.domElement === document ) {

			this.screen.left = 0;
			this.screen.top = 0;
			this.screen.width = window.innerWidth;
			this.screen.height = window.innerHeight;

		} else {

			var box = this.domElement.getBoundingClientRect();
			// adjustments come from similar code in the jquery offset() function
			var d = this.domElement.ownerDocument.documentElement;
			this.screen.left = box.left + window.pageXOffset - d.clientLeft;
			this.screen.top = box.top + window.pageYOffset - d.clientTop;
			this.screen.width = box.width;
			this.screen.height = box.height > 2 ? box.height :  window.innerHeight;

		}

	};

	var getMouseOnScreen = ( function () {

		var vector = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();

		return function getMouseOnScreen( pageX, pageY ) {

			vector.set(
				( pageX - _this.screen.left ) / _this.screen.width,
				( pageY - _this.screen.top ) / _this.screen.height
			);

			return vector;

		};

	}() );

	var getMouseOnCircle = ( function () {

		var vector = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();

		return function getMouseOnCircle( pageX, pageY ) {

			vector.set(
				( ( pageX - _this.screen.width * 0.5 - _this.screen.left ) / ( _this.screen.width * 0.5 ) ),
				( ( _this.screen.height + 2 * ( _this.screen.top - pageY ) ) / _this.screen.width ) // screen.width intentional
			);

			return vector;

		};

	}() );

	this.rotateCamera = ( function () {

		var axis = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
			quaternion = new three__WEBPACK_IMPORTED_MODULE_0__["Quaternion"](),
			eyeDirection = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
			objectUpDirection = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
			objectSidewaysDirection = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
			moveDirection = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
			angle;

		return function rotateCamera() {

			moveDirection.set( _moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0 );
			angle = moveDirection.length();

			if ( angle ) {

				_eye.copy( _this.object.position ).sub( _this.target );

				eyeDirection.copy( _eye ).normalize();
				objectUpDirection.copy( _this.object.up ).normalize();
				objectSidewaysDirection.crossVectors( objectUpDirection, eyeDirection ).normalize();

				objectUpDirection.setLength( _moveCurr.y - _movePrev.y );
				objectSidewaysDirection.setLength( _moveCurr.x - _movePrev.x );

				moveDirection.copy( objectUpDirection.add( objectSidewaysDirection ) );

				axis.crossVectors( moveDirection, _eye ).normalize();

				angle *= _this.rotateSpeed;
				quaternion.setFromAxisAngle( axis, angle );

				_eye.applyQuaternion( quaternion );
				_this.object.up.applyQuaternion( quaternion );

				_lastAxis.copy( axis );
				_lastAngle = angle;

			} else if ( ! _this.staticMoving && _lastAngle ) {

				_lastAngle *= Math.sqrt( 1.0 - _this.dynamicDampingFactor );
				_eye.copy( _this.object.position ).sub( _this.target );
				quaternion.setFromAxisAngle( _lastAxis, _lastAngle );
				_eye.applyQuaternion( quaternion );
				_this.object.up.applyQuaternion( quaternion );

			}

			_movePrev.copy( _moveCurr );

		};

	}() );


	this.zoomCamera = function () {

		var factor;

		if ( _state === STATE.TOUCH_ZOOM_PAN ) {

			factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
			_touchZoomDistanceStart = _touchZoomDistanceEnd;
			_eye.multiplyScalar( factor );

		} else {

			factor = 1.0 + ( _zoomEnd.y - _zoomStart.y ) * _this.zoomSpeed;

			if ( factor !== 1.0 && factor > 0.0 ) {

				_eye.multiplyScalar( factor );

			}

			if ( _this.staticMoving ) {

				_zoomStart.copy( _zoomEnd );

			} else {

				_zoomStart.y += ( _zoomEnd.y - _zoomStart.y ) * this.dynamicDampingFactor;

			}

		}

	};

	this.panCamera = ( function () {

		var mouseChange = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](),
			objectUp = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
			pan = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();

		return function panCamera() {

			mouseChange.copy( _panEnd ).sub( _panStart );

			if ( mouseChange.lengthSq() ) {

				mouseChange.multiplyScalar( _eye.length() * _this.panSpeed );

				pan.copy( _eye ).cross( _this.object.up ).setLength( mouseChange.x );
				pan.add( objectUp.copy( _this.object.up ).setLength( mouseChange.y ) );

				_this.object.position.add( pan );
				_this.target.add( pan );

				if ( _this.staticMoving ) {

					_panStart.copy( _panEnd );

				} else {

					_panStart.add( mouseChange.subVectors( _panEnd, _panStart ).multiplyScalar( _this.dynamicDampingFactor ) );

				}

			}

		};

	}() );

	this.checkDistances = function () {

		if ( ! _this.noZoom || ! _this.noPan ) {

			if ( _eye.lengthSq() > _this.maxDistance * _this.maxDistance ) {

				_this.object.position.addVectors( _this.target, _eye.setLength( _this.maxDistance ) );
				_zoomStart.copy( _zoomEnd );

			}

			if ( _eye.lengthSq() < _this.minDistance * _this.minDistance ) {

				_this.object.position.addVectors( _this.target, _eye.setLength( _this.minDistance ) );
				_zoomStart.copy( _zoomEnd );

			}

		}

	};

	this.update = function () {

		_eye.subVectors( _this.object.position, _this.target );

		if ( ! _this.noRotate ) {

			_this.rotateCamera();

		}

		if ( ! _this.noZoom ) {

			_this.zoomCamera();

		}

		if ( ! _this.noPan ) {

			_this.panCamera();

		}

		_this.object.position.addVectors( _this.target, _eye );

		_this.checkDistances();

		_this.object.lookAt( _this.target );

		if ( lastPosition.distanceToSquared( _this.object.position ) > EPS ) {

			_this.dispatchEvent( changeEvent );

			lastPosition.copy( _this.object.position );

		}

	};

	this.reset = function () {

		_state = STATE.NONE;
		_prevState = STATE.NONE;

		_this.target.copy( _this.target0 );
		_this.object.position.copy( _this.position0 );
		_this.object.up.copy( _this.up0 );

		_eye.subVectors( _this.object.position, _this.target );

		_this.object.lookAt( _this.target );

		_this.dispatchEvent( changeEvent );

		lastPosition.copy( _this.object.position );

	};

	// listeners

	function keydown( event ) {

		if ( _this.enabled === false ) return;

		window.removeEventListener( 'keydown', keydown );

		_prevState = _state;

		if ( _state !== STATE.NONE ) {

			return;

		} else if ( event.keyCode === _this.keys[ STATE.ROTATE ] && ! _this.noRotate ) {

			_state = STATE.ROTATE;

		} else if ( event.keyCode === _this.keys[ STATE.ZOOM ] && ! _this.noZoom ) {

			_state = STATE.ZOOM;

		} else if ( event.keyCode === _this.keys[ STATE.PAN ] && ! _this.noPan ) {

			_state = STATE.PAN;

		}

	}

	function keyup( event ) {

		if ( _this.enabled === false ) return;

		_state = _prevState;

		window.addEventListener( 'keydown', keydown, false );

	}

	function mousedown( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		if ( _state === STATE.NONE ) {

			_state = event.button;

		}

		if ( _state === STATE.ROTATE && ! _this.noRotate ) {

			_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );
			_movePrev.copy( _moveCurr );

		} else if ( _state === STATE.ZOOM && ! _this.noZoom ) {

			_zoomStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
			_zoomEnd.copy( _zoomStart );

		} else if ( _state === STATE.PAN && ! _this.noPan ) {

			_panStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
			_panEnd.copy( _panStart );

		}

		document.addEventListener( 'mousemove', mousemove, false );
		document.addEventListener( 'mouseup', mouseup, false );

		_this.dispatchEvent( startEvent );

	}

	function mousemove( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		if ( _state === STATE.ROTATE && ! _this.noRotate ) {

			_movePrev.copy( _moveCurr );
			_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );

		} else if ( _state === STATE.ZOOM && ! _this.noZoom ) {

			_zoomEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

		} else if ( _state === STATE.PAN && ! _this.noPan ) {

			_panEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

		}

	}

	function mouseup( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		_state = STATE.NONE;

		document.removeEventListener( 'mousemove', mousemove );
		document.removeEventListener( 'mouseup', mouseup );
		_this.dispatchEvent( endEvent );

	}

	function mousewheel( event ) {

		if ( _this.enabled === false ) return;

		if ( _this.noZoom === true ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.deltaMode ) {

			case 2:
				// Zoom in pages
				_zoomStart.y -= event.deltaY * 0.025;
				break;

			case 1:
				// Zoom in lines
				_zoomStart.y -= event.deltaY * 0.01;
				break;

			default:
				// undefined, 0, assume pixels
				_zoomStart.y -= event.deltaY * 0.00025;
				break;

		}

		_this.dispatchEvent( startEvent );
		_this.dispatchEvent( endEvent );

	}

	function touchstart( event ) {

		if ( _this.enabled === false ) return;
		
		event.preventDefault();

		switch ( event.touches.length ) {

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				_movePrev.copy( _moveCurr );
				break;

			default: // 2 or more
				_state = STATE.TOUCH_ZOOM_PAN;
				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt( dx * dx + dy * dy );

				var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
				var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
				_panStart.copy( getMouseOnScreen( x, y ) );
				_panEnd.copy( _panStart );
				break;

		}

		_this.dispatchEvent( startEvent );

	}

	function touchmove( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.touches.length ) {

			case 1:
				_movePrev.copy( _moveCurr );
				_moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				break;

			default: // 2 or more
				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				_touchZoomDistanceEnd = Math.sqrt( dx * dx + dy * dy );

				var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
				var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
				_panEnd.copy( getMouseOnScreen( x, y ) );
				break;

		}

	}

	function touchend( event ) {

		if ( _this.enabled === false ) return;

		switch ( event.touches.length ) {

			case 0:
				_state = STATE.NONE;
				break;

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				_movePrev.copy( _moveCurr );
				break;

		}

		_this.dispatchEvent( endEvent );

	}

	function contextmenu( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();

	}

	this.dispose = function () {

		this.domElement.removeEventListener( 'contextmenu', contextmenu, false );
		this.domElement.removeEventListener( 'mousedown', mousedown, false );
		this.domElement.removeEventListener( 'wheel', mousewheel, false );

		this.domElement.removeEventListener( 'touchstart', touchstart, false );
		this.domElement.removeEventListener( 'touchend', touchend, false );
		this.domElement.removeEventListener( 'touchmove', touchmove, false );

		document.removeEventListener( 'mousemove', mousemove, false );
		document.removeEventListener( 'mouseup', mouseup, false );

		window.removeEventListener( 'keydown', keydown, false );
		window.removeEventListener( 'keyup', keyup, false );

	};

	this.addListeners = function () {
	    this.domElement.addEventListener( 'contextmenu', contextmenu, false );
	    this.domElement.addEventListener( 'mousedown', mousedown, false );
	    this.domElement.addEventListener( 'wheel', mousewheel, false );

	    this.domElement.addEventListener( 'touchstart', touchstart, false );
	    this.domElement.addEventListener( 'touchend', touchend, false );
	    this.domElement.addEventListener( 'touchmove', touchmove, false );

	    window.addEventListener( 'keydown', keydown, false );
	    window.addEventListener( 'keyup', keyup, false );
	}
	this.addListeners();

	this.handleResize();

	// force an update at start
	this.update();

};

three__WEBPACK_IMPORTED_MODULE_0__["TrackballControls"].prototype = Object.create( three__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"].prototype );
three__WEBPACK_IMPORTED_MODULE_0__["TrackballControls"].prototype.constructor = three__WEBPACK_IMPORTED_MODULE_0__["TrackballControls"];


/***/ }),

/***/ "../src/app/services/app-service.ts":
/*!******************************************!*\
  !*** ../src/app/services/app-service.ts ***!
  \******************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-states */ "../src/app/services/app-states.ts");




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getAboutHtml = function () {
        var reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'plain/text'
        });
        var url = this.getBaseUrl() + '/assets/about.html';
        console.info('url=' + url);
        return this.http.get(url, { headers: reqHeaders, responseType: 'text' });
    };
    AppService.prototype.loadDefaultModel = function () {
        var path = this.getBaseUrl() + '/assets/default-neurons-model.json';
        return this.loadNeuronsModel(path);
    };
    AppService.prototype.loadNeuronsModel = function (path) {
        this.informModelPath(path);
        return this.http.get(path);
    };
    AppService.prototype.loadDefaultModelSrc = function () {
        var path = this.getBaseUrl() + '/assets/default-neurons-model.json';
        return this.loadNeuronsModelSrc(path);
    };
    AppService.prototype.loadNeuronsModelSrc = function (path) {
        this.informModelPath(path);
        var reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json'
        });
        return this.http.get(path, { headers: reqHeaders, responseType: 'json' });
    };
    AppService.prototype.informModelPath = function (path) {
        _app_states__WEBPACK_IMPORTED_MODULE_3__["AppStates"].neuronsModelPath = path;
    };
    AppService.prototype.getBaseUrl = function () {
        var index = window.location.href.indexOf('/#');
        if (index < 0) {
            return window.location.href;
        }
        return window.location.href.substr(0, index);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../src/app/services/app-states.ts":
/*!*****************************************!*\
  !*** ../src/app/services/app-states.ts ***!
  \*****************************************/
/*! exports provided: AppStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStates", function() { return AppStates; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppStates = /** @class */ (function () {
    function AppStates() {
    }
    AppStates_1 = AppStates;
    AppStates.prototype.getNavbarHeight = function () {
        if (AppStates_1.navbarElem == null) {
            return 0;
        }
        return AppStates_1.navbarElem.nativeElement.offsetHeight;
    };
    AppStates.prototype.setCurrentNeuronsModel = function (neuronsModel, neuronsModelSrc) {
        AppStates_1.neuronsModel = neuronsModel;
        AppStates_1.neuronsModelSrc = neuronsModelSrc;
    };
    AppStates.prototype.getCurrentNeuronsModel = function () {
        return AppStates_1.neuronsModel;
    };
    AppStates.prototype.getCurrentNeuronsModelSrc = function () {
        return AppStates_1.neuronsModelSrc;
    };
    AppStates.toDebug = function () {
        var json = {};
        if (AppStates_1.navbarElem) {
            var nav = {
                offsetHeight: AppStates_1.navbarElem.nativeElement.offsetHeight
            };
            json['navbarElem'] = nav;
        }
        if (AppStates_1.neuronsModel) {
            var model = {
                path: AppStates_1.neuronsModelPath,
                name: AppStates_1.neuronsModel.name
            };
            json['neuronsModel'] = model;
        }
        var win = {
            locationHref: window.location.href,
            locationOrign: window.location.origin
        };
        json['window'] = win;
        return json;
    };
    var AppStates_1;
    AppStates = AppStates_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppStates);
    return AppStates;
}());



/***/ }),

/***/ "../src/app/utils/element-draggable.ts":
/*!*********************************************!*\
  !*** ../src/app/utils/element-draggable.ts ***!
  \*********************************************/
/*! exports provided: ElementDraggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementDraggable", function() { return ElementDraggable; });
var ElementDraggable = /** @class */ (function () {
    function ElementDraggable() {
    }
    ElementDraggable.register = function (elementId, targetElementId, config) {
        var elem = document.getElementById(elementId);
        var targetElem = document.getElementById(targetElementId);
        if (!elem) {
            console.error('not able to find drag elements ' + elementId);
            return;
        }
        if (!targetElem) {
            console.error('not able to find drag target elements ' + targetElementId);
            return;
        }
        var idstr = '#' + elementId;
        $(idstr).hover(function () {
            $(idstr).css('cursor', 'move');
        }, function () {
            $(idstr).css('cursor', 'auto');
        });
        $(idstr).css('box-shadow', 'inset 0 0 1px 1px olive');
        elem.onmousedown = ElementDraggable.dragMouseDown;
        ElementDraggable.dragElements[elementId] = targetElem;
    };
    ElementDraggable.getTargetElement = function (mevent) {
        var target = mevent.currentTarget;
        var key = target.id;
        var elem = ElementDraggable.dragElements[key];
        if (!elem) {
            console.warn('cannot find drag target at ' + key);
            return null;
        }
        return elem;
    };
    ElementDraggable.dragMouseDown = function (mevent) {
        //mevent = mevent || window.event;
        mevent.preventDefault();
        mevent.stopPropagation();
        var elem = ElementDraggable.getTargetElement(mevent);
        if (!elem) {
            return;
        }
        ElementDraggable.targetElem = elem;
        var mpos2 = ElementDraggable.mpos2;
        mpos2.x = mevent.clientX;
        mpos2.y = mevent.clientY;
        elem.onmouseup = ElementDraggable.closeDragElement;
        elem.onmouseout = ElementDraggable.closeDragElement;
        elem.onmousemove = ElementDraggable.elementDrag;
        ElementDraggable.isDragging = true;
    };
    ElementDraggable.elementDrag = function (mevent) {
        if (!ElementDraggable.isDragging || !ElementDraggable.targetElem) {
            return;
        }
        //e = e || window.event;
        mevent.preventDefault();
        mevent.stopPropagation();
        //var elem = ElementDraggable.getTargetElement(mevent);
        //if ( !elem ) {
        //   return;
        //}
        var elem = ElementDraggable.targetElem;
        // calculate the new cursor position:
        var mpos1 = ElementDraggable.mpos1;
        var mpos2 = ElementDraggable.mpos2;
        mpos1.x = mpos2.x - mevent.clientX;
        mpos1.y = mpos2.y - mevent.clientY;
        mpos2.x = mevent.clientX;
        mpos2.y = mevent.clientY;
        // set the element's new position:
        elem.style.top = (elem.offsetTop - mpos1.y) + "px";
        elem.style.left = (elem.offsetLeft - mpos1.x) + "px";
    };
    ElementDraggable.closeDragElement = function (mevent) {
        ElementDraggable.isDragging = false;
        //mevent = mevent || window.event;
        mevent.preventDefault();
        mevent.stopPropagation();
        //var elem = ElementDraggable.getTargetElement(mevent);
        var elem = ElementDraggable.targetElem;
        if (!elem) {
            return;
        }
        // stop moving when mouse button is released:
        elem.onmouseup = null;
        elem.onmousemove = null;
        ElementDraggable.targetElem = null;
    };
    ElementDraggable.dragElements = {};
    ElementDraggable.mpos1 = { x: 0, y: 0 };
    ElementDraggable.mpos2 = { x: 0, y: 0 };
    ElementDraggable.isDragging = false;
    return ElementDraggable;
}());



/***/ }),

/***/ "../src/environments/environment.ts":
/*!******************************************!*\
  !*** ../src/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "../src/main.ts":
/*!**********************!*\
  !*** ../src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ../src/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xdd-learn\iclearn\src\main.ts */"../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map