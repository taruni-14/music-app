import React from 'react'
import './PlayerPlaylist.css'

const mySinger=[
  {
    id:1,
    singername:'Shreya Goshal',
  },
  {
    id:2,
    singername:'Shankar Mahadevan',
  },
  {
    id:3,
    singername:'Sonu Nigam',
  },
  {
    id:4,
    singername:'Ariana Grande',
  },
  {
    id:5,
    singername:'Taylor Swift',
  },
  {
    id:6,
    singername:'Ellie Goulding',
  },
  {
    id:7,
    singername:'Billie Elish',
  },
  {
    id:8,
    singername:'Salena Gomez',
  },
  {
    id:9,
    singername:'Alan Walker',
  },
  {
    id:10,
    singername:'Gabriel',
  },
]
export default function PlayerPlaylist() {
  return (
    <div className='playlist-container'>
    <div className='player-playlist-names'>
      {
      mySinger.map((items)=>{
        <div className='player-playlist-items' key={items.id}>
          {items.singername}
        </div>
      })
    }
    </div>
    </div>
  )
}
