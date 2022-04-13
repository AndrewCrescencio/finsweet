String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.replaceAll = function (search, replacement) {
  const target = this
  return target.replace(new RegExp(search, 'g'), replacement)
}

String.prototype.camelToSnakeCase = function () {
  const target = this
  return target.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

// const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
