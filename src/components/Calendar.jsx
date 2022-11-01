import React from 'react'
import '../css/main.css'

const Calendar = (props) => {
  console.log()
  return (<>
    <div className="ui-datepicker">
  <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{props.now.toLocaleDateString('RU-ru', { weekday: 'long' }).toString().toUpperCase()[0] + 
    props.now.toLocaleDateString('RU-ru', { weekday: 'long' }).toString().slice(1, )}</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{props.now.day}</div>
      <div className="ui-datepicker-material-month">{props.now.toLocaleString('default', { month: 'long' })}</div>
      <div className="ui-datepicker-material-year">{props.now.getUTCFullYear()}</div>
    </div>
  </div>
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{props.now.toLocaleString('default', { month: 'long' })}</span>&nbsp;<span className="ui-datepicker-year">{props.now.getUTCFullYear()}</span>
    </div>
  </div>
  <table className="ui-datepicker-calendar">
    <colgroup>
      <col/>
      <col/>
      <col/>
      <col/>
      <col/>
      <col className="ui-datepicker-week-end"/>
      <col className="ui-datepicker-week-end"/>
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="ui-datepicker-other-month">27</td>
        <td className="ui-datepicker-other-month">28</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>7</td>
        <td className="ui-datepicker-today">8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
      </tr>
      
    </tbody>
  </table>
</div>
  </>)
}

Calendar.propTypes = {}

export default Calendar
