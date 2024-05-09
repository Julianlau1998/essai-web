import { defineStore } from 'pinia'
import axios from 'axios'

axios.baseURL = 'http://localhost:3000/api/'

export const useEssayStore = defineStore('essay', {
  state: () => ({
    essay: {
      fetching: false,
      data: '',
      fetched: true
    },
    amount: {
      fetching: false,
      data: '',
      fetched: true
    },
    adWatched: false
  }),
  
  actions: {
    async generateEssay(data) {
      this.essay.fetching = true
      try {
        this.essay.data = await axios.get(`https://essai-backend-6s6o5yal7q-ez.a.run.app/api/essay?topic=${data.topic}&words=${data.words}&style=${data.style}&language=${data.language}&mood=${data.mood}&device_id=${data.device_id}&localDate=${data.local_date}`)
        this.essay.data = this.essay.data.data
      } catch (err) {
        console.log(err)
      }
      this.essay.fetching = false
      this.essay.fetched = true
    },
    async getAmountGeneratedToday(data) {
      this.amount.fetching = true
      try {
        this.amount.data = await axios.get(`https://essai-backend-6s6o5yal7q-ez.a.run.app/api/essay/amount/user/${data.userID}?currentDate=${data.currentDate}`)
        this.amount.data = this.amount.data.data
      } catch (err) {
        console.log(err)
      }
      this.amount.fetching = false
      this.amount.fetched = true
    },

    async getTemplate(data) {
      this.amount.fetching = true
      try {
        this.amount.data = await axios.get(`https://essai-backend-6s6o5yal7q-ez.a.run.app/api/essay/amount/user/${data.userID}?currentDate=${data.currentDate}`)
        this.amount.data = this.amount.data.data
      } catch (err) {
        console.log(err)
      }
      this.amount.fetching = false
      this.amount.fetched = true
    },
    setAdWatched (watched) {
      this.adWatched = watched
    }
  }
})
