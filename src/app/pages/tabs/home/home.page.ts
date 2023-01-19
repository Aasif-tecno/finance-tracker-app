import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {
  accounts: any[] = [];
  accountState = { income: 0, expense: 0, totalBalance: 0 };
  bannerConfig: SwiperOptions;
  featureConfig: SwiperOptions;
  features: any[] = [];
  transactions: any[] = [];
  selectedView = 'day';

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.loadAccountData();

    this.features = [
      { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
      { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
      { id: 4, color: 'light', icon: 'newspaper', name: 'Accounts' },
      { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
      { id: 2, color: 'white', icon: 'send', name: 'Request' },
    ];
    this.transactions = [
      {
        id: 1,
        transaction: [
          {
            id: 2,
            category: 'Food',
            note: 'Avinash',
            date: '2022-03-02',
            amount: 7000,
          },
          {
            id: 3,
            category: 'Transport',
            note: 'Catherine',
            date: '2022-07-28',
            amount: -3250,
          },
          {
            id: 4,
            category: 'Food',
            note: 'Akhil Ag.',
            date: '2022-01-09',
            amount: 1000,
          },
          {
            id: 5,
            category: 'Food',
            note: 'Prem Ag.',
            date: '2022-04-13',
            amount: -800,
          },
        ],
        category: 'Transport',
        date: '2022-05-22',
        income: 5000,
        expense: 2000,
      },
      {
        id: 1,
        transaction: [
          {
            id: 2,
            category: 'Food',
            note: 'Avinash',
            date: '2022-03-02',
            amount: 7000,
          },
          {
            id: 3,
            category: 'Transport',
            note: 'Catherine',
            date: '2022-07-28',
            amount: -3250,
          },
        ],
        category: 'Food',
        date: '2022-05-21',
        income: 5000,
        expense: 2000,
      },
    ];
  }
  async loadAccountData() {
    this.accounts = await this.storageService.get('accounts');
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      pagination: { clickable: true },
    };
    this.featureConfig = {
      slidesPerView: 3.5,
    };
  }
}
