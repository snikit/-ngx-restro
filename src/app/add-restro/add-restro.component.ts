import { Component, OnInit } from "@angular/core";
import { Restro } from "../model/restro.model";
import { RestroService } from "../service/restro.service";

@Component({
  selector: "app-add-restro",
  templateUrl: "./add-restro.component.html",
  styleUrls: ["./add-restro.component.css"]
})
export class AddRestroComponent implements OnInit {
  restro: Restro;

  constructor(private restroService: RestroService) {}

  ngOnInit() {}

  addRestro() {
    this.restroService.add(this.restro);
  }
}
