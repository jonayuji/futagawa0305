import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //プロパティ
  title = 'calculator';
  display = '';

  //ディスプレイへの追加処理
  appendInput = (value: string): void => {
    this.display += value;
  }

  //ディスプレイの表示内容クリア処理
  clear = (): void => {
    this.display = '';
  }

  //計算処理
  calculate = (): void => {
    try {
      this.display = eval(this.display);
    } catch(e) {
      this.display = 'ERROR';
    }
  }

  //履歴処理
  save = (): void => {
    //処理内容
  }

  //履歴クリア処理
  historyClear = (): void => {
    //処理内容
  }
}