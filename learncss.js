

function onInitFunc(currentElement, commonCSS){
    let cssOutput = currentElement.querySelector(".css-output");
    let cssInputAll = currentElement.querySelectorAll(".css-input");

    cssOutput.style = cssInputAll[0].value + commonCSS;

    let clickCount = 0

    cssInputAll.forEach((cssInput, i) => {
        cssInput.addEventListener("input", (e) => {
            cssOutput.style = cssInput.value + commonCSS
        })
        cssInput.addEventListener("focus", (e) => {
            cssOutput.style = cssInput.value + commonCSS
        })
        //1st click = select box, 2nd click = edit text
        cssInput.addEventListener("pointerup", (e) => {
            // let hasAttr = cssInput.getAttribute("data-clicks")
            // if (hasAttr === null) {
            //     cssInput.setAttribute("data-clicks", 1);
            // }
            // if (parseInt(hasAttr) + 1 >= 2) {
            //     cssInput.removeAttribute("readonly");
            // }
            clickCount++
            if(clickCount >= 2){
                cssInput.removeAttribute("readonly");
            }
        })
        cssInput.addEventListener("blur", (e) => {
            cssInput.setAttribute("readonly", "true");
            // cssInput.removeAttribute("data-clicks");
            clickCount = 0
        })
        cssInput.setAttribute("readonly", "true");
    })
    
}

function cssDemoSimple(text1Arr, text2, commonCSS) {
    if (commonCSS === undefined) {
        commonCSS = ""
    }
    return {
        "element": "div",
        "class": "panelPair",
        "children": [
            {
                "element": "div",
                "class": "leftPanel",
                "children": [
                    {
                        "element": "h3",
                        "class": "panelHeading",
                        "text": "CSS"
                    },
                    ...text1Arr.map((t, i) => {
                        return [
                            {
                                "element": "textarea",
                                "class": "css-input",
                                "text": t
                            }
                        ]
                    }).flat(),
                ]
            },
            {
                "element": "div",
                "class": "rightPanel",
                "children": [
                    {
                        "element": "h3",
                        "class": "panelHeading",
                        "text": "Result"
                    },
                    {
                        "element": "div",
                        "class": "css-output",
                        "text": text2
                    }
                ]
            }
        ],
        "onpostinit": (currentElement) => {
            onInitFunc(currentElement, commonCSS)
        },
    }
}


