<template>
  <article class="DrumRoll">
    <DrumRollItem class="DrumRoll__Item" :num="4" :index="1" />
    <DrumRollItem :num="6" :index="2" />
  </article>
</template>
<style scoped>
.DrumRoll {
  display: flex;
}
.DrumRoll__Item {
  margin: 0 10px;
}
</style>