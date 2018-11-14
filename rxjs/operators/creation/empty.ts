import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo} from 'rxjs/operators'

/* 
    Empty returns an observable that immediately completes
*/
const subscribe = empty().subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});
