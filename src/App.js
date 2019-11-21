import React from 'react';
import './App.css';
import './headers/Navbar'
import Navbar from './headers/Navbar';
import Foot from './headers/Foot'
import Banner from './home/Banner'
import Services from './home/Services'
import World from './home/World'
import Ylite from './packs/Ylite';
import Tspecials from './packs/Tspecials';
import SAtours from './packs/SAtours';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* === NAVBAR === */}
        <Navbar/>
        
        {/* === HOME BANNER === */}
        <Banner/>

        {/* === SERVICES === */}
        <Services/>

        {/* === WORLD DESTINATIONS === */}
        <World/>
        
        {/* === YELLOW LITE PACKAGES */}
        <Ylite/>

        {/* ==== 2020 SPECIALS === */}
        <Tspecials/>

        {/* ==== SA TOURS === */}
        <SAtours/>

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
        <Foot/>

      </div>
    );
  }
}

export default App;
