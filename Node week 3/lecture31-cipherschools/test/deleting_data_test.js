const assert = require('assert');
const User = require('./../models/user');
const { beforeEach } = require('node:test');

describe('deleting records', ()=> {
    let newUser;
    beforeEach((done)=>{
        newUser = new userInfo({
            name:'jake',
            age: 30
        })
        newUser.save().then(() =>{
            done();
        })
    })
    it('it deletes onre record from the db', (done) =>{
        User.findByIdAndDelete({_id: newUser._id}).then(()=>{
            User.findById({ _id : newUser._id}).then((data)=>{
                assert(data===null)
                done();
            })
        })
    })
})