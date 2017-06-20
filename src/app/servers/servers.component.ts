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
  }
}

