import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const advisor = this.modelFor('advisors.advisor');
    return advisor.get('clients');
    // return this.store.findAll('client');
  },

  actions: {
    save(client) {
      return client.save();
    }
  }

});
