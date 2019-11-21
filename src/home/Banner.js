import React from 'react'

const Banner = () => {
    return (
        <section id="home" class="about-us">
            {/* <!--about-us start --> */}
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
          {/* <!--/.about-us-->
        <!--about-us end --> */}
        </section>
    )
}

export default Banner
