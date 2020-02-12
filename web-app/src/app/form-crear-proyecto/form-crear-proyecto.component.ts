import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-crear-proyecto',
  templateUrl: './form-crear-proyecto.component.html',
  styleUrls: ['./form-crear-proyecto.component.scss']
})
export class FormCrearProyectoComponent implements OnInit, AfterViewInit {

  constructor() { }

  title = "web-app";
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  baseURL: string;
  map: google.maps.Map;
  lat = 19.058131;
  lng = -98.222634;


  
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 16
  };
  
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }
  ngOnInit() {
    this.baseURL = window.location.pathname;
    
  }

  ngDoCheck() {
    this.baseURL = window.location.pathname;
  }
 }
