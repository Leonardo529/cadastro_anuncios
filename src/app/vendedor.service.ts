import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedor } from './vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  url = "http://localhost:3000/carros";
  constructor(private http: HttpClient) { }

   getVendedor(): Observable<Vendedor[]>{
    return this.http.get<Vendedor[]>(this.url);
   }

   save (vendedor : Vendedor): Observable<Vendedor>{
    return this.http.post<Vendedor>(this.url, vendedor);
   }
   delete (vendedor : Vendedor): Observable<void>{
    return this.http.delete<void>(`${this.url}/${vendedor.id}`);
   }
   update (vendedor : Vendedor): Observable<Vendedor>{
    return this.http.put<Vendedor>(`${this.url}/${vendedor.id}`, vendedor);
   }
   clean (vendedor : Vendedor): Observable<void>{
    return this.http.delete<void>(`${this.url}/${vendedor.id}`);
   }
}