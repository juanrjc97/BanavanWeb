import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ColorService } from './color.service';
import { Color } from 'src/app/models/color';
import { of, throwError } from 'rxjs';

describe('ColorService', () => {
  let service: ColorService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColorService],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'post',
      'put',
      'delete',
    ]);
    service = new ColorService(httpClientSpy as any);
  });

  it('should be created', () => {
    const service: ColorService = TestBed.inject(ColorService);
    expect(service).toBeTruthy();
  });

  /*it('should delete ribbon', (done: DoneFn) => {
    const blueColor : Color = {
      "id":9,
      "nombre" : "Azul",
      "hex_code" : ""

    }
    const exitoDelete = {
        "status": true
    }

    httpClientSpy.post.and.returnValue(of(exitoDelete));


    service.eliminarCinta(blueColor)
    .subscribe ( resultado =>{
      expect(resultado).toEqual(exitoDelete)
      done();
    }) ;
  });*/
});
