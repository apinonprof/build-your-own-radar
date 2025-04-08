const path = require('path')
const fs = require('fs')

module.exports = async function (context, req) {
  const filePath = path.join(__dirname, '../../src/index.html')

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
