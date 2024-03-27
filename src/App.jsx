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
    <section className={cn('light-background', 'white-background')}>HERO with animation and or webgl</section>
    <section>Portfolio Cases P1</section>
    <section>Portfolio Cases  P2</section>
    <section>Portfolio Cases P3</section>
    <section>Portfolio Cases P4</section>
    <section className={cn('lime-background', 'footer-wrap')}>
      <div className={"footer-top"}>
         <div className="left"> 
         <div className="section-subheading">Links</div> 
         <div className="links"> <div classNameName="col"> 
         <div className="address"> <img src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/pin.svg" alt=""/> <div className="location"> <span>Switzerland / Lugano</span> <p>Phenomenon Studio Sagl<br/>Register number: CH-501.4.028.340-3c/o<br/>Via Giacomo Brentani 16, Lugano 6900, Switzerland <span className="a-wrap"> <a href="tel:+4560528689"><img src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/tel.svg" alt=""/>+44 60 5286 89 9</a> </span> </p> </div> </div> <div className="address"> <img src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/pin.svg" alt=""/> <div className="location"> <span>Estonia / Tallin</span> <p>Tallin, Harju maakond, Kesklinna linnaosa, Kaupmehe tn 7-120 </p> </div> </div> </div> <div className="col"> <div className="address"> <img src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/pin.svg" alt=""/> <div className="location"> <span>Poland / Wroclaw</span> 
      <p>Phenomenon Studio sp. z o.o.<br/>Registration ID (KRS): 0001083532<br/>Street Antonia Vivaldiego, 27, Wroclaw, 52-129 </p> </div> </div> <div className="address"> <img src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/pin.svg" alt=""/> <div className="location"> <span>Ukraine / Kyiv</span> <p>Kyiv, Konovaltsia Yevhena str. 32B </p> </div> </div> </div> </div> </div> 

      <div className="right"> 
      <div className="section-subheading">Follow us on socials</div> <div className="socs-wrap"> <div className="socs"> <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.behance.net/phenomenon-studio" className="behance" previewlistener="true"><img width="20" height="20" src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/s1.svg" alt=""/></a><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/company/26241149" className="linkedin" previewlistener="true"><img width="20" height="20" src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/s6.svg" alt=""/></a><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.instagram.com/phenomenon__studio" className="instagram" previewlistener="true"><img width="20" height="20" src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/s4.svg" alt=""/></a>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://wa.me/48574758959" className="whatsapp" previewlistener="true"><img width="20" height="20" src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/s8.svg" alt=""/></a><a target="_blank" rel="noopener noreferrer nofollow" href="https://t.me/phenomenonstudio" className="telegram" previewlistener="true"><img width="20" height="20" src="https://phenomenonstudio.com/wp-content/themes/phenomenon/img/s9.svg" alt=""/></a><a target="_blank" rel="noopener noreferrer nofollow" href="https://codesandbox.io/u/JTO" className="medium" previewlistener="true"><img width="20" height="20" src="../public/icons/codesandbox.svg" alt=""/></a> </div> </div> </div> </div>
      <a className="back-to-top" href="#top">
      <img src="../public/icons/chevronup.png" alt=""/>
      </a></section>
  </main>)
};

export default App;
