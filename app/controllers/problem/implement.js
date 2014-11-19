import Ember from 'ember';

export default Ember.Controller.extend({
    modelDidLoad: function () {
        var model = this.get('model');
        if (model) {
            model.set('implement', 'Weighed Matrix Comparison Tool');
        }
    }.observes('model')
});
