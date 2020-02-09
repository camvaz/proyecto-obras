import { Component, OnInit } from '@angular/core';
import { File } from './subir-archivo';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-vista-subir-archivos',
  templateUrl: './vista-subir-archivos.component.html',
  styleUrls: ['./vista-subir-archivos.component.scss']
})
export class VistaSubirArchivosComponent implements OnInit {

  file: File = {
    id: null,
    nombre: null,
    fecha: null,
    path: null,
    updated_at: null,
    created_at: null,
  };


  constructor(private fileService: FilesService) { }

  ngOnInit() {
  }

  saveFile(){
    this.fileService.save(this.file).subscribe((data) => {
      alert('Archivo agregado');
      console.log(data);
    },  (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }


  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
    this.saveFile();
}



}
