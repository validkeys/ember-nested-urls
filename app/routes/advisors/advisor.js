import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.find('advisor', params.advisorId);
  },

  afterModel(model, transition) {
    transition.send('setCurrentAdvisor', model.get('id'));
  },

  deactivate() {
    this.send('setCurrentAdvisor', null);
  }

});
