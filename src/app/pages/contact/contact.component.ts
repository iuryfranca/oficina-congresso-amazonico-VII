import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactPage {
  formContact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    sexo: new FormControl(''),
    message: new FormControl(''),
  });

  envioDoFormulario() {
    console.log(this.formContact.value);
  }

  get validButtonContact() {
    return this.formContact.valid;
  }
}
