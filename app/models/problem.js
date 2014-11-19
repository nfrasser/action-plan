import Ember from 'ember';

var Problem = Ember.Object.extend({
  defaults: {
    description: 'My problem is...'
  },
  description: '',
  analyze: null,
  generate: null,
  implement: null
});

export default Problem;
