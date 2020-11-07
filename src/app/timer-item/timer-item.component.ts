import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.scss']
})
export class TimerItemComponent implements OnInit {

  private timerID: any = null;
  currentTimerValue = 0;
  @Input() timerInterval = 1000;

  @Output() tick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  timerStart(): void {
    if (this.timerID === null) {
      this.timerID = setInterval(
        () => this.timerIncrement(),
        this.timerInterval
      );
    }
  }

  timerStop(): void {
    if (this.timerID !== null) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
  }

  private timerIncrement(): void {
    /*эммитируем событие*/
    this.tick.emit(++this.currentTimerValue);
  }
}


