import { Directive, ElementRef, Input } from '@angular/core';
import Inputmask from 'inputmask';

@Directive({
  selector: '[appValidateForm]',
})
export class ValidateFormDirective {
  private regexMap: any = {
    integer: '^[0-9]*$',
    words: '^[a-zA-Z]+( [a-zA-Z]+)*$',
    username: '^[a-zA-Z0-9]*$',
    onlyLetterNumber: '^[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$',
    float: '^[+-]?([0-9]*[.])?[0-9]+$',
    point25: '^-?[0-9]*(?:\\.25|\\.50|\\.75|)$',
  };

  constructor(private elemento: ElementRef) {}

  @Input('appValidateForm')
  public set defineInputType(type: string) {
    Inputmask({ regex: this.regexMap[type], placeholder: '' }).mask(
      this.elemento.nativeElement
    );
  }
}
