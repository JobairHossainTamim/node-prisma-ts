import bcrypt from "bcrypt";
<<<<<<< HEAD
import { InternalServer } from "~/middleware/custom.error";


const hashPassword = async (password: string)=> {
    try {
      const salt = await bcrypt.genSalt(12); // Generate salt with 12 rounds
      const hash = await bcrypt.hash(password, salt); // Hash the password
      return hash;
    } catch (error:any) {
        throw new InternalServer(`Failed to hash password: ${error.message}`);
    }
  };
  
  export default hashPassword;
=======


const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(12); // Generate salt with 12 rounds
    const hash = await bcrypt.hash(password, salt); // Hash the password
    return hash;
  } catch (error) {
    throw new Error(`Failed to hash password: ${(error as Error).message}`);
  }
};

export default hashPassword;
>>>>>>> category
