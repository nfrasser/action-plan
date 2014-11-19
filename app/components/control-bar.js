import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'nav',
    role: 'navigation',
    classNames: ['controlbar'],
    attributeBindings: ['role'],

});
