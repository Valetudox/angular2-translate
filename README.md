# Angular2 translate

This is a simple translate service solution for angular2. You should provide a dictionary and the service will translate it with sprintf interpolation.

Install
---------

```bash
npm install --save angular2-translate
```
Setup
---------

```javascript

import { TranslatePipe } from 'angular2-translate';
import { TranslateService } from 'angular2-translate';

const translations = {
  main: {
    text: 'I am: %s you are: %s'
  }
};

@Component({
  selector: '#suite-dashboard-container',
  pipes: [TranslatePipe],
  template: `
    <h1>{{ 'main.text' | translate:'Luke':controllerVariable }}</hello>
  `
})
export class App {

  constructor(translateService: TranslateService) {
    translateService.setTranslations(translations);
    this.controllerVariable = 'Darth Vader';
  }


