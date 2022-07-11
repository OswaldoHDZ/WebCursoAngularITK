import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/model/entry.model';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  public form: boolean = false;
  public itemSelect !: Entry;



  errorExists: boolean = false;
  count: number = 0;
  entries: Entry[] = [];



  constructor(private apisService: ApisService) { }

  ngOnInit(): void {
    this.getApis();
  }

  getApis() {
    this.errorExists = false;

    this.apisService.getApis()
      .subscribe({
        next: ({ count, entries }) => {
          this.count = count;
          let index = 0;
          for (const iterator of entries) {
            index = index + 1;
            iterator.index = index;
            this.entries.push(iterator);
          }
        },
        error: error => {
          this.errorExists = true;
          this.count = 0;
          this.entries = [];
        },
      });
  }

  editar(entry: Entry) {
    this.itemSelect = entry;
    this.form = true;
  }

  eliminar(entry: Entry) {
    this.entries.forEach((element, indexFor) => {
      if (element.index === entry.index) {
        this.entries.splice(indexFor, 1);
      }
    });
  }

  public agregarNuevo(): void {
    this.form = true;
  }

  public eventoCancelar(evento : any) : void{
    console.log(evento);
    console.log("Se presiono el cancelar" );
  }  



}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
