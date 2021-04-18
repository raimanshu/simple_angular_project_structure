import { Directive, HostListener } from "@angular/core";

@Directive({
    selector:'[date-card]'
})

export class DateCardDirective {
    @HostListener('input', ['$event'])
    onKeyDown(event: KeyboardEvent){
        const input = event.target as HTMLInputElement;

        let trimmed = input.value.replace(/\s+/g, '');
        if (trimmed.length > 2) {
          trimmed = trimmed.substr(0, 2);
        }

        let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed);
    }
    input.value = numbers.join(' ');
    }
}