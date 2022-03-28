import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  // Also we can use selector like below
  // selector: '[app-servers]',
  // 
  // In html it will be 
  // <div app-servers></div>
  // 
  // 
  // or we can use this like below
  // selector: '.app-servers',
  // 
  // In html it will be
  // <div class="app-servers"></div>
  // 
  templateUrl: './server.component.html',
  // or we can use the template with lesser code
  // template: `
  //          <app-server></app-server>
  //          <app-server2></app-server2>`,
  // 
  // styleUrls: ['./server.component.css']
  // 
  // or we can use styles as shown below
  // styles: [`
  // h3 {
  //    color: blue;
  // }
  // `] 
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


  // ngOnInit(): void {
  // }

}
