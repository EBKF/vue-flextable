<template lang="pug">
.ft-heading
  slot
    ft-heading-row
</template>

<script lang="babel">
import ftHeadingRow from './Row';

export default {
  components: { ftHeadingRow },
};
</script>
