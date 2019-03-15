import { render } from 'react-dom'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import Test from '@views/test_view'

const App = hot(Test)

document.addEventListener('DOMContentLoaded', () => {
    render(<App />, document.getElementById('app'))
})
