import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ArenaService } from '../../services/arena.service';
import { WallComponent } from '../wall/wall.component';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit, AfterViewInit {
  @ViewChildren(WallComponent) private walls: QueryList<ViewChildren>;

  constructor(
    private arenaService: ArenaService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.arenaService.setWalls(this.walls.toArray());
  }

}
