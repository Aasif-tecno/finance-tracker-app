"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_accounts_accounts_module_ts"],{

/***/ 1358:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/accounts/accounts-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPageRoutingModule": () => (/* binding */ AccountsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _accounts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.page */ 7837);




const routes = [
    {
        path: '',
        component: _accounts_page__WEBPACK_IMPORTED_MODULE_0__.AccountsPage,
    },
];
let AccountsPageRoutingModule = class AccountsPageRoutingModule {
};
AccountsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountsPageRoutingModule);



/***/ }),

/***/ 1917:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/accounts/accounts.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPageModule": () => (/* binding */ AccountsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-routing.module */ 1358);
/* harmony import */ var _accounts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.page */ 7837);







let AccountsPageModule = class AccountsPageModule {
};
AccountsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsPageRoutingModule,
        ],
        declarations: [_accounts_page__WEBPACK_IMPORTED_MODULE_1__.AccountsPage],
    })
], AccountsPageModule);



/***/ }),

/***/ 7837:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/accounts/accounts.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPage": () => (/* binding */ AccountsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _accounts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.page.html?ngResource */ 3160);
/* harmony import */ var _accounts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.page.scss?ngResource */ 2902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);







let AccountsPage = class AccountsPage {
    constructor(storageService, alertController) {
        this.storageService = storageService;
        this.alertController = alertController;
        this.accounts = [];
        this.accountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            totalBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
        });
    }
    ngOnInit() {
        this.loadAccountData();
    }
    loadAccountData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.accounts = yield this.storageService.get('accounts');
        });
    }
    cancel() {
        this.accountForm.reset();
        this.editingAcc = {};
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        if (this.accountForm.invalid) {
            return;
        }
        this.editingAcc = {};
        this.modal.dismiss(this.accountForm.value, 'confirm');
    }
    onDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete',
                // subHeader: 'Important message',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {
                            const index = this.accounts.findIndex((element) => element['id'] === this.editingAcc['id']);
                            this.storageService.remove('accounts', index);
                            this.accounts.splice(index, 1);
                            this.cancel();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    onEdit(acc) {
        this.editingAcc = acc;
        this.accountForm.setValue({
            id: acc.id,
            name: acc.name,
            totalBalance: acc.totalBalance,
            balance: acc.balance,
        });
        this.modal.present();
    }
    onWillDismiss(event) {
        var _a, _b, _c;
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.accountForm.reset();
            const data = ev.detail.data;
            if (data['id'] > 0) {
                const index = this.accounts.findIndex((element) => element['id'] === data['id']);
                this.accounts[index] = data;
                this.storageService.editData('accounts', index, data);
            }
            else {
                data['id'] = ((_a = this.accounts) === null || _a === void 0 ? void 0 : _a.length) > 0 ? ((_b = this.accounts) === null || _b === void 0 ? void 0 : _b.length) + 1 : 1;
                data['balance'] = data['totalBalance'];
                this.storageService.addData('accounts', data);
                (_c = this.accounts) === null || _c === void 0 ? void 0 : _c.push(data);
            }
        }
        this.editingAcc = {};
    }
};
AccountsPage.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AccountsPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonModal,] }]
};
AccountsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-accounts',
        template: _accounts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_accounts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountsPage);



/***/ }),

/***/ 2902:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/accounts/accounts.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".accounts-list {\n  margin: 8px;\n}\n.accounts-list .account-card {\n  background: var(--ion-color-tertiary);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 12vh;\n  justify-content: center;\n}\n.accounts-list .account-card ion-button {\n  --border-radius: 15px;\n}\n.accounts-list .account-card ion-label {\n  font-size: 1rem;\n}\n.accounts-list .new-card {\n  background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUNFO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFBSTtFQUNFLHFCQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUNFO0VBQ0Usa0NBQUE7QUFDSiIsImZpbGUiOiJhY2NvdW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudHMtbGlzdCB7XG4gIG1hcmdpbjogOHB4O1xuXG4gIC5hY2NvdW50LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEydmg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG4gIC5uZXctY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 3160:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/accounts/accounts.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Accounts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"accounts-list\">\n    <ng-container *ngIf=\"accounts?.length > 0\">\n      <ion-col size=\"6\" *ngFor=\"let account of accounts\">\n        <div class=\"account-card\">\n          <ion-button\n            slot=\"icon-only\"\n            color=\"warning\"\n            (click)=\"onEdit(account)\"\n          >\n            <!-- <ion-icon [name]=\"account?.icon\"></ion-icon> -->\n            <ion-label>{{account?.balance | currency:'INR'}}</ion-label>\n          </ion-button>\n          <ion-label>{{account?.name}}</ion-label>\n        </div>\n      </ion-col>\n    </ng-container>\n\n    <ion-col size=\"6\">\n      <div class=\"account-card new-card\">\n        <ion-button slot=\"icon-only\" color=\"light\" id=\"open-modal\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n        <ion-label>Add</ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>New Account</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <form [formGroup]=\"accountForm\" formGR>\n          <ion-item>\n            <ion-label position=\"stacked\">Enter account name</ion-label>\n            <ion-input\n              type=\"text\"\n              formControlName=\"name\"\n              placeholder=\"Name\"\n            ></ion-input>\n            <p\n              class=\"input-error-msg\"\n              *ngIf=\"!accountForm.get('name').valid && accountForm.get('name').touched &&\n                accountForm.get('name').hasError\"\n            >\n              Enter account name\n            </p>\n          </ion-item>\n          <!-- <ion-item>\n            <ion-label position=\"stacked\">Enter Amonut(₹)</ion-label>\n            <ion-input\n              type=\"number\"\n              formControlName=\"totalBalance\"\n              placeholder=\"Balance\"\n            ></ion-input>\n            <p\n              class=\"input-error-msg\"\n              *ngIf=\"!accountForm.get('totalBalance').valid && accountForm.get('totalBalance').touched &&\n                accountForm.get('totalBalance').hasError\"\n            >\n              Enter account balance\n            </p>\n          </ion-item> -->\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button\n                (click)=\"cancel()\"\n                expand=\"block\"\n                color=\"warning\"\n                [strong]=\"true\"\n                >Close</ion-button\n              >\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button\n                (click)=\"confirm()\"\n                expand=\"block\"\n                color=\"success\"\n                [strong]=\"true\"\n                >Save</ion-button\n              >\n            </ion-col>\n          </ion-row>\n          <ion-button\n            (click)=\"onDelete()\"\n            *ngIf=\"editingAcc\"\n            expand=\"block\"\n            color=\"danger\"\n            [strong]=\"true\"\n            >Delete</ion-button\n          >\n        </form>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_accounts_accounts_module_ts.js.map