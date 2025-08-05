import prisma from "./PrismaClientProvider"

export default async function GetCars() {
  try {
    return await prisma.car.findMany({})
  } catch (error) {
    console.error(error)
    return []
  }

}
