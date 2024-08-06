import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';


import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient: HttpClient;
  protected apiUrl = environment.apiUrl;
  protected version = environment.version;

  constructor(
    protected injector: Injector
  ) {
    this.httpClient = injector.get(HttpClient);
  }

  protected get<T>(path: string, options: { [param: string]: unknown } = {}): Promise<T> {
    return lastValueFrom(this.httpClient.get<T>(`${this.apiUrl}${this.version}/1/${path}`, options));
  }
}
