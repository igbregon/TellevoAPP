import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionPage } from './inicio-sesion.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

describe('InicioSesionPage', () => {
  let component: InicioSesionPage;
  let fixture: ComponentFixture<InicioSesionPage>;

  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [InicioSesionPage],
      imports: [IonicModule.forRoot(), FormsModule],
    }).compileComponents();



    fixture = TestBed.createComponent(InicioSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('correo electrónico es vacío', () => {
    component.correo = '';
    expect(component.correo).toBeFalsy();
  });
});
