const SHOP_DATA = [
  {
    title: "Medicines",
    items: [
      {
        id: 1,
        name: "Paracetamol Tablets",
        imageUrl:
          "https://5.imimg.com/data5/SELLER/Default/2022/2/OV/ML/PK/138082217/paracetamol-500-mg-tab-500x500.png",
        price: 50,
      },
      {
        id: 2,
        name: "Antibiotic Ointment",
        imageUrl:
          "https://www.neosporin.com/sites/neosporin_us/files/styles/product_image/public/product-images/01_neo_300810730877_us_original_ointment_1oz_obwb_500wx500h.png",
        price: 80,
      },
      {
        id: 3,
        name: "Cough Syrup",
        imageUrl: "https://ciplahealth.in/uploadfile/brand/img/04.png",
        price: 75,
      },
      {
        id: 4,
        name: "Bandages",
        imageUrl:
          "https://spng.pngfind.com/pngs/s/4-45167_bandage-png-png-bandage-transparent-png.png",
        price: 30,
      },
      {
        id: 5,
        name: "Pain Relief Gel",
        imageUrl:
          "https://www.pngkey.com/png/full/29-295569_product-jointflex-pain-relief-cream-4-oz.png",
        price: 60,
      },
      {
        id: 6,
        name: "First Aid Kit",
        imageUrl:
          "https://freepngimg.com/thumb/first_aid_kit/29849-1-first-aid-kit-transparent-image.png",
        price: 200,
      },
      {
        id: 7,
        name: "Thermometer",
        imageUrl:
          "https://w7.pngwing.com/pngs/232/850/png-transparent-clear-glass-thermometer-thermometer-transparency-and-translucency-thermometer-computer-network-hand-medical.png",
        price: 100,
      },
      {
        id: 8,
        name: "Hand Sanitizer",
        imageUrl:
          "https://freepngimg.com/download/sanitizer/107486-sanitizer-liquid-hand-free-transparent-image-hd.png",
        price: 40,
      },
      {
        id: 9,
        name: "Face Masks (Pack of 10)",
        imageUrl:
          "https://www.vhv.rs/dpng/d/493-4935247_medical-mask-png-black-face-mask-medical-transparent.png",
        price: 120,
      },
    ],
  },
  {
    title: "Personal Care",
    items: [
      {
        id: 10,
        name: "Shampoo",
        imageUrl:
          "https://i.pinimg.com/originals/f2/7f/14/f27f1478938591e46bad4bf5821b9141.png",
        price: 90,
      },
      {
        id: 11,
        name: "Toothpaste",
        imageUrl:
          "https://w7.pngwing.com/pngs/492/55/png-transparent-toothpaste-scape-colgate-toothpaste-miscellaneous-hygiene-tooth-  decay.png",
        price: 70,
      },
      {
        id: 12,
        name: "Soap",
        imageUrl:
          "https://www.pngitem.com/pimgs/m/246-2462519_dettol-original-soap-125g-hd-png-download.png",
        price: 35,
      },
      {
        id: 13,
        name: "Hair Oil",
        imageUrl:
          "https://w7.pngwing.com/pngs/272/285/png-transparent-parachute-coconut-oil-marico-coconut-oil-cosmetics-oil-bottle.png",
        price: 50,
      },
      {
        id: 14,
        name: "Deodorant",
        imageUrl:
          "https://freepngimg.com/thumb/gloves/47768-6-deodorant-image-free-download-png-hd.png",
        price: 80,
      },
      {
        id: 15,
        name: "Toothbrush",
        imageUrl:
          "https://www.nicepng.com/png/detail/925-9251139_tooth-brush-png-free-download-blue-colgate-toothbrush.png",
        price: 25,
      },
      {
        id: 16,
        name: "Lip Balm",
        imageUrl:
          "https://www.vhv.rs/dpng/d/535-5357164_carmex-lip-balm-clipart-transparent-background-hd-png.png",
        price: 30,
      },
      {
        id: 17,
        name: "Sunscreen Lotion",
        imageUrl:
          "https://w7.pngwing.com/pngs/393/152/png-transparent-sun-screen-25-soft-tube-sunscreen-lotion-lip-balm-cream-sunscreen-tube-cosmetics-sunscreen-sun-tanning.png",
        price: 100,
      },
    ],
  },
  {
    title: "Health Supplements",
    items: [
      {
        id: 18,
        name: "Multivitamin Capsules",
        imageUrl:
          "https://w7.pngwing.com/pngs/722/902/png-transparent-dietary-supplement-vitamin-c-health-food-vitamin-tablets-electronics-food-nutrition.png",
        price: 150,
      },
      {
        id: 19,
        name: "Fish Oil Capsules",
        imageUrl:
          "https://freepngimg.com/download/fish/112694-fish-oil-capsule-png-file-hd.png",
        price: 200,
      },
      {
        id: 20,
        name: "Protein Powder",
        imageUrl:
          "https://e7.pngegg.com/pngimages/974/8/png-clipart-dietary-supplement-milkshake-whey-protein-isolate-whey-nutrition-whey.png",
        price: 250,
      },
      {
        id: 21,
        name: "Calcium Tablets",
        imageUrl:
          "https://www.themgshop.com/wp-content/uploads/2022/07/Cipcal-HD-Tablet-15-Tablets-1.png",
        price: 100,
      },
      {
        id: 22,
        name: "Vitamin C Chewable Tablets",
        imageUrl:
          "https://endeavourmultisiteprodst.blob.core.windows.net/cache/b/5/d/8/1/5/b5d815e6501da3c33ff25d27c51df3ffb623f623.png",
        price: 80,
      },
    ],
  },
  {
    title: "Medical Devices",
    items: [
      {
        id: 23,
        name: "Blood Pressure Monitor",
        imageUrl:
          "https://www.pngmart.com/files/15/Digital-Blood-Pressure-Monitor-White-PNG.png",
        price: 500,
      },
      {
        id: 24,
        name: "Digital Thermometer",
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/019/615/957/original/digital-thermometer-temperature-png.png",
        price: 80,
      },
      {
        id: 25,
        name: "Pulse Oximeter",
        imageUrl:
          "https://www.hospitalsstore.com/images/detailed/47/1_qtze-i8.png",
        price: 300,
      },
      {
        id: 26,
        name: "Glucose Meter",
        imageUrl:
          "https://w7.pngwing.com/pngs/288/417/png-transparent-glucometer-at-120-blood-sugar-diabetes-mellitus-impaired-fasting-glucose-hypoglycemia-physician-sugar-nutrition-medicine-medical-care.png",
        price: 200,
      },
      {
        id: 27,
        name: "Nebulizer",
        imageUrl:
          "https://e7.pngegg.com/pngimages/176/999/png-clipart-nebulisers-pack-year-inhaler-albuterol-pharmaceutical-drug-healthy-boy-service-pharmaceutical-drug.png",
        price: 400,
      },
      {
        id: 28,
        name: "Infrared Thermometer",
        imageUrl:
          "https://www.pngfind.com/pngs/m/370-3707926_infrared-thermometer-hd-png-download.png",
        price: 150,
      },
      {
        id: 29,
        name: "Digital Weighing Scale",
        imageUrl:
          "https://e7.pngegg.com/pngimages/383/320/png-clipart-measuring-scales-alba-1-kg-electronic-postal-scales-charc-prepop1g-letter-scale-sencor-sks-30wh-sri-lanka-airport-weighing-acale-electronics-retail.png",
        price: 250,
      },
    ],
  },
  {
    title: "Hygiene Products",
    items: [
      {
        id: 30,
        name: "Hand Wash",
        imageUrl:
          "https://www.nicepng.com/png/detail/390-3905077_buy-palmolive-natural-deep-cleansing-hand-wash-online.png",
        price: 60,
      },
      {
        id: 31,
        name: "Toilet Paper (Pack of 6)",
        imageUrl:
          "https://freepngimg.com/thumb/machine/51622-8-toilet-paper-free-transparent-image-hd.png",
        price: 120,
      },
      {
        id: 32,
        name: "Sanitary Pads",
        imageUrl:
          "https://www.pngitem.com/pimgs/m/483-4834533_thumb-image-pad-sanitary-napkin-png-transparent-png.png",
        price: 80,
      },
      {
        id: 33,
        name: "Baby Diapers (Pack of 20)",
        imageUrl:
          "https://w7.pngwing.com/pngs/327/667/png-transparent-diaper-infant-pampers-baby-96-nappies-pampers-baby-dry-size-mega-plus-pack-child-child-people-toddler.png",
        price: 180,
      },
      {
        id: 34,
        name: "Wet Wipes",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0257/2091/3991/files/wipes02.png",
        price: 40,
      },
      {
        id: 35,
        name: "Hand Sanitizer Spray",
        imageUrl:
          "https://www.pngkit.com/png/detail/164-1643700_bstringarrayitem0-alttextimages-lifebuoy-hand-sanitizer-55-ml.png",
        price: 50,
      },
    ],
  },
];
export default SHOP_DATA;
