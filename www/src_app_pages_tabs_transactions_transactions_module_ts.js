"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_transactions_transactions_module_ts"],{

/***/ 7973:
/*!************************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPageRoutingModule": () => (/* binding */ TransactionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions.page */ 9934);




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_0__.TransactionsPage
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ 9122:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPageModule": () => (/* binding */ TransactionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions-routing.module */ 7973);
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.page */ 9934);







let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionsPageRoutingModule
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_1__.TransactionsPage]
    })
], TransactionsPageModule);



/***/ }),

/***/ 9934:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPage": () => (/* binding */ TransactionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _transactions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions.page.html?ngResource */ 9863);
/* harmony import */ var _transactions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.page.scss?ngResource */ 1515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TransactionsPage = class TransactionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TransactionsPage.ctorParameters = () => [];
TransactionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-transactions',
        template: _transactions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transactions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionsPage);



/***/ }),

/***/ 1515:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9863:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_transactions_transactions_module_ts.js.map