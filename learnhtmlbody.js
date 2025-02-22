



function HTMLMain(){
    let main = document.createElement('main')
    main.id = 'main'

    let maincontent = document.createElement('div')
    maincontent.id = 'main-content'
    main.append(maincontent)

    maincontent.append(
        H2("HTML Basics"),
        ExplainContainer("<div>", "Creates a generic container for a block of text"),
        ExplainContainer("<html>", "Root element of an HTML document."),
        ExplainContainer("<head>", "Contains Metadata + links for the document"),
        ExplainContainer("<title>", "tab name idk"),
        ExplainContainer("<meta>", "Meta data"),
        ExplainContainer("<body>", "The visible content"),
        ExplainContainer("", "This is the minimum HTML required to have a valid webpage"),
        (function(){
            let left = createLeftPanel(
`<div> - creates a generic container for a block of text
<html> - Root element of an HTML document.
<head> - Contains Metadata + links for the document
<title>-  tab name idk
<meta> - Meta data
<body> - The visible content`)
            let right = createLeftPanel(
`<html>
    <head>
        <title>Hi all</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>`)

            let panelContainer = document.createElement('div')
            panelContainer.classList.add('panelPair')
            panelContainer.append(right)

            return panelContainer
        })(),
        ExplainContainer("<h1> - <h6>", "Create a header. Use the corresponding 'h' tag for the significance of the header i.e. h1 being the most important, h6 the least."),
        HTMLDemoSimple(
`<h1>Hello World</h1>
<h2>Hello World</h2>
<h3>Hello World</h3>
<h4>Hello World</h4>
<h5>Hello World</h5>
<h6>Hello World</h6>`),

        ExplainContainer("<p>","Creates a generic container for a block of text"),
        HTMLDemoSimple("<p>Hello World</p>"),

        ExplainContainer("<br>","Creates a line break."),
        HTMLDemoSimple("ipsum<br/>lorem"),

        ExplainContainer("<hr>","Creates a horizontal line (horizontal rule)."),
        HTMLDemoSimple("Section1 <hr/> Section2"),

        ExplainContainer(
            "<!-- html comment -->","Creates a comment in the HTML DOM. Comments are not rendered in the browser."
        ),
        HTMLDemoSimple("<!--This is a comment-->"),
        
        
        H2("Lists"),
        ExplainContainer("<ul>","Creates an unordered list."),
        ExplainContainer("<li>","Creates a list item."),
        HTMLDemoSimple(
`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`),
        ExplainContainer("<ol>","Creates an ordered list."),
        HTMLDemoSimple(
`<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>`),
        ExplainContainer("<dl>","Creates a description list."),
        ExplainContainer("<dt>","Creates a description term."),
        ExplainContainer("<dd>","Creates a 'description description'."),
        HTMLDemoSimple(
`<dl>
    <dt>Item 1</dt>
    <dd>Description 1</dd>
    <dt>Item 2</dt>
    <dd>Description 2</dd>
</dl>`),

        ExplainContainer("<a>","Creates a hyperlink."),
        HTMLDemoSimple("<a href=\"https://www.google.com\">Google</a>"),

        ExplainContainer("<img>","Creates an image."),
        HTMLDemoSimple("<img src=\"yoda_doordonot.jpeg\">"),

        ExplainContainer("<audio>","Creates an audio player."),
        ExplainContainer("<source>","Specifies one or more media resources for an <audio>, <video> or <picture> element."),
        HTMLDemoSimple(
`<audio controls>
    <source src="eccentric-funny-music-117024.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>`),

        ExplainContainer("<video>","Creates a video player."),
        HTMLDemoSimple(
`<video controls>
    <source src="kitten_playing.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`),


        H2("Tables"),
        ExplainContainer("<table>","Creates a table. It is used to display data in a grid format with rows and columns."),
        ExplainContainer("<caption>","Creates a table caption. Used to describe the table content. Is placed at the top of the table."),
        ExplainContainer("<tr>","Creates a table row. Used to contain one or more <td> or <th> elements into a row."),
        ExplainContainer("<th>","Creates a table header cell. Defines cell as a header cell. It is used to represent header information and is typically bold and centered by default."),
        ExplainContainer("<td>","Creates a table data cell."),
        HTMLDemoSimple(
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
</table>`),


        H3("More on tables"),
        ExplainContainer("<col>","Defines a table column. Used to apply styles or attributes to a column."),
        ExplainContainer("<colgroup>"," Defines a table column group. Used to group one or more columns in a table, allowing you to apply styles or attributes to specific columns."),
        ExplainContainer("<thead>","Creates a table header. It is used to define the header section of a table, typically containing column names or titles."),
        ExplainContainer("<tbody>","Creates a table body. Main content of the table"),
        ExplainContainer("<tfoot>","Creates a table footer."),
        ExplainContainer("<colspan>","Specifies the number of columns a cell should span."),
        ExplainContainer("<rowspan>","Specifies the number of rows a cell should span."),
        //TODO: show invoice as example for a table using the above elements

        H2("Forms"),


        H3("Basic form elements"),
        ExplainContainer("<form>","Creates a form. It is used to collect user input from the user."),
        ExplainContainer("<input>",
`Creates an input field. It is used to collect user input from the user. Attributes can be used to specify the type of input field.
type=
    "text" - Creates a text input field.
    "password" - Creates a password input field.
    "email" - Creates an email input field.
    "number" - Creates a number input field.
    "tel" - Creates a telephone input field.
    "submit" - Creates a submit button.
    "reset" - Creates a reset button, used to clear the form.`
),
        ExplainContainer("<label>","Creates a label. It is used to describe the input field. Allows the element id specificed in the 'for' attribute to be focused from the label"),
        ExplainContainer("<button>","Creates a button."),
        
        ExplainContainer("<textarea>","Creates a textarea field. It is a multiline text input field."),
        ExplainContainer("<fieldset>","Creates a fieldset. It is used to group related form elements."),
        ExplainContainer("<legend>","Creates a legend. It is used to describe a fieldset."),
        HTMLDemoSimple(
`<form>
    <fieldset class="input-fieldset">
    <legend>Form Legend</legend>
    <label for="form-uname">Username </label>
    <input id="form-uname" class="nice-input" type="text" name="username" placeholder="username placeholder">
    <br/>
    <label for="form-pword">Password </label>
    <input id="form-pword" class="nice-input" type="password" name="password" placeholder="Password">
    <br/>
    <label for="form-email">Email </label>
    <input id="form-email" class="nice-input" type="email" name="email" placeholder="Email">
    <br/>
    <label for="form-number">Number </label>
    <input id="form-number"class="nice-input" type="number" name="age" placeholder="Age">
    <br/>
    <label for="form-tel">Telephone </label>
    <input id="form-tel" class="nice-input" type="tel" name="tel" placeholder="Tel">
    <br/>
    <span>Feedback:</span>
    <br/>
    <textarea class="nice-input" name="textarea" placeholder="Textarea"></textarea>
    <div class="button-group">
        <input type="reset" value="reset">
        <input type="submit" value="submit">
    </div>
    </fieldset>
</form>`),


        H3("Date and time inputs"),
        ExplainContainer("<input>",
`type=
    "date" - date input field.
    "time" - time input field.
    "datetime-local" - Date + time input field.
    "week" - week input field.
    "month" - month input field.`
        ),
        HTMLDemoSimple(
`<label for="datetime-local">Date and Time </label>
<input id="datetime-local" class="nice-input" type="datetime-local" name="datetime-local">
<br/>
<label for="date">Date </label>
<input id="date" class="nice-input" type="date" name="date">
<br/>
<label for="time">Time </label>
<input id="time" class="nice-input" type="time" name="time">
<br/>
<label for="week">Week </label>
<input id="week" class="nice-input" type="week" name="week">
<br/>
<label for="month">Month </label>
<input id="month" class="nice-input" type="month" name="month">`
        ),


        H3("More input types"),
        ExplainContainer("<input>",
`type=
    "checkbox" - Creates a checkbox input field.
    "radio" - Creates a radio button input field.`
        ),
        HTMLDemoSimple(
`<label for="form-checkbox">Checkbox:</label>
<input id="form-checkbox" type="checkbox" name="checkbox">
<br/>
<label for="form-radio1">RadioButton 1:</label>
<input id="form-radio1" type="radio" name="radio">
<br/>
<label for="form-radio2">RadioButton 2:</label>
<input id="form-radio2" type="radio" name="radio">`
        ),

        ExplainContainer("<input>",
`type=
    "color" - Creates a color picker input field.
    "range" - Creates a range slider input field.
    "search" - Creates a search input field.
    "url" - Creates a url input field.
    "file" - Uploads a file.
    "image" - Use an image as a button.`
        ),
        HTMLDemoSimple(
`<form>
    <label for="form-range">Slider</label>
    <input id="form-range" type="range" name="range" min="0" max="100" value="69"/>
    <br/>
    <label for="form-color">Choose a color: </label>
    <input id="form-color" class="nice-input" type="color" name="color" placeholder="Color"/>
    <br/>
    <label for="form-search">Search Bar: </label>
    <input id="form-search" class="nice-input" type="search" name="search" placeholder="..."/> 
    <br/>
    <label for="form-url">Enter a URL: </label>
    <input id="form-url" class="nice-input" type="url" name="url" placeholder="https://example.com"/>
    <br/>
    <label for="form-file">Upload a file:</label>
    <input id="form-file" type="file" name="file" placeholder="File"/>
    <br/>
    <input type="image" src="blob.svg" height="75px" name="image" placeholder="Image"/>
</form>`),

        
        H3("More form elements"),
        
        ExplainContainer("<select>","Creates a select field. It is used to collect user input from a list of options."),
        ExplainContainer("<option>","Used within a <select> element to provide predefined values"),
        HTMLDemoSimple(
`<select name="select">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
</select>`),

        ExplainContainer("<datalist>","[Limited availability] Creates a datalist. It is used to provide a list of predefined options for an input element."),
        HTMLDemoSimple(
`<label for="ice-cream-choice">Choose a flavor: </label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />
<datalist id="ice-cream-flavors">
  <option value="Chocolate">from the County</option>
  <option value="Coconut">from the Coast</option>
  <option value="Mint">from the Mountains</option>
  <option value="Strawberry">from the Streets</option>
  <option value="Vanilla">from the Village</option>
</datalist>`),
        

        H2("Semantic HTML Tags"),
        ExplainContainer("","Semantic elements are used to..."),


        H3("Grouping content"),
        ExplainContainer("<div>", "A generic container"),
        ExplainContainer("<span>","Inline container for text"),
        

        H3("Sectioning and Layout"),
        ExplainContainer("<address>", "Contact information for a person or people, or for an organization."),
        ExplainContainer("<article>","Independent, self-contained content that can be independently used or shared. Can be nested within itself."),
        ExplainContainer("<aside>","Content that is indirectly related to the main content of the document, or as a sidebar"),
        ExplainContainer("<header>", "Introductory content or navigational aids."),
        ExplainContainer("<footer>","For author, copyright, contact info, sitemap, back-to-top links or related documents"),
        ExplainContainer("<main>", "Main content of your site. Should only have 1 unhidden <main>"),
        ExplainContainer("<nav>","Navigation links."),
        ExplainContainer("<section>","Thematic grouping of content. | Divide your content, is a generic element, used if there isn't a more specific element to represent it"),
        

        H3("Blocks of text"),
//<blockquote> - Defines a section that is quoted from another source
//<pre> - Defines preformatted text
//<menu> - Semantic version of <ul>
        ExplainContainer("<blockquote>","Defines a section that is quoted from another source"),
        ExplainContainer("<pre>","Defines preformatted text"),
        ExplainContainer("<menu>","Semantic version of <ul>"),


        H3("Inline text semantics"),
//         <abbr> - Defines an abbreviation or acronym
// <cite> - Defines the title of a work
// <code> - Defines a piece of computer code, displayed with monospace font
// <q> - Defines a short inline quotation
// <samp> - Defines quoted sample output from a computer program
// <time datetime="2008-02-14 20:00"> - Denotes text as a date/time
// <var> - Defines an inline variable
// <wbr> - Defines a word break
        ExplainContainer("<abbr>","Defines an abbreviation or acronym"),
        ExplainContainer("<cite>","Defines the title of a work"),
        ExplainContainer("<code>","Defines a piece of computer code, displayed with monospace font"),
        ExplainContainer("<q>","Defines a short inline quotation"),
        ExplainContainer("<samp>","Defines quoted sample output from a computer program"),
        ExplainContainer("<time  datetime='2008-02-14 20:00'>",""),
        ExplainContainer("<var>","Defines an inline variable"),
        ExplainContainer("<wbr>","Defines a word break"),


        H3("Less used inline tags"),
//         <bdi> - Isolates a part of text that might be formatted in a different direction
// <bdo> - Overrides the current text direction
// <data> - Links a given piece of content with data specified in the 'value' attribute, which can be used by search engines and scripts.
// <dfn> - Defines a term that is to be rendered as a definition
// <kbd> - Defines keyboard input. displayed with monospace font
        ExplainContainer("<bdi>","Isolates a part of text that might be formatted in a different direction"),
        ExplainContainer("<bdo>","Overrides the current text direction"),
        ExplainContainer("<data>","Links a given piece of content with data specified in the 'value' attribute, which can be used by search engines and scripts."),
        ExplainContainer("<dfn>","Defines a term that is to be rendered as a definition"),
        ExplainContainer("<kbd>","Defines keyboard input. Displayed with monospace font"),


        H3("Image content"),
//         <figure> - Used to group images and captioned text
// <figcaption> - Caption for an image
        ExplainContainer("<figure>","Used to group images and captioned text"),
        ExplainContainer("<figcaption>","Caption for an image"),


        H3("Functional Elements"),
//         <map> - Used to define client-side image maps
// <area> - Allows geometric areas in an image map to be clickable
        ExplainContainer("<map>","Used to define client-side image maps"),
        ExplainContainer("<area>","Allows geometric areas in an image map to be clickable"),
        

        H3("Misc"),
        ExplainContainer("<math>","Container to display mathematical notation (MATHML) e.g. x² + y² = z²."),
        HTMLDemoSimple(
`<math>
    <msup>
        <mi>x</mi>
        <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
        <mi>y</mi>
        <mn>2</mn>
    </msup>
    <mo>=</mo>
    <msub>
        <mi>H</mi>
        <mn>2</mn>
    </msub>
    <mi>O</mi>
</math>`
        )
    )

    return main
}

function H2(text){
    let h2 = document.createElement('h2')
    h2.textContent = text
    return h2
}
function H3(text){
    let h3 = document.createElement('h3')
    h3.textContent = text
    return h3
}

function ExplainContainer(text1, text2){
    let div = document.createElement('div')
    div.classList.add('explainContainer')

    let p = document.createElement('p')
    p.classList.add('explain')
    p.append(
        (function(){
            let code = document.createElement('code')
            code.textContent = text1
            return code
        })(),
        document.createTextNode(" - " + text2)
    )

    div.append(p)
    return div
}

function PanelHeading(text){
    let h = document.createElement('h3')
    h.classList.add('panelHeading')
    h.textContent = text
    return h
}

function createLeftPanel(text){
    let leftPanel = document.createElement('div')
    leftPanel.classList.add('leftPanel')
    leftPanel.append(
        PanelHeading('HTML'),
        (function(){
            let p = document.createElement('p')
            p.classList.add('html-input')
            p.textContent = text
            return p
        })()
    )
    return leftPanel
}

function createRightPanel(text){
    let rightPanel = document.createElement('div')
    rightPanel.classList.add('rightPanel')
    rightPanel.append(
        PanelHeading('Result'),
        (function(){
            let div = document.createElement('div')
            div.classList.add('html-output')
            //replace \n and \r, and />...< with /><
            div.innerHTML = truncateHTML(text);
            return div
        })()
    )
    return rightPanel
}

function HTMLDemoSimple(textContent){
    let leftPanel = createLeftPanel(textContent)
    let rightPanel = createRightPanel(textContent)

    let panelContainer = document.createElement('div')
    panelContainer.classList.add('panelPair')
    panelContainer.append(leftPanel, rightPanel)

    return panelContainer
}

function truncateHTML(text){
    return text.replace(/[\n\r]/g, '').replace(/>\s+</g,'><').trim();
}