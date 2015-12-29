import { Injectable, Inject } from 'angular2/core';
import { flatten } from 'flat';
import { vsprintf } from 'sprintf-js';

@Injectable()
export class TranslateService {

  setTranslations(value) {
    this._translations = flatten(value);
  }


  translate(value, parameters = []) {
    let translated = (this._translations[value]) ? this._translations[value] : value;
    try {
      return vsprintf(translated, parameters);
    } catch (e) {
      return value.replace(/%s|%d/gi, '');
    }
  }

}
