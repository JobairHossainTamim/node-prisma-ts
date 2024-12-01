import jwt from "jsonwebtoken";
import { IUser } from "~/modules/user/user.interface";



const generateToken = (user: IUser): string => {
  const token = jwt.sign(
    {
      id: user.id?.toString(),
      firstName: user.firstName,
      lastName:user.lastName,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "365d",
    }
  );

  return token;
};

export default generateToken;


