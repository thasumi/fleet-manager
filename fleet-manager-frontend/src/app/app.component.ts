import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fleet-manager-frontend';

  constructor(private spinner: NgxSpinnerService) {
    
  }

  ngOnInit(): void {

  }
}
