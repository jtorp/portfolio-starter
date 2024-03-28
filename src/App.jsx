import React from 'react'
import cn from 'clsx'
import './app.scss'
import Navbar from './components/navbar/navbar.jsx'
const App = () => {
  return ( <main>
    <section>
      <div id="top"></div>
      <Navbar/>
    </section>
    <section id='about' className={cn('light-background', 'white-background')}>HERO with animation and or webgl</section>
    <section id='projects1'>Portfolio Cases P1</section>
    <section id='kdrops'> Knowledge Drops </section>
    <section>Portfolio Cases P3</section>
    <section>Portfolio Cases P4</section>
    <section className={cn('lime-background', 'footer-wrap')}>
      <div className={"footer-top"}>
         <div className="left"> 
         <div className="section-subheading">Links</div> 
         <div className="links"> 
         <div className="col">
          <p><a href="#about">About</a></p>
          <p><a href="#projects1">Projects</a></p>
          <p><a href="#kdrops">Knowledge Drops</a></p>
          <p><a href="#blog">Blog</a></p>


         </div>
      
        </div> </div> 

      <div className="right"> 
      <div className="section-subheading">Follow me on socials</div> 
            {/* Social links DETAILS */}

      <div className="socs-wrap"> <div className="socs"> <a target="_blank" rel="noopener noreferrer nofollow" href="../public/icons/be.svg" className="behance" previewlistener="true"><img width="20" height="20" src="../public/icons/be.svg" alt=""/></a><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.figma.com/file/IqrtF9BRq9tiglvGe8JgzU/web3?type=design&node-id=0-1&mode=design&t=bs2agMjSfl3Kqtqe-0" className="figma" previewlistener="true"><img width="20" height="20" src="../public/icons/figma.svg" alt=""/></a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/jtorp" className="github" previewlistener="true"><img width="20" height="20" src="../public/icons/github.svg" alt="github"/></a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.quora.com/profile/Julia-Torp/answers" className="quora" previewlistener="true"><img width="20" height="20" src="../public/icons/quora.svg" alt="quora"/></a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://codesandbox.io/u/JTO" className="codesandbox" previewlistener="true"><img width="20" height="20" src="../public/icons/codesandbox.svg" alt=""/></a> </div> </div> 
      {/* CONTACT DETAILS */}
      <div classNameName="col" > 
         <div className="contact-details"> 
         <p className='detail'>
         <img src="../public/icons/tel.svg" alt="tel"/>
         <a href="tel:+4560528689">+45 60 5286 89 9
        </a>  
         </p>
         <p className='detail'>
         <img src="../public/icons/pin.svg" alt="tel"/>
         <a href="tel:+4560528689">Copenhagen, Denmark</a>  
         </p>
         <p className='detail'>
         <img src="../public/icons/wapp.svg" alt="whatsapp"/>
         <a target="_blank" rel="noopener noreferrer nofollow"  href="https://wa.me/4560528689">WhatsApp</a>  
         </p>
         <p className='detail'>
         <img  src="../public/icons/telegram.svg" alt="telegram"/>
         <a target="_blank" rel="noopener noreferrer nofollow"  href="https://t.me/Jtorp">Telegram</a>  
         </p>
          </div>  
        
        </div> 
    </div> </div>
      <a className="back-to-top" href="#top">
      <img src="../public/icons/chevronup.png" alt=""/>
      </a>
      
      
      </section>
  </main>)
};

export default App;
