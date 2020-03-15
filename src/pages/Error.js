import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <section id="home" className="about-us">
        <div className="container">
            <div className="about-us-content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="single-about-us">
                    <div className="about-us-txt">
                      <h2>
                        Error 404 
                        <br/>
                        Page Not Found
                        
                      </h2>
                      
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.about-us-txt--> */}
                  </div>
                  {/* <!--/.single-about-us--> */}
                </div>
                {/* <!--/.col--> */}
                <div className="col-sm-0">
                  <div className="single-about-us">
                    
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
