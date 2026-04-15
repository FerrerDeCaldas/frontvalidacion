import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { AreasList } from './areas-list';

describe('AreasList', () => {
  let component: AreasList;
  let fixture: ComponentFixture<AreasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Si AreasList es Standalone, se queda en imports
      imports: [AreasList], 
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});