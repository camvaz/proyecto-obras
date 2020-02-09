import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-subir-archivos',
  templateUrl: './vista-subir-archivos.component.html',
  styleUrls: ['./vista-subir-archivos.component.scss']
})
export class VistaSubirArchivosComponent implements OnInit {

  uploadFile($event) {
      console.log($event.target.files[0]); // outputs the first file
  }

  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}



  constructor() { }

  ngOnInit() {
  }

}
