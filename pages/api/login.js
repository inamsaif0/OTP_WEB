// import connect from "../../lib/mongoDB/mongodb";
// import User from '../../model/schema';

// connect()
// console.log('connected to DB')

// export default async function handler(req,res){
//     console.log("first step")
//     const {email,password}=req.body
//     console.log('second step')
//     const user = await User.findOne({email,password})
//     console.log("third step")
//     if(!user){
//         return res.json({status:'Not able to find the user'})
//     }
//     else{
//         res.redirect('/home')
//     }
// }