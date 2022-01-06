let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

//Варіант №1
const uniqueArr = [];
users.forEach(item => {
    uniqueArr.push(item);
});
console.log(uniqueArr);

//Варіант №2

const unique = [...new Set(users.map(item => item.address))]; //Це швидше і коротше, ніж цикл!
console.log(unique);

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

users.forEach(item => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('userDiv');
    userDiv.innerText = `${item.name}, ${item.age}, ${item.status}, ${item.address.city}, ${item.address.country}, ${item.address.street}, ${item.address.houseNumber}`;
    document.body.appendChild(userDiv);
});

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)


users.forEach(item => {
    const formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');
    const namesDiv = document.createElement('div');
    namesDiv.classList.add('namesDiv');
    const ageDiv = document.createElement('div');
    ageDiv.classList.add('ageDiv');
    const statusDiv = document.createElement('div');
    statusDiv.classList.add('statusDiv');
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('addressDiv');

    namesDiv.innerText = 'NAME: ' + item.name;
    ageDiv.innerText = 'AGE: ' + item.age;
    statusDiv.innerText = 'STATUS: ' + item.status;
    addressDiv.innerText = `ADDRESS: ${item.address.city}, ${item.address.country}, ${item.address.street}, ${item.address.houseNumber}`;
    formDiv.append(namesDiv, ageDiv, statusDiv, addressDiv);
    document.body.appendChild(formDiv);
});

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


users.forEach(item => {
    const formUserDiv = document.createElement('div');
    formUserDiv.classList.add('formUserDiv');

    const namesDiv = document.createElement('div');
    namesDiv.classList.add('namesDiv');
    const ageDiv = document.createElement('div');
    ageDiv.classList.add('ageDiv');
    const statusDiv = document.createElement('div');
    statusDiv.classList.add('statusDiv');
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('addressDiv');

//Вміст блока "АДРЕСА":
    const addCityDiv = document.createElement('div');
    addCityDiv.classList.add('addCityDiv');
    const addCountryDiv = document.createElement('div');
    addCountryDiv.classList.add('addCountryDiv');
    const addStreetDiv = document.createElement('div');
    addStreetDiv.classList.add('addStreetDiv');
    const addHouseDiv = document.createElement('div');
    addHouseDiv.classList.add('addHouseDiv');

//Заповнення блоків:
    namesDiv.innerText = 'NAME: ' + item.name;
    ageDiv.innerText = 'AGE: ' + item.age;
    statusDiv.innerText = 'STATUS: ' + item.status;
    addressDiv.innerText = 'ADDRESS:'
    addCityDiv.innerText = 'City: ' + item.address.city;
    addCountryDiv.innerText = 'Country: ' + item.address.country;
    addStreetDiv.innerText = 'Street: ' + item.address.street;
    addHouseDiv.innerText = 'house number: ' + item.address.houseNumber;

    addressDiv.append(addCityDiv,addCountryDiv,addStreetDiv, addHouseDiv);
    formUserDiv.append(namesDiv, ageDiv, statusDiv, addressDiv);
    document.body.appendChild(formUserDiv);
});

//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//    створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//    Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// Вирішення у файлі rules.html!

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];


rules.forEach(item => {
    const ruleDiv = document.createElement('div');
    ruleDiv.classList.add('ruleDiv');
    const titleDiv = document.createElement('h2');
    titleDiv.classList.add('titleDiv');
    const bodyDiv = document.createElement('p');
    bodyDiv.classList.add('bodyDiv');

    titleDiv.innerText = `${item.title}`
    bodyDiv.innerText = `${item.body}`

    ruleDiv.append(titleDiv, bodyDiv);
    document.body.appendChild(ruleDiv);
});
