class AppController {
  static getHomepage(request, response) {
    response.set("Content-type", "text/plain");
    response.status(200).send("Hello Holberton School!");
  }
}
module.exports = AppController;
