import { Injectable, Inject } from 'angular2/core';
let flatten = require('flat');
let { vsprintf } = require('sprintf-js');

@Injectable()
export class TranslateService {

  private translations;

  constructor(@Inject('translations') translations:Object) {
    this.translations = flatten(translations);
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
