let codeDemo_text = "demo_text.html" 


let catImg = "ethelcat.jpg"
let yodaImg = "yoda_doordonot.jpeg"

let borderImg = "foursquare.jpg"

let paragraph =
    `Definition of Paragraph : a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering.`

function CSSMain() {
    let main = document.createElement('main')
    main.id = 'main'

    let maincontent = document.createElement('div')
    maincontent.id = 'main-content'
    main.append(maincontent)

    maincontent.append(
        H2("==NEW CONTENT=="),


        H2("Text styling"),

        H3("Font"),

        CSSExplain("color",
            "red | hex code | rgb() | rgba()",
            "Sets the color of the text",
        ),
        // ExplainContainer("color", "can be a color name i.e.'red', hex code i.e.'#069420', or rgb value i.e.'rgb(3,20,100)'"),
        CSSTextDemo("Color",
            [
                "color: red;",
                "color:  #069420;",
                "color: rgb(241,150,50);"
            ]
        ),

        CSSExplain("font-family",
            "[ <family-name> | <generic-family> ] , ...",
            "Specifies a list of font names to use if available, from first to last."
        ),
        CSSTextDemo("Font family",
            [
                "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;",
                "font-family: 'Times New Roman', Times, serif;",
                "font-family: Consolas, monospace;",
                "font-family: 'Comic Sans', cursive;"
            ]
        ),
        CSSExplain("font-size",
            "<length> | [ [x | xx]-small | medium | [x | xx | xxx]-large | smaller | larger]",
            "Sets the size of the font"
        ),
        CSSTextDemo("Font size",
            [
                "font-size: 20px;",
                "font-size: 2em;",
                "font-size: 2rem;",
            ]
        ),
        CSSExplain("font-style",
            "normal | italic | oblique <angle>?"
        ),
        CSSTextDemo("Font style",
            [
                "font-style: normal;",
                "font-style: italic;",
                "font-style: oblique;"
            ]
        ),
        CSSExplain("font-weight",
            "normal | bold | lighter | bolder | [ 1 to 1000 ]",
            "'Boldness' of the character"
        ),
        CSSTextDemo("Font weight",
            [
                "font-weight: 200;",
                "font-weight: 400;",
                "font-weight: bold;",
                "font-weight: lighter;"
            ]
        ),
        // CSSExplain("font-stretch",
        //     "normal | <percent> | [ semi | extra | ultra ]-[ condensed | expanded ]",
        //     "Sets the width of the font. The font must support such expansion, otherwise there will be no effect.\nThe font-stretch property has been renamed to font-width in the specifications. However, font-width is not yet supported in major browsers. Use font-stretch instead"
        // ),
        // CSSTextDemo("Font stretch",
        //     [
        //         "font-stretch: normal;",
        //         "font-stretch: expanded;",
        //         "font-stretch: condensed;",
        //         "font-stretch: ultra-condensed;",
        //         "font-stretch: ultra-expanded;"
        //     ]
        // ),


        H3("Text"),
        H3("Text alignment attributes"),
        CSSExplain('text-align',
            "left | right | center | justify | start | end | match-parent",
            "Sets the alignment of the text in a block element or table cell"
        ),
        CSSDemoIFrame(
            [
                "text-align: left;",
                "text-align: center;",
                "text-align: right;",
                "text-align: justify;",
            ],
            codeDemo_text
        ),
        CSSExplain("text-align-last",
            "auto | left | right | center | justify",
            "Sets the alignment of the last line of a block of text"
        ),
        CSSDemoIFrame(
            [
                "text-align-last: auto;",
                "text-align-last: left;",
                "text-align-last: center;",
                "text-align-last: right;",
                // "text-align-last: justify;",
            ],
            codeDemo_text
        ),
        CSSExplain("text-indent",
            "<length>",
            "Length of empty space before the first line of a block of text"
        ),
        CSSDemoIFrame(
            [
                "text-indent: 0;",
                "text-indent: 2em;",
            ],
            codeDemo_text
        ),


        H3("Text transformation attributes"),
        CSSExplain("text-transform",
            "none | uppercase | lowercase | capitalize",
            "Sets how text is capitalised"
        ),
        CSSTextDemo("Text transform",
            [
                "text-transform: none",
                "text-transform: uppercase",
                "text-transform: capitalize",
            ]
        ),
        //     `Written by Joe Marma
        //     This   text   has   multiple   spaces.
        //     This text has                       very                                long                           spaces.          Please            break        them
        //     VERYLONGWORDQWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLZXCVBNM
        //     When I see your   face, there's  not a thing that I would  change. Cuz you're a amazing-ggg, just the way  you areee eeeee ee ee eeeee`,
        //    
        CSSExplain("text-orientation",
            "mixed | upright | sideways",
            "Sets orientation of text characters, when writing-mode is not horizontal-tb"
        ),
        CSSDemoIFrame(
            [
                "text-orientation: mixed;\nwriting-mode: vertical-rl;",
                "text-orientation: upright;\nwriting-mode: vertical-rl;",
                "text-orientation: sideways;\nwriting-mode: vertical-rl;",
            ],
            codeDemo_text
        ),
        // CSSTextDemo("Text orientation",
        //     [
        //         "text-orientation: mixed;\nwriting-mode: vertical-lr;",
        //         "text-orientation: upright;\nwriting-mode: vertical-lr;",
        //         "text-orientation: sideways;\nwriting-mode: vertical-lr;"
        //     ]
        // ),
        CSSExplain("letter-spacing",
            "<length> | normal",
            "Sets the spacing between characters"
        ),
        CSSTextDemo("Letter spacing",
            [
                "letter-spacing: normal;",
                "letter-spacing: 4px;",
            ]
        ),
        CSSExplain("word-spacing",
            "<length> | normal",
            "Sets the spacing between words"
        ),
        CSSTextDemo("Word spacing",
            [
                "word-spacing: normal;",
                "word-spacing: 3em;",
            ]
        ),
        CSSExplain("writing-mode",
            "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr",
            "Sets the direction in which text is laid out"
        ),
        // CSSTextDemo("Writing mode",
        //     [
        //         "writing-mode: horizontal-tb;",
        //         "writing-mode: vertical-rl;",
        //         "writing-mode: vertical-lr;",
        //         "writing-mode: sideways-rl;",
        //         "writing-mode: sideways-lr;"
        //     ]
        // ),
        CSSDemoIFrame(
            [
                "writing-mode: horizontal-tb;",
                "writing-mode: vertical-rl;",
                "writing-mode: vertical-lr;",
                "writing-mode: sideways-rl;",
                "writing-mode: sideways-lr;"
            ],
            codeDemo_text
        ),

        H3("Text flow attributes"),

        CSSExplain("text-wrap-mode",
            "wrap | nowrap",
            "Whether to break the text into multiple lines to avoid overflowing the container\nNote: name is not finalised in specification"
        ),
        CSSDemoIFrame(
            [
                "text-wrap-mode: nowrap;",
                "text-wrap-mode: wrap;",
            ],
            codeDemo_text
        ),
        //     CSSTextDemo(
        //         `My Pet Giraffe
        // written by Barrack Obiden
        //     Welcome to a very long story about a very long-necked giraffe.
        // `,
        //         [
        //             "text-wrap-mode: wrap;",
        //             "text-wrap-mode: nowrap;",
        //             "text-wrap-mode: wrap-reverse;"
        //         ]
        //     ),
        CSSExplain("text-wrap-style",
            "auto | balance | stable | pretty",
            "Method of wrapping the text"
        ),
        CSSDemoIFrame(
            [
                "text-wrap-style: auto;",
                "text-wrap-style: balance;",
                "text-wrap-style: stable;",
                "text-wrap-style: pretty;"
            ],
            codeDemo_text
        ),
        CSSExplain("text-wrap",
            "text-wrap-mode || text-wrap-style",
            "Shorthand"
        ),

        CSSExplain("text-overflow",
            "clip | ellipsis",
            "Sets how hidden overflow content is signaled to users"
        ),
        // CSSTextDemo("Text overflowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        //     [
        //         "text-overflow: clip;",
        //         "text-overflow: ellipsis;",
        //     ]
        // ),
        CSSDemoIFrame(
            [
                "text-overflow: clip;\ntext-wrap-mode: nowrap;",
                "text-overflow: ellipsis;\ntext-wrap-mode: nowrap;",
            ],
            codeDemo_text
        ),
        CSSExplain("overflow-wrap",
            "normal | break-word | anywhere",
            "Controls if word should be broken to prevent overflow." +
            "\nIn contrast to word-break, overflow-wrap will only create a break if an entire word cannot be placed on its own line without overflowing." +
            "\noverflow-wrap: anywhere is used in conjuction with min-content." +
            "\nNote: was named word-wrap previously, is an alias"
        ),
        CSSDemoIFrame(
            [
                "overflow-wrap: normal;",
                "overflow-wrap: break-word;",
                // "overflow-wrap: anywhere;" omitted because its too hard to explain
            ],
            "demo_longtext.html"
        ),
        //     CSSTextDemo(
        //         `My Pet Giraffe
        // written by Barrack Obiden
        //     Welcome to a very lonooooooog story about a very long-necked giraffe.
        // `,
        //         [
        //             "overflow-wrap: normal;",
        //             "overflow-wrap: break-word;",
        //         ]
        //     ),
        //iframe
        CSSExplain("word-break",
            "normal | break-all | keep-all",
            "Control if word should be broken for a new line."
        ),
        CSSDemoIFrame(
            [
                "word-break: normal;",
                "word-break: break-all;",
                "word-break: keep-all;",
                "word-break: break-word;",
            ],
            "demo_longtext.html"
        ),
        // CSSTextDemo("Word break",
        //     [
        //         "word-break: normal;",
        //         "word-break: break-all;",
        //         "word-break: keep-all;",
        //         "word-break: break-word;",
        //     ]
        // ),
        CSSExplain("white-space",
            "normal | pre | pre-wrap | pre-line | [white-space-collapse || text-wrap-mode]",
            "Controls how white space inside an element is handled" +
            "\nCan also be used as a shorthand for white-space-collapse and text-wrap-mode" +
            "\nNote that pre-line collapses whitespace"
        ),
        CSSDemoIFrame(
            [
                "white-space: normal;",
                "white-space: pre;",
                "white-space: pre-wrap;",
                "white-space: pre-line;"
            ],
            "demo_whitespace.html"
        ),
        CSSExplain("white-space-collapse",
            "collapse | preserve-[breaks | spaces]? | break-spaces",
            "Controls how white space inside an element is collapsed"
        ),
        CSSDemoIFrame(
            [
                "white-space-collapse: collapse;",
                "white-space-collapse: preserve;",
                "white-space-collapse: preserve-breaks;",
                "white-space-collapse: preserve-spaces;",
                "white-space-collapse: break-spaces;"
            ],
            "demo_whitespace.html"
        ),
        H3("Others"),
        CSSExplain("line-height",
            "<length> | normal | <number>",
            "Sets the height of a line"
        ),
        CSSDemoIFrame(
            [
                "line-height: 1.5;",
                "line-height: 3rem;"
            ],
            codeDemo_text
        ),

        CSSExplain("text-shadow",
            "none | [<color>? <length>{offset-x,y} {blur-radius}?] , ...",
            "Adds styleable shadow to text"
        ),
        CSSDemoIFrame(
            [
                "text-shadow: 1px 1px 2px black;",
                "text-shadow: #fc0 1px 0 10px;",
                "text-shadow: 5px 5px #558abb;",
                "text-shadow: red 2px 5px;",
                "text-shadow: 5px 10px;"
            ],
            codeDemo_text
        ),
        //         CSSTextDemo("Text shadow",
        //             [
        //                 `/*offset-x | y | blur-radius | color*/
        // text-shadow: 1px 1px 2px black;`,
        // `/*color | offset-x | y | blur-radius*/
        // text-shadow: #fc0 1px 0 10px;`,
        // `/*offset-x | y | color*/
        // text-shadow: 5px 5px #558abb;`,
        // `/*color | offset-x | y*/
        // text-shadow: red 2px 5px;`,
        // `/*offset-x | y*/
        // text-shadow: 5px 10px;`
        //             ]
        //         ),

        H3("Text decoration"),
        CSSExplain("text-decoration",
            "text-decoration-line || text-decoration-style || text-decoration-color",
            "Shorthand"
        ),
        CSSExplain("text-decoration-line",
            "none | underline | overline | line-through",
            "Sets the type of decorative line used on text."
        ),
        CSSTextDemo("Text decoration line",
            [
                "text-decoration-line: none;",
                "text-decoration-line: underline;",
                "text-decoration-line: overline;",
                "text-decoration-line: line-through;"
            ]
        ),
        CSSExplain("text-decoration-style",
            "none | solid | double | dotted | dashed | wavy",
            "Sets the appearance of decorative line used on text."
        ),
        CSSExplain("text-decoration-color",
            "<color>",
            "Sets the color of text decorations"
        ),
        CSSExplain("text-decoration-thickness",
            "<length>",
            "Sets the thickness of the text decoration"
        ),
        CSSTextDemo("Text decoration style",
            [
                "text-decoration-style: solid;\ntext-decoration-line: line-through;",
                "text-decoration: underline double;\ntext-decoration-color: gold;",
                "text-decoration-style: dotted;\ntext-decoration-line: underline;\ntext-decoration-thickness: 5px;",
                "text-decoration: underline dashed #7777be;\ntext-decoration-thickness: 4px;",
                "text-decoration: underline wavy red;"
            ]
        ),
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //recategorize
        CSSExplain("vertical-align",
            "baseline | sub | super | text-top | text-bottom | middle | top | bottom",
            "Sets the vertical alignment of an element"+
            "\nWorks only with inline- inline-block or table-cell elements"
        ),
        CSSAdvancedDemo(
            `<p style="line-height:5em;">Align me <span class="thetarget">correctly</span></p>`,
            ".thetarget",
            [
                "vertical-align:baseline;",
                "vertical-align:sub;",
                "vertical-align:super;",
                "vertical-align:text-top;",
                "vertical-align:text-bottom;",
                "vertical-align:middle;",
                "vertical-align:top;",
                "vertical-align:bottom;",
            ],
            ""
        ),

        H2("Box styling"),
        H3("Background"),
        CSSExplain("background",
            "none | background-[image | position | size | repeat | origin | clip | attachment | color]  ",
            "Shorthand"
        ),
        CSSExplain("background-color",
            "transparent (default) | <color>",
            "Sets the background color of an element"
        ),
        CSSTextDemo("Background has color",
            [
                "background-color: red;",
                "background-color: #069420;",
                "background-color: rgba(0, 0, 0, 0.2);"
            ]
        ),
        CSSExplain("background-image",
            "none (default) | <url> | <gradient>",
            "Sets the background image of an element"
        ),
        CSSDemoIFrame(
            [
                `background-image: url("${catImg}");`,
                "background-image: linear-gradient(to right, red, yellow);",
                "background-image: repeating-radial-gradient(circle, red 0px, yellow 50px);",
                "background-image: conic-gradient(purple, orange);",
                "background-image: repeating-conic-gradient(green 10%, yellow 20%, green 30%);"
            ],
            "demo_background.html"
        ),
        CSSExplain("background-position",
            "[left | center | right | top | bottom]? | [<length> | <percentage>]? {x|y}",
            "Sets the position of the background image, relative to background-origin, or offset from the edge"
        ),
        CSSDemoIFrame(
            [
                "background-position: center;",
                "background-position: left;",
                "background-position: bottom right;\nbackground-size: 100px 100px;",
                "background-position: 50% 50%;\nbackground-size: 100px 100px;"
            ],
            "demo_background.html"
        ),
        CSSExplain("background-size",
            "[auto (default) | <length> | <percentage>] {x,y} | cover | contain",
            "Sets the size of the background image"
        ),
        CSSDemoIFrame(
            [
                "background-size: cover;",
                "background-size: contain;",
                "background-size: 200px 200px;",
            ],
            "demo_background.html"
        ),
        CSSExplain("background-repeat",
            "repeatd(default) | repeat-x | repeat-y | space | round | no-repeat {x,y}",
            "Sets how the background image is repeated"
        ),
        CSSDemoIFrame(
            [
                "background-repeat: no-repeat;",
                "background-repeat: repeat-x",
                "background-repeat: space;",
                "background-repeat: round no-repeat;",
            ],
            "demo_background.html"
        ),
        CSSExplain("background-origin",
            "border-box | padding-box (default) | content-box",
            "Sets the starting point to position background"
        ),
        CSSDemoIFrame(
            [
                "background-origin: border-box;\nbackground-size: cover;",
                "background-origin: padding-box;\nbackground-size: cover;",
                "background-origin: content-box;\nbackground-size: cover;",
            ],
            "demo_background.html"
        ),
        CSSExplain("background-clip",
            "border-box (default) | padding-box | content-box",
            "Sets the area to crop the background"
        ),
        CSSDemoIFrame(
            [
                "background-clip: border-box;\nbackground-size: cover;",
                "background-clip: padding-box;\nbackground-size: cover;",
                "background-clip: content-box;\nbackground-size: cover;",
                "background-clip: text;\ncolor: transparent;"
            ],
            "demo_background.html"
        ),
        CSSExplain("background-attachment",
            "scroll (default) | fixed | local",
            "Sets whether the background image scrolls with the page."+
            "\nlocal: background scrolls within the element"+
            "\nscroll: background scrolls with the page, but not within the element"+
            "\nfixed: background does not scroll. Background-origin starts from top left of viewport."
        ),
        CSSTextDemo("Scroll page to observe background attachment",
            [
                `background-attachment: scroll;\nbackground-image: url("${catImg}");`,
                `background-attachment: fixed;\nbackground-image: url("${catImg}");`,
            ]
        ),
        CSSDemoIFrame(
            [
                "background-attachment: scroll;",
                "background-attachment: local;\nwidth:100px;"
            ],
            "demo_background.html"
        ),
        //<gradient>...
        
        
        
        
        //Consider iframing for better visualisation
        H3("Border"),
        CSSExplain("border",
            "border-width || border-style || border-color",
            "Shorthand"
        ),
        CSSExplain("",
            "Border syntax: applicable to all border-* attributes",
`Syntax:
1: {all sides}
2:{[top & botttom] [left & right]}
3:{[top][left & right][bottom]}
4:{[top][right][bottom][left] "clockwise"}`
        ),
        CSSExplain("border-width",
            "<length>",
            "Sets the width of the border"
        ),
        CSSExplain("border-style",
            "none (initial) | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset",
            "Sets the style of the border"+
            "\nhidden: overrides border-image"
        ),
        CSSExplain("border-color",
            "<color>",
            "Sets the color of the border"
        ),
        CSSTextDemo("Border width and style",
            [
                "border-style: none;",
                "border-style: solid;\nborder-width: 4px;",
                "border-style: dotted;\nborder-width: 8px;",
                "border-style: dashed;\nborder-width: 8px;",
                "border-style: double;\nborder-width: 16px;",
            ]
        ),
        CSSTextDemo("More border styles",
            [
                "border-style: groove;\nborder-width:8px;",
                "border-style: ridge;\nborder-width:8px;",
                "border-style: inset;\nborder-width:8px;",
                "border-style: outset;\nborder-width:8px;",
            ]
        ),
        CSSTextDemo("Border color",
            [
                "border-bottom-color: red;\nborder-bottom-width: 16px;\nborder-bottom-style: solid;",
                "border-top: 16px solid red;"+
                "\nborder-right: 12px solid blue;"+
                "\nborder-bottom: 8px solid green;"+
                "\nborder-left: 4px solid yellow;",
            ]
        ),
        CSSExplain("border-radius",
            "<length>{1-4}",
            "Sets the roundness of the border corners, in clockwise order from top left"
        ),
        CSSTextDemo("Border radius",
            [
                "border-radius: 8px;\nborder: 8px solid;",
                "border-radius: 0px 32px;\nborder: 8px solid;",
                "border-radius: 0px 32px 12px;\nborder: 8px solid;",
                "border-radius: 0px 128px 32px 0px;\nborder: 8px solid;",
            ]
        ),
        CSSExplain("border-block-*",
            "border-block-start-* | border-block-end-*",
            "Sets the top and bottom (via '-start' and '-end') border properties relative to writing-mode"
        ),
        CSSExplain("border-inline-*",
            "border-inline-start-* | border-inline-end-*",
            "Sets the left and right (via '-start' and '-end') border properties relative to writing-mode"
        ),
        
        //Dont understand border-image
        CSSExplain("border-image",
            "border-image-[source slice{1-4} / width{1-4} / outset{1-4} / repeat{1-4}]",
            "Shorthand. Masks the border over an image" + 
            "\nSee: https://developer.mozilla.org/en-US/docs/Web/CSS/border-image" + 
            "\nAdvanced"
        ),

        CSSTextDemo(
            "Border img",
            [
                `border-image-source: url('${borderImg}') 100 100 100 100 / 30px`,
                `border-image-source: url('${catImg}') 30 30 30 30 / 30px / round round;`,
            ]
        ),

        H3("Box"),

        CSSExplain("box-shadow",
            "<color> {offset-x | offset-y} | {offset-x, y, blur-radius} | {x,y,blur-radius,spread-radius} inset? , ...",
            "Sets the shadow of an element"
        ),
        //maybe iframe
        CSSTextDemo("Box shadow",
            [
                "box-shadow: green 0 0 10px 10px;\nmargin: 10px;",
                "box-shadow: 0 0 10px 5px inset;",
            ]
        ),
        CSSExplain("box-sizing",
            "content-box (default) | border-box",
            "Sets how the width and height of an element are calculated"
        ),
        //!IRAME
        CSSTextDemo("Box sizing",
            [
                "box-sizing: content-box;\nborder: 4px solid;",
                "box-sizing: border-box;\nborder: 4px solid;",
            ]
        ),


        H3("Outline"),
        CSSExplain("outline",
            "outline-width || outline-style || outline-color",
            "Shorthand. Sets the outline of an element. Outline is drawn outside the border."
        ),

        CSSExplain("outline-width",
            "<length>",
            "Sets the width of the outline"
        ),

        CSSExplain("outline-style",
            "auto | none | dotted | dashed | solid | double | groove | ridge | inset | outset",
            "Sets the style of the outline"
        ),

        CSSExplain("outline-color",
            "<color>",
            "Sets the color of the outline"
        ),

        CSSExplain("outline-offset",
            "<length>",
            "Sets the space between the outline and the border or edge of an element"
        ),
        //consider IFRAME
        CSSTextDemo("Outline",
            [
                "outline: 4px solid red;\nmargin:20px;",
                "outline: 4px solid orange;\n outline-offset: 10px;\nmargin:20px;",
            ]
        ),

        H3("Width and height"),
        //PLS IFRAME
        CSSTextDemo("Width and height",
            [
                "width: 100px",
                "height: 100px;"
            ]
        ),
        //IFRAME show resizable box/animating inner content resizing



        


        

        H2("Layout (oh no!)"),
        CSSTextDemo("Position",
            [
                `/*'Static' does not obey left, top, right, bottom*/
position: static;`,
                `/*'Relative' allows positioning
via left, top, right, bottom attributes*/
position: relative;
right: 20px;
top: 20px;`,
                `position: absolute;
transform:translateY(-120px);
width: 100px;
height: 100px;
align-content: center;
text-align: center;
background-image: radial-gradient(
circle,
    #AAAAAA 0%,
    #AAAAAA 20%,
    #FF0000 20%,
    #FF0000 40%,
    #FFFF00 40%,
    #FFFF00 60%,
    #008000 60%,
    #008000 80%,
    #0000FF 80%,
    #0000FF 100%
);`,
                `position: fixed;
top: 50%;
left: 50%;
transform:translate(-50%,-50%);
width: 100px;
height: 100px;
align-content: center;
text-align: center;
background-image: radial-gradient(
circle,
    #AAAAAA 0%,
    #AAAAAA 20%,
    #FF0000 20%,
    #FF0000 40%,
    #FFFF00 40%,
    #FFFF00 60%,
    #008000 60%,
    #008000 80%,
    #0000FF 80%,
    #0000FF 100%
);`,
                `/*Idk how this works*/
position: sticky;`

            ]
        ),

        H2("Misc styles"),
        H3("Overflow"),
        CSSExplain("overflow",
            "auto | clip | hidden | scroll | visible",
            "Sets what happens if content overflows an element's box" +
            "\nShorthand for overflow-x and overflow-y"
        ),
        CSSTextDemo("Overflow",
            [
                "overflow: auto;",
                "overflow: hidden;",
                "overflow: scroll;",
                "overflow: visible;"
            ]
        ),





        H2("Flexbox"),

        H3("Flex container styles"),
        // ExplainContainer("flex-direction:", "row (default) | column | row-reverse | column-reverse\nSomething"),

        CSSExplain("flex-direction",
            "row (default) | column | row-reverse | column-reverse",
            "Flex items will be ordered in the specified direction."
        ),
        CSSDemoIFrame(
            [
                "flex-direction: row;",
                "flex-direction: column;",
                "flex-direction: row-reverse;",
                "flex-direction: column-reverse;",
            ],
            "demo_flexcontainer.html"
        ),

        CSSExplain("flex-wrap",
            "nowrap (default) | wrap | wrap-reverse",
            "Controls whether a new row/column will be created if flex items cannot shrink further."
        ),
        CSSDemoIFrame(
            [
                "flex-wrap: nowrap;",
                "flex-wrap: wrap;",
                "flex-wrap: wrap-reverse;",
            ],
            "demo_flexwrap.html"
        ),
        CSSExplain("flex-flow",
            "flex-direction || flex-wrap",
            "Shorthand for flex-direction and flex-wrap."
        ),


        CSSExplain("justify-content",
            "flex-start (default) | flex-end | center | space-between | space-around | space-evenly",
            "Controls position of flex items along flex-direction."
        ),
        CSSDemoIFrame(
            [
                "justify-content: flex-start;",
                "justify-content: flex-end;",
                "justify-content: center;",
                "justify-content: space-between;",
                "justify-content: space-around;",
                "justify-content: space-evenly;"
            ],
            "demo_flexcontainer.html"
        ),
        CSSExplain("align-items",
            "stretch (default) | flex-start | flex-end | center | baseline",
            "Controls how flex items are aligned with flex-direction."
        ),

        CSSExplain("align-content",
            "normal (default) | flex-start | flex-end | center | space-between | space-around | stretch",
            "Controls how flex wrapping is positioned."
        ),

        CSSExplain("gap",
            "row-gap || column-gap",
            "Sets gaps between flex/grid/column items."
        ),


        CSSExplain("safe | unsafe keyword",
            "Can be used with: justify-content, align-items, align-content",
            "*Controls whether elements are moved around the DOM to avoid layout shifts."
        ),

        H3("Flex item styles"),


        CSSExplain("order",
            "0 (default) | <integer>",
            "Controls the visual order of flex / grid items."
        ),

        CSSAdvancedDemo(
            `<div style="display: flex; flex-direction:column;">
                    <div style="order:1;">1. order:1</div>
                    <div class="thetarget" style="order:2;">2. movable</div>
                    <div style="order:3;">3. order:3</div>
                </div>
            `,
            ".thetarget",
            [
                "order:0;",
                "order:1;",
                "order:4;"
            ],
            "border: 1px solid;"
        ),

        CSSExplain("flex-grow",
            "<number>, 0 (default)",
            "Controls how flex items grow."
        ),

        CSSExplain("flex-shrink",
            "<number>, 1 (default)",
            "Controls how flex items shrink."
        ),

        CSSExplain("flex-basis",
            "auto (default) | <length> | content | min/max/fit-content",
            "Controls how flex items are sized."
        ),

        CSSExplain("flex",
            "0 1 auto (default) | flex-grow flex-shrink flex-basis | flex-grow flex-basis | none",
            "Shorthand for flex-grow, flex-shrink, and flex-basis. " +
            "It is recommended that you use this shorthand property rather than set the individual properties. The shorthand sets the other values intelligently."
        ),


        CSSExplain("align-self",
            "auto (default) | flex-start | flex-end | center | baseline | stretch",
            "Controls how flex items are aligned with align-items."
        ),


        H2("Grid"),
        function () {
            let p = document.createElement('p')
            p.append("To create a CSS Grid, set display: grid | inline-grid;")
            return p
        }(),
        //show a grid illustration

        H3("Grid container styles"),

        //grid-auto-*????????



        CSSExplain(
            "grid-template-rows, grid-template-columns",
            "[line-name] <length> ... [line-name]",
            "Sets the grid rows.\nGrid lines by default are auto named and accessible via 1,2,3... or -1,-2,-3... from the last line"
        ),
        //grid row/column demodoafowafna

        CSSExplain(
            "grid-template-areas",
            `
"grid-area-name | . | none ..."
" "...`,
            "Designates grid cells a name, which can be used to intuitively lay out and span grid items."
        ),
        // a period signifies an empty cell
        //none = no grid area defined
        //please create a proper 'explain component'
        //gridarea demo

        CSSExplain(
            "grid-template",
            "none (default) | template-rows || template-columns || template-areas",
            "Shorthand for grid-template-rows, grid-template-columns, and grid-template-areas."
        ),

        CSSExplain(
            "justify-items",
            "stretch (default) | start | end | center",
            "Aligns grid items within a grid cell horizontally."
        ),

        CSSExplain(
            "align-items",
            "stretch (default) | start | end | center | baseline",
            "Aligns grid items within a grid cell vertically."
        ),

        CSSExplain(
            "place-items",
            "align-items justify-items",
            "Shorthand for align-items and justify-items."
        ),

        CSSExplain(
            "justify-content",
            "start | end | center | stretch | space-between | space-around | space-evenly",
            "Positions grid columns within the grid container."
        ),

        CSSExplain(
            "align-content",
            "start | end | center | stretch | space-between | space-around | space-evenly",
            "Positions grid rows within the grid container."
        ),

        CSSExplain(
            "place-content",
            "align-content justify-content",
            "Shorthand for align-content and justify-content."
        ),

        CSSExplain(
            "grid",
            "no",
            "Shorthand for grid-template-areas, grid-template-rows, grid-template-columns."
        ),





        H3("Grid item styles"),
        //you can opt in to either grid-column-start/end or grid-area

        CSSExplain(
            "grid-column-start\ngrid-column-end\ngrid-row-start\ngrid-row-end",
            "auto | <grid-line-name> | <number> <grid-area>? | span [<number> || <grid-line-name>]",
        ),
        //span means span till <name>

        CSSExplain(
            "grid-row\ngrid-column",
            "grid-row-start / grid-row-end || grid-column-start / grid-column-end",
            "Shorthand"
        ),

        CSSExplain(
            "grid-area",
            "<grid-area> | <row-start> / <column-start> / <row-end> / <column-end>",
            "Shorthand"
        ),

        CSSExplain(
            "justify-self",
            "stretch (default) | start | end | center",
            "Aligns a grid item within a grid cell horizontally."
        ),

        CSSExplain(
            "align-self",
            "stretch (default) | start | end | center | baseline",
            "Aligns a grid item within a grid cell vertically."
        ),

        CSSExplain(
            "place-self",
            "align-self justify-self",
            "Shorthand for align-self and justify-self."
        ),

        //units: fr


        //Here is a comparison of the css attributes used between flex and grid
        //also a comparison with container vs child attributes
        //pay attention when comparing justify-content. You may want to compare valid values with bullet points



    )



    return main
}


