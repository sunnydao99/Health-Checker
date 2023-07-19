const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/', (req, res) => {
    console.log(req.body);
});

app.get('/bmi', (req, res) => {
    const weight = req.query['weight'];
    const height = req.query['height'];
    
    const bmi = (weight * 703) / (height * height);

    res.send({bmi});
});

app.get('/bodyfat', (req, res) => {
    const bmi = req.query['bmi'];
    const age = req.query['age'];
    const sex = req.query['sex'];

    var bodyfat = NaN;

    if (sex == 'male') {
        bodyfat = (1.2 * bmi) + (0.23 * age) - 16.2;
    }
    else if (sex == 'female') {
        bodyfat = (1.2 * bmi) + (0.23 * age) - 5.4;
    }

    res.send({bodyfat});
});
app.get('/idealweight', (req, res) => {
    const height = req.query['height'];
    const sex = req.query['sex'];

    var weight = NaN;

    if (sex == 'male') {
        weight = 106;

        if (height > 60) {
            weight += (height - 60) * 6;
        }
        else {
            weight -= (60 - height) * 2;
        }
    }
    else if (sex == 'female') {
        weight = 100;

        if (height > 60) {
            weight += (height - 60) * 5;
        }
        else {
            weight -= (60 - height) * 2;
        }
    }

    res.send({idealWeight:weight});
});


app.get('/caloriesburned', (req, res) => {
    const weight = req.query['weight'];
    const height = req.query['height'];
    const age = req.query['age'];
    const sex = req.query['sex'];
    const activity = req.query['activity'];

    var caloriesBurned = NaN;

    if (sex == 'male') {
        caloriesBurned = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
    }
    else if (sex == 'female') {
        caloriesBurned = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }

    caloriesBurned *= activity;

    res.send({caloriesBurned});
});

app.listen(3000, () => {
    console.log("listening to port 3000");
});