<template>
  <div id="app">
    <div class="home">
    <div class="container-fluid">
      <div class="row row-offcanvas row-offcanvas-left"> 
    <div id="sidebar" class="col-md-4 col-lg-3 sidebar-offcanvas">

          <div class="sidebar-content">
            <h1 class="sidebar-heading"> <a href="index.html">Little Elephant</a></h1>
            <p class="sidebar-p">Meet other parents while getting rid of unwanted baby stuff </p>
            <ul class="sidebar-menu">
                <!-- Link-->
                <li class="sidebar-item"><a href="/#/" class="sidebar-link active">Home</a></li>
                <!-- Link-->
                <li class="sidebar-item"><a href="/#/signup" class="sidebar-link">Signup</a></li>
                <!-- Link-->
                <li class="sidebar-item"><a href="/#/login" class="sidebar-link">Login</a></li>
               <!--  <li class="sidebar-item"><a href="/#/product" class="sidebar-link">Products</a></li> -->
                <li class="sidebar-item"><a href="/#/user" class="sidebar-link">People</a></li>
                <li class="sidebar-item"><a href="/#/map" class="sidebar-link">Finder</a></li>
            </ul>
            <p class="social"><a href="#" data-animate-hover="pulse" class="external facebook"><i class="fa fa-facebook"></i></a><a href="#" data-animate-hover="pulse" class="external gplus"><i class="fa fa-google-plus"></i></a><a href="#" data-animate-hover="pulse" class="external twitter"><i class="fa fa-twitter"></i></a><a href="#" title="" class="external instagram"><i class="fa fa-instagram"></i></a><a href="#" data-animate-hover="pulse" class="email"><i class="fa fa-envelope"></i></a></p>
            <div class="copyright text-center text-md-left">
              <p class="credit">&copy;2018 Your name or company | Template by <a href="http://bootstrapious.com/portfolio-themes" class="external">Bootstrapious.com</a></p>
              <!-- Please do not remove the backlink to us, unless you support the development at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :)        -->
            </div>
           </div>
          </div>
           <div class="col-md-8 col-lg-9 content-column">
          <div class="small-navbar d-flex d-md-none">
            <button type="button" data-toggle="offcanvas" class="btn btn-outline-primary"> <i class="fa fa-align-left mr-2"></i>Menu</button>
            <h1 class="small-navbar-heading"> <a href="index.html">Little Elephant </a></h1>
          </div>
   <router-view/>
         </div>
         </div>
         </div>
        </div>
     </div>

</template>
     

<style>
</style>