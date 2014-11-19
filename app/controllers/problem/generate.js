import Ember from 'ember';

export default Ember.Controller.extend({

    toolIsGroupBrainstorming: function () {
        return this.get('model.generate') === 'Group Brainstorming';
    }.property('model.generate'),

    toolIsIndividualBrainstorming: function () {
        return this.get('model.generate') === 'Individual Brainstorming';
    }.property('model.generate'),

    toolIsMindMaps: function () {
        return this.get('model.generate') === 'Mind Maps';
    }.property('model.generate'),

    toolIsTheDisneyCreativeStrategy: function () {
        return this.get('model.generate') === 'The Disney Creative Strategy';
    }.property('model.generate'),

    toolIsVisualThinking: function () {
        return this.get('model.generate') === 'Visual Thinking';
    }.property('model.generate'),

    toolIsCreativeThinkingThroughPlay: function () {
        return this.get('model.generate') === 'Creative Thinking Through Play';
    }.property('model.generate'),

    toolIsTRIZ: function () {
        return this.get('model.generate') === 'TRIZ';
    }.property('model.generate'),


    tools: [
        '',
        'Group Brainstorming',
        'Individual Brainstorming',
        'Mind Maps',
        'The Disney Creative Strategy',
        'Visual Thinking',
        'Creative Thinking Through Play',
        'TRIZ'
    ]

});
