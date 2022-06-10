<template>
  <main>
    <h1>
      DrumRoll
      <button class="btn-start" @click="startRoll">start</button>
    </h1>
    <section>
      <DrumRoll ref="droll"></DrumRoll>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  methods: {
    startRoll() {
      this.$refs.droll.startRoll();
    },
  },
};
</script>

<style scoped>
main {
  width: 300px;
  margin: 50px auto;
  background-color: #dbf2ff;
  border-radius: 16px;
  padding: 30px;
  border: 2px solid;

  border-image-source: linear-gradient(
    208.35deg,
    #ffc0c0 0.79%,
    #fffcba 30.44%,
    #c5edff 65.7%,
    #f0d0ff 98.93%
  );
}
section {
  display: flex;
  align-items: flex-end;
  margin: 30px;
}
.btn-start {
  margin-left: 20px;
}
</style>