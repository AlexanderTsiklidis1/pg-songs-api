// this file is in charge of QUERYING
// the DB and returning the data to the controller

const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs
    } catch(err) {
        return err
    }
}
const getOneSong = async (id) => {
    try{
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong
    } catch (error){
        return error
    }
};
const createSong = async (song) =>{
    try {
        const createdSong = await db.one("INSERT INTO songs (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *", [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite])
        return createdSong
    } catch (error) {
        return error
    }
}

const deleteSong = async (id) => {
    try {
        const deletedBookmark = await db.one(
            "DELETE from songs WHERE id = $1 RETURNING *",
            id
        )
        return deletedSong
    } catch(error) {
        return error
    }
};

const updateSong = async (id, song) => {
    try {
        const { name, url, category, is_favorite } = song;
        const updatedBookmark = await db.one(
            "UPDATE bookmarks SET name=$1, url=$2,category=$3, is_favorite=$4 WHERE id=$5 RETURNING *",
            [name, url, category, is_favorite, id]
        );
        return updatedBookmark
    } catch(err) {
        return err
    }
};

module.exports = {
    getAllSongs,
    getOneSong,
    createSong,
    deleteSong,
    updateSong
}