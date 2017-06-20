import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'Testserver';
  userName: string = '';
  emptyUserName: boolean = true;
  serverCreated: boolean = false;
  servers = ['Testserver','Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created' + this.serverName;
    console.log(document.querySelector("button"));
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
  this.emptyUserName = (this.userName=='');
}

  onClickResetButton() {
    this.userName = '';
    this.onUpdateUserName(null);
  }
}

