import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CreateCustomer } from './create-customer';

describe('CreateCustomer', () => {
  let component: CreateCustomer;
  let fixture: ComponentFixture<CreateCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomer],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});