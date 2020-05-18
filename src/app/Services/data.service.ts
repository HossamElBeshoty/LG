import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(public httpClient: HttpClient) {
  }

  get(APIPath) {
    return this.httpClient.get(`${environment.apiEndPoint}${APIPath}`);
  }

  getWithParams(APIPath, params) {
    return this.httpClient.get(`${environment.apiEndPoint}${APIPath}`, {params});
  }

  delete(APIPath, Key) {
    return this.httpClient.delete(`${environment.apiEndPoint}${APIPath}${Key}`);
  }

  update(APIPath: string, OBJ: any) {
    return this.httpClient.put(`${environment.apiEndPoint}${APIPath}`, OBJ);
  }

  post(APIPath: string, OBJ: any) {
    return this.httpClient.post(`${environment.apiEndPoint}${APIPath}`, OBJ);
  }
}
