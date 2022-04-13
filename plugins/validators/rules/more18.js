import moment from 'moment'

export default (date) => {
  const birthday = moment(date, 'DD.MM.YYYY')
  const age = moment().diff(birthday, 'years')
  return age >= 18
}
