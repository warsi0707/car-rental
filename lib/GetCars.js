
export default async function GetCars() {
  try {
    const res = await fetch("http://localhost:3000/api/car")
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return []
  }

}
