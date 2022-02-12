import { trigger, transition, query, style, stagger, animate, animateChild, group } from "@angular/animations";

export const input = trigger('input', [
  transition(':enter', [
    query(
      'app-form-input',
      [
        style({
          opacity: 0,
        }),
        stagger(
          '50ms',
          animate(
            '500ms 200ms ease',
            style({
              opacity: 1,
            })
          )
        ),
      ],
      { optional: true }
    ),
    query('@header', animateChild()),
  ]),
]);

export const header = trigger('header', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(40%)',
    }),
    animate('300ms ease'),
  ]),
]);


export const form = trigger('form', [
  transition(':enter', [
    style({
      'box-shadow': '0px 0px 20px 0px rgba(0, 0, 0, 0)'
    }),
    group([
      animate('1000ms 400ms ease', style({
            'box-shadow': '*'
      })),
      query('@button', animateChild())
    ])
  ])
])


export const button = trigger('button', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(50%)'
    }),
    animate('500ms 500ms ease')
  ])
])