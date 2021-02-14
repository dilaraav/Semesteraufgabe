import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Data } from '../../../services/data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: Data;
  @Output() updateEvent = new EventEmitter<Data>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        datumControl: ['', Validators.required],
        gewichtControl: ['', Validators.required],
        armControl: ['', Validators.required],
        brustControl: ['', Validators.required],
        tailleControl: ['', Validators.required],
        huefteControl: ['', Validators.required],
        oberschenkelControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.data?.id,
      datumControl: this.data?.datum,
      gewichtControl: this.data?.gewicht,
      armControl: this.data?.arm,
      brustControl: this.data?.brust,
      tailleControl: this.data?.taille,
      huefteControl: this.data?.huefte,
      oberschenkelControl: this.data?.oberschenkel
    });
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  cancel(): void {
    const values = this.form.value;
    this.data.id = values.idControl;
    this.data.datum = values.datumControl;
    this.data.gewicht = values.gewichtControl;
    this.data.arm = values.armControl;
    this.data.brust = values.brustControl;
    this.data.taille = values.tailleControl;
    this.data.huefte = values.huefteControl;
    this.data.oberschenkel = values.oberschenkelControl;
    this.updateEvent.emit(this.data);
    this.location.back();
  }

}
