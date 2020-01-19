const express = require('express');
const app = express();

app.use(express.json())

const courses = [
  { id: 1, name: 'course 1' },
  { id: 2, name: 'course 2' },
  { id: 3, name: 'course 3' },
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(course => course.id === +req.params.id);
  if (!course) {
    res.status(404).send('Course not found');
  }
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  const courses = {
    id: courses.length + 1,
    name: req.body.name
  }
courses.push(course);
res.send(course);
});

// app.get('/api/courses/:year/:month', (req, res) => {
//   res.send(req.query);
// });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));