const { default: mongoose } = require("mongoose");

// User Schema

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique:true,
    maxlength:20,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: true,
  },
  address:{
    type: String,
  },
  img:{
    type: String,
  },
  isAdmin:{
    type: Boolean,
    default: false,
  },
  isActive:{
    type: Boolean,
    default: false,
  }
},
{timestamps:true}
) 

// Product Schema

const productSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    unique: true,
  },
  price:{
    type: Number,
    required: true,
    min:0,
  },
  stock:{
    type:Number,
    required:true,
    min:0,
  },
  color:{
    type:String,
  },
  img:{
    type: String,
  },
  size:{
    type: String
  },
  category:{
    type: String
  },
  desc:{
    type: String,
    required: true,
    max:150,
  }
},
{timestamps:true}
)

export const Users = mongoose.model.Users || mongoose.model("Users", userSchema);
export const Products = mongoose.model.Products || mongoose.model("Products", productSchema);

