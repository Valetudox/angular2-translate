import { Pipe } from 'angular2/core';
import { TranslateService } from './service';

@Pipe({ name: 'translate' })
export class TranslatePipe {

  constructor(translateService: TranslateService) {
    this._translateService = translateService;
  }

  transform(value, options = []) {
    return this._translateService.translate(value, options);
  }

}
