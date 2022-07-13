import { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Age: props.age
        };
    }
    render() {
        // const {firstname, lastname, age, haircolor};
        return (
            <div>
                <h1>
                    {this.props.firstname}, {this.props.lastname}
                </h1>
                <div>
                    Age:{this.state.Age}
                </div>
                <div>
                    Hair Color:{this.props.hair}
                </div>
                <button onClick={ () => { this.setState({Age:this.state.Age += 1 }) } }>Birthday Button for {this.props.firstname} {this.props.lastname} </button>
            </div>

            
        );
    }

}
export default PersonCard
