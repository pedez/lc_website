import React from 'react'

function Calendly() {
    return (
        <div>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
            <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/pedezro/consulting-session'});return false;">Book Your Free Call With Me</a>
        </div>
    )
}

export default Calendly
