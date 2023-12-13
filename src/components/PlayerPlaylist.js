import React from 'react'
import './PlayerPlaylist.css'

const mySinger=[
  {
    id:1,
    artist:'Shreya Goshal',
    title:'piyu bhole',
    duration: '3:45'
  },
  {
    id:2,
    artist:'Shankar Mahadevan',
    title:'Breathless',
    duration: '2:45'
  },
  {
    id:3,
    artist:'Sonu Nigam',
    title:'jeelu zara',
    duration: '3:45'
  },
  {
    id:4,
    artist:'Ariana Grande',
    title:'7 rings',
    duration: '3:45'
  },
  {
    id:5,
    artist:'Ellie Goulding',
    title:'Army',
    duration: '3:45'
  },
  {
    id:6,
    artist:'Alan Walker',
    title:'Alone',
    duration: '3:45'
  },
  {
    id:7,
    artist:'Billie ellish',
    title:'Lovely',
    duration: '3:45'
  },
  {
    id:8,
    artist:'Taylor swift',
    title:'bad blood',
    duration: '3:45'
  },
  {
    id:9,
    artist:'zoya',
    title:'beautiful',
    duration: '3:45'
  },
  {
    id:10,
    artist:'Gabriel',
    title:'Miss you',
    duration: '3:45'
  },
]
export default function PlayerPlaylist() {
  return (
    <div className='playlist-container'>
    <div className='player-playlist-header'>
      <div className='playlist-image-card'>

      </div>
      <div className='playlist-body'>
      <p>PLAYLIST</p>
      <h1>Best of mine</h1>
      </div>
      </div>
      <div className='playlist-list'>
        <div className='playlist-list-id'>
          #
        </div>
        <div className='playlist-list-artist'>
          ARTIST
        </div>
        <div className='playlist-list-title'>
          TITLE
        </div>
        <div className='playlist-list-duration'>
          DURATION
        </div>
      </div>
      <div className='playlist-list-container'>
        {
          mySinger.map((items)=>{
            return(
            <div className='playlist-list'>
              <div className='playlist-list-id'>{items.id}</div>
            <div className='playlist-list-artist'>{items.artist}</div>
            <div className='playlist-list-title'>{items.title}</div>
            <div className='playlist-list-duration'>{items.duration}</div>
            </div>
            
          )})
  
        }
      </div>
  </div>
    
    
  )
}
