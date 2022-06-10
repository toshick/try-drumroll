<template>
  <main>
    <h1>Index page</h1>
    <section>
      <DrumRoll></DrumRoll>
    </section>
  </main>
</template>
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
</style>