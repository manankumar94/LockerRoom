import formModel from "../model/contactForm.js";

class FormController{
    static writeMessage= async(req, res) =>{
        const {name, contactNumber, mail, message}= req.body;
        try {
            if(!name || !contactNumber || !mail || !message){
                return res  
                        .status(400)
                        .json({Message: "All Fields Are required."})
            }
            else{
                const newConfession= new formModel({
                    name: name,
                    contactNumber: contactNumber,
                    mail: mail,
                    message: message
                })

                const saveConfession= await newConfession.save();

                if(saveConfession){
                    return res  
                        .status(200)
                        .json({
                            Message: "Mesaage Send Sucessfully",
                            newConfession
                        })
                }
                else{
                    return res  
                        .status(400)
                        .json({
                            Message: "Mesaage Not Send"
                        })
                }
                
                }
            
        } catch (error) {
            return res  
                    .status(500)
                    .json({Message : error.message})
        }
    }
}

export default FormController;