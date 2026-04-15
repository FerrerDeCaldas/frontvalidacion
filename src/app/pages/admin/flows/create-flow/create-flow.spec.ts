import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { CreateFlow } from './create-flow';

describe('CreateFlow', () => {
  let component: CreateFlow;
  let fixture: ComponentFixture<CreateFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // CreateFlow es standalone, por eso va en imports
      imports: [CreateFlow], 
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});