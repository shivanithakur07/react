import Temp from './temp.jsx';
function Primary() {
    const username = 'Shivani Thakur';
    return(
        <div>
            <h1>I am the line from primary component</h1>
            <Temp name={username}/>

        </div>
    );
}

export default Primary;