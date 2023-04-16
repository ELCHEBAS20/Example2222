import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SERVICIOSService {

  constructor(public httpCliente: HttpClient) { }


  public Function_getData_Filter(nvalores: number, nfilas: number) {
    return this.httpCliente.get(`https://localhost:7254/api/Usuarios/${nvalores}/${nfilas}`);
  }

  public FunctionCountDb() {
    return this.httpCliente.get('https://localhost:7254/api/Usuarios');
  }


}
