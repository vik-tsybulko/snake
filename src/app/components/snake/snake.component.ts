import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ArenaService } from '../../services/arena.service';
import { EatService } from '../../services/eat.service';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  public direction: 'top' | 'left' | 'right' | 'bottom';
  public snake: Array<{ x: number, y: number }> = [
    { x: 1, y: 0 },
    { x: 0, y: 0 }
  ];
  private interval: any;
  constructor(
    public arenaService: ArenaService,
    private eatService: EatService
  ) {
  }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event.key'])
  private changeDirection(key) {
    switch (key) {
      case 'ArrowUp':
        if (this.direction === 'bottom') { return; }
        this.direction = 'top';
        this.changePosition();
        break;
      case 'ArrowDown':
        if (this.direction === 'top') { return; }
        this.direction = 'bottom';
        this.changePosition();
        break;
        //
      case 'ArrowRight':
        if (this.direction === 'left') {return; }
        this.direction = 'right';
        this.changePosition();
        break;
      case 'ArrowLeft':
        if (this.direction === 'right') {return; }
        this.direction = 'left';
        this.changePosition();
        break;
      default:
        return;
    }
  }
  private changePosition() {
    if (this.interval) { clearInterval(this.interval); }
    this.interval = setInterval(() => {
      const head = this.snake[0];

      if (
        this.arenaService.checkWalls(head) ||
        this.arenaService.checkSnake(this.snake)
      ) {
        clearInterval(this.interval);
        this.arenaService.setGameOver();
        return;
      } else {
      }
      const tail = this.snake.pop();

      if (this.arenaService.checkEat(head, this.eatService)) {
        this.snake.push(tail);
        this.eatService.generate();
        this.arenaService.incrementSnakeLength();
      }
      switch (this.direction) {
        case 'bottom':
          this.snake.unshift({ x: head.x, y: head.y + 1 });
          break;
        case 'top':
          this.snake.unshift({ x: head.x, y: head.y - 1 });
          break;
        case 'left':
          this.snake.unshift({ x: head.x - 1, y: head.y });
          break;
        case 'right':
          this.snake.unshift({ x: head.x + 1, y: head.y });
          break;
        default:
          return;
      }
    }, 250);
  }
}
