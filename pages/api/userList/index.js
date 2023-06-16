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
                const userEmail = await userList.findOne({ studenId:req.body.studenId });
                const userName = await userList.findOne({studentName:req.body.studentName})
                if(userEmail||userName){
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
        default: 
            res.status(400).json({success:false});
            break;

            
    }
}

export default userLists;