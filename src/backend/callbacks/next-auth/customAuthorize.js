import prisma from "@/utils/prisma";
import bcrypt from 'bcrypt';

const customAuthorize = async (credentials) => {
  const { email, password } = credentials;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    const session = {
      ...credentials,
      name: user.name,
      user: {
        userId: user.id,
      },
    };

    return session;
  } catch (error) {
    console.log(error)
    throw new Error(error.message);
  }
};

export default customAuthorize;