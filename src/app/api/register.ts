import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const user = await prisma.user.create({
      data: { name, password: hashedPassword },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'User already exists or another error occurred.' });
  }
}