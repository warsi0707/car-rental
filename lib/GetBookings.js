
export default async function GetBookings() {
  try {
    const res = await fetch("http://localhost:3000/api/auth/booking")
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error) 
    return []
  }
}
