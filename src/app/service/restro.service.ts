import { Injectable } from "@angular/core";
import { Restro } from "../model/restro.model";

@Injectable()
export class RestroService {


restros : Restro[] = [{
  name : 'abc',
  address : 'cx',
  img : 'dsa.jpg'
} , {
  name : 'abc',
  address : 'cx',
  img : 'dsa.jpg'
}];


get(){
  return this.restros;
}

add(newrestro :Restro ){
  this.restros.push(newrestro)
}




}