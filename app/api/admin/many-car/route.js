
import { DB } from "@/lib/PrismaClientProvider"
import { NextResponse } from "next/server"

export async function POST(req) {
    const body = await req.json()
    const car = await DB.car.createMany({
        data: [
  {
    "name": "Compact City Rider",
    "content": "The Toyota Compact City Rider is designed for efficiency and convenience, making it the perfect choice for urban environments. With a lightweight body, excellent fuel economy, and a surprisingly spacious cabin, this car ensures comfort during daily commutes. Its responsive steering and compact size allow for easy parking in tight city spaces, while modern features like Bluetooth connectivity, air conditioning, and USB charging ports make every ride pleasant. Ideal for solo travelers, students, or small families who want affordability without compromising on reliability.",
    "brand": "Toyota",
    "modelYear": 2020,
    "pricePerDay": 2500,
    "images": [
        "https://images.unsplash.com/photo-1644478509392-e73c8fae56ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29tcGFjdCUyMENpdHklMjBSaWRlciUyMGNhciUyMFRveW90YXxlbnwwfHwwfHx8MA%3D%3D", 
        "https://images.unsplash.com/photo-1667320583290-ca5ead0dcdb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tcGFjdCUyMENpdHklMjBSaWRlciUyMGNhciUyMFRveW90YXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1648519813283-f2e85dcb3007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29tcGFjdCUyMENpdHklMjBSaWRlciUyMGNhciUyMFRveW90YXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1584658644984-f314a976e072?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29tcGFjdCUyMENpdHklMjBSaWRlciUyMGNhciUyMFRveW90YXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "properties": ["Air Conditioning", "Bluetooth", "Automatic"],
    "available": true,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Luxury Sedan",
    "content": "Experience elegance and sophistication with the BMW Luxury Sedan. Built for those who value both performance and comfort, this sedan combines a sleek exterior with a plush leather interior. The advanced suspension system ensures smooth rides even on uneven roads, while features like a panoramic sunroof, heated seats, and cutting-edge navigation enhance the driving experience. Whether you're heading to a business meeting or a weekend getaway, this vehicle offers a perfect balance of class and capability.",
    "brand": "BMW",
    "modelYear": 2022,
    "pricePerDay": 5000,
    "images": [
        "https://images.unsplash.com/photo-1731142582229-e0ee70302c02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwU2VkYW4lMjBCTVd8ZW58MHx8MHx8fDA%3D",
         "https://images.unsplash.com/photo-1565376901308-37344a4b06ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THV4dXJ5JTIwU2VkYW4lMjBCTVd8ZW58MHx8MHx8fDA%3D",
         "https://images.unsplash.com/photo-1749566710727-f5a537305331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8THV4dXJ5JTIwU2VkYW4lMjBCTVd8ZW58MHx8MHx8fDA%3D",
         "https://images.unsplash.com/photo-1749566710664-2190fe0e2281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THV4dXJ5JTIwU2VkYW4lMjBCTVd8ZW58MHx8MHx8fDA%3D"
    ],
    "properties": ["GPS", "Leather Seats", "Sunroof"],
    "available": true,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Adventure SUV",
    "content": "The Jeep Adventure SUV is your ultimate partner for off-road exploration and rugged terrains. Engineered with a powerful 4x4 system, high ground clearance, and durable tires, it can conquer mountains, deserts, and muddy trails with ease. Inside, the spacious cabin provides comfort with supportive seating and advanced infotainment options. Roof racks add extra storage for camping or hiking gear, making it the go-to vehicle for adventure seekers who refuse to be limited by the road.",
    "brand": "Jeep",
    "modelYear": 2021,
    "pricePerDay": 3500,
    "images": [
        "https://images.unsplash.com/photo-1507242541385-02de954f97e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWR2ZW50dXJlJTIwU1VWJTIwSmVlcHxlbnwwfHwwfHx8MA%3D%3D", 
        "https://images.unsplash.com/photo-1648512891064-ba71c6a198bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWR2ZW50dXJlJTIwU1VWJTIwSmVlcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1547233598-6891e69da46f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWR2ZW50dXJlJTIwU1VWJTIwSmVlcHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1675319004040-06442501e50e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFkdmVudHVyZSUyMFNVViUyMEplZXB8ZW58MHx8MHx8fDA%3D"
    ],
    "properties": ["4x4 Drive", "Navigation", "Roof Rack"],
    "available": true,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Family Van",
    "content": "Honda’s Family Van is tailored for long journeys and group travel, providing exceptional comfort and space. With seating for up to eight passengers, it ensures that families or large groups can travel together without compromise. Rear air conditioning, ample legroom, and multiple cup holders make it especially suitable for children and older passengers. Entertainment features like a built-in DVD player and rear cameras add convenience and fun, making every road trip an enjoyable experience.",
    "brand": "Honda",
    "modelYear": 2019,
    "pricePerDay": 3000,
    "images": [
        "https://images.unsplash.com/photo-1735643539133-65b2ff5cfbb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmFtaWx5JTIwVmFuJTIwSG9uZGF8ZW58MHx8MHx8fDA%3D", 
        "https://images.unsplash.com/photo-1742997742821-3b9c571b6571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFtaWx5JTIwVmFuJTIwSG9uZGF8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1666256718718-21550f5fb709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmFtaWx5JTIwVmFuJTIwSG9uZGF8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1613538712814-42d97ce67d78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZhbWlseSUyMFZhbiUyMEhvbmRhfGVufDB8fDB8fHww"
    ],
    "properties": ["8 Seats", "Rear Camera", "AC"],
    "available": false,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Electric Hatchback",
    "content": "The Tesla Electric Hatchback represents the future of sustainable driving. Fully electric with zero emissions, it offers an eco-friendly option without sacrificing performance. This hatchback boasts instant acceleration, silent operation, and a modern cabin equipped with a giant touchscreen interface. Autopilot features provide semi-automated driving assistance, while fast-charging support ensures you spend less time waiting at charging stations. A perfect fit for tech enthusiasts and environmentally conscious drivers.",
    "brand": "Tesla",
    "modelYear": 2023,
    "pricePerDay": 7000,
    "images": [
        "https://plus.unsplash.com/premium_photo-1737444758657-966cb3570abc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWxlY3RyaWMlMjBIYXRjaGJhY2slMjBUZXNsYXxlbnwwfHwwfHx8MA%3D%3D", 
        "https://images.unsplash.com/photo-1724827701168-1cd5c04eecb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlY3RyaWMlMjBIYXRjaGJhY2slMjBUZXNsYXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1546118630-826216fddeab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlY3RyaWMlMjBIYXRjaGJhY2slMjBUZXNsYXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1649472307216-1aa3cb0f9cc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RWxlY3RyaWMlMjBIYXRjaGJhY2slMjBUZXNsYXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "properties": ["Electric", "Autopilot", "Touchscreen"],
    "available": true,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Convertible Sports Car",
    "content": "Audi’s Convertible Sports Car is built for those who want a thrilling drive with style. With its powerful engine and quick acceleration, it delivers unmatched performance on highways and open roads. The retractable roof adds a sense of freedom, perfect for sunny drives along coastal routes. Inside, you’ll find premium sound systems, sport-mode controls, and luxurious finishes that complement its bold exterior. A dream choice for drivers who live for excitement and elegance.",
    "brand": "Audi",
    "modelYear": 2021,
    "pricePerDay": 5000,
    "images": [
        "https://images.unsplash.com/photo-1685307298395-59daf86d01d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29udmVydGlibGUlMjBTcG9ydHMlMjBDYXIlMjBBdWRpfGVufDB8fDB8fHww", 
        "https://images.unsplash.com/photo-1731988278437-296b55bfdc21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29udmVydGlibGUlMjBTcG9ydHMlMjBDYXIlMjBBdWRpfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1731988278383-19b7d32fa115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvbnZlcnRpYmxlJTIwU3BvcnRzJTIwQ2FyJTIwQXVkaXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1620048671707-eb5038f524c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENvbnZlcnRpYmxlJTIwU3BvcnRzJTIwQ2FyJTIwQXVkaXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "properties": ["Convertible", "Premium Audio", "Sport Mode"],
    "available": true,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Budget Compact",
    "content": "The Hyundai Budget Compact is a no-nonsense vehicle built for practicality. It’s lightweight, fuel-efficient, and easy to handle, making it great for students or budget-conscious renters. Despite its affordability, it includes modern features like Bluetooth connectivity, efficient air conditioning, and a reliable sound system. Its compact size makes it effortless to park, while the comfortable seating ensures that short trips or daily commutes remain stress-free and pleasant.",
    "brand": "Hyundai",
    "modelYear": 2018,
    "pricePerDay": 2000,
    "images": [
        "https://plus.unsplash.com/premium_photo-1737413583866-c5913ec04ada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVkZ2V0JTIwQ29tcGFjdCUyMGNhciUyMEh5dW5kYWl8ZW58MHx8MHx8fDA%3D", 
        "https://images.unsplash.com/photo-1692305610636-f5157dbe6008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJ1ZGdldCUyMENvbXBhY3QlMjBjYXIlMjBIeXVuZGFpfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1592898919114-2f23d536cb85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJ1ZGdldCUyMENvbXBhY3QlMjBjYXIlMjBIeXVuZGFpfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1616938947157-6c6dc03d6d33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJ1ZGdldCUyMENvbXBhY3QlMjBjYXIlMjBIeXVuZGFpfGVufDB8fDB8fHww"
    ],
    "properties": ["AC", "Manual Transmission", "Bluetooth"],
    "available": true,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Business Sedan",
    "content": "The Mercedes Business Sedan is the definition of executive travel. Designed for comfort and prestige, it features soft leather seating, customizable climate controls, and high-tech navigation. With a sleek design and smooth handling, it makes a strong statement for professionals on the go. Passengers enjoy spacious legroom and optional Wi-Fi connectivity, making this vehicle ideal for corporate trips, VIP clients, or anyone seeking sophistication on the road.",
    "brand": "Mercedes",
    "modelYear": 2020,
    "pricePerDay": 6000,
    "images": [
        "https://images.unsplash.com/photo-1742226110863-31f8ff581674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJ1c2luZXNzJTIwU2VkYW4lMjBjYXIlMjBNZXJjZWRlc3xlbnwwfHwwfHx8MA%3D%3D", 
        "https://images.unsplash.com/photo-1520432016467-a14e2042271e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJ1c2luZXNzJTIwU2VkYW4lMjBjYXIlMjBNZXJjZWRlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1657019452453-7936df189b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEJ1c2luZXNzJTIwU2VkYW4lMjBjYXIlMjBNZXJjZWRlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1689976186578-d76fc7ca64ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJ1c2luZXNzJTIwU2VkYW4lMjBjYXIlMjBNZXJjZWRlc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    "properties": ["Leather Seats", "Navigation", "Automatic"],
    "available": false,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Hybrid Eco Car",
    "content": "Toyota’s Hybrid Eco Car offers the best of both worlds — fuel savings from its hybrid engine and modern conveniences for everyday driving. It features regenerative braking, a quiet engine, and impressive mileage. Inside, it includes keyless entry, cruise control, and user-friendly infotainment. Its environmentally conscious design doesn’t compromise on comfort, making it a smart choice for city dwellers who want lower running costs and reduced carbon footprints.",
    "brand": "Toyota",
    "modelYear": 2022,
    "pricePerDay": 4000,
    "images": [
        "https://plus.unsplash.com/premium_photo-1737677106508-91f7f4e1468e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SHlicmlkJTIwRWNvJTIwQ2FyJTIwVG95b3RhfGVufDB8fDB8fHww", 
        "https://images.unsplash.com/photo-1652509328253-610cb93f163d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SHlicmlkJTIwRWNvJTIwQ2FyJTIwVG95b3RhfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1688696772514-f505f118ca51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SHlicmlkJTIwRWNvJTIwQ2FyJTIwVG95b3RhfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1736873369070-e487d9328341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEh5YnJpZCUyMEVjbyUyMENhciUyMFRveW90YXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "properties": ["Hybrid", "Keyless Entry", "Cruise Control"],
    "available": true,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  },
  {
    "name": "Compact SUV",
    "content": "The Range Rover Luxury SUV is a powerhouse of comfort and performance. It combines off-road capability with luxurious interiors, making it suitable for both rugged adventures and formal occasions. Features like adaptive cruise control, panoramic sunroof, and premium leather seating elevate the driving experience. With plenty of cargo space and advanced safety systems, this SUV appeals to families, executives, and anyone seeking a refined yet versatile ride.",
    "brand": "Kia",
    "modelYear": 2019,
    "pricePerDay": 4500,
    "images": [
        "https://images.unsplash.com/photo-1688893288248-3338b8491a46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S0lBfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1683183674010-fdb3cac7bdd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEtJQXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625037669075-e5472e080265?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEtJQXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1720594646721-09d43635faf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEtJQXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "properties": ["AC", "Automatic", "Rear Camera"],
    "available": true,
    "ownerId": "cmfnlwlfl0000jq10cxp98k33"
  }
]
    })
    return NextResponse.json({
        message: "Car created successfully",
        car
    })
}