<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarnav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link"><b>Home</b></router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link"><b>About Us</b></router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/form" class="nav-link"><b>Form</b></router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/table" class="nav-link"><b>Table</b></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <HeaderDiv />
  <router-view />
</div>



<FooterDiv/>

 

</template>
<script>
import HeaderDiv from '@/components/HeaderDiv.vue'
import FooterDiv from '@/components/FooterDiv.vue'
export default {
  name:"app",
  components:{
    HeaderDiv,
    FooterDiv
  }
}
</script>
