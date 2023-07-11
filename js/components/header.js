class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar-logo-left w-nav">
    <div class="navbarcontainer w-container">
    <a href="/index.html">
      <div class="navbar-content">
            <div class="navbar-brand"><img src="/images/drops-full-color-logo.png" loading="lazy" width="141" height="36" alt="" class="logo-4">
            </div>
            </a>
        <nav role="navigation" class="navbar-menu w-nav-menu">
          <a href="/index.html#mission" class="navbar-link w-nav-link">
            <div class="text">Our Mission</div>
          </a>
          <a href="/index.html#gallery" class="navbar-link w-nav-link">
            <div class="text">Drops Gallery</div>
          </a>
          <a href="/index.html#team" class="navbar-link w-nav-link">
            <div class="text">Drops Team</div>
          </a>
          <a href="/index.html#contact" class="navbar-link w-nav-link">
            <div class="button-primary">Get in Touch</div>
          </a>
        </nav>
      </div>
      <div class="w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
    `;
  }
}

  customElements.define('header-component', Header);
