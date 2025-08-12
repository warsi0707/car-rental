import prisma from "./PrismaClientProvider";

export default async function GetCars() {
  try {
    const data = await prisma.car.findMany({})
    return data
  } catch (error) {
    return []
  }

}
