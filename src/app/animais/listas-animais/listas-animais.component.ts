import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-animais',
  templateUrl: './listas-animais.component.html',
  styleUrls: ['./listas-animais.component.css'],
})
export class ListasAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) {}

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
        this.animais = animais;
      });
    });
  }
}
