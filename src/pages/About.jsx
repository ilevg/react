import React from 'react'
import ClassCounter from '../components/ClassCounter'
import Counter from '../components/Counter'

const About = function() {
    return (
        <div>
            <h1>
                This is React project
            </h1>
            <div style={{display: 'flex', textAlign: 'center', justifyContent: 'space-between'}}>
                <ClassCounter/>
                <Counter/>
            </div>
        </div>
        
    )
}

export default About