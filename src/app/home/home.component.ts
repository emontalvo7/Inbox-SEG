import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {

  }

  goToIFT() {
    this.router.navigate(
      ['/inbox'],
      { queryParams: { perfil: 'ift' } }
    );
  }
  goToOPE() {
    this.router.navigate(
      ['/inbox'],
      { queryParams: { perfil: 'ope' } }
    );
  }
  goToCS() {
    this.router.navigate(
      ['/inbox'],
      { queryParams: { perfil: 'cs' } }
    );
  }


}
