import React from 'react';

class Devs extends React.Component {
    render() {
        //console.log(this.props)
        const { name, age, skill } = this.props
        return (
            <div className='dev'>
                <div>Name: {name}</div>
                <div>age: {age}</div>
                <div>skill: {skill}</div>
            </div>
        )
    }
}

export default Devs;