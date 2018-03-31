import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/Anaizing"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Anaizing" className="icon alt fa-github">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/Anaizing/"
            className="icon alt fa-codepen"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anai-araya/"
            className="icon alt fa-linkedin"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        
      </ul>
      <ul className="copyright">
        <li>&copy; ANAIZING.DESIGN</li>
        <li>
          Design: <a href="http://anaizing.design">Anai Araya</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
