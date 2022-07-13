import { Component } from 'react';

class PersonCard extends Component {
    render() {
        // const {firstname, lastname, age, haircolor};
        return (
            <div className='PersonCard' >
                <h1>
                    {this.props.firstname}, {this.props.lastname}
                </h1>
                <div>
                    Age:{this.props.age}
                </div>
                <div>
                    Hair Color:{this.props.hair}
                </div>
            </div>
        );
    }

}
export default PersonCard
