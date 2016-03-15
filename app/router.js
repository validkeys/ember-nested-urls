import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('advisors', { path: "/advisors" }, function() {
    this.route('advisor', { path: "/:advisorId" }, function() {
      this.route('clients', { path: "/clients" }, function() {
        this.route('client', { path: "/:clientId" });
      })
    })
  });
});

export default Router;
