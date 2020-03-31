import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  variable:string = "texto";

  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.variable += "o"
  }

}
