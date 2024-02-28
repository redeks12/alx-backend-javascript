class AppController {
  static getHomepage(request, response) {
    response.setHeader("Content-Type", "plain/text");
    response.status(200).send("Hello Holberton School!");
  }
}
module.exports = AppController;
