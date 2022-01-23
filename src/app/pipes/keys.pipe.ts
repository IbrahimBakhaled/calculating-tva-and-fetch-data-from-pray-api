import { PipeTransform, Pipe } from '@angular/core';
import {Times} from "../classes/times";

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {

  transform(value: Times) : any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
