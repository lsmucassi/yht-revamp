import React from 'react'

const Group = () => {
    return (
        <section id="tour" className="blog">
        {/* <!-- GROUP TOURS --> */}
          <div className="container">
            <div className="blog-details">
                <div className="gallary-header text-center">
                  <h2>
                    Tours
                  </h2>
                  <p>
                    Explore - Discover - Enjoy
                  </p>
                </div>
                <div className="blog-content">
                  <div className="row">
                    <div className="col-sm-4 col-md-3">
                      <div className="thumbnail">
                        <h2>Johannesburg & Soweto Tour</h2>
                        <div className="thumbnail-img">
                          <img src="assets/images/yellhat-img/jhb/COVER2_170227_100624.jpg" 
                                alt="blog-img"/>
                          <div className="thumbnail-img-overlay"></div>
                        </div>
                        <div className="caption">
                          <div className="blog-txt">
                            <h3>
                              <a href="./tour/jhb.html">
                                The City of gold and the place of fun, Fantastic foods and 
                                historical place.
                              </a>
                            </h3>
                            <br/>
                            <a href="./tour/jhb.html">Take Tour >></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-3">
                      <div className="thumbnail">
                        <h2>Pilanesberg Day Tour</h2>
                        <div className="thumbnail-img">
                          <img src="assets/images/yellhat-img/pilans/pilan.jpg" 
                                alt="blog-img"/>
                          <div className="thumbnail-img-overlay"></div>
                        </div>
                        <div className="caption">
                          <div className="blog-txt">
                            <h3>
                              <a href="./tour/pilani.html">
                                Discover on beautiful weather, Fantastic foods and amazing nature
                              </a>
                            </h3>
                            <br/>
                            <a href="./tour/pilani.html">Take Tour >></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-3">
                      <div className="thumbnail">
                        <h2>Pretoria Half Day Tour</h2>
                        <div className="thumbnail-img">
                          <img src="assets/images/yellhat-img/pta/nelson_mandela_statue_union_buildings_pretoria.jpg" 
                                alt="blog-img"/>
                          <div className="thumbnail-img-overlay"></div>
                        </div>
                        <div className="caption">
                          <div className="blog-txt">
                            <h3><a href="./tour/ukutula.html">
                              Serving as the seat of the admin branch, and of foreign embassies
                              </a></h3>
                            <br/>
                            <a href="./tour/pta.html">Take Tour >></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-3">
                      <div className="thumbnail">
                        <h2>Ukutula Lion Park & Lesedi Cultural Village</h2>
                        <div className="thumbnail-img">
                          <img src="assets/images/yellhat-img/ukutula/AAEAAQAAAAAAAAAAAAAAJDYzNTIyN2RlLWVhMDQtNGJlOC04YjdhLWY0ODVmNGVhZmM3Zg.jpeg" 
                                alt="blog-img"/>
                          <div className="thumbnail-img-overlay"></div>
                        </div>
                        <div className="caption">
                          <div className="blog-txt">
                            <h3><a href="./tour/ukutula.html">
                                Wilderness reserve with many animals viewable on safari tours
                                </a></h3>
                            <br/>
                            <a href="./tour/ukutula.html">Take Tour >></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Group
