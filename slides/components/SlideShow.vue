<template lang="pug">
    slide(:steps="4")
      p(v-if="step >= 1")
        | {{step}}
      p(v-if="step >= 2")
        | {{step}}
      p(v-if="step >= 3")
        | {{step}}
      p(v-if="step >= 4")
        | {{step}}
</template>

<script>
import Eagle from 'babel-loader!eagle.js'

export default {
  mixins: [Eagle.slideshow]
}
</script>