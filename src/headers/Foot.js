import React from 'react'

const Foot = () => {
    return (
        <footer  class="footer-copyright">
            {/* <!-- footer-copyright start --> */}
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
            {/* <!-- /.footer-copyright--> */}
            {/* <!-- footer-copyright end --> */}
        </footer>
    )
}

export default Foot
