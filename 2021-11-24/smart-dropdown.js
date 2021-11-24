
const $dropDownContentWrapper = document.querySelector('.dropdowncontent-wrapper');
const $mouseOverHistory = document.querySelector('.mouseover-history');
const MenuMouseOverCountObj =
{
    grape: 0,
    apple: 0,
    orange: 0,
    banana: 0,
    kiwi: 0,
    strawberry: 0
}

function addMouseOverHistoryToView(dropDownMenuItemName) {
    let menuMouseOverCount = MenuMouseOverCountObj[dropDownMenuItemName];
    if (menuMouseOverCount) {
        const $dropDownMenuItemCount = document.querySelector(`.${dropDownMenuItemName}Count`);
        $dropDownMenuItemCount.textContent = ++MenuMouseOverCountObj[dropDownMenuItemName];
        return;
    }

    $mouseOverHistory
        .insertAdjacentHTML('beforeend', `
            <div>${dropDownMenuItemName}: 
              <span class="${dropDownMenuItemName}Count">${++MenuMouseOverCountObj[dropDownMenuItemName]}</span>
            </div>`);
}

function showMouseOverElementCount(dropDownMenuItemName) {
    addMouseOverHistoryToView(dropDownMenuItemName);
}

let timer;
function dropDownMouseOverHandler(timeout) {
    return timer = setTimeout(() => {
        $dropDownContentWrapper.classList.add('display-block');
    }, timeout);
}

function dropDownMouseOutHandler() {
    clearTimeout(timer);
    $dropDownContentWrapper.classList.remove('display-block');
}

function addDelayedMouseOverEventToElement(selectorName, timeout) {
    const $element = document.querySelector(selectorName);
    $element.addEventListener('mouseover', () => dropDownMouseOverHandler(timeout));
    $element.addEventListener('mouseout', dropDownMouseOutHandler);
}

function addMouseOverEventToShowElement(selectorName) {
    const $dropDownLinkArr = document.querySelectorAll(selectorName);
    $dropDownLinkArr.forEach($dropDownLink => {
        $dropDownLink.addEventListener('mouseover', function (e) {
            showMouseOverElementCount(e.target.textContent);
        })
    });
}

function main(params) {
    addDelayedMouseOverEventToElement(selectorName = '.dropdown-wrapper', timeout = 1000);
    addMouseOverEventToShowElement(selectorName = 'a');
}

main();