import connect from '../../../lib/mongodb'
import userList from '../../../model/userList'

connect();

export default async (req, res) => {
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
                const list = await userList.create(req.body);
                res.status(201).json({ success: true, data: list})
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