import { Injectable } from '@angular/core';
import data from '../../assets/data.json';

export interface DataInterface {
  title: string;
  color: string;
  children: DataInterface[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: DataInterface[] = data;

  constructor() { }

  public getData(): DataInterface[] {
    return this.data;
  }

}
