import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  variable:string = "texto";

  @Input() titulo: string;

  @Output() enviar: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.variable += "o"

    this.enviar.emit(this.variable);
  }

}
