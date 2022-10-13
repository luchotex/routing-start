import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [
    { id: 1,
      name: 'Productionserver',
      status: 'Online'
    },
    { id: 2,
      name: 'Testserver',
      status: 'Online'
    },
    { id: 3,
      name: 'Devserver',
      status: 'Online'
    }
  ];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
