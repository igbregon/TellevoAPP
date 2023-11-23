import { TestBed } from '@angular/core/testing';
import { AngularDelegate } from '@ionic/angular';
import { LocationService } from './location.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LocationService', () => {
let service: LocationService;

beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [LocationService, AngularDelegate],
        imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LocationService);
    });

it('should be created', () => {
expect(service).toBeTruthy();
});
});

