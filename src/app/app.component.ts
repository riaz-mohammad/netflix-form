import { Component, HostBinding} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: "app-root",
  template: `
    <nav *ngIf="router.url === '/register'"></nav>
    <app-logo [class.moveUp]="router.url === '/register'"></app-logo>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/wave.svg");
        background-position: 0% 0%;
        background-size: cover;
        animation: move 10000ms infinite alternate;
        position: relative;
        &.black {
          background: black;
        }
      }

      app-logo.moveUp {
        top: 40px;
      }

      @keyframes move {
        to {
          background-position: 50% 0%;
        }
      }
      nav {
        position: relative;
        top: -70px;
        width: 90%;
        height: 8%;
        border-radius: 40px;
        background: rgba(21, 26, 31, 5);
        box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.4);
      }
    `,
  ],
})
export class AppComponent {
  @HostBinding("class.black")
  get black(): boolean {
    return this.router.url === "/" ? true : false;
  }
  constructor(public router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(["/register"]);
    }, 2000);
  }
}
