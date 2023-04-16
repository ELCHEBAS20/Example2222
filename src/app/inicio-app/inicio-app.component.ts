import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-app',
  templateUrl: './inicio-app.component.html',
  styleUrls: ['./inicio-app.component.css']
})
export class InicioAppComponent implements OnInit {


  public filterValors: number[] = [5, 10, 15, 20];
  public isVisible: boolean = false;
  public isActive: boolean = false;
  public getCookie: string = '';

  constructor(public cookies: CookieService, public router: Router) { }


  ngOnInit(): void { }

  public getValor(event: any) {

    this.isActive = true;
    this.isVisible = true;
    this.getCookie = '';

    if (event != '') {
      for (let index = 0; index < this.filterValors.length; ++index) {
        if (this.filterValors[index] == parseInt(event)) {
          this.isActive = false, this.isVisible = false;
          this.getCookie += event;
        }
      }
    } else {
      this.isActive = true;
    }
  }

  public setCookie() {
    this.cookies.set('Filter', this.getCookie);
    this.router.navigate(['/', 'tabla']);
  }

}
