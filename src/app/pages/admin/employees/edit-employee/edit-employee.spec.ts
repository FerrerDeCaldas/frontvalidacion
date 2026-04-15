import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { EditEmployee } from './edit-employee';

describe('EditEmployee', () => {
  let component: EditEmployee;
  let fixture: ComponentFixture<EditEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmployee], 
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]) // Indispensable para que lea los parámetros de la URL
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});