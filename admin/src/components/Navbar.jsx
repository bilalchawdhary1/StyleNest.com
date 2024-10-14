import {assets} from '../assets/admin_assets/assets'
import PropTypes from 'prop-types'; 
const Navbar = ({setToken}) => {
  console.log('setToken prop:', setToken);
  return (
    <div className='flex items-center py-2 justify-between px-[4%]'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-sm  ">Logout</button>
    </div>
  )
}

// Define prop types
Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,  // Correctly setting prop type as function
};
export default Navbar