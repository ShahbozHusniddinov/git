import React ,{useState} from "react";
export const Code = () => {
    const[ massiv, setMassiv] = useState([
        {
          id:0,
          name:"Do millennials care about saving?",
          p:"Iphone 13 pro max note plus x s mini",
        },
        {
         id:1,
          name:"Millineef lorem lorem apsum solid?",
          p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:2,
          name:"Abi sava shumo intereasting tompch",
         p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:3,
          name:"All my friends are toxic all ambiton",
         p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:4,
          name:"Less, so rude and always negative",
         p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:5,
          name:"Les you are clever boy Iphone 13 pro",
         p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:6,
          name:"Xindogli Sumka xumoyun my own back",
         p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:7,
          name:"Pack Do mileone  care about saves",
         p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:8,
          name:"Do millennials care about saving?",
         p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:9,
          name:"Do millennials care about saving?",
          p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:10,
          name:"Do samolyantion section jobs all big?",
          p:"Iphone 13 pro max note plus x s mini",
       },
       {
         id:11,
          name:"Pantigo ayfon un ikki ming dollar",
          p:"Iphone 13 pro max note plus x s mini",
       },
      ])
      const[modal,setModal] = useState(false);
       const openModal = (val) =>{
          
       }
       const [input,setInput] = useState({search: ''})
       const Searchinput  = (e) => {
         setInput({...input, [e.target.name]: e.target.value.trim()})
       }
       const reset = () => {
         setInput({search: ''})
       }
       const[modal1,setModal1] = useState(false)
       const Modal = () =>{
           setModal1(!modal1)
       }
    return(
        <>
<div className="oto">
        <h1>News & Articles </h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et.</p>
        <form action="" className='ibi'>
          <input  type="text" placeholder='Search blog…' name="search" value={input.search} onChange={Searchinput} />
        </form>
      </div>
      <div className="carts all_padding ">
        {
          input.search === "" ? massiv.map((val) => (
            <div className="cart" key={val.id}>
            <div className="oq1">
              <img src="./images/mask.png" />
            </div>
            <div className="foter">
              <h1>{val.name}</h1>
              <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              <button className="btnall" onClick={Modal}>Read more</button>
            </div>
          </div>
          
          )) : massiv.filter((val) => {
            return val.name.toLowerCase().indexOf(input.search.toLowerCase()) !==-1
          }).length > 0 ? massiv.filter((val) => {
            return val.name.toLowerCase().indexOf(input.search.toLowerCase()) !==-1
          }).map((val) => (
            <div className="cart" key={val.id}>
            <div className="oq1">
              <img src="./images/mask.png" />
            </div>
            <div className="fater">
              <h1>{val.name}</h1>
              <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              <button className="btnall" onClick={()=>openModal(val)}>Read more</button>
            </div>
          </div>
          )): <span className="topilmadi" onClick={reset}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
              </span>
        }
      </div>
        <div className={modal1 ? "oyna active": "oyna"}>
      <div className="modal">
        <img src="./images/img.png" alt="" />
        <div>
             <h1>IPHONE</h1>
             <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
             <button className="close" onClick={Modal}>X</button>
        </div>
      </div>
      </div>

                <div className="navigation">
                <img src='./images/navigation.png'/>
                </div>
                <div className="color">
            <div className="colors">
                <h3>Logo</h3>
                <p>Far far away, behind the word mountains, far from <br /> the countries Vokalia and Consonantia</p>
            </div>
            <div className="colorss">
                <h4>Work</h4>
                <p>Blog</p>
                <p>How We Work</p>
                <p>Testimonials</p>
            </div>
            <div className="colorss">
                <h4>Services</h4>
                <p>Blog</p>
                <p>How We Work</p>
                <p>Testimonials</p>
            </div>
            <div className="colorss">
                <h4>Business Solution</h4>
                <p>Blog</p>
                <p>How We Work</p>
                <p>Testimonials</p>
            </div>
            <div className="colorss">
                <h4>Language</h4>
                <p>Blog</p>
                <p>How We Work</p>
                <p>Testimonials</p>
            </div>
        </div>
        
        </>
    )
}   