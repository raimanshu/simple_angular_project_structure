import { Directive, HostListener } from "@angular/core";

@Directive({
    selector:'[cvv-card]'
})

export class CvvCardDirective {
    @HostListener('input', ['$event'])
    onKeyDown(event: KeyboardEvent){
        const input = event.target as HTMLInputElement;

        let trimmed = input.value.replace(/\s+/g, '');
        if (trimmed.length > 4) {
          trimmed = trimmed.substr(0, 4);
        }

        let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed);
    }

    input.value = numbers.join(' ');
    }
}