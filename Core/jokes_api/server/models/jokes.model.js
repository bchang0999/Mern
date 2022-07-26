const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Whats your joke?"],
            minlength: [10, "Your joke aint cutting it, make it longer"]
        },
        punchline: {
            type: String,
            required: [true, "Well, finish it!"],
            minlength: [10, "Punchline was weak"]
        }
    }, { timestamps: true }
);

const Joke = mongoose.model('Joke',JokeSchema);

module.exports = Joke;