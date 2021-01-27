import { Component, OnInit ,VERSION} from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { 

  }

  ngOnInit(): void {
  }

}
