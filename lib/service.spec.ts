import { expect } from 'chai';
import { TranslateService } from '../lib';

describe('service', () => {

  const createService = function(translations: any) {
    return new TranslateService(translations);
  };

  describe('#hasTranslation', () => {

    it('should give back false if there is no translation for it', () => {
      const service = createService({ key: 'value' });
      expect(service.hasTranslation('notExists')).to.eql(false);
    });


    it('should give back true if there is translation for it', () => {
      const service = createService({ what: 'val' });
      expect(service.hasTranslation('what')).to.eql(true);
    });

  });

  describe('#translate', () => {

    it('should translate the given simple text', () => {
      const service = createService({ key: 'value' });
      expect(service.translate('key')).to.eql('value');
    });


    it('should give back the given text if there is no translation for it', () => {
      const service = createService({ key: 'value' });
      expect(service.translate('wrongKey')).to.eql('wrongKey');
    });


    it('should give back the given text with interpolation', () => {
      const service = createService({ key: '%s value %s' });
      expect(service.translate('key', ['a', 'b'])).to.eql('a value b');
    });


    it('should handle nested dictionary', () => {
      const service = createService({ root: { nested: 'value' } });
      expect(service.translate('root.nested')).to.eql('value');
    });


    it('should give back the given text with interpolation if there is no translation for it', () => {
      const service = createService({ key: 'value' });
      expect(service.translate('%s wrongKey %s', ['a', 'b'])).to.eql('a wrongKey b');
    });


    it('should remove the interpolation places if they are not match for the expectations', () => {
      const service = createService({ key: '%s value %d' });
      expect(service.translate('key', ['string', 'expects for decimal'])).to.eql(' value ');
    });

  });


  describe('#setTranslations', () => {

    it('should override the initial translations', () => {
      const service = createService({ key: 'value' });
      service.setTranslations({ otherKey: 'value' });

      expect(service.translate('key')).to.eql('key');
      expect(service.translate('otherKey')).to.eql('value');
    });

  });

});


