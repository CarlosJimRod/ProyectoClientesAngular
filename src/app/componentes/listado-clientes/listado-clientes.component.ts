import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../models/cliente.model";
import {ClientesService} from "../../services/clientes.service";

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  clientes: Cliente[] = []

  constructor(private clientesService: ClientesService) {
  }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(clientes =>
      this.clientes = clientes)
  }

}
