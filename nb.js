function createLiAnchor(label, className, linkto) {
    let li = document.createElement('li')
    li.classList.add(className)
    let a = document.createElement('a')
    a.href = linkto
    a.onclick = () => {
        navToggle.checked = false
    }
    a.textContent = label
    li.appendChild(a)
    return li
}

function themeCheckbox() {
    let themeCheckbox = document.createElement("input")
    themeCheckbox.type = "checkbox"
    themeCheckbox.id = "theme-checkbox"

    themeCheckbox.addEventListener('change', () => {
        themeCheckbox.checked ?
        document.documentElement.style.setProperty('color-scheme', 'light') :
        document.documentElement.style.setProperty('color-scheme', 'dark')
    })
    //When parent page's color-scheme is set before loading iframe
    //if parent page is 'color-scheme: light or normal', iframe is transparent and 'allowTransparency' will work
    //if parent page is 'color-scheme: dark', iframe is opaque and 'allowTransparency' will not work
    //To allow the iframe to respond to parent theme, add this to the iframe DOM: <meta name="color-scheme" content="light dark">

    themeCheckbox.checked = false;
    themeCheckbox.dispatchEvent(new Event('change'))

    return themeCheckbox
}


function NavBar() {
    let nav = document.createElement('nav')
    nav.id = 'nav'

    nav.append(
        (function () {
            let navToggle = document.createElement('input')
            navToggle.type = 'checkbox'
            navToggle.id = 'nav-toggle'
            return navToggle
        })(),
        (function () {
            let navToggleLabel = document.createElement('label')
            navToggleLabel.htmlFor = 'nav-toggle'
            navToggleLabel.id = 'nav-toggle-label'
            navToggleLabel.textContent = ' More links'
            return navToggleLabel
        })(),
        (function () {
            let navUl = document.createElement('ul')
            navUl.id = 'nav-ul'
            navUl.append(
                createLiAnchor('Home', 'nav-li', 'index.html'),
                createLiAnchor('About', 'nav-li', 'about.html'),
                createLiAnchor('HTML', 'nav-li', 'learnhtml.html'),
                createLiAnchor('CSS', 'nav-li', 'learncss.html'),
                // createLiAnchor('Javascript', 'nav-li', 'learnjs.html'),
                (function () {
                    let themeToggler = document.createElement('div')
                    themeToggler.id = 'theme-toggler'
                    let toggleSlider = document.createElement('label')
                    toggleSlider.id = 'toggle-slider'
                    toggleSlider.htmlFor = 'theme-checkbox'
                    themeToggler.append(
                        themeCheckbox(),
                        toggleSlider
                    )
                    return themeToggler
                })()
            )
            return navUl
        })()
    )
    return nav

}


