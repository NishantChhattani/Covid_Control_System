import { Component, OnInit } from '@angular/core';
import { Tracing } from '../model/tracing';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-tracing-list',
  templateUrl: './tracing-list.component.html',
  styleUrls: ['./tracing-list.component.css']
})
export class TracingListComponent implements OnInit {

  tracing: Tracing[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.tracing = data;
    });
  }
}