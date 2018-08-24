import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  template: `
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Help and Support</h1>
      <p class="lead">If you need help or support, let's chat now</p>
    </div>
   <div>
   <app-action>
      <button type="button" class="btn btn-info" mat-icon-button (click)="onSave()">
       Login
      </button>
   </app-action>
  </div>
  `,
})

export class SupportComponent implements OnInit {
  

  constructor() {}

  ngOnInit() {}

  onSave() {
    alert('Welcome to angular portals');
  }
}
