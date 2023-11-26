import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionTiempoRealPage } from './informacion-tiempo-real.page';

describe('InformacionTiempoRealPage', () => {
  let component: InformacionTiempoRealPage;
  let fixture: ComponentFixture<InformacionTiempoRealPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformacionTiempoRealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
