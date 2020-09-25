import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.transform('uppercase');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.transform(null);
  }

  constructor(private e1: ElementRef<HTMLElement>) { }

  private transform(textTransform: string): void {
    this.e1.nativeElement.style.textTransform = textTransform;
  }

}
