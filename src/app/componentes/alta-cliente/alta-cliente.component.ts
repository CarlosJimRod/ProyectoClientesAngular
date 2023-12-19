import {Component, OnInit} from '@angular/core';
import {Grupo} from "../../models/cliente.model";
import {ClientesService} from "../../services/clientes.service";

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  nombre: string = ""
  cif: string = ""
  direccion: string = ""
  grupo: number = 0
  listaGrupos: Grupo[] = []

  constructor(private clienteService: ClientesService) {
  }

  ngOnInit() {
    this.listaGrupos = this.clienteService.grupos
  }

  guardarCliente() {
    this.clienteService.agregarCliente({
      id: 1,
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    })
    this.nuevoCliente()
  }

  nuevoCliente() {
    this.nombre = ""
    this.cif = ""
    this.direccion = ""
    this.grupo = 0
  }
}
