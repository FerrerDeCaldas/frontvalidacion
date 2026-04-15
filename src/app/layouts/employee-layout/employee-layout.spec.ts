import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { EmployeeLayout } from './employee-layout';

describe('EmployeeLayout', () => {
  let component: EmployeeLayout;
  let fixture: ComponentFixture<EmployeeLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeLayout],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]) // Vital para el router-outlet y los links del menú
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});