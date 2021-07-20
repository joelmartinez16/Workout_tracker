const router = require('express').Router()
const db= require('../../models')

// /api/workouts endpoint
router.get('/', (req, res) => { 
    db.Workout.find()
    .sort({day: -1}) 
    .limit(1)
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    }) 
});


router.post('/', (req, res) => { 
    db.Workout.create(req.body)
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    }) 
});

router.put('/:id', (req, res) => { 
    db.Workout.findByIdAndUpdate(req.params.id, {$addToSet: {exercises: req.body}})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    }) 
});

router.get('/range', (req, res) => { 
    db.Workout.find()
    // .sort({day: 1}) 
    .limit(7)
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    }) 
});

module.exports = router