import React from 'react'
import './Sidebar.css'
import {ReactComponent as HomeIcon} from '../assets/HomeIcon.svg';
import {ReactComponent as SearchIcon} from '../assets/SearchIcon.svg';
import {ReactComponent as LibraryIcon} from '../assets/LibraryIcon.svg';

const myPlayList=[
  { id:1,
    name: "sid sriram"
  },
  {
    id:2,
    name:"dsp"
  },
  {
    id:3,
    name:"maniratnam"
  }
  ,
  {
    id:4,
    name:"arjith singh"
  }
  ,
  {
    id:5,
    name:"arman malik"
  }
  ,
  {
    id:6,
    name:"shreya goshal"
  }
  ,
  {
    id:7,
    name:"sonu nigam"
  }
  ,
  {
    id:8,
    name:"shankar mahadevan"
  }
  ,
  {
    id:9,
    name:"ariana grande"
  }
  ,
  {
    id:10,
    name:"taylor swift"
  }

  ]
export default function Sidebar() {
  return (
    <div className='side-bar-container'>
      <div className='side-bar-items'>
        <HomeIcon width={'18px'} strokeWidth={'2px'} />Home
      </div>
      <div className='side-bar-items'>
        <SearchIcon width={'18px'} strokeWidth={'2px'} />Search
      </div>
      <div className='side-bar-items'>
        <LibraryIcon width={'18px'} strokeWidth={'2px'} />Library
      </div>
      <div className='side-bar-options'>
        {
        myPlayList.map((item) => {
          return(
            <div className='side-bar-items' key={item.id}>
              {item.name}
            </div>
          )
        })
      }
        
      </div>
    </div>
  )
}
