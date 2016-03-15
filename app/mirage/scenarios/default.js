export default function(server) {
  var advisors = server.createList('advisor', 10);

  advisors.forEach((advisor) => {
    server.createList('client', 10, { advisorId: advisor.id });
  });

}
