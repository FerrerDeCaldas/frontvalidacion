import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CreateEmployee } from './create-employee';

describe('CreateEmployee', () => {
  let component: CreateEmployee;
  let fixture: ComponentFixture<CreateEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmployee],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});