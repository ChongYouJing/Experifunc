
function jsonToHTML(json) {

    let currentNode = null;

    // generate currentNode based on element type
    currentNode = document.createElement(json.element);

    const keys = Object.keys(json);
    keys.forEach(k => {
        switch (k) {
            case "element":
            case "onpostinit":
                break;
            case "class":
                currentNode.classList.add(json.class);
                break;

            case "id":
                currentNode.id = json.id;
                break;

            case "text":
                if(json.text !== undefined){
                    let t = document.createTextNode(json.text)
                    currentNode.append(t);
                }
                break;

            case "children":
                let ch = [];
                ch = json.children.map(e => {
                    let n = jsonToHTML(e);
                    // console.log(n);
                    return n
                })
                
                if (ch.length > 0) {
                    currentNode.append(...ch);
                }
                break;

            case "innerHTML":
                if(json.innerHTML !== undefined){
                    let trimmed = json.innerHTML.replace(/\n/g, "");
                    // trimmed = trimmed.replace(/\s+/g, " ")
                    // console.log(trimmed);
                    currentNode.innerHTML = trimmed;
                }
                break;
            default:
                console.warn("unknown key: " + k);
        }
    })

    keys.forEach(k => {
        switch (k) {
            case "onpostinit":
                json.onpostinit(currentNode);
                break;
            default:
                break;
        }
    });



    return currentNode;

}