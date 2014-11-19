import Ember from 'ember';

export default Ember.Controller.extend({

    toolIsCauseEffect: function () {
        return this.get('model.analyze') === 'Cause and Effect Analysis';
    }.property('model.analyze'),

    toolIsFiveWhys: function () {
        return this.get('model.analyze') === 'The Five Whys';
    }.property('model.analyze'),

    tools: [
        '',
        'Cause and Effect Analysis',
        'The Five Whys'
    ]
});
