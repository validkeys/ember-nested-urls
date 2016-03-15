const { extend } = _;

export default function() {

  this.get('/api/v1/advisors', function(db) {
    return {
      advisors: db.advisors.map((advisor) => {
        return extend({}, advisor, {
          links: {
            "clients": "/api/v1/advisors/" + advisor.id + "/clients"
          }
        })
      })
    }
  });

  this.get('/api/v1/advisors/:advisorId', function(db, request) {
    return {
      advisor: db.advisors.find(request.params.advisorId)
    }
  });

  this.get('/api/v1/advisors/:advisorId/clients', function(db, request) {
    return {
      clients: db.clients.filter((item) => parseInt(item.advisorId) === parseInt(request.params.advisorId))
    }
  });

  this.get('/api/v1/advisors/:advisorId/clients/:clientId', function(db, request) {
    return {
      client: db.clients.find(request.params.clientId)
    }
  });

}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
