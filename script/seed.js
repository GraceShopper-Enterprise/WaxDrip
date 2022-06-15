'use strict';

const {
  db,
  models: { User, Emotion, Order, Cart, Wishlist, OrderEmotion },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'Tomkin Winkle',
      password: 'DlBh2fxZ84',
      email: 'twinkle0@godaddy.com',
      type: 'customer',
    }),
    User.create({
      username: 'Karoly Fills',
      password: 'KWWMuauWW9',
      email: 'kfills1@sbwire.com',
      type: 'customer',
    }),
    User.create({
      username: 'Thurstan Gruby',
      password: 'bPIMNKb',
      email: 'tgruby2@upenn.edu',
      type: 'customer',
    }),
    User.create({
      username: 'Robby Eggleson',
      password: 'yG1zRI',
      email: 'reggleson3@ning.com',
      type: 'customer',
    }),
    User.create({
      username: 'Kaja Stracey',
      password: 'qq44IhSGy',
      email: 'kstracey4@prnewswire.com',
      type: 'customer',
    }),
    User.create({
      username: 'Darrick Clows',
      password: 'kQbl8oG',
      email: 'dclows5@seattletimes.com',
      type: 'customer',
    }),
    User.create({
      username: 'Dew Ledwith',
      password: 'o9XVzS',
      email: 'dledwith6@answers.com',
      type: 'customer',
    }),
    User.create({
      username: 'Dennis Saggers',
      password: 'IlYGT41nFJT',
      email: 'dsaggers7@answers.com',
      type: 'customer',
    }),
    User.create({
      username: 'Jesus MacRorie',
      password: 'NItYo47e01k',
      email: 'jmacrorie8@csmonitor.com',
      type: 'customer',
    }),
    User.create({
      username: 'Antin Brood',
      password: 'O8PHgkfGNfiS',
      email: 'abrood9@miibeian.gov.cn',
      type: 'customer',
    }),
    User.create({
      username: 'Ericha Joffe',
      password: '6e85n5jl2HT7',
      email: 'ejoffea@go.com',
      type: 'customer',
    }),
    User.create({
      username: 'Shelia HURLeston',
      password: '5IGRxF',
      email: 'shURLestonb@naver.com',
      type: 'customer',
    }),
    User.create({
      username: 'Janna Craigg',
      password: 'meFIUnMC6fL',
      email: 'jcraiggc@cafepress.com',
      type: 'customer',
    }),
    User.create({
      username: 'Tammy Stanesby',
      password: 'aLZLVCJO',
      email: 'tstanesbyd@github.io',
      type: 'customer',
    }),
    User.create({
      username: 'Zonnya Dulinty',
      password: 'Y4PiMO',
      email: 'zdulintye@tamu.edu',
      type: 'customer',
    }),
    User.create({
      username: 'Sterne Prangnell',
      password: 'amyQCr5w5A7c',
      email: 'sprangnellf@newyorker.com',
      type: 'customer',
    }),
    User.create({
      username: 'Hailey McCombe ',
      password: 'K1cZ5UkZ2Xz',
      email: 'hmcg@hibu.com',
      type: 'customer',
    }),
    User.create({
      username: 'Leshia Milesop',
      password: 'WYqhzSeix',
      email: 'lmilesoph@goodreads.com',
      type: 'customer',
    }),
    User.create({
      username: 'Shannah Bernardino',
      password: 'K0nZDcvsDXxL',
      email: 'sbernardinoi@shinystat.com',
      type: 'customer',
    }),
    User.create({
      username: 'Hildegarde Sorbey',
      password: 'IznGUjk',
      email: 'hsorbeyj@odnoklassniki.ru',
      type: 'customer',
    }),
    User.create({
      username: 'Sibylle Rounsefell',
      password: 'eXARqIcBhKTJ',
      email: 'srounsefellk@microsoft.com',
      type: 'customer',
    }),
    User.create({
      username: 'Roxy Skeldinge',
      password: 'P2PYJukMGkz',
      email: 'rskeldingel@harvard.edu',
      type: 'customer',
    }),
    User.create({
      username: 'Hernando Bonnett',
      password: 'wj3AbGX',
      email: 'hbonnettm@amazon.co.uk',
      type: 'customer',
    }),
    User.create({
      username: 'Abigale Pedlingham',
      password: 'wnFWUqhTfL2M',
      email: 'apedlinghamn@huffingtonpost.com',
      type: 'customer',
    }),
    User.create({
      username: 'Ranee Yoxall',
      password: '2R2QIKGs8MkC',
      email: 'ryoxallo@msn.com',
      type: 'customer',
    }),
    User.create({
      username: 'Paddie LeFranc ',
      password: 'eQdKz73O',
      email: 'plep@usa.gov',
      type: 'customer',
    }),
    User.create({
      username: 'Connor Hickisson',
      password: '3HczDg',
      email: 'chickissonq@loc.gov',
      type: 'customer',
    }),
    User.create({
      username: 'Merill McIsaac',
      password: '9YjsNVtZm',
      email: 'mmcisaacr@quantcast.com',
      type: 'customer',
    }),
    User.create({
      username: 'Cinderella Veeler',
      password: 'eOLGiXgKlYL',
      email: 'cveelers@cnn.com',
      type: 'customer',
    }),
    User.create({
      username: 'Violette Drawmer',
      password: 'cHhXs9',
      email: 'vdrawmert@vimeo.com',
      type: 'customer',
    }),
    User.create({
      username: 'Andree Ettery',
      password: 'hNXUp9G97K8',
      email: 'aetteryu@ebay.com',
      type: 'customer',
    }),
    User.create({
      username: 'Klarika Mirams',
      password: '9riSve',
      email: 'kmiramsv@a8.net',
      type: 'customer',
    }),
    User.create({
      username: 'Stevana Dibbe',
      password: '7cLUdcL7up',
      email: 'sdibbew@unblog.fr',
      type: 'customer',
    }),
    User.create({
      username: 'Mayne Badsworth',
      password: '4TdDBSH9N',
      email: 'mbadsworthx@feedburner.com',
      type: 'customer',
    }),
    User.create({
      username: 'Odele Isacsson',
      password: 'TpK14K',
      email: 'oisacssony@bravesites.com',
      type: 'customer',
    }),
    User.create({
      username: 'Justis Mabbutt',
      password: 'goykc71s',
      email: 'jmabbuttz@hubpages.com',
      type: 'customer',
    }),
    User.create({
      username: 'Osmond Lintall',
      password: 'Du2X7wyhlBJ2',
      email: 'olintall10@auda.org.au',
      type: 'customer',
    }),
    User.create({
      username: 'Francine Charette',
      password: 'rasOBF08n',
      email: 'fcharette11@csmonitor.com',
      type: 'customer',
    }),
    User.create({
      username: 'Clarita Jacks',
      password: 'GhFyAc',
      email: 'cjacks12@earthlink.net',
      type: 'customer',
    }),
    User.create({
      username: 'Maximo Goodbar',
      password: '28EeTaX',
      email: 'mgoodbar13@google.ru',
      type: 'customer',
    }),
    User.create({
      username: 'Milt Pelfer',
      password: 'Hid6RFQop',
      email: 'mpelfer14@skype.com',
      type: 'customer',
    }),
    User.create({
      username: 'Hobey Shory',
      password: '0du7ar',
      email: 'hshory15@arstechnica.com',
      type: 'customer',
    }),
    User.create({
      username: 'Geneva Leemans',
      password: 'Qvf1KoQrTTMY',
      email: 'gleemans16@rediff.com',
      type: 'customer',
    }),
    User.create({
      username: 'Kerri Tembey',
      password: '7Is1LZo',
      email: 'ktembey17@loc.gov',
      type: 'customer',
    }),
    User.create({
      username: 'Amandi Mathieu',
      password: 'HiRwolWNMVNG',
      email: 'amathieu18@addthis.com',
      type: 'customer',
    }),
    User.create({
      username: 'Roldan Fogarty',
      password: 'evM8xhPx',
      email: 'rfogarty19@chronoengine.com',
      type: 'customer',
    }),
    User.create({
      username: 'Gayle Padson',
      password: 'LnDyGleeNQsb',
      email: 'gpadson1a@instagram.com',
      type: 'customer',
    }),
    User.create({
      username: 'Cornelius Lethardy',
      password: 'ejqMtE',
      email: 'clethardy1b@merriam-webster.com',
      type: 'customer',
    }),
    User.create({
      username: 'Shel Balharry',
      password: 'XeKup9C',
      email: 'sbalharry1c@sbwire.com',
      type: 'customer',
    }),
    User.create({
      username: 'Nappie Peatt',
      password: 'vRWq5gKw',
      email: 'npeatt1d@blinklist.com',
      type: 'customer',
    }),
    User.create({
      username: 'Christoper Scole',
      password: 'WhnISlA',
      email: 'cscole1e@issuu.com',
      type: 'customer',
    }),
    User.create({
      username: 'Martyn Orchart',
      password: 'w0p5wMRjjc',
      email: 'morchart1f@noaa.gov',
      type: 'customer',
    }),
    User.create({
      username: 'Gennifer Andreasen',
      password: '3ATbvkiS',
      email: 'gandreasen1g@feedburner.com',
      type: 'customer',
    }),
    User.create({
      username: 'Shane McDonough',
      password: 'hQhfCK5gPqi',
      email: 'smcdonough1h@theglobeandmail.com',
      type: 'customer',
    }),
    User.create({
      username: 'Gillie Knell',
      password: 'isRsehj',
      email: 'gknell1i@boston.com',
      type: 'customer',
    }),
    User.create({
      username: 'Diandra Brewis',
      password: 'sviHW5j3H3yG',
      email: 'dbrewis1j@columbia.edu',
      type: 'customer',
    }),
    User.create({
      username: 'Nickie Ianitti',
      password: 'Q4YA0ImrOeHs',
      email: 'nianitti1k@ftc.gov',
      type: 'customer',
    }),
    User.create({
      username: 'Johnette Penrice',
      password: 'Z1CuGkUz3Gu',
      email: 'jpenrice1l@elegantthemes.com',
      type: 'customer',
    }),
    User.create({
      username: 'Lise Lowre',
      password: 'O31wbp5FrbKs',
      email: 'llowre1m@imageshack.us',
      type: 'customer',
    }),
    User.create({
      username: 'Cyrus Daile',
      password: 'S2PPXA',
      email: 'cdaile1n@alibaba.com',
      type: 'customer',
    }),
    User.create({
      username: 'Eilis Filasov',
      password: 'KfuvpoV3s',
      email: 'efilasov1o@reverbnation.com',
      type: 'customer',
    }),
    User.create({
      username: 'Diena Tulleth',
      password: 'iD5MPZrOYUn',
      email: 'dtulleth1p@zdnet.com',
      type: 'customer',
    }),
    User.create({
      username: 'Shaylah Stearne',
      password: '0dV8r84YCf41',
      email: 'sstearne1q@chicagotribune.com',
      type: 'customer',
    }),
    User.create({
      username: 'Belvia OKielt',
      password: 'NKuuv79',
      email: 'bokielt1r@google.com.br',
      type: 'customer',
    }),
    User.create({
      username: 'Ranee Benedite',
      password: 'N8gFsI',
      email: 'rbenedite1s@nationalgeographic.com',
      type: 'customer',
    }),
    User.create({
      username: 'Imogene Delnevo',
      password: 'apA9lnCT2PIJ',
      email: 'idelnevo1t@sphinn.com',
      type: 'customer',
    }),
    User.create({
      username: 'Cora MacAree',
      password: 'AGeqGepEH',
      email: 'cmacaree1u@seattletimes.com',
      type: 'customer',
    }),
    User.create({
      username: 'Cullan Drogan',
      password: 'BUH3v7IborC0',
      email: 'cdrogan1v@ocn.ne.jp',
      type: 'customer',
    }),
    User.create({
      username: 'Lutero Kardos-Stowe',
      password: 'uQJlrQyc',
      email: 'lkardosstowe1w@shutterfly.com',
      type: 'customer',
    }),
    User.create({
      username: 'Alissa Matousek',
      password: 'MRCYzQ',
      email: 'amatousek1x@princeton.edu',
      type: 'customer',
    }),
    User.create({
      username: 'Elisha Couthard',
      password: 'WEqavVx',
      email: 'ecouthard1y@reference.com',
      type: 'customer',
    }),
    User.create({
      username: 'Fidelio Erricker',
      password: 'hUQPtw62x0ld',
      email: 'ferricker1z@forbes.com',
      type: 'customer',
    }),
    User.create({
      username: 'Rockie Greatbatch',
      password: '2kxEdHQMXG',
      email: 'rgreatbatch20@ft.com',
      type: 'customer',
    }),
    User.create({
      username: 'Candida Rollinshaw',
      password: '3jbPfl27rG',
      email: 'crollinshaw21@ibm.com',
      type: 'customer',
    }),
    User.create({
      username: 'Domeniga Bartkiewicz',
      password: '9kKsM6I7',
      email: 'dbartkiewicz22@canalblog.com',
      type: 'customer',
    }),
    User.create({
      username: 'Abeu Glanester',
      password: 'nOrlTGVAsE3G',
      email: 'aglanester23@baidu.com',
      type: 'customer',
    }),
    User.create({
      username: 'Chiarra Philcock',
      password: 'JFzkChsfNj',
      email: 'cphilcock24@over-blog.com',
      type: 'customer',
    }),
    User.create({
      username: 'Bonny Waadenburg',
      password: '5vjyZAD',
      email: 'bwaadenburg25@a8.net',
      type: 'customer',
    }),
    User.create({
      username: 'Seward Tern',
      password: '29eUpmxJyx',
      email: 'stern26@parallels.com',
      type: 'customer',
    }),
    User.create({
      username: 'Pebrook Harbisher',
      password: 'C4Q2JLRsd',
      email: 'pharbisher27@redcross.org',
      type: 'customer',
    }),
    User.create({
      username: 'Arlee Hallifax',
      password: 'YU0tYRb12g9',
      email: 'ahallifax28@livejournal.com',
      type: 'customer',
    }),
    User.create({
      username: 'Dawn Stollman',
      password: 'fmnW1J2vIM',
      email: 'dstollman29@twitter.com',
      type: 'customer',
    }),
    User.create({
      username: 'Carmelle Lenormand',
      password: 'wFk98NFDwI',
      email: 'clenormand2a@wsj.com',
      type: 'customer',
    }),
    User.create({
      username: 'Demetris McElmurray',
      password: 'ZZyKZlE4BSJv',
      email: 'dmcelmurray2b@blogger.com',
      type: 'customer',
    }),
    User.create({
      username: 'Reiko Whitmarsh',
      password: 'gSShQkujoOrB',
      email: 'rwhitmarsh2c@ucsd.edu',
      type: 'customer',
    }),
    User.create({
      username: 'Hillary Blaxley',
      password: '84bd9sgr',
      email: 'hblaxley2d@japanpost.jp',
      type: 'customer',
    }),
    User.create({
      username: 'Adelind Hearle',
      password: 'f02lH5gYd',
      email: 'ahearle2e@sitemeter.com',
      type: 'customer',
    }),
    User.create({
      username: 'Leontyne Tebbet',
      password: '2ve1LL',
      email: 'ltebbet2f@usda.gov',
      type: 'customer',
    }),
    User.create({
      username: 'Ed Gori',
      password: 'YLlzdtgLP',
      email: 'egori2g@mit.edu',
      type: 'customer',
    }),
    User.create({
      username: 'Blake Jewell',
      password: 'nK13030cIoTG',
      email: 'bjewell2h@cbslocal.com',
      type: 'customer',
    }),
    User.create({
      username: 'Winn Snazel',
      password: 'tudAmEichx',
      email: 'wsnazel2i@posterous.com',
      type: 'customer',
    }),
    User.create({
      username: 'Simone Menendez',
      password: 'eBlGTQyPSOe',
      email: 'smenendez2j@creativecommons.org',
      type: 'customer',
    }),
    User.create({
      username: 'Carena Strutz',
      password: 'tuUG8gfK',
      email: 'cstrutz2k@wunderground.com',
      type: 'customer',
    }),
    User.create({
      username: 'Corrie Jefferson',
      password: '22bHUeyZTN',
      email: 'cjefferson2l@mysql.com',
      type: 'customer',
    }),
    User.create({
      username: 'Keen Gussin',
      password: 'NfCluanqxW',
      email: 'kgussin2m@merriam-webster.com',
      type: 'customer',
    }),
    User.create({
      username: 'Leigh Cosgrave',
      password: 'y0qCfVHLdC',
      email: 'lcosgrave2n@forbes.com',
      type: 'customer',
    }),
    User.create({
      username: 'Gigi Bofield',
      password: 'pCZzsmvr7B',
      email: 'gbofield2o@indiatimes.com',
      type: 'customer',
    }),
    User.create({
      username: 'Minna Leathe',
      password: 'sHoQ1uLH',
      email: 'mleathe2p@amazonaws.com',
      type: 'customer',
    }),
    User.create({
      username: 'Carlee Stallan',
      password: 'ukJbu0',
      email: 'cstallan2q@answers.com',
      type: 'customer',
    }),
    User.create({
      username: 'Beverly Fincke',
      password: 'uVQoIaDH',
      email: 'bfincke2r@shinystat.com',
      type: 'customer',
    }),
  ]);

  // creating Emotions
  const emotions = await Promise.all([
    Emotion.create({
      name: 'Green',
      price: 5.02,
      imageURL: 'http://dummyimage.com/176x100.png/dddddd/000000',
      stockQuantity: 30,
      description:
        'viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Pucee',
      price: 12,
      imageURL: 'http://dummyimage.com/111x100.png/cc0000/ffffff',
      stockQuantity: 98,
      description:
        'amet cursus id turpis integer aliquet massa id lobortis convallis',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Teal',
      price: 100,
      imageURL: 'http://dummyimage.com/115x100.png/cc0000/ffffff',
      stockQuantity: 41,
      description:
        'tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet',
      reccomendedEmpathyLevel: 3,
    }),
    Emotion.create({
      name: 'Turquoise',
      price: 20,
      imageURL: 'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
      stockQuantity: 19,
      description:
        'at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Yellow',
      price: 72,
      imageURL: 'http://dummyimage.com/241x100.png/cc0000/ffffff',
      stockQuantity: 54,
      description:
        'sapien a libero nam dui proin leo odio porttitor id consequat',
      reccomendedEmpathyLevel: 2,
    }),
    Emotion.create({
      name: 'Indigo',
      price: 45,
      imageURL: 'http://dummyimage.com/197x100.png/cc0000/ffffff',
      stockQuantity: 62,
      description:
        'nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi',
      reccomendedEmpathyLevel: 7,
    }),
    Emotion.create({
      name: 'Puce',
      price: 68,
      imageURL: 'http://dummyimage.com/126x100.png/5fa2dd/ffffff',
      stockQuantity: 3,
      description:
        'pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Crimson',
      price: 48,
      imageURL: 'http://dummyimage.com/209x100.png/dddddd/000000',
      stockQuantity: 67,
      description:
        'ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Teal',
      price: 73,
      imageURL: 'http://dummyimage.com/220x100.png/dddddd/000000',
      stockQuantity: 30,
      description:
        'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget',
      reccomendedEmpathyLevel: 7,
    }),
    Emotion.create({
      name: 'Blue',
      price: 94,
      imageURL: 'http://dummyimage.com/174x100.png/5fa2dd/ffffff',
      stockQuantity: 76,
      description:
        'non pretium quis lectus suspendisse potenti in eleifend quam a odio in',
      reccomendedEmpathyLevel: 2,
    }),
    Emotion.create({
      name: 'Yellow',
      price: 28,
      imageURL: 'http://dummyimage.com/223x100.png/ff4444/ffffff',
      stockQuantity: 43,
      description:
        'id nisl venenatis lacinia aenean sit amet justo morbi ut odio',
      reccomendedEmpathyLevel: 10,
    }),
    Emotion.create({
      name: 'Goldenrod',
      price: 91,
      imageURL: 'http://dummyimage.com/112x100.png/cc0000/ffffff',
      stockQuantity: 41,
      description:
        'quis odio consequat varius integer ac leo pellentesque ultrices mattis',
      reccomendedEmpathyLevel: 10,
    }),
    Emotion.create({
      name: 'Puce',
      price: 86,
      imageURL: 'http://dummyimage.com/211x100.png/ff4444/ffffff',
      stockQuantity: 14,
      description:
        'quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Goldenrod',
      price: 68,
      imageURL: 'http://dummyimage.com/192x100.png/ff4444/ffffff',
      stockQuantity: 11,
      description:
        'eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Red',
      price: 55,
      imageURL: 'http://dummyimage.com/197x100.png/cc0000/ffffff',
      stockQuantity: 61,
      description:
        'amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Goldenrod',
      price: 48,
      imageURL: 'http://dummyimage.com/151x100.png/dddddd/000000',
      stockQuantity: 86,
      description:
        'cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Maroon',
      price: 73,
      imageURL: 'http://dummyimage.com/102x100.png/ff4444/ffffff',
      stockQuantity: 24,
      description:
        'rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Teal',
      price: 45,
      imageURL: 'http://dummyimage.com/183x100.png/dddddd/000000',
      stockQuantity: 44,
      description:
        'justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Red',
      price: 82,
      imageURL: 'http://dummyimage.com/141x100.png/cc0000/ffffff',
      stockQuantity: 89,
      description:
        'eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
      reccomendedEmpathyLevel: 10,
    }),
    Emotion.create({
      name: 'Puce',
      price: 30,
      imageURL: 'http://dummyimage.com/231x100.png/dddddd/000000',
      stockQuantity: 39,
      description:
        'molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Green',
      price: 4,
      imageURL: 'http://dummyimage.com/225x100.png/cc0000/ffffff',
      stockQuantity: 98,
      description:
        'non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Orange',
      price: 75,
      imageURL: 'http://dummyimage.com/195x100.png/5fa2dd/ffffff',
      stockQuantity: 22,
      description:
        'sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis',
      reccomendedEmpathyLevel: 10,
    }),
    Emotion.create({
      name: 'Yellow',
      price: 13,
      imageURL: 'http://dummyimage.com/118x100.png/ff4444/ffffff',
      stockQuantity: 56,
      description:
        'maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin',
      reccomendedEmpathyLevel: 2,
    }),
    Emotion.create({
      name: 'Green',
      price: 39,
      imageURL: 'http://dummyimage.com/236x100.png/dddddd/000000',
      stockQuantity: 33,
      description:
        'habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Crimson',
      price: 14,
      imageURL: 'http://dummyimage.com/177x100.png/cc0000/ffffff',
      stockQuantity: 90,
      description:
        'proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Purple',
      price: 49,
      imageURL: 'http://dummyimage.com/233x100.png/cc0000/ffffff',
      stockQuantity: 81,
      description:
        'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Teal',
      price: 51,
      imageURL: 'http://dummyimage.com/226x100.png/ff4444/ffffff',
      stockQuantity: 60,
      description:
        'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Yellow',
      price: 12,
      imageURL: 'http://dummyimage.com/120x100.png/dddddd/000000',
      stockQuantity: 30,
      description:
        'nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed',
      reccomendedEmpathyLevel: 7,
    }),
    Emotion.create({
      name: 'Khaki',
      price: 63,
      imageURL: 'http://dummyimage.com/247x100.png/dddddd/000000',
      stockQuantity: 19,
      description: 'in eleifend quam a odio in hac habitasse platea dictumst',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Goldenrod',
      price: 71,
      imageURL: 'http://dummyimage.com/114x100.png/ff4444/ffffff',
      stockQuantity: 92,
      description:
        'sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Violet',
      price: 7,
      imageURL: 'http://dummyimage.com/242x100.png/dddddd/000000',
      stockQuantity: 9,
      description:
        'molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Maroon',
      price: 62,
      imageURL: 'http://dummyimage.com/217x100.png/cc0000/ffffff',
      stockQuantity: 63,
      description:
        'maecenas tincidunt lacus at velit vivamus vel nulla eget eros',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Purple',
      price: 93,
      imageURL: 'http://dummyimage.com/156x100.png/cc0000/ffffff',
      stockQuantity: 40,
      description:
        'magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor',
      reccomendedEmpathyLevel: 3,
    }),
    Emotion.create({
      name: 'Violet',
      price: 87,
      imageURL: 'http://dummyimage.com/120x100.png/cc0000/ffffff',
      stockQuantity: 35,
      description:
        'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus',
      reccomendedEmpathyLevel: 3,
    }),
    Emotion.create({
      name: 'Orange',
      price: 41,
      imageURL: 'http://dummyimage.com/104x100.png/cc0000/ffffff',
      stockQuantity: 43,
      description:
        'libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Crimson',
      price: 83,
      imageURL: 'http://dummyimage.com/219x100.png/cc0000/ffffff',
      stockQuantity: 37,
      description:
        'augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst',
      reccomendedEmpathyLevel: 2,
    }),
    Emotion.create({
      name: 'Indigo',
      price: 98,
      imageURL: 'http://dummyimage.com/175x100.png/5fa2dd/ffffff',
      stockQuantity: 14,
      description:
        'at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum',
      reccomendedEmpathyLevel: 3,
    }),
    Emotion.create({
      name: 'Fuscia',
      price: 13,
      imageURL: 'http://dummyimage.com/177x100.png/dddddd/000000',
      stockQuantity: 60,
      description:
        'urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate',
      reccomendedEmpathyLevel: 9,
    }),
    Emotion.create({
      name: 'Aquamarine',
      price: 21,
      imageURL: 'http://dummyimage.com/173x100.png/ff4444/ffffff',
      stockQuantity: 32,
      description:
        'leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Violet',
      price: 61,
      imageURL: 'http://dummyimage.com/185x100.png/ff4444/ffffff',
      stockQuantity: 34,
      description:
        'consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam',
      reccomendedEmpathyLevel: 7,
    }),
    Emotion.create({
      name: 'Green',
      price: 77,
      imageURL: 'http://dummyimage.com/149x100.png/5fa2dd/ffffff',
      stockQuantity: 61,
      description:
        'vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Aquamarine',
      price: 88,
      imageURL: 'http://dummyimage.com/130x100.png/cc0000/ffffff',
      stockQuantity: 20,
      description:
        'sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Turquoise',
      price: 36,
      imageURL: 'http://dummyimage.com/242x100.png/cc0000/ffffff',
      stockQuantity: 60,
      description: 'duis bibendum morbi non quam nec dui luctus rutrum nulla',
      reccomendedEmpathyLevel: 9,
    }),
    Emotion.create({
      name: 'Puce',
      price: 46,
      imageURL: 'http://dummyimage.com/183x100.png/cc0000/ffffff',
      stockQuantity: 13,
      description:
        'fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Purple',
      price: 82,
      imageURL: 'http://dummyimage.com/187x100.png/5fa2dd/ffffff',
      stockQuantity: 61,
      description:
        'non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis',
      reccomendedEmpathyLevel: 10,
    }),
    Emotion.create({
      name: 'Maroon',
      price: 78,
      imageURL: 'http://dummyimage.com/207x100.png/cc0000/ffffff',
      stockQuantity: 62,
      description:
        'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Fuscia',
      price: 82,
      imageURL: 'http://dummyimage.com/202x100.png/dddddd/000000',
      stockQuantity: 63,
      description:
        'id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Maroon',
      price: 46,
      imageURL: 'http://dummyimage.com/237x100.png/ff4444/ffffff',
      stockQuantity: 84,
      description:
        'morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis',
      reccomendedEmpathyLevel: 9,
    }),
    Emotion.create({
      name: 'Turquoise',
      price: 32,
      imageURL: 'http://dummyimage.com/162x100.png/cc0000/ffffff',
      stockQuantity: 60,
      description:
        'potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Pink',
      price: 99,
      imageURL: 'http://dummyimage.com/117x100.png/ff4444/ffffff',
      stockQuantity: 85,
      description:
        'turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Maroon',
      price: 20,
      imageURL: 'http://dummyimage.com/207x100.png/5fa2dd/ffffff',
      stockQuantity: 71,
      description:
        'morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Purple',
      price: 38,
      imageURL: 'http://dummyimage.com/216x100.png/ff4444/ffffff',
      stockQuantity: 32,
      description:
        'primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Indigo',
      price: 11,
      imageURL: 'http://dummyimage.com/246x100.png/5fa2dd/ffffff',
      stockQuantity: 2,
      description:
        'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Khaki',
      price: 83,
      imageURL: 'http://dummyimage.com/210x100.png/ff4444/ffffff',
      stockQuantity: 12,
      description:
        'non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue',
      reccomendedEmpathyLevel: 9,
    }),
    Emotion.create({
      name: 'Crimson',
      price: 16,
      imageURL: 'http://dummyimage.com/230x100.png/5fa2dd/ffffff',
      stockQuantity: 30,
      description:
        'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Puce',
      price: 35,
      imageURL: 'http://dummyimage.com/165x100.png/dddddd/000000',
      stockQuantity: 83,
      description:
        'nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Violet',
      price: 53,
      imageURL: 'http://dummyimage.com/115x100.png/5fa2dd/ffffff',
      stockQuantity: 12,
      description:
        'condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Turquoise',
      price: 15,
      imageURL: 'http://dummyimage.com/214x100.png/5fa2dd/ffffff',
      stockQuantity: 89,
      description:
        'vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Teal',
      price: 26,
      imageURL: 'http://dummyimage.com/220x100.png/ff4444/ffffff',
      stockQuantity: 50,
      description:
        'in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Pink',
      price: 72,
      imageURL: 'http://dummyimage.com/144x100.png/5fa2dd/ffffff',
      stockQuantity: 83,
      description:
        'id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Aquamarine',
      price: 45,
      imageURL: 'http://dummyimage.com/155x100.png/5fa2dd/ffffff',
      stockQuantity: 97,
      description:
        'diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris',
      reccomendedEmpathyLevel: 4,
    }),
    Emotion.create({
      name: 'Goldenrod',
      price: 73,
      imageURL: 'http://dummyimage.com/226x100.png/dddddd/000000',
      stockQuantity: 87,
      description:
        'ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Fuscia',
      price: 72,
      imageURL: 'http://dummyimage.com/191x100.png/ff4444/ffffff',
      stockQuantity: 87,
      description:
        'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit',
      reccomendedEmpathyLevel: 7,
    }),
    Emotion.create({
      name: 'Pink',
      price: 95,
      imageURL: 'http://dummyimage.com/224x100.png/ff4444/ffffff',
      stockQuantity: 81,
      description:
        'eros elementum pellentesque quisque porta volutpat erat quisque erat eros',
      reccomendedEmpathyLevel: 7,
    }),
    Emotion.create({
      name: 'Green',
      price: 20,
      imageURL: 'http://dummyimage.com/245x100.png/cc0000/ffffff',
      stockQuantity: 100,
      description:
        'nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Violet',
      price: 19,
      imageURL: 'http://dummyimage.com/159x100.png/dddddd/000000',
      stockQuantity: 76,
      description:
        'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Turquoise',
      price: 56,
      imageURL: 'http://dummyimage.com/229x100.png/5fa2dd/ffffff',
      stockQuantity: 20,
      description:
        'curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend',
      reccomendedEmpathyLevel: 2,
    }),
    Emotion.create({
      name: 'Aquamarine',
      price: 65,
      imageURL: 'http://dummyimage.com/181x100.png/5fa2dd/ffffff',
      stockQuantity: 31,
      description:
        'aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Khaki',
      price: 49,
      imageURL: 'http://dummyimage.com/110x100.png/cc0000/ffffff',
      stockQuantity: 47,
      description:
        'quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Fuscia',
      price: 17,
      imageURL: 'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
      stockQuantity: 90,
      description:
        'rutrum ac lobortis vel dapibus at diam nam tristique tortor eu',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Yellow',
      price: 5,
      imageURL: 'http://dummyimage.com/232x100.png/ff4444/ffffff',
      stockQuantity: 17,
      description:
        'ut erat id mauris vulputate elementum nullam varius nulla facilisi',
      reccomendedEmpathyLevel: 2,
    }),
    Emotion.create({
      name: 'Turquoise',
      price: 41,
      imageURL: 'http://dummyimage.com/150x100.png/cc0000/ffffff',
      stockQuantity: 48,
      description:
        'platea dictumst etiam faucibus cursus urna ut tellus nulla ut',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Green',
      price: 89,
      imageURL: 'http://dummyimage.com/178x100.png/dddddd/000000',
      stockQuantity: 40,
      description:
        'consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo',
      reccomendedEmpathyLevel: 1,
    }),
    Emotion.create({
      name: 'Goldenrod',
      price: 34,
      imageURL: 'http://dummyimage.com/236x100.png/5fa2dd/ffffff',
      stockQuantity: 63,
      description:
        'ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat',
      reccomendedEmpathyLevel: 3,
    }),
    Emotion.create({
      name: 'Aquamarine',
      price: 12,
      imageURL: 'http://dummyimage.com/175x100.png/ff4444/ffffff',
      stockQuantity: 19,
      description:
        'nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed',
      reccomendedEmpathyLevel: 7,
    }),
    Emotion.create({
      name: 'Maroon',
      price: 7,
      imageURL: 'http://dummyimage.com/143x100.png/5fa2dd/ffffff',
      stockQuantity: 78,
      description:
        'mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis',
      reccomendedEmpathyLevel: 2,
    }),
    Emotion.create({
      name: 'Orange',
      price: 52,
      imageURL: 'http://dummyimage.com/145x100.png/5fa2dd/ffffff',
      stockQuantity: 70,
      description:
        'quisque ut erat curabitur gravida nisi at nibh in hac habitasse',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Teal',
      price: 72,
      imageURL: 'http://dummyimage.com/125x100.png/cc0000/ffffff',
      stockQuantity: 17,
      description:
        'amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Purple',
      price: 94,
      imageURL: 'http://dummyimage.com/135x100.png/ff4444/ffffff',
      stockQuantity: 12,
      description:
        'enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien',
      reccomendedEmpathyLevel: 9,
    }),
    Emotion.create({
      name: 'Indigo',
      price: 90,
      imageURL: 'http://dummyimage.com/129x100.png/dddddd/000000',
      stockQuantity: 3,
      description:
        'justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in',
      reccomendedEmpathyLevel: 10,
    }),
    Emotion.create({
      name: 'Green',
      price: 74,
      imageURL: 'http://dummyimage.com/136x100.png/ff4444/ffffff',
      stockQuantity: 93,
      description:
        'ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Indigo',
      price: 61,
      imageURL: 'http://dummyimage.com/151x100.png/dddddd/000000',
      stockQuantity: 55,
      description:
        'nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt',
      reccomendedEmpathyLevel: 10,
    }),
    Emotion.create({
      name: 'Violet',
      price: 37,
      imageURL: 'http://dummyimage.com/169x100.png/ff4444/ffffff',
      stockQuantity: 70,
      description:
        'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Teal',
      price: 97,
      imageURL: 'http://dummyimage.com/193x100.png/ff4444/ffffff',
      stockQuantity: 38,
      description:
        'sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Teal',
      price: 46,
      imageURL: 'http://dummyimage.com/244x100.png/cc0000/ffffff',
      stockQuantity: 60,
      description:
        'vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare',
      reccomendedEmpathyLevel: 7,
    }),
    Emotion.create({
      name: 'Maroon',
      price: 91,
      imageURL: 'http://dummyimage.com/198x100.png/cc0000/ffffff',
      stockQuantity: 15,
      description:
        'condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Pink',
      price: 45,
      imageURL: 'http://dummyimage.com/205x100.png/cc0000/ffffff',
      stockQuantity: 76,
      description:
        'a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Pink',
      price: 58,
      imageURL: 'http://dummyimage.com/116x100.png/dddddd/000000',
      stockQuantity: 6,
      description:
        'lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis',
      reccomendedEmpathyLevel: 3,
    }),
    Emotion.create({
      name: 'Orange',
      price: 81,
      imageURL: 'http://dummyimage.com/105x100.png/dddddd/000000',
      stockQuantity: 93,
      description:
        'dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Aquamarine',
      price: 46,
      imageURL: 'http://dummyimage.com/110x100.png/ff4444/ffffff',
      stockQuantity: 7,
      description: 'aliquam non mauris morbi non lectus aliquam sit amet diam',
      reccomendedEmpathyLevel: 3,
    }),
    Emotion.create({
      name: 'Blue',
      price: 10,
      imageURL: 'http://dummyimage.com/181x100.png/ff4444/ffffff',
      stockQuantity: 71,
      description:
        'maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Red',
      price: 82,
      imageURL: 'http://dummyimage.com/122x100.png/ff4444/ffffff',
      stockQuantity: 86,
      description:
        'posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Fuscia',
      price: 85,
      imageURL: 'http://dummyimage.com/199x100.png/ff4444/ffffff',
      stockQuantity: 12,
      description:
        'ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent',
      reccomendedEmpathyLevel: 2,
    }),
    Emotion.create({
      name: 'Orange',
      price: 83,
      imageURL: 'http://dummyimage.com/108x100.png/cc0000/ffffff',
      stockQuantity: 53,
      description:
        'sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Aquamarine',
      price: 46,
      imageURL: 'http://dummyimage.com/207x100.png/5fa2dd/ffffff',
      stockQuantity: 74,
      description:
        'id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Purple',
      price: 23,
      imageURL: 'http://dummyimage.com/160x100.png/5fa2dd/ffffff',
      stockQuantity: 91,
      description:
        'condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit',
      reccomendedEmpathyLevel: 6,
    }),
    Emotion.create({
      name: 'Khaki',
      price: 68,
      imageURL: 'http://dummyimage.com/201x100.png/ff4444/ffffff',
      stockQuantity: 67,
      description:
        'sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at',
      reccomendedEmpathyLevel: 8,
    }),
    Emotion.create({
      name: 'Turquoise',
      price: 90,
      imageURL: 'http://dummyimage.com/219x100.png/ff4444/ffffff',
      stockQuantity: 51,
      description:
        'id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius',
      reccomendedEmpathyLevel: 3,
    }),
    Emotion.create({
      name: 'Puce',
      price: 97,
      imageURL: 'http://dummyimage.com/112x100.png/cc0000/ffffff',
      stockQuantity: 84,
      description:
        'consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis',
      reccomendedEmpathyLevel: 5,
    }),
    Emotion.create({
      name: 'Goldenrod',
      price: 7,
      imageURL: 'http://dummyimage.com/193x100.png/5fa2dd/ffffff',
      stockQuantity: 21,
      description:
        'sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia',
      reccomendedEmpathyLevel: 9,
    }),
  ]);

  // Create Carts for users 1-6
  const carts = await Promise.all([
    (await User.findByPk(1)).createCart({}),
    (await User.findByPk(2)).createCart({}),
    (await User.findByPk(3)).createCart({}),
    (await User.findByPk(4)).createCart({}),
    (await User.findByPk(5)).createCart({}),
    (await User.findByPk(6)).createCart({}),
  ]);
  // Add items to carts
  await Promise.all([
    (await Cart.findByPk(1)).addEmotion(1),
    (await Cart.findByPk(1)).addEmotion(2),
    (await Cart.findByPk(1)).addEmotion(3),
    //
    (await Cart.findByPk(2)).addEmotion(10),
    (await Cart.findByPk(2)).addEmotion(11),
    //
    (await Cart.findByPk(3)).addEmotion(30),
    (await Cart.findByPk(4)).addEmotion(40),
    (await Cart.findByPk(5)).addEmotion(50),
    //
    (await Cart.findByPk(6)).addEmotion(60),
    (await Cart.findByPk(6)).addEmotion(61),
    (await Cart.findByPk(6)).addEmotion(62),
  ]);
  //assign quantities to carts
  await Promise.all([
    (await Cart.findByPk(1)).setEmotionQuantity(1, 10),
    (await Cart.findByPk(1)).setEmotionQuantity(2, 10),
    (await Cart.findByPk(1)).setEmotionQuantity(3, 10),
    //
    (await Cart.findByPk(2)).setEmotionQuantity(10, 5),
    (await Cart.findByPk(2)).setEmotionQuantity(11, 5),
    //
    (await Cart.findByPk(3)).setEmotionQuantity(30, 30),
    (await Cart.findByPk(4)).setEmotionQuantity(40, 400),
    (await Cart.findByPk(5)).setEmotionQuantity(50, 400),
    //
    (await Cart.findByPk(6)).setEmotionQuantity(60, 500),
    (await Cart.findByPk(6)).setEmotionQuantity(61, 35),
    (await Cart.findByPk(6)).setEmotionQuantity(62, 27),
  ]);

  // Creating Orders for users 1-3, from carts
  const orders = await Promise.all([
    (await Cart.findByPk(1)).createOrderFromCart(),
    (await Cart.findByPk(2)).createOrderFromCart(),
    (await Cart.findByPk(3)).createOrderFromCart(),
  ]);

  // Create Wishlists for users 1-6
  const wishlists = await Promise.all([
    (await User.findByPk(11)).createWishlist({}),
    (await User.findByPk(12)).createWishlist({}),
    (await User.findByPk(13)).createWishlist({}),
    (await User.findByPk(14)).createWishlist({}),
    (await User.findByPk(15)).createWishlist({}),
    (await User.findByPk(16)).createWishlist({}),
  ]);

  // Add items to wishlists
  await Promise.all([
    (await (await User.findByPk(11)).getWishlist()).addEmotion(1),
    (await (await User.findByPk(11)).getWishlist()).addEmotion(2),
    (await (await User.findByPk(11)).getWishlist()).addEmotion(3),
    //
    (await (await User.findByPk(12)).getWishlist()).addEmotion(10),
    (await (await User.findByPk(12)).getWishlist()).addEmotion(11),
    //
    (await (await User.findByPk(13)).getWishlist()).addEmotion(30),
  ]);

  // Move from Wishlist to Cart
  await Promise.all;
  [
    (await (await User.findByPk(11)).getWishlist()).moveEmotionToCart(1),
    (await (await User.findByPk(11)).getWishlist()).moveEmotionToCart(2),
    (await (await User.findByPk(11)).getWishlist()).moveEmotionToCart(3),
  ];

  // seeding has completed
  console.log(`seeded ${users.length}, users ${emotions.length} emotions `);
  console.log(`seeded successfully`);

  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    // await db.close();
    // console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
