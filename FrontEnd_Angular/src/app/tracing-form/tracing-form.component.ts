import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Tracing } from '../model/tracing';

@Component({
  selector: 'app-tracing-form',
  templateUrl: './tracing-form.component.html',
  styleUrls: ['./tracing-form.component.css']
})
export class TracingFormComponent {

  tracing: Tracing;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.tracing = new Tracing();
  }

  onSubmit() {
    this.userService.save(this.tracing).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/Tracing']);
  }
}
