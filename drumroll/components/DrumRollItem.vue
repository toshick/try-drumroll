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
  width: 30,
  height: 50,
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
    };
  },
  created() {
    const nums = [];
    for (let i = this.num; i < 31; i += 1) {
      nums.push(i % 10);
    }

    this.panelNums = nums;
  },
  mounted() {
    this.startRoll();
  },
  methods: {
    startRoll() {
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
  width: 30px;
  height: 50px;
  border: solid 1px #333;
  background-color: #fff;
  border-radius: 4px;
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
  width: 30px;
  height: 50px;
}
.Panels__Num p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  margin: 0;
  padding: 0;
}
</style>