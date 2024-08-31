// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // Replace with your MongoDB connection string
// const MONGODB_URI = 'mongodb://127.0.0.1:27017/your-database';

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(()=>{
//     console.log('success')
// });

// const dataSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Data = mongoose.model('Data', dataSchema);

// app.use(cors());
// app.use(express.json());

// app.post('/api/saveData', async (req, res) => {
//   try {
//     console.log(req.body)
//     const { name, age } = req.body;
//     const data = new Data({ name, age });
//     await data.save();
//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error saving data:', error);
//     res.status(500).json({ success: false, error: 'Error saving data' });
//   }
// });

// app.listen(5001, () => {
//   console.log(`Server is running on port 5001`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// const Person = mongoose.model('Person', personSchema);

// app.post('/api/saveData', (req, res) => {
//   const { name, age } = req.body;
//   const person = new Person({ name, age });
//   person.save((err) => {
//     if (err) {
//       res.status(500).send('Error saving data');
//     } else {
//       res.status(200).send('Data saved successfully');
//     }
//   });
// });

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const mg = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
mg.connect('mongodb://127.0.0.1:27017/jkl').then(() => {console.log("ConnectionSuccess")})
const UserSchema = new mg.Schema({ name: String,age:String });
  const User = new mg.model('User', UserSchema);


  app.post('/signup', async (req, res) => {
    try {
      const { name,age } = req.body;
      const a={name,age}
      const newUser = new User({ name:a.name,age:a.age });
      await newUser.save();
      res.send();
    } catch (error) {
      res.send(error);
    }
  });
  app.listen(4000);


