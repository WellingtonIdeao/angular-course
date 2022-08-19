import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string =  'http://localhost:8000';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/200/300';

  constructor() { }

  getValor(): number{
    return 1;
  }

  getCurtirAngular(): boolean{
    return true;
  }
    

}
