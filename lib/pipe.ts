import { Pipe } from '@angular/core';
import { TranslateService } from './service';

@Pipe({ name: 'translate' })
export class TranslatePipe {

  constructor(private _translateService: TranslateService) {}

  transform(value: string, options: any[] = []) {
    return this._translateService.translate(value, options);
  }

}
