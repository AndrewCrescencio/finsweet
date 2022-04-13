import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from 'vee-validate'

// eslint-disable-next-line camelcase
import pt_BR from 'vee-validate/dist/locale/pt_BR.json'

import { email, required, min, alpha } from 'vee-validate/dist/rules'
import cpf from './rules/cpf'
import date from './rules/date'
import cep from './rules/cep'
import more18 from './rules/more18'
import phone from './rules/phone'
import real from './rules/real'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

localize('pt_BR', pt_BR)

extend('required', {
  ...required,
})

extend('min', {
  ...min,
})

extend('alpha', {
  ...alpha,
})

extend('email', {
  ...email,
})

extend('cpf', {
  validate(value) {
    return cpf(value)
  },
  message: 'CPF inválido',
})

extend('cep', {
  validate(value) {
    return cep(value)
  },
  message: 'CEP inválido',
})

extend('date', {
  validate(value) {
    return date(value)
  },
  message: 'Data inválida',
})

extend('more18', {
  validate(value) {
    return more18(value)
  },
  message: 'Você precisar ser maior de idade',
})

extend('phone', {
  validate(value) {
    return phone(value)
  },
  message: 'Telefone inválido',
})

extend('real', {
  validate(value) {
    return real(value)
  },
  message: 'Valor do item inválido',
})

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'A confirmação da senha não corresponde',
})

extend('password_custom', {
  validate(value) {
    return /[a-z]+/.test(value) || /[A-Z]+/.test(value) || /[0-9]+/.test(value)
  },
  message: 'Senha inválida',
})
