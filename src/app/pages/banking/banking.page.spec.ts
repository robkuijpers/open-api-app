import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingPage } from './banking.page';

describe('BankingPage', () => {
  let component: BankingPage;
  let fixture: ComponentFixture<BankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankingPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
