//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//    створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//    Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


let element = document.body.getElementsByTagName('h2');
let body = document.body.getElementsByTagName('p');
for (let i = 0; i < element.length; i++) {
    let ruleDiv = document.createElement('div');
    ruleDiv.classList.add('ruleDiv');
    let ruleUl = document.createElement('ul');
    ruleUl.innerText = element[i].innerText;
    let ruleLi = document.createElement('li');
    ruleLi.innerText = body[i].innerText;
    ruleDiv.append(ruleUl, ruleLi);
    document.body.appendChild(ruleDiv);
};