import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchString : string;
  results : any;
  constructor() { }

  ngOnInit() {
    this.searchString = "Nombre del arquitecto";
    this.results = [
      {
        name:"Resultado"
      },
      {
        name:"Resultado"
      },
      {
        name:"Resultado"
      }
    ]
  }

}
