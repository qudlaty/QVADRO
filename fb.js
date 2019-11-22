//messenger plugin code
(function () {
        let options = {
            facebook: "102180314567834", // Facebook page ID
            call_to_action: "Wyślij wiadomość", // Call to action
            position: "right", // Position may be 'right' or 'left'
        };
        let proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        let s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        let x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();