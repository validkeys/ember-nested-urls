import Ember from 'ember';

export default Ember.Route.extend({


  actions: {
    setCurrentAdvisor(advisorId) {
      let controller = this.controllerFor('application');
      controller.set('currentAdvisorId', advisorId);
    }
  }

});
