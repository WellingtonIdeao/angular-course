import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  
  @Input() defaultColor: string =  'white';
  @Input('highlight') highlightColor: string = 'yellow';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
