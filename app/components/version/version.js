'use strict';

angular.module('meetme.version', [
  'meetme.version.interpolate-filter',
  'meetme.version.version-directive'
])

.value('version', '0.1');
