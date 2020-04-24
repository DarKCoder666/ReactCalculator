import axios from 'axios';

const journalAPI = {
  get: {
    list: async() => {
      const res = await axios.get(`/api/calculations`)
      return res.data.calculations
    }
  },
  post: {
    list: async(calc) => {
      const res = await axios.post('/api/calculations', calc)
      console.log(res)
    }
  }
}

export default journalAPI