export default class Url {
  static get API_URL () {
    return 'http://localhost:9000/'
  }

  static get LOGIN_URL () {
    return this.API_URL + 'login'
  }

}
