const express = require("express");
const { 
    getAllSongs, 
    getOneSong, 
    createSong, 
    deleteSong, 
    updateSong
} = require("../queries/songs.js");
// 
const { checkName, checkBoolean } = require("../validations/checkSongs.js")
const songs = express.Router();


songs.get("/", async (req, res) => {
    // heres where we need to get THE DATAS
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200)
            .json({ success: true, data: { payload: allSongs } });
    } else {
        res.status(500)
        .json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneSong = await getOneSong(id)
    if (oneSong){
        res.json(oneSong)
    } else {
        res.status(404).json({error: "not found!"})
    }
})

songs.post("/", checkName, checkBoolean, async (req, res)=> {
    try {
        // old way
        // createBookmark(req.body)
        //     .then(data=>res.json(data))
        // new way
        const createdSong = await createSong(req.body)
        res.json(createdSong)
    } catch (error) {
        res.status(400).json({error: "OH no! You got an error"})
    }
})

songs.delete("/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const deletedSong = await deleteSong(id);
        if(deletedSong) {
            res.status(200).json({success:true, payload: {data: deletedSong}})
        } else {
            res.status(404).json("song not found - uh oh")
        }
    } catch(err) {
        res.send(err)
    }
});

songs.put("/:id", async(req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    if(updatedSong.id) {
        res.status(200).json(updatedSong);
    } else (
        res.status(404).json("no song found with that id")
    )
})

module.exports = songs;