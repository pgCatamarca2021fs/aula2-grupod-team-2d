import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {
  
  precioPeso = 0;
  precioDolar = 0;
  monedaConver(precioPeso: number, precioDolar:number) {
    precioDolar = precioPeso * 210;
}
  constructor() { }

  ngOnInit(): void {
  }

}
