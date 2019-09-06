import React from "react";
import axios from "axios";

default class Dashboard extends Component { }
constructor(props) {
    super(props);
    this.state = {
        products: []
    };
    this.updateProducts = this.updateProducts.bind(this);
}

updateProducts(products) {
    this.setState({ products: products });
}
componentDidMount() {
    axios
        .get("/api/products")
        .then(response => {
            this.setState({ products: response.data });
        })
        .catch(err => {
            console.log(err);
        });

}
render() {
    return (
        <div>
            {this.state.products.map((products, index) => (
                <Form
                    updateProduct={this.updateProduct}
                    name={product.name}
                    image={product.image}
                    index={index}
                />
            ))}
        </div>
    );
}
}
