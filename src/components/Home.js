import React from 'react';
import Personimg from '../assests/person.png';
import Person from '../assests/person2.png';
import Aboutimg from '../assests/abtimg.gif';

function Home() {
  return (
    <div>
      <div className='banner'>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8 bannertext'>
                <br />
                <br />
                <img src={Personimg}></img>
                <br></br>
                <span>Hi, My Name is </span>
                <h1>Allie Grater.</h1>
                <h2>I build things for the web.</h2>
                <p>Front End Developer / WordPress Expert</p>
                <a href='#contact'>
                  <button
                    type='button'
                    className='custmbtn btn btn-outline-dark'
                  >
                    Contact Me !!
                  </button>
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container abtsec pt' id='abt'>
        <div className='row'>
          <div className='col-sm-6'>
            <img src={Aboutimg} className='mainimg' />
          </div>
          <div className='col-sm-6'>
            <h1 className='heading '>ABOUT ME</h1>
            <br></br>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen booktext ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </p>
            <h4>
              <b>Skills</b>
            </h4>
            <br></br>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <a href='#' className='skills'>
                HTML
              </a>
              <a href='#' className='skills'>
                css
              </a>
              <a href='#' className='skills'>
                JavaScript
              </a>
              <a href='#' className='skills'>
                Jquery
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <a href='#' className='skills'>
                React Js
              </a>
              <a href='#' className='skills'>
                React Native
              </a>
              <a href='#' className='skills'>
                Photoshop
              </a>
              <a href='#' className='skills'>
                Illustrator
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='pb'>
          <div className='row'>
            <div className='col-sm-3 mb-2'>
              <div className='box' data-content='Project one'>
                <img src='https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-221.jpg?w=740&t=st=1662643174~exp=1662643774~hmac=e4904e613ca8b459a07a44683e311dadabb810eda485f1da34c0378c376bba6c' />
              </div>
            </div>
            <div className='col-sm-3 mb-2'>
              <div className='box' data-content='Project Two'>
                <img src='https://img.freepik.com/premium-psd/medical-psd-template_203846-5.jpg?w=740' />
              </div>
            </div>
            <div className='col-sm-3 mb-2'>
              <div className='box' data-content='Project three'>
                <img src='https://img.freepik.com/free-vector/web-page-vertical-design-set-with-new-project-symbols_1284-10212.jpg?w=740&t=st=1662643082~exp=1662643682~hmac=d26f1860488a53ab440d1ed962666e02482aad4ba2ffdf476f934b43e481484b' />
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='box' data-content='Project four'>
                <img src='https://img.freepik.com/free-vector/website-design-page-template_1284-9294.jpg?w=740&t=st=1662643252~exp=1662643852~hmac=7fec1ba2d9d19957587e824896f4e63a807eb49402b2ab24bbba974b79c3a8e9' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fourthsec pt pb' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <h1 className='heading'>Latest Blogs</h1>
              <br></br>
              <div className='panel'>
                <h5>
                  <b>What Are Props & PropTypes In React?</b>
                </h5>
                <p>
                  Props basically stand for properties in which data can be
                  passed from parent to child component as an argument. They are
                  read-only
                </p>
                <a href='#'>Read More</a>
              </div>
              <br></br>
              <div className='panel'>
                <h5>
                  <b>Best React Component Libraries</b>
                </h5>
                <p>
                  React Component Library is a collection of components,
                  organised in a very meaningful manner providing the way to
                  browse and preview the components.
                </p>
                <a href='#'>Read More</a>
              </div>
            </div>
            <div className='col-sm-6'>
              <h1 className='heading'>Contact Form</h1>
              <br></br>
              <form action='' className='plr'>
                <div className='mb-3 mt-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Full Name'
                    name='name'
                  />
                </div>
                <div className='mb-3 mt-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Enter email'
                    name='email'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='pwd'
                    placeholder='Enter password'
                    name='pswd'
                  />
                </div>
                <div className='mb-3'>
                  <textarea
                    className='form-control'
                    rows='5'
                    id='comment'
                    name='text'
                    placeholder='Massage'
                  ></textarea>
                </div>
                <button type='submit' className='custmbtnsec btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
