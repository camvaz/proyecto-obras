import { Injectable } from '@angular/core';
import { File } from '../vista-subir-archivos/subir-archivo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  API_ENDPOINT = "http://localhost:8000/api"
  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/File')
  }
  save(file: File) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/File', file, {headers:headers} );
  }
}