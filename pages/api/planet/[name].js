import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try{
        const {name} = req.query
        const planet = name.charAt(0).toUpperCase() + name.slice(1);
          const result = await prisma.planets.findFirst({
            where: {
              planetName: planet,
            },
            include: {
              facts: true,
              moons: true
            },
          });
          res.status(200).json({ result })
      } catch (error){
        res.status(400).json({ error })
      }
}