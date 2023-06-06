import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vendedor } from '../vendedor';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent {
  vendedor: Vendedor[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;
  isChecked: boolean = false; 
  opcaoSelecionada: any;

  constructor(private vendedorService: VendedorService,
    private formBuilder: FormBuilder) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      titulo: [''],
      preco: [''],
      descricao: [''],
      validade: [''],
      isChecked: ['',[Validators.required]],
      image :[''],
      opcaoSelecionada: ['', Validators.required]
      
    
    });
  }
  
 

  doSomething(){
  
    if(this.isChecked==true){
      console.log('checkbox is checked ');
    }
    else{
      console.log('checkbox is unchecked');
     
    }
  }

  ngOnInit(): void {
    this.loadVenda();
   }
   loadVenda() {
     this.vendedorService.getVendedor (). subscribe(
       {
         next : data => this.vendedor = data
       }
     );
   }
 
 
   save (){
   this.isChecked = true;
   if (this.formGroupClient.valid)
   {
    if (this.isEditing)
    {
      this.vendedorService.update(this.formGroupClient.value).subscribe(
        {
          next: () => {
            this.loadVenda();
            this.formGroupClient.reset();
            this.isEditing = false;
            this.isChecked = false;
          }
        }
      )
    }
    else{
    this.vendedorService.save(this.formGroupClient.value).subscribe(
      {
        next : data => {
          this.vendedor.push(data)
          this.formGroupClient.reset();
          this.isChecked = false;

        }
      }
    );
  }
}

   }
   
   edit (vendedor : Vendedor){
      this.formGroupClient.setValue(vendedor);
      this.isEditing = true;
 
   }
 
   delete (vendedor : Vendedor){
     this.vendedorService.delete(vendedor).subscribe({
       next : () => this.loadVenda()
     })
 
 }
   clean (){
   this.formGroupClient.reset();
   this.isEditing = false;
   }
   
 }
 