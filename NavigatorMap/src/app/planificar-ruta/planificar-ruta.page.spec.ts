import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanificarRutaPage } from './planificar-ruta.page';

describe('PlanificarRutaPage', () => {
  let component: PlanificarRutaPage;
  let fixture: ComponentFixture<PlanificarRutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanificarRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
