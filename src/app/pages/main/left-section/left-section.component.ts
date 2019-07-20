import { Component, OnInit, Input } from '@angular/core';
import { SectionDataService } from '../section-data.service';
import { DataForSection } from '../sectionData';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {
  @Input('sectionId') sectionId: number;
  sectionTitle: string;
  sectionText: string;
  imageSrc: string;
  data: DataForSection;


  constructor(private service: SectionDataService) {
    this.data = new DataForSection();
   }

  ngOnInit() {
    this.sectionId = 1;
    this.service.getJson().subscribe(result => 
      {
        this.data = result.find(x=>x.sectionId == this.sectionId);
        console.log(this.data);
      }
    );
  }

}
