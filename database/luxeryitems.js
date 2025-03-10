let items = {
  luxeryitems: {
    cars: [
      {
        name: "Audi A8",
        price: 100000,
        image:
          "https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/a8/my2020/1920x1080-gal-prop-tx/A8-1920x1080.jpg",
      },
      {
        name: "BMW 7 Series",
        price: 120000,
        image:
          "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/models/7-series/sedan/2020/inspire/bmw-7-series-sedan-inspire-02.jpg",
      },
      {
        name: "Mercedes S Class",
        price: 130000,
        image:
          "https://www.mercedes-benz.com/en/vehicles/passenger-cars/s-class/s-class-sedan/_jcr_content/root/slider/sliderchilditems/slideritem/image/MQ7-0-image-20200622161140/01-mercedes-benz-s-class-sedan-2020-mercedes-benz-s-560-4matic-sedan-c-217-3400x1440.jpeg",
      },
    ],
    watches: [
      {
        name: "Rolex",
        price: 50000,
        image:
          "https://www.rolex.com/content/dam/rolex-website/2021/homepage/selection/selection-2021.jpg",
      },
      {
        name: "Omega",
        price: 30000,
        image:
          "https://www.omegawatches.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/",
      },
      {
        name: "Tag Heuer",
        price: 20000,
        image:
          "https://www.tagheuer.com/content/dam/brand/2021/homepage/selection/selection-2021.jpg",
      },
    ],
    houses: [
      {
        name: "White House",
        price: 1000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/1e/White_House%2C_Washington%2C_D.C..jpg",
      },
      {
        name: "Buckingham Palace",
        price: 2000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9e/Buckingham_Palace%2C_London_-_April_2009.jpg",
      },
      {
        name: "Antilia",
        price: 3000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Antilia%2C_Mumbai.jpg",
      },
    ],
    yachts: [
      {
        name: "Eclipse",
        price: 5000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5b/Eclipse_%28yacht%29.jpg",
      },
      {
        name: "Azzam",
        price: 6000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8f/Azzam_%28yacht%29.jpg",
      },
      {
        name: "Dubai",
        price: 7000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dubai_%28yacht%29.jpg",
      },
    ],
    jets: [
      {
        name: "Boeing 747",
        price: 10000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8b/Boeing_747-8_in_flight.jpg",
      },
      {
        name: "Airbus A380",
        price: 20000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6f/Airbus_A380-841_%28Lufthansa%29_AN2107208.jpg",
      },
      {
        name: "Gulfstream G650",
        price: 30000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8c/Gulfstream_G650_N650GD_01.jpg",
      },
    ],
    Army: [
      {
        name: "M1 Abrams",
        price: 5000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9d/M1A2_Abrams_Tank.jpg",
      },
      {
        name: "F-22 Raptor",
        price: 10000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2f/F-22_Raptor_in_flight.jpg",
      },
      {
        name: "Nimitz-class aircraft carrier",
        price: 100000000,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/USS_Nimitz_%28CVN-68%29_in_the_Persian_Gulf.jpg",
      },
    ],
  },
};

let Crypto_price = {
  BTC: 50000,
  ETH: 2000,
  XRP: 1,
  LTC: 200,
  DOGE: 0.5,
};

let Currency_price = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  INR: 75,
  JPY: 100,
};

// how many items I can my crypto portfolio
let crypto_portfolio = {
  BTC: 1,
  ETH: 2,
  XRP: 100,
  LTC: 5,
  DOGE: 1000,
};

function get_crypto_price(crypto) {
  return Crypto_price[crypto];
}

function cheak_if_i_can_buy_item(item) {
  let total_price = 0;
  for (let i = 0; i < items.luxeryitems[item].length; i++) {
    total_price += items.luxeryitems[item][i].price;
  }
  return total_price;
}
