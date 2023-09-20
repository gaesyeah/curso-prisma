import { Prisma } from "@prisma/client";
import express, { Request, Response } from "express";
import prisma from "./database";

const app = express();

type PetResult = {
  owner: string;
  pet: string;
  animal: string;
}

app.get("/pets/owner/:ownerName", async (req: Request, res: Response) => {
  const { ownerName } = req.params;
  try {
    const result = await prisma.$queryRaw<PetResult>(
      Prisma.sql`
        SELECT people.name as owner, pet.name as pet, pet.type as animal 
        FROM people
          JOIN pet ON "personId" = people.id
        WHERE people.name = ${ownerName}
      `
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running or port ${port}`);
})