import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArenaService {
  private windowWidth: number = window.innerWidth - 10;
  private windowHeight: number = window.innerHeight - 10;
  public cellDimensions = 25;
  public maxCell: { x: number, y: number } = {
    x: Math.floor(this.windowWidth / this.cellDimensions),
    y: Math.floor(this.windowHeight / this.cellDimensions)
  };
  private walls: any;
  private snakeLength = 0;
  public gameOver = false;
  public restart = false;
  constructor() { }
  public setWalls(walls) {
    this.walls = walls;
  }
  public checkWalls(head) {
    return head.x >= (this.maxCell.x - 1) ||
      (head.y >= this.maxCell.y - 1) ||
      head.x < 0 ||
      head.y < 0 ||
      (head.x === this.walls[0].left && (head.y >= this.walls[0].top && head.y <= this.walls[0].top + this.walls[0].height - 1));
  }
  public checkSnake(snake) {
    const head = snake[0];
    return snake.slice(1, snake.length).some(item => item.x === head.x && item.y === head.y);
  }
  public checkEat(head, eat): boolean {
    return head.x === eat.position.x &&
      head.y === eat.position.y;
  }
  public incrementSnakeLength() {
    this.snakeLength++;
  }
  public getSnakeLength(): number {
    return this.snakeLength;
  }
  public setGameOver(): void {
    this.gameOver = true;
  }
  public restartGame() {
    this.snakeLength = 0;
    this.gameOver = false;
    this.restart = true;
    setTimeout(() => {
      this.restart = false;
    });
  }
}
