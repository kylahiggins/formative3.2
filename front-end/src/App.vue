<script setup>
import project_input from './components/project_input.vue';
import project from './components/project.vue';
</script>
// ---------------------------------------------------
<template>
  <div class="landing-section">
    <div class="img-wrap">
    <img src="./assets/images/postaproject.png" alt="">
    </div>
  </div>

  <div class="input_section">
  <project_input :project_input="project_body_data" 
  @upload="create_new_project"/>
  </div>
  <div class="project_section">
    <project v-for="project in all_projects" :projectObj="project"
    @delete="delete_project_by_id(project._id)"
    @update="update_projects_by_id(project._id)"/>
  </div>
</template>

// ---------------------------------------------------

<style scoped>

*{
  font-family: sans-serif;
}
.landing-section{
  background-color: rgb(213, 202, 248);
  padding: 20px;
}

.img-wrap{
  height: 150px;
}

img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>


// ---------------------------------------------------


<script>
export default {
  data(){
    return{
      project_body_data:{
        projectname:'',
        author_name:'',
        web_url:'', 
        image_url:''},

        all_projects:[]
    }
  },

      methods:{
        // GET all data
        async fetch_all_projects(){
            const response = await fetch('http://localhost:4000/projects/');
            const fetchedData = await response.json();
            this.all_projects= fetchedData;
            // console.log(fetchedData);
            // now you can load that data to your preferred variable in data()
        },
        // GET one item with ID
        async fetch_project_by_id(userID){
            const fetchURL = 'http://localhost:4000/projects/get/'+userID;
            // console.log(fetchURL);
            const response = await fetch(fetchURL);
            const fetchedData = await response.json(); 
            // console.log(fetchedData);
            // now you can load that data to your preferred variable in data()
        },
        // DELETE one item with ID
        async delete_project_by_id(userID){
            const fetchURL = 'http://localhost:4000/projects/delete/'+userID;
            // console.log(fetchURL);
            const response = await fetch(fetchURL, { method:"DELETE"});
            const fetchedData = await response.json(); 
            this.fetch_all_projects();
            // console.log(fetchedData);
            // fetchedData is the confirmation came from backend for the deletion of the item (or info on delete operation having failed!)
        },
        // UPDATE one item with ID (requires providing BODY of data)
        async update_projects_by_id(userID){
            const fetchURL = 'http://localhost:4000/projects/update/'+userID;
            // console.log(fetchURL);
            const response = await fetch(fetchURL, 
                { 
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.project_body_data)
                });
                this.fetch_all_projects();
            const fetchedData = await response.json();  
            // console.log(fetchedData);
            // fetchedData is the confirmation came from backend for the update of the item (or info on update operation having failed!)
        },
                // POST new item (requires providing BODY of data)
        async create_new_project(){
            const response = await fetch('http://localhost:4000/projects/addproject', 
                { 
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.project_body_data)
                });
            const fetchedData = await response.json();
            this.fetch_all_projects();
            // console.log(fetchedData);
            // fetchedData is the confirmation came from backend for the creation of the item (or info on creation operation having failed!)
        }
        
    },
    created(){
      this.fetch_all_projects();
    }
    }
</script>