var averylongtext =
    `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo tortor eros, nisi nisi dictum molestie laoreet. Augue venenatis habitasse nisl nec lectus per! Quisque sodales ultricies lacus laoreet est neque. Sed adipiscing at diam montes phasellus ligula. Finibus magna rutrum aliquet ipsum elit proin montes. Elit magnis elementum proin vehicula; nam cubilia. Arcu bibendum ultricies penatibus fringilla semper ornare natoque. Nunc ultricies luctus, dictumst maecenas porta eleifend auctor aptent sollicitudin.

Consectetur hac cubilia porta conubia dignissim blandit mauris. Risus placerat auctor; consequat dapibus enim litora conubia auctor. Auctor nulla fringilla fringilla dapibus suscipit torquent lacinia vestibulum. Id vulputate justo et; habitant nullam quisque. Vulputate vivamus justo hendrerit nisl dictum inceptos nisl egestas. Quam habitasse elementum finibus eros velit praesent penatibus.

Vitae natoque aenean hendrerit duis donec, vehicula nibh lacus aliquet. Enim tristique vitae litora, lacus amet aliquet. Lacus habitasse etiam nisl integer posuere, dignissim pharetra accumsan. Sollicitudin magna proin aliquam nibh convallis. Himenaeos bibendum duis amet nibh rhoncus lobortis eros. Non condimentum dictum sagittis gravida imperdiet, porttitor etiam. Mollis suspendisse vestibulum arcu mollis viverra facilisis imperdiet. Mauris posuere vivamus maecenas praesent est tortor ultrices.`



