import { Component, OnInit } from '@angular/core';
import { Restro } from '../model/restro.model';
import { RestroService } from '../service/restro.service';

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