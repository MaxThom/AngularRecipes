import {Directive, Input, OnInit, TemplateRef, ViewContainerRef, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  @HostListener('click') ToggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;

  }


}
