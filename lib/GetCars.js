import db from "./PrismaClientProvider"

export default async function GetCars() {
  try {
    return await db.car.findMany()
  } catch (error) {
    console.error(error)
    return []
  }

}
