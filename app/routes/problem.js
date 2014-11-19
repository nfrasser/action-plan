import Ember from 'ember';
import Problem from '../models/problem';

export default Ember.Route.extend({
    problem: null,
    model: function () {
        var problem = this.get('problem');
        if (!problem) {
            problem = Problem.create();
            this.set('problem', problem);
        }

        return problem;
    }
});
