import React from 'react';
import HelloWorld from  '../Components/HelloWorld'


function Dashboard() {
    return (
        <div>
            <h3>This is the Dashboard</h3>
            <p>
               <HelloWorld  name="Deyvid" />
            </p>
        </div>
    );
}

export default Dashboard