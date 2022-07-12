import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { AppconfigService } from 'src/app/settings/appconfig.service';
import { interval, firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private comunicacionService: ComunicacionService,
    private appconfigService: AppconfigService,
    private auth: AuthService) { }

  public variableCambio !: string;

  async ngOnInit(): Promise<void> {


    //-----------------------****************************--------------------//
    await new Promise(async (resolve) => {
      await console.log("Inicio");
      resolve({});
    });


    await new Promise(async (resolve) => {

      await this.appconfigService.getAppconfig().toPromise().then(async (response) => {
        await console.log("1 : ", response);
      });

      resolve({});
    });


    await new Promise(async (resolve) => {
      await this.appconfigService.getAppconfig().toPromise().then(async (response) => {
        await console.log("2 : ", response);
      });
      resolve({});
    });

    await new Promise(async (resolve) => {
      await this.appconfigService.getAppconfig().toPromise().then(async (response) => {
        await console.log("3 : ", response);
      });
      resolve({});
    });

    await new Promise(async (resolve) => {
      await this.appconfigService.getAppconfig().toPromise().then(async (response) => {
        await console.log("4 : ", response);
      });
      resolve({});
    });

    await new Promise(async (resolve) => {
      await this.appconfigService.getAppconfig().toPromise().then(async (response) => {
        await console.log("5 : ", response);
      });
      resolve({});
    });


    await new Promise(async (resolve) => {
      await this.appconfigService.getAppconfig().toPromise().then(async (response) => {
        await console.log("6 : ", response);
      });
      resolve({});
    });


    await new Promise(async (resolve) => {
      await this.appconfigService.getAppconfig().toPromise().then(async (response) => {
        await console.log("7 : ", response);
      });
      resolve({});
    });


    await new Promise(async (resolve) => {
      await console.log("Final");
      resolve({});
    });

    //-----------------------****************************--------------------//

    await new Promise(async (resolve) => {
      await console.log("Inicio de FOR con promesa");
      resolve({});
    });


    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];


    for await (const iterator of arreglo) {

      await new Promise(async (resolve) => {
        await this.appconfigService.getAppconfig().toPromise().then(async (response) => {
          await console.log(iterator, " ", response);
        });
        resolve({});
      });

    }


    //-----------------------****************************--------------------/

    console.log("Concumo con  firstValueFrom ", await firstValueFrom(this.appconfigService.getAppconfig()));



    //-----------------------****************************--------------------/


    let arreglo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    for await (const iterator of arreglo2) {

      console.log(iterator, " ", await firstValueFrom(this.appconfigService.getAppconfig()));


    }


    this.comunicacionService.obsMensaje.subscribe(mensaje => {
      this.variableCambio = mensaje;
    });

  }

}
