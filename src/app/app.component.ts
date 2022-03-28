import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng4-complete-guide';
  secretPassword = false;
  log:any = [];

  onToggleDetails() {
    
    this.secretPassword = !this.secretPassword;
    this.log.push(new Date());
  }
}
