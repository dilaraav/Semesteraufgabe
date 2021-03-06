import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Data} from '../../services/data';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  data: Data;

  constructor(
    private cs: BackendService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        datumControl: ['', Validators.required],
        gewichtControl: ['', Validators.required],
        armControl: ['', Validators.required],
        brustControl: ['', Validators.required],
        tailleControl: ['', Validators.required],
        huefteControl: ['', Validators.required],
        oberschenkelControl: ['', Validators.required],
      }
    );
    this.data = { id: 0, datum: '', gewicht: '', arm: '', brust: '', taille: '', huefte: '', oberschenkel: ''};
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.form.value);
    const values = this.form.value;
    this.data.datum = values.datumControl;
    this.data.gewicht = values.gewichtControl;
    this.data.arm = values.armControl;
    this.data.brust = values.brustControl;
    this.data.taille = values.tailleControl;
    this.data.huefte = values.huefteControl;
    this.data.oberschenkel = values.oberschenkelControl;
    console.log(this.data);
    this.cs.create(this.data);
    this.router.navigate(['/read']);
  }

  cancel(): void {
    this.router.navigate(['/read']);
  }
}
