<template>
    <div class="h-screen max-w-md mx-auto">
        <div class="mt-4">
            <label class="mb-4" for="topic">
                Topic:
            </label>
            <br>
            <div>
                <input
                    v-model="topic"
                    tabindex="1"
                    class="input input-bordered border-white border-opacity-50 mt-2 w-10/12 max-w-sm placeholder-base-400"
                    placeholder="Essay Topic"
                    name="topic"
                    id="topic"
                    autocomplete="off"
                    ref="topic"
                    @focus="focus('topic')"
                    @blur="blur('topic')"
                    @keydown.enter="blur('topic')"
                    enterkeyhint="done"
                />
                <div class="text-error mt-1 -mb-1" v-for="error in v$.topic.$errors">
                    {{ error.$message }}
                </div>
            </div>
        </div>
             <div class="mt-5">
                <label class="mb-4" for="topic">
                    Language:
                </label>
                <Dropdown
                    tabindex="1"
                    :items="languages"
                    :selected="language"
                    @select="selectLanguage"
                    :items-classes="'-top-40'"
                    ref="languages"
                    @click="blur()"
                />
            </div>
            <div class="mt-5">
                <label class="mb-4" for="topic">
                    Mood:
                </label>
                <Dropdown
                    tabindex="1"
                    :items="moods"
                    :selected="mood" 
                    @select="selectMood"
                    :items-classes="'-top-20'"
                    @click="blur()"
                />
            </div>
            <div class="mt-5">
                <label class="mb-4" for="topic">
                    Style:
                </label>
                <Dropdown
                    tabindex="1"
                    :items="styles"
                    :selected="style" 
                    @select="selectStyle"
                    :items-classes="'-top-32'"
                    @click="blur()"
                />
            </div>
            <div class="mt-4">
                <label class="mb-4" for="topic">
                    Words:
                </label>
                <br>
                <div>
                    <input
                        tabindex="1"
                        v-model="words"
                        class="input input-bordered border-white border-opacity-50 mt-2 w-20"
                        type="number"
                        ref="words"
                        min="20"
                        max="2000"
                        @focus="focus('words')"
                        @blur="blur('words')"
                        @keydown.enter="blur('words')"
                        enterkeyhint="next"	
                    />
                    <div class="text-error mt-1 -mb-1" v-for="error in v$.words.$errors">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <button
                    @click="$emit('generate', {style: style, topic: topic, words: words, language: language, mood: mood} )"
                    class="btn btn-secondary fixed bottom-16"
                    :disabled="v$.words.$errors.length > 0 || v$.topic.$errors.length || topic.length < 1 || words < 20"
                >
                    Write Essay
                    <font-awesome-icon :icon="['fas', 'pen']" />
                </button>
            </div>
    </div>
</template>

<script>
import Dropdown from '@/components/base/Dropdown.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, minValue, maxValue, maxLength } from '@vuelidate/validators'

export default {
    components: { Dropdown },
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
      return {
          words: 100,
          language: '',
          mood: '',
          moods: [
              'Neutral',
              'Excited',
              'Sad',
              'Happy',
              'Angry',
              'Disappointed',
              'Friendly'
          ],
          style: '',
          styles: [
              'Neutral',
              'Academic',
              'Journalistic',
              'Sarcastic',
              'Colloquial',
              'Humorous',
              'School Essay'
          ],
          topic: '',
          languages: [
            'English',
            'German',
            'French',
            'Spanish',
            'Italian',
            'Portuguese',
            'Polish',
            'Mandarin',
            'Cantonese',
            'Hindi',
            'Afrikaans',
            'Danish',
            'Swedish',
            'Norwegian',
            'Ukrainian',
            'Russian',
            'Japanese',
            'Indonesian'
          ]
      }
  },
  validations () {
    return {
        words: { required, minValueValue: minValue(20), maxValueValue: maxValue(2000) },
        topic: { required, maxLengthValue: maxLength(255) }
    }
  },
  created () {
    this.mood = 'Neutral'
    this.language = 'English'
    this.words = '100'
  },
  methods: {
      selectMood(mood) {
          this.mood = mood
      },
      selectStyle(style) {
          this.style = style
      },
      selectLanguage(language) {
          this.language = language
      },
      focus (item) {
        const yOffset = -10; 
        const y = this.$refs[item].getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({top: y})
      },
      blur (el) {
        if (el?.length > 0) this.v$[el].$touch()
        this.$refs[el].blur()
        window.scrollTo({top: 0})
      }
  }
}
</script>