import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input("highlight") highlight: string = 'black';

  constructor(private el: ElementRef) {
    // console.log(el.nativeElement.style.cssText = 'border:solid 1px ' + this.highlight);
  }
  ngOnInit() {
    // console.log(this.highlight);
    // console.log(this.el.nativeElement.style.cssText = 'border:solid 1px ' + this.highlight);
  }
  @HostListener("mouseover") onMouseOver() {
    this.el.nativeElement.style.cssText = 'border:solid 1px ' + this.highlight;
  }
  @HostListener("mouseout") onMouseOut() {
    this.el.nativeElement.style.cssText = 'border:solid 0px ' + this.highlight;
  }
}
