import Api from '@/services/Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('surveyapi/surveymanager/login', credentials)
  }
}
// AuthenticationService.register({
//     email: 'admin@gmail.com',
//     password: 'admin'
// })
