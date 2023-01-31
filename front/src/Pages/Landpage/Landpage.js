import React from "react";
import PopularDestinations from "../../Components/PopularDestination/PopularDestinations";
import "./Landpage.css";
const LandPage = () => {
  return (
    <>
      <div className='landpage'>
        <div className='cover'>
          <h1>Discover what's out there.</h1>
          <h1>Make your Landpage Attractive</h1>
          <form className='flex-form'>
            <label htmlFor='from'>
              <i className='ion-location' />
            </label>
            <input type='search' placeholder='Where do you want to go?' />
            <input type='submit' defaultValue='Search' />
          </form>
        </div>
      </div>
      <div className='tm-main-content' id='top'>
        <div className='tm-section-2 d-flex justify-content-center'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <h2 className='tm-section-title'>We are here to help you?</h2>
                <p className='tm-color-white tm-section-subtitle'>
                  Subscribe to get our newsletters
                </p>
                <a href='#' className='tm-color-white tm-btn-white-bordered'>
                  Subscribe Newletters
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='tm-section tm-position-relative d-flex justify-content-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            className='tm-section-down-arrow'
          >
            <polygon fill='#ee5057' points='0,0  100,0  50,60'></polygon>
          </svg>
          <div className='container tm-pt-5 tm-pb-4'>
            <div className='row text-center'>
              <article className='col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article'>
                <i className='fa tm-fa-6x fa-legal tm-color-primary tm-margin-b-20'></i>
                <h3 className='tm-color-primary tm-article-title-1'>
                  Level HTML Template by Tooplate website
                </h3>
                <p>
                  You are allowed to download, edit and use this template for
                  your business or client websites.
                </p>
                <a
                  href='#'
                  className='text-uppercase tm-color-primary tm-font-semibold'
                >
                  Continue reading...
                </a>
              </article>
              <article className='col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article'>
                <i className='fa tm-fa-6x fa-plane tm-color-primary tm-margin-b-20'></i>
                <h3 className='tm-color-primary tm-article-title-1'>
                  Original Website Template Producer
                </h3>
                <p>
                  You are NOT allowed to re-distribute the downloadable template
                  ZIP file on any website.
                </p>
                <a
                  href='#'
                  className='text-uppercase tm-color-primary tm-font-semibold'
                >
                  Continue reading...
                </a>
              </article>
              <article className='col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article'>
                <i className='fa tm-fa-6x fa-life-saver tm-color-primary tm-margin-b-20'></i>
                <h3 className='tm-color-primary tm-article-title-1'>
                  Contact us if you have any question
                </h3>
                <p>
                  If you see this template being distributed on any other site,
                  that is an illegal copy.
                </p>
                <a
                  href='#'
                  className='text-uppercase tm-color-primary tm-font-semibold'
                >
                  Continue reading...
                </a>
              </article>
            </div>
          </div>
        </div>

        <div
          className='tm-section tm-section-pad tm-bg-img tm-position-relative'
          id='tm-section-6'
        >
          <div className='container ie-h-align-center-fix'>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-7'>
                <div id='google-map'></div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-3 mt-md-0'>
                <div className='tm-bg-white tm-p-4'>
                  <form action='index.html' method='post' className='contact-form'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='contact_name'
                        name='contact_name'
                        className='form-control'
                        placeholder='Name'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='contact_email'
                        name='contact_email'
                        className='form-control'
                        placeholder='Email'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='contact_subject'
                        name='contact_subject'
                        className='form-control'
                        placeholder='Subject'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        id='contact_message'
                        name='contact_message'
                        className='form-control'
                        rows='9'
                        placeholder='Message'
                        required
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary tm-btn-primary'
                    >
                      Send Message Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandPage;
