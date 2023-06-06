import { Component } from '@angular/core';
import { Vendedor } from '../vendedor';
import { FormBuilder } from '@angular/forms';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.component.html',
  styleUrls: ['./garagem.component.css']
})
export class GaragemComponent {
vendedor :  Vendedor[] = [];
  formGroupClient: any;

constructor(private VendedorService: VendedorService,
  private formBuilder: FormBuilder) {
  this.formGroupClient = formBuilder.group({
    titulo: [''],
    preco: [''],
    descricao: [''],
    validade: [''],
    opcaoSelecionada: [''],
    
  });
}
ngOnInit(): void {
  this.loadVenda();
 }
 loadVenda() {
   this.VendedorService.getVendedor(). subscribe(
     {
       next : data => this.vendedor = data
     }
   );
 }
}
