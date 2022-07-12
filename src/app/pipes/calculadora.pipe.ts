import { Pipe, PipeTransform } from '@angular/core';//librerias para decir que es un pipe

@Pipe({
	name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform{

	//num1 | calculadora : num2 , operacion
	transform(num1: number , operacion: string) : number {

		switch(operacion) { 
			case "Suma": { 
			   
				return num1+2; 
			   break; 
			} 
			case "Resta": { 
				return num1-2;
			   break; 
			} 
			case "Multiplicacion": { 
				return num1*2;
				break; 
			  
			}
			case "Division": { 
				return num1/2;
				break; 
			}
			default:{
				return 0;
			}

		}		
	}
}