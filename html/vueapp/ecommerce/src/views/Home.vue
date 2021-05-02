<template>
 <b-container>
  <b-row align-v="center">
    <img-card v-for = "card in displaycards" :key = "card.id" :name = "card.name"></img-card>
  </b-row>
  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input="paginate(currentPage)"
    ></b-pagination>
</b-container>
</template>

<script>
// @ is an alias to /src
import ImgCard from "@/components/ImgCard.vue";

export default {
  name: "home",
  components: {"img-card": ImgCard},
  mounted() {

   this.fetchData();

  },
  data(){
  return{
    cards: [],
    displaycards:[],
    currentPage: 1,
    rows: 1,
    PerPage : 6
  };
  },
  methods: {
    async fetchData(){
      const res = await fetch("cards.json");
      const val = await res.json();
      this.cards = val;
      this.displaycards = val.slice(0, 6);
      this.rows = this.cards.length;
      console.log(val);
  },
  paginate(currentPage) {  
    const start = (currentPage - 1) * this.perPage;
    this.displaycards = this.cards.slice(start, start+6);
  }
  }
};
</script>
