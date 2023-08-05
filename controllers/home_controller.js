const nodemailer = require("../config/nodemailer");

module.exports.home=function(req,res){
    console.log('done');
    return res.render('home');
}
module.exports.feedback=function(req,res){
    try{
        let user={
            email:req.body.email,
            name:req.body.name,
            message:req.body.message,
        }

        let htmlString1=nodemailer.renderTemplate({user},'/feedback.ejs')
        let htmlString2=nodemailer.renderTemplate({user},'/community.ejs')
        nodemailer.transporter.sendMail({
            from:'vickykhandelwal2114@gmail.com',
            to:user.email,
            subject:"Thanks For Feedback",
            html:htmlString1
           })
        nodemailer.transporter.sendMail({
            from:'vickykhandelwal2114@gmail.com',
            to:'vickykhandelwal2114@gmail.com',
            subject:"Feedback From User",
            html:htmlString2
           })

           req.flash('success','Your message send succesfully');
           return res.redirect('/')


    }catch(err){
        req.flash('error','Server Error')
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}