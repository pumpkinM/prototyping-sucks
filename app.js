var mongoose = require('mongoose');

    mongoose.connect('rick:BarBar@ds048537.mongolab.com:48537/prototyping-sucks');
 
    var db = mongoose.connection;
 
    db.on('error', function (err) {
      grunt.log.err('connection error', err);
    });

    db.once('open', function () {
     
      var kittySchema = mongoose.Schema({
        name: String
      })

      var Kitten = mongoose.model('Kitten', kittySchema)

      Kitten.find(function(err, kittens){
            if (err)return console.error(err);

            console.log(kittens);
      });
    });