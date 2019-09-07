import {Component, Input} from '@angular/core';

@Component({
  selector: 'handle-error',
  templateUrl: './handle-error.component.html',
})
export class HandleErrorComponent{
  @Input() errorMsg: String;
}
