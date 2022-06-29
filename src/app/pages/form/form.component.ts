import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entry } from 'src/app/model/entry.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() item: Entry = new Entry();
  @Output() cancelEvent = new EventEmitter();

  ngOnInit(): void {

  }


  public limpiar(): void {
    this.item = new Entry();
    this.cancelEvent.emit({

    });
  }

  public limpiar2(): void {

  }

  public agregar(): void {
    console.log(JSON.stringify(this.item));
  }

}
