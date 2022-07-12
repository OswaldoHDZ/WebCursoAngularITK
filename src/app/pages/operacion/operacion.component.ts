import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  public validaNumero = new FormControl('', [Validators.required, Validators.min(1)]);
  public validaOperacion = new FormControl('', [Validators.required]);
  public numero: number;
  public operacion: any;

  constructor() {
    this.numero=0;

  }
  ngOnInit(): void {    
  }

  getErrorMessage() {
    if (this.validaNumero.hasError('required')) {
      return 'Debes ingresar un valor';
    }
    if(this.validaNumero.hasError('min')){
      return "Numero invalido";
    }
    if (this.validaOperacion.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.validaNumero.hasError('numero1') ? 'No es un numero valido' : '';
  }

  public ejecutaOperacion(){
    this.numero = Number(this.validaNumero.value);
    this.operacion = this.validaOperacion.value;

    console.log(typeof this.numero, this.numero);
    console.log(this.operacion);
    
  }

}
