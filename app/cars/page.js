import CarsCard from "@/components/CarsCard"
import  { DB } from "@/lib/PrismaClientProvider"

export default async function page() {
    const cars = await DB.car.findMany({
    })
  return (
    <div className='min-h-screen w-full '>
        <h1 className="text-2xl font-bold py-6 text-center">Available Cars</h1>
        <div className="flex flex-col justify-center items-center gap-10 p-10 md:flex-wrap md:justify-between md:flex-row">
            {cars.map((item)=>(
            <CarsCard key={item.id} id={item.id} name={item.name} image={item.images[0]} price={item.pricePerDay} />
        ))}
        </div>
        
      
    </div>
  )
}
