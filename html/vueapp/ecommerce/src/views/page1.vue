<template>
<b-container>

  <div>
    <h4 style="margin-bottom:25px;">Heading</h4>
    <b-card-group deck style="height:400px;">
      <b-card img-src="@/components/download (4).jpeg" img-alt="Card image" img-top style="background-color: #D3D3D3;">
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>

      <b-card style="background-color: #D3D3D3;">
        <b-card-text>
            <h1 style="margin-bottom:10px;">Nike</h1>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
         <div>
    <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      style="margin-top: 25px;"
    ></b-form-radio-group>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
     <h1 style="margin-top:25px;"> $45 </h1>
         <router-link to="/Page1">
       <b-button variant="secondary" style="margin-top:45px;">Add to Cart</b-button><br>
        <b-button variant="secondary" style="margin-top:10px;">Buy Now</b-button>
        </router-link>
        <router-view />
      </b-card>
    </b-card-group>
  </div>
  
  
    
</b-container>

</template>

<script>
export default {
    data() {
      return {
        selected: 'A',
        options: [
          { item: 'RED', name: 'Red' },
          { item: 'ORANGE', name: 'Orange' },
          { item: 'BLUE', name: 'Blue', },
          { item: 'YELLOW', name: 'Yellow' }
        ]
      }
    }
  }


        

</script>

<style  lang="scss" scoped>

</style>