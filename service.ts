import { Injectable, Inject } from 'angular2/core';
let flatten = require('flat');
let { vsprintf } = require('sprintf-js');

@Injectable()
export class TranslateService {

  private _translations = <any>{};


  setTranslations(value: Object) {
    this._translations = flatten(value);
  }


  translate(value: string, parameters: Array<any> = []) {
    let translated = (this._translations[value]) ? this._translations[value] : value;
    try {
      return vsprintf(translated, parameters);
    } catch (e) {
      return value.replace(/%s|%d/gi, '');
    }
  }

}
