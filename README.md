# Nestedurls

### adapters

override the buildURL method in the client adapter to find the advisor on the advisor route
and include that in the URL

### serializers

created the keyForRelationship method in the serializers to
bring in the advisorId


### css modules

https://github.com/salsify/ember-css-modules

Checkout components/x-styled for example

### client list

In the afterModel hook in the advisor route, i am firing an event
to the application route to set the currentAdvisorId. This will allow
me to have a client list outside of te advisor route. Would prefer to handle this outside
of the application controller (state?) but that's what the controller's for right now.
