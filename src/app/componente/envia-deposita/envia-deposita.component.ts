import { Component, OnInit } from '@angular/core';
import { EnviaDepositaService } from 'src/app/servicios/envia-deposita.service';

@Component({
  selector: 'app-envia-deposita',
  templateUrl: './envia-deposita.component.html',
  styleUrls: ['./envia-deposita.component.css']
})
export class EnviaDepositaComponent implements OnInit {

  enviaDeposita:any;

  constructor(private miServicio:EnviaDepositaService) { }

  ngOnInit(): void {
    this.miServicio.listarEnviaDeposita().subscribe(data => {
      this.enviaDeposita=data;
    })
  }

}
