import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { EmployeesList } from './employees-list';

describe('EmployeesList', () => {
  let component: EmployeesList;
  let fixture: ComponentFixture<EmployeesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesList],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});