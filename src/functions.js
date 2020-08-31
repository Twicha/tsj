export function scrollTop() {
    window.scrollTo(0, 0);
}

export function twoStepScroller(firstCoord, secondCoord) {
    window.scrollTo({
        top: firstCoord
    })
    
    setTimeout(() => {
        window.scrollTo({
            top: secondCoord,
            behavior: "smooth"
        })
    }, 20);
}





// ####################################################################
// ####################################################################
// ####################################################################
// ####################################################################
// ####################################################################
// блок функций относящихся к времени публикации поста

// перевод данных для даты в числовой формат
function dateToNum(value) {
    const date = new Date();

    return +date.toLocaleString("ru", value);
}

// функция которая правильно склоняет конретные слова
function wordAnalysis(num, type) {
    const arr1 = [1, 21, 31, 41, 51];
    const arr2 = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];

    function wordDeclension(name1, name2, name3) {
        if (arr1.indexOf(num) + 1) {
            return name1;
        } else if (arr2.indexOf(num) + 1) {
            return name2;
        } else {
            return name3;
        }
    }
    
    if (type === 'sec') {
        return wordDeclension('секунду', 'секунды', 'секунд');
    } else if (type === 'min') {
        return wordDeclension('минуту', 'минуты', 'минут');
    } else if (type === 'hour') {
        if (num === 1) {
            return 'час';
        } else {
            return 'часа';
        }
    } 
}

// добавляет дополнительный ноль во время, чтобы было так "05:07:13", а ты так "5:7:13"
function addZero(item) {
    return item.length === 1 ? '0' + item : item;
}

// функция возвращает строку, когда (сегодня или вчера) и во сколько была опубликована запись 
function postTodayYesterday(when, hour, minutes, seconds) {
    return `${when} ${addZero(hour)}:${addZero(minutes)}:${addZero(seconds)}`;
}

// функция которая вычисляет разницу во времени между публикацией поста и выводом его на страницу, 
// и возвращает строку с данными в какое время была опубликована конкрутная запись
export function postedTime(obj) {
    const {fullDate, timestamp, year, month, day, hour, minutes, seconds} = obj;
    const timestampNow = Math.floor(Date.now() / 1000) ; // таймстемп в текущий момент
    const difference = timestampNow - timestamp; // разница таймстемпа в данный момент и таймстемпа во время публикации поста
    
    // год, месяц, день на данный момент, которые будут переводиться к числовому типу с помощью функции dateToNum()
    const yearNow = {
        year: 'numeric',
    }
    const monthNow = {
        month: 'numeric',
    }
    const dayNow = {
        day: 'numeric',
    }
    
    if (difference <= 0) {
        return `только что`
    } else if (difference < 60) {
        return `${difference} ${wordAnalysis(difference, 'sec')} назад`
    } else if (difference < 3600) {
        return `${Math.floor(difference / 60)} ${wordAnalysis(Math.floor(difference / 60), 'min')} назад`
    } else if (difference < (3600 * 4)) {
        return `${Math.floor(difference / 3600)} ${wordAnalysis(Math.floor(difference / 3600), 'hour')} назад`
    } else if (dateToNum(dayNow) === +day
        && dateToNum(monthNow) === +month
        && dateToNum(yearNow) === +year) {
        return postTodayYesterday('сегодня', hour, minutes, seconds);
    } else if (dateToNum(dayNow) === (+day + 1)
        && dateToNum(monthNow) === +month
        && dateToNum(yearNow) === +year) {
        return postTodayYesterday('вчера', hour, minutes, seconds);
    } else {
        return fullDate;
    }
}
// ####################################################################
// ####################################################################
// ####################################################################
// ####################################################################
// ####################################################################




export function createPostedTime() {
    const date = new Date();
    const timeZone = -date.getTimezoneOffset() / 60;
    const fullDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const year = {
        year: 'numeric',
    }
    const month = {
        month: 'numeric',
    }
    const day = {
        day: 'numeric',
    }
    const hour = {
        hour: 'numeric',
    }
    const minutes = {
        minute: 'numeric',
    }
    const seconds = {
        second: 'numeric'
    }

    const posted = {};

    function timeSave(named, item) {
        posted[named] = date.toLocaleString("ru", item);
    }

    timeSave('fullDate', fullDate);
    timeSave('year', year);
    timeSave('month', month);
    timeSave('day', day);
    timeSave('hour', hour);
    timeSave('minutes', minutes);
    timeSave('seconds', seconds);
    posted.timestamp = Math.floor(Date.now() / 1000);
    posted.timeZone = timeZone;

    return posted;
}




