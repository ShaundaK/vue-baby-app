<template>
  <div class="home">
    <div id="all">
    <div class="container-fluid">
      <div class="row row-offcanvas row-offcanvas-left"> 
        <!--   *** SIDEBAR ***-->
        <!--   *** SIDEBAR END ***  -->
        <!--   *** PORTFOLIO ***-->
<!--         <div class="col-md-8 col-lg-9 content-column">
          <div class="grid row">
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/a4-paper.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-hover-text-header"> <a href="detail.html" class="tile-link">  </a>
                  <h4>Name of the work 1</h4>
                  <div class="box-masonry-desription">
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/business-card-26.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 2</a></h4>
                  <div class="box-masonry-desription">
                    <p> When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="col-md-6 col-lg-3 grid-item" v-for="category in categories"> 
              <div class="box-masonry"> <a v-bind:href="'/#/categories/' + category.id" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img :src="category.image" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a v-bind:href="'/#/categories/' + category.id"> {{ category.name }} </a></h4>
                </div>
              </div>
            </div>
          <!--   <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> 
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Item without image</a></h4>
                  <div class="box-masonry-desription">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
              </div>
            </div> -->
            <!-- <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/business-card.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-hover-text-header"> <a href="detail.html" class="tile-link">  </a>
                  <h4>Name of the work 5</h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> 
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 6</a></h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/label-clothes.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 7</a></h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/ipad-air-2.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 8</a></h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/envelope-brand.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Item with image</a></h4>
                  <div class="box-masonry-desription">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/trifold.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-hover-text-header"> <a href="detail.html" class="tile-link">  </a>
                  <h4>Item with image</h4>
                  <div class="box-masonry-desription">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/paper-presentation.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-hover-text-header"> <a href="detail.html" class="tile-link">  </a>
                  <h4>Item with image</h4>
                  <div class="box-masonry-desription">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> -->
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--   *** PORTFOLIO END ***-->
      </div>
    </div>
  </div>


  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "",
      categories: [],
    };
  },
  created: function() {
    console.log(this)
    axios.get('http://localhost:3000/api/categories/').then(function(response) {
      console.log(response.data);
      this.categories = response.data
    }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>