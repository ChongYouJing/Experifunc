class PanelElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });


        let myJSON =
        {
            "element": "div",
            "id": "main-content",
            "children": [
                {
                    "element": "h2",
                    "text": "HTML Basics"
                },
                {
                    "element": "div",
                    "class": "panelPair",
                    "children": [
                        {
                            "element": "div",
                            "class": "leftPanel",
                            "text":
                                `<div> - creates a generic container for a block of text
                            ddd
                            <html> - Root element of an HTML document.
                            <head> - Contains Metadata + links for the document
                            <title>-  tab name idk
                            <meta> - Meta data
                            <body> - The visible content`
                        },
                        {
                            "element": "div",
                            "class": "rightPanel",
                            "text":
                                `<html>
                                <head>
                                    <title>Hello World</title>
                                </head>
                                <body>
                                    <h1>Hello World</h1>
                                </body>
                            </html>`
                        }
                    ]
                }
            ]
        }


        function jsonToHTML(json) {

            let currentNode = null;

            // generate currentNode based on element type
            currentNode = document.createElement(json.element);

            const keys = Object.keys(json);
            keys.forEach(k => {
                switch (k) {
                    case "class":
                        currentNode.classList.add(json.class);
                        break;

                    case "id":
                        currentNode.id = json.id;
                        break;

                    case "text":
                        let t = document.createTextNode(json.text)
                        currentNode.append(t);
                        break;

                    case "children":
                        let ch = [];
                        //check if json has key "children"
                        if (json.hasOwnProperty("children")) {
                            ch = json.children.map(e => {
                                let n = jsonToHTML(e);
                                // console.log(n);
                                return n
                            })
                        }
                        if (ch.length > 0) {
                            currentNode.append(...ch);
                        }
                        break;

                }
            })



            return currentNode;

        }


        let convertedJSON = jsonToHTML(myJSON)
        // console.log(.outerHTML);

        shadow.append(convertedJSON);
    }
}

// Register the custom element
customElements.define('panel-element', PanelElement);
