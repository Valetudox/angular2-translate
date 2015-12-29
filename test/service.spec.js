import 'es6-shim';
import 'reflect-metadata';
import { expect } from 'chai';
import { TranslateService } from '../lib';

describe('Service', function() {

  describe('#translate', function() {

    let service;

    beforeEach(function() {
      service = new TranslateService();
    });

    it('should translate the given simple text', function() {
      service.setTranslations({ key: 'value' });
      expect(service.translate('key')).to.eql('value');
    });


    it('should give back the given text if there is no translation for it', function() {
      service.setTranslations({ key: 'value' });
      expect(service.translate('wrongKey')).to.eql('wrongKey');
    });


    it('should give back the given text with interpolation', function() {
      service.setTranslations({ key: '%s value %s' });
      expect(service.translate('key', ['a', 'b'])).to.eql('a value b');
    });


    it('should handle nested dictionary', function() {
      service.setTranslations({ root: { nested: 'value' } });
      expect(service.translate('root.nested')).to.eql('value');
    });


    it('should give back the given text with interpolation if there is no translation for it', function() {
      service.setTranslations({ key: 'value' });
      expect(service.translate('%s wrongKey %s', ['a', 'b'])).to.eql('a wrongKey b');
    });

  });

});
