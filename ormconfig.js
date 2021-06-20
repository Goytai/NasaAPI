const entities = process.env.NODE_ENV.trimEnd() === 'production' ? "./dist/modules/**/entities/*.js" : "./src/modules/**/entities/*.ts"

module.exports = {
  "type": process.env.DB_TYPE,
  "url": process.env.DB_URL,
  "useUnifiedTopology": true,
  "entities": [
    entities
  ]
}
