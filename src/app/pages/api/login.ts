import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, password } = req.body;
  const user = await prisma.user.findUnique({ where: { id: name } });

  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json({ message: 'Login successful' });
    // Implement token generation or session handling here
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
}