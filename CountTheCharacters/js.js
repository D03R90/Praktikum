(function () {
    let letters = {},
        inp = document.getElementById("input-field"),
        val,
        oldval,
        lastChar;
    inp.addEventListener("keyup", function (e) {
        val = this.value;
        console.log(val);

        // keyCode === 8 - Отвечает за кнопку удаления
        if (e.keyCode === 8) {
            lastChar = oldval.slice(-1).toUpperCase();
            letters[lastChar] = letters[lastChar] - 1;
            if (letters[lastChar] === 0) {
                delete letters[lastChar];
            }
            // keyCode >= 65 && keyCode <= 90 - Отвечают за символы на клавиатуре
        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            if (val.length) {
                strToArr(val);
            }
        }

        //Сохранение старых значений
        oldval = val;
        console.log(letters);
    });

    //Проверка на наличие совпадений в символах
    function strToArr(str) {
        let arr = str.split(""),
            letter = arr[arr.length - 1].toUpperCase();
        if (letters[letter]) {
            letters[letter] = letters[letter] + 1;
        } else {
            letters[letter] = 1;
        }
    }

})();