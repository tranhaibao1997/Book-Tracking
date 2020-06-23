const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User must have a name"],
        trim: true,
        minLength: 3
    },
    email: {
        type: String,
        required: [true, "User must have an email"],
        trim: true,
        unique: true,
        lowercase: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Invalid email address");
            }
        }
    },
    password: {
        type: String,
        required: [true, "User must have a password"]
  },
  tokens: [{ 
    type: String
  }] // array of tokens
}, {
    timestamps: true
});s