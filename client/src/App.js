import React from 'react';
import './styles/App.css';
import headerLogo from "./assets/header-logo-full.svg"
import designFoundations from "./assets/design-foundations.svg"
import uiComponent from "./assets/ui-components.svg"
import iconLibrary from "./assets/icon-library.svg"
import brandNew from "./assets/brand-new.svg"
import inclusive from "./assets/inclusive.svg"
import footerLogo from "./assets/avaya-logo-footer.svg" 

function App() {
  return (
    <div App>
    <nav class="Navbar">
      <a class="NavbarBar" title="Neo Design System" href="https://design.avaya.com/">
        <img src={headerLogo} alt="header-logo" class="header-logo"/>
      </a>
      <ul class="Navlist">
        <a class="Navlistitem new" target="_blank" href="https://design.avaya.com/whats-new/">What's New</a>
        <a class="Navlistitem guide">Guidelines</a>
        <a class="Navlistitem components">Components</a>
        <a class="Navlistitem faqs" target="_blank" href="https://design.avaya.com/faq/">FAQs</a>
      </ul>
    </nav>

    <section class="Landing-content">
      <section class="title">
        <h1>Introducing Neo</h1>
        <h2>Avaya's Design System</h2>
        <p class="title-text">Neo is a library of flexible design components and guidelsnes, built upon our core principles and ready to be integrated into your digital products.</p>
        
        <form><button class="btn-getting-started" formaction="https://design.avaya.com/components/web/setup-web" >Getting Started →</button></form>
        
        <section class="Floating-island">
          <section class="libraries">
            <section class="library design-foundations">
              <section class="icon-wrapper">
                <img class="library-icon" src={designFoundations}/>
              </section>
              <h4>Design Foundations</h4> 
              <p class="text">A UX Design System that helps developers build consistent and exceptional user experiences.</p>
            </section>

            <section class="library ui-component">
              <section class="icon-wrapper">
                <img class="library-icon" src={uiComponent}/>
              </section>
              <h4>UI Component Libraries</h4>
              <p class="text">Code components for all of the common elements you use in your apps.</p>
            </section>

            <section class="library icon-library">
              <section class="icon-wrapper">
                <img class="library-icon" src={iconLibrary}/>
              </section>
              <h4>Icon Library</h4>
              <p class="text">An extensive collection of icons for nearly every occasion.</p>
            </section>  

          </section>
        </section>
      </section>
    </section>

    <section class="brand-new">
      <section class="brand-new-description">
        <section class="brand-new-title-text">
          <h2 class="brand-new-title">Brand. New.</h2>
          <p>Centralized guidelines creating a uniform experience, regardless of the application.</p>
        </section>
        <button class="brand-new-button">Component Libraries</button>
      </section>
      <img class="brand-new-image" src={brandNew}/>
    </section>
    
    <section class="inclusive">
      <img class="inclusive-image" src={inclusive}/>
      <section class="inclusive-description">
        <section class="inclusive-title-text">
          <h2 class="inclusive-title">Inclusive Design.</h2>
          <p>Building innovative frameworks that reach the widest possible audience, regardless of culture, background or physical ability. We explore possibility to find the source of great experience and success for everyone.
          </p>
        </section>
        <section class="inclusive-button">
          <form><button class="accessibility" formaction="https://design.avaya.com/guidelines/accessibility-principles" >Accessibility Guidelines</button></form>
          <form><button class="internationalization" formaction="https://design.avaya.com/guidelines/text">Internationalization Guidelines</button></form>
        </section>
      </section>
    </section>

    <footer>
      <img src={footerLogo} alt="footer-logo" class="footer-logo"/>
      <ul class="footer-list">
        <a class="footer-list-item terms" target="_blank" href="https://www.avaya.com/en/termsofuse/">Terms of Use</a>
        <a class="footer-list-item license" target="_blank" href="https://design.avayacloud.com/license/">License</a>
        <a class="footer-list-item privacy" target="_blank" href="https://www.avaya.com/en/privacy/commitment/">Privacy</a>
        <a class="footer-list-item trademarks" target="_blank" href="https://www.avaya.com/en/trademarks/">Trademarks</a>
        <a class="footer-list-item accessibility" target="_blank" href="https://www.avaya.com/en/accessibility/">Accessibility</a>
        <a class="footer-list-item careers" target="_blank" href="https://careers.avaya.com/">Careers</a>
        <a class="footer-list-item newsletter" target="_blank" href="https://design.avaya.com/subscribe/">Newsletter</a>
      </ul>
      <p class="footer-copyright">© 2022 Avaya, Inc.</p>
    </footer>
    </div>
  )
}

export default App;