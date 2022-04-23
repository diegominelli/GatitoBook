import { ActivatedRoute } from '@angular/router';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-animais',
  templateUrl: './listas-animais.component.html',
  styleUrls: ['./listas-animais.component.css'],
})
export class ListasAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });
  }
}
