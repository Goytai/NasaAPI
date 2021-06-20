const entities = process.env.NODE_ENV.trimEnd() === 'production' ? "./dist/modules/**/entities/*.js" : "./src/modules/**/entities/*.ts"
const type = process.env.NODE_ENV.trimEnd() === 'production' ? process.env.DB_TYPE : "mongodb"
const url = process.env.NODE_ENV.trimEnd() === 'production' ? process.env.DB_URL : "mongodb://root:root@localhost:27017/voltbras?authSource=admin&readPreference=primary&ssl=false"

module.exports = {
  "type": type,
  "url": url,
  "useUnifiedTopology": true,
  "entities": [
    entities
  ]
}