function H2(text) {
    let h2 = document.createElement('h2')
    h2.textContent = text
    return h2
}
function H3(text) {
    let h3 = document.createElement('h3')
    h3.textContent = text
    return h3
}

function IFrameSample() {
    let frame = document.createElement("iframe")
    frame.setAttribute("src", "simpledemo.html")
    // frame.width=

    return frame
}

function CSSDemoIFrame(stylesArray, iframeSrc) {
    let onSelectListeners = []
    function dispatchEventToAll(data){
        let ee = new CustomEvent('cssInputChanged', { detail: data })
        onSelectListeners.forEach((ls) => {
            ls.dispatchEvent(ee);
        });
    }
    
    //Panel container
    let panelContainer = document.createElement('div')
    panelContainer.classList.add('demoGrid')
    panelContainer.append(
        //Left Header
        function () {
            let leftPanelHeader = H3("CSS")
            leftPanelHeader.classList.add("panelHeaderLeft")
            return leftPanelHeader
        }(),
        //Left Panel
        function () {
            let leftPanel = document.createElement('div')
            leftPanel.classList.add("demoPanelLeft")
            leftPanel.append(
                ...stylesArray.map(
                    function (v, i, a) {//css input
                        let tx = document.createElement('textarea')
                        tx.classList.add('css-input')
                        tx.value = v
                        tx.addEventListener("pointerup", () => {
                            dispatchEventToAll(tx.value)
                        })
                        tx.addEventListener("input", () => {
                            dispatchEventToAll(tx.value)
                        })
                        return tx
                    }
                )
            )
            return leftPanel
        }(),
        //Right Header
        function () {
            let rightPanelHeader = H3("Result")
            rightPanelHeader.classList.add("panelHeaderRight")
            return rightPanelHeader
        }(),
        //Right Panel
        function () {
            let rightPanel = document.createElement('div')
            rightPanel.classList.add("demoPanelRight")
            rightPanel.append(//iframe content
                function () {
                    let iframe = document.createElement("iframe")
                    iframe.setAttribute("src", iframeSrc)
                    iframe.classList.add("css-output")
                    iframe.addEventListener("cssInputChanged", (customEvent) => { iframe.contentWindow.postMessage(customEvent.detail, "*") })
                    onSelectListeners.push(iframe)
                    return iframe
                }()
            )
            return rightPanel
        }(),
    )
    return panelContainer
}


