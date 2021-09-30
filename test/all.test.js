let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

let firstAssessment

describe('Create Assessment and get Questions', function () {
  it('should create a new Assessment', async () => {
    const res = await chai.request('http://localhost:3000')
    .post('/assessment/create')
    .send({ 
      name: "Jeferson",
      surname: "Costa",
      email: "jeferson@gmail.com"
    })

    res.should.have.status(201);
    res.body.should.have.property('Gkey')
    res.body.should.have.property('TakerName', 'Jeferson')

    firstAssessment = res.body.Gkey
  })
  
  it('should get the first Question for the assessment', async () => {
    const res = await chai.request('http://localhost:3000')
    .get(`/assessment/${firstAssessment}/question/1`)

    res.should.have.status(201);
    res.body.should.have.property('_id')
    res.body.should.have.property('QuestionType', 1)
  })
})
