import Ember from 'ember';

export default Ember.Controller.extend({
  brandIsHidden: false,
  techIsHidden: false,
  gprsIsHidden: false,
  edgeIsHidden: false,
  cameraIsHidden: false,
  actions: {
    toggleBrand() {
      this.toggleProperty('brandIsHidden');
    },
    toggleTech() {
      this.toggleProperty('techIsHidden');
    },
    toggleGPRS() {
      this.toggleProperty('gprsIsHidden');
    },
    toggleEDGE() {
      this.toggleProperty('edgeIsHidden');
    },
    toggleCamera() {
      this.toggleProperty('cameraIsHidden');
    },
  }
});
