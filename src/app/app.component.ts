import { trigger, transition, query, style, stagger, animate, animateChild } from '@angular/animations';

import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  template: `
    <nav>
      <h1>NETFLIX</h1>
    </nav>
    <form [formGroup]="formData" (ngSubmit)="onSubmit()">
      <form-inputs @input *ngIf="showInputs">
        <h3 @header>REGISTRATION</h3>
        <app-form-input [focus]="true" label="NAME" formControlName="name">
        </app-form-input>
        <app-form-input label="SURNAME" formControlName="surname">
        </app-form-input>
        <app-form-input label="EMAIL" formControlName="email"> </app-form-input>
        <app-form-input label="COUNTRY" formControlName="country">
        </app-form-input>
      </form-inputs>
      <button type="submit" (click)="showInput()" [class.move]="showInputs">
        {{ !showInputs ? 'REGISTER' : 'SUBMIT' }}
      </button>
    </form>
  `,
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('input', [
      transition(':enter', [
        query(
          'app-form-input',
          [
            style({
              opacity: 0,
            }),
            stagger(
              '50ms',
              animate(
                '500ms 200ms ease',
                style({
                  opacity: 1,
                })
              )
            ),
          ],
          { optional: true }
        ),
        query('@header', animateChild()),
      ]),
    ]),

    trigger('header', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(40%)',
        }),
        animate('300ms ease'),
      ]),
    ]),
  ],
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}

  @ViewChild('firstInput', { static: true })
  input!: ElementRef<HTMLInputElement>;

  formData = this.formBuilder.group(
    {
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
    },
    { updateOn: 'change' }
  );

  showInputs = false;

  showInput(): void {
    this.showInputs = true;
  }

  onSubmit(): void {
    if (this.formData.invalid) return;
    console.log(this.formData.value);
  }
}
