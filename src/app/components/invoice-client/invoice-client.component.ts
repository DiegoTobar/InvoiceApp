import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'invoice-client',
  imports: [],
  templateUrl: './invoice-client.component.html'
})
export class ClientViewComponent {
  @Input() client: Client = new Client;
}
