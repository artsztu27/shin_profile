import React, {useContext}  from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import {Context} from "./Wrapper";

function Sidebar (props) {
  const { formatMessage: i18n } = useIntl();
  const context = useContext(Context);

  return (
    <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/shin.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">{i18n({ id: 'name' })}</a></h1>
              <span className="email"><i className="icon-mail"></i>
              {i18n({ id: 'email' })}</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">{i18n({ id: 'Introduction' })}</a></li>
                  <li><a href="#about" data-nav-section="about">{i18n({ id: 'About' })}</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">{i18n({ id: 'Timeline' })}</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu-icon">
              <ul>
                <li><a href="https://www.linkedin.com/in/shin-tsz-tu-1bb510117/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/artsztu27/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <select value = {context.locale} onChange={context.selectLanguage}>
                <option value= 'cn'>中文</option>
                <option value= 'en'>English</option>
              </select>
            </div>
          </aside>
        </div>
      </div>
  );
}
export default Sidebar;
