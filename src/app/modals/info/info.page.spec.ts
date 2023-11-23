import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPage } from './info.page';
import { IonicModule, ModalController } from '@ionic/angular';

describe('InfoPage', () => {
  let component: InfoPage;
  let fixture: ComponentFixture<InfoPage>;

  beforeEach((() => {


    

    TestBed.configureTestingModule({

      declarations: [InfoPage],
      imports: [IonicModule.forRoot(),    ],
      providers: [ModalController],
    });

    fixture = TestBed.createComponent(InfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
