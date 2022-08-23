import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //selector: '[appFundoAmarelo]'
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2
    ) {
    //this._element.nativeElement.style.backgroundColor = 'yellow';
    //console.log(this._element);
    this._renderer.setStyle(this._element.nativeElement, 'background-color', 'yellow');

   }

}
