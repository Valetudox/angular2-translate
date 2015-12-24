import { Pipe, PipeTransform } from 'angular2/core';
import { TranslateService } from './service';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value, options) {
    return this.translateService.translate(value, options);
  }

}
