import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleViajesPage } from './detalle-viajes.page';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';

describe('DetalleViajesPage', () => {
  let component: DetalleViajesPage;
  let fixture: ComponentFixture<DetalleViajesPage>;

  beforeEach((() => {


    TestBed.configureTestingModule({
      declarations: [DetalleViajesPage],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRoute },ModalController
      ],
      imports: [IonicModule.forRoot()], 
    });




    fixture = TestBed.createComponent(DetalleViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
