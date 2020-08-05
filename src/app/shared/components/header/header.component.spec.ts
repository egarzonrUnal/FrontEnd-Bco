import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BankService } from '@core/services/bank/bank.service';
import { HeaderComponent } from './header.component';
import { Observable, } from 'rxjs/Observable';
import 'rxjs/add/observable/from'


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  const servicio = new BankService(null);

  beforeEach(async(() => {
    component = new HeaderComponent(servicio);
  }));

  it('Init: Debe cargar los bancos', () => {
    const bancos = ['BANCO_1', 'BANCO_2', 'BANCO_3', 'BANCO_4'];
    spyOn(servicio, 'getBanks').and.callFake(() => {
      return Observable.from([bancos]);
    });
  });
});


////Testing-Travis