import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    return this.transitionTo('advisors.advisor.clients.index');
  }
})
