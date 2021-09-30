<template>
  <div>
    <EnvBackupHome />
    <StartBackup />
  </div>  
</template>

<script lang="ts">
  import Vue from 'vue'
  import StartBackup from '../components/StartBackup.vue'
  import EnvBackupHome from '../components/EnvBackupHome.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      StartBackup,
      EnvBackupHome
    },
  })
</script>
