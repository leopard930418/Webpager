import React from "react";
class Crisp extends React.Component {
    componentDidMount () {
        // Include the Crisp code here, without the <script></script> tags
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "a86912ae-6f5d-4e1f-a4ee-cb6097055ed7";

        (function() {
            var d = document;
            var s = d.createElement("script");

            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();
    }

    render () {
        return null;
    }
}
export default Crisp