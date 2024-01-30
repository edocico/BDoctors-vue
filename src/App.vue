<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader></AppHeader>

  <!--router-->

  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/reset.scss" as *;
</style>
