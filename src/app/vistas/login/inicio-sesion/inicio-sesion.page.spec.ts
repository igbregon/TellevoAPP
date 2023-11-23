import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionPage } from './inicio-sesion.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('InicioSesionPage', () => {
  let component: InicioSesionPage;
  let fixture: ComponentFixture<InicioSesionPage>;

  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [InicioSesionPage],
      imports: [IonicModule.forRoot(),        
      AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,], 
      providers: [ModalController],       
    });



    fixture = TestBed.createComponent(InicioSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('correo electrónico es vacío', () => {
    component.correo = '';
    expect(component.correo).toBeFalsy();
  });
});
