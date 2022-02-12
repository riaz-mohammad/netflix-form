import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  template: `
    <svg width="17" height="13" viewBox="0 0 17 12">
      <line
        x1="0.707107"
        y1="5.67391"
        x2="6.70711"
        y2="11.6739"
        stroke="black"
        stroke-width="2"
      />
      <line
        x1="5.64824"
        y1="12.0722"
        x2="15.9039"
        y2="1.31013"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
      svg {
        width: 80%;
        height: 80%;
      }
    `,
  ],
})
export class CircleComponent {}
