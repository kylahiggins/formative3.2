<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <div class="project_display_section">
    <div class="project-container">

    <div class="project-block">
    <div class="img-wrap">
    <img :src="projectObj.image_url" alt="project image">
    </div>
    </div>
    <div class="project-block">
    <div class="project-text">
        <h2>{{ projectObj.projectname }}</h2>
        <span>{{ projectObj.author_name }}</span>
        <a href=""><span>{{ projectObj.web_url }}</span></a>
    </div>
    </div>

    <div class="project-block">
    <div class="btn_row">
   <div class="btn">
    <span @click="$emit('update')" class="material-symbols-rounded animation_update">autorenew</span>
   </div>
   <div class="btn">
    <span @click="$emit('delete')" class="material-symbols-rounded red">delete</span>
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

.project-container{
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.project-block{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn_row{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.project-text{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.img-wrap{
  height: 150px;
}

img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.btn{
    background-color: rgb(224, 224, 224);
    padding: 5px;
    border-radius: 4px;
    transition: 0.7s;
}

.red:hover{
    color: red;
    cursor: pointer;
}
.animation_update{
    transition: transform .7s;
}

.btn:hover{
    transform: scale(1.1);
}

.animation_update:hover{
    transform: rotate(360deg);
    cursor: pointer;
    color: green;
}
</style>

<script setup>
defineProps({
  projectObj: {
    type: Object, 
    required: true
  }
});
</script>