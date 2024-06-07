class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg bg-black">
      <div class="container-fluid">
      <a href="/index.html">
          <div class="navbar-content">
          <div class="navbar-brand"><img src="/images/drops-full-color-logo.png" loading="lazy" width="141" height="36" alt="" class="logo-4">
          </div>
        </a>
      <div class="d-flex justify-content-end">
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="/index.html#mission" class="navbar-link w-nav-link">
             <div class="btn btn-nav">Our Mission</div>
              </a>
            </li>
            <li class="nav-item">
                     <a href="/index.html#gallery" class="navbar-link w-nav-link">
                       <div class="btn btn-nav">Drops Gallery</div>
                     </a>
            </li>
            <li class="nav-item">
                     <a href="/index.html#contact" class="navbar-link w-nav-link">
                       <div class="btn btn-contact">Get in Touch</div>
                     </a>
            </li>
          </ul>
        </div>
      
        <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon  navbar-dark"></span>
        </button>

        </div>
      </div>
    </nav>`;
  }
}

customElements.define("header-component", Header);