function CSSTextDemo(demoText, stylesArray) {

    //Panel headers
    let leftPanelHeader = H3("CSS")
    leftPanelHeader.classList.add("panelHeaderLeft")
    let rightPanelHeader = H3("Result")
    rightPanelHeader.classList.add("panelHeaderRight")

    //create target element
    let cssOutputElement = document.createElement("div")
    cssOutputElement.classList.add("css-output")
    cssOutputElement.textContent = demoText
    let setStyleFunc = function (newStyle) { cssOutputElement.style = newStyle }

    //Right panel
    let rightPanel = document.createElement('div')
    rightPanel.classList.add("demoPanelRight")
    rightPanel.append(cssOutputElement)


    //Left panel
    let leftPanel = document.createElement('div')
    leftPanel.classList.add("demoPanelLeft")
    let inputs = stylesArray.map(
        function (v, i, a) {
            let tx = document.createElement('textarea')
            tx.classList.add('css-input')
            tx.value = v
            tx.addEventListener("pointerup", () => { setStyleFunc(tx.value) })
            tx.addEventListener("input", () => { setStyleFunc(tx.value) })
            return tx
        }
    )
    leftPanel.append(...inputs)


    let panelContainer = document.createElement('div')
    panelContainer.classList.add('demoGrid')
    panelContainer.append(leftPanelHeader, rightPanelHeader, leftPanel, rightPanel)

    return panelContainer
}


