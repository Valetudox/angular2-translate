'use strict';

import 'es6-shim';
import 'reflect-metadata';
import { TranslatePipe, TranslateService } from '../lib';
const { expect } = require('chai');

describe('Pipe', function() {

  describe('#transform', function() {

    it('should delegate the translation to the service', function() {
      let service = new TranslateService();
      let pipe = new TranslatePipe(service);
      service.setTranslations({ nested: { key: 'value' } });

      expect(pipe.transform('nested.key')).to.eql('value');
    });

  });

});
