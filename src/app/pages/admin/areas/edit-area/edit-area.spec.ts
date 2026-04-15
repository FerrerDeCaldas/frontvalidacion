import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, ActivatedRoute } from '@angular/router'; // Para manejar la URL

import { EditArea } from './edit-area';

describe('EditArea', () => {
  let component: EditArea;
  let fixture: ComponentFixture<EditArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditArea],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        // Esto simula que estamos en la ruta /edit/1
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});