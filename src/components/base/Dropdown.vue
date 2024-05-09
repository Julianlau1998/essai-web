<template>
    <div class="dropdown w-full border-white flex justify-center" tabindex="1">
        <div tabindex="0" role="button" class="btn btn-outline border-white border-opacity-50 w-10/12 max-w-sm m-1">
            <span v-if="selected.length === 0" class="font-light text-md">
                Select Style
            </span>
            <span v-else class="font-normal">
                {{ selected }}
            </span>
            <i class="ml-auto"> 
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </i>
        </div>
        <ul
            ref="dropdown"
            tabindex="1"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-300 border-2 rounded-box w-10/12 max-w-sm max-h-50 overflow-y-scroll block"
            :class="itemsClasses"
        >
            <li v-for ="item in items" @click="select(item)" class="hover:bg-primary active:bg-primary hover:text-black rounded-lg">
                <a class="font-bold text-lg active:bg-primary" :class="{'text-primary': item === selected}">
                    {{ item }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        selected: {
            type: String,
            required: false,
            default: ''
        },
        itemsClasses: {
            type: String,
            required: false,
            default: ''
        }
    },
    data () {
        return {
        }
    },
    methods: {
        select (item) {
            this.$emit('select', item)
            this.$refs.dropdown.blur()
        }
    }
}

</script>