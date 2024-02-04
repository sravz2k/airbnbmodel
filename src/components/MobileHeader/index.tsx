import React from 'react'
import "./styles.css"
import SearchIcon from '@mui/icons-material/Search';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const MobileHeader = () => {
  return <div className='mobile-header'>
    <div className='mobile-header__search-bar'>
      <div className='mobile-header__search-icon'>
        <SearchIcon/>
      </div>
      <div>
        <div className='mobile-header__search-text'>Anywhere</div>
        <div>Any week . Add guests</div>
      </div>
    </div>
    <div className='mobile-header__filters'>
      <TuneOutlinedIcon/>
    </div>
  </div>
}

export default MobileHeader