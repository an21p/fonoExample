import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchDevice(device) {
      console.log(device);
      this.sendAction('action', device);
    }
  }
});
