const products = [
  {
    id: "product1",
    url: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/z/a/b/-original-imaghkvv2u8jxajh.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/z/a/b/-original-imaghkvv2u8jxajh.jpeg?q=70",
    title: {
      shortTitle: "Communication & Phone",
      longTitle: "REDMI Note 12 Pro+ 5G (Obsidian Black, 256 GB)  (8 GB RAM)",
    },
    price: {
      mrp: 33999,
      cost: 29999,
      discount: "11%",
    },
    description: "The 200 MP camera of the Redmi Note 12 Pro+ 5G allows you to take flawless photos with extraordinary clarity. Additionally, the cameras large f/1.65 aperture allows it to collect more light, making low-light shooting possible. Furthermore, it offers a superb HDR option that gives your photographs a distinct style",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product2",
    url: "https://rukminim1.flixcart.com/image/612/612/xif0q/bar/g/1/x/10in1portable-pushup-board-with-strong-griphandle-for-chestpress-original-imagjh5ycryvthnm.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/bar/g/1/x/10in1portable-pushup-board-with-strong-griphandle-for-chestpress-original-imagjh5ycryvthnm.jpeg?q=70",
    title: {
      shortTitle: "Gym & Exercise",
      longTitle: "Manogyam 10in1Portable PushUp Board",
    },
    price: {
      mrp: 1299,
      cost: 295,
      discount: "77%",
    },
    description: "Non-slip Hand Grips, Portable, Simple Assembly and Storage. Premium ABS tough plastic, which is very tough and not easily broken or damaged. Hand Grips are anti-slip.Portable, simple assembly and storage. It is convenient for training use.Push Up Rack Board Men Women Comprehensive Fitness Exercise Push-up Stands Body Building Training System Home Equipment. Consuming calories and enhancing strength with this innovative push-up system. Advanced and non-slip, oversized handle with ergonomic design, durable to use, easy to assemble, easy to carry. It is easy to use, just insert the handle to the desired color-coded position.",
    tagline: "Deal of the day",
  },
  {
    id: "product3",
    url: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/p/x/-original-imagk4nz54s7a7rf.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/g/p/x/-original-imagk4nz54s7a7rf.jpeg?q=70",
    title: {
      shortTitle: "Mobiles and Accessories",
      longTitle: "REDMI 10 (Caribbean Green, 64 GB)  (4 GB RAM)",
    },
    price: {
      mrp: 14999,
      cost: 9299,
      discount: "38%",
    },
    description: "Let go of the inhibitions and enjoy speed operation and flawless user experience with Redmi 10. This phone is powered by Snapdragon 680 processor with a savvy 6 nm architecture that makes juggling fun. This device is incorporated with 4 GB of RAM and 64 GB of internal storage that provides you with seamless efficiency. With the UFS 2.2 storage, you can experience an unmatched speed in the operation. This smartphone boasts a large 6000 mAh battery with an 18 W fast charging capability giving your phone a necessary boost to achieve optimal efficiency. With a mesmerising 17.04 cm (6.71) display and a 20.6:9 aspect ratio, Redmi 10 offers an immersive user experience. The Redmi 10 is equipped with a 50 MP camera and a 2 MP depth sensor allowing you to capture breathtaking pictures with enthralling imagery.",
    tagline: "Best Deals with discount",
  },
  {
    id: "product4",
    url: "https://rukminim1.flixcart.com/image/312/312/l3rmzrk0/computer/s/z/r/-original-imagetgzg4pgszmt.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/s/z/r/-original-imagetgzg4pgszmt.jpeg?q=70",
    title: {
      shortTitle: "Laptop & Gaming",
      longTitle: "ASUS TUF Gaming F15 Core i5 10th Gen",
    },
    price: {
      mrp: 70999,
      cost: 49000,
      discount: "29%",
    },
    description: "Raise the thrill in every game and add a little style to your gaming setup with the Asus TUF Gaming F15 laptop. It is equipped with a 10th Gen Intel Core H-Series processor and GeForce GTX 1650 GPU so that you can experience fast-paced and smooth gaming. And, with the desktop-style Keyboard setup and integrated backlights, you can indulge in gaming for hours without getting bored.",
    tagline: "Accessories Must Buy",
  },
  {
    id: "product5",
    url: "https://rukminim1.flixcart.com/image/612/612/ktd9mkw0/sweatshirt/k/o/a/m-67029202-puma-original-imag6q3za9p4zah5.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/832/832/ktd9mkw0/sweatshirt/e/c/f/m-67029202-puma-original-imag6q3zbsm5zzt5.jpeg?q=70",
    title: {
      shortTitle: "Clothes & Fashion",
      longTitle: "Men Full Sleeve Printed Hooded Sweatshirt",
    },
    price: {
      mrp: 3999,
      cost: 1567,
      discount: "55%",
    },
    description: "Designed for comfortable wear for sports and street-style, PUMA apparels are always fun to wear. Upgrade in style with wide range of apparels form the worlds leading and much-loved sports brand, PUMA.",
    tagline: "Fashion for sale",
  },
  {
    id: "product6",
    url: "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/g/c/o/9-rockey-9-magnolia-white-original-imaggutpbvcczyhf.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/8/o/v/9-rockey-9-magnolia-white-original-imaggutpfqy86rj9.jpeg?q=70",
    title: {
      shortTitle: "Shoes and slippers",
      longTitle: "Modern Trendy Sneakers boot Sneakers Sneakers For Men",
    },
    price: {
      mrp: 8999,
      cost: 2395,
      discount: "78%",
    },
    description: "Care Instructions: Allow your pair of 2 shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner",
    tagline: "Amazing collections by Etown",
  },
  {
    id: "product7",
    url: "https://rukminim1.flixcart.com/image/612/612/kqwobrk0/headphone/3/n/b/bassheads-100-boat-original-imag4tgdrpxfh3pk.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/416/416/kikluvk0-0/headphone/o/r/6/bassheads-100-boat-original-imafybzdugegywu4.jpeg?q=70",
    title: {
      shortTitle: "Wearables and Headset",
      longTitle: "boAt Bassheads 100 Wired Headset",
    },
    price: {
      mrp: 1299,
      cost: 1195,
      discount: "11%",
    },
    description: "If you are looking for a stylish pair of wired earphones, you should consider the boAt BassHeads 100 earphones. The earbuds of this pair of earphones come with a unique design that is inspired by the hawk and looks extremely trendy. The boAt BassHeads 100 earphones are also lightweight and can be worn easily for long durations.",
    tagline: "Headsets from great brands",
  },
  {
    id: "product8",
    url: "https://rukminim1.flixcart.com/image/612/612/l2arp8w0/watch/w/u/r/2-vkrdgc810-hala-boys-original-imagdz2dhmtkfw8z.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/832/832/l2f20sw0/watch/u/4/a/2-vkrdgc810-hala-boys-original-imagdqv26tv44v79.jpeg?q=70",
    title: {
      shortTitle: "Watches & bands",
      longTitle: "Red Strap 7 Lights Digital Watch - For Boys",
    },
    price: {
      mrp: 799,
      cost: 565,
      discount: "22%",
    },
    description: "Put on this digital wrist watch that is prepared by hala during a sport dawdle with your friends and earn enormous of compliments. Made out of a premium quality material, this digital watch is long lasting and durable too. Further, the casing adds more appeal to its overall look that you can wear out during your sports days.Featuring a sporty round dial with stylish numerals inside, this watch for men is very much water resistant and will retain its quality for the years to come. You can show it off with your casual attires to grab compliments from everyone around.",
    tagline: "Watches for men",
  },
  {
    id: "product9",
    url: "https://rukminim1.flixcart.com/image/612/612/xif0q/deodorant/i/n/9/-original-imaga36afsjdsrrp.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/deodorant/p/y/m/-original-imagg8cjayzbrwvb.jpeg?q=70",
    title: {
      shortTitle: "Perfumes and grooming",
      longTitle: "SET WET Cool, Charm and Mischief Avatar Deodorant Spray",
    },
    price: {
      mrp: 9999,
      cost: 8765,
      discount: "16%",
    },
    description: "Standing true to its name, this deo set (pack of 3) is here to unleash your Mischief, Cool and Charming Avatar. The colourful packaging is symbolic of your energy and enthusiasm. These deos prevent the body odour caused by the bacterial breakdown of perspiration in armpits and other areas of your body to keep you fresh and energetic.",
    tagline: "Grooming at your step",
  },
  {
    id: "product10",
    url: "https://rukminim1.flixcart.com/image/612/612/xif0q/inflatable-sofa/t/t/c/65-2-seater-152-leatherette-5-5-in-1-inflatable-sofa-cum-bed-original-imagk8sjgzfhmfq4.jpeg?q=70",
    detailUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/inflatable-sofa/a/l/o/65-2-seater-152-leatherette-5-5-in-1-inflatable-sofa-cum-bed-original-imagk7wf6ygnrdst.jpeg?q=70",
    title: {
      shortTitle: "Sofa & Furniture",
      longTitle: "DNKP Leatherette 2 Seater Inflatable Sofa",
    },
    price: {
      mrp: 97999,
      cost: 67795,
      discount: "37%",
    },
    description: "Depending on the chambers you inflate and the configuration, the Air Beds 5 x 1 Inflatable Sofa Bed can be: An air bed perfect for two or three people as a short term sleeping solution A raised air bed that measures great for a temporary bed for one A relaxing lounger. >> From the air bed position, just inflate the back and arm rests A sturdy recliner. >> Take the lounger and flip it over so the arm/back rest is sitting on the ground And of course, a spacious three person sofa Five uses from one product. >> Hence the name 5 x 1 The Air Beds 5 x 1 Inflatable Sofa Bed is made of PVC vinyl which is easy to clean or repair should any kind of mishaps occur (comes with a patch kit). >> Also included absolutely FREE with your purchase are a detachable AC pump with nozzles and a lightweight carry bag to take everything with you.",
    tagline: "Premium Products",
  },
];

module.exports = products;
