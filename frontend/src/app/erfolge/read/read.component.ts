import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Data } from '../../services/data';
import {ActivatedRoute, Router} from '@angular/router';
import {faUserMinus} from '@fortawesome/free-solid-svg-icons';
import {HttpErrorResponse} from '@angular/common/http';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  erfolge: Data[];
  erfolg: Data;
  selectedId: number;
  error: HttpErrorResponse;
  closeResult = '';
  form: FormGroup;
  //faUserMinusIcon = faUserMinus;

  constructor(private cs: BackendService, private route: ActivatedRoute, private router: Router,  config: NgbModalConfig,
              private modalService: NgbModal, private fb: FormBuilder,) {
    // Konfiguration des modalen Dialogs
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Formular fuer delete
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
    );}

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
      this.readOne(this.selectedId);
    }
  }

  trackByData(index: number, data: Data): number { return data.id; }

  readAll(): void {
    this.cs.getAll().subscribe(
      (response: Data[]) => {
        console.log(response);
        return this.erfolge = response;  },
      error => console.log(error)
    );
  }

  readOne(id: number): void {
    this.cs.getDataById(id).subscribe(
      (response: Data) => this.erfolg = response,
      error => this.error = error,
    );
  }
  update(data: Data): void {
    this.erfolg = data;
    this.cs.update(this.erfolg.id, this.erfolg);
    this.router.navigateByUrl('/read');
  }

  deleteOne(id: number): void {
    this.cs.deleteOne(id);
    window.location.reload();
  }

  open(content, id: number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.erfolg?.id);
      }
    });
  }

}