function CSSAdvancedDemo(innerHTML, selector, stylesArray, supportingStyles) {

    let collapseButton = document.createElement('button')
    collapseButton.textContent = "..."
    collapseButton.title = "See hidden CSS"


    //Panel headers
    let leftPanelHeader = document.createElement('div')
    leftPanelHeader.classList.add("advancedPanelHeader")
    leftPanelHeader.append(
        document.createTextNode("CSS"),
        collapseButton
    )

    // leftPanelHeader.append(but)
    leftPanelHeader.classList.add("panelHeaderLeft")


    let rightPanelHeader = H3("Result")
    rightPanelHeader.classList.add("panelHeaderRight")

    //create target element
    let cssOutputElement = document.createElement("div")
    cssOutputElement.classList.add("css-output")
    cssOutputElement.innerHTML = truncateHTML(innerHTML)
    let setStyleFunc = function (newStyle) {
        let el = cssOutputElement.querySelector(selector)
        el.style = newStyle
    }

    //Right panel
    let rightPanel = document.createElement('div')
    rightPanel.classList.add("demoPanelRight")
    rightPanel.append(
        cssOutputElement
    )

    //Middle panel
    let middlePanel = document.createElement('div')
    middlePanel.classList.add("demoPanelMiddle")
    middlePanel.append(
        function () {
            let tx = document.createElement('textarea')
            tx.classList.add('css-input')
            tx.value = supportingStyles
            return tx
        }()
    )

    //Left panel
    let leftPanel = document.createElement('div')
    leftPanel.classList.add("demoPanelLeft")
    let inputs = stylesArray.map(
        function (v, i, a) {
            let tx = document.createElement('textarea')
            tx.classList.add('css-input')
            tx.value = v
            tx.addEventListener("pointerup", () => { setStyleFunc(tx.value + supportingStyles) })
            tx.addEventListener("input", () => { setStyleFunc(tx.value + supportingStyles) })
            return tx
        }
    )
    leftPanel.append(...inputs)



    let panelContainer = document.createElement('div')
    panelContainer.classList.add('demoGrid3')
    panelContainer.append(leftPanelHeader, rightPanelHeader, leftPanel, middlePanel, rightPanel)

    let middleHidden = false;
    collapseButton.addEventListener("pointerup", function () {
        if (middleHidden) {
            panelContainer.style.gridTemplateColumns = "1fr 0 1fr";
            middlePanel.style.visibility = "hidden"
        } else {
            panelContainer.style.gridTemplateColumns = "0.5fr 0.5fr 1fr";
            middlePanel.style.visibility = "visible"
        }
        middleHidden = !middleHidden
    })
    return panelContainer
}


