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
    var name = "";
    var type = "";
    var size;
    var modifiedDate;
    for (var i = 0; i < $event.target.files.length; i++) { 
       name = $event.target.files[i].name;
       type = $event.target.files[i].type;
       size = $event.target.files[i].size;
       modifiedDate = $event.target.files[i].lastModifiedDate;
      
      console.log ('Name: ' + name + "\n" + 
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB");
    }
    //this.saveFile();
      this.file.nombre = name;
      this.file.fecha = modifiedDate;
      
      this.fileService.save(this.file).subscribe((data) => {
      alert('Archivo agregado');
      console.log(data);
    },  (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });

  }



}
