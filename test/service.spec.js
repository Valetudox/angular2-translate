import 'es6-shim';
import 'reflect-metadata';
import { expect } from 'chai';
import { TranslateService } from '../lib';

describe('Service', function() {

  let createService = function(translations) {
    return new TranslateService(translations);
  };

  describe('#translate', function() {

    it('should translate the given simple text', function() {
      let service = createService({ key: 'value' });
      expect(service.translate('key')).to.eql('value');
    });


    it('should give back the given text if there is no translation for it', function() {
      let service = createService({ key: 'value' });
      expect(service.translate('wrongKey')).to.eql('wrongKey');
    });


    it('should give back the given text with interpolation', function() {
      let service = createService({ key: '%s value %s' });
      expect(service.translate('key', ['a', 'b'])).to.eql('a value b');
    });


    it('should handle nested dictionary', function() {
      let service = createService({ root: { nested: 'value' } });
      expect(service.translate('root.nested')).to.eql('value');
    });


    it('should give back the given text with interpolation if there is no translation for it', function() {
      let service = createService({ key: 'value' });
      expect(service.translate('%s wrongKey %s', ['a', 'b'])).to.eql('a wrongKey b');
    });

  });

  describe('#setTranslations', function() {

    it('should override the initial translations', function() {
      let service = createService({ key: 'value' });
      service.setTranslations({ otherKey: 'value' });

      expect(service.translate('key')).to.eql('key');
      expect(service.translate('otherKey')).to.eql('value');
    });

  });

});
