import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { accounts } from './default-data';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) {}

  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    this.createDefaultData();
  }

  async createDefaultData() {
    const storedAccounts = await this.storage?.length();
    console.log(
      '🚀 ~ file: storage.service.ts:21 ~ StorageService ~ createDefaultData ~ storedAccounts',
      storedAccounts
    );

    if (storedAccounts === 0) {
      this.storage.set('accounts', accounts);
    }
  }

  get(key: string) {
    return this.storage?.get(key) || [];
  }

  async addData(key: string, value: any) {
    const storedData = (await this.storage?.get(key)) || [];
    storedData.push(value);
    return this.storage?.set(key, storedData);
  }
  async editData(key: string, index, value: any) {
    const storedData = (await this.storage?.get(key)) || [];
    storedData[index] = value;
    return this.storage?.set(key, storedData);
  }
  async remove(key: string, index: number) {
    const storedData = (await this.storage?.get(key)) || [];
    storedData.splice(index, 1);
    return this.storage?.set(key, storedData);
  }
}
