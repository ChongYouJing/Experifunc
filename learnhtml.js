function htmlDemoSimple(leftPanelObj, rightPanelObj) {
    if (rightPanelObj === undefined || rightPanelObj === null) {
        rightPanelObj = {
            "innerHTML": leftPanelObj.text
        }
    }
    let rightPanelProp = rightPanelObj.hasOwnProperty("innerHTML")? "innerHTML":"text"
    let x = {
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
                        "text": "HTML"
                    },
                    {
                        "element": "p",
                        "class": "html-input",
                        "text":leftPanelObj.text,
                        "onpostinit": (e)=>{
                            e.readOnly = true
                        }
                    }
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
                        "class": "html-output",
                        [rightPanelProp]: rightPanelObj[rightPanelProp]
                    }
                ]
            }
        ]
    }
    return x
}

let myJSON =
{
    "element": "div",
    "id": "main-content",
    "children": [
        {
            "element": "h1",
            "text": "HTML - Hypertext Markup Language"
        },
        {
            "element": "h2",
            "text": "HTML Basics"
        },
        {
            "element": "p",
            "class": "explain",
            "text": `The following are the basic HTML elements required to make a valid webpage.`
        },
        htmlDemoSimple({
            "text": 
`<div> - creates a generic container for a block of text
<html> - Root element of an HTML document.
<head> - Contains Metadata + links for the document
<title>-  tab name idk
<meta> - Meta data
<body> - The visible content`
        }, {
            "text": 
`<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>`
        }),
        {
            "element": "div",
            "class": "explainContainer",
            "children": [
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;h1&gt; - &lt;h6&gt;</code> - Create a header. Use h1 for the main title and h6 for the inner most header."
                }
            ],
        },
        htmlDemoSimple(
            {
"text": `<h1>Hello World</h1>
<h2>Hello World</h2>
<h3>Hello World</h3>
<h4>Hello World</h4>
<h5>Hello World</h5>
<h6>Hello World</h6>`
            }, 
            null
        ),
            {
                "element": "div",
                "class": "explainContainer",
                "children": [
                    {
                        "element": "p",
                        "class": "explain",
                        "innerHTML": "<code>&lt;p&gt;</code> - Creates a generic container for a block of text"
                    }
                ]
            },
        htmlDemoSimple(
            { 
                "text": `<p>Hello World</p>` 
            }, 
            null
        ),
        {
            "element": "div",
            "class": "explainContainer",
            "children": [
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;br&gt;</code> - Creates a line break."
                }
            ]
        },
        htmlDemoSimple(
            {
                "text": `ipsum <br/> lorem`
            },
            null
        ),
        {
            "element": "div",
            "class": "explainContainer",
            "children": [
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;hr&gt;</code> - Creates a horizontal line."
                }
            ]
        },            
        htmlDemoSimple(
            {
                "text": 
`Section1 <hr/>
Section2    `
            },
            null
        ),
        {
            "element": "div",
            "class": "explainContainer",
            "children": [
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": 
`<code>&lt;!-- html comment --&gt;</code> - 
Creates a comment in the HTML DOM. 
Comments are not rendered in the browser.`
                }
            ]
        },
        
        htmlDemoSimple(
            {
                "text": `<!--This is a comment-->`
            },
            null
        ),
        {
            "element": "h2",
            "text": "Lists"
        },
        {
            "element": "div",
            "class": "explainContainer",
            "children": [
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;ul&gt;</code> - Creates an unordered list."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;li&gt;</code> - Creates a list item."
                }

            ]
        },
        
        htmlDemoSimple(
            {
                "text":
                    `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`
            },
            {
                "innerHTML": `<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>`
            }
        ),
        {
            "element": "div",
            "class": "explainContainer",
            "children": [
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;ol&gt;</code> - Creates an ordered list."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;li&gt;</code> - Creates a list item."
                }
            ]
        },
        htmlDemoSimple(
            {
                "text":
                    `<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>`
            },
            {
                "innerHTML": 
`<ol>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ol>`
            }
        ),
        {
            "element": "div",
            "class": "explainContainer",
            "children": [
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;dl&gt;</code> - Creates a description list."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;dt&gt;</code> - Creates a description term."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;dd&gt;</code> - Creates a 'description description'."
                }
            ]
        },
        htmlDemoSimple(
            {
                "text": 
`<dl>
    <dt>Item 1</dt>
    <dd>Description 1</dd>
    <dt>Item 2</dt>
    <dd>Description 2</dd>
    <dt>Item 3</dt>
    <dd>Description 3</dd>
</dl>`
            }, 
            {
                "innerHTML": 
`<dl>
<dt>Item 1</dt>
<dd>Description 1</dd>
<dt>Item 2</dt>
<dd>Description 2</dd>
<dt>Item 3</dt>
<dd>Description 3</dd>
</dl>`
            }
        ),
        {
            "element": "h2",
            "text": "Links and Media"
        },
        {
            "element": "p",
            "class": "explain",
            "text": `<a> - Creates a hyperlink.`
        },
        htmlDemoSimple(
            {
                "text":
                    `<a href="https://www.google.com">Google</a>`
            },
            null
        ),
        {
            "element": "p",
            "class": "explain",
            "text": `<img> - Creates an image.`
        },
        htmlDemoSimple(
            {
                "text":
                    `<img src="yoda_doordonot.jpeg">`
            },
            null
        ),
        {
            "element": "p",
            "class": "explain",
            "text": `<audio> - Creates an audio player.`
        },
        htmlDemoSimple(
            {
                "text":
`<audio controls>
    <source src="eccentric-funny-music-117024.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>`
            },
            null
        ),
        {
            "element": "p",
            "class": "explain",
            "text": `<video> - Creates a video player.`
        },
        htmlDemoSimple(
            {
                "text":
`<video controls>
    <source src="kitten_playing.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`
            },
            null
        ),
        {
            "element": "h2",
            "text": "Tables"
        },
        {
            "element": "div",
            "class": "explainContainer",
            "children": [
                {
                    "element": "p",
                    "class": "explain",
                    "text": "Tables are used to display data in a grid format with rows and columns."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;table&gt;</code> - Creates a table. It is used to display data in a grid format with rows and columns."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;Caption&gt;</code> - Creates a table caption. Used to describe the table content. Is palced at the top of the table."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;tr&gt;</code> - Creates a table row. Used to contain one or more <td> or <th> elements into a row."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;th&gt;</code> - Creates a table header cell. Defines cell as a header cell. It is used to represent header information and is typically bold and centered by default."
                },
                {
                    "element": "p",
                    "class": "explain",
                    "innerHTML": "<code>&lt;td&gt;</code> - Creates a table data cell."
                }
            ]
        },
        htmlDemoSimple(
            {
                "text":
                `<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>
    <tr>
        <td>Row 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
    </tr>
    <tr>
        <td>Row 2</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
    </tr>
</table>`
            },
            null
        ),
        /**
  _            _     _        _     _      
 | |_ ___  ___| |_  | |_ __ _| |__ | | ___ 
 | __/ _ \/ __| __| | __/ _` | '_ \| |/ _ \
 | ||  __/\__ \ |_  | || (_| | |_) | |  __/
  \__\___||___/\__|  \__\__,_|_.__/|_|\___|
                                           
*/
        {
            "element": "div",
            "innerHTML":
                `<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>
    <tr>
        <td>Row 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
    </tr>
    <tr>
        <td>Row 2</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
    </tr>
</table>`
        },
        {
            "element": "p",
            "class": "explain",
            "text":
`<colgroup> - Defines a table column group. Used to group one or more columns in a table, allowing you to apply styles or attributes to specific columns.
<col> - Defines a table column. Used to apply styles or attributes to a column.
    span = "2" - Specifies that the column group should span two columns.
<thead> - Creates a table header. It is used to define the header section of a table, typically containing column names or titles.
<tbody> - Creates a table body. Main contenet of the table 
<tfoot> - Creates a table footer.
    colspan - 
    rowspan -
    `
        },
        htmlDemoSimple(
            {
                "text":
                    `<table>
    <caption>Personnel Details</caption>
    <colgroup>
        <col span="2" style="background-color:#e0e000">
        <col style="background-color:#00e000">
    </colgroup>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color:#7777e0">
            <td>Row 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Row 2</td>
            <td>Footer 2</td>
            <td>Footer 3</td>
        </tr>
    </tfoot>
</table>`
            },
            {
                "innerHTML":
                    `<table>
    <caption>Personnel Details</caption>
    <colgroup>
        <col span="2" style="background-color:#e0e000">
        <col style="background-color:#00e000">
    </colgroup>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color:#7777e0">
            <td>Row 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Row 2</td>
            <td>Footer 2</td>
            <td>Footer 3</td>
        </tr>
    </tfoot>
</table>`
            }
        ),
        {
            "element": "h2",
            "text": "Forms"
        },
        {
            "element": "h3",
            "text": `Basic form elements`
        },
        {
            "element": "p",
            "class": "explain",
            "text":
`<form> - Creates a form. It is used to collect user input from the user.
<input> - Creates an input field. It is used to collect user input from the user. Attributes can be used to specify the type of input field.
    type="text" - Creates a text input field.
    type="password" - Creates a password input field.
    type="email" - Creates an email input field.
    type="number" - Creates a number input field.
    type="tel" - Creates a telephone input field.
    type="submit" - Creates a submit button.
    type="reset" - Creates a reset button, used to clear the form.
<label> - Creates a label. It is used to describe the input field.
<button> - Creates a button.
<select> - Creates a select field. It is used to collect user input from a list of options.
<textarea> - Creates a textarea field. It is a multiline text input field.
<fieldset> - Creates a fieldset. It is used to group related form elements.
<legend> - Creates a legend. It is used to describe the fieldset.`
        },
        {
            "element": "div",
            "class": "panelPair",
            "children": [
                {
                    "element": "div",
                    "class": "leftPanel",
                    "text":
                        `<form>
                        <fieldset class="input-fieldset">
                            <legend>Details - This is a legend</legend>
                                    <label for="form-uname">Username</label>
                                    <input id="form-uname" class="nice-input" type="text" name="username" placeholder="username placeholder " >
                                <br/>
                                    <label for="form-pword">Password</label>
                                    <input id="form-pword" class="nice-input" type="password" name="password" placeholder="Password">
                                <br/>

                                    <label for="form-email">Email</label>
                                    <input id="form-email" class="nice-input" type="email" name="email" placeholder="Email">
                                <br/>

                                    <label for="form-number">Number</label>
                                    <input id="form-number"class="nice-input" type="number" name="age" placeholder="Age">
                                <br/>
                                    <label for="form-tel">Telephone</label>
                                    <input id="form-tel" class="nice-input" type="tel" name="tel" placeholder="Tel">
                                <br/>
                                <div class="button-group">
                                    <input type="reset" value="reset">
                                    <input type="submit" value="submit">
                                </div>
                        </fieldset>
                    </form>`
                },
                {
                    "element": "div",
                    "class": "rightPanel",
                    "innerHTML":
                        `<form>
                        <fieldset class="input-fieldset">
                            <legend>Details - This is a legend</legend>
                                    <label for="form-uname">Username</label>
                                    <input id="form-uname" class="nice-input" type="text" name="username" placeholder="username placeholder " >
                                <br/>
                                    <label for="form-pword">Password</label>
                                    <input id="form-pword" class="nice-input" type="password" name="password" placeholder="Password">
                                <br/>
                                    <label for="form-email">Email</label>
                                    <input id="form-email" class="nice-input" type="email" name="email" placeholder="Email">
                                <br/>
                                    <label for="form-number">Number</label>
                                    <input id="form-number"class="nice-input" type="number" name="age" placeholder="Age">
                                <br/>
                                    <label for="form-tel">Telephone</label>
                                    <input id="form-tel" class="nice-input" type="tel" name="tel" placeholder="Tel">
                                <br/>
                                <div class="button-group">
                                    <input type="reset" value="reset">
                                    <input type="submit" value="submit">
                                </div>
                        </fieldset>
                    </form>`
                }
            ]
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<input>
                type="checkbox" - Creates a checkbox input field.
                type="radio" - Creates a radio button input field.
            `
        },
        {
            "element": "h3",
            "text": `More form inputs`
        },
        {
            "element": "div",
            "class": "panelPair",
            "children": [
                {
                    "element": "div",
                    "class": "leftPanel",
                    "text":
                        `<fieldset>
                        <legend>More form inputs</legend>
                        <input id="form-checkbox" type="checkbox" name="checkbox">
                        <label for="form-checkbox">Checkbox: </label>
                        <br/>
                        <input id="form-radio1" type="radio" name="radio">
                        <label for="form-radio1">RadioButton 1: </label>
                        <br/>
                        <input id="form-radio2" type="radio" name="radio">
                        <label for="form-radio2">RadioButton 2: </label>
                        <br/>
                        <select name="select">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </fieldset>
                    `
                },
                {
                    "element": "div",
                    "class": "rightPanel",
                    "innerHTML":
                        `<fieldset>
                        <legend>More form inputs</legend>
                        <input id="form-checkbox" type="checkbox" name="checkbox">
                        <label for="form-checkbox">Checkbox: </label>
                        <br/>
                        <input id="form-radio1" type="radio" name="radio">    
                        <label for="form-radio1">RadioButton 1: </label>
                        <br/>
                        <input id="form-radio2" type="radio" name="radio">
                        <label for="form-radio2">RadioButton 2: </label>
                        <br/>
                        <select name="select">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </fieldset>
                    `
                }
            ]
        },
        {
            "element": "h3",
            "text": `Date and time inputs`
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<input>
                type="date" - date input field.
                type="time" - time input field.
                type="datetime-local" - Date + time input field.
                type="week" - week input field.
                type="month" - month input field.
            `
        },
        {
            "element": "div",
            "class": "panelPair",
            "children": [
                {
                    "element": "div",
                    "class": "leftPanel",
                    "text":
                        `<fieldset class="input-fieldset">
                        <legend>Date and Time inputs</legend>
                        <label for="datetime-local">Date and Time</label>
                        <input id="datetime-local" class="nice-input" type="datetime-local" name="datetime-local">
                        <br/>
                        <label for="date">Date</label>
                        <input id="date" class="nice-input" type="date" name="date">
                        <br/>
                        <label for="time">Time</label>
                        <input id="time" class="nice-input" type="time" name="time">
                        <br/>
                        <label for="week">Week</label>
                        <input id="week" class="nice-input" type="week" name="week">
                        <br/>
                        <label for="month">Month</label>
                        <input id="month" class="nice-input" type="month" name="month">
                    </fieldset>
                    `
                },
                {
                    "element": "div",
                    "class": "rightPanel",
                    "innerHTML":
                        `<fieldset class="input-fieldset">
                        <legend>Date and Time inputs</legend>
                        <label for="datetime-local">Date and Time</label>
                        <input id="datetime-local" class="nice-input" type="datetime-local" name="datetime-local">
                        <br/>
                        <label for="date">Date</label>
                        <input id="date" class="nice-input" type="date" name="date">
                        <br/>
                        <label for="time">Time</label>
                        <input id="time" class="nice-input" type="time" name="time">
                        <br/>
                        <label for="week">Week</label>
                        <input id="week" class="nice-input" type="week" name="week">
                        <br/>
                        <label for="month">Month</label>
                        <input id="month" class="nice-input" type="month" name="month">
                    </fieldset>
                    `
                }
            ]
        },
        {
            "element": "h3",
            "text": `Other form inputs`
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<input>
                type="color" - Creates a color picker input field.
                type="range" - Creates a range slider input field.
                type="search" - Creates a search input field.
                type="url" - Creates a url input field.
                type="file" - Uploads a file.
                type="image" - Use an image as a button.
            `
        },
        {
            "element": "div",
            "class": "panelPair",
            "children": [
                {
                    "element": "div",
                    "class": "leftPanel",
                    "text":
                        `<form>
                        <label for="form-range">Slider</label>
                        <input id="form-range" type="range" name="range" min="0" max="100" value="69">
                        <br/>
                        <label for="form-color">Choose a color: </label>
                        <input id="form-color" class="nice-input" type="color" name="color" placeholder="Color">
                        <br/>
                        <label for="form-search">Search Bar: </label><br/>
                        <input id="form-search" class="nice-input" type="search" name="search" placeholder="...">
                        <br/>
                        <label for="form-url">Enter a URL: </label>
                        <input id="form-url" class="nice-input" type="url" name="url" placeholder="https://example.com">
                        <br/>
                        <label for="form-file">Upload a file: </label>
                        <input id="form-file" type="file" name="file" placeholder="File">
                        <br/>
                        <textarea class="nice-input" name="textarea" placeholder="Textarea"></textarea>
                        <br/>       
                        <input type="image" src="blob.svg" height="75px" name="image" placeholder="Image">
                    </form>
                    `
                },
                {
                    "element": "div",
                    "class": "rightPanel",
                    "innerHTML":
                        `<form>
                        <label for="form-range">Slider</label>
                        <input id="form-range" type="range" name="range" min="0" max="100" value="69">
                        <br/>
                        <label for="form-color">Choose a color: </label>
                        <input id="form-color" class="nice-input" type="color" name="color" placeholder="Color">
                        <br/>
                        <label for="form-search">Search Bar: </label><br/>
                        <input id="form-search" class="nice-input" type="search" name="search" placeholder="...">
                        <br/>
                        <label for="form-url">Enter a URL: </label>
                        <input id="form-url" class="nice-input" type="url" name="url" placeholder="https://example.com">
                        <br/>
                        <label for="form-file">Upload a file: </label>
                        <input id="form-file" type="file" name="file" placeholder="File">
                        <br/>
                        <textarea class="nice-input" name="textarea" placeholder="Textarea"></textarea>
                        <br/>       
                        <input type="image" src=" " height="75px" name="image" placeholder="Image">
                    </form>
                    `
                }
            ]
        },
        {
            "element": "h2",
            "text": "Semantic HTML Tags"
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<address> - Contact information for a person or people, or for an organization.
<article> - Independent, self-contained content that can be independently used or shared. Can be nested within itself.
<aside> - Content that is indirectly related to the main content of the document, or as a sidebar
<header> - Introductory content or navigational aids.
<footer> - For author, copyright, contact info, sitemap, back-to-top links or related documents
<main> - Main content of your site. Should only have 1 unhidden <main>
<nav> - Navigation links.
<section> - Thematic grouping of content. | Divide your content, is a generic element, used if there isn't a more specific element to represent it`
        },
        {
            "element": "h3",
            "text": "Sectioning and Layout"
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                ``
        },
        {
            "element": "h3",
            "text": "Block Text Content"
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<blockquote> - Defines a section that is quoted from another source
<pre> - Defines preformatted text
<menu> - Semantic version of <ul>`
        },
        {
            "element": "h3",
            "text": "Inline Text Semantics"
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<abbr> - Defines an abbreviation or acronym
<cite> - Defines the title of a work
<code> - Defines a piece of computer code, displayed with monospace font
<q> - Defines a short inline quotation
<samp> - Defines quoted sample output from a computer program
<time datetime="2008-02-14 20:00"> - Denotes text as a date/time
<var> - Defines an inline variable
<wbr> - Defines a word break`
        },
        {
            "element": "h3",
            "text": "Less used inline tags"
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<bdi> - Isolates a part of text that might be formatted in a different direction
<bdo> - Overrides the current text direction
<data> - Links a given piece of content with data specified in the 'value' attribute, which can be used by search engines and scripts.
<dfn> - Defines a term that is to be rendered as a definition
<kbd> - Defines keyboard input. displayed with monospace font`
        },
        {
            "element": "h3",
            "text": "Image Content"
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<figure> - Used to group images and captioned text
<figcaption> - Caption for an image
<map> - Used to define client-side image maps
<area> - Allows geometric areas in an image map to be clickable`
        },
        {
            "element": "h3",
            "text": "Functional Elements"
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<map> - Used to define client-side image maps
<area> - Allows geometric areas in an image map to be clickable`
        },
        {
            "element": "h3",
            "text": "Grouping Content"
        },
        {
            "element": "p",
            "class": "explain",
            "text":
                `<div> - Generic container.
<span> - Inline container for text or elements.
`
        },
        {
            "element": "h3",
            "text": "Misc"
        },
        {
            "element": "p",
            "class": "explain",
            "text": `<math> - Container to display mathematical notation (MATHML) e.g. x^2 + y^2 = z^2.`
        },
        {
            "element": "div",
            "class": "panelPair",
            "children": [
                {
                    "element": "div",
                    "class": "leftPanel",
                    "text":
                        `<math>
                        <msub>
                            <mi>x</mi>
                            <mn>2</mn>
                        </msub>
                        <mo>+</mo>
                        <msub>
                            <mi>y</mi>
                            <mn>2</mn>
                        </msub>
                        <mo>=</mo>
                        <msub>
                            <mi>z</mi>
                            <mn>2</mn>
                        </msub>
                    </math>`
                },
                {
                    "element": "div",
                    "class": "rightPanel",
                    "innerHTML":
                        `<math>
                        <msub>
                            <mi>x</mi>
                            <mn>2</mn>
                        </msub>
                        <mo>+</mo>
                        <msub>
                            <mi>y</mi>
                            <mn>2</mn>
                        </msub>
                        <mo>=</mo>
                        <msub>
                            <mi>z</mi>
                            <mn>2</mn>
                        </msub>
                    </math>`
                }
            ]
        }

    ]
}




let convertedJSON = jsonToHTML(myJSON)
let mainElement = document.getElementById("main");
mainElement.append(convertedJSON);




/**
        _   _                     _     _ _
   ___ | |_| |__   ___ _ __   ___| |__ (_) |_
  / _ \| __| '_ \ / _ \ '__| / __| '_ \| | __|
 | (_) | |_| | | |  __/ |    \__ \ | | | | |_
  \___/ \__|_| |_|\___|_|    |___/_| |_|_|\__|

*/

// console.log("yes");
// let tem = document.getElementById("someTemplate");
// document.body.append(tem.content.cloneNode(true));
// document.body.append(tem.content.cloneNode(true));
// document.body.append(tem.content.cloneNode(true));
// document.body.append(tem.content.cloneNode(true));

// let codeComparisons = document.getElementsByClassName("codeComparison");
// for (let i = 0; i < codeComparisons.length; i++) {
//     let currentText = codeComparisons[i].textContent;
//     codeComparisons[i].textContent = "";


//     let forceText = currentText
//     forceText = forceText.replaceAll("<", "&lt;");
//     forceText = forceText.replaceAll(">", "&gt;");


//     let comparisonInput = document.createElement("pre")
//     comparisonInput.classList.add("leftPanel")
//     comparisonInput.classList.add("code-comparison-input")
//     comparisonInput.textContent = currentText;
//     codeComparisons[i].append(comparisonInput);

//     currentText = currentText.replaceAll("\n", "");

//     let comparisonOutput = document.createElement("div")
//     comparisonOutput.classList.add("rightPanel")
//     comparisonOutput.classList.add("code-comparison-output")
//     comparisonOutput.innerHTML = currentText;
//     codeComparisons[i].append(comparisonOutput);
// }

