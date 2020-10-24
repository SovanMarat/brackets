module.exports = function check(str, bracketsConfig) {
    arrTest = [];
    if (str.length % 2 !== 0) {
                console.log(false);
                return false;
       }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                (bracketsConfig[j][0] === bracketsConfig[j][1]) &&
                (str[i] === bracketsConfig[j][1])
            ) {
                if (arrTest[arrTest.length - 1] === str[i]) {
                    arrTest.pop();
                } else {
                    arrTest.push(str[i]);
                }
            } else {
                if (str[i] === bracketsConfig[j][0]) {
                    arrTest.push(str[i]);
                }
                if (
                    (str[i] === bracketsConfig[j][1]) &&
                    (arrTest[arrTest.length - 1] === bracketsConfig[j][0])
                ) {
                    arrTest.pop();
                }
            }
        }
    }
    if (arrTest.length === 0) {
        return true;
    } else {
        return false;
    }
};






//     strConfig = bracketsConfig.flat();
//     if (str.length % 2 !== 0) {
//         console.log(false);
//         return false;
//     }
//     str = str.split('');
//     for (let i = 0; i < strConfig; i++) {
//         if (!str.includes(strConfig[i])) {
//             console.log(false);
//             return false;
//         }
//     }
//     for (let i = 0; i < strConfig.length; i += 2) {
//         for (let j = 0; j < str.length; j++) {
//             if (str[j] === strConfig[i]) {
//                 let a = j;
//                 let b = str.indexOf(strConfig[i + 1], j+1);
//                 let c = b-a;
//                 console.log(`a=${a}`);
//                 console.log(`b=${b}`);
//                 console.log(`c=${c}`);
//                 if (strConfig[i] === strConfig[i + 1]) {
                    
//                     j = b + 1;
//                 }
//                 if (c < 0) {
//                     console.log(false);
//                     return false;
//                 }
//                 if (str[a] !== str[a + 1] && b - a > 1) {
//                     if ((b-a+1)%2!==0) {
//                     console.log(false);
//                     return false;
//                     }
//                 }
//             }
//         }
//     }
//     console.log(true);


//     return true;
// }
//check('())(', [['(', ')']]);
//check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]);
//check('111115611111111222288888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]);


  

//    console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]));
