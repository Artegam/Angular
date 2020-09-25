import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../shared/animal';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${environment.api}/animals/${id}`);
  }

  findAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${environment.api}/animals`);
  }

  update(animal: Animal): Observable<Animal[]> {
    return this.httpClient.put<Animal[]>(`${environment.api}/animals/${animal.id}`, animal);
  }

  save(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(`${environment.api}/animals`, animal);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.api}/animals/${id}`);
  }
}
