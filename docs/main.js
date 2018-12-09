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

module.exports = "h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  box-sizing: border-box;\n  line-height: 10vh;\n}\n.gmaps {\n  width: 100%;\n  height: 90vh;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to\n    <a\n      href=\"https://github.com/maechabin/angular-googlemaps-sample\"\n      target=\"_blank\"\n      >{{ title }}</a\n    >!\n  </h1>\n  <div class=\"gmaps\"></div>\n</div>\n"

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
/* harmony import */ var _maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps */ "./src/app/maps.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(el) {
        this.el = el;
        this.title = 'angular-googlemaps-sample';
        this.map = new _maps__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._el = el.nativeElement;
    }
    AppComponent.prototype.ngOnInit = function () {
        var gmaps = this._el.querySelector('.gmaps');
        /** コンポーネントがマウントされたらMapを表示する */
        this.map.initMap(gmaps);
        /** Map上にマーカーを表示する */
        this.map.initMarker();
        /** Map上にポリラインを表示する */
        this.map.initPolyLine();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/maps.ts":
/*!*************************!*\
  !*** ./src/app/maps.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Maps = /** @class */ (function () {
    function Maps() {
        /** Markerを表示する拠点リスト */
        this.points = [
            { title: 'maker1', position: { lat: -25.363, lng: 131.044 } },
            { title: 'maker2', position: { lat: -32.397, lng: 20.044 } },
            { title: 'maker3', position: { lat: 34.397, lng: 25.044 } },
            { title: 'maker4', position: { lat: 48.397, lng: 90.044 } },
            { title: 'maker5', position: { lat: 29.32, lng: 135.9 } },
        ];
        /** ポリライン */
        this.line = null;
    }
    /**
     * Mapを任意の要素に表示する
     * @param mapDiv Mapを表示する要素
     */
    Maps.prototype.initMap = function (mapDiv) {
        /**
         * 地図を表示する際のオプション（初期表示）
         * Mapsのオプション一覧
         * https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
         */
        var mapOptions = {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        /** Mapオブジェクトに地図表示要素情報とオプション情報を渡し、インスタンス生成 */
        this.map = new google.maps.Map(mapDiv, mapOptions); // <= refで取得した要素
    };
    /**
     * Map上にマーカーを表示する
     */
    Maps.prototype.initMarker = function () {
        var _this = this;
        /** 範囲（境界）のインスタンスを作成するクラス */
        var bounds = new google.maps.LatLngBounds();
        /** Markerを表示 */
        this.points.forEach(function (point) {
            /**
             * Markerを設定
             * Markerオプション
             * https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
             */
            var marker = new google.maps.Marker({
                map: _this.map,
                draggable: true,
                opacity: 0.7,
                position: point.position,
                title: point.title,
            });
            /** 位置情報を範囲に追加 */
            bounds.extend(marker.getPosition());
            /** 吹き出しを設定 */
            var infoWindow = new google.maps.InfoWindow({
                content: point.title,
            });
            /** クリック時の処理（吹き出し表示） */
            marker.addListener('click', function () {
                infoWindow.open(_this.map, marker);
            });
            /** マーカードラッグ時の処理（ポリラインのアップデート） */
            marker.addListener('dragend', function (event) {
                var title = point.title;
                _this.points = _this.points.map(function (p) {
                    if (p.title === title) {
                        return __assign({}, p, { position: {
                                lat: event.latLng.lat(),
                                lng: event.latLng.lng(),
                            } });
                    }
                    return p;
                });
                _this.initPolyLine();
            });
        });
        /** すべてのMarkerを地図に収める */
        this.map.fitBounds(bounds);
    };
    /**
     * Map上にポリラインを表示する
     */
    Maps.prototype.initPolyLine = function () {
        /**
         * 既存のポリラインを削除
         * https://developers.google.com/maps/documentation/javascript/examples/polyline-remove
         * */
        if (this.line !== null) {
            this.line.setMap(null);
        }
        /**
         * polyline上を動くシンボル
         * https://developers.google.com/maps/documentation/javascript/symbols#animate
         * */
        var lineSymbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            strokeColor: '#113345',
        };
        /** polylineを表示 */
        this.line = new google.maps.Polyline({
            path: this.points
                .map(function (point) {
                return point.position;
            })
                .concat([this.points[0].position]),
            icons: [
                {
                    icon: lineSymbol,
                    offset: '100%',
                },
            ],
            strokeColor: '#ccc',
            map: this.map,
        });
        /** ポリラインを表示 */
        this.line.setMap(this.map);
        /** アニメーションを実行 */
        this.animateCircle(this.line);
    };
    /**
     * シンボルをpolylineに沿ってアニメーションさせる
     * */
    Maps.prototype.animateCircle = function (line) {
        var count = 0;
        window.setInterval(function () {
            count = (count + 1) % 200;
            var icons = line.get('icons');
            icons[0].offset = count / 2 + '%';
            line.set('icons', icons);
        }, 40);
    };
    return Maps;
}());
/* harmony default export */ __webpack_exports__["default"] = (Maps);


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maechabin/Sites/practice/angular-googlemaps-sample/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map