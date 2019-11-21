import React from 'react'

const Services = () => {
    return (
        <section id="service" class="service">
          {/* <!--service start--> */}
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
            {/* <!--/.service--> */}
            {/* <!--service end--> */}
        </section>
    )
}

export default Services
