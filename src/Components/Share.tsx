

import { TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

function Share() {
  const location = window.location.href;

  return (
    <div className='share'>
         <TelegramShareButton title='networkName' url={location}>
               <TelegramIcon round={true} size={30} className='icon'/>
          </TelegramShareButton>
          <WhatsappShareButton title='networkName' url={location}>
              <WhatsappIcon round={true} size={30}  className='icon'/>
          </WhatsappShareButton>
    </div>
  )
}

export default Share