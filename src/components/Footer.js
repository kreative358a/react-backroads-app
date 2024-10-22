import { socialLinks } from '../data'
// import { pageLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'



const Footer = () => {

  const date_full = () => {
    // const date = `${new Date().getFullYear()} ${month[new Date().getMonth()]} ${new Date().getDate()}`
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];  
    const year = new Date().getFullYear()
    const month_name = month[new Date().getMonth()]
    const day = new Date().getDate();
    if (day===1 || day===21 || day===31) {
    const day_full=day+'st'
    const date = `${year} ${month_name} ${day_full}`;
    return date.toString()
  }
    else if (day===2 || day===22) {
    const day_full=day+'nd'
    const date = `${year} ${month_name} ${day_full}`;
    return date.toString()
  }
    else if (day===3 || day===23) {
    const day_full=day+'rd'
    const date = `${year} ${month_name} ${day_full}`;
    return date.toString()
  }
    else {
    const day_full=day+'th'
    const date = `${year} ${month_name} ${day_full}`;
    return date.toString()
  }
    
  }
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        {/* <span id='date'>{`${new Date().getFullYear()} ${month[new Date().getMonth()]} ${new Date().getDate()}`}</span>. all rights reserved */}
        <span id='date'>{date_full()}</span>. all rights reserved
      </p>
    </footer>
  )
}
export default Footer
