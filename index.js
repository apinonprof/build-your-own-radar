const path = require('path')
const fs = require('fs')

// eslint-disable-next-line no-unused-vars
module.exports = async function (context, _req) {
  const filePath = path.join(__dirname, 'index.html')

  try {
    const html = fs.readFileSync(filePath, 'utf8')

    context.res = {
      headers: { 'Content-Type': 'text/html' },
      body: html,
    }
  } catch (err) {
    context.log.error('Error loading HTML file:', err)
    context.res = {
      status: 500,
      body: 'Error loading HTML file',
    }
  }
}
