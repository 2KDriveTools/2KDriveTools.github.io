const LEGO_SETS = [
  {
    "name": "Dune Patrol",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7042_prod.jpg",
    "code": "ATV_7042"
  },
  {
    "name": "Steel Sprinter",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7473_prod.jpg",
    "code": "ATV_7473"
  },
  {
    "name": "Coast Guard Quad Bike",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7736_prod.jpg",
    "code": "ATV_7736"
  },
  {
    "name": "Public Transit Bus",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/8404_prod.jpg",
    "code": "Bus_8404"
  },
  {
    "name": "Lifeguard Jet Ski",
    "img": null,
    "code": "PWC_4937"
  },
  {
    "name": "Waterbug",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7737_prod.jpg",
    "code": "PWC_7737"
  },
  {
    "name": "Agreenable RV",
    "img": null,
    "code": "RV_BT000"
  },
  {
    "name": "4WD SUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7635_prod.jpg",
    "code": "SUV_7635"
  },
  {
    "name": "Undercover Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7032-0000-XX-12-1.jpg",
    "code": "Van_7032"
  },
  {
    "name": "4x4 Dynamo",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/20014_prod.jpg",
    "code": "ATV_20014"
  },
  {
    "name": "Sunshine Surfer ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31079_Prod.jpg",
    "code": "ATV_31079"
  },
  {
    "name": "Arctic Outpost ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60035_prod.jpg",
    "code": "ATV_60035"
  },
  {
    "name": "Prisoner Transport ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60043_prod.jpg",
    "code": "ATV_60043"
  },
  {
    "name": "Arctic Air Transport ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60193_Prod.jpg",
    "code": "ATV_60193"
  },
  {
    "name": "Riverside Raid Quad",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/70160_prod.jpg",
    "code": "ATV_70160"
  },
  {
    "name": "Da Kar",
    "img": null,
    "code": "Kar_VC000"
  },
  {
    "name": "Da Truck",
    "img": null,
    "code": "Kar_VC001"
  },
  {
    "name": "Personal Water Craft",
    "img": null,
    "code": "PWC_30015"
  },
  {
    "name": "Jet Ski",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40099_prod.jpg",
    "code": "PWC_40099"
  },
  {
    "name": "City SUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60058_prod.jpg",
    "code": "SUV_60058"
  },
  {
    "name": "4x4 SUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60149_Prod.jpg",
    "code": "SUV_60149"
  },
  {
    "name": "Quick Taxi",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7937_prod.jpg",
    "code": "Taxi_7937"
  },
  {
    "name": "Sunshine Surfer Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31079_Prod.jpg",
    "code": "Van_31079"
  },
  {
    "name": "Getaway Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60008_prod.jpg",
    "code": "Van_60008"
  },
  {
    "name": "Panel Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60117_Prod.jpg",
    "code": "Van_60117"
  },
  {
    "name": "ATV Race Team Bike",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60148_Prod.jpg",
    "code": "ATV_60148A"
  },
  {
    "name": "ATV Race Team Bike",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60148_Prod.jpg",
    "code": "ATV_60148B"
  },
  {
    "name": "Model Cat-T",
    "img": null,
    "code": "CatT_VC000"
  },
  {
    "name": "Military GPSUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7628_prod.jpg",
    "code": "GPSUV_7628"
  },
  {
    "name": "Go Kart",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30032_prod.jpg",
    "code": "Kart_30032"
  },
  {
    "name": "Riding Mower",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7637_prod.jpg",
    "code": "Mower_7637"
  },
  {
    "name": "Taxi",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60050_prod.jpg",
    "code": "Taxi_60050"
  },
  {
    "name": "4x4 Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4437_prod.jpg",
    "code": "Truck_4437"
  },
  {
    "name": "Coast Guard 4WD",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7737_prod.jpg",
    "code": "Truck_7737"
  },
  {
    "name": "World Racers Desert Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/8864_prod.jpg",
    "code": "Truck_8864"
  },
  {
    "name": "Yacht",
    "img": null,
    "code": "Yacht_1792"
  },
  {
    "name": "Camper",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7639_prod.jpg",
    "code": "Camper_7639"
  },
  {
    "name": "Bike Shop & Cafe Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31026_prod.jpg",
    "code": "Coupe_31026"
  },
  {
    "name": "Sporty Coupe",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60060_prod.jpg",
    "code": "Coupe_60060"
  },
  {
    "name": "Blue Compact",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60081_Prod.jpg",
    "code": "Coupe_60081"
  },
  {
    "name": "Convertable Coupe",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60119_Prod.jpg",
    "code": "Coupe_60119"
  },
  {
    "name": "Sporty Cabriolet",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60143_Prod.jpg",
    "code": "Coupe_60143"
  },
  {
    "name": "Army GPSUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30071_prod.jpg",
    "code": "GPSUV_30071"
  },
  {
    "name": "Adventure GPSUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31037_Prod.jpg",
    "code": "GPSUV_31037"
  },
  {
    "name": "Getaways GPSUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31052_Prod.jpg",
    "code": "GPSUV_31052"
  },
  {
    "name": "Outback GPSUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31075_Prod.jpg",
    "code": "GPSUV_31075"
  },
  {
    "name": "4x4 GPSUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60082_Prod.jpg",
    "code": "GPSUV_60082"
  },
  {
    "name": "Hydro Speedboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31011_prod.jpg",
    "code": "Hydro_31011"
  },
  {
    "name": "Lemon Thunderboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31023_prod.jpg",
    "code": "Hydro_31023"
  },
  {
    "name": "Extreme Engine Hydro",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31072_Prod.jpg",
    "code": "Hydro_31072"
  },
  {
    "name": "Crest Cutter Hydro",
    "img": null,
    "code": "Hydro_VC001"
  },
  {
    "name": "Industrial Mower",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30224_prod.jpg",
    "code": "Mower_30224"
  },
  {
    "name": "Vehicle_Name.Nismo_76896",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/76896_Prod.jpg",
    "code": "Nismo_76896"
  },
  {
    "name": "Classic Sedan",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10184_prod.jpg",
    "code": "Sedan_10184"
  },
  {
    "name": "Airport Shuttle",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60050_prod.jpg",
    "code": "Sedan_60050"
  },
  {
    "name": "Maintenance Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31026_prod.jpg",
    "code": "Truck_31026"
  },
  {
    "name": "Sport Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60009_prod.jpg",
    "code": "Truck_60009"
  },
  {
    "name": "Burly Pickup",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60046_prod.jpg",
    "code": "Truck_60046"
  },
  {
    "name": "Criminal's Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60070_Prod.jpg",
    "code": "Truck_60070"
  },
  {
    "name": "Racing Tow Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60084_Prod.jpg",
    "code": "Truck_60084"
  },
  {
    "name": "Vehicle_Name.Truck_60121",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60121_Prod.jpg",
    "code": "Truck_60121"
  },
  {
    "name": "Mountain Police Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60174_Prod.jpg",
    "code": "Truck_60174"
  },
  {
    "name": "City Pickup Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60182_Prod.jpg",
    "code": "Truck_60182"
  },
  {
    "name": "4x4 Adventure Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60240_Prod.jpg",
    "code": "Truck_60240"
  },
  {
    "name": "Classic Delivery Truck",
    "img": null,
    "code": "Truck_BT000"
  },
  {
    "name": "Silver Spinner",
    "img": null,
    "code": "UFO_VC31095"
  },
  {
    "name": "Van Go",
    "img": null,
    "code": "VanGo_VC000"
  },
  {
    "name": "Green Leaf Turbo",
    "img": null,
    "code": "VHull_VC001"
  },
  {
    "name": "Rocket Rally Big Rig",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31074_Prod.jpg",
    "code": "BigRig_31074"
  },
  {
    "name": "Camper Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60057_prod.jpg",
    "code": "Camper_60057"
  },
  {
    "name": "City Square Convertible",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60097_Prod.jpg",
    "code": "Coupe_60097A"
  },
  {
    "name": "City Square Coupe",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60097_Prod.jpg",
    "code": "Coupe_60097B"
  },
  {
    "name": "City Square Cruiser ",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60097_Prod.jpg",
    "code": "Coupe_60097C"
  },
  {
    "name": "Service Station Sedan",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60132_Prod.jpg",
    "code": "Coupe_60132A"
  },
  {
    "name": "Service Station Convertible",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60132_Prod.jpg",
    "code": "Coupe_60132B"
  },
  {
    "name": "Dakarish",
    "img": null,
    "code": "Duhkar_VC000"
  },
  {
    "name": "Capital City Eco Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60200_Prod.jpg",
    "code": "EcoCar_60200"
  },
  {
    "name": "Off-road Fire ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7213_prod.jpg",
    "code": "FireATV_7213"
  },
  {
    "name": "Government Bison",
    "img": null,
    "code": "GovSUV_VC000"
  },
  {
    "name": "H.M.S. Tubby",
    "img": null,
    "code": "Hottub_VC000"
  },
  {
    "name": "Machio DLX",
    "img": null,
    "code": "Machio_VC000"
  },
  {
    "name": "Vehicle_Name.Pickup_76941",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/76941_Prod.png",
    "code": "Pickup_76941"
  },
  {
    "name": "Tractor",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7634_prod.jpg",
    "code": "Tractor_7634"
  },
  {
    "name": "Big Green Tractor",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7684_prod.jpg",
    "code": "Tractor_7684"
  },
  {
    "name": "Tug Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/5770_prod.jpg",
    "code": "TugBoat_5770"
  },
  {
    "name": "Turtle King",
    "img": null,
    "code": "Turtle_VC000"
  },
  {
    "name": "Wake Pouncer",
    "img": null,
    "code": "CatBoat_VC000"
  },
  {
    "name": "Das Boat",
    "img": null,
    "code": "DasBoat_VC000"
  },
  {
    "name": "Draggin' Fly",
    "img": null,
    "code": "Dragster_6639"
  },
  {
    "name": "Recycling Truck Forklift",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4206_prod.jpg",
    "code": "Forklift_4206"
  },
  {
    "name": "Handcar",
    "img": null,
    "code": "Handcar_VC000"
  },
  {
    "name": "Hot Dawg",
    "img": null,
    "code": "HotDawg_VC000"
  },
  {
    "name": "Lil' Mule",
    "img": null,
    "code": "LilMule_VC000"
  },
  {
    "name": "J.B.'s Submarine",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/70433_Prod_01.jpg",
    "code": "MiniSub_70433"
  },
  {
    "name": "Race Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60053_prod.jpg",
    "code": "RaceCar_60053"
  },
  {
    "name": "Classic Race Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60322_Prod.png",
    "code": "RaceCar_60322"
  },
  {
    "name": "Vehicle_Name.RaceCar_60383",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60383_Prod.png",
    "code": "RaceCar_60383"
  },
  {
    "name": "Jungle Roadster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/5986-0000-XX-12-1.jpg",
    "code": "Roadster_5986"
  },
  {
    "name": "Dusty Roadster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7622_prod.jpg",
    "code": "Roadster_7622"
  },
  {
    "name": "Werewolf Roadster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/9463_Prod.jpg",
    "code": "Roadster_9463"
  },
  {
    "name": "Zombie Smasher Roadster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/9465_Prod.jpg",
    "code": "Roadster_9465"
  },
  {
    "name": "Speedio",
    "img": null,
    "code": "Speedio_VC000"
  },
  {
    "name": "Double Decker Tour Bus",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60200_Prod.jpg",
    "code": "TourBus_60200"
  },
  {
    "name": "Mini Tractor",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40280_Prod.jpg",
    "code": "Tractor_40280"
  },
  {
    "name": "Feed Hauler",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60346_Prod.png",
    "code": "Tractor_60346"
  },
  {
    "name": "4x4 Pickup Truck",
    "img": null,
    "code": "Truck_VC31046"
  },
  {
    "name": "Stellar Zoomer",
    "img": null,
    "code": "UFO_Car_VC000"
  },
  {
    "name": "Ambulance",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4431_prod.jpg",
    "code": "Ambulance_4431"
  },
  {
    "name": "Bajambug",
    "img": null,
    "code": "Bajambug_VC000"
  },
  {
    "name": "Grand Prix Big Rig",
    "img": null,
    "code": "BigRig_VC60025"
  },
  {
    "name": "Vestas Wind Turbine Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10268_Prod.jpg",
    "code": "CargoVan_10268"
  },
  {
    "name": "Dragster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60151_Prod.jpg",
    "code": "Dragster_60151"
  },
  {
    "name": "Volcano Exploration Base Cart",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60124_Prod.jpg",
    "code": "DumpCart_60124"
  },
  {
    "name": "Loader and Tipper",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4201_prod.jpg",
    "code": "DumpTruck_4201"
  },
  {
    "name": "World Racer Buggy",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/8864_prod.jpg",
    "code": "DuneBuggy_8864"
  },
  {
    "name": "FigsWagon Coupe",
    "img": null,
    "code": "FigsWagenCoupe"
  },
  {
    "name": "FigsWagon Sport",
    "img": null,
    "code": "FigsWagenSport"
  },
  {
    "name": "FigsWagon Wagon",
    "img": null,
    "code": "FigsWagenWagon"
  },
  {
    "name": "Fire Rescue Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60106_Prod.jpg",
    "code": "FireBoat_60106"
  },
  {
    "name": "Fire Station Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7208_prod.jpg",
    "code": "FireTruck_7208"
  },
  {
    "name": "Mining Forklift",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60125_Prod.jpg",
    "code": "ForkLift_60125"
  },
  {
    "name": "Surveillance Van",
    "img": null,
    "code": "GovVan_VC60198"
  },
  {
    "name": "Aquadirt Racer Boat",
    "img": null,
    "code": "GWP_Boat_VC000"
  },
  {
    "name": "Haus Boat",
    "img": null,
    "code": "HausBoat_VC000"
  },
  {
    "name": "Mine Cart",
    "img": null,
    "code": "MineCart_VC000"
  },
  {
    "name": "Laden Minecart",
    "img": null,
    "code": "MineCart_VC002"
  },
  {
    "name": "Vented Mine Cart",
    "img": null,
    "code": "MineCart_VC003"
  },
  {
    "name": "Tall Mine Cart",
    "img": null,
    "code": "MineCart_VC004"
  },
  {
    "name": "Dusky Minecart",
    "img": null,
    "code": "Minecart_VC005"
  },
  {
    "name": "Gilded Minecart",
    "img": null,
    "code": "Minecart_VC006"
  },
  {
    "name": "Vehicle_Name.NoWayThisWorks",
    "img": null,
    "code": "NoWayThisWorks"
  },
  {
    "name": "Vehicle_Name.Off-Road_60328",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60328_Prod.png",
    "code": "Off-Road_60328"
  },
  {
    "name": "Awesome Pizza Vehicle",
    "img": null,
    "code": "PizzaCar_VC000"
  },
  {
    "name": "Pepperoni Express Off-roader",
    "img": null,
    "code": "PizzaCar_VC001"
  },
  {
    "name": "Police ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4437_prod.jpg",
    "code": "PoliceATV_4437"
  },
  {
    "name": "Police Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7237_prod.jpg",
    "code": "PoliceVan_7237"
  },
  {
    "name": "Lake Cruiser",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4643_prod.jpg",
    "code": "Powerboat_4643"
  },
  {
    "name": "Rocket Rally Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31074_Prod.jpg",
    "code": "RallyCar_31074"
  },
  {
    "name": "Rally Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60113_Prod.jpg",
    "code": "RallyCar_60113"
  },
  {
    "name": "Hot Rod",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30354_Prod.jpg",
    "code": "Roadster_30354"
  },
  {
    "name": "Extreme Engines Roadster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31072_Prod.jpg",
    "code": "Roadster_31072"
  },
  {
    "name": "Classic Roadster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7682_prod.jpg",
    "code": "Roadster_7682a"
  },
  {
    "name": "Vehicle_Name.Roadster_7682b",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7682_prod.jpg",
    "code": "Roadster_7682b"
  },
  {
    "name": "Seahorse",
    "img": null,
    "code": "Seahorse_VC000"
  },
  {
    "name": "Sport Utility Vehicle",
    "img": null,
    "code": "SimpleSUV_6550"
  },
  {
    "name": "Windsurfer Van",
    "img": null,
    "code": "SimpleVan_1791"
  },
  {
    "name": "Snowplow",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60083_Prod.jpg",
    "code": "Snowplow_60083"
  },
  {
    "name": "City Harbor Speedboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4641_prod.jpg",
    "code": "Speedboat_4641"
  },
  {
    "name": "Speedboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4856-0000-XX-12-1.jpg",
    "code": "Speedboat_4856"
  },
  {
    "name": "Salty Speeder",
    "img": null,
    "code": "Speedboat_6344"
  },
  {
    "name": "Wavemaster",
    "img": null,
    "code": "Speedboat_6596"
  },
  {
    "name": "Wake Rider",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/6737_prod.JPG",
    "code": "Speedboat_6737"
  },
  {
    "name": "Shadowy Convertible",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4441_prod.jpg",
    "code": "SportsCar_4441"
  },
  {
    "name": "Sporty Convertible",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/8404_prod.jpg",
    "code": "SportsCar_8404"
  },
  {
    "name": "High-Speed Swamp Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/5866_prod.jpg",
    "code": "SwampBoat_5866"
  },
  {
    "name": "Gator Swamp Boat",
    "img": null,
    "code": "SwampBoat_6563"
  },
  {
    "name": "Blue Tow Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10264_Prod.jpg",
    "code": "TowTruck_10264"
  },
  {
    "name": "Tow Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60081_Prod.jpg",
    "code": "TowTruck_60081"
  },
  {
    "name": "Blue Tow Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60132_Prod.jpg",
    "code": "TowTruck_60132"
  },
  {
    "name": "Red Tow Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60137_Prod.jpg",
    "code": "TowTruck_60137"
  },
  {
    "name": "Gamma Wave Rider",
    "img": null,
    "code": "UFO_Boat_VC000"
  },
  {
    "name": "Ambulance",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60330_Prod.png",
    "code": "Ambulance_60330"
  },
  {
    "name": "River Chase Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7625_prod.jpg",
    "code": "Amphibious_7625"
  },
  {
    "name": "Boat Truck",
    "img": null,
    "code": "BoatTruck_VC000"
  },
  {
    "name": "Street Coffin",
    "img": null,
    "code": "BoneWagon_VC000"
  },
  {
    "name": "Vehicle_Name.BrickFilA_VC000",
    "img": null,
    "code": "BrickFilA_VC000"
  },
  {
    "name": "Vehicle_Name.BrickFilA_VC001",
    "img": null,
    "code": "BrickFilA_VC001"
  },
  {
    "name": "Hamburghini Royale ",
    "img": null,
    "code": "BurgerCar_VC000"
  },
  {
    "name": "Hamburghini",
    "img": null,
    "code": "BurgerCar_VC001"
  },
  {
    "name": "City Harbor Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7994_prod.jpg",
    "code": "CargoTruck_7994"
  },
  {
    "name": "Cat-A-Maran",
    "img": null,
    "code": "CATamaran_VC000"
  },
  {
    "name": "Electro Slammer",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60395_Prod.png",
    "code": "City3in1_60395B"
  },
  {
    "name": "Zombie Chauffeur Coffin Car",
    "img": null,
    "code": "CoffinCar_30200"
  },
  {
    "name": "Frosted Pontoons",
    "img": null,
    "code": "DonutBoat_VC000"
  },
  {
    "name": "Snow Dump Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60083_Prod.jpg",
    "code": "DumpTruck_60083"
  },
  {
    "name": "Volcano Heavy-Lift Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60125_Prod.jpg",
    "code": "DumpTruck_60125"
  },
  {
    "name": "Dune Buggy",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60082_Prod.jpg",
    "code": "DuneBuggy_60082"
  },
  {
    "name": "Buggy",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60145_Prod.jpg",
    "code": "DuneBuggy_60145"
  },
  {
    "name": "Dirt Road Pursuit 4x4",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60172_Prod.jpg",
    "code": "DuneBuggy_60172"
  },
  {
    "name": "Mountain Arrest Buggy",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60173_Prod.jpg",
    "code": "DuneBuggy_60173"
  },
  {
    "name": "Vehicle_Name.DuneBuggy_60387",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60387_Prod.png",
    "code": "DuneBuggy_60387"
  },
  {
    "name": "Claw Excavator",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60075_Prod.jpg",
    "code": "Excavator_60075"
  },
  {
    "name": "Scoop Excavator",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60152_Prod.jpg",
    "code": "Excavator_60152"
  },
  {
    "name": "Mining Heavy Driller",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60186_Prod.jpg",
    "code": "Excavator_60186"
  },
  {
    "name": "Fire Station Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7208_prod.jpg",
    "code": "FireEngine_7208"
  },
  {
    "name": "Airport Fire Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7891_prod.jpg",
    "code": "FireEngine_7891"
  },
  {
    "name": "Golf Cart",
    "img": null,
    "code": "GolfCart_LBT000"
  },
  {
    "name": "Aquadirt Racer Off-Road Car",
    "img": null,
    "code": "GWP_Truck_VC000"
  },
  {
    "name": "House Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31051_Prod.jpg",
    "code": "HouseBoat_31051"
  },
  {
    "name": "VIP Limousine",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60102_Prod.jpg",
    "code": "Limousine_60102"
  },
  {
    "name": "Machio",
    "img": null,
    "code": "Machio_4S_VC000"
  },
  {
    "name": "Mini Frontloader",
    "img": null,
    "code": "MiniDozer_30151"
  },
  {
    "name": "Mining ATV",
    "img": null,
    "code": "MiningATV_30152"
  },
  {
    "name": "Mug Minion",
    "img": null,
    "code": "MugMinion_VC000"
  },
  {
    "name": "Flightless Racer",
    "img": null,
    "code": "PlaneCar_VC5925"
  },
  {
    "name": "Police Buggy",
    "img": null,
    "code": "PoliceATV_30013"
  },
  {
    "name": "Police ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30228_prod.jpg",
    "code": "PoliceATV_30228"
  },
  {
    "name": "Police Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60042_prod.jpg",
    "code": "PoliceCar_60042"
  },
  {
    "name": "Vehicle_Name.PoliceCar_60138",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60138_Prod.jpg",
    "code": "PoliceCar_60138"
  },
  {
    "name": "Vehicle_Name.PoliceCar_60141",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60141_Prod.jpg",
    "code": "PoliceCar_60141"
  },
  {
    "name": "Vehicle_Name.PoliceCar_60143",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60143_Prod.jpg",
    "code": "PoliceCar_60143"
  },
  {
    "name": "Chase Vehicle",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60239_Prod.jpg",
    "code": "PoliceCar_60239"
  },
  {
    "name": "Vehicle_Name.Policecar_60312",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60312_Prod.png",
    "code": "Policecar_60312"
  },
  {
    "name": "Vehicle_Name.Policecar_60316",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60316_Prod.png",
    "code": "Policecar_60316"
  },
  {
    "name": "Longarm",
    "img": null,
    "code": "PoliceCar_VC000"
  },
  {
    "name": "Police PWC",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30227_prod.jpg",
    "code": "PolicePWC_30227"
  },
  {
    "name": "Powerboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60085_Prod.jpg",
    "code": "Powerboat_60085"
  },
  {
    "name": "Ragecoach",
    "img": null,
    "code": "Ragecoach_VC000"
  },
  {
    "name": "Custom Roadster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10200-0000-xx-12-1.jpg",
    "code": "Roadster_10200A"
  },
  {
    "name": "Vehicle_Name.Roadster_10200B",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10200-0000-xx-12-1.jpg",
    "code": "Roadster_10200B"
  },
  {
    "name": "Ruby Roadster",
    "img": null,
    "code": "Roadster_VC9468"
  },
  {
    "name": "School Bus",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60329_Prod.png",
    "code": "SchoolBus_60329"
  },
  {
    "name": "Science ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/1265-0000-XX-12-1.jpg",
    "code": "ScienceATV_1265"
  },
  {
    "name": "Alien Defender ATV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7050_prod.jpg",
    "code": "ScienceATV_7050"
  },
  {
    "name": "Double Hotdog Raft",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60176_Prod.jpg",
    "code": "SmallRaft_60176"
  },
  {
    "name": "Wild River Speedboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60176_Prod.jpg",
    "code": "Speedboat_60176"
  },
  {
    "name": "Diving Yacht",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60221_Prod.jpg",
    "code": "Speedboat_60221"
  },
  {
    "name": "Extremis Speedboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/76006_prod.jpg",
    "code": "Speedboat_76006"
  },
  {
    "name": "Sunset Track Racer",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31089_Prod.jpg",
    "code": "SportsCar_31089"
  },
  {
    "name": "Sports Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40277_Prod.jpg",
    "code": "SportsCar_40277"
  },
  {
    "name": "Convertible Sports Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4441_prod.jpg",
    "code": "SportsCar_4441B"
  },
  {
    "name": "Spoiler Cabriolet",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60007_prod.jpg",
    "code": "SportsCar_60007"
  },
  {
    "name": "Sports Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60017_prod.jpg",
    "code": "SportsCar_60017"
  },
  {
    "name": "Convertible Sports Coupe",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60138_Prod.jpg",
    "code": "SportsCar_60138"
  },
  {
    "name": "Sports Coupe",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60200_Prod.jpg",
    "code": "SportsCar_60200"
  },
  {
    "name": "Sunset Race Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31089_Prod.jpg",
    "code": "SuperBoat_31089"
  },
  {
    "name": "Race Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60114_Prod.jpg",
    "code": "SuperBoat_60114"
  },
  {
    "name": "Swamp Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31071_Prod.jpg",
    "code": "SwampBoat_31071"
  },
  {
    "name": "Smuggler's Swamp Boat",
    "img": null,
    "code": "SwampBoat_VC000"
  },
  {
    "name": "Toy Rocket",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40335_Prod.jpg",
    "code": "ToyRocket_40335"
  },
  {
    "name": "Diesel Locoboative",
    "img": null,
    "code": "TrainBoat_VC000"
  },
  {
    "name": "Steam Locoboative",
    "img": null,
    "code": "TrainBoat_VC001"
  },
  {
    "name": "Truck Boat",
    "img": null,
    "code": "TruckBoat_VC000"
  },
  {
    "name": "Nebula Climber",
    "img": null,
    "code": "UFO_Truck_VC000"
  },
  {
    "name": "Vampyre Hearse",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/9464_Prod.jpg",
    "code": "VampHearse_9464"
  },
  {
    "name": "Balloon Car",
    "img": null,
    "code": "BalloonCar_VC000"
  },
  {
    "name": "Biplane Car",
    "img": null,
    "code": "BiplaneCar_VC000"
  },
  {
    "name": "Bird of Play",
    "img": null,
    "code": "BirdOfPlay_VC000"
  },
  {
    "name": "Bottle Ship",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/21313_Prod.jpg",
    "code": "BottleShip_21313"
  },
  {
    "name": "City Square Delivery Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60097_Prod.jpg",
    "code": "CargoTruck_60097"
  },
  {
    "name": "Cat DeVille",
    "img": null,
    "code": "CatDeVille_VC000"
  },
  {
    "name": "Winter Village Station Bus",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10259_Prod.jpg",
    "code": "ClassicBus_10259"
  },
  {
    "name": "Downtown Diner Convertible",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10260_Prod.jpg",
    "code": "ClassicCar_10260"
  },
  {
    "name": "Clutch's Classic Boat",
    "img": null,
    "code": "ClutchBoat_VC000"
  },
  {
    "name": "Clydesdale",
    "img": null,
    "code": "Clydesdale_VC000"
  },
  {
    "name": "Cornmobile",
    "img": null,
    "code": "Cornmobile_VC000"
  },
  {
    "name": "Volcano Exploration Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60121_Prod.jpg",
    "code": "DrillTruck_60121"
  },
  {
    "name": "Spaceboat Explorer",
    "img": null,
    "code": "FastroBoat_VC000"
  },
  {
    "name": "Winter Village Fire Engine",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10263_Prod.jpg",
    "code": "FireEngine_10263"
  },
  {
    "name": "Fire Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60002_prod.jpg",
    "code": "FireEngine_60002"
  },
  {
    "name": "Fire Emergency Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60003_prod.jpg",
    "code": "FireEngine_60003"
  },
  {
    "name": "Fire Ladder Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60107_Prod.jpg",
    "code": "FireEngine_60107"
  },
  {
    "name": "Rescue Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60319_Prod.png",
    "code": "FireRescue_60319"
  },
  {
    "name": "Vehicle_Name.FireTruck_60321A",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60321_Prod.png",
    "code": "FireTruck_60321A"
  },
  {
    "name": "Food Truck",
    "img": null,
    "code": "FoodTruckA_VC000"
  },
  {
    "name": "Front-End Loader",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7630_prod.jpg",
    "code": "FrontLoader_7630"
  },
  {
    "name": "Torpedo Synthesis",
    "img": null,
    "code": "FusionBoat_VC000"
  },
  {
    "name": "Aquadirt Racer Street Car",
    "img": null,
    "code": "GWP_Street_VC000"
  },
  {
    "name": "Police Hovercraft",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60071_Prod.jpg",
    "code": "Hovercraft_60071"
  },
  {
    "name": "Monster Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60055_prod.jpg",
    "code": "LargeTruck_60055"
  },
  {
    "name": "Pickup Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60085_Prod.jpg",
    "code": "LargeTruck_60085"
  },
  {
    "name": "Lowrider",
    "img": null,
    "code": "Lowrider01_VC001"
  },
  {
    "name": "Cargo Van",
    "img": null,
    "code": "PanelVan_VC60198"
  },
  {
    "name": "Plane Car",
    "img": null,
    "code": "PlaneCar_VC31003"
  },
  {
    "name": "Flightless Drifter",
    "img": null,
    "code": "PlaneCar_VC5925B"
  },
  {
    "name": "Police Animal Control",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4441_prod.jpg",
    "code": "PoliceK9Van_4441"
  },
  {
    "name": "Police 4WD",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7032-0000-XX-12-1.jpg",
    "code": "PoliceTruck_7032"
  },
  {
    "name": "Powerhorse",
    "img": null,
    "code": "PowerHorse_VC000"
  },
  {
    "name": "4x4 Off-roader",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60115_Prod.jpg",
    "code": "RallyTruck_60115"
  },
  {
    "name": "Stunt Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60146_Prod.jpg",
    "code": "RallyTruck_60146"
  },
  {
    "name": "Desert Rally Racer",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60218_Prod.jpg",
    "code": "RallyTruck_60218"
  },
  {
    "name": "Repair Lift",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30229_prod.jpg",
    "code": "RepairLift_30229"
  },
  {
    "name": "Hydroplane",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31047_Prod.jpg",
    "code": "RocketBoat_31047"
  },
  {
    "name": "Vehicle_Name.ServiceCar_60351",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60351_prod.png",
    "code": "ServiceCar_60351"
  },
  {
    "name": "Shadow Thunder",
    "img": null,
    "code": "ShadowMinionBoat"
  },
  {
    "name": "4x4 Buggy",
    "img": null,
    "code": "SimpleBuggy_6333"
  },
  {
    "name": "Mag Racer",
    "img": null,
    "code": "SimpleBuggy_6648"
  },
  {
    "name": "Lil' Red Coupe",
    "img": null,
    "code": "SimpleCoupe_1489"
  },
  {
    "name": "Dainty Daytripper",
    "img": null,
    "code": "SimpleCoupe_6349"
  },
  {
    "name": "Beach 4WD",
    "img": null,
    "code": "SimpleGPSUV_6596"
  },
  {
    "name": "Sedan",
    "img": null,
    "code": "SimpleSedan_6397"
  },
  {
    "name": "Simple Sedan",
    "img": null,
    "code": "SimpleSedan_6655"
  },
  {
    "name": "Delivery Truck",
    "img": null,
    "code": "SimpleTruck_6394"
  },
  {
    "name": "Mini Coupe",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40109_prod.jpg",
    "code": "SmallCoupe_40109"
  },
  {
    "name": "Wet Widow",
    "img": null,
    "code": "SpiderBoat_VC000"
  },
  {
    "name": "Stair Truck",
    "img": null,
    "code": "StairTruck_VC001"
  },
  {
    "name": "Sunset Track Racer",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31089_Prod.jpg",
    "code": "TrackRacer_31089"
  },
  {
    "name": "Turtle King Swimmer",
    "img": null,
    "code": "TurtleBoat_VC000"
  },
  {
    "name": "Vintage Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40448_Prod.jpg",
    "code": "VintageCar_40448"
  },
  {
    "name": "Yellow Taxi",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40468_Prod.jpg",
    "code": "YellowTaxi_40468"
  },
  {
    "name": "Cargo Terminal Cart",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60022_prod.jpg",
    "code": "AirportCart_60022"
  },
  {
    "name": "Airport VIP Cart",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60102_Prod.jpg",
    "code": "AirportCart_60102"
  },
  {
    "name": "Biplane Boat",
    "img": null,
    "code": "BiplaneBoat_VC000"
  },
  {
    "name": "Biplane Off-roader",
    "img": null,
    "code": "BiplaneCar_VC000B"
  },
  {
    "name": "Boomer Truck",
    "img": null,
    "code": "BoomerTruck_VC001"
  },
  {
    "name": "Boomer Wagon",
    "img": null,
    "code": "BoomerWagon_VC000"
  },
  {
    "name": "Slushy Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60384_Prod.png",
    "code": "DrinksTruck_60384"
  },
  {
    "name": "Electric Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60347_Prod.png",
    "code": "ElectricCar_60347"
  },
  {
    "name": "Fireman's Car",
    "img": null,
    "code": "FiremanCart_30001"
  },
  {
    "name": "Fire Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30338_Prod.jpg",
    "code": "FiremanCart_30338"
  },
  {
    "name": "Fire Utility Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60111_Prod.jpg",
    "code": "FireUtility_60111"
  },
  {
    "name": "Shrimp Boat",
    "img": null,
    "code": "FishingBoat_70442"
  },
  {
    "name": "Front Loader",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10666_prod.jpg",
    "code": "FrontLoader_10666"
  },
  {
    "name": "Demolition Front Loader",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60072_Prod.jpg",
    "code": "FrontLoader_60072"
  },
  {
    "name": "Garbage Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4432_prod.jpg",
    "code": "GarbageTruck_4432"
  },
  {
    "name": "Government Starsign",
    "img": null,
    "code": "GovZodiac_VC60168"
  },
  {
    "name": "Patrioteer",
    "img": null,
    "code": "JetPlaneCar_VC000"
  },
  {
    "name": "ATV Race Team Truck (Unloaded)",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60148_Prod.jpg",
    "code": "LargeTruck_60148A"
  },
  {
    "name": "ATV Race Team Truck (Loaded)",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60148_Prod.jpg",
    "code": "LargeTruck_60148B"
  },
  {
    "name": "Mini Mining Drill",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30312_Prod.jpg",
    "code": "MiningDrill_30312"
  },
  {
    "name": "Mining Drill",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60185_Prod.jpg",
    "code": "MiningDrill_60185"
  },
  {
    "name": "Agents Monster Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/8630_prod.jpg",
    "code": "MonsterTruck_8630"
  },
  {
    "name": "Ottermobile",
    "img": null,
    "code": "Offroader_VC60394"
  },
  {
    "name": "Howser's P59 PlaneCar",
    "img": null,
    "code": "P59PlaneCar_VC000"
  },
  {
    "name": "Howser's P59 Off-roader",
    "img": null,
    "code": "P59PlaneCar_VC001"
  },
  {
    "name": "Plane Car Off-roader",
    "img": null,
    "code": "PlaneCar_VC31003B"
  },
  {
    "name": "Crooks' Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60319_Prod.png",
    "code": "PoliceChase_60319"
  },
  {
    "name": "Armored Police Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60007_prod.jpg",
    "code": "PoliceTruck_60007"
  },
  {
    "name": "Armored Police Transport",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60008_prod.jpg",
    "code": "PoliceTruck_60008"
  },
  {
    "name": "Police Pickup",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60045_prod.jpg",
    "code": "PoliceTruck_60045"
  },
  {
    "name": "Police Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60140_Prod.jpg",
    "code": "PoliceTruck_60140"
  },
  {
    "name": "ReDonkulous",
    "img": null,
    "code": "ReDonkulous_VC000"
  },
  {
    "name": "School Bus",
    "img": null,
    "code": "SchoolBus_VC70423"
  },
  {
    "name": "Lunar MPV",
    "img": null,
    "code": "ScienceBuggy_1621"
  },
  {
    "name": "T3 Trike",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7312_prod.jpg",
    "code": "ScienceBuggy_7312"
  },
  {
    "name": "Shuttle Cart",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60080_Prod.jpg",
    "code": "ShuttleCart_60080"
  },
  {
    "name": "Big Rig",
    "img": null,
    "code": "SimpleBigRig_6340"
  },
  {
    "name": "Simple Coupe",
    "img": null,
    "code": "SimpleCoupe_2126a"
  },
  {
    "name": "Simple Coupe",
    "img": null,
    "code": "SimpleCoupe_2126b"
  },
  {
    "name": "Cecil's Car",
    "img": null,
    "code": "SimpleCoupe_6394a"
  },
  {
    "name": "Simple Convertible Coupe",
    "img": null,
    "code": "SimpleCoupe_6394b"
  },
  {
    "name": "Vehicle_Name.SimpleCoupe_6394c",
    "img": null,
    "code": "SimpleCoupe_6394c"
  },
  {
    "name": "Ms. Long Legs",
    "img": null,
    "code": "SpiderTruck_VC000"
  },
  {
    "name": "Surf Chopper",
    "img": null,
    "code": "SurfChopper_VC000"
  },
  {
    "name": "Sally's Swamp Boat",
    "img": null,
    "code": "SwampBoat_VC60068"
  },
  {
    "name": "Taco Dragito",
    "img": null,
    "code": "TacoDragito_VC000"
  },
  {
    "name": "Taco Dirtito",
    "img": null,
    "code": "TacoDragito_VC001"
  },
  {
    "name": "Tanker Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10184_prod.jpg",
    "code": "TankerTruck_10184"
  },
  {
    "name": "Plow Tractor",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30353_Prod.jpg",
    "code": "TractorPlow_30353"
  },
  {
    "name": "Twopedo",
    "img": null,
    "code": "Traffic_BB_01Boat"
  },
  {
    "name": "School Skipper",
    "img": null,
    "code": "Traffic_BB_02Boat"
  },
  {
    "name": "Liquid Curve",
    "img": null,
    "code": "Traffic_BB_03Boat"
  },
  {
    "name": "Sea Mantis ",
    "img": null,
    "code": "Traffic_BB_04Boat"
  },
  {
    "name": "H2Ohnomobile",
    "img": null,
    "code": "Traffic_BB_05Boat"
  },
  {
    "name": "BFD Fire Boat",
    "img": null,
    "code": "Traffic_FV_01Boat"
  },
  {
    "name": "Swamp Surfer",
    "img": null,
    "code": "Traffic_FV_02Boat"
  },
  {
    "name": "Overhelper Reef Eater",
    "img": null,
    "code": "Traffic_FV_03Boat"
  },
  {
    "name": "Chumdinger",
    "img": null,
    "code": "Traffic_FV_04Boat"
  },
  {
    "name": "Beach Splasher",
    "img": null,
    "code": "Traffic_FV_05Boat"
  },
  {
    "name": "Royal Sailor ",
    "img": null,
    "code": "Traffic_HV_01Boat"
  },
  {
    "name": "Glow Buggy",
    "img": null,
    "code": "Traffic_HV_02Boat"
  },
  {
    "name": "Mud Skipper",
    "img": null,
    "code": "Traffic_HV_03Boat"
  },
  {
    "name": "Midnight Crawler",
    "img": null,
    "code": "Traffic_HV_04Boat"
  },
  {
    "name": "92 Bereaver Dead Sled",
    "img": null,
    "code": "Traffic_HV_05Boat"
  },
  {
    "name": "Snailleon",
    "img": null,
    "code": "Traffic_HV_06Boat"
  },
  {
    "name": "Sea Revvvenant",
    "img": null,
    "code": "Traffic_HV_07Boat"
  },
  {
    "name": "Bonified",
    "img": null,
    "code": "Traffic_HV_08Boat"
  },
  {
    "name": "Swamp Noodle",
    "img": null,
    "code": "Traffic_HV_09Boat"
  },
  {
    "name": "87 Handel",
    "img": null,
    "code": "Traffic_HV_10Boat"
  },
  {
    "name": "Vintage Taxi",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40532_Prod.png",
    "code": "VintageTaxi_40532"
  },
  {
    "name": "Armored Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60175_Prod.jpg",
    "code": "ArmoredTruck_60175"
  },
  {
    "name": "Monster Burger Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31104_Prod.jpg",
    "code": "BurgerTruck_31104A"
  },
  {
    "name": "Winter Village Post Office Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10222_prod.jpg",
    "code": "ClassicTruck_10222"
  },
  {
    "name": "Christmas Tree Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/40083_prod.jpg",
    "code": "ClassicTruck_40083"
  },
  {
    "name": "Out For the Count",
    "img": null,
    "code": "CountFistula_VC000"
  },
  {
    "name": "Rover Dozer",
    "img": null,
    "code": "FastroStreet_VC000"
  },
  {
    "name": "Flatbed Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10244_prod.jpg",
    "code": "FlatbedTruck_10244"
  },
  {
    "name": "Rocket Transport Flatbed",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60229_Prod.jpg",
    "code": "FlatbedTruck_60229"
  },
  {
    "name": "Friends Buggy",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/41010_prod.jpg",
    "code": "FriendsBuggy_41010"
  },
  {
    "name": "Friends GPSUV",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/41036_prod.jpg",
    "code": "FriendsGPSUV_41036"
  },
  {
    "name": "Green Machine",
    "img": null,
    "code": "GreenMachine_VC000"
  },
  {
    "name": "Traffic Cones",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/70804_prod.jpg",
    "code": "IceCreamVan_70804A"
  },
  {
    "name": "XL Traffic Cones",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/70804_prod.jpg",
    "code": "IceCreamVan_70804B"
  },
  {
    "name": "El Fuego Stunt Truck",
    "img": null,
    "code": "LargeTruck_VC70421"
  },
  {
    "name": "Lightning Bug",
    "img": null,
    "code": "LightningBug_VC000"
  },
  {
    "name": "Minecart A",
    "img": null,
    "code": "MinecartSetA_VC000"
  },
  {
    "name": "Minecart B",
    "img": null,
    "code": "MinecartSetA_VC001"
  },
  {
    "name": "Minecart C",
    "img": null,
    "code": "MinecartSetA_VC002"
  },
  {
    "name": "Mini Excavator",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7246_prod.jpg",
    "code": "MiniExcavator_7246"
  },
  {
    "name": "Unkie's Custom Hotrod",
    "img": null,
    "code": "MonkeyMobile_VC000"
  },
  {
    "name": "Dirt Magnet 4x4",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60027_prod.jpg",
    "code": "MonsterTruck_60027"
  },
  {
    "name": "Wulf",
    "img": null,
    "code": "MonsterTruck_VC000"
  },
  {
    "name": "Out House Boat",
    "img": null,
    "code": "OutHouseBoat_VC000"
  },
  {
    "name": "Howser's P59 PlaneBoat",
    "img": null,
    "code": "P59PlaneBoat_VC000"
  },
  {
    "name": "City Starter Paramedic",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60023_prod.jpg",
    "code": "ParamedicVan_60023"
  },
  {
    "name": "Police K-9 Unit",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7285_prod.jpg",
    "code": "PoliceK9Truck_7285"
  },
  {
    "name": "Rocket Boat",
    "img": null,
    "code": "RocketBoat_VC31103"
  },
  {
    "name": "Rocket Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31103_Prod.jpg",
    "code": "RocketTruck_31103A"
  },
  {
    "name": "Rocket Buggy",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31103_Prod.jpg",
    "code": "RocketTruck_31103B"
  },
  {
    "name": "Science Buggy",
    "img": null,
    "code": "ScienceBuggy_VC000"
  },
  {
    "name": "Space Rover",
    "img": null,
    "code": "ScienceHover_6875A"
  },
  {
    "name": "Space Rover Off-road",
    "img": null,
    "code": "ScienceHover_6875B"
  },
  {
    "name": "Mobile Tracking Station",
    "img": null,
    "code": "ScienceStation_452"
  },
  {
    "name": "Security Scooter",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30352_Prod.jpg",
    "code": "SecurityCart_30352"
  },
  {
    "name": "Security Cart",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60136_Prod.jpg",
    "code": "SecurityCart_60136"
  },
  {
    "name": "Service Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60073_Prod.jpg",
    "code": "ServiceTruck_60073"
  },
  {
    "name": "Shadow Thunder",
    "img": null,
    "code": "ShadowMinionStreet"
  },
  {
    "name": "Shadow Z-Wave",
    "img": null,
    "code": "ShadowZ_Boat_VC000"
  },
  {
    "name": "Orb Weaver",
    "img": null,
    "code": "SpiderStreet_VC000"
  },
  {
    "name": "Street Muscle",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31127_Prod.png",
    "code": "StreetRacer_31127A"
  },
  {
    "name": "Evaporator",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31127_Prod.png",
    "code": "StreetRacer_31127B"
  },
  {
    "name": "Ripped Roadster",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31127_Prod.png",
    "code": "StreetRacer_31127C"
  },
  {
    "name": "Street Sweeper",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7242_prod.jpg",
    "code": "StreetSweeper_7242"
  },
  {
    "name": "Street Sweeper",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/8404_prod.jpg",
    "code": "StreetSweeper_8404"
  },
  {
    "name": "Extreme Engines Race Car",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31072_Prod.jpg",
    "code": "SuperF1Racer_31072"
  },
  {
    "name": "Utility Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60152_Prod.jpg",
    "code": "UtilityTruck_60152"
  },
  {
    "name": "River Chase Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7625_prod.jpg",
    "code": "AmphibiousBoat_7625"
  },
  {
    "name": "$eaWorth-y",
    "img": null,
    "code": "ChamferedBoat_VC000"
  },
  {
    "name": "Cleaning Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60317_Prod.png",
    "code": "CleaningTruck_60317"
  },
  {
    "name": "Clutch's Classic Off-road",
    "img": null,
    "code": "ClutchOffroad_VC000"
  },
  {
    "name": "Cruller Carriage",
    "img": null,
    "code": "DonutCarriage_VC000"
  },
  {
    "name": "Off-road Fire Inflatable",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7213_prod.jpg",
    "code": "FireInflatable_7213"
  },
  {
    "name": "Fire Speedboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30220_prod.jpg",
    "code": "FireSpeedboat_30220"
  },
  {
    "name": "Fishing Boat",
    "img": null,
    "code": "FishingBoat_VC70442"
  },
  {
    "name": "Flatbed Truck (Empty)",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60017_prod.jpg",
    "code": "FlatbedTruck_60017A"
  },
  {
    "name": "The Fusion Juggernaut",
    "img": null,
    "code": "FusionOffroad_VC000"
  },
  {
    "name": "Justa Plane Car",
    "img": null,
    "code": "GothaPlaneCar_VC000"
  },
  {
    "name": "Lil' Yellow Speedster",
    "img": null,
    "code": "HyperSpeed_VC60389A"
  },
  {
    "name": "Lil' Blue Speedster",
    "img": null,
    "code": "HyperSpeed_VC60389B"
  },
  {
    "name": "Iced Mug Minion",
    "img": null,
    "code": "MugBoatMinion_VC000"
  },
  {
    "name": "Police K9 Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60048_prod.jpg",
    "code": "PoliceK9Truck_60048"
  },
  {
    "name": "Rail Excavator",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60186_Prod.jpg",
    "code": "RailExcavator_60186"
  },
  {
    "name": "Shadow Duster",
    "img": null,
    "code": "ShadowMinionOffroad"
  },
  {
    "name": "Simple Tow Truck",
    "img": null,
    "code": "SimpleTowTruck_6397"
  },
  {
    "name": "Vehicle_Name.SimpleTowTruck_6628",
    "img": null,
    "code": "SimpleTowTruck_6628"
  },
  {
    "name": "Friends Speedboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/3937_prod.jpg",
    "code": "SmallSpeedboat_3937"
  },
  {
    "name": "Hydro Racer",
    "img": null,
    "code": "SmallSpeedboat_6537"
  },
  {
    "name": "Street Maintenance Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60152_Prod.jpg",
    "code": "StreetSweeper_60152"
  },
  {
    "name": "Tanker Truck",
    "img": null,
    "code": "TankerTruck_VC10184"
  },
  {
    "name": "The Box Set Boat",
    "img": null,
    "code": "TheBoxSetBoat_VC000"
  },
  {
    "name": "The Box Set Off-road",
    "img": null,
    "code": "TheBoxSetDirt_VC000"
  },
  {
    "name": "Tourpedo",
    "img": null,
    "code": "Traffic_BB_01Street"
  },
  {
    "name": "The Reeducator",
    "img": null,
    "code": "Traffic_BB_02Street"
  },
  {
    "name": "Liquid Curve Touring",
    "img": null,
    "code": "Traffic_BB_03Street"
  },
  {
    "name": "Drag Mantis ",
    "img": null,
    "code": "Traffic_BB_04Street"
  },
  {
    "name": "Sidewalk Sprinter",
    "img": null,
    "code": "Traffic_BB_05Street"
  },
  {
    "name": "BFD Ladder Truck",
    "img": null,
    "code": "Traffic_FV_01Street"
  },
  {
    "name": "Street Surfer",
    "img": null,
    "code": "Traffic_FV_02Street"
  },
  {
    "name": "Overhelper Leaf Eater",
    "img": null,
    "code": "Traffic_FV_03Street"
  },
  {
    "name": "BackSass Custom",
    "img": null,
    "code": "Traffic_FV_04Street"
  },
  {
    "name": "Beach Runner",
    "img": null,
    "code": "Traffic_FV_05Street"
  },
  {
    "name": "Royal Outtaliner ",
    "img": null,
    "code": "Traffic_HV_01Street"
  },
  {
    "name": "Glow Buggy III",
    "img": null,
    "code": "Traffic_HV_02Street"
  },
  {
    "name": "Dirt Dragger",
    "img": null,
    "code": "Traffic_HV_03Street"
  },
  {
    "name": "Midnight Baller",
    "img": null,
    "code": "Traffic_HV_04Street"
  },
  {
    "name": "92 Bereaver Wagon",
    "img": null,
    "code": "Traffic_HV_05Street"
  },
  {
    "name": "Snailleon Speed Wagon",
    "img": null,
    "code": "Traffic_HV_06Street"
  },
  {
    "name": "Street Revvvenant",
    "img": null,
    "code": "Traffic_HV_07Street"
  },
  {
    "name": "Bone Crawler",
    "img": null,
    "code": "Traffic_HV_08Street"
  },
  {
    "name": "Street Noodle",
    "img": null,
    "code": "Traffic_HV_09Street"
  },
  {
    "name": "Street Musician",
    "img": null,
    "code": "Traffic_HV_10Street"
  },
  {
    "name": "Airport Baggage Cart",
    "img": null,
    "code": "AirportBaggage_VC000"
  },
  {
    "name": "Buzzo's Royal Rig",
    "img": null,
    "code": "BuzzosRoyalRig_VC000"
  },
  {
    "name": "Buzzo's Royal Rod",
    "img": null,
    "code": "BuzzosRoyalRod_VC000"
  },
  {
    "name": "Dirty Money 4x4",
    "img": null,
    "code": "ChamferedTruck_VC000"
  },
  {
    "name": "Hot Mess",
    "img": null,
    "code": "DumpsterMobile_VC000"
  },
  {
    "name": "Inflatable Rescue Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60373_Prod.png",
    "code": "FireRescueBoat_60373"
  },
  {
    "name": "Classic Flatbed Truck",
    "img": null,
    "code": "FlatbedTruck_VC10229"
  },
  {
    "name": "Flying Lunchman",
    "img": null,
    "code": "FlyingLunchman_VC000"
  },
  {
    "name": "Friends News Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/41056_prod.jpg",
    "code": "FriendsNewsVan_41056"
  },
  {
    "name": "Vehicle_Name.Go-KartRacer_VC30589",
    "img": null,
    "code": "Go-KartRacer_VC30589"
  },
  {
    "name": "Justa Plane Boat",
    "img": null,
    "code": "GothaPlaneBoat_VC000"
  },
  {
    "name": "Unmarked Squad Car",
    "img": null,
    "code": "GovInterceptor_VC000"
  },
  {
    "name": "Unmarked Squad Car V2",
    "img": null,
    "code": "GovInterceptor_VC001"
  },
  {
    "name": "Speedy Weenie Jr.",
    "img": null,
    "code": "HotdogTruck_VC41129A"
  },
  {
    "name": "Speedy Weenie",
    "img": null,
    "code": "HotdogTruck_VC41129B"
  },
  {
    "name": "Inflatable Raceboat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60005_prod.jpg",
    "code": "InflatableBoat_60005"
  },
  {
    "name": "Patrol Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60014_prod.jpg",
    "code": "InflatableBoat_60014"
  },
  {
    "name": "Coast Guard Rescue Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60168_Prod.jpg",
    "code": "InflatableBoat_60168"
  },
  {
    "name": "Lightning Sword",
    "img": null,
    "code": "LightningSword_VC000"
  },
  {
    "name": "Machio Beast",
    "img": null,
    "code": "MachioWidebody_VC000"
  },
  {
    "name": "Money Transporter",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60142_Prod.jpg",
    "code": "MoneyTransport_60142"
  },
  {
    "name": "Cargo Train Bank Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60198_Prod.jpg",
    "code": "MoneyTransport_60198"
  },
  {
    "name": "Vehicle_Name.MonsterTruck_VC30594",
    "img": null,
    "code": "MonsterTruck_VC30594"
  },
  {
    "name": "4x4 Adventurer",
    "img": null,
    "code": "MonsterTruck_VC60387"
  },
  {
    "name": "Rock Monster Truck",
    "img": null,
    "code": "MonsterTrunk_VC30594"
  },
  {
    "name": "Organ Donor Boat",
    "img": null,
    "code": "OrganDonorBoat_VC000"
  },
  {
    "name": "Classic Police Cruiser",
    "img": null,
    "code": "PoliceCarQuest_VC000"
  },
  {
    "name": "Prison Transport",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/7286_prod.jpg",
    "code": "PrisonTransport_7286"
  },
  {
    "name": "Shadow Z-Ray",
    "img": null,
    "code": "ShadowZ_Street_VC000"
  },
  {
    "name": "Coast Guard Raft",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/4210_prod.jpg",
    "code": "SmallInflatable_4210"
  },
  {
    "name": "Vehicle_Name.SuperMuscleCar_30577",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/30577_Prod.jpg",
    "code": "SuperMuscleCar_30577"
  },
  {
    "name": "Vehicle_Name.Supersonic-jet_31126",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31126_Prod.png",
    "code": "Supersonic-jet_31126"
  },
  {
    "name": "4xTwopedo",
    "img": null,
    "code": "Traffic_BB_01Offroad"
  },
  {
    "name": "The Educator",
    "img": null,
    "code": "Traffic_BB_02Offroad"
  },
  {
    "name": "Liquid Curve Adventurer",
    "img": null,
    "code": "Traffic_BB_03Offroad"
  },
  {
    "name": "Sand Mantis",
    "img": null,
    "code": "Traffic_BB_04Offroad"
  },
  {
    "name": "Dune Sprinter",
    "img": null,
    "code": "Traffic_BB_05Offroad"
  },
  {
    "name": "BFD Heavy Rescue",
    "img": null,
    "code": "Traffic_FV_01Offroad"
  },
  {
    "name": "Dirt Surfer",
    "img": null,
    "code": "Traffic_FV_02Offroad"
  },
  {
    "name": "Overhelper Dirt Eater",
    "img": null,
    "code": "Traffic_FV_03Offroad"
  },
  {
    "name": "BrickBilt 39",
    "img": null,
    "code": "Traffic_FV_04Offroad"
  },
  {
    "name": "Beach Hopper",
    "img": null,
    "code": "Traffic_FV_05Offroad"
  },
  {
    "name": "Royal People Rover",
    "img": null,
    "code": "Traffic_HV_01Offroad"
  },
  {
    "name": "Glow Buggy Off-road",
    "img": null,
    "code": "Traffic_HV_02Offroad"
  },
  {
    "name": "Boulder Basher",
    "img": null,
    "code": "Traffic_HV_03Offroad"
  },
  {
    "name": "Midnight Hawler",
    "img": null,
    "code": "Traffic_HV_04Offroad"
  },
  {
    "name": "92 Bereaver ",
    "img": null,
    "code": "Traffic_HV_05Offroad"
  },
  {
    "name": "Land Snailleon",
    "img": null,
    "code": "Traffic_HV_06Offroad"
  },
  {
    "name": "Revvvenant 4x4",
    "img": null,
    "code": "Traffic_HV_07Offroad"
  },
  {
    "name": "Dirt Napper",
    "img": null,
    "code": "Traffic_HV_08Offroad"
  },
  {
    "name": "Pit Noodle",
    "img": null,
    "code": "Traffic_HV_09Offroad"
  },
  {
    "name": "The Organ Grinder",
    "img": null,
    "code": "Traffic_HV_10Offroad"
  },
  {
    "name": "Airport Transit Shuttle",
    "img": null,
    "code": "TransitShuttle_VC000"
  },
  {
    "name": "Weed Chopper 5000",
    "img": null,
    "code": "WeedKiller5000_VC000"
  },
  {
    "name": "Secret Agent Turbocar",
    "img": null,
    "code": "AgentsTurbocar_VC8634"
  },
  {
    "name": "Big Ol' Tex",
    "img": null,
    "code": "BigOlTexasTruck_VC000"
  },
  {
    "name": "Vehicle_Name.BigOlTexasTruck_VC002",
    "img": null,
    "code": "BigOlTexasTruck_VC002"
  },
  {
    "name": "Kaido Monster",
    "img": null,
    "code": "Bosozoku01Truck_VC000"
  },
  {
    "name": "Chamfered Wagon",
    "img": null,
    "code": "ChamferedStreet_VC000"
  },
  {
    "name": "Clutch's Classic Muscle Car",
    "img": null,
    "code": "ClutchStreetCar_VC000"
  },
  {
    "name": "Vehicle_Name.FF_Dom_DodgeChargerRT",
    "img": null,
    "code": "FF_Dom_DodgeChargerRT"
  },
  {
    "name": "City Starter Fire Response",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60023_prod.jpg",
    "code": "FireResponseVan_60023"
  },
  {
    "name": "Gold Driller Boat",
    "img": null,
    "code": "GoldDrillerBoat_VC000"
  },
  {
    "name": "Justa Plane Truck",
    "img": null,
    "code": "GothaPlaneTruck_VC000"
  },
  {
    "name": "Organ Donor Truck",
    "img": null,
    "code": "OrganDonorTruck_VC000"
  },
  {
    "name": "Police Prison Transport",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60043_prod.jpg",
    "code": "PrisonTransport_60043"
  },
  {
    "name": "Scorpion Detector",
    "img": null,
    "code": "ScienceScorpion_1737B"
  },
  {
    "name": "Science Scorpion",
    "img": null,
    "code": "ScienceScorpion_1737C"
  },
  {
    "name": "Shadow Z-Beast",
    "img": null,
    "code": "ShadowZ_Offroad_VC000"
  },
  {
    "name": "Crook's Raft",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60045_prod.jpg",
    "code": "SmallInflatable_60045"
  },
  {
    "name": "Spooky Carriage",
    "img": null,
    "code": "SpookyCarriage_VC0000"
  },
  {
    "name": "Taco Aguito",
    "img": null,
    "code": "TacoDragitoBoat_VC000"
  },
  {
    "name": "The Box Set Street",
    "img": null,
    "code": "TheBoxSetStreet_VC000"
  },
  {
    "name": "Vehicle_Name.VeroVolt_Street_VC000",
    "img": null,
    "code": "VeroVolt_Street_VC000"
  },
  {
    "name": "Central Airport Fuel Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60261_Prod.jpg",
    "code": "AirportFuelTruck_60261"
  },
  {
    "name": "Armored Transport",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/10973_Prod.png",
    "code": "ArmoredTransport_10973"
  },
  {
    "name": "Kaido Screamer",
    "img": null,
    "code": "Bosozoku01Street_VC000"
  },
  {
    "name": "Buzzo's Royal Barge",
    "img": null,
    "code": "BuzzosRoyalBarge_VC000"
  },
  {
    "name": "Bone Clipper",
    "img": null,
    "code": "FossilFuelerBoat_VC000"
  },
  {
    "name": "Foul Runnings Boat",
    "img": null,
    "code": "FoulRunningsBoat_VC000"
  },
  {
    "name": "Gold Driller Truck",
    "img": null,
    "code": "GoldDrillerTruck_VC000"
  },
  {
    "name": "Mr. Mean Green's Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31056_Prod.jpg",
    "code": "GreenCruiserBoat_31056"
  },
  {
    "name": "Holiday Camper Van",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60283_Prod.jpg",
    "code": "HolidayCamperVan_60283"
  },
  {
    "name": "Horse Transporter",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60327_Prod.png",
    "code": "HorseTransporter_60327"
  },
  {
    "name": "Hot Garbage",
    "img": null,
    "code": "HotGarbageStreet_VC000"
  },
  {
    "name": "Police 4x4 Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60172_Prod.jpg",
    "code": "LargePoliceTruck_60172"
  },
  {
    "name": "Steamed Mug Minion",
    "img": null,
    "code": "MugSteamedMinion_VC000"
  },
  {
    "name": "Organ Donor Street",
    "img": null,
    "code": "OrganDonorStreet_VC000"
  },
  {
    "name": "Police Patrol Boat",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60045_prod.jpg",
    "code": "PoliceInflatable_60045"
  },
  {
    "name": "Rugged Police Chaser",
    "img": null,
    "code": "PoliceTruckQuest_VC000"
  },
  {
    "name": "Wave Police Chaser",
    "img": null,
    "code": "PoliceWaterQuest_VC000"
  },
  {
    "name": "Repair Truck",
    "img": null,
    "code": "SimpleRepairTruck_1518"
  },
  {
    "name": "Repair Truck",
    "img": null,
    "code": "SimpleRepairTruck_6521"
  },
  {
    "name": "Service Truck",
    "img": null,
    "code": "SimpleServiceTruck_646"
  },
  {
    "name": "Super Muscle Car",
    "img": null,
    "code": "SuperMuscleCar_VC30577"
  },
  {
    "name": "Utility Line Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60141_Prod.jpg",
    "code": "UtilityLineTruck_60141"
  },
  {
    "name": "Chicken Hauler",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60344_Prod.png",
    "code": "AllTerrainVehicle_60344"
  },
  {
    "name": "Cargo Train Forklift",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60198_Prod.jpg",
    "code": "ConstructionBuggy_60198"
  },
  {
    "name": "Capital City Crane Buggy",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60200_Prod.jpg",
    "code": "ConstructionBuggy_60200"
  },
  {
    "name": "Monster Doughnut",
    "img": null,
    "code": "DonutMonsterTruck_VC000"
  },
  {
    "name": "Vehicle_Name.FirefightingTruck_60320",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60320_Prod.png",
    "code": "FirefightingTruck_60320"
  },
  {
    "name": "Foul Runnings Truck",
    "img": null,
    "code": "FoulRunningsTruck_VC000"
  },
  {
    "name": "Gold Driller Street",
    "img": null,
    "code": "GoldDrillerStreet_VC000"
  },
  {
    "name": "Vehicle_Name.RocketTruck_31103B_Wide",
    "img": null,
    "code": "RocketTruck_31103B_Wide"
  },
  {
    "name": "Vehicle_Name.TransporteVehicle_60343",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60343_Prod.png",
    "code": "TransporteVehicle_60343"
  },
  {
    "name": "Skull Rocket",
    "img": null,
    "code": "FossilFuelerStreet_VC000"
  },
  {
    "name": "Foul Runnings Street",
    "img": null,
    "code": "FoulRunningsStreet_VC000"
  },
  {
    "name": "Sunny's Wheels",
    "img": null,
    "code": "GreaseMonkeyStreet_VC000"
  },
  {
    "name": "Lunar Roving Vehicle",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60348_Prod.png",
    "code": "LunarRovingVehicle_60348"
  },
  {
    "name": "McLaren F1 LM",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/76918_Prod.png",
    "code": "McLarenF1GT_Street_76918"
  },
  {
    "name": "Vehicle_Name.Road-and-railTruck_60335",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60335_Prod.png",
    "code": "Road-and-railTruck_60335"
  },
  {
    "name": "Vehicle_Name.RocketRacer_Street_VC000",
    "img": null,
    "code": "RocketRacer_Street_VC000"
  },
  {
    "name": "Vehicle_Name.FF_Brian_NissanSkylineGTR",
    "img": null,
    "code": "FF_Brian_NissanSkylineGTR"
  },
  {
    "name": "Vehicle_Name.FireFightingTruck_VC60393",
    "img": null,
    "code": "FireFightingTruck_VC60393"
  },
  {
    "name": "Gold Rush Minion Truck",
    "img": null,
    "code": "GoldRushMinionTruck_VC000"
  },
  {
    "name": "Mr. Mean Green's Semi",
    "img": null,
    "code": "GreenCruiserTruck_VC31056"
  },
  {
    "name": "Classic Police Cruiser",
    "img": null,
    "code": "PoliceCarQuestReward_VC000"
  },
  {
    "name": "Space Rover Explorer",
    "img": null,
    "code": "SpaceRoverExplorer_VC31107"
  },
  {
    "name": "Cattle Driver",
    "img": null,
    "code": "BigOlTexasConvertible_VC000"
  },
  {
    "name": "Mr. Mean Green's Cruiser ",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/31056_Prod.jpg",
    "code": "GreenCruiserStreetCar_31056"
  },
  {
    "name": "McLaren Solus GT",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/76918_Prod.png",
    "code": "McLarenSolusGT_Street_76918"
  },
  {
    "name": "Racey McRaceFace",
    "img": null,
    "code": "RaceyMcRaceFaceStreet_VC000"
  },
  {
    "name": "Steamshark",
    "img": null,
    "code": "HeadlessHorsepowerBoat_VC000"
  },
  {
    "name": "Rugged Police Chaser",
    "img": null,
    "code": "PoliceTruckQuestReward_VC000"
  },
  {
    "name": "Wave Police Chaser",
    "img": null,
    "code": "PoliceWaterQuestReward_VC000"
  },
  {
    "name": "Cranium Insanium",
    "img": null,
    "code": "RivalSkellieOffroader_VC0000"
  },
  {
    "name": "Off-Rail/Road Racer",
    "img": null,
    "code": "HeadlessHorsepowerOffroad_VC000"
  },
  {
    "name": "Ice Cream Truck",
    "img": "https://www.lego.com/cdn/product-assets/product.img.pri/60314_Prod.png",
    "code": "IceCreamTruckPoliceChase_60314B"
  },
  {
    "name": "Fusionmobile",
    "img": null,
    "code": "RivalMadScientistStreetCar_VC0000"
  },
  {
    "name": "Vehicle_Name.RocketTruck_31103B_Wide_XtraRanck",
    "img": null,
    "code": "RocketTruck_31103B_Wide_XtraRanck"
  },
  {
    "name": "Horseless Carriage 2020",
    "img": null,
    "code": "RivalHeadlessHorsepowerStreetCar_VC0000"
  }
]