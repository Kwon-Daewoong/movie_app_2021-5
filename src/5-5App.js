import { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }
    componentDidMount() {
        console.log('componentDidMoun')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate...goodbye')
    }
    state = {
        count: 0
    }
    add = () => {
        this.setState({ count: this.state.count + 1 })
    }
    minus = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                <h1>Rhe number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>

        )
    }
}
export default App