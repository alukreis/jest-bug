const React = require('react')

function Element() {
    const [st, setSt] = React.useState(0)

    return React.createElement('span')
}

module.exports = Element
