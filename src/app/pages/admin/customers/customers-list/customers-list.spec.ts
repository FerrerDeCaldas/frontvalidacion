import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CustomersList } from './customers-list';

describe('CustomersList', () => {
  let component: CustomersList;
  let fixture: ComponentFixture<CustomersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersList],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});