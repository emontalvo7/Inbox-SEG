import { Component, Input, OnInit } from '@angular/core';
import { Inbox } from '../../models/Inbox';
import { InboxService } from 'src/app/services/inbox.service';
import { enviroment } from 'src/environments/enviroment.dev';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tables: any = enviroment.INBOX;
  inboxes?: Inbox[];
  pagina?: number=1;
  limite?: number=10;
  busqueda?: string='Test';
  @Input()
  dataSet?: string;


  constructor(private inboxService: InboxService) {
  }

  ngOnInit(): void {
    switch (this.dataSet) {
      case this.tables.INBOX_SOLICITUD_PROCESO:
        this.inboxes = this.inboxService.getInboxSolicitudProceso(this.pagina, this.limite, this.busqueda);
        return;
        case 'TEST':
        this.inboxes = this.inboxService.getInboxBaja(this.pagina, this.limite, this.busqueda);
        return;
        case this.tables.INBOX_BAJA:
        //Actidar spinenr
        this.inboxService.getTest(this.pagina, this.limite, this.busqueda).subscribe({
          next:response=>{
            this.inboxes=response
            //Desactivar spinner
          },
          error:err=>{
            console.log(err)
            //Desactivar spinner
          }
        });
        return;
    }
  }
}
