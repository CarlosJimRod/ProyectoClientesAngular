import {Injectable} from '@angular/core';
import {Cliente, Grupo} from "../models/cliente.model";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes: Cliente[] = [];
  grupos: Grupo[] = [
    {id: 0, nombre: 'Sin definir'},
    {id: 1, nombre: 'Activos'},
    {id: 2, nombre: 'Inactivos'},
    {id: 3, nombre: 'Deudores'}
  ]

  getClientes(): Cliente[] {
    return this.clientes
  }

  getGrupos(): Grupo[] {
    return this.grupos
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente)
  }

}
