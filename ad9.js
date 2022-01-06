//- Є масив :

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

//Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.


usersList.forEach(item => {

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('itemDiv');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('leftDiv');
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv');
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('rightDiv');

    itemDiv.append(leftDiv, mainDiv, rightDiv);

//Зміст лівої частини блоку:
    const idDiv = document.createElement('div');
    idDiv.classList.add('idDiv');
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('nameDiv');
    const usernameDiv = document.createElement('div');
    usernameDiv.classList.add('usernameDiv');
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('emailDiv');

//Зміст центральної частини блоку:
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('addressDiv');
    const addStrDiv = document.createElement('div');
    addStrDiv.classList.add('addStrDiv');
    const addSuiteDiv = document.createElement('div');
    addSuiteDiv.classList.add('addSuiteDiv');
    const addCityDiv = document.createElement('div');
    addCityDiv.classList.add('addCityDiv');
    const addZipDiv = document.createElement('div');
    addZipDiv.classList.add('addZipDiv');
    const geoDiv = document.createElement('div');
    geoDiv.classList.add('geoDiv');
    const geoLatDiv = document.createElement('div');
    geoLatDiv.classList.add('geoLatDiv');
    const geoLngDiv = document.createElement('div');
    geoLngDiv.classList.add('geoLngDiv');

//Зміст правої частини блоку:
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('phoneDiv');
    const webDiv = document.createElement('div');
    webDiv.classList.add('webDiv');
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('companyDiv');
    const comNameDiv = document.createElement('div');
    comNameDiv.classList.add('comNameDiv');
    const comCatchDiv = document.createElement('div');
    comCatchDiv.classList.add('comCatchDiv');
    const comBsDiv = document.createElement('div');
    comBsDiv.classList.add('comBsDiv');

    leftDiv.append(idDiv, nameDiv, usernameDiv, emailDiv);
    mainDiv.append(addressDiv, addStrDiv, addSuiteDiv, addCityDiv, addZipDiv, geoDiv, geoLatDiv, geoLngDiv);
    rightDiv.append(phoneDiv, webDiv, companyDiv, comNameDiv, comCatchDiv, comBsDiv);

//Наповнення блоків:
    idDiv.innerText = 'ID: ' + item.id
    nameDiv.innerText = 'NAME: ' + item.name
    usernameDiv.innerText = 'USERNAME: ' + item.username
    emailDiv.innerText = 'e-mail: ' + item.email

    addressDiv.innerText = 'ADDRESS:'
    addStrDiv.innerText = 'Street: ' + item.address.street
    addSuiteDiv.innerText = 'Suite: ' + item.address.suite
    addCityDiv.innerText = 'City:' + item.address.city
    addZipDiv.innerText = 'zipcode:' + item.address.zipcode
    geoDiv.innerText = 'GEO:'
    geoLatDiv.innerText = 'lat: ' + item.address.geo.lat
    geoLngDiv.innerText = 'lng: ' + item.address.geo.lng

    phoneDiv.innerText = 'Phone: ' + item.phone
    webDiv.innerText = 'Website: ' + item.website
    companyDiv.innerText = 'COMPANY:'
    comNameDiv.innerText = 'name: ' + item.company.name
    comCatchDiv.innerText = 'catchPhrase: ' + item.company.catchPhrase
    comBsDiv.innerText = 'bs: ' + item.company.bs

    document.body.appendChild(itemDiv)
});
