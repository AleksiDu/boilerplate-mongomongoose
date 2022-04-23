require('dotenv').config();
// var express = require('express');
// var app = express();
// app.listen(3000);

//MongoDB && Mongoose
//task1 Install and Set Up Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
/*===============*/

//task2 Create a Model
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, requred: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);
/*===========*/

//task3 Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  let aleksiDuluzauri = new Person({ name: 'Aleksi Duluzauri', age: 30, favoriteFoods: ['Khinkali', 'Steak', 'Cake']});
  aleksiDuluzauri.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};
/*==========*/

//task4 Create Many Records with model.create()
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};
/*==========*/

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, nameFound)=> {
    if (err) return console.error(err);
    done(null, nameFound);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
