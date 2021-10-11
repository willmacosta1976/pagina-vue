<template>
  <!-- <div class="principal">
    <h1>hola1</h1>
  </div> -->

<!-- <audio src="../assets/Sleep Away.mp3" autoplay loop></audio> -->
<!-- <center> -->
 

<main>
  <header>
    <h1>{{titulo}}</h1> 
  </header>

  <section class="fondo">
    <img border="0" src="../assets/Bienvenidos.png" usemap="#PLAZASABANA"> 

    </section> 

  <!-- <h1>hola</h1> -->
  <map name="PLAZASABANA">
  <!-- <area coords="609,279,673,303"  shape="rect" href="tarifas.html">
  <area coords="609,304,788,321"  shape="rect" href="consulta_reserva.html">
  <area coords="609,350,679,333"  shape="rect" href="galeria.html">
  <area coords="609,358,743,375"  shape="rect" href="admin.html">
  <area coords="610,494,22" shape="circ" href="https://www.instagram.com/">
  <area coords="676,498,22" shape="circ" href="https://www.facebook.com/">
  <area coords="739,498,22" shape="circ" href="https://twitter.com/home">  -->
  <area coords="160,446,253,484"  shape="rect" href="reserva.html"> 
  </map>  


</main>



<!-- <div id="copyright"> -->
<!-- <font color="white" font size="2">Sabana Plaza Copyright <sup>&#174</sup> 2021.   -->
<!-- <br>All right reserved </br></font></div></div></div></div></center></div> -->

<!-- <footer>Bienvenidos</footer> -->


</template>
<script>


export default {
    mounted(){
       document.title="Home";
    },  
    
   data() {
    
    },
}
</script>



<style scoped>





.fondo img{
  margin-top: 0px;
  height:550px; 
  width: 100%; 

 }

 main{
     background-color:gray; 
     /* grid-column: 1 / 3;   */
    
    /* width: 80%;   */
    height: 535px;
    margin-top: 0px;
    
  }  
  
  footer{
      
    background-color: #a0a3aa;
    color:white;
    grid-column: 1 / 3;  
    text-align:center;
    font-family:arial Rounded MT;
    font-size: 16px;
    font-weight: bold;
    height: 100%; 
    margin-top: 0;

} 

 </style>
