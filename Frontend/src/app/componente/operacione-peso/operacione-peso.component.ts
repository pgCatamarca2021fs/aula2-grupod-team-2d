import { Component, OnInit } from '@angular/core';
import { OperacionePesoService } from 'src/app/servicios/operacione-peso.service';

@Component({
  selector: 'app-operacione-peso',
  templateUrl: './operacione-peso.component.html',
  styleUrls: ['./operacione-peso.component.css']
})
export class OperacionePesoComponent implements OnInit {

  operacionePeso:any;

  constructor(private miServicio:OperacionePesoService) { }

  ngOnInit(): void {
    this.miServicio.listarOperacionePeso().subscribe(data => {
      this.operacionePeso=data;
    })
  }

}
