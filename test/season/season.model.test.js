const { testenv } = global
var app = require(testenv.app)
var Season = require(testenv.serverdir + 'models/season.model')
var chai = require('chai')
var chaiHttp = require('chai-http')
var expect = require('expect')

describe('Season - Model', () => {
  let firstCreatedId

  it('shoud not create a season without require year field', (done) => {
    Season.create({
    }, (err, doc) => {
      expect(err).toExist()
      expect(doc).toNotExist()
      done();
    })
  })

  it('shoud create a season', (done) => {
    Season.create({
      year: 4716,
    }, (err, doc) => {
      if (err) throw err
      expect(doc).toExist()
      expect(err).toNotExist()
      done()
    })
  })

  it('shoud no create a duplicate year field', (done) => {
    Season.create({
      year: 4716,
    }, (err, doc) => {
      expect(err).toExist()
      expect(doc).toNotExist()
      done()
    })
  })

  it('shoud create another unique season', (done) => {
    Season.create({
      year: 4717,
    }, (err, doc) => {
      if (err) throw err
      expect(doc).toExist()
      expect(err).toNotExist()
      done()
    })
  })

  it('shoud set one season as the current', (done) => {
    Season.findOne({ year: 4716 }, (err, doc) => {
      if (err) throw err
      doc.current = true
      doc.save(function(err, updated) {
        expect(err).toNotExist()
        expect(updated).toExist()
        done()
      })
    })
  })
  
})
