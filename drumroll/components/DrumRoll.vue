<template>
  <article class="DrumRoll">
    <DrumRollItem class="DrumRoll__Item" :num="2" :index="1" />
    <p class="DrumRoll__Dot">.</p>
    <DrumRollItem :num="8" :index="2" />
  </article>
</template>
<style scoped>
.DrumRoll {
  display: flex;
  align-items: flex-end;
}
.DrumRoll__Dot {
  font-size: 60px;
  line-height: 1;
  padding: 0;
  margin: 0 10px;
  background: linear-gradient(
      27.92deg,
      #97e2fe 20.55%,
      #9ca0ff 41.24%,
      #ff9eb0 60.97%,
      #ffed8c 81.66%
    ),
    linear-gradient(
      48.83deg,
      #97e2fe 15.55%,
      #9ca0ff 50.7%,
      #fe94c7 70.72%,
      #ffcd82 88.11%
    );
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.DrumRoll__Item {
}
</style>