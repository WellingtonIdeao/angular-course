import { Component} from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent{
  namePortal: string;
  cursos: string[];

  constructor(private cursoService: CursosService){
    this.namePortal = "http://localhost:8000";
    this.cursos = this.cursoService.getCursos();
  }


}
