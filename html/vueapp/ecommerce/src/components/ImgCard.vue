<template>

    <div>
        <b-col>
      <b-card 
      :title="name"
      img-src="@/components/download (4).jpeg"
      img-alt="Nike"
      img-top
      tag="article"
      style="max-width:20rem"
      class="mb-2"
      >
        <b-card-text>
some text here some text here some text here some text here some text here some text here
        </b-card-text>
        <router-link to="/Page1">
       <b-button variant="primary">View</b-button>
        </router-link>
        <router-view />
      </b-card>
    </b-col>

    </div>

</template>




<script>


export default {
  props:["name"],
components: {
    
    
}
        
    };

</script>

<style  lang="scss" scoped>

</style>