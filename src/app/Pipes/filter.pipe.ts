import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'matchesCategory'
})
export class MathcesCategoryPipe implements PipeTransform {
    transform(items: Array<any>, category: string): Array<any> {

        return items.filter(item => item.category.id === category);
    }
}
