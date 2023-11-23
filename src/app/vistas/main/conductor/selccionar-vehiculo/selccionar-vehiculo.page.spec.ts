import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelccionarVehiculoPage } from './selccionar-vehiculo.page';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('SelccionarVehiculoPage', () => {
  let component: SelccionarVehiculoPage;
  let fixture: ComponentFixture<SelccionarVehiculoPage>;

  beforeEach((() => {


    TestBed.configureTestingModule({
      declarations: [SelccionarVehiculoPage],
      imports: [IonicModule.forRoot(),        
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,],  
      providers: [ModalController], 
    });


    fixture = TestBed.createComponent(SelccionarVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
