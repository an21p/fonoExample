import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://fonoapi.freshpixl.com',
  namespace: 'v1/getdevice',
  headers: {
    "Accept":"application/json" ,
  }
});
