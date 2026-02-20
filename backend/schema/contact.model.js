const { default: mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    email:{
       type:String,
      required:true,
      index:true,
      lowercase:true
    },
    subject:{
       type:String,
      required:true,
      minlength:[5, ""]
    },
    message:{
       type:String,
      required:true,
       minlength:[10, ""]
    }
  },
  { timestamps: true },
);


const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
