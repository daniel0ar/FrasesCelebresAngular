import { Component, OnInit } from '@angular/core';
import { EscritoresService } from './escritores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'frasesCelebresAngularApp';
  public escritores = [];

  constructor(private _escritoresService: EscritoresService) { }

  ngOnInit() {
    this._escritoresService.geEscritores()
    .subscribe(data => this.escritores = data["escritores"]);
  }
}
