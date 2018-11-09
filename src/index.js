import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

class OnlineStore extends React.Component {
    constructor(props) {
        super();
        this.handlePick = this.handlePick.bind(this);
    }
    handlePick() {
        alert('clicked Add to Cart btn');
    }

    componentDidMount() {
        console.log('component did mount');
    }
    componentDidUpdate() {
        console.log('component did update');
    }

    render() {
        const title = 'Store Header Component';
        const subtitle = 'Some subtitle for good measure';
        const storeItems = ['item one', 'item two', 'item three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <ItemList storeItems={storeItems} />
                <ItemDetails />
                <Action handlePick={this.handlePick}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title} with Navigation (TEST)</h1>
                <h2>{this.props.subtitle} (Test)</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}>Add To Cart</button>
            </div>
        )
    }
}

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
    }
    clearItems() {
        console.log(this.props.storeItems)
        //alert('clicked on remove all items from cart btn');
    }
    render() {
        return (
            <div>
                {
                   this.props.storeItems.map((item) => {
                       return <Item key={item} itemText={item} />
                   }) 
                }
                <button onClick={this.clearItems}>Clear items from Test Basket</button>
            </div>
        )
    }
}

class ItemDetails extends React.Component {
    handleSeeComponent(e) {
        e.preventDefault();
        const item = e.target.elements.itemDetail.value.trim();

        if (item) {
            alert(item);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSeeComponent}>
                    <input type="text" name="itemDetail" />
                    <button>See details of an item</button>
                </form>
            </div>
        )
    }
}

class Item extends React.Component {
    render() {
        return (
            <div>
                {this.props.itemText}
            </div>
        )
    }
}

ReactDOM.render(<OnlineStore />, document.getElementById('app'));





