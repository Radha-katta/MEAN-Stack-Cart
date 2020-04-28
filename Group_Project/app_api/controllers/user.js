var mongoose = require('mongoose');
var userSchema = require('../../app_server/models/user');
var User = mongoose.model('user');
getUser= function(req, res){
    User.find({userId :req.params.userId}).exec(function(err, userDetails){
        if(err){
            res.status(404).json(err);
            return;
        }else{
            res.status(200).json(userDetails[0]);
        }
    });
}

addUser =function(req, res){
        User.create({
            userId:req.body.userId,
            password:req.body.password,
        },(err, userData)=>{
            if(err){
                res.status(404).json(err);
            }else{
                res.status(201).json(userData);
            }
        });
    }
module.exports ={getUser, addUser};