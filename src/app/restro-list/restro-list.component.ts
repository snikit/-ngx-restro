import { Component, OnInit } from '@angular/core';
import { RestroService } from '../app/service/restro.service';
import { Restro } from '../app/model/restro.model';

@Component({
  selector: 'app-restro-list',
  templateUrl: './restro-list.component.html',
  styleUrls: ['./restro-list.component.css']
})
export class RestroListComponent implements OnInit {

  public restros : Restro[]

  constructor( private restroService : RestroService) { }

  ngOnInit() {
    this.restros = this.restroService.get();
  }

}