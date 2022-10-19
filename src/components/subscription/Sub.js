import React from 'react'
import './Sub.css'
const Sub = ({onBuy,plan,theme,price,isBasic,isPro,isMaster,yearly}) => {
  return (
    <div className="pricing-card">
      <header className={`price-section ${theme}`}>
        <p className='--color-white'>{plan}</p>
        <h4 className='--color-white --mb'>
          <span className='--text-xs'>$</span>
          <span className='price'>{price}</span>
        </h4>

        {yearly&&<p className='--color-white'>
          <del>30% Off</del>  
        </p>}

        {isPro && <p className='--color-white'>Everything in Basic, Plus</p>}
        {isMaster && <p className='--color-white'>Everything in Pro, Plus</p>}
      </header>
      <main className='feature-section --card'>
        <ul className=' feature-list'>

          {isBasic&&<li>Unlimited Pages</li>}
          {isBasic && <li>Unlimited Bandwidth</li>}
          {isBasic && <li>500gb Storage</li>}

          {isPro &&<li>10 Backups</li>}
          {isPro  && <li>GitHub Tool</li>}
          {isPro  && <li>Email Support</li>}

          {isMaster &&<li>20 Backups</li>}
          {isMaster  && <li>Priority support</li>}
          {isMaster  && <li>Push Notifications Storage</li>}

        </ul>
        <div>
          <button onClick={onBuy} className={`--color-white --btn --btn-lg buy-btn ${theme}`}>Buy Now</button>
        </div>

      </main>
    </div>
  )
}

export default Sub