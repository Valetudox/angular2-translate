import 'es6-shim';
import 'reflect-metadata';
import { TranslatePipe, TranslateService } from '../lib';
import { test } from 'ava';

test('#transform should delegate the translation to the service with empty arguments if there is no', function(t) {
  const service = new TranslateService({ nested: { key: 'value%s' } });
  const pipe = new TranslatePipe(service);

  t.is(pipe.transform('nested.key', [5]), 'value');
});

test('#transform should delegate the translation to the service', function(t) {
  const service = new TranslateService({ nested: { key: 'value' } });
  const pipe = new TranslatePipe(service);

  t.is(pipe.transform('nested.key'), 'value');
});

