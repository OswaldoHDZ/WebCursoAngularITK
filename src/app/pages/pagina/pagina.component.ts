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

  async ngOnInit(): Promise<void> {


    await this.appconfigService.getAppconfig().then(
      respues => {

      }
    );

    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("2 ", respuesta);
    });

    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("3 ", respuesta);
    });
    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("4 ", respuesta);
    });
    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("5 ", respuesta);
    });
    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("6 ", respuesta);
    });
    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("7 ", respuesta);
    });
    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("8 ", respuesta);
    });
    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("9 ", respuesta);
    });
    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("10 ", respuesta);
    });
    await this.appconfigService.getAppconfig().subscribe(async (respuesta) => {
      console.log("11 ", respuesta);
    });


    this.comunicacionService.obsMensaje.subscribe(mensaje => {
      this.variableCambio = mensaje;
    });

  }

}
