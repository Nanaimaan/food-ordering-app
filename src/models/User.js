const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 5) {
          new Error("password must be at least 5 characters");
          return false;
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", (next) => {
  console.log(rest);
  next();
});
const User = models?.User || model("User", UserSchema);
export default User;
