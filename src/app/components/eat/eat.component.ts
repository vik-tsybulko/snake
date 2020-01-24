import { Component, OnInit } from '@angular/core';
import { ArenaService } from '../../services/arena.service';
import { EatService } from '../../services/eat.service';

@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.scss']
})
export class EatComponent implements OnInit {

  constructor(
    public arenaService: ArenaService,
    public eatService: EatService
  ) { }

  ngOnInit() {
  }

}
