<template>
  <div class="Panels">
    <!-- panels -->
    <ul class="Panels__List" :style="{ top: pos }">
      <li class="Panels__Num" v-for="(n, index) in panelNums" :key="index">
        <p>{{ n }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { animate, easeInOut } from "popmotion";

const size = {
  width: 56,
  height: 72,
};

export default {
  props: {
    num: {
      type: Number,
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      panelNums: [],
      pos: "100%",
      resetPos: 0,
    };
  },
  created() {
    const nums = [];
    for (let i = this.num; i < 61; i += 1) {
      nums.push(i % 10);
    }

    this.panelNums = nums;
  },
  mounted() {
    this.resetPos = -size.height * (this.panelNums.length - 1);
    this.reset();
    this.start();
  },
  methods: {
    reset() {
      this.pos = `${this.resetPos}px`;
    },
    start() {
      animate({
        from: -size.height * (this.panelNums.length - 1),
        to: 0,
        duration: 3000,
        elapsed: -1000 * this.index,
        ease: [easeInOut],
        onUpdate: (latest) => {
          this.pos = `${latest}px`;
        },
      });
    },
  },
};
</script>

<style scoped>
.Panels {
  position: relative;
  width: 56px;
  height: 72px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
}
.Panels__List {
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}
.Panels__Num {
  position: relative;
  width: 56px;
  height: 72px;
}
.Panels__Num p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  margin: 0;
  padding: 0;
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>