"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 5448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 4101);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 6302)).then((m) => m.HomePageModule),
            },
            {
                path: 'accounts',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_accounts_accounts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./accounts/accounts.module */ 1917)).then((m) => m.AccountsPageModule),
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 1901)).then((m) => m.SettingsPageModule),
            },
            {
                path: 'transactions',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_transactions_transactions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transactions/transactions.module */ 9122)).then((m) => m.TransactionsPageModule),
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 5448);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 4101);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 4101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 7867);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
    setCurrentTab() {
        this.selectedTab = this.tabs.getSelected();
        console.log(this.selectedTab);
    }
};
TabsPage.ctorParameters = () => [];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['tabs', { static: false },] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4436:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-tabs {\n  background: var(--ion-color-primary);\n}\nion-tabs ion-tab-bar {\n  position: relative;\n  transform: translate(-50%, 0%);\n  left: 50%;\n  padding-bottom: 0;\n  border: 1px solid rgba(2, 52, 54, 0.08);\n  overflow: hidden;\n  height: 75px;\n  --background: var(--ion-color-light);\n}\nion-tabs ion-tab-bar ion-tab-button {\n  --background: var(--ion-color-light);\n  --color: #bec2c6;\n}\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  font-size: 1.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0Esb0NBQUE7QUFESjtBQUVJO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtBQUFOO0FBQ007RUFDRSxpQkFBQTtBQUNSIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYnMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGlvbi10YWItYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gd2lkdGg6IDkwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwMCUpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMiwgNTIsIDU0LCAwLjA4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggcmdiKDMgMTgxIDE3MCAvIDglKTtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGlvbi10YWItYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tY29sb3I6ICNiZWMyYzY7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 7867:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs #tabs (ionTabsDidChange)=\"setCurrentTab()\">\n  <ion-tab-bar slot=\"bottom\" color=\"light\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon\n        [name]=\"selectedTab == 'home' ? 'home' : 'home-outline'\"\n      ></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"transactions\">\n      <ion-icon\n        [name]=\"selectedTab == 'transactions' ? 'pie-chart' : 'pie-chart-outline'\"\n      ></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"accounts\">\n      <ion-icon\n        [name]=\"selectedTab == 'accounts' ? 'newspaper' : 'newspaper-outline'\"\n      ></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\">\n      <ion-icon\n        [name]=\"selectedTab == 'settings' ? 'settings' : 'settings-outline'\"\n      ></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map