import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escritor',
  templateUrl: './escritor.component.html',
  styleUrls: ['./escritor.component.css']
})
export class EscritorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  id = "5";
  nombre = "Pepe";
  frase = "Yolo YOLO Yolo";
}
