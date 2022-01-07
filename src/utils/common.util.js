/* eslint-disable no-useless-escape */
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

function deepcopy(obj) {
  let clone = null;
  if (Array.isArray(obj)) clone = [];
  else clone = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null)
      clone[key] = deepcopy(obj[key]);
    else clone[key] = obj[key];
  });

  return clone;
}

function setComma(value) {
  const result = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return result;
}

function queryToDict(str, padding = []) {
  if (str) {
    const query = {};
    try {
      const splitedStr = str.replace('?', '').split('&');
      splitedStr.forEach((item) => {
        const [key, value] = item.split('=');
        query[key] =
          padding.length > 0 && padding.includes(key) ? value : +value || value;
      });
    } catch (err) {
      console.log(err);
    }
    return query;
  }
  return '';
}

function dictToQuery(obj) {
  if (obj) {
    const query = [];
    Object.keys(obj).forEach((key) => {
      query.push(`${key}=${obj[key]}`);
    });
    return `?${query.join('&')}`;
  }
  return '';
}

function setFormatDate(value, format) {
  if (value) {
    return dayjs(value).format(format || 'YYYY-MM-DD');
  }
  return '';
}

function datePadding(value) {
  // ? type: month, date, hour, minutes, seconds
  if (value) {
    return value < 10 ? `0${value}` : value;
  }
  return '';
}

function convertCourse(course) {
  if (course) {
    const courseCode = String(course);
    switch (courseCode) {
      case '11':
        return 'V';
      case '22':
        return 'A';
      case '33':
        return 'B';
      default:
        return 'C';
    }
  }
  return '';
}

function checkMobile() {
  let check = false;
  // eslint-disable-next-line func-names
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(
        a.substr(0, 4),
      )
    )
      check = true;
  }(navigator.userAgent || navigator.vendor || window.opera));
  return check;
}

function encodeQuery(query) {
  if (query) return window.btoa(query);
  return '';
}

function decodeQuery(query) {
  if (query) return window.atob(query);
  return '';
}

function convertDate(r) {
  if (!r) {
    return new Date();
  }
  const year = r.substring(0, 4);
  const month = parseInt(r.substring(4, 6), 10) - 1;
  const day = r.substring(6, 8);
  const hour = r.substring(8, 10);
  const minute = r.substring(10, 12);
  return new Date(year, month, day, hour, minute);
}

function convertDayOfWeek(day) {
  if (day.includes('Monday')) {
    return day.replace('Monday', '월');
  }
  if (day.includes('Tuesday')) {
    return day.replace('Tuesday', '화');
  }
  if (day.includes('Wednesday')) {
    return day.replace('Wednesday', '수');
  }
  if (day.includes('Thursday')) {
    return day.replace('Thursday', '목');
  }
  if (day.includes('Friday')) {
    return day.replace('Friday', '금');
  }
  if (day.includes('Saturday')) {
    return day.replace('Saturday', '토');
  }
  if (day.includes('Sunday')) {
    return day.replace('Sunday', '일');
  }
  return '';
}

function validationEmail(email) {
  if (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  return false;
}

function validationPhoneNumber(phoneNumber) {
  if (phoneNumber) {
    const re = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    return re.test(String(phoneNumber).toLowerCase());
  }
  return false;
}

export {
  deepcopy,
  queryToDict,
  setFormatDate,
  dictToQuery,
  setComma,
  datePadding,
  convertCourse,
  checkMobile,
  encodeQuery,
  decodeQuery,
  convertDayOfWeek,
  convertDate,
  validationEmail,
  validationPhoneNumber,
};
