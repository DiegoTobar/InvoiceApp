import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ClientViewComponent } from '../invoice-client/invoice-client.component';
import { ListViewComponent } from '../list-row/list-view.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';


@Component({
  selector: 'app-invoice',
  imports: [InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListViewComponent,
    TotalComponent,
    FormItemComponent
  ],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor(private invoiceService: InvoiceService){
    
  }
  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  } 

  removeItem(id: number){
    this.invoice = this.invoiceService.remove(id);

  }

  addItem(item: Item) {
    this.invoice = this.invoiceService.save(item);

  }

}
