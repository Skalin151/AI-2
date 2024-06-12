var Sequelize = require('sequelize');
var SequelizeDB = require('./database');


var Genre = SequelizeDB.define('genre', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    description: Sequelize.STRING,
<<<<<<< HEAD
    unique: true
=======
    
>>>>>>> 08a89208e55edebcaf36460d1352a4057550b9e6
},
{
    timestamps: false,
});

<<<<<<< HEAD

=======
/*
>>>>>>> 08a89208e55edebcaf36460d1352a4057550b9e6
const genre1 = new Genre({
    description: 'Fantasia'
  });
  
  const genre2 = new Genre({
    description: 'Romance'
  });

  genre1.save((err, genre) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Género criado com sucesso: ${genre.description}`);
    }
  });
  
  genre2.save((err, genre) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Género criado com sucesso: ${genre.description}`);
    }
  });
<<<<<<< HEAD

=======
*/
>>>>>>> 08a89208e55edebcaf36460d1352a4057550b9e6

Genre.sync();

module.exports = Genre