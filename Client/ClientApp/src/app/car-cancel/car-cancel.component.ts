import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-cancel',
  templateUrl: './car-cancel.component.html',
  styleUrls: ['./car-cancel.component.css']
})
export class CarCancelComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['cars'], { relativeTo: this.route.root });
  }
}
