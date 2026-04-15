import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { FlowsList } from './flows-list';

describe('FlowsList', () => {
  let component: FlowsList;
  let fixture: ComponentFixture<FlowsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowsList],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});