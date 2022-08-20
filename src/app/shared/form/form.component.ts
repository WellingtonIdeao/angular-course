import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name: string = 'abc'

  person: any = {
    name: "",
    age:  0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
