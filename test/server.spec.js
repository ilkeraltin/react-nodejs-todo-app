let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Server Test', () => {
  describe('/GET all tasks', () => {
      it('it should GET all the tasks', (done) => {
        chai.request(server)
            .get('/tasks')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
      });
  });

  describe('/GET single task', () => {
      it('it should GET task given by id', (done) => {
        chai.request(server)
            .get('/task/0')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
      });
  });

  describe('/POST single task', () => {
      it('it should Post a new task', (done) => {
        chai.request(server)
            .post('/task/create/foo/bar')
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
              done();
            });
      });
  });

});
