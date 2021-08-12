import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import {RacimoComponent} from './racimo.component';

describe('RacimoComponent', () => {
  let component: RacimoComponent;
  let fixture: ComponentFixture<RacimoComponent>;

 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [RacimoComponent],
    })
        .compileComponents();
  });
  beforeEach(() => {
    component = new RacimoComponent(new FormBuilder());
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
