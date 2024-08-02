import { defineStore } from 'pinia'

const useExampleStore = defineStore('example', {
    state: () => ({
        example: 'example'
    })
})

export default useExampleStore;