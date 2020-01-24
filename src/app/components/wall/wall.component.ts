import { Component, OnInit } from '@angular/core';
import { ArenaService } from '../../services/arena.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  public top;
  public left;
  public width;
  public height;

  constructor(
    public arenaService: ArenaService
  ) { }

  ngOnInit() {
    this.width = this.arenaService.cellDimensions;
    this.height = this.random(1, this.arenaService.maxCell.y - 5);
    this.left = this.random(1, this.arenaService.maxCell.x - 3);
    this.top = this.random(1, (this.arenaService.maxCell.y - 5) - this.height);
  }
  random(min: number, max: number): number {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

}
