import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(

    {
        username:{
            type:String,
            required:true
        },
        firstname:{
            type:String,
            required:false
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        image:{
            type: String,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEX3alq7lwbykUEghH5LCjtqG6mlKy_ttt2EwRrXG9XQ&s",
        },
        role:{
            type:String,
            enum: ['user', 'admin'],
            default: 'user',

        },
        banned:{
            type: String,
            enum: ['active', 'banned'],
            default: 'active',
        },
        banduration:{
            type: String,
            enum: ['', '2 months', '4 months', '6 months', '1 year', 'permanent'],
            default: '',

        },
        reason:{
            type: String,

        },
        verifierd:{
            type: Boolean,
            default: false,

        }

    },
    {
        timestamps: true
    }
);
export default model('User', userSchema);
