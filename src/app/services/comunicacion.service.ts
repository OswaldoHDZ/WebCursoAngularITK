import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ComunicacionService {

    mensaje !: string;


    private enviaMensaje = new Subject<string>();
    
    
    
    obsMensaje = this.enviaMensaje.asObservable();

    envarMensaje(mensaje : string){
        this.mensaje = mensaje;
        this.enviaMensaje.next(mensaje);
    }

}