import { expect } from 'chai';
import { TranslatePipe, TranslateService } from '../lib';

describe('pipe', () => {

  describe('#transform', () => {

    it('#transform should delegate the translation to the service', () => {
      const service = new TranslateService({ nested: { key: 'value%s' } });
      const pipe = new TranslatePipe(service);
      expect(pipe.transform('nested.key', [5])).to.eql('value5');
    });


    it('#transform should delegate the translation to the service with empty arguments if there is no', () => {
      const service = new TranslateService({ nested: { key: 'value' } });
      const pipe = new TranslatePipe(service);
      expect(pipe.transform('nested.key')).to.eql('value');
    });

  });

});
