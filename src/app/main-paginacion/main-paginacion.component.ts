import { Component, OnInit, OnDestroy } from '@angular/core';
import { SERVICIOSService as HttpClient } from '../Services/servicios.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-main-paginacion',
  templateUrl: './main-paginacion.component.html',
  styleUrls: ['./main-paginacion.component.css']
})
export class MainPaginacionComponent implements OnInit, OnDestroy {


  public NRows = parseInt(this.cookie.get('Filter'));
  public countBd: number = 0;
  public NValores: number = 0;
  public isDisabled: boolean = true;
  public isDisabledSiguiente: boolean = false;
  public DataInicial: any = [];
  public setInterval: any;

  constructor(public httpCliente: HttpClient, public cookie: CookieService) { }

  ngOnInit(): void {
    this.setInterval = setInterval(() => {
      this.getCountDb();
      this.getdataFilter();
    }, 200)
  }

  ngOnDestroy(): void {
    console.warn('** En estos momentos se ha roto en tiempo real  ***');
    clearInterval(this.setInterval);
  }

  public getdataFilter() {
    this.httpCliente.Function_getData_Filter(this.NValores, this.NRows).subscribe((resp: any) => {
      this.DataInicial = resp;
      this.isDisabledSiguiente = (resp.at(-1).idUsuario == this.countBd) ? true : false;
    })
  }

  public getCountDb() {
    this.httpCliente.FunctionCountDb().subscribe((resp: any) => {
      this.countBd = resp;
    })
  }

  public FunctionGetAnterior() {
    this.NValores -= this.NRows;
    this.httpCliente.Function_getData_Filter(this.NValores, this.NRows).subscribe((resp: any) => {
      this.DataInicial = resp;
    })

    if (this.NValores <= 0) {
      this.isDisabled = true;
      this.isDisabledSiguiente = false;
    } else {
      this.isDisabledSiguiente = false;
    }
  }

  public FunctionGetSiguiente() {

    this.NValores += this.NRows;
    this.httpCliente.Function_getData_Filter(this.NValores, this.NRows).subscribe((resp: any) => {
      this.DataInicial = resp;
      this.isDisabledSiguiente = (resp.at(-1).idUsuario == this.countBd) ? true : false;
    })
    this.isDisabled = this.NValores > 0 ? false : true;
  }

}
