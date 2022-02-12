import { trigger, transition, style, animate, keyframes, state } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: "app-logo",
  template: `
    <h1 [@first]="show">N</h1>
    <h1 *ngIf="show" @second>ETFLIX</h1>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 180px;
        height: 30px;
        z-index: 100;
        transition: all 500ms ease;
        top: 380px;
      }
      h1 {
        color: rgba(141, 10, 10, 1);
      }

      h1 {
        position: absolute;
      }
    `,
  ],
  animations: [
    trigger("first", [
      transition(":enter", [
        style({
          transform: "scale(5)",
        }),
        animate("500ms ease"),
      ]),

      state(
        "true",
        style({
          left: "0px",
        })
      ),

      transition("false => true", [animate("500ms ease")]),
    ]),

    trigger("second", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "translateX(-30px)",
        }),
        animate("500ms 200ms ease"),
      ]),
    ]),
  ],
})
export class LogoComponent {
  show = false;
  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  }
}
  
