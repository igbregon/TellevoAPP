import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelccionarVehiculoPage } from './selccionar-vehiculo.page';

describe('SelccionarVehiculoPage', () => {
  let component: SelccionarVehiculoPage;
  let fixture: ComponentFixture<SelccionarVehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelccionarVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
