import { Component, OnInit } from '@angular/core';
import { OperaCriptoService } from 'src/app/servicios/opera-cripto.service';

@Component({
  selector: 'app-opera-cripto',
  templateUrl: './opera-cripto.component.html',
  styleUrls: ['./opera-cripto.component.css']
})
export class OperaCriptoComponent implements OnInit {

  operaCripto:any;

  constructor(private miServicio:OperaCriptoService) { }

  ngOnInit(): void {
    this.miServicio.listarOperaCripto().subscribe(data => {
      this.operaCripto=data;
    })
  }

}
