# Angular2 translate

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This is a simple translate service solution for angular2. You should provide a dictionary and the service will translate it with sprintf interpolation.

Install
---------

```bash
npm install --save angular2-translate
```
Setup
---------

provide `translations` in your bootstrap

```javascript

provide('translations', { 
  useValue: {
    main: {
      text: 'I am: %s you are: %s'
    },
    other: {
      withoutInterpolation: 'Star Wars'
    }
  } 
});

```

Usage in template
---------

```javascript

import { TranslatePipe } from 'angular2-translate';

@Component({
  selector: '<sub-app>',
  pipes: [TranslatePipe],
  template: `
    <h1>{{ 'main.text' | translate:'Luke':controllerVariable }}</h1>
    <h2>{{ 'other.withoutInterpolation' | translate }}</h2>
  `
})
export class App {

  constructor() {
    this.controllerVariable = 'Darth Vader';
  }
```

Usage in Controller
---------

```javascript

import { TranslateService } from 'angular2-translate';

@Component({
  selector: '<sub-app>',
  template: `Some content`
})
export class App {

  constructor(translateService: TranslateService) {
    this.translated = translateService.translate('main.text', ['first', 'second']);
  }
```
