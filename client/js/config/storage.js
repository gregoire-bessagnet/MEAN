'use strict';

export default function (localStorageServiceProvider) {
  'ngInject';
  localStorageServiceProvider
    .setPrefix('mean-sample')
    .setStorageType('sessionStorage')
    .setNotify(true, true)
}