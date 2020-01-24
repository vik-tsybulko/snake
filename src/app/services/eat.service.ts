import { Injectable } from '@angular/core';
import { ArenaService } from './arena.service';

@Injectable({
  providedIn: 'root'
})
export class EatService {
  public position: { x: number, y: number };

  constructor(
    private arenaService: ArenaService
  ) {
    this.generate();
  }
  public generate() {
    this.position = { x: Math.round(Math.random() * (this.arenaService.maxCell.x - 1)),
      y: Math.round(Math.random() * (this.arenaService.maxCell.y - 1)) };
  }

}
