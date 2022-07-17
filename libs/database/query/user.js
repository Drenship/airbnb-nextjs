// dependances 
import dbConnect from '../dbConnect'
import User from '../../models/Users'

export const login = async (form) => {
    await dbConnect();
    
    try {
        //const { email, password } = form;
        const result = await User.find({})
        console.log("result", result)
        const users = result.map((doc) => {
            const user = doc.toObject()
            user._id = user._id.toString()
            return user
        })
        return users;
    } catch (err) {
        console.error(err)
        return 'catch error'
    }
}