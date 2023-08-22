import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { Table } from 'primeng/table';
import { Servicio } from 'src/app/models/servicio';

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
  @Input() perfil: any;

  loading: boolean = true;

  products!: Servicio[];

  _selectedColumns!: Column[];

  exportColumns!: ExportColumn[];

  selectedSize: any = '';

  sizes!: any[];

  selectedProduct!: Product;

  visible: boolean = false;

  openURL: any = 'http://172.24.100.17:7004/atlasWeb/faces/sistemaCaptura/ScGenDe1.xhtml?solicitud=13059583&sf=1&sf=1&app=512&codUsr=SYSTEM&cuc=E055689484&perfil=ECU&pry=13059583&fped=13059583&mov=ALT&etapa=RECHAZADA&userseg=GANAYA&token=UWNU7ZRVwgO9nfw2eLN6MsBHkYrk';
  /* COLUMNAS DINAMICAS SEGUN EL PERFIL */

  colsOPE: Column[] = [
    { field: 'folio_serv', header: 'Folio Serv' },
    { field: 'descripcion', header: 'Descripcion' },
    { field: 'fecha_creacion_serv', header: 'Fecha Creacion Serv' },
    { field: 'movimiento', header: 'Movimiento' },
    { field: 'estado', header: 'Estado' },
    { field: 'referencia', header: 'Referencia' },
    { field: 'folio_articulo', header: 'Folio Articulo' }
  ];

  colsCS: Column[] = [
    { field: 'folio_serv', header: 'Folio Serv' },
    { field: 'descripcion', header: 'Descripcion' },
    { field: 'fecha_creacion_serv', header: 'Fecha Creacion Serv' },
    { field: 'movimiento', header: 'Movimiento' },
  ];

  colsIFT: Column[] = [
    { field: 'folio_serv', header: 'Folio Serv' },
    { field: 'descripcion', header: 'Descripcion' },
    { field: 'fecha_creacion_serv', header: 'Fecha Creacion Serv' },
    { field: 'movimiento', header: 'Movimiento' },
    { field: 'estado', header: 'Estado' },
    { field: 'referencia', header: 'Referencia' },

  ];
  cols!: Column[];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getAllProductsApi().subscribe((data: any) => {
      this.loading = false;
      this.products = data.content;

    });

    //this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    switch (this.perfil) {
      case 'cs':
        this.cols = this.colsCS;
        this._selectedColumns = this.colsCS;
        break;
      case 'ift':
        this.cols = this.colsIFT;
        this._selectedColumns = this.colsIFT;
        break;
      case 'ope':
        this.cols = this.colsOPE;
        this._selectedColumns = this.colsOPE;
        break;
    }
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
