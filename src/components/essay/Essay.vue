<template>
    <div class="w-full sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mb-4">
        <h1 class="font-bold text-2xl mb-4">
            {{ topic  }}
        </h1>
        <div class="w-full justify-start">
            <button @click="copy" class="btn btn-sm btn-primary mx-2 px-4 float-left">
                <font-awesome-icon :icon="['fas', 'copy']" />
            </button>
            <button @click="copy" class="btn btn-sm btn-primary mx-2 px-4 float-left">
                <font-awesome-icon :icon="['fas', 'share-alt']" />
            </button>
            <span class="float-right relative top-1">
                Words: {{ essay.split(" ").length }}
            </span>
        </div>
    </div>
    <br><br>
    <div class="w-full sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto mb-48">
        <p class="text-lg text-justify">
            {{ essay }}
        </p>
    </div>

    <div class="w-full flex justify-center">
        <button @click="$emit('back')" class="btn btn-secondary fixed bottom-16">
            Back
        </button>
    </div>
</template>

<script>
import { stringify } from 'postcss';

export default {
    props: {
        topic: {
            type: String,
            required: true
        },
        essay: {
            type: String,
            required: true
        }
    },
    methods: {
        async copy () {
            navigator.clipboard.writeText(this.essay)
        }
    }
}    
</script>

<style>
    .text-justify {
        hyphens: auto !important;
        word-spacing: -0.05em !important;
    }
</style>