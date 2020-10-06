const fakeData = [
  {
    id: '1',
    title: 'Chicken Tomato Pulao',
    subTitle: 'Bon Appetit',
    description:
      'A classic yakhni pulao is meticulously prepared by simmering basmati rice in an aromatic chicken, lamb, or goat broth. In this version, chicken thighs are simmered in a spiced tomato base along with rice and whole spices like cinnamon and bay leaf. ',
    type: 'Lunch',
    price: '29',
    image: 'https://i.ibb.co/0BCSRct/lunch1.png',
  },
  {
    id: '2',
    title: 'Aloo Paratha',
    subTitle: 'Bon Appetit',
    description:
      'If making bread has long intimidated you, start here. Parathas come in many shapes, textures, and flavors across Asia—they are perfect for dipping into dals and stews or eating alongside assorted condiments. This take, which Priya Krishna learned from her aunt Rachna, is really simple: a basic wheat-based dough stuffed with silky spiced potatoes. ',
    type: 'Breakfast',
    price: '22',
    image: 'https://i.ibb.co/rw3b9V8/breakfast1.png',
  },
  {
    id: '3',
    title: 'Hanger Steak With Chimol',
    subTitle: 'Bon Appetit',
    description:
      'Crisp, peppery radishes take center stage in this fresh limey Salvadoran salsa. ',
    type: 'Lunch',
    price: '49',
    image: 'https://i.ibb.co/W0624qB/lunch2.png',
  },
  {
    id: '4',
    title: 'Camarones con Relajo',
    subTitle: 'Bon Appetit',
    description:
      'The glory of head-on shrimp is sucking all the sweet, briny juices out of their heads. ',
    type: 'Lunch',
    price: '59',
    image: 'https://i.ibb.co/KXF0J7Z/lunch3.png',
  },
  {
    id: '5',
    title: 'Pollo en Chicha',
    subTitle: 'Bon Appetit',
    description:
      'Salvadoran chicken braised in fizzy and tangy pineapple chicha from Anthony Salguero of Popoca in Oakland. ',
    type: 'Lunch',
    price: '39',
    image: 'https://i.ibb.co/FJWWg5J/lunch4.png',
  },
  {
    id: '6',
    title: 'Tomato Choka',
    subTitle: 'Bon Appetit',
    description:
      'In this Trinidadian dish chopped onions, peppers, and chiles get sizzled in hot oil before they’re poured over broiled peak-season tomatoes. ',
    type: 'Lunch',
    price: '19',
    image: 'https://i.ibb.co/LZ34RRx/lunch5.png',
  },
  {
    id: '7',
    title: 'Sai Ua Samun Phrai',
    subTitle: 'Bon Appetit',
    description:
      ' It has a vibrant flavor from the slew of herbs and spices that get mixed in. It’s what started his journey into exploring Thai food and his own roots. ',
    type: 'Lunch',
    price: '59',
    image: 'https://i.ibb.co/7kkmtSV/lunch6.png',
  },
  {
    id: '8',
    title: 'Fruit Chow',
    subTitle: 'Bon Appetit',
    description:
      ' A simple and refreshing Trinidadian chow made with pineapple or mango. ',
    type: 'Breakfast',
    price: '19',
    image: 'https://i.ibb.co/ZfR7Dnv/breakfast2.png',
  },
  {
    id: '9',
    title: 'Yum Phonlamai',
    subTitle: 'Bon Appetit',
    description:
      ' The interplay between the fish sauce, chiles, and sweet juicy fruits makes this a simple but refreshing dish. ',
    type: 'Breakfast',
    price: '29',
    image: 'https://i.ibb.co/Pr8NRg4/breakfast3.png',
  },
  {
    id: '10',
    title: 'Khai Jiao',
    subTitle: 'Bon Appetit',
    description:
      ' An ultralight and puffy Thai omelet with crispy golden brown edges. ',
    type: 'Breakfast',
    price: '33',
    image: 'https://i.ibb.co/VjQKMkk/breakfast4.png',
  },
  {
    id: '11',
    title: 'Fall Larb',
    subTitle: 'Bon Appetit',
    description:
      ' A rebellious take on a Thai classic from chef Parnass Savang of Atlanta’s Talat Market. ',
    type: 'Breakfast',
    price: '37',
    image: 'https://i.ibb.co/tzWqfFF/breakfast5.png',
  },
  {
    id: '12',
    title: 'Onigiri Three Ways',
    subTitle: 'Bon Appetit',
    description:
      ' This recipe makes 3–4 balls of each type (tuna, umeboshi, and kimchi). If you only want one flavor, simply increase your filling of choice. ',
    type: 'Breakfast',
    price: '66',
    image: 'https://i.ibb.co/2jwhwtF/breakfast6.png',
  },
  {
    id: '13',
    title: 'Phanaeng-Curry Beef',
    subTitle: 'Bon Appetit',
    description:
      'Leela Punyaratabandhu’s phanaeng-marinated beef skewers belong at your next barbecue.  ',
    type: 'Dinner',
    price: '52',
    image:
      'https://assets.bonappetit.com/photos/5f6e4447405672755aa18516/16:9/w_1024,c_limit/Basically-Chicken-Palao.jpg',
  },
  {
    id: '14',
    title: 'Short Rib Tacos',
    subTitle: 'Bon Appetit',
    description:
      'Short ribs aren’t just for braising. Boneless short ribs in particular can be grilled like steak, but be sure to cook them to medium doneness, just long enough to render fat and tenderize.  ',
    type: 'Dinner',
    price: '69',
    image:
      'https://assets.bonappetit.com/photos/5f6e4447405672755aa18516/16:9/w_1024,c_limit/Basically-Chicken-Palao.jpg',
  },
  {
    id: '15',
    title: 'Open-Face Eggplant Sandwiches',
    subTitle: 'Bon Appetit',
    description:
      'For this dinner-worthy sandwich, you’ll sear the eggplant on the stove, then marinate it in oil and vinegar to make it silky-soft and flavor-packed.',
    type: 'Dinner',
    price: '31',
    image:
      'https://assets.bonappetit.com/photos/5f6e4447405672755aa18516/16:9/w_1024,c_limit/Basically-Chicken-Palao.jpg',
  },
  {
    id: '16',
    title: 'Creamy Lemon Zucchini Pasta',
    subTitle: 'Bon Appetit',
    description:
      'With the help of the large holes on a box grater, zucchini transforms into a pile of soft shreds. Cook it down with olive oil, onion, and garlic and it becomes a creamy.',
    type: 'Dinner',
    price: '43',
    image:
      'https://assets.bonappetit.com/photos/5f6e4447405672755aa18516/16:9/w_1024,c_limit/Basically-Chicken-Palao.jpg',
  },
  {
    id: '17',
    title: 'Adobo-Style Eggplant',
    subTitle: 'Bon Appetit',
    description:
      'Adobo—both a style of preparation as well as the name of a dish—is one of the most widely known foods of the Philippines, often referred to as its national dish. ',
    type: 'Dinner',
    price: '39',
    image:
      'https://assets.bonappetit.com/photos/5f6e4447405672755aa18516/16:9/w_1024,c_limit/Basically-Chicken-Palao.jpg',
  },
  {
    id: '18',
    title: 'Picadillo',
    subTitle: 'Bon Appetit',
    description:
      'This picadillo is inspired by a version found in San Luis Potosí in central Mexico with potatoes and poblanos. ',
    type: 'Dinner',
    price: '69',
    image:
      'https://assets.bonappetit.com/photos/5f6e4447405672755aa18516/16:9/w_1024,c_limit/Basically-Chicken-Palao.jpg',
  },
];

export default fakeData;
