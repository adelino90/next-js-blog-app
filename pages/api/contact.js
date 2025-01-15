import { MongoClient} from 'mongodb'
const uri = `mongodb+srv://${process.env.mongoDBUsername}:${process.env.mongoDBPassword}@${process.env.mongoDBClusterName}.ozcth.mongodb.net/${process.env.mongoDBDatabase}?retryWrites=true&w=majority`;

async function handler(req,res){
    if(req.method === 'POST'){
        const { email,name,message } = req.body;

        if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '' ){
            res.status(422).json({ message:'Invalid input!'})
            return;
        }

        const newMessage = {
            email,
            name,
            message
        };
        let client;
        try{
            client = await MongoClient.connect(uri)
        }
        catch(error){
            res.status(500).json({message:'Could not connect to database'})
            return;
        }
        const db = client.db();
        try{
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage._id = result.insertedId;
        }
        catch(error){
            client.close();
            res.status(500).json({message:'Error inserting to database'})
            return;  
        }
        client.close();
        res.status(200).json({message:'Successfully stored message', data:newMessage})
    }
}
export default handler;