<template>
    <div class="input_section">

    <div class="project-input">
    <div class="input-block">
    <label>Project Title</label>
    <input type="text" placeholder="Enter Project Title" v-model="project_input.projectname">
    </div>

    <div class="input-block">
    <label>Author Name</label>
    <input type="text" placeholder="Enter Author Name" v-model="project_input.author_name">
    </div>

    <div class="input-block">
    <label>Link to Website</label>
    <input type="text" placeholder="Enter Link to Website" v-model="project_input.web_url">
    </div>

    <div class="input-block">
    <label>Image URL</label>
    <input type="text" placeholder="Enter Image URL" v-model="project_input.image_url">
    </div>

    <div class="input-block">
    <input class="submit-btn" type="submit" value="Upload Project" @click="$emit('upload')">
    </div>
    </div>  

    <div class="project_landing_image">
    <div class="landing-img-wrapper">
    <img src="https://www.pngitem.com/pimgs/m/297-2976092_man-on-computer-cartoon-clipart-png-download-working.png" alt="">
    </div>
    </div>
    </div>

</template>

<style scoped>
.input_section{
    display: flex;
    justify-content: center;
}
.project-input{
    padding: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.input-block{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input{
    padding: 5px;
    max-width: 250px;
    min-width: 250px;
}

.submit-btn{
    background-color: rgb(80, 198, 25);
    border: none;
    padding: 5px;
    min-width: 264px;
    border-radius: 20px;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project_landing_image{
    flex: 1;
}

.landing-img-wrapper{
    height: 350px;
}


</style>

<script setup>
defineProps({
  project_input: {
    type: Object, 
    required: true
  }
});
</script>