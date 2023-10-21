import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer__row">
        <div className="footer__column">
          <img src="/img/logotype.svg" alt="Logotype" />
          <div className="socials">
            <div className="header__socials">
              <div className="footer__social">
                <a href="#!">
                  <img src="/img/footer/fb.svg" alt="facebook" />
                </a>
              </div>
              <div className="footer__social">
                <a href="#!">
                  <img src="/img/footer/twitter.svg" alt="twitter" />
                </a>
              </div>
              <div className="footer__social">
                <a href="#!">
                  <img src="/img/footer/in.svg" alt="linkendin" />
                </a>
              </div>
              <div className="footer__social">
                <a href="#!">
                  <img src="/img/footer/insta.svg" alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__column">
          <h2 className="footer__nav-title">Explore</h2>
          <ul>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                Home
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>About
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>Articles
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>Our Store
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h2 className="footer__nav-title">Utility Pages</h2>
          <ul>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                Style Guide
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                404 Not Found
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                Password Protected
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                Licenses
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                <div className="footer__circle"></div>
                Changelog
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h2 className="footer__nav-title">Keep in Touch</h2>
          <div className="footer__contacts">
            <div className="footer__contacts-h">
              <h3>Address : </h3>
              <h3>Mail : </h3>
              <h3>Phone : </h3>
            </div>
            <div className="footer__contacts-p">
              <ul>
                <li>
                  <a href="https://maps.app.goo.gl/h9E7zZFJBkJSyhU28">
                    24A Kingston St, Los Vegas <br /> NC 28202, USA.
                  </a>
                </li>
                <li>
                  <a href="mailto:support@pages.com">support@pages.com</a>
                </li>
                <li>
                  <a href="tel:+221234567900">(+22) 123 - 4567 - 900</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy">
        <a href="https://github.com/gudkovWay">© Develop by Gudkov Iurii</a> <br/>
        <p>No “ Hard Code ”</p>  <br />
        </div>
    </footer>
  );
}
