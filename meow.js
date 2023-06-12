const tabsBtn = document.querySelectorAll('.tabs_nav-btn');
const tabsItems = document.querySelectorAll('.tabs_item');

const ships = document.querySelectorAll('.ship');
const shipsAbout = document.querySelectorAll('.info_about_ship');

localStorage.setItem('testScript', 0);
let i = localStorage.getItem('testScript');
let divBtn = document.createElement('div')
divBtn.className = 'divBtnS';
let backBtn = document.createElement('button');
backBtn.className = 'backButton';
backBtn.innerHTML = ('Back');

let smallShipDiv = document.querySelector('#shipsS');
let mediumShipDiv = document.querySelector('#shipsM');
let largeShipDiv = document.querySelector('#shipsL');
let capitalShipDiv = document.querySelector('#shipsCap');
let superCapitalShipDiv = document.querySelector('#shipsSypCap');

tabsBtn.forEach(onTabClick);
function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        if (!document.querySelector('.divBtnS') !== null) {
            backBtn.remove();
            divBtn.remove();
            shipsAbout.forEach(function (info) {
                info.classList.remove('activeS');
            });
            ships.forEach(function (ship) {
                ship.classList.remove('hide');
            });

            smallShipDiv.removeAttribute('style');
            mediumShipDiv.removeAttribute('style');
            largeShipDiv.removeAttribute('style');
            capitalShipDiv.removeAttribute('style');
            superCapitalShipDiv.removeAttribute('style');

            i--;
            if (i == -1) {
                i++;
            }
        }
        if (!currentTab.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            })

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }


    })
}

