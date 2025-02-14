import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';


@Component({
  selector: 'list-view',
  imports: [RowItemComponent],
  templateUrl: './list-view.component.html'
})
export class ListViewComponent {

  @Input() items: Item[] = [];

  id: number = 0;

  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  onRemove(id: number){
    this.removeEvent.emit(id);
    this.id = id;
  }

}
