import mongoose from "mongoose";

if (process.argv.length < 3) {
  console.log("Please provide a password as an argument");
  process.exit();
}

const password = process.argv[2];

const url = `mongodb+srv://ebrima:${password}@cluster0.cdfzb.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url).then((result) => {
  console.log(`connected successfully!`);
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = new mongoose.model("Person", personSchema);

const name = process.argv[3];
const number = process.argv[4];

if (process.argv.length === 3) {
  Person.find({}).then((persons) => {
    console.log("phonebook:");
    persons.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
} else {
  const person = new Person({
    name,
    number,
  });

  person.save().then((result) => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}
