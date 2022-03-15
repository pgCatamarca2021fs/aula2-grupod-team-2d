import { Component, OnInit } from '@angular/core';
import { ComerciaService } from 'src/app/servicios/comercia.service';

@Component({
  selector: 'app-comercia',
  templateUrl: './comercia.component.html',
  styleUrls: ['./comercia.component.css']
})
export class ComerciaComponent implements OnInit {

  comercia:any;

  constructor(private miServicio:ComerciaService) { }

  ngOnInit(): void {
    this.miServicio.listarComercia().subscribe(data => {
      this.comercia=data;
    })
  }

}
