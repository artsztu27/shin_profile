import React, {useContext}  from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

function About () {
    const { formatMessage: i18n } = useIntl();
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="col-md-12">
                            <div className="about-desc">
                                <span className="heading-meta">{i18n({id:'AboutMe'})}</span>
                                <h2 className="colorlib-heading">{i18n({id:'who'})}</h2>
                                <p>{i18n({id:'web'})} </p>
                                <p>{i18n({id:'active'})}</p>
                                <p>{i18n({id:'proactive'})}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-briefcase" />
                </span>
                <div className="desc">
                    <h3>Job experience</h3>
                    <p>I have five years of experience at Wistron compony and have been involved in many projects using Java,JavaScript,React,Nodejs.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
}
export default About;
