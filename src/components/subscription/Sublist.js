import React, { useEffect, useState } from "react";
import Sub from "./Sub";
import "./Sublist.css";

const Sublist = () => {
  const [basic, setBasic] = useState(9.99);
  const [pro, setPro] = useState(19.99);
  const [master, setMaster] = useState(29.99);

  const [yearly, setYearly] = useState(false);

  const calcPercent = (num,per)=>{
    return ( (num * 12) /100 ) * per;
  }

  useEffect(()=>{
    if (yearly) {
        setBasic(calcPercent(basic,70).toFixed(0));
        setPro(calcPercent(pro,70).toFixed(0));
        setMaster(calcPercent(master,70).toFixed(0));
    }else{
        setBasic(9.99)
        setPro(19.90)
        setMaster(29.99)
    }
  }
  ,[yearly])

  const handleClick = () =>{
    setYearly(!yearly);
  }
  return (
    <section className="main">
      <div className="container">
        <header className="title --center-all --bg-grey --p">
          <h2 className="--mb">Pricing</h2>
          <div className="--line"></div>

          <div className="--align-center --d-flex --p --cg1">
            <p>Monthly</p>
            <div onClick={handleClick} className={yearly ?"toggle-btn toggle":"toggle-btn"}>
              <div className={yearly ?"ball move":"ball"}></div>
            </div>
            <p>Yearly</p>
          </div>

        </header>

        <main className="sub-plans --center-all --p2">

          <Sub 
          yearly={yearly} 
          isBasic={true} 
          plan={"Basic"} 
          theme={"theme1"} 
          price={basic} 
          onBuy={()=>alert(basic)}/>

          <Sub
           yearly={yearly}
           isPro={true} 
           plan={"Pro"} 
           theme={"theme2"} 
           price={pro} 
           onBuy={()=>alert(pro)}/>

          <Sub
            yearly={yearly}
            isMaster={true}
            plan={"Master"}
            theme={"theme3"}
            price={master}
            onBuy={()=>alert(master)}
          />
        </main>
      </div>
    </section>
  );
};

export default Sublist;
