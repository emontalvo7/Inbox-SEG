import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { Table } from 'primeng/table';
import { CustomerService } from 'src/app/services/customer-service';
import { Customer, Representative } from 'src/app/models/customer';

interface Column {
  field?: string;
  header?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  loading: boolean = true;

  products!: Product[];

  cols!: Column[];

  servicio: Product[] = [];

  _selectedColumns!: Column[];

  exportColumns!: ExportColumn[];

  selectedSize: any = '';

  sizes!: any[];

  selectedProduct!: Product;

  visible: boolean = false;
  openURL: any = 'http://172.24.100.17:7004/atlasWeb/faces/sistemaCaptura/ScGenDe1.xhtml?solicitud=13059583&sf=1&sf=1&app=512&codUsr=SYSTEM&cuc=E055689484&perfil=ECU&pry=13059583&fped=13059583&mov=ALT&etapa=RECHAZADA&userseg=GANAYA&token=UWNU7ZRVwgO9nfw2eLN6MsBHkYrk';

  constructor(private customerService: CustomerService, private productService: ProductService) { }

  ngOnInit() {

    this.productService.getProducts().then((data) => {
      this.loading = false;
      this.products = data;

    });

    this.cols = [
      { field: 'folio', header: 'Folio' },
      { field: 'cs', header: 'CS' },
      { field: 'fecha_creacion', header: 'Fecha Creacion' },
      { field: 'movimiento', header: 'Movimiento' },
      { field: 'estatus', header: 'Estatus' },
      { field: 'referencia', header: 'Referencia' },
      { field: 'folio_medio_alterno', header: 'Folio Medio Alterno' },

    ];

    this._selectedColumns = this.cols;

    //this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    this.sizes = [
      { name: 'Small', class: 'p-datatable-sm' },
      { name: 'Normal', class: '' },
      { name: 'Large', class: 'p-datatable-lg' }
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }

  exportPdf() {

  }

  exportExcel() {

  }

  saveAsExcelFile(buffer: any, fileName: string): void {

  }

  onRowSelect(event: any) {
    console.log(event);
  }

  showDialog(folio: any) {
    console.log(folio)
    this.visible = true;
  }

}
