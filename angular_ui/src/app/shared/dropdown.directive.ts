import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})

export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    constructor(private elRef: ElementRef) { }

    //This keeps menu open, we need to close it, if anywhere else is clicked.
    // @HostListener('click') toggleOpen(event: Event) {
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}
