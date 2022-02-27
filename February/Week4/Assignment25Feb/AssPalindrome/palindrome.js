let input = prompt('enter the number')
palindrom(input); 
function palindrom(mukeet) {
    ln = mukeet.length - 1;
    var flag = 1;
    for (var i = 0; i <= ln; i++) {
        if (mukeet[i] == mukeet[ln - i]) {
            flag=1;
        }
        else {
            flag = 2
        }
    }
    if (flag == 1) {
        document.write(`${input} : is a Palindrom String`);
    }
    else {
        document.write(`${input} : is a NOTPalindrom String`)
    }

}