import jwt from "jsonwebtoken";
import { IUser } from "~/modules/user/user.interface";



const generateToken = (user: IUser): string => {
  const token = jwt.sign(
    {
<<<<<<< HEAD
      id: user.id,
      firstName: user.firstName,
      lastName:user.lastName,
      email: user.email,
      role: user.role,
=======
      id: user.id?.toString(),
      firstName: user.firstName,
      lastName:user.lastName,
      email: user.email,
      role: user.role,      
>>>>>>> category
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "365d",
    }
  );

  return token;
};
<<<<<<< HEAD

export default generateToken;
=======
export default generateToken;
>>>>>>> category
