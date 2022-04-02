"use strict";

const birthday = new Date(2005, 8, 26, 8, 10);

function toBirthday(birthday) {
  //Birthday Parameters
  const birthdayMonths = birthday.getMonth() + 1;
  const birthdayDays = birthday.getDate();
  const birthdayHours = birthday.getHours();
  const birthdayMinutes = birthday.getMinutes();
  const birthdaySeconds = birthday.getSeconds();

  const timer = document.querySelector("#timer");

  function setDateNumber(dateNumber) {
    if (String(dateNumber).length < 2) {
      return `0${dateNumber}`;
    }
    return dateNumber;
  }

  setInterval(() => {
    //Dates Parameters
    const data = new Date();
    const dataMonths = data.getMonth() + 1;
    const dataDays = data.getDate();
    const dataHours = data.getHours();
    const dataMinutes = data.getMinutes();
    const dataSeconds = data.getSeconds();

    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    //Months
    if (birthdayMonths > dataMonths) {
      months = birthdayMonths - dataMonths;
    } else {
      months = (12 - dataMonths) + birthdayMonths;
    }

    //Days
    if (birthdayDays > dataDays) {
      days = birthdayDays - dataDays;
    } else {
      months -= 1;
      if (dataMonths === 2) {
        days = 28 - dataDays + birthdayDays;
      } else if (dataMonths % 2 || dataMonths === 8) {
        days = 31 - dataDays + birthdayDays;
      } else {
        days = 30 - dataDays + birthdayDays;
      }
    }

    //Hours
    if (birthdayHours > dataHours) {
      hours = birthdayHours - dataHours;
    } else {
      days -= 1;
      hours = 24 - dataHours + birthdayHours;
    }

    //Minutes
    if (birthdayMinutes > dataMinutes) {
      minutes = birthdayMinutes - dataMinutes;
    } else {
      hours -= 1;
      minutes = 59 - dataMinutes + birthdayMinutes;
    }

    //Seconds
    if (birthdaySeconds > dataSeconds) {
      seconds = birthdaySeconds - dataSeconds;
    } else {
      seconds = 59 - dataSeconds + birthdaySeconds;
    }

    //Zero validation
    months = setDateNumber(months);
    days = setDateNumber(days);
    hours = setDateNumber(hours);
    minutes = setDateNumber(minutes);
    seconds = setDateNumber(seconds);

    const date = `${months}:${days}:${hours}:${minutes}:${seconds}`;
    timer.textContent = date;
  }, 1000);
}

toBirthday(birthday);
