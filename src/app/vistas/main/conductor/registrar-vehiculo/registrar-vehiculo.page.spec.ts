import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarVehiculoPage } from './registrar-vehiculo.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('RegistrarVehiculoPage', () => {
  let component: RegistrarVehiculoPage;
  let fixture: ComponentFixture<RegistrarVehiculoPage>;

  beforeEach((() => {


    TestBed.configureTestingModule({
      declarations: [RegistrarVehiculoPage],
      imports: [IonicModule.forRoot(),        
      AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,],  
      providers: [ModalController],      
    });


    fixture = TestBed.createComponent(RegistrarVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