let myJSON =
{
    "element": "div",
    "id": "main-content",
    "children": [
        {
            "element": "h1",
            "text": "CSS - Cascading Style Sheets"
        },
        {
            "element": "h2",
            "text": "Colors"
        },

        {
            "element": "h2",
            "text": "Font"
        },
        cssDemoSimple(
            [
                "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                "font-family: 'Times New Roman', Times, serif"
            ], "Font Family"
        ),
        cssDemoSimple(
            [
                "font-size: 20px",
                "font-size: 2em",
                "font-size: 2rem",
                "line-height: 1.5",
                "line-height: 2rem"
            ], "Font size \n & Line height"
        ),
        cssDemoSimple(
            [
                "font-weight: 200",
                "font-weight: 400",
                "font-weight: 700"
            ], "Font weight"
        ),
        cssDemoSimple(
            [
                "font-style: normal",
                "font-style: italic",
                "font-style: oblique"
            ], "Font style"
        ),
        {
            "element": "h2",
            "text": "Text Formatting"
        },
        cssDemoSimple(
            [
                "text-align: left",
                "text-align: center",
                "text-align: right",
                "text-align: justify",
                "vertical-align: top *not implemented",
                "vertical-align: middle",
                "vertical-align: bottom",
            ], "Text align"
        ),
        cssDemoSimple(
            [
                "text-wrap: none;",
                "text-wrap: wrap;",
                "text-wrap: wrap-reverse;",
                "white-space: normal;",
                "white-space: pre;",
                "white-space: pre-wrap;",
                "white-space: pre-line;",
                "white-space: break-spaces;",
                "word-break: normal;",
                "word-break: break-all;",
                "word-break: keep-all;",
                "overflow-wrap: normal;",
                "overflow-wrap: break-word;",
                "text-overflow: clip;",
                "text-overflow: ellipsis;\n",

            ], "I am a <br/>\n     very very <br/>\n         very very veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery long piece of text"
        ),
        cssDemoSimple(
            [
                "text-decoration: underline;",
                "text-decoration: overline;",
                "text-decoration: line-through;",
                "text-decoration: none;",
            ], "Text decoration"
        ),
        cssDemoSimple(
            [
                "text-transform: uppercase;",
                "text-transform: lowercase;",
                "text-transform: capitalize;",
                "text-transform: none;",
            ], "Text transform"
        ),
        cssDemoSimple(
            [
                "letter-spacing: normal;",
                "letter-spacing: 2px;",
                "word-spacing: 1em;",
            ], "Letter spacing"
        ),
        {
            "element": "h2",
            "text": "Text Styling"
        },
        cssDemoSimple(
            [
                "color: red;",
                "color: #069420;",
                "color: rgb(241,150,50);"
            ], "Hello World"),
        cssDemoSimple(
            [
                `/*offset-x | y | blur-radius | color*/
text-shadow: 1px 1px 2px black;`,
                `/*color | offset-x | y | blur-radius*/
text-shadow: #fc0 1px 0 10px;`,
                `/*offset-x | y | color*/
text-shadow: 5px 5px #558abb;`,
                `/*color | offset-x | y*/
text-shadow: red 2px 5px;`,
                `/*offset-x | y
text-shadow: 5px 10px;`,
            ], "Text shadow"
        ),
        {
            "element": "h2",
            "text": "Background"
        },
        cssDemoSimple(
            [
                "background-color: red;",
                "background-color: #069420;",
                "background-color: rgba(0,0,0,0.2);"
            ], "Color me background"
        ),



        // background-color: Specifies the background color.
        // background-image: Specifies an image to use as the background.
        // background-position: Defines the starting position of a background image.
        // background-size: Specifies the size of the background image (e.g., cover, contain).
        // background-repeat: Specifies whether the background image should repeat.
        // background-attachment: Controls how the background image scrolls (e.g., scroll, fixed).
        // Borders:

        // border: Defines the border around an element (shorthand for border-width, border-style, border-color).
        // border-width: Specifies the width of the border.
        // border-style: Specifies the style of the border (e.g., solid, dashed).
        // border-color: Specifies the color of the border.
        // border-radius: Defines rounded corners for an element.
        // border-top, border-right, border-bottom, border-left: Specifies borders for individual sides of an element.

        cssDemoSimple(
            [
                "background-image: url('yoda_doordonot.jpeg');",
                "background-image: linear-gradient(to right, red, yellow);",
                "background-image: repeating-radial-gradient(circle, red, yellow 20px);",
                "background-image: conic-gradient(red, yellow);",
                "background-image: repeating-conic-gradient(green 10%, yellow 20%, blue 30%, green 40%);"
            ], "text",
            `width: 100%;
height: 200px;
color: white;
box-sizing: border-box;`
        ),
        cssDemoSimple(
            [
                `background-size: cover;`,
                `background-size: contain;`,
                "background-size: 200px 150px;",
                `background-size: 200px 150px;
background-repeat: no-repeat;`,

            ], "text",
            `background-image: url('yoda_doordonot.jpeg');
color: white;
width: 100%;
height: 200px;
box-sizing: border-box;`
        ),
        cssDemoSimple(
            [
                "background-attachment: scroll;",
                "/*bg starts tiling from viewport origin, won't be aligned with container*/\nbackground-attachment: fixed;"
            ], "Observe whether the background moves when you scroll.",
            `background-image: url('yoda_doordonot.jpeg');
            color: white;
            background-size: 300px 200px;
            min-width: 600px;
            min-height: 200px;
            width: 100%;
            height: 100%;
            overflow: auto;
            box-sizing: border-box;
            `
        ),
        {
            "element": "h2",
            "text": "Background (TODO more eg on bg properties)"
        },

        cssDemoSimple(
            [
                "border: 3px solid red;",
                "border-width: 1em;\nborder-style: solid;\nborder-color: blue;",

                "border: 5px dashed limegreen;\nborder-radius: 20px;\nborder-top-color: pink;\nborder-top-style: dotted;",
                "border: 10px ridge grey;\nborder-radius: 10px 0px;"
            ], "Doctors without Borders",
            "margin: 1em;"
        ),
        cssDemoSimple(
            [
                "border-style: solid;",
                "border-style: hidden;",
                "border-style: dotted;",
                "border-style: dashed;",
                "border-style: double;",
                "border-style: groove;",
                "border-style: ridge;",
                "border-style: inset;",
                "border-style: outset;"
            ], "Border styles",
            "margin: 1em;border-width: 0.5em; border-color: orange;"
        ),
        {
            "element": "h2",
            "text": "Layout"
        },
        cssDemoSimple(
            [
                `/*'Static' does not obey left, top, right, bottom*/
position: static;`,
                `/*'Relative' allows positioning
via left, top, right, bottom attributes*/
position: relative;
left: 50px;`,
                `position: absolute;
background-image: radial-gradient(
circle,
    #FFFFFF 0%,
    #FFFFFF 20%,
    #FF0000 20%,
    #FF0000 40%,
    #FFFF00 40%,
    #FFFF00 60%,
    #008000 60%,
    #008000 80%,
    #0000FF 80%,
    #0000FF 100%
);
width: 100px;
height: 100px;
align-content: center;
text-align: center;
top: 50px;
left: 50px;`,
                `position: fixed;
background-image: radial-gradient(
circle,
    #FFFFFF 0%,
    #FFFFFF 20%,
    #FF0000 20%,
    #FF0000 40%,
    #FFFF00 40%,
    #FFFF00 60%,
    #008000 60%,
    #008000 80%,
    #0000FF 80%,
    #0000FF 100%
);
width: 100px;
height: 100px;
align-content: center;
text-align: center;
top: 50px;
left: 50px;`,
                "position: sticky;"
            ],
            "position",
            ""
            // "height: 100px; width: 100px; background-color: red;"
        ),
        {
            "element": "div",
            "class": "panelPair",
            "children": [
                {
                    "element": "div",
                    "class": "leftPanel",
                    "children": [
                        ...[
                            "position:sticky;\ntop:50px;\nleft:10px;",
                            "position:absolute;\ntop:50px;\nleft:10px;",
                             "position:fixed;\ntop:50px;\nleft:10px;",
                            ].map((t, i) => {
                            return [
                                {
                                    "element": "textarea",
                                    "class": "css-input",
                                    "text": t
                                },
                                {
                                    "element": "br"
                                }
                            ]
                        }).flat(),
    
                    ]
                },
                {
                    "element": "div",
                    "class": "rightPanel",
                    "children": [
                        {
                            "element": "div",
                            "text": "positioned",
                            "children": [
                                {
                                    "element": "div",
                                    "class": "css-output",
                                    "id": "vvv",
                                    "text": "posssss"
                                }
                            ]
                        }
                    ]
                }
            ],
            "onpostinit": (currentElement) => {
                onInitFunc(currentElement, "")
                // debugSticky(currentElement)
                // onlick(currentElement)
            },
        }
    ]
}



let convertedJSON = jsonToHTML(myJSON)
let mainElement = document.getElementById("main");
mainElement.append(convertedJSON);

let cssin = document.getElementsByClassName("css-input");
let cssout = document.getElementsByClassName("css-output");

function onlick() {
    let x = document.getElementById("vvv");
    if (x === null) {
        console.log("null")
        return
    }
    console.log("DEBUG")
    debugSticky(x)
    // x.addEventListener("click", (e) => {
    //     console.log(x)
    // })
}

function debugSticky(parentElement) {
    var p = parentElement;
    while (p != null) {
        var ov = getComputedStyle(p).overflow;
        if (ov !== 'clip'){
            console.warn(ov, p);
            p.style.overflow = 'clip';
        } 
        else {
            console.log(ov, p);
        }
        p = p.parentElement;
    }
}