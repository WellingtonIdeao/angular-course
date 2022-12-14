import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string =  'http://localhost:8000';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/200/300';

  currentValue: string = '';
  savedValue: string = '';

  isMouseOver: boolean = false;

  nomeCurso:string = "Angular";

  valorInicial: number = 15;

  constructor() { }

  getValor(): number{
    return 1;
  }

  getCurtirAngular(): boolean{
    return true;
  }
  buttonClicked(): void{
    alert('botao clicado');
  }
  onKeyUp(event: KeyboardEvent): void{
    this.currentValue = (<HTMLInputElement>event.target).value;
  }
  saveValue(value: string): void {
    this.savedValue = value;
  }
  onMouseOverOut(): void{
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event: any): void {
    console.log(event.novoValor);
  }
    

}
