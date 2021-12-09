import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-ropa',
  templateUrl: './products-ropa.component.html',
  styleUrls: ['./products-ropa.component.css']
})
export class ProductsRopaComponent implements OnInit {
  
  
  /*mostrar = "";
  datos: String = "";
  productos:any[] = [];
  
  
  

  formProducto = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(10)]),
    precio: new FormControl('',[Validators.required,Validators.minLength(2)]),
    descripcion: new FormControl('', [Validators.required,Validators.maxLength(20)])
  });
  // los input del formulario se asocian con un modelo
  producto:any = {};

  submit(){
    
      this.productos.push();
                 
      
    
  }*/

  ngOnInit(): void {
  }
  userForm: FormGroup
  listData:any;
  constructor(private fb:FormBuilder  ){

    this.listData = [];

  this.userForm = this.fb.group({
    nombre: new FormControl('',[Validators.required,Validators.minLength(2)]),
    precio: new FormControl('',[Validators.required,Validators.minLength(2)]),
    descripcion: new FormControl('', [Validators.required,Validators.maxLength(20)]),
    imagen: new FormControl('', [])
  })
}
addItem(){
  if(this.userForm.valid){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
    
    
  }else{
    alert("Por favor, ingrese correctamente los datos")
  }
  
}
reset(){
  this.userForm.reset();
  
  
}

removeItems(element:any){
  this.listData.forEach((value:any,dex:any) => {
    if(value == element){
      this.listData.splice(dex,1)
    }

  });


}


}


