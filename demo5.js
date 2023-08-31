
class Football extends React.Component {
    shoot = () => {
        alert(this);
        /* The 'This' keyword refers to the component object*/ 
    }
    redner() {
        return (
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}
ReactDOM.render(<Football />, document.getElementById('root'));
