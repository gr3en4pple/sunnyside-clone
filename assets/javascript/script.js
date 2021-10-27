const menu_icon = document.getElementsByClassName('menu-icon')[0];
const menu      = document.querySelector('.navbar__menu');


const toggleMenu = () => {
    menu.classList.toggle('showmenu');
    menu.classList.toggle('closemenu');
}
menu_icon.addEventListener('click',toggleMenu);



function chooseBestSum(t, k, ls) {
    let result = 0
    const listLength = ls.length;
    let max,temp;
    for (let i = 0 ; i < listLength - k ; i++) {
        max = 
        temp = max;
        for(let j = 2; j < listLength ; j++) {
            max += ls[j];
            if(max == t)
                return max;
            if(max < t)
                result = Math.max(max,result)
            max = temp;   
        }
    }
    return result;
}

// const sumToK = (ls,k,i) => {
//     let result = 0
//     while(i < i + k - 1 ) {
//         result += ls[i];
//         i++;
//     }
//     return result;
// }


console.log(chooseBestSum(169,3,[50, 55, 56, 57, 58]))