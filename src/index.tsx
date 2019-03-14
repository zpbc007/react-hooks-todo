import { render } from 'react-dom'
import React from 'react'
import { hot } from 'react-hot-loader/root'

const App = hot(() => <div>123</div>)

document.addEventListener('DOMContentLoaded', () => {
    render(<App />, document.getElementById('app'))
})
