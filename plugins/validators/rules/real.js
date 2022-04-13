export default (value) => {
  let valueReal = value.toString()
  valueReal = valueReal.replace('R$ ', '').replace(',', '.')
  if (valueReal.length >= 8) {
    valueReal = valueReal.replace('.', '')
  }
  valueReal = parseFloat(valueReal).toFixed(2)
  return valueReal > 0 && valueReal <= 500
}
