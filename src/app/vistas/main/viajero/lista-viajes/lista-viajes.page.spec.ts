import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaViajesPage } from './lista-viajes.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


describe('ListaViajesPage', () => {
  let component: ListaViajesPage;
  let fixture: ComponentFixture<ListaViajesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaViajesPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
      ],
      providers: [ModalController],
    });

    fixture = TestBed.createComponent(ListaViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