ships.forEach(someShit);
function someShit(item) {
    item.addEventListener('click', function () {
        let currentShip = item;
        let shipId = currentShip.getAttribute('data-tab');
        let currentShipS = document.querySelector(shipId);
        if (!currentShipS.classList.contains('activeS')) {
            shipsAbout.forEach(function (item) {
                item.classList.remove('activeS');
            })
            currentShipS.classList.add('activeS');
        }
        if (!currentShipS.classList.contains('activeS')) {
            ships.forEach(function (ship) {
                ship.classList.remove('hide');
            })
        }
        if (i == 0) {
            switch (shipId) {
                case ('#Ship-1'):
                    document.querySelector('.Crucifier').classList.add('hide');
                    document.querySelector('.Heron').classList.add('hide');
                    document.querySelector('.Incursus').classList.add('hide');



                    smallShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn); Object.assign(smallShipDiv.style, {
                        backgroundImage: "url('./Picture/Small Ships/burstBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-2'):
                    document.querySelector('.Burst').classList.add('hide');
                    document.querySelector('.Heron').classList.add('hide');
                    document.querySelector('.Incursus').classList.add('hide');


                    smallShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    smallShipDiv.classList.add('contentStyle');
                    Object.assign(smallShipDiv.style, {
                        backgroundImage: "url('./Picture/Small Ships/crucifierBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-3'):
                    document.querySelector('.Crucifier').classList.add('hide');
                    document.querySelector('.Burst').classList.add('hide');
                    document.querySelector('.Incursus').classList.add('hide');


                    smallShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    smallShipDiv.classList.add('contentStyle');
                    Object.assign(smallShipDiv.style, {
                        backgroundImage: "url('./Picture/Small Ships/heronBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-4'):
                    document.querySelector('.Crucifier').classList.add('hide');
                    document.querySelector('.Heron').classList.add('hide');
                    document.querySelector('.Burst').classList.add('hide');


                    smallShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    smallShipDiv.classList.add('contentStyle');
                    Object.assign(smallShipDiv.style, {
                        backgroundImage: "url('./Picture/Small Ships/incursusBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center',

                    });
                    i++;
                    break;

                case ('#Ship-5'):
                    document.querySelector('.Maller').classList.add('hide');
                    document.querySelector('.Scythe').classList.add('hide');
                    document.querySelector('.Thorax').classList.add('hide');


                    mediumShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    mediumShipDiv.classList.add('contentStyle');
                    Object.assign(mediumShipDiv.style, {
                        backgroundImage: "url('./Picture/Medium Ships/caracalBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-6'):
                    document.querySelector('.Caracal').classList.add('hide');
                    document.querySelector('.Scythe').classList.add('hide');
                    document.querySelector('.Thorax').classList.add('hide');


                    mediumShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    mediumShipDiv.classList.add('contentStyle');
                    Object.assign(mediumShipDiv.style, {
                        backgroundImage: "url('./Picture/Medium Ships/mallerBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-7'):
                    document.querySelector('.Caracal').classList.add('hide');
                    document.querySelector('.Maller').classList.add('hide');
                    document.querySelector('.Thorax').classList.add('hide');


                    mediumShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    mediumShipDiv.classList.add('contentStyle');
                    Object.assign(mediumShipDiv.style, {
                        backgroundImage: "url('./Picture/Medium Ships/scytheBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-8'):
                    document.querySelector('.Caracal').classList.add('hide');
                    document.querySelector('.Scythe').classList.add('hide');
                    document.querySelector('.Maller').classList.add('hide');


                    mediumShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    mediumShipDiv.classList.add('contentStyle');
                    Object.assign(mediumShipDiv.style, {
                        backgroundImage: "url('./Picture/Medium Ships/thoraxBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;

                case ('#Ship-9'):
                    document.querySelector('.Megathron').classList.add('hide');
                    document.querySelector('.Rokh').classList.add('hide');
                    document.querySelector('.Tempest').classList.add('hide');


                    largeShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    largeShipDiv.classList.add('contentStyle');
                    Object.assign(largeShipDiv.style, {
                        backgroundImage: "url('./Picture/Large Ships/abaddonBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-10'):
                    document.querySelector('.Abaddon').classList.add('hide');
                    document.querySelector('.Rokh').classList.add('hide');
                    document.querySelector('.Tempest').classList.add('hide');


                    largeShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    largeShipDiv.classList.add('contentStyle');
                    Object.assign(largeShipDiv.style, {
                        backgroundImage: "url('./Picture/Large Ships/megathronBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-11'):
                    document.querySelector('.Abaddon').classList.add('hide');
                    document.querySelector('.Megathron').classList.add('hide');
                    document.querySelector('.Tempest').classList.add('hide');


                    largeShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    largeShipDiv.classList.add('contentStyle');
                    Object.assign(largeShipDiv.style, {
                        backgroundImage: "url('./Picture/Large Ships/rokhBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-12'):
                    document.querySelector('.Abaddon').classList.add('hide');
                    document.querySelector('.Megathron').classList.add('hide');
                    document.querySelector('.Rokh').classList.add('hide');


                    largeShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    largeShipDiv.classList.add('contentStyle');
                    Object.assign(largeShipDiv.style, {
                        backgroundImage: "url('./Picture/Large Ships/tempestBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;

                case ('#Ship-13'):
                    document.querySelector('.Naglfar').classList.add('hide');
                    document.querySelector('.Phoenix').classList.add('hide');
                    document.querySelector('.Revelation').classList.add('hide');


                    capitalShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    capitalShipDiv.classList.add('contentStyle');
                    Object.assign(capitalShipDiv.style, {
                        backgroundImage: "url('./Picture/Capital Ships/morosBackground.png')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-14'):
                    document.querySelector('.Moros').classList.add('hide');
                    document.querySelector('.Phoenix').classList.add('hide');
                    document.querySelector('.Revelation').classList.add('hide');


                    capitalShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    capitalShipDiv.classList.add('contentStyle');
                    Object.assign(capitalShipDiv.style, {
                        backgroundImage: "url('./Picture/Capital Ships/naglfarBackground.webp')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-15'):
                    document.querySelector('.Moros').classList.add('hide');
                    document.querySelector('.Naglfar').classList.add('hide');
                    document.querySelector('.Revelation').classList.add('hide');


                    capitalShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    capitalShipDiv.classList.add('contentStyle');
                    Object.assign(capitalShipDiv.style, {
                        backgroundImage: "url('./Picture/Capital Ships/phoenixBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-16'):
                    document.querySelector('.Moros').classList.add('hide');
                    document.querySelector('.Naglfar').classList.add('hide');
                    document.querySelector('.Phoenix').classList.add('hide');


                    capitalShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    capitalShipDiv.classList.add('contentStyle');
                    Object.assign(capitalShipDiv.style, {
                        backgroundImage: "url('./Picture/Capital Ships/revelationBackground.png')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;

                case ('#Ship-17'):
                    document.querySelector('.Erebus').classList.add('hide');
                    document.querySelector('.Leviathan').classList.add('hide');
                    document.querySelector('.Ragnarok').classList.add('hide');


                    superCapitalShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    superCapitalShipDiv.classList.add('contentStyle');
                    Object.assign(superCapitalShipDiv.style, {
                        backgroundImage: "url('./Picture/SuperCapital Ships/avatarBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-18'):
                    document.querySelector('.Avatar').classList.add('hide');
                    document.querySelector('.Leviathan').classList.add('hide');
                    document.querySelector('.Ragnarok').classList.add('hide');


                    superCapitalShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    superCapitalShipDiv.classList.add('contentStyle');
                    Object.assign(superCapitalShipDiv.style, {
                        backgroundImage: "url('./Picture/SuperCapital Ships/erebusBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-19'):
                    document.querySelector('.Erebus').classList.add('hide');
                    document.querySelector('.Avatar').classList.add('hide');
                    document.querySelector('.Ragnarok').classList.add('hide');


                    superCapitalShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    superCapitalShipDiv.classList.add('contentStyle');
                    Object.assign(superCapitalShipDiv.style, {
                        backgroundImage: "url('./Picture/SuperCapital Ships/leviathanBackground.jpg')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                case ('#Ship-20'):
                    document.querySelector('.Erebus').classList.add('hide');
                    document.querySelector('.Avatar').classList.add('hide');
                    document.querySelector('.Leviathan').classList.add('hide');


                    superCapitalShipDiv.appendChild(divBtn);
                    divBtn.appendChild(backBtn);
                    superCapitalShipDiv.classList.add('contentStyle');
                    Object.assign(superCapitalShipDiv.style, {
                        backgroundImage: "url('./Picture/SuperCapital Ships/ragnarokBackground.png')",
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        backgroundPosition: 'center'
                    });//добавляет стили
                    i++;
                    break;
                default:
                    break;
            }
        } else if (i == 1) {
            console.log('no :)')
        }
        backBtn.addEventListener('click', backFunction);
        function backFunction() {
            backBtn.remove();
            divBtn.remove();
            shipsAbout.forEach(function (info) {
                info.classList.remove('activeS');
            });
            ships.forEach(function (ship) {
                ship.classList.remove('hide');
            });

            smallShipDiv.removeAttribute('style');
            mediumShipDiv.removeAttribute('style');
            largeShipDiv.removeAttribute('style');
            capitalShipDiv.removeAttribute('style');
            superCapitalShipDiv.removeAttribute('style');

            i--;
            if (i == -1) {
                i++;
            }
        }

    })
}

