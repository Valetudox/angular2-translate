import { Injectable, Inject } from '@angular/core';
const { flatten } = require('flat');
const { vsprintf } = require('sprintf-js');

@Injectable()
export class TranslateService {

  constructor(@Inject('translations') private _translations: any) {
    this._translations = flatten(_translations);
  }


  setTranslations(value: any) {
    this._translations = flatten(value);
  }


  hasTranslation(value: string): boolean {
    return !!this._translations[value];
  }


  translate(value: string, parameters: any[] = []): string {
    let translated = (this._translations[value]) ? this._translations[value] : value;
    try {
      return vsprintf(translated, parameters);
    } catch (e) {
      return translated.replace(/%s|%d/gi, '');
    }
  }

}
