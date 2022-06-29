import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/model/entry.model';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

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

  public eventoCancelar() : void{
    console.log("Se presiono el cancelar");
  }  



}
