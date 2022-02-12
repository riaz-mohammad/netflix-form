import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators } from '@angular/forms';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-form-input',
  template: `
    <input [formControl]="formControl" [placeholder]="label" #input />
    <label>{{ label }}</label>
    <form-error @error *ngIf="(formControl.dirty && formControl.invalid)">{{ label }} is required!</form-error>
    <app-circle [class.toggle]="formControl.valid && formControl.touched">
    </app-circle>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        width: 75%;
        height: 50px;
        box-sizing: border-box;
        position: relative;
        border-radius: 30px;
      }

      form-error {
        position: absolute;
        left: 25px;
        top: 100%;
        color: red;
        font-size: 12px;
      }

      input {
        transition: all 200ms ease;
        box-sizing: border-box;
        border-radius: inherit;
        width: 95%;
        height: 100%;
        outline: none;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(21, 26, 31, 1);

        color: white;
        padding-left: 22px;
        font-size: 16px;
        &:focus ~ label {
          top: -9px;
          left: 4%;
          transform: scale(0.7);
        }
        &:focus {
          width: 100%;
          border-color: white;
        }

        &:focus::placeholder {
          opacity: 1;
        }

        &.ng-dirty ~ label {
          top: -9px;
          left: 4%;
          transform: scale(0.7);
          color: rgba(255, 255, 255, 0.5);
        }

        &.ng-dirty.ng-invalid ~ label {
          color: red;
        }
        &.ng-dirty.ng-invalid {
          border-color: red;
        }
      }

      ::placeholder {
        transition: all 300ms ease;
        color: rgba(255, 255, 255, 0.5);
        opacity: 0;
      }

      app-circle {
        position: absolute;
        background: white;
        right: 22px;
        top: 13px;
        transform: scale(0);
        transition: all 300ms ease-in-out;
        &.toggle {
          transform: scale(1);
        }
      }

      label {
        position: absolute;
        left: 8%;
        top: 15px;
        transform: scale(1);
        font-size: 16px;
        transition: all 200ms ease;
        color: rgba(255, 255, 255, 0.8);
        background: rgba(21, 26, 31, 1);
        cursor: text;
        padding: 0px 5px 0px 5px;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormInputComponent,
      multi: true,
    },
  ],
  animations: [
    trigger('error', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-30%)',
        }),
        animate('500ms ease'),
      ]),

      transition(':leave', [
        animate('500ms ease', style({
          opacity: 0,
          transform: 'translateY(30%)'
        }))
      ])
    ]),
  ],
})
export class FormInputComponent implements ControlValueAccessor {
  formControl = new FormControl('', Validators.required);
  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;
  @Input() focus!: boolean;
  @Input() label!: string;
  touched = (): void => {};
  valueChanged = (value: string): void => {};

  writeValue(value: string): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((value) =>
      this.valueChanged(value)
    );
    this.focus ? this.input.nativeElement.focus() : null;
  }
}

