import connect from '../../../lib/mongodb'
import userList from '../../../model/userList'
import contentOp from '../content/[id]';

connect();

const userLists = async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try{
                const list = await userList.find({});
                res.status(200).json({success: true, data: list})

            } catch(error){
                res.status(400).json({success: false})
            }
            break;

        case 'POST':
            try {
                const userEmail = await userList.find({ studenId:req.body.studentId });
                const userName = await userList.find({studentName:req.body.studentName})
                console.log(userName+"server check")
                if(userEmail!==null||userName!==null){
                    res.status(202).json({success:false,exists:true })
                }
                else{
                    const list = await userList.create(req.body);
                    res.status(201).json({ success: true, data: list})
                }
            }    
            catch (error){
            
                res.status(400).json({success:false});
            }
            break;
        case 'PUT':
            try{
                const list= await userList.replaceOne({studenId:req.body.studentId},req.body)
                res.status(200).json({success:true,data:list})
            }
            catch (error){
                res.status(400).json({success:false})
            }
        default: 
            res.status(400).json({success:false});
            break;

            
    }
}

export default userLists;