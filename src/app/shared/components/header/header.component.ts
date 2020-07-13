import { Component, OnInit } from '@angular/core';
import {BankService} from '@core/services/bank/bank.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public banks :[];
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.getBanks();
  }

  private getBanks() {
    this.bankService.getBanks().subscribe(response => {
      this.banks = response as [];
    })
  }
}
