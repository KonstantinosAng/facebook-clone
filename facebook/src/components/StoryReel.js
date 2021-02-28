import React from 'react'
import './StoryReel.css';
import Story from './Story.js';

function StoryReel() {
  return (
    <div className="storyReel__root">
      {/* Stories */}
      <Story image="https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" profileSrc="https://avatars.githubusercontent.com/u/44067624?s=60&amp;v=4" title="Kostas"/>
      <Story image="https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" profileSrc="https://scontent.fath3-4.fna.fbcdn.net/v/t1.0-9/116335182_2631992707018848_8977022192817420960_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=y0rvxTpSftUAX_MoDol&_nc_ht=scontent.fath3-4.fna&oh=028f4b4b51055fed74c2a75d88cd83e7&oe=606161D6" title="John"/>
      <Story image="https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" profileSrc="https://scontent.fath3-4.fna.fbcdn.net/v/t1.0-9/80800709_2629047050650796_6035272273219289088_o.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=f1-uiTH1dBcAX9q_jU1&_nc_ht=scontent.fath3-4.fna&oh=392aa72fcc64606550844d932d8ca15b&oe=606078FD" title="Themis"/>
      <Story image="https://images.pexels.com/photos/23795/rocket-launch-space-discovery.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" profileSrc="https://scontent.fath3-3.fna.fbcdn.net/v/t1.0-9/120038426_1729112810579976_3883415405267251868_o.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=YnCI2XrLoQcAX9GSqRS&_nc_ht=scontent.fath3-3.fna&oh=448f2c5d864ddd8892bdee6ffa3a24a6&oe=605F4616" title="Evi"/>
      <Story image="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" profileSrc="https://scontent.fath3-4.fna.fbcdn.net/v/t1.0-9/118637488_3442046945854946_6579593833440036301_o.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=Z-4kzZBemY4AX-7QUof&_nc_ht=scontent.fath3-4.fna&oh=3a38352d19e048b74572afa811b8a28d&oe=6061441B" title="Lefteris"/>
    </div>
  )
}

export default StoryReel
