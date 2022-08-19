import { Component} from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent{
  namePortal: string;

  cursos: string[] = ['Java', 'Python', 'Angular'];

  constructor(){
    this.namePortal = "http://localhost:8000";
  }

}
