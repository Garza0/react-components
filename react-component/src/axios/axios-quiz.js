import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-9e3e5.firebaseio.com/'
})