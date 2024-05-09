<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative bottom-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabindex="0" ref="list" class="menu menu-sm dropdown-content ml-2  z-[1] p-2 shadow bg-base-300 border-2 rounded-box px-2 min-w-36">
                    <li>
                        <a @click="changeRoute('/')" class="text-lg font-bold my-0.5" >
                            Home
                        </a>
                    </li>
                    <li>
                        <a @click="changeRoute('/info')" class="text-lg font-bold my-0.5" >
                            Info
                        </a>
                    </li>
                    <li>
                        <a @click="rateApp" class="text-lg font-bold my-0.5" >
                            Rate App
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar-center text-2xl mt-0.5">
            Ess<span class="text-secondary">AI</span>
        </div>
        <div v-if="!amount.fetching" class="navbar-end">
            <p class="mr-3 font-bold text-lg">
                {{ (3-amountOfGenerated < 1 ? 0 : 3-amountOfGenerated) + (this.adWatchedState ? 1 : 0)  }}/3<span class="text-primary"></span>
            </p>
        </div>
        <div v-else class="navbar-end">
            <p class="mr-3 font-bold text-lg">
                .../3
            </p>
        </div>
        </div>
</template>

<script>
import { useEssayStore } from '@/stores/essay';
import { mapState } from 'pinia';

  export default {
    name: 'topNav',
    methods: {
        changeRoute (route) {
            this.$refs.list.blur()
            this.$router.push(route)
        },
        rateApp () {
            window.open('https://play.google.com/store/apps/details?id=com.essai.jl.app')
        }
    },
    computed: {
        ...mapState(useEssayStore, {essay: 'essay', amount: 'amount', adWatchedState: 'adWatched'}),
        amountOfGenerated () {
            return this.amount.fetching ? -1 : parseInt(this.amount.data.amount)
        }
    }
  }
</script>

