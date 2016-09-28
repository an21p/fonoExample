import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params) {
    console.log(params.device_name);
    let req = `/getdevice?token=749e385feadb61ea36e59a792d3fa8e48bbd762533ad36a8&device=` + params.device_name;
    console.log(req);
    return this.get('ajax').request(req);
  },

  setupController(controller, model) {
    controller.set('devices', model);
  },

});
