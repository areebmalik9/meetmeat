'use strict';

angular.module('meetmeat.version', [
  'meetmeat.version.interpolate-filter',
  'meetmeat.version.version-directive'
])

.value('version', '0.1');
