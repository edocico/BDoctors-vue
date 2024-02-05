<template>
  <div class="d-none d-md-inline-block input-search">
    <input
      type="text"
      class="input-text"
      placeholder="cerca un medico"
      v-model="store.searchQuery"
    />
    <input class="btn-search-bar" type="button" value="cerca" />
    
  </div>
  <div class="d-md-none input-search-small">
    <input
        type="text"
        class="input-text"
        placeholder="cerca un medico"
        v-model="store.searchQuery"
    />
    <button class="btn-sm-search-bar"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
      
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store: store,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.input-search {
  background-color: white;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    outline: auto;
  }

  .btn-search-bar {
    background-color: #43762b;
    border: none;
    color: white;
    line-height: 50px;
    padding: 0px 15px;
    font-size: 22px;
    font-weight: 600;
    border-radius: 0px 10px 10px 0px;

    &:hover {
      background-color: #c3e2a5;
      color: #43762b;
    }

  }
  
  .input-text {
    line-height: 45px;
    width: 400px;
    padding-left: 5px;
    border-radius: 10px;
    border: none;

    &:focus {
      outline: none;
    }

  }

}

.input-search-small {

  background-color: white;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    outline: auto;
  }

  .input-text {
    line-height: 35px;
    width: 250px;
    padding-left: 5px;
    border-radius: 10px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .btn-sm-search-bar {
    background-color: #43762b;
    border: none;
    color: white;
    line-height: 40px;
    padding: 0px 15px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 0px 10px 10px 0px;

    &:hover {
      background-color: #c3e2a5;
      color: #43762b;
    }
  }

}


</style>
