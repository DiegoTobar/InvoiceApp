import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  imports: [],
  templateUrl: './row-item.component.html'
})
export class RowItemComponent {

  @Input() item!: Item;

  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  onRemove(id: number){
    console.log(id);
    this.removeEvent.emit(id);
    

  }

}
