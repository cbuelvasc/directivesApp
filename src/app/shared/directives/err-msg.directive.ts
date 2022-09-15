import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-message]',
})
export class ErrMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _message: string = 'This field is requiered...!';
  private _valid: boolean = false;
  element: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set message(message: string) {
    this._message = message;
    this.setMessage();
  }

  @Input() set valid(isValid: boolean) {
    if (isValid) {
      this.element.nativeElement.classList.add('hidden');
    } else {
      this.element.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.element = elementRef;
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.setClass();
    this.setMessage();
    this.setColor();
  }

  setClass() {
    this.element.nativeElement.classList.add('form-text');
  }

  setMessage() {
    this.element.nativeElement.innerText = this._message;
  }

  setColor() {
    this.element.nativeElement.style.color = this._color;
  }
}
