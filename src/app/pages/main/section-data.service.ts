import { Injectable } from '@angular/core';
import { DataForSection } from './sectionData';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SectionDataService {
  data: Array<DataForSection>;
  jsonPath: string;

  constructor(private http: HttpClient) {
    this.data = new Array<DataForSection>();
    this.jsonPath = "assets/pages/main/data.json";
  }

  public getJson(): Observable<Array<DataForSection>> {  
    return this.http.get<Array<DataForSection>>(this.jsonPath);
  }
   
}
