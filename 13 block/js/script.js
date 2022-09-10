const currentDate = new Date();
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
for (let i=0; i<2; i++){
    const today = document.querySelectorAll('h2, h3')[i];
    today.innerText = `${currentDate.getDate()}` + ' ' + 
    `${currentDate.toLocaleString('default', { month: 'long' }).capitalize()}` + ' ' + 
    `${currentDate.getFullYear()}`;
}

const hour = new Date();
hour.setHours(9);
for (let i=0;i<10;i++){
    const hourEl = document.querySelectorAll('.block-time p')[i];
    hourEl.innerText = hour.getHours() + i + ":00";
}

blockDayEl = document.querySelector('.block-date-nums');
function createCalendar(elem, year, month) {
    let d = new Date(year, month), 
    firstDayOfMonth = new Date(year, month, 7).getDay(),
    lastDayOfLastMonth = month == 0 ? new Date(year-1, 11, 0).getDate() : new Date(year, month, 0).getDate();

    let table = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';

    let k = lastDayOfLastMonth - firstDayOfMonth+1;
    for (let i = 0; i < firstDayOfMonth; i++) {
        table += '<td class="other-month">' + k + '</td>';
        k++;
    }

    while (d.getMonth() == month) {
        if(d.getDate()<10){
            if(d.getDate() == currentDate.getDate()){
                table += '<td class="current-date">' + '0' + d.getDate() + '</td>';
            }else{
                table += '<td>' + '0' + d.getDate() + '</td>';
            }
        }else{
            if(d.getDate() == currentDate.getDate()){
                table += '<td class="current-date">' + d.getDate() + '</td>';
            }else{
                table += '<td>' + d.getDate() + '</td>';
            }
        }
      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        k = 1;
      for (let i = getDay(d); i < 7; i++) {
        table += '<td class="other-month">' + '0' + k + '</td>';
        k++;
      }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }

  createCalendar(blockDayEl, currentDate.getFullYear(), currentDate.getMonth());