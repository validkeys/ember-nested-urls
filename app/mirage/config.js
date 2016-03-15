export default function() {

  this.get('/api/v1/advisors', function() {
    return {
      advisors: [
        {
          id: 1, name: "Advisor 1" ,
          links: {
            clients: "/api/v1/advisors/1/clients"
          }
        },
        {
          id: 2, name: "Advisor 2",
          links: {
            clients: "/api/v1/advisors/2/clients"
          }
        }
      ],
    }
  });

  this.get('/api/v1/advisors/1/clients', function() {

    return {
      clients: [
        {
          id: 1,
          name: "Client 1",
          advisorId: 1
        },
        {
          id: 2,
          name: "Client 2",
          advisorid: 1
        }
      ]
    }

  });

  this.get('/api/v1/advisors/2/clients', function() {

    return {
      clients: [
        {
          id: 4,
          name: "Client 4",
          advisorId: 2
        },
        {
          id: 5,
          name: "Client 5",
          advisorid: 2
        }
      ]
    }

  });


  this.get('/api/v1/advisors/1/clients/3', function() {

    return {
      client: {
        id: 3,
        name: "Client 3",
        advisorId: 1
      }
    }

  });


}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
