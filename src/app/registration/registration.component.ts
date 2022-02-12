
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { button, form, header, input } from '../animations';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  animations: [form, input, header, button]
})
export class RegistrationComponent {
  constructor(private formBuilder: FormBuilder) {}

  @ViewChild("firstInput", { static: true })
  input!: ElementRef<HTMLInputElement>;

  formData = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required],
      country: ["", Validators.required],
    }, { updateOn: "change" }
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
