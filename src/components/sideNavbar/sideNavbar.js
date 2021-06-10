
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import './sideNavbar.scss';
library.add(fab)

export default class SideNavbar extends React.Component {
  render(){
    return (
      <nav className="vertical-social">
        <div className="midnightHeader default">
          <div className="midnightInner">
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'telegram']} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'medium']} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
