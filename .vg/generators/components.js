const {
  logError,
  logPrimary,
  logSuccess,
  logWarn,
} = require('./../helpers/logs')

const path = require('path')
const fs = require('fs')
const exts = ['vue', 'html', 'js', 'scss']

const getNameComponent = (nameFull) => {
  const splitName = nameFull.split('/')
  let nameComponent = splitName[splitName.length - 1]

  if (splitName.length > 1) {
    const prefixNameComponent = splitName[splitName.length - 2]

    if (nameComponent.indexOf('_') !== -1) {
      nameComponent = nameComponent.replaceAll('_', '').capitalize()
      nameComponent = prefixNameComponent + nameComponent
    }
  } else {
    if (nameComponent.indexOf('_') !== -1) {
      nameComponent = nameComponent.replaceAll('_', '')
    }
  }

  return nameComponent
}

const generateFile = (ext, dir, nameFull, nameComponent, type) => {
  const file = ext === 'vue' ? 'index.vue' : `${nameComponent}.component.${ext}`

  if (ext === 'js') {
    nameComponent = nameComponent.capitalize()
    type = type.capitalize()
  }

  if (ext === 'spec.js') {
    nameComponent = nameComponent.capitalize()
  }

  fs.readFile(
    path.join(__dirname, '../', 'blueprint', 'components', `file.${ext}`),
    'utf8',
    (err, data) => {
      if (err) {
        logError(err)
        fs.rmdirSync(dir, { recursive: true })
        logError(`❌ File ${nameComponent}.${ext} removed!!!`)
        return
      }
      if (ext === 'spec.js') {
        data = data.replaceAll('__nameFull__', nameFull)
      }
      data = data.replaceAll('__name__', nameComponent)
      data = data.replaceAll('__type__', `${type}s`)

      fs.writeFileSync(`${dir}/${file}`, data)
    }
  )
}

const generateComponent = (type, nameFull, skipTests) => {
  const nameComponent = getNameComponent(nameFull)
  nameFull = type === 'page' ? nameFull.camelToSnakeCase() : nameFull
  const dir = path.resolve(__dirname, '../../', `${type}s`, nameFull)

  logPrimary('Generating... ☕')

  try {
    //Make dir
    fs.lstat(dir, (err, stats) => {
      if (err || !stats.isDirectory()) {
        fs.mkdirSync(dir, { recursive: true })

        exts.forEach((ext) => {
          generateFile(ext, dir, nameFull, nameComponent, type)
        })

        if (!skipTests) {
          generateFile('spec.js', dir, nameFull, nameComponent, type)
        }

        logSuccess(`✅ ${type.capitalize()} ${nameComponent} generate!!!`)
      } else {
        logWarn(`⚠️  ${type.capitalize()} ${nameComponent} exist!!! ⚠️`)
      }
    })
  } catch (err) {
    if (err.code !== 'EEXIST') {
      fs.rmdirSync(dir, { recursive: true })
      throw err
    }
    logWarn(`⚠️  ${type.capitalize()} ${nameComponent} exist!!! ⚠️`)
  }
}

module.exports = generateComponent
