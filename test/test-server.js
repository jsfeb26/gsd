var chai = require('chai');
var chaiHttp = require('chai-http');

global.environment = 'test';
var server = require('../server.js');
var Item = require('../models/item');
var seed = require('../db/seed');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Shopping List', function() {
    before(function(done) {
        seed.run(function() {
            done();
        });
    });

    after(function(done) {
        Item.remove(function() {
            done();
        });
    });
    
    it('should list items on GET', function(done) {
        chai.request(app)
        .get('/items')
        .end(function(err, res) {
            should.equal(err, null);
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body.should.have.length(3);
            res.body[0].should.be.a('object');
            res.body[0].should.have.property('name');
            res.body[0].name.should.be.a('string');
            res.body[0].name.should.equal('Broad beans');
            res.body[1].name.should.equal('Tomatoes');
            res.body[2].name.should.equal('Peppers');
            done();
        });
    });
    
    it('should add an item on POST', function(done) {
        chai.request(app)
        .post('/items')
        .send({'name': 'Kale'})
        .end(function(err, res) {
        should.equal(err, null);
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.have.property('name');
        res.body.name.should.be.a('string');
        res.body.name.should.equal('Kale');
        Item.find(function(err, storageItems) {
            if (err) {
                
            }
            
            storageItems.should.be.a('array'); 
            storageItems.items.should.be.a('array');
            storageItems.items.should.have.length(4);
            storageItems.items[3].should.be.a('object');
            storageItems.items[3].should.have.property('id');
            storageItems.items[3].should.have.property('name');
            storageItems.items[3].id.should.be.a('number');
            storageItems.items[3].name.should.be.a('string');
            storageItems.items[3].name.should.equal('Kale');
          });
          done(); 
        });
    });
    
    it('should not add an item if item with no name is sent in POST', function(done) {
        chai.request(app)
        .post('/items')
        .end(function(err, res) {
            should.equal(err, null);
            res.should.have.status(400);
            Item.find(function(err, storageItems) {
                if (err) {
                    
                }
                storageItems.should.have.length(3);
            });
            done(); 
        });
    });
    
    it('should edit an item on PUT', function(done) {
        var editItem;
        Item.find(function(err, storageItems) {
            if (err) {
                
            }
            
            //storageItems.should.have.length(4);
            // storageItems.items.should.be.a('array');
            //storageItems.items[1].name.should.equal('Ice Cream');
            //editItem = storageItems.items[1];
        });
        
        // chai.request(app)
        // .put('/items/' + editItem.id)
        // .send({'name': 'Ice Cream'})
        // .end(function(err, res) {
        //     should.equal(err, null);
        //     res.should.have.status(200);
        //     res.should.be.json;
        //     res.body.should.have.property('name');
        //     res.body.should.have.property('id');
        //     res.body.name.should.be.a('string');
        //     res.body.id.should.be.a('number');
        //     res.body.name.should.equal('Ice Cream');
        //     Item.find(function(err, storageItems) {
        //         if (err) {
                    
        //         }
                
        //         storageItems.items.should.be.a('array');
        //         storageItems.items.should.have.length(3);
        //         storageItems.items[1].should.be.a('object');
        //         storageItems.items[1].should.have.property('id');
        //         storageItems.items[1].should.have.property('name');
        //         storageItems.items[1].id.should.be.a('number');
        //         storageItems.items[1].name.should.be.a('string');
        //         storageItems.items[1].name.should.equal('Ice Cream');
        //     });
               done(); 
        // });
    });
    
    // it('should not edit anything if an item not found in list on PUT', function(done) {
    //     chai.request(app)
    //     .put('/items/10')
    //     .send({'name': 'Toys', 'id': 2})
    //     .end(function(err, res) {
    //         should.equal(err, null);
    //         res.should.have.status(400);
    //         storage.items.should.have.length(4);
    //         storage.items[2].name.should.equal('Peppers');
    //         done();
    //     });
    // });
    
    // it('should delete an item on DELETE', function(done) {
    //     chai.request(app)
    //     .delete('/items/2')
    //     .end(function(err, res) {
    //         should.equal(err, null);
    //         res.should.have.status(200);
    //         res.should.be.json;
    //         res.body.should.have.property('name');
    //         res.body.should.have.property('id');
    //         res.body.name.should.be.a('string');
    //         res.body.id.should.be.a('number');
    //         res.body.name.should.equal('Peppers');
    //         storage.items.should.be.a('array');
    //         storage.items.should.have.length(3);
    //         storage.items[2].name.should.equal('Kale');
    //         done();
    //     });
    // });
    
    // it('should not delete an item that doesnt exist on DELETE', function(done) {
    //     chai.request(app)
    //     .delete('/items/9')
    //     .end(function(err, res) {
    //       should.equal(err, null);
    //       res.should.have.status(400);
    //       storage.items.should.have.length(3);
    //       done();
    //     });
    // });
});