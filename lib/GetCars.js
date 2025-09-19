import  { DB } from "./PrismaClientProvider";

export default async function GetCars() {
  try {
    const data = await DB.car.findMany({
      take: 8,
    })
    return data
  } catch (error) {
    return []
  }

}
