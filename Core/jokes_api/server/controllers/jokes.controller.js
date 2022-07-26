const Joke = require('../models/jokes.model');

//Get all joke//
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err => res.json({message: 'something went wrong with finad all jokes feature'}));
}

//Find single Joke
module.exports.findSingleJoke = (req, res) => {
    Joke.findSingle({ _id: req.params._id })
        .then(singleJoke => res.json({joke: singleJoke}))
        .catch(err => res.json({ message: 'Stage fright! Couldnt find a single joke', error: err }));
}

//Create a joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({Joke: newJoke}))
        .catch(err => res.json({ message: 'Aghh Cant think right now', error: err }));
}

//Update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            { new: true, runValidators: true }
        )
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({ message: 'I dont think i said that right lets try again', error: err }));
}

//Delte joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => res.json({result: result}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
