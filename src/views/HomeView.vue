<template>
  <Header 
    v-if="essay.data.length === 0 && (amountOfGenerated < 3 || adWatched)"
    title="Welcome!"
    sub-title="Select your
     preferred style and length and we will quickly write a new Essay for you!"
  />
  <div v-if="essay.data.length === 0" class="divider max-w-xl mx-auto" />
  <EssayForm
    v-if="essay.data.length === 0 && !essay.fetching && !amount.fetching && (amountOfGenerated < 3 || adWatched) && device_id !== ''"
    class="mb-20"
    @generate="generate"
  />
  
  <div v-else-if="amountOfGenerated >= 3 && (!adWatched) && device_id !== ''">
    <div v-if="!adLoaded">
      <Loader class="mt-6" />
    </div>
    <div v-else>
      <h3 class="text-2xl font-bold mt-10 mb-3">
        You have reached your daily limit
      </h3>
      <p class="text font-bold">
        Watch an ad to generate more essays or try again tomorrow.
      </p>
      <button v-if="adLoaded" @click="watchAd" class="btn btn-secondary mt-12">
        Watch Ad
      </button>
      <p class="text text-error mt-3">
        {{ failedLoadText }}
      </p>
    </div>
  </div>

  <div v-else-if="essay.fetching" class="mt-6">
    <h3 class="text-lg">
      Writing your Essay...
    </h3>
    <Loader class="mt-6" />
  </div>

  <div v-else-if="amount.fetching || device_id === ''" class="mt-6">
    <Loader class="mt-6" />
  </div>

  <Essay v-else :topic="topic" :essay="essay.data" @back="goBack" />
  
</template>


<script>
import Header from '@/components/base/Header.vue';
import EssayForm from '@/components/essay/EssayForm.vue';
import Loader from '@/components/base/Loader.vue';
import Essay from '@/components/essay/Essay.vue';
import { mapActions, mapState } from 'pinia';
import { useEssayStore } from '@/stores/essay';
import { uuid } from 'vue-uuid'; 

export default {
  components: { Header, EssayForm, Loader, Essay },
  data () {
      return {
        topic: '',
        device_id: ''
      }
  },
  computed: { 
    ...mapState(useEssayStore, {essay: 'essay', amount: 'amount', adWatched: 'adWatched'}),
    amountOfGenerated () {
      return this.amount.fetching ? -1 : parseInt(this.amount.data.amount)
    }
  },
  created () {
    window.addEventListener('customCodeEvent', event => {
        this.device_id = '1'
        alert('test')
        alert(code)
    });
    this.getAmount()
  },
  methods: {
    ...mapActions(useEssayStore, { generateEssay: 'generateEssay', getAmountGeneratedToday: 'getAmountGeneratedToday', setAdWatched: 'setAdWatched'}),
    generate (params) {
        this.topic = params.topic
        let date = new Date()
        date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        const data = {
            topic: params.topic,
            words: params.words,
            style: params.style,
            language: params.language,
            mood: params.mood,
            device_id: this.device_id,
            local_date: date
        }
        this.generateEssay(data)
      },
      getAmount () {
        let date = new Date()
        date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        this.getAmountGeneratedToday({ userID: this.device_id, currentDate: date })
      },
      goBack () {
        this.setAdWatched(false)
        this.essay.data = ''
        this.getAmount()
      },
      watchAd () {
        window.webkit.messageHandlers.showRewardAd.postMessage({
            "message": 'showRewardAd'
        })
      },
      adWatched () {
        this.setAdWatched(true)
      },
      setUUID (uuid) {
        alert('test')
        alert(uuid)
        this.device_id = uuid
      }
  }
}
</script>