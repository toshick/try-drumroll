<template>
  <article class="DrumRoll">
    <DrumRollItem ref="drum1" class="DrumRoll__Item" :num="2" :index="1" />
    <p class="DrumRoll__Dot">.</p>
    <DrumRollItem ref="drum2" :num="8" :index="2" />
  </article>
</template>

<script lang="ts">
export default {
  methods: {
    startRoll() {
      this.$refs.drum1.reset();
      this.$refs.drum2.reset();
      setTimeout(() => {
        this.$refs.drum1.start();
        this.$refs.drum2.start();
      }, 100);
    },
  },
};
</script>

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