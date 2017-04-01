'use strict';

describe('meetmeat.version module', function() {
  beforeEach(module('meetmeat.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
