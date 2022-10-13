
import './Home.css';
import LayerTwo from "./LayerTwo/LayerTwo";
import LayerThree from "./LayerThree/LayerThree";
import LayerFour from "./LayerFour/LayerFour";
import LayerFive from "./LayerFive/LayerFive";
import LayerSix from "./LayerSix/LayerSix";
import LayerSeven from "./LayerSeven/LayerSeven";
import LayerEight from "./LayerEight/LayerEight";
import LayerNine from "./LayerNine/LayerNine";
import LayerTen from "./LayerTen/LayerTen";
import LayerEleven from "./LayerEleven/LayerEleven";
import LayerTwelve from "./LayerTwelve/LayerTwelve";
import LayerThirteen from "./LayerThirteen/LayerThirteen";
import LayerForteen from "./LayerForteen/LayerForteen";
import LayerFifteen from "./LayerFifteen/LayerFifteen";
import Slider from './Slider';




const Home = () => {

  return (

    <div className="mainapp">
       
        <div className='slide-layer'>
            <Slider/>
           <LayerTwo />
           <LayerThree />
           <LayerFour />
           <LayerFive />
           <LayerSix />
            <LayerSeven />
           <LayerEight />
           <LayerNine />
           <LayerTen/>
           <LayerEleven />
           <LayerTwelve />
          <LayerThirteen />
          <LayerForteen />
           <LayerFifteen />
        </div>
       
    
       
    </div>
  )
}

export default Home;