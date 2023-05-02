import fastify from 'fastify';

const app = fastify();

app.get('/', (req, res) => {
  res.code(200).send({ ping: true });
});

app.get('/wh', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);

  res.code(200).send({ message: 'ok' });
});

app.listen({ host: 'localhost', port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
  console.log(address);
});
