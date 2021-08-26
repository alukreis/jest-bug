/**
 * @jest-environment jsdom
 */
const React = require('react')
const { render } = require('@testing-library/react')

test('', () => {
    let Element = null
    jest.isolateModules(() => {
        Element = jest.requireActual('./element')
    })
    render(React.createElement(Element))
})
