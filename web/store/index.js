// https://stackoverflow.com/questions/57199709/how-to-share-variable-with-nuxt-js-from-layout-to-pages

export const state = () => ({
  searchText: ""
});

export const mutations = {
  setSearchText(state, searchText) {
    state.searchText = searchText;
  }
};

export const getters = {
  getSearchText(state) {
    return state.searchText;
  }
};
