'use strict';

import 'es6-shim';
import 'reflect-metadata';
const { expect } = require('chai');
import { TranslateService } from '../lib/service';

describe('Service', function() {

  describe('#translate', function() {

    it('should translate the given simple text', function() {
      let service = new TranslateService();
      service.setTranslations({ key: 'value' });

      expect(service.translate('key')).to.eql('value');
    });

  });

});
