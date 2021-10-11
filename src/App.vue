<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/reserva">Reserva</router-link> |
     <router-link to="/resumen">Código Reserva</router-link> |
     <router-link to="/galeria">Galeria</router-link> |
     <router-link to="/tarifa">Tarifas</router-link>  |
     <router-link to="/consulta">Consulta</router-link> |
     <router-link to="/administración">Administración</router-link> 
    
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #E2ECE9; 
}

#nav {
  padding: 10px;
  background-color:#aabce6;

}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color:white;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color:black
}
</style>
