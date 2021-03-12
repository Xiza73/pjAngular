import { Component, OnInit } from '@angular/core';
import { CargarScriptsService }  from './../../services/cargar-scripts.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css'],
})
export class ContactanosComponent implements OnInit {
  constructor(private _CargaScripts:CargarScriptsService){
    _CargaScripts.Carga([
      "contact"
    ]);
  }

  ngOnInit(): void {
    
  }

}
