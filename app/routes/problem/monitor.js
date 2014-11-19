import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        yay: function () {
            alert("You're awesome!");
        }
    }
});
