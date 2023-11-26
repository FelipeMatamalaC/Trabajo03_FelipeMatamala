import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompartirTransportePage } from './compartir-transporte.page';

describe('CompartirTransportePage', () => {
  let component: CompartirTransportePage;
  let fixture: ComponentFixture<CompartirTransportePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompartirTransportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
