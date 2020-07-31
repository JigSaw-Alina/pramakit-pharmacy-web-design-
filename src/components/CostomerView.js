import React from 'react'



const CostomerView = () => (
    <div className="second_section_container">
     <section className="costumer" id="about">
      <div className="costumer__contentBx">
        <h2>Happy <span className="costumer__content">Customers</span></h2>
        <img src="/image/customer.gif"/>
        <p className="text">“Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nemo omnis voluptatem consectetur quam tempore
        obcaecati maiores voluptate aspernatur iusto eveniet,placeat ab quod tenetur ducimus. Minus ratione sit quaerat
        unde.”</p>
      </div>
       <div className="why_us__content">
        <h2>Why<span>Us</span></h2>
          <div className="mb_content">
            <div>
              <ol>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore</li>
              </ol>
            </div>
          </div>  
        </div>
     </section>
    </div>
);


export default CostomerView;