function CSSExplain(attr, values, explainText) {
    //style name, possible values, next line explain
    let div = document.createElement('div')
    div.classList.add('explainContainer')

    let p = document.createElement('p')
    p.classList.add('explain')

    p.append(
        (function () {
            let code = document.createElement('code')
            code.textContent = attr
            return code
        })(),
        " - " + values
    )

    let p2 = document.createElement('p')
    p2.classList.add("explain")
    p2.append(explainText)

    div.append(p, p2)
    return div
}


function ExplainContainer(text1, text2) {
    let div = document.createElement('div')
    div.classList.add('explainContainer')

    let p = document.createElement('p')
    p.classList.add('explain')
    p.append(
        (function () {
            let code = document.createElement('code')
            code.textContent = text1
            return code
        })(),
        document.createTextNode(" - " + text2)
    )

    div.append(p)
    return div
}


function truncateHTML(text) {
    return text.replace(/[\n\r]/g, '').replace(/>\s+</g, '><').trim();
}


//OBSOLETE
//OBSOLETE
//OBSOLETE
//OBSOLETE


function CSSTextDemoOld(demoText, stylesArray) {
    let demoElement = (function () {
        let d = document.createElement("div")
        d.textContent = demoText
        return d
    })()

    let setterFunc = function (newStyle) { demoElement.style = newStyle }

    let leftPanel = createLeftPanel(stylesArray, setterFunc)
    let rightPanel = createRightPanel(demoElement)

    let panelContainer = document.createElement('div')
    panelContainer.classList.add('panelPair')
    panelContainer.append(leftPanel, rightPanel)

    return panelContainer
}


