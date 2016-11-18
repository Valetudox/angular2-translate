export * from './service';
export * from './pipe';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslatePipe } from './pipe';
import { TranslateService } from './service';

export type Translations = {
  [name: string]: string
};

@NgModule({
  declarations: [TranslatePipe],
  exports: [TranslatePipe]
})
export class TranslateModule {
  static create(translations: Translations): ModuleWithProviders {
    return {
      ngModule: TranslateModule,
      providers: [
        { provide: TranslateService, useValue: new TranslateService(translations) }
      ]
    };
  }
}
