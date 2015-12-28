# Angular2 translate

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
    <h1>{{ 'main.text' | translate:'a','b' }}</hello>
  `
})
export class App {

  constructor(translateService: TranslateService) {
    translateService.setTranslations(translations);
  }


