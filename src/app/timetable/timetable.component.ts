import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var Timetable: any;

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit, AfterViewInit {

  timetable: any;
  renderer: any;

  constructor() {
    
  }

  ngOnInit() {
    var options = {
      url: 'http://www.google.com',
      class: 'vip',
      data: {
        id: 4,
        ticketType: 'VIP'
      }
    }

    this.timetable = new Timetable();
    this.timetable.setScope(9, 0);
    this.timetable.addLocations(['Silent Disco', 'Nile', 'Len Room', 'Maas Room']);
    this.timetable.addEvent('Frankadelic', 'Nile', new Date(2015, 7, 17, 10, 45), new Date(2015, 7, 17, 12, 30), options);

    this.renderer = new Timetable.Renderer(this.timetable);
    this.renderer.draw('.timetable');
  }

  ngAfterViewInit() {

    
  }

}
