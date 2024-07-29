

import { TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

function Share({advice}: {advice: string}) {
  const location = window.location.href;

  return (
    <div className='share'>
         <TelegramShareButton title={advice} url={location}>
               <TelegramIcon round={true} size={30} className='icon'/>
          </TelegramShareButton>
          <WhatsappShareButton title={advice} url={location}>
              <WhatsappIcon round={true} size={30}  className='icon'/>
          </WhatsappShareButton>
    </div>
  )
}

export default Share