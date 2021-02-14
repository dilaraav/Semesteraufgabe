import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Data } from '../../services/data';
import {ActivatedRoute} from '@angular/router';
import {faUserMinus} from '@fortawesome/free-solid-svg-icons';
import {HttpErrorResponse} from '@angular/common/http';


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
  //faUserMinusIcon = faUserMinus;

  constructor(private cs: BackendService, private route: ActivatedRoute) { }

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

}
