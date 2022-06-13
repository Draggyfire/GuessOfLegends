import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-end',
  template: `
    <div>
      <h1 style="color: aliceblue;margin-top:50%;align-content: center">
        Félicitation invocateur, tu as trouvé les {{score}} champions en {{time}}.
      </h1>
    </div>
  `,
  styles: [
  ]
})
export class EndComponent implements OnInit {
  @Input('time') time! :string;
  @Input('score') score! : number;
  constructor() {}

  ngOnInit(): void {
  }

}
