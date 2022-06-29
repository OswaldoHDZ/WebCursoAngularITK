import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entry } from 'src/app/model/entry.model';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private comunicacionService: ComunicacionService) { }

  public variableCambio !: string;

  ngOnInit(): void {

    this.comunicacionService.obsMensaje.subscribe(mensaje => {
      this.variableCambio = mensaje;
    });

  }

}
