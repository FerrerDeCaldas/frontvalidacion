import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { OrderDetailsDialog } from './order-details-dialog';

describe('OrderDetailsDialog', () => {
  let component: OrderDetailsDialog;
  let fixture: ComponentFixture<OrderDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailsDialog],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        // Estos dos son OBLIGATORIOS para cualquier Dialog de Material
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});