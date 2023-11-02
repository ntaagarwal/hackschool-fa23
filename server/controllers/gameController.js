const getGame = async (req, res) => {
    const game = {
        sentence: "Hello there!",
        correctCharacters: 14,
        incorrectCharacters: 15,
        wpm: 100,
        time: 13.33
    };
    res.status(200).json(game);
}

const postGame = async (req, res) => {
    const gamedata = req.body;
    const invalid = "invalid input";
    const {sentence, correctCharacters, incorrectCharacters, wpm, time} = gamedata; 
    if(!sentence|| correctCharacters == null || incorrectCharacters == null || !wpm || !time){
        res.status(400).json({error: invalid});
        return;
    }
    const sl = gamedata.sentence.length;
    if(sl != (correctCharacters + incorrectCharacters)){
        res.status(400).json({error: "hi"});
        return; 
    }
    // database call

    res.status(200).json({message: "success"});
}

module.exports = {getGame, postGame};