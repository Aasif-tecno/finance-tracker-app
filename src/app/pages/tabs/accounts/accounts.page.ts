import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonModal } from '@ionic/angular';

import { OverlayEventDetail } from '@ionic/core/components';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
  accounts: any[] = [];
  @ViewChild(IonModal) modal: IonModal;
  accountForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    totalBalance: new FormControl(0),
    balance: new FormControl(0),
  });
  editingAcc: any;
  constructor(
    private storageService: StorageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadAccountData();
  }
  async loadAccountData() {
    this.accounts = await this.storageService.get('accounts');
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
  async onDelete() {
    const alert = await this.alertController.create({
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
            const index = this.accounts.findIndex(
              (element) => element['id'] === this.editingAcc['id']
            );

            this.storageService.remove('accounts', index);
            this.accounts.splice(index, 1);
            this.cancel();
          },
        },
      ],
    });

    await alert.present();
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

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.accountForm.reset();
      const data = <any>ev.detail.data;
      if (data['id'] > 0) {
        const index = this.accounts.findIndex(
          (element) => element['id'] === data['id']
        );
        this.accounts[index] = data;
        this.storageService.editData('accounts', index, data);
      } else {
        data['id'] = this.accounts?.length > 0 ? this.accounts?.length + 1 : 1;
        data['balance'] = data['totalBalance'];
        this.storageService.addData('accounts', data);
        this.accounts?.push(data);
      }
    }
    this.editingAcc = {};
  }
}
