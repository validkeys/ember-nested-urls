import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL(type, id, snapshot) {
    const advisorRoute = this.container.lookup('route:advisors.advisor');
    const advisorModel = advisorRoute.modelFor('advisors.advisor');
    let   base = `${this.host}/${this.namespace}/advisors/${advisorModel.get('id')}/clients`;

    if (id) {
      base += `/${id}`;
    }

    return base;
  }
});
