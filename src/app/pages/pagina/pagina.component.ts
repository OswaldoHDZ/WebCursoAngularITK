import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entry } from 'src/app/model/entry.model';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { AppconfigService } from 'src/app/settings/appconfig.service';



@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private comunicacionService: ComunicacionService,
              private appconfigService: AppconfigService) { }

  public variableCambio !: string;

  ngOnInit(): void {

    this.appconfigService.getAppconfig().subscribe(respuesta =>{
      console.log(respuesta);
    });

    this.comunicacionService.obsMensaje.subscribe(mensaje => {
      this.variableCambio = mensaje;
    });

  }

}
