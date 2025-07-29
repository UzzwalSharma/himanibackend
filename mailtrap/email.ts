import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import {client,sender} from "./mailtrap";

export const sendVerificationEmail=async (email:string,verificationToken:string)=> {
    const recipients = [
        {email: email,}
      ];
      
    try{
        const res=await client.send({
            from:sender,
            to:recipients,
            subject:'verify your email',
            html:htmlContent.replace("{verificationToken}",verificationToken),
            category:'email verification'
        })
    }  
    catch(error){
        console.log(error);
        throw new Error("failed to send email verification")
        
    }
}

export const sendWelcomeEmail=async(email:string,name:string)=>{
    const recipients = [
        {email: email,}
      ];
      const htmlContent=generateWelcomeEmailHtml(name);
    try{
        const res=await client.send({
            from:sender,
            to:recipients,
            subject:'welcome to Desi-Zykaa',
            html:htmlContent,
            template_variables:{
                company_info_name:"Desi-Zykaa",
                name:name
            }
        })
    }  
    catch(error){
        console.log(error);
        throw new Error("failed to send welcome email")
        
    }
}

export const sendPasswordResetEmail=async(email:string,resetUrl:string)=>{
    const recipients = [
        {email: email,}
      ];
      const htmlContent=generatePasswordResetEmailHtml(resetUrl);
    try{
        const res=await client.send({
            from:sender,
            to:recipients,
            subject:'Reset your password',
            html:htmlContent,
            category:"Reset password"
        })
    }  
    catch(error){
        console.log(error);
        throw new Error("failed to reset password")
        
    }
}

export const sendResetSuccessEmail=async (email:string)=>{
    const recipients = [
        {email: email,}
      ];
      const htmlContent=generateResetSuccessEmailHtml();
    try{
        const res=await client.send({
            from:sender,
            to:recipients,
            subject:'Password reset successfully',
            html:htmlContent,
           category:"Password reset"
        })
    }  
    catch(error){
        console.log(error);
        throw new Error("failed to send password reset success email")
        
    }
}