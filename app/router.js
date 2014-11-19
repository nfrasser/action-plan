import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('problem', function () {
    this.route('analyze');
    this.route('generate');
    this.route('implement');
    this.route('monitor');
  });
  this.resource('prelude', function () {
      this.route('one');
  });
  this.route('resources');
});

export default Router;
