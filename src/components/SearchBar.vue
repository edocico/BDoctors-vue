<template>
  <div class="input-search">
    <input type="text" class="input-text" placeholder="cerca un medico" />
    <input class="btn" type="button" value="cerca" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input-search {
  margin-top: 15px;
  position: relative;
  .btn {
    background-color: lightgray;
    position: absolute;
    left: 323px;
    border-radius: 0px;
    text-transform: uppercase;

    .btn:hover {
      background-color: darkgray;
    }
  }

  .btn:hover {
    background-color: darkgray;
  }

  .input-text {
    line-height: 2.2em;
    width: 400px;
    padding-left: 5px;
  }
}
</style>
