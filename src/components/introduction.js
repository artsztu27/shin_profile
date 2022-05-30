import React, {useContext}  from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import {Context} from "./Wrapper";

function Introduction () {
  const { formatMessage: i18n } = useIntl();
  const context = useContext(Context);

  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{backgroundImage: 'url(images/shin_bg.jpg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>{i18n({id:'hello'})} <br />{i18n({id:'shin'})}</h1>
                        <p>
                        {context.locale==='en' ?
                        <a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/17B1HoUuGa4Os_yS-jrtY0uoZZr7j-YQG/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" />
                        </a>:
                        <a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1rvca4M_qpVCRoLMBjJl85-bPNyt-6PQi/view?usp=sharing" target="_blank" rel="noopener noreferrer">下載履歷<i className="icon-download4" />
                        </a>
                        }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: 'url(images/shin_bg.jpg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>{i18n({id:'lookmy'})}<br />{i18n({id:'collection'})}!!</h1>
                        <p><a className="btn btn-primary btn-learn" href="https://github.com/artsztu27" target="_blank" rel="noopener noreferrer">
                          {i18n({id:'ViewProjects'})}<i className="icon-briefcase3" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
  </div>
  );
}
export default Introduction;
