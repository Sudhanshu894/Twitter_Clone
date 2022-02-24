import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link, useNavigate} from "react-router-dom"

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='sidebar'>
        <TwitterIcon style={{marginRight: '0.3rem'}}/>
        <ul>
            <li><SidebarOption active text="Home" Icon={HomeIcon}/></li>
           <li><SidebarOption text="Explore" Icon={TagRoundedIcon}/></li>
            <li><SidebarOption text="Notifications" Icon={NotificationsNoneRoundedIcon}/></li>
            <li><SidebarOption text="Messages" Icon={MailOutlineRoundedIcon}/></li>
            <li> <SidebarOption text="Bookmarks" Icon={BookmarkBorderRoundedIcon}/></li>
            <li><SidebarOption text="Lists" Icon={ArticleOutlinedIcon}/></li>
            <li><SidebarOption text="Profile" Icon={PermIdentityOutlinedIcon}/></li>
            <li><SidebarOption text="More" Icon={PendingOutlinedIcon}/></li>

            <li id='sideTweetBtn'>Tweet</li>
        </ul>
        
        <div className='logout-sec' style={{
          border: "1px solid red",
          width: "50px",
          height: "100px",
        }}>
          <div className='logout-bar'>
            <div className='user-img'> <button onClick={()=>{
          sessionStorage.removeItem('AuthToken');
          navigate('/signup');
        }}>Logout user</button></div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar