export default (cep) => {
  cep = cep.replace(/\D/g, '')
  if (cep !== '') {
    const validateCep = /^[0-9]{8}$/
    return validateCep.test(cep)
  } else {
    return false
  }
}
