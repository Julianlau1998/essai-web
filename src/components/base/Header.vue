<template>
    <div class="max-w-96 mx-auto">
      <!-- <h1 class="text-2xl text-primary">
          {{ title }}
      </h1> -->
      <p class="text-md mt-4">
          {{ subTitle }}
      </p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: false,
            default: ''
        }
    },
    data () {
        return {
        }
    }
}
</script>