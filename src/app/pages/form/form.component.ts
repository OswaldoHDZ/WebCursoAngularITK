import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entry } from 'src/app/model/entry.model';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private comunicacionService: ComunicacionService) { }

  @Input() item: Entry = new Entry();
  @Output() cancelEvent = new EventEmitter();

  ngOnInit(): void {
    this.comunicacionService.obsMensaje.subscribe(mensaje => {

    });
  }


  public limpiar(): void {
    this.cancelEvent.emit(this.item);
    this.item = new Entry();
  }

  public limpiar2(): void {

  }

  public agregar(): void {
    console.log(JSON.stringify(this.item));
  }

  public seCambioIndex(mensaje : any) : void{
    this.comunicacionService.envarMensaje(mensaje.target.value);
  }

}
