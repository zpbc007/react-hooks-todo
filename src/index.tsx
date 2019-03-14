import { render } from 'react-dom'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import Todo from '@views/todo/index'

const App = hot(Todo)

document.addEventListener('DOMContentLoaded', () => {
    render(<App />, document.getElementById('app'))
})
