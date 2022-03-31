import { Component, OnInit } from '@angular/core';
import { BilleterasService } from 'src/app/servicios/billeteras.service';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.css']
})
export class BilleteraComponent implements OnInit {

  billetera:any;
  constructor(private miServicio:BilleterasService) { }

  ngOnInit(): void {
    this.miServicio.listarBilletera().subscribe(data => {
      this.billetera=data;
    })
  }

}
