const fs = require("fs");
const path = require("path");

module.exports = async function (context, req) {
    const indexPath = path.join(__dirname, "../../src/index.html");

    try {
        const html = fs.readFileSync(indexPath, "utf8");
        context.res = {
            status: 200,
            headers: { "Content-Type": "text/html" },
            body: html
        };
    } catch (err) {
        context.res = {
            status: 500,
            body: "Error loading index.html"
        };
    }
};
