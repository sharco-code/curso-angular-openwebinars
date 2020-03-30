import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() { 
    this.correo = {
      titulo: "titulo",
      cuerpo: "curepo de email",
      emisor: "emisor@email.com",
      destinatario: "destinatario@email.com"
    }
  }

  ngOnInit(): void {

  }

}
