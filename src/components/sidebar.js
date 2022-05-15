import React ,{ useState, useEffect}from 'react';

function Sidebar (props) {
  useEffect(() => {

  }, []);

  return (
    <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/Shin.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Shin Tsz TU</a></h1>
              <span className="email"><i className="icon-mail"></i> artsztu27@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
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
            </div>
          </aside>
        </div>
      </div>
  );
}
export default Sidebar;
