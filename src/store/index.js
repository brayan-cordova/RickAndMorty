import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    // stores all characters in general
    characters: [],
    // queries and filters for the api
    charactersFilter: []
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: {
    // get the characters from the api
    async getCharacters({
      commit
    }) {
      try {
        //getting characters
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})