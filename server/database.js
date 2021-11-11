const mainCards = [{
        title: 'Recent Viewed',
        image: 'iPhone12',
    },
    {
        title: 'Looking for a gift?',
        image: 'galaxys10',
    },
    {
        title: 'Best Behave',
        image: 'cameralinked',
    },
];

const categories = [{
        id: 11,
        name: 'Computers',
        image: 'computer',
        slug: 'computers'
    },
    {
        id: 12,
        name: 'Cameras',
        image: 'camera',
        slug: 'cameras',
    },
    {
        id: 13,
        name: 'Tablets',
        image: 'tablet',
        slug: 'tablets',
    },
    {
        id: 14,
        name: 'Electronics',
        image: 'electronic',
        slug: 'electronics',
    },
];


const products = [{
        id: 1,
        image: 'Intel_I7_7700HQ',
        title: "Original GS9 Gaming Laptop Computer PC Windows 10 Notebook Intel I7 7700HQ Dedicated Card GTX1060 6G 15.6 inch 8GB RAM 512GB SSD",
        rating: 4.5,
        price: 980.95,
        description: [
            "CPU: Intel Conroe I7-7700HQ.",
            "LCD: 15.6inch,1920*1080,IPS Wide screen Angle.",
            "Graphics Card: NVIDIA GeForce GTX 1060 /6G independent graphics card.",
            "Memory: DDR4-8G."
        ],
        stock: 5,
        slug: "Laptop_Intel_I7_7700HQ",
        onSales: true,
        category: 11,
    },
    {
        id: 2,
        image: 'Tablet_10',
        title: "Tablet 10 Inch 1.6 GHz 8-Core 4GB RAM+64GB ROM Android 10 Pro",
        rating: 3.8,
        price: 120.00,
        description: ["This Android 10.0 tablet pc running up to 1.6GHz with stable 64-bit SC9863A octa-core CPU processor along with 4GB RAM and 64GB internal storage, which ensures you can download most android apps what you need fast, like NOW TV, Youtube, Netflix, Google classroom etc.",
            "Provides ultra smooth gaming experience and fast multimedia operation. Notes: The WIFI version does not support the SIM card.",
            "This octa core tablet is equipped with an 8000mAh battery,",
            "allowing you to watch, read and play at home or on the go for up to 8 hours of mixed use",
        ],
        stock: 0,
        slug: "Tablet_10",
        onSales: false,
        category: 13,
    },
    {
        id: 3,
        image: 'Canon_EOS_4000D',
        title: "Canon EOS 4000D DSLR Camera and EF-S 18-55 mm f/3.5-5.6 III Lens - Black",
        rating: 5.0,
        price: 499.50,
        description: [
            "Take beautiful photos and movies with background blur",
            "Easily connect, shoot and share on the move",
            "Express your creativity with easy to follow guidance",
            "Explore the power of DSLR and interchangeable lenses",
            "EOS 4000D body, EF-S 18-55mm f/3.5-5.6 III, Eyecup Ef, Camera Cover R-F-3, Camera strap EW-400D, Battery Pack LP-E10, Battery",
            "Electro Optical System movies, Cinematic 1080 pixels",
        ],
        stock: 20,
        slug: "Canon_EOS_4000D",
        onSales: true,
        category: 12,
    },
    {
        id: 4,
        image: 'Nikon_D60',
        title: "Nikon D60 Digital SLR Camera - Black",
        rating: 4.9,
        price: 259.99,
        description: [
            "- This pre-owned product has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.",
            "- No signs of cosmetic damage (scratches, dents, etc.) will be visible when the product is held 30 centimeters away.",
            "- Products with batteries will exceed 80% capacity relative to new.",
            "- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.",
        ],
        stock: 150,
        slug: "Nikon_D60",
        onSales: true,
        category: 12,
    }
];

module.exports = {
    mainCards,
    products,
    categories
}