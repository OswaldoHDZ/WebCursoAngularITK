import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {


  }

  entrar() {
    
    this.route.navigate(['./inicio/hola']);
    this.auth.getToken().subscribe(response => { console.log("Entrar");});
  }

}
