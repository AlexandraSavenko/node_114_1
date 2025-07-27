import createHttpError from "http-errors";
import { createUserInDb, findUserByEmail } from "../services/user.js";


export const registerController = async (req, res) => {
  console.log("controller works");
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw createHttpError(409, "Email in use");
  }
  const newUser = await createUserInDb(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully registered a user!",
    data: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};