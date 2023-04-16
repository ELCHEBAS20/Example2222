import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPaginacionComponent } from './main-paginacion.component';

describe('MainPaginacionComponent', () => {
  let component: MainPaginacionComponent;
  let fixture: ComponentFixture<MainPaginacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPaginacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPaginacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
