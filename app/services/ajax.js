import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'https://fonoapi.freshpixl.com',
  namespace: '/v1',

});
