import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild,
    group
  } from '@angular/animations';

  //Route animations back and forth between each component in the app
  export const slideInAnimation =
  trigger('routeAnimations', [
    transition('PermPage <=> ContractPage, PermPage <=> PermPy, PermPage <=> PermSQL, PermPage <=> PermJS, PermPage <=> PermCSharp, PermPage <=> PermMS, PermPage <=> PermJava, PermPage <=> PermHtml,PermPage <=> PermScrum, PermPage <=> PermDevops, PermPage <=> PermAWS, ContractPage <=> ContPy, ContractPage <=> ContSQL, ContractPage <=> ContJS, ContractPage <=> ContCSharp, ContractPage <=> ContMS, ContractPage <=> ContJava, ContractPage <=> ContHtml, ContractPage <=> ContScrum, ContractPage <=> ContDevops, ContractPage <=> ContAWS, PermPy <=> PermSQL, PermPy <=> PermJS, PermPy <=> PermCSharp, PermPy <=> PermMS, PermPy <=> PermJava, PermPy <=> PermHtml, PermPy <=> PermScrum, PermPy <=> PermDevops, PermPy <=> PermAWS, PermSQL <=> PermJS, PermSQL <=> PermCSharp, PermSQL <=> PermMS, PermSQL <=> PermJava, PermSQL <=> PermHtml, PermSQL <=> PermScrum, PermSQL <=> PermDevops, PermSQL <=> PermAWS, PermJS <=> PermCSharp, PermJS <=> PermMS, PermJS <=> PermJava, PermJS <=> PermHtml, PermJS <=> PermScrum, PermJS <=> PermDevops, PermJS <=> PermAWS',
       [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

 
      