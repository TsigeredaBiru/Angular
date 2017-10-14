import { Directive, ElementRef, Input } from '@angular/core';
import { style } from '@angular/animations';
@Directive({
selector: '[myHighlight]'})
export class HighlightDirective {

constructor(e1: ElementRef) {

e1.nativeElement.style.backgroundColor = 'yellow';

}


}
