import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  titulo:string="soyuntitulo";

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.titulo += "o";
  }

}
