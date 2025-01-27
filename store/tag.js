export const state = () => ({
  categories: [],
  loaders: [],
  gameVersions: [],
  licenses: [],
  donationPlatforms: [],
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_LOADERS(state, loaders) {
    state.loaders = loaders
  },
  SET_GAME_VERSIONS(state, gameVersions) {
    state.gameVersions = gameVersions
  },
  SET_LICENSES(state, licenses) {
    state.licenses = licenses
  },
  SET_DONATION_PLATFORMS(state, donationPlatforms) {
    state.donationPlatforms = donationPlatforms
  },
}

export const actions = {
  async fetchAllTags({ commit }) {
    const [categories, loaders, gameVersions, licenses, donationPlatforms] = (
      await Promise.all([
        this.$axios.get(`tag/category`),
        this.$axios.get(`tag/loader`),
        this.$axios.get(`tag/game_version`),
        this.$axios.get(`tag/license`),
        this.$axios.get(`tag/donation_platform`),
      ])
    ).map((it) => it.data)

    commit('SET_CATEGORIES', categories)
    commit('SET_LOADERS', loaders)
    commit('SET_GAME_VERSIONS', gameVersions)
    commit('SET_LICENSES', licenses)
    commit('SET_DONATION_PLATFORMS', donationPlatforms)
  },
}
