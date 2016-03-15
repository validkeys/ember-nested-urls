import Ember from 'ember';

export default Ember.Controller.extend({

  currentAdvisorId: null,
  currentAdvisor:   Ember.computed('currentAdvisorId', function(){
    return this.store.peekRecord('advisor', this.get('currentAdvisorId'));
  }),
  currentAdvisorClients: Ember.computed('currentAdvisor', function() {
    return this.get('currentAdvisor.clients');
  })

});
