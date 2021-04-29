<template>
 <b-container>
  <b-row align-v="center">
    <img-card></img-card>
    <img-card></img-card>
    <img-card></img-card>
    <img-card></img-card>
   
   
  </b-row>
</b-container>
</template>

<script>
// @ is an alias to /src
import ImgCard from "@/components/ImgCard.vue";

export default {
  name: "home",
  components: {"img-card": ImgCard}
};
</script>