function CSSLayoutDemo(stringHTML, idToStyle, stylesArray) {
    let demoElement = document.createElement("div")
    demoElement.innerHTML = stringHTML

    let setterFunc = function (newStyle) { document.getElementById(idToStyle).style = newStyle }

    let leftPanel = createLeftPanel(stylesArray, setterFunc)
    let rightPanel = createRightPanel(demoElement)

    let panelContainer = document.createElement('div')
    panelContainer.classList.add('panelPair')
    panelContainer.append(leftPanel, rightPanel)

    return panelContainer
}

function createLeftPanel(inputArray, setStyleFunc) {
    let leftPanel = document.createElement('div')
    leftPanel.classList.add('leftPanel')
    let children = inputArray.map(
        function (v, i, a) {
            let tx = document.createElement('textarea')
            tx.classList.add('css-input')
            tx.value = v
            tx.addEventListener("pointerup", () => { setStyleFunc(tx.value) })
            tx.addEventListener("input", () => { setStyleFunc(tx.value) })
            return tx
        }
    )
    leftPanel.append(
        PanelHeading('CSS'),
        ...children
    )
    return leftPanel
}

function createRightPanel(demoElement) {
    let rightPanel = document.createElement('div')
    rightPanel.classList.add('rightPanel')
    rightPanel.append(
        PanelHeading('Result'),
        (function () {
            let p = document.createElement('div')
            p.classList.add('css-output')
            p.append(demoElement)
            return p
        })()
    )
    return rightPanel
}

function PanelHeading(text) {
    let h = document.createElement('h3')
    h.classList.add('panelHeading')
    h.textContent = text
    return h
}
