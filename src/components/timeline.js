import React from 'react';

function Timeline () {
  return (
    <div>
      <section className="colorlib-experience" data-section="timeline">
      <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer <span>2016/09-2022/04</span></h2>
                        <p>I have five years of experience at Wistron compony and have been involved in many projects, one of which is to undertake maintenance of an older system using java and JavaScript.
                          Because the project structure used for many years is very complex, it is difficult to develop on this system because changes in one place will affect other places.
                          From the very beginning, I was very unfamiliar with the architecture, and finally I was able to independently complete the front-end and back-end of a function. I can independently carry the front end of the system.
                          Another project is about traffic using reactjs and nodejs. I am responsible for front-end development from scratch for two years. We record and track train movements
                          Provide the system to the line control center and the dashboard on the train. So we have to study floor plans and maps.
                          The development process of our project is to use scrum, We publish the program every two weeks.
                          I understand all scrum flow.  I received the scrum master certificate last year.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master<span>2014/09-2016/06</span></h2>
                        <p>National Sun Yat-sen University Department of Computer Science and Engineering Thesis title: Big Data Analysis of Health Insurance Data: Application of Bayesian Logistic Regression Model to Study the Risk Factors of Dementia and Ventricular Fibrillation
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Licence <span>2010/09-2014/06</span></h2>
                        <p>National Changhua University of Educaaon Department of Computer Science and Information Engineering
                        The graduation project uses data mining and fuzzy theory to develop Android system platform programs with situational awareness and machine learning functions.
                        Won the champion of the 2013 Graduation Project Competition in the Department of Engineering and the runner-up of the 2013 Central Region Information Project Achievement Competition
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
export default Timeline;
