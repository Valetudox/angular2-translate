import 'es6-shim';
import 'reflect-metadata';
import { test } from 'ava'
import { TranslateService } from '../lib';

const createService = function(translations) {
  return new TranslateService(translations);
};

test('#translate should translate the given simple text', function(t) {
  const service = createService({ key: 'value' });
  t.is(service.translate('key'), 'value');
});


test('#translate should give back the given text if there is no translation for it', function(t) {
  const service = createService({ key: 'value' });
  t.is(service.translate('wrongKey'), 'wrongKey');
});


test('#translate should give back the given text with interpolation', function(t) {
  const service = createService({ key: '%s value %s' });
  t.is(service.translate('key', ['a', 'b']), 'a value b');
});


test('#translate should handle nested dictionary', function(t) {
  const service = createService({ root: { nested: 'value' } });
  t.is(service.translate('root.nested'), 'value');
});


test('#translate should give back the given text with interpolation if there is no translation for it', function(t) {
  const service = createService({ key: 'value' });
  t.is(service.translate('%s wrongKey %s', ['a', 'b']), 'a wrongKey b');
});


test('#translate should remove the interpolation places if they are not match for the expectations', function(t) {
  const service = createService({ key: '%s value %d' });
  t.is(service.translate('key', ['string', 'expects for decimal']), ' value ');
});


test('#setTranslations should override the initial translations', function(t) {
  const service = createService({ key: 'value' });
  service.setTranslations({ otherKey: 'value' });

  t.is(service.translate('key'), 'key');
  t.is(service.translate('otherKey'), 'value');
});
