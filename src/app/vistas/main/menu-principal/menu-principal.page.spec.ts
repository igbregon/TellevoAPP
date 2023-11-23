import { TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('AutenticacionService', () => {
  let service: AutenticacionService;

  beforeEach(() => {

  
    TestBed.configureTestingModule({
      declarations: [], // 
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        HttpClientTestingModule,
      ],
      providers: [ { provide: ActivatedRoute, useValue: ActivatedRoute },ModalController , ModalController], 
    });

    service = TestBed.inject(AutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

