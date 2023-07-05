const assert = require('assert');
const Album = require('../models/album');
const { before, beforeEach } = require('node:test');
const mongoose = require('mongoose');

describe('relational records', () => {
    beforeEach((done) => {
        mongoose.connection.collections.albums.drops(() => {
            done();
        })
    })
    it('create an album with sub-documents', (done) => {
        let album_one = new Album({
            // _id: randomUUID.random(),
            name: 'Porcupine Tree',
            tracks: 2,
            songs: [
                { title: 'Lazarus', artist: 'Steven Wilson' },
                { title: 'Trains', artist: 'Steven wilson' }
            ]
        })

        album_one.save().then(() => {
            Album.findOne({ name: 'Porcupine Tree' }).then((data) => {
                assert(data.songs.length === 2)
                done();
            })
        })
    })


    it('add a song to the Album', (done) => {
        let album_one = new Album({
            // _id: randomUUID.random(),
            name: 'Porcupine Tree',
            tracks: 2,
            songs: [
                { title: 'Lazarus', artist: 'Steven Wilson' },
                { title: 'Trains', artist: 'Steven wilson' }
            ]
        })

        album_one.save().then(()=>{
            Album.findOne({name: 'Porcupine Tree'}).then((data) =>{
                data.songs.push({title: 'Trains', artist: 'Steven Wilson'})
                data.save().then(() =>{
                    Album.findOne({name: 'Porcupine Tree'}).then((results) =>{
                        assert(results.songs.length === results.track)
                        done()
                    })
                })
            })
        })
    })
})

