import { Injectable, Inject } from 'angular2/core';
let flatten = require('flat');
let { vsprintf } = require('sprintf-js');

@Injectable()
export class TranslateService {

  private translations = {};


  setTranslations(value) {
    this.translations = flatten(value);
  }


  translate(value, parameters = [[]]) {
    let translated = this.translations[value];
    try {
      return vsprintf(translated, parameters[0]);
    } catch (e) {
      return value.replace(/%s|%d/gi, '');
    }
  }

}
