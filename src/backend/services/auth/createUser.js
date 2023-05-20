import prisma from '@/utils/prisma'
import bcrypt from 'bcrypt';

export const createUser = async (_req, _res) => {
  try {
    const { fullName, email, password } = _req.body;
      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
  
      if (existingUser) {
        return _res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the new user
      await prisma.user.create({
        data: {
          name: fullName,
          email,
          password: hashedPassword,
        },
      });
  
      // Return success response
      return _res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error)
    _res.status(500).send('Could not create a user!')
  }
}
