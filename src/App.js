import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      	<header class="top-area">
          <div class="header-area">
            <div class="container">
              <div class="row">
                <div class="col-sm-2">
                  <div class="logo">
                    <a href="index.html">
                      Yellow <span>Hat</span> Travels
                    </a>
                  </div>
                  {/* <!-- /.logo--> */}
                </div>
                {/* <!-- /.col--> */}
                <div class="col-sm-10">
                  <div class="main-menu">
                  
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <i class="fa fa-bars"></i>
                      </button>
                      {/* <!-- / button--> */}
                    </div>
                    {/* <!-- /.navbar-header--> */}
                    <div class="collapse navbar-collapse">		  
                      <ul class="nav navbar-nav navbar-right">
                        <li class="smooth-menu"><a href="#home">Home</a></li>
                        <li class="smooth-menu"><a href="#gallery">Destination</a></li>
                        <li class="smooth-menu"><a href="#pack">Yellow Lite </a></li>
                        <li class="smooth-menu"><a href="#s-pack">2020 Specials </a></li>
                        <li class="smooth-menu"><a href="#blog">blog</a></li>
                        <li>
                          <button class="book-btn">log in
                          </button>
                        </li>
                        {/* <!--/.project-btn-->  */}
                      </ul>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                  </div>
                  {/* <!-- /.main-menu--> */}
                </div>
                {/* <!-- /.col--> */}
              </div>
              {/* <!-- /.row --> */}
              <div class="home-border"></div>
              {/* <!-- /.home-border--> */}
            </div>
            {/* <!-- /.container--> */}
          </div>
          {/* <!-- /.header-area --> */}
    		</header>
        {/* <!-- /.top-area--> */}
        {/* <!-- main-menu End --> */}

        {/* <!--about-us start --> */}
        <section id="home" class="about-us">
          <div class="container">
            <div class="about-us-content">
              <div class="row">
                <div class="col-sm-12">
                  <div class="single-about-us">
                    <div class="about-us-txt">
                      <h2>
                        Explore.
                        {/* <br/> */}
                        Dream.
                        
                        {/* <br/> */}
                        Discover. 
                        <div class="about-btn">
                        <button onclick="window.location.href='#gallery';" 
                            class="about-view smooth-menu">
                          explore now
                        </button>
                      </div>
                      </h2>
                      
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.about-us-txt--> */}
                  </div>
                  {/* <!--/.single-about-us--> */}
                </div>
                {/* <!--/.col--> */}
                <div class="col-sm-0">
                  <div class="single-about-us">
                    
                  </div>
                  {/* <!--/.single-about-us--> */}
                </div>
                {/* <!--/.col--> */}
              </div>
              {/* <!--/.row--> */}
            </div>
            {/* <!--/.about-us-content--> */}
          </div>
          {/* <!--/.container--> */}

        </section>
        {/* <!--/.about-us-->
        <!--about-us end --> */}

        {/* <!--service start--> */}
        <section id="service" class="service">
          <div class="container">

            <div class="service-counter text-center">

              <div class="col-md-4 col-sm-4">
                <div class="single-service-box">
                  <div class="service-img">
                    <img src="assets/images/service/s1.png" alt="service-icon" />
                  </div>
                  {/* <!--/.service-img--> */}
                  <div class="service-content">
                    <h2>
                      <a href="#">
                      amazing tour packages
                      </a>
                    </h2>
                    <p>Catered for your personal interest.</p>
                  </div>
                  {/* <!--/.service-content--> */}
                </div>
                {/* <!--/.single-service-box--> */}
              </div>
              {/* <!--/.col--> */}

              <div class="col-md-4 col-sm-4">
                <div class="single-service-box">
                  <div class="service-img">
                    <img src="assets/images/service/s2.png" alt="service-icon" />
                  </div>
                  {/* <!--/.service-img--> */}
                  <div class="service-content">
                    <h2>
                      <a href="#">
                        book top class hotel
                      </a>
                    </h2>
                    <p>The hustle ends here, let us help you out. You worry about the fun.</p>
                  </div>
                  {/* <!--/.service-content--> */}
                </div>
                {/* <!--/.single-service-box--> */}
              </div>
              {/* <!--/.col--> */}

              <div class="col-md-4 col-sm-4">
                <div class="single-service-box">
                  <div class="statistics-img">
                    <img src="assets/images/service/s3.png" alt="service-icon" />
                  </div>
                  {/* <!--/.service-img--> */}
                  <div class="service-content">

                    <h2>
                      <a href="#">
                        online flight booking
                      </a>
                    </h2>
                    <p>Everything in one place</p>
                  </div>
                  {/* <!--/.service-content--> */}
                </div>
                {/* <!--/.single-service-box--> */}
              </div>
              {/* <!--/.col--> */}

            </div>
            {/* <!--/.statistics-counter-->	 */}
          </div>
          {/* <!--/.container--> */}

        </section>
        {/* <!--/.service--> */}
          {/* <!--service end--> */}

        {/* <!--galley start--> */}
        <section id="gallery" class="gallery">
          <div class="container">
            <div class="gallery-details">
              <div class="gallary-header text-center">
                <h2>
                  world destination
                </h2>
                <p>
                  Yellow Hat Travels offers travel information on a 
                  wide range of destinations. Learn about your 
                  destination today and contact us for more information.
                </p>
              </div>
              {/* <!--/.gallery-header--> */}
              <div class="gallery-box">
                <div class="gallery-content">
                    <div class="filtr-container">
                      <div class="row">

                        <div class="col-md-6">
                          <div class="filtr-item">
                          <img src="assets/images/yellhat-img/europe/alex-vasey-3lxrM5yvkcI-unsplash.jpg" 
                                alt="portfolio image"/>
                          <div class="item-title">
                            <a href="#">
                              Europe
                            </a>
                            <p><span>20 tours</span><span>15 places</span></p>
                          </div>
                          {/* <!-- /.item-title --> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        <div class="col-md-6">
                          <div class="filtr-item">
                          <img src="assets/images/yellhat-img/africa/harshil-gudka-kfxEUCTUeyg-unsplash.jpg" alt="portfolio image"/>
                          <div class="item-title">
                            <a href="#">
                              Africa
                            </a>
                            <p><span>12 tours</span><span>9 places</span></p>
                          </div> 
                          {/* <!-- /.item-title--> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        <div class="col-md-7">
                          <div class="filtr-item">
                          <img src="assets/images/yellhat-img/asia/jason-cooper-iEJVyyevw-U-unsplash.jpg" alt="portfolio image"/>
                          <div class="item-title">
                            <a href="#">
                              Asia
                            </a>
                            <p><span>25 tours</span><span>10 places</span></p>
                          </div>
                          {/* <!-- /.item-title --> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        <div class="col-md-4">
                          <div class="filtr-item">
                          <img src="assets/images/yellhat-img/north-america/touann-gatouillat-vergos-dSBJv66Yjlk-unsplash.jpg" 
                                alt="portfolio image"/>
                          <div class="item-title">
                            <a href="#">
                              North America
                            </a>
                            <p><span>18 tours</span><span>9 places</span></p>
                          </div> 
                          {/* <!-- /.item-title--> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        <div class="col-md-5">
                          <div class="filtr-item">
                          <img src="assets/images/yellhat-img/south-america/arto-marttinen-6Wt0kG2zK4A-unsplash.jpg" 
                                alt="portfolio image"/>
                          <div class="item-title">
                            <a href="#">
                              South America
                            </a>
                            <p><span>14 tours</span><span>12 places</span></p>
                          </div> 
                          {/* <!-- /.item-title--> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        {/* <!-- <div class="col-md-8">
                          <div class="filtr-item">
                          <img src="assets/images/gallary/g6.jpg" alt="portfolio image"/>
                          <div class="item-title">
                            <a href="#">
                              turkey
                            </a>
                            <p><span>14 tours</span><span>6 places</span></p> -->
                          <!-- </div>  -->
                          <!-- /.item-title-->
                        <!-- </div> -->
                        <!-- /.filtr-item -->
                        <!-- </div> -->
                        <!-- /.col --> */}

                      </div>
                      {/* <!-- /.row --> */}

                    </div>
                    {/* <!-- /.filtr-container--> */}
                </div>
                {/* <!-- /.gallery-content --> */}
              </div>
              {/* <!--/.galley-box--> */}
            </div>
            {/* <!--/.gallery-details--> */}
          </div>
          {/* <!--/.container--> */}

        </section>
        {/* <!--/.gallery--> */}
        {/* <!--gallery end--> */}

        {/* <!--discount-offer start--> */}
        {/* <section class="discount-offer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="dicount-offer-content text-center">
                  <h2>Book A trip for November or December, 2019 and get upto 40% Discount</h2>
                  <div class="campaign-timer">
                    <div id="timer">
                      <div class="time time-after" id="days">
                        <span></span>
                      </div> */}
                      {/* <!--/.time--> */}
                      {/* <div class="time time-after" id="hours"> */}

                      {/* </div> */}
                      {/* <!--/.time--> */}
                      {/* <div class="time time-after" id="minutes"> */}

                      {/* </div> */}
                      {/* <!--/.time--> */}
                      {/* <div class="time" id="seconds">

                      </div> */}
                      {/* <!--/.time--> */}
                    {/* </div> */}
                    {/* <!--/.timer--> */}
                  {/* </div> */}
                  {/* <!--/.campaign-timer--> */}
                  {/* <div class="about-btn">
                    <button onclick="window.location.href='./contact.html';" 
                            class="about-view discount-offer-btn">
                      Book now
                    </button>
                  </div> */}
                  {/* <!--/.about-btn--> */}

                {/* </div> */}
                {/* <!-- /.dicount-offer-content--> */}
              {/* </div> */}
              {/* <!-- /.col--> */}
            {/* </div> */}
            {/* <!-- /.row--> */}
          {/* </div> */}
          {/* <!-- /.container--> */}

        {/* </section> */}
        {/* <!-- /.discount-offer--> */}
        {/* {/* <!--discount-offer end-->  */}

        {/* <!--packages start--> */}
        <section id="pack" class="packages">
          <div class="container">
            <div class="text-center">
              <h2>
                special packages
              </h2>
              <p>
                Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.  
              </p>
            </div>
            {/* <!--/.gallery-header--> */}
            <div class="packages-content">
              <div class="row">

                <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                    <img src="assets/images/packages/p1.jpg" 
                            alt="package-place"/>
                    <div class="single-package-item-txt">
                      <h3>italy <span class="pull-right">$499</span></h3>
                      <div class="packages-para">
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i> 5 days 6 nights
                          </span>
                          <i class="fa fa-angle-right"></i>  5 star accommodation
                        </p>
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i>  transportation
                          </span>
                          <i class="fa fa-angle-right"></i>  food facilities
                        </p>
                      </div>
                      {/* <!--/.packages-para--> */}
                      <div class="packages-review">
                        <p>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <span>2544 review</span>
                        </p>
                      </div>
                      {/* <!--/.packages-review--> */}
                      <div class="about-btn">
                        <button  class="about-view packages-btn">
                          book now
                        </button>
                      </div>
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.single-package-item-txt--> */}
                  </div>
                  {/* <!--/.single-package-item--> */}

                </div>
                {/* <!--/.col--> */}

                <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                    <img src="assets/images/packages/p2.jpg" 
                          alt="package-place"/>
                    <div class="single-package-item-txt">
                      <h3>england <span class="pull-right">$1499</span></h3>
                      <div class="packages-para">
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i> 5 daays 6 nights
                          </span>
                          <i class="fa fa-angle-right"></i>  5 star accommodation
                        </p>
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i>  transportation
                          </span>
                          <i class="fa fa-angle-right"></i>  food facilities
                        </p>
                      </div>
                      {/* <!--/.packages-para--> */}
                      <div class="packages-review">
                        <p>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <span>2544 review</span>
                        </p>
                      </div>
                      {/* <!--/.packages-review--> */}
                      <div class="about-btn">
                        <button  class="about-view packages-btn">
                          book now
                        </button>
                      </div>
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.single-package-item-txt--> */}
                  </div>
                  {/* <!--/.single-package-item--> */}

                </div>
                {/* <!--/.col--> */}
                
                <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                    <img src="assets/images/packages/p3.jpg" 
                          alt="package-place"/>
                    <div class="single-package-item-txt">
                      <h3>france <span class="pull-right">$1199</span></h3>
                      <div class="packages-para">
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i> 5 daays 6 nights
                          </span>
                          <i class="fa fa-angle-right"></i>  5 star accomodation
                        </p>
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i>  transportation
                          </span>
                          <i class="fa fa-angle-right"></i>  food facilities
                        </p>
                      </div>
                      {/* <!--/.packages-para--> */}
                      <div class="packages-review">
                        <p>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <span>2544 review</span>
                        </p>
                      </div>
                      {/* <!--/.packages-review--> */}
                      <div class="about-btn">
                        <button  class="about-view packages-btn">
                          book now
                        </button>
                      </div>
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.single-package-item-txt--> */}
                  </div>
                  {/* <!--/.single-package-item--> */}

                </div>
                {/* <!--/.col--> */}
                
                <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                    <img src="assets/images/packages/p4.jpg" 
                          alt="package-place"/>
                    <div class="single-package-item-txt">
                      <h3>india <span class="pull-right">$799</span></h3>
                      <div class="packages-para">
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i> 5 daays 6 nights
                          </span>
                          <i class="fa fa-angle-right"></i>  5 star accomodation
                        </p>
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i>  transportation
                          </span>
                          <i class="fa fa-angle-right"></i>  food facilities
                        </p>
                      </div>
                      {/* <!--/.packages-para--> */}
                      <div class="packages-review">
                        <p>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <span>2544 review</span>
                        </p>
                      </div>
                      {/* <!--/.packages-review--> */}
                      <div class="about-btn">
                        <button  class="about-view packages-btn">
                          book now
                        </button>
                      </div>
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.single-package-item-txt--> */}
                  </div>
                  {/* <!--/.single-package-item--> */}

                </div>
                {/* <!--/.col--> */}
                
                <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                    <img src="assets/images/packages/p5.jpg" 
                          alt="package-place"/>
                    <div class="single-package-item-txt">
                      <h3>spain <span class="pull-right">$999</span></h3>
                      <div class="packages-para">
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i> 5 daays 6 nights
                          </span>
                          <i class="fa fa-angle-right"></i>  5 star accomodation
                        </p>
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i>  transportation
                          </span>
                          <i class="fa fa-angle-right"></i>  food facilities
                        </p>
                      </div>
                      {/* <!--/.packages-para--> */}
                      <div class="packages-review">
                        <p>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <span>2544 review</span>
                        </p>
                      </div>
                      {/* <!--/.packages-review--> */}
                      <div class="about-btn">
                        <button  class="about-view packages-btn">
                          book now
                        </button>
                      </div>
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.single-package-item-txt--> */}
                  </div>
                  {/* <!--/.single-package-item--> */}

                </div>
                {/* <!--/.col--> */}
                
                <div class="col-md-4 col-sm-6">
                  <div class="single-package-item">
                    <img src="assets/images/packages/p6.jpg" 
                          alt="package-place"/>
                    <div class="single-package-item-txt">
                      <h3>thailand <span class="pull-right">$799</span></h3>
                      <div class="packages-para">
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i> 5 daays 6 nights
                          </span>
                          <i class="fa fa-angle-right"></i>  5 star accomodation
                        </p>
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i>  transportation
                          </span>
                          <i class="fa fa-angle-right"></i>  food facilities
                        </p>
                      </div>
                      {/* <!--/.packages-para--> */}
                      <div class="packages-review">
                        <p>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <span>2544 review</span>
                        </p>
                      </div>
                      {/* <!--/.packages-review--> */}
                      <div class="about-btn">
                        <button  class="about-view packages-btn">
                          book now
                        </button>
                      </div>
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.single-package-item-txt--> */}
                  </div>
                  {/* <!--/.single-package-item--> */}

                </div>
                {/* <!--/.col--> */}

              </div>
              {/* <!--/.row--> */}
            </div>
            {/* <!--/.packages-content--> */}
          </div>
          {/* <!--/.container--> */}

        </section>
        {/* <!--/.packages--> */}
        {/* <!--packages end--> */}


        {/* <!-- SOUTH AFRICAN TOURS --> */}
        <section id="tour" class="blog">
          <div class="container">
            <div class="blog-details">
                <div class="gallary-header text-center">
                  <h2>
                    Tours
                  </h2>
                  <p>
                    Get to know South Africa
                  </p>
                </div>
                {/* <!--/.gallery-header--> */}
                <div class="blog-content">
                  <div class="row">

                    <div class="col-sm-4 col-md-3">
                      <div class="thumbnail">
                        <h2>Johannesburg & Soweto Tour</h2>
                        <div class="thumbnail-img">
                          <img src="assets/images/yellhat-img/jhb/COVER2_170227_100624.jpg" 
                                alt="blog-img"/>
                          <div class="thumbnail-img-overlay"></div>
                          {/* <!--/.thumbnail-img-overlay--> */}

                        </div>
                        {/* <!--/.thumbnail-img--> */}

                        <div class="caption">
                          <div class="blog-txt">
                            <h3>
                              <a href="./tour/jhb.html">
                                The City of gold and the place of fun, Fantastic foods and 
                                historical place.
                              </a>
                            </h3>
                            <br/>
                            {/* <!-- <p>
                            </p> --> */}
                            <a href="./tour/jhb.html">Take Tour >></a>
                          </div>
                          {/* <!--/.blog-txt--> */}
                        </div>
                        {/* <!--/.caption--> */}
                      </div>
                      {/* <!--/.thumbnail--> */}

                    </div>
                    {/* <!--/.col--> */}

                    <div class="col-sm-4 col-md-3">
                      <div class="thumbnail">
                        <h2>Pilanesberg Day Tour</h2>
                        <div class="thumbnail-img">
                          <img src="assets/images/yellhat-img/pilans/pilan.jpg" 
                                alt="blog-img"/>
                          <div class="thumbnail-img-overlay"></div>
                          {/* <!--/.thumbnail-img-overlay--> */}

                        </div>
                        {/* <!--/.thumbnail-img--> */}
                        <div class="caption">
                          <div class="blog-txt">
                            <h3>
                              <a href="./tour/pilani.html">
                                Discover on beautiful weather, Fantastic foods and amazing nature
                              </a>
                            </h3>
                            <br/>
                            <a href="./tour/pilani.html">Take Tour >></a>
                          </div>
                          {/* <!--/.blog-txt--> */}
                        </div>
                        {/* <!--/.caption--> */}
                      </div>
                      {/* <!--/.thumbnail--> */}

                    </div>
                    {/* <!--/.col--> */}

                    <div class="col-sm-4 col-md-3">
                      <div class="thumbnail">
                        <h2>Pretoria Half Day Tour</h2>
                        <div class="thumbnail-img">
                          <img src="assets/images/yellhat-img/pta/nelson_mandela_statue_union_buildings_pretoria.jpg" 
                                alt="blog-img"/>
                          <div class="thumbnail-img-overlay"></div>
                          {/* <!--/.thumbnail-img-overlay--> */}

                        </div>
                        {/* <!--/.thumbnail-img--> */}
                        <div class="caption">
                          <div class="blog-txt">
                            <h3><a href="./tour/ukutula.html">
                              Serving as the seat of the admin branch, and of foreign embassies
                              </a></h3>
                            <br/>
                            <a href="./tour/pta.html">Take Tour >></a>
                          </div>
                          {/* <!--/.blog-txt--> */}
                        </div>
                        {/* <!--/.caption--> */}
                      </div>
                      {/* <!--/.thumbnail--> */}

                    </div>
                    {/* <!--/.col--> */}

                    <div class="col-sm-4 col-md-3">
                      <div class="thumbnail">
                        <h2>Ukutula Lion Park & Lesedi Cultural Village</h2>
                        <div class="thumbnail-img">
                          <img src="assets/images/yellhat-img/ukutula/AAEAAQAAAAAAAAAAAAAAJDYzNTIyN2RlLWVhMDQtNGJlOC04YjdhLWY0ODVmNGVhZmM3Zg.jpeg" 
                                alt="blog-img"/>
                          <div class="thumbnail-img-overlay"></div>
                          {/* <!--/.thumbnail-img-overlay--> */}

                        </div>
                        {/* <!--/.thumbnail-img--> */}
                        <div class="caption">
                          <div class="blog-txt">
                            <h3><a href="./tour/ukutula.html">
                                Wilderness reserve with many animals viewable on safari tours
                                </a></h3>
                            <br/>
                            <a href="./tour/ukutula.html">Take Tour >></a>
                          </div>
                          {/* <!--/.blog-txt--> */}
                        </div>
                        {/* <!--/.caption--> */}
                      </div>
                      {/* <!--/.thumbnail--> */}

                    </div>
                    {/* <!--/.col--> */}

                  </div>
                  {/* <!--/.row--> */}
                </div>
                {/* <!--/.blog-content--> */}
              </div>
              {/* <!--/.blog-details--> */}
            </div>
            {/* <!--/.container--> */}

        </section>
        {/* <!--/.blog--> */}
        {/* <!--SA TOUR END--> */}

        {/* <!--special-offer start--> */}
        <section id="spo" class="special-offer">
          <div class="container">
            <div class="special-offer-content">
              <div class="row">
                <div class="col-sm-8">
                  <div class="single-special-offer">
                    <div class="single-special-offer-txt">
                      <h2>thailand</h2>
                      <div class="packages-review special-offer-review">
                        <p>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <span>2544 review</span>
                        </p>
                      </div>
                      {/* <!--/.packages-review--> */}
                      <div class="packages-para special-offer-para">
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i> 9 Nights/ 10 Days
                          </span>
                          <span>
                            <i class="fa fa-angle-right"></i> PHUKET, KOH PHIPHI &amp; KRABI
                          </span>
                          <span>
                            <i class="fa fa-angle-right"></i>  Island Hopping from Krabi
                          </span>
                        </p>
                        <p>
                          <span>
                            <i class="fa fa-angle-right"></i>  Phang Nga Bay & Maya Bay tour
                          </span>
                          <span>
                            <i class="fa fa-angle-right"></i>  food facilities
                          </span>
                        </p>
                        <p class="offer-para">
                          Known for tropical beaches, opulent royal palaces,
                          ancient ruins and ornate temples displaying figures
                          of Buddha. In Bangkok, the capital, an ultramodern
                          cityscape rises next to quiet canalside communities
                          and the iconic temples of Wat Arun, Wat Pho and the
                          Emerald Buddha Temple (Wat Phra Kaew). Nearby beach
                          resorts include bustling Pattaya and fashionable Hua Hin.
                        </p>
                      </div>
                      {/* <!--/.packages-para--> */}
                      <div class="offer-btn-group">
                        {/* <!-- <div class="about-btn">
                          <button  class="about-view packages-btn offfer-btn">
                            make tour
                          </button>
                        </div> -->
                        <!--/.about-btn--> */}
                        <div class="about-btn">
                          <button onclick="window.location.href='./special/phuket.html'" 
                                  class="about-view packages-btn">
                            book now
                          </button>
                        </div>
                        {/* <!--/.about-btn--> */}
                      </div>
                      {/* <!--/.offer-btn-group--> */}
                    </div>
                    {/* <!--/.single-special-offer-txt--> */}
                  </div>
                  {/* <!--/.single-special-offer--> */}
                </div>
                {/* <!--/.col--> */}
                <div class="col-sm-4">
                  <div class="single-special-offer">
                    <div class="single-special-offer-bg">
                      <img src="assets/images/offer/offer-shape.png" 
                            alt="offer-shape"/>
                    </div>
                    {/* <!--/.single-special-offer-bg--> */}
                    <div class="single-special-shape-txt">
                      <h3>special offer</h3>
                      <h4><span>R35 760</span><br/></h4>
                      <p><span>R2 500</span><br/>deposit</p>
                    </div>
                    {/* <!--/.single-special-shape-txt--> */}
                  </div>
                  {/* <!--/.single-special-offer--> */}
                </div>
                {/* <!--/.col--> */}
              </div>
              {/* <!--/.row--> */}
            </div>
            {/* <!--/.special-offer-content--> */}
          </div>
          {/* <!--/.container--> */}

        </section>
        {/* <!--/.special-offer end--> */}
        {/* <!--special-offer end--> */}


        {/* <!-- testimonial Start --> */}
        <section   class="testemonial">
          <div class="container">
            <div class="gallary-header text-center">
              <h2>
                How Our Clients Feel
              </h2>
              <p>
                We are customer focused, hear what our travellers have to say
              </p>
            </div>
            {/* <!--/.gallery-header--> */}

            <div class="owl-carousel owl-theme" id="testemonial-carousel">
              <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial1.jpg" 
                          alt="img"/>
                  </div>
                  {/* <!-/.home1-testm-img--> */}
                  <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      When I plan a trip, the first people to contact is 
                      Yellow Hat Travels, my experts, They give the best advice and tips!
                    </p>
                    <h3>
                      <a >
                        Nomusa H.
                      </a>
                    </h3>
                    {/* <h4>london, england</h4>  */}
                  </div>
                  {/* <!--/.home1-testm-txt--> */}
                </div>
                {/* <!--/.home1-testm-single--> */}

              </div>
              {/* <!--/.item--> */}

              <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial2.jpg" 
                          alt="img"/>
                  </div>
                  {/* <!--/.home1-testm-img--> */}
                  <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      Yellow Hat Travels is an amazing company that curates 
                      and plan trips. The trip planned was a bliss. Everything 
                      was well taken care of from the day of departure until we came back.
                    </p>
                    <h3>
                      <a >
                        Lebo M.
                      </a>
                    </h3>
                    {/* <h4>london, england</h4>  */}
                  </div>
                  {/* <!--/.home1-testm-txt--> */}
                </div>
                {/* <!--/.home1-testm-single--> */}

              </div>
              {/* <!--/.item--> */}

              <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial1.jpg" 
                          alt="img"/>
                  </div> 
                  {/* <!--/.home1-testm-img--> */}
                  <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      I have always had a dream to travel abroad... even 
                      had holiday time shares ready... but still I could not move 
                      YHT made and continues to make my dreams come true.
                    </p>
                    <h3>
                      <a >
                        Sithabile V.
                      </a>
                    </h3>
                    {/* <h4>london, england</h4> */}
                  </div>
                  {/* <!--/.home1-testm-txt--> */}
                </div>
                {/* <!--/.home1-testm-single--> */}
              </div>
              {/* <!--/.item--> */}
              <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial1.jpg" 
                          alt="img"/>
                  </div>
                  {/* <!--/.home1-testm-img--> */}
                  <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      My wife and I had never left the country and Sis T held 
                      our hands and planned everything seamlessly. We  had a blast 
                      in Thailand and cannot wait to take our kids with next time.
                    </p>
                    <h3>
                      <a >
                        Leroy N.
                      </a>
                    </h3>
                    {/* <h4>london, england</h4> */}
                  </div>
                  {/* <!--/.home1-testm-txt--> */}
                </div>
                {/* <!--/.home1-testm-single--> */}
              </div>
              {/* <!--/.item--> */}
              <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial2.jpg" 
                          alt="img"/>
                  </div>
                  {/* <!--/.home1-testm-img--> */}
                  <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      I am single lady who is full of life - I have always wanted to travel 
                      wanted to travel but my friends would disappoint me all the time. Joining 
                      YHT is the best thing I did for myself...Because of them I have been 
                      to countries I never dreamt I would go to.
                    </p>
                    <h3>
                      <a >
                        Nozipho M.
                      </a>
                    </h3>
                    {/* <h4>london, england</h4> */}
                  </div>
                  {/* <!--/.home1-testm-txt--> */}
                </div>
                {/* <!--/.home1-testm-single--> */}
              </div>
              {/* <!--/.item--> */}
              <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial1.jpg" 
                          alt="img"/>
                  </div>
                  {/* <!-/.home1-testm-img--> */}
                  <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      When you have a trip for the first time out of the country
                       and that trip is USA - that can be intimidating. I Knew 
                      nothing and I did not know where to start. YHT assisted me 
                      from A - Z.
                    </p>
                    <h3>
                      <a >
                        Ntokozo M.
                      </a>
                    </h3>
                    {/* <h4>london, england</h4> */}
                  </div>
                  {/* <!--/.home1-testm-txt--> */}
                </div>
                {/* <!--/.home1-testm-single--> */}
              </div>
              {/* <!--/.item--> */}
              <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial1.jpg" 
                          alt="img"/>
                  </div>
                  {/* <!-/.home1-testm-img-> */}
                  <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      Want a trip that is curated for you and considers your budget, 
                      time and interest ? look no further. These people know what 
                      they are doing. I am a collector of passport stamps thanks to 
                      Yellow Hat Travels.
                    </p>
                    <h3>
                      <a >
                        Machael C.
                      </a>
                    </h3>
                    {/* <h4>london, england</h4> */}
                  </div>
                  {/* <!--/.home1-testm-txt--> */}
                </div>
                {/* <!--/.home1-testm-single--> */}
              </div>
              {/* <!--/.item--> */}
              
              {/* <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial2.jpg" 
                          alt="img"/>
                  </div>
                  {/* </.home1-testm-img /}
                <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, contur adip elit, sed do 
                      mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <h3>
                      <a href="#">
                        kevin watson
                      </a>
                    </h3>
                    <h4>london, england</h4>
                </div>
                  {/* <!--/.home1-testm-txt--> /}
                </div>
                {/* <!--/.home1-testm-single--> /}
              </div>
              {/* <!--/.item--> }
              <div class="home1-testm item">
                <div class="home1-testm-single text-center">
                  <div class="home1-testm-img">
                    <img src="assets/images/client/testimonial1.jpg" 
                          alt="img"/>
                  </div>
                  {/* <!--/.home1-testm-img--> }
                  <div class="home1-testm-txt">
                    <span class="icon section-icon">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, contur adip elit, sed do mod 
                      incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <h3>
                      <a href="#">
                        kevin watson
                      </a>
                    </h3>
                    <h4>london, england</h4>
                  </div>
                  {/* <!--/.home1-testm-txt--> }
                </div>
                { <!--/.home1-testm-single--> }
            </div> */}
              {/* <!--/.item--> */}

            </div>
            {/* <!--/.testemonial-carousel--> */}
          </div> 
          {/* <!--/.container--></div> */}
        </section> 
        {/* // <!--/.testimonial--> */}
        {/* // <!-- testemonial End --> */}

        {/* <!--subscribe start--> */}
        <section id="subs" class="subscribe">
          <div class="container">
            <div class="subscribe-title text-center">
              <h2>
                Join our Subscribers List to Get Regular Update
              </h2>
              <p>
                Subscribe Now. We will send you Best News and Trip Offers!
              </p>
            </div>
            <form>
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                  <div class="custom-input-group">
                    <input type="email" class="form-control" 
                            placeholder="Enter your Email Here"/>
                    <button class="appsLand-btn subscribe-btn">Subscribe</button>
                    <div class="clearfix"></div>
                    <i class="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </section>
        {/* <!--subscribe end--> */}


        {/* <!-- footer-copyright start --> */}
        <footer  class="footer-copyright">
          <div class="container">
            <div class="footer-content">
              <div class="row">

                <div class="col-sm-3">
                  <div class="single-footer-item">
                    <div class="footer-logo">
                      <a href="index.html">
                        Yellow <span>Hat</span> Travels
                      </a>
                      <p>
                        best travel agency
                      </p>
                    </div>
                  </div>
                  {/* <!--/.single-footer-item--> */}
                </div>
                {/* <!--/.col--> */}

                <div class="col-sm-3">
                  <div class="single-footer-item">
                    <h2>link</h2>
                    <div class="single-footer-txt">
                      <p><a href="#">home</a></p>
                      <p><a href="#">destination</a></p>
                      <p><a href="#">spacial packages</a></p>
                      <p><a href="#">special offers</a></p>
                      <p><a href="#">blog</a></p>
                      <p><a href="#">contacts</a></p>
                    </div>
                    {/* <!--/.single-footer-txt--> */}
                  </div>
                  {/* <!--/.single-footer-item--> */}

                </div>
                {/* <!--/.col--> */}

                <div class="col-sm-3">
                  <div class="single-footer-item">
                    <h2>popular destination</h2>
                    <div class="single-footer-txt">
                      <p><a href="#">china</a></p>
                      <p><a href="#">venezuela</a></p>
                      <p><a href="#">brazil</a></p>
                      <p><a href="#">australia</a></p>
                      <p><a href="#">london</a></p>
                    </div>
                    {/* <!--/.single-footer-txt--> */}
                  </div>
                  {/* <!--/.single-footer-item--> */}
                </div>
                {/* <!--/.col--> */}

                <div class="col-sm-3">
                  <div class="single-footer-item text-center">
                    <h2 class="text-left">contacts</h2>
                    <div class="single-footer-txt text-left">
                      <p>+27 (0) 76 522 1408</p>
                      <p class="foot-email"><a href="#">info@yellowhattravels.com</a></p>
                      <p>14 Augrabies Street,</p>
                      <p>Mookloof Ridge</p>
                      <p>Pretoria</p>
                      <p>South Africa</p>
                    </div>
                    {/* <!--/.single-footer-txt--> */}
                  </div>
                  {/* <!--/.single-footer-item--> */}
                </div>
                {/* <!--/.col--> */}

              </div>
              {/* <!--/.row--> */}

            </div>
            {/* <!--/.footer-content--> */}
            <hr/>
            <div class="foot-icons ">
              <ul class="footer-social-links list-inline list-unstyled">
                        <li><a href="#" target="_blank" class="foot-icon-bg-1"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/YellowHatTravel?s=08" target="_blank" class="foot-icon-bg-2"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://instagram.com/yellowhattravels?igshid=2pm8zefmv5po" target="_blank" class="foot-icon-bg-3"><i class="fa fa-instagram"></i></a></li>
                  </ul>
                  <p>&copy; 2019 <a href="https://www.yellowhattravels.co.za">Yellow Hat Travels</a>. All Right Reserved</p>

                </div>
                {/* <!--/.foot-icons--> */}
            <div id="scroll-Top">
              <i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
            </div>
            {/* <!--/.scroll-Top--> */}
          </div>
          {/* <!-- /.container--> */}

        </footer>
        {/* <!-- /.footer-copyright--> */}
        {/* <!-- footer-copyright end --> */}


      </div>
    );
  }
}

export default App;
