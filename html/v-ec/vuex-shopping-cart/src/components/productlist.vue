<template>
    <div>
        <h1>productlist</h1>
        <table>
            <tr>
                 <td>id</td>
                 <td>pname</td>
                 <td>pcost</td>
                 <td>quantity</td>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                 <td>{{item.id}}</td>
                 <td>{{item.pname}}</td>
                 <td>{{item.pcost}}</td>
                 <td>{{item.quantity}}</td>
            </tr>
        </table>

    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios';
//Vue.use(VueAxios,axios)
export default{
    
   name: "productlist" ,
   data()
       {
           return {list: undefined}
       },
   
   mounted()
   {
       axios.get('http://localhost:3000/products')
       .then((resp)=>{
           //console.log(resp)
           this.list=resp.data.data;
       // console.warn(resp.data.data)
       })
       
   }    

}
</script>
