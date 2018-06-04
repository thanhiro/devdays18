<template>
    <div>{{ ip }}</div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const ip = await app.$axios.$get("http://icanhazip.com");
    console.log("DID IT: " + ip);
    return { ip };
  }
};
</script>