'use strict';

describe('meetme.version module', function() {
  beforeEach(module('meetme.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
