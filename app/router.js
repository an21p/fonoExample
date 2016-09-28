import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('devices', function() {
    this.route('index', {path: '/'});
    this.route('device', {path: '/:device_name'});
  });
});

export default Router;
