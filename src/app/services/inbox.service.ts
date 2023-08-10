import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Inbox } from '../models/Inbox';
import { INBOXES, INBOXES_BAJA } from './hardcodeado/Inboxes.json';
import { enviroment } from 'src/environments/enviroment.dev';

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  private url: string = enviroment.URL;
  private urlInboxes: string = 'inboxes/';
  private httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'Application/json' }) };

  constructor(private http: HttpClient) { }

  getInboxSolicitudProceso = (pagina?: number, limite?: number, busqueda?: string): Inbox[] => INBOXES;

  getInboxBaja = (pagina?: number, limite?: number, busqueda?: string): Inbox[] => INBOXES_BAJA;

  getTest = (pagina?: number, limite?: number, busqueda?: string): Observable<Inbox[]> =>
    this.http.get<Inbox[]>(`${this.url + this.urlInboxes}test?pagina=${pagina}&limite=${limite}&busqueda=${busqueda}`,this.httpHeaders)
    .pipe(catchError((response)=>throwError(()=>response.error.message)));
}
