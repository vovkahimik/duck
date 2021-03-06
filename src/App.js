import React from 'react';
import './App.css';
import Counter from "./Counter";
import Field from "./Field";

class App extends React.Component {
    componentDidMount() {
        setInterval(() => {
                let caseId = Math.floor(Math.random() * 9)
                this.setState({
                    items: this.state.items.map(item => {
                        if (item.id === caseId) {
                            return {
                                ...item,
                                visibility: true
                            }
                        } else {
                            return {
                                ...item,
                                visibility: false
                            }
                        }
                    })
                })
            }, 500
        )
    }

    state = {
        items: [
            {id: 0, visibility: false},
            {id: 1, visibility: true},
            {id: 2, visibility: false},
            {id: 3, visibility: false},
            {id: 4, visibility: false},
            {id: 5, visibility: false},
            {id: 6, visibility: false},
            {id: 7, visibility: false},
            {id: 8, visibility: false},
        ],
        count: 0
    }

    upCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render = () => {

        return (
            <div className="App">
                <Field
                    items={this.state.items}
                    upCount={this.upCount}
                />
                <Counter
                    currentCount={this.state.count}
                />
            </div>
        )
    }
}

export default App
