<template>
    <div class="project_display_section">
    <div class="project-container">

    <div class="project-block">
    <div class="project-img">
    <div class="img-wrap">
    <a href="">
    <img src="" alt="">
    </a>
    </div>
    </div>
    </div>

    </div>
        
    </div>
</template>

<style scoped>
.project_display_section{
    margin: 10px;
    border: solid 1px gray;
}
</style>

<script setup>
defineProps({
  project: {
    type: Object, 
    required: true
  }
});
</script>