import { Pipe, PipeTransform } from 'angular2/core';
import { TranslateService } from './service';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {

  constructor(private _translateService: TranslateService) { }

  transform(value: string, options: Array<any> = []) {
    return this._translateService.translate(value, options);
  }

}
