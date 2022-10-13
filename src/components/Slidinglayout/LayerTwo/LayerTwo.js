import './LayerTwo.css';
import Imgg from '../LayerTwo/map-dark.png';

const LayerTwo = () => {
  return (

    <div className='maintwo'>
        <div className='layertwo-text'>
            <h1 className='welcome'>Welcome to SIMMI</h1>
            <p className='smart-india'>Smart India Multi Management Institute is a 
            pan India NGO registered in Haryana, 
            India; carrying out welfare projects on education, healthcare,
             livelihood and women empowerment. 
            We believe that unless members of the civil society are involved proactively 
            in the process of development, sustainable change will not happen. 
            Based on this, Simmi Foundation sensitizes and engages the civil society, 
            making it an active partner in all its welfare initiatives.
            </p>
        </div>
        <div className='layer-pic'>
        <img src={Imgg} alt="" />
        </div>
    </div>
  )
}

export default LayerTwo