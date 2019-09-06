import React from "react";
import axios from "axios";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            image: ""
        };

        handleChange(e) {
            this.setState({ [e.target.name]: e.target.value });

        render() {
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        axios.post("/api/products", {
                            name: this.state.name,
                            price: this.state.price,
                            image: this.state.image
                        })
                            .then(response => {
                                this.props.changeSection();
                            })
                            .catch(error => {
                                this.setState({ error: "ERROR" });
                            });
                    }}
                >
                    <input
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="name"
                    />
                    <input
                        name="price"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="price"
                    />
                    <input
                        name="image"
                        onChange={this.handleChange}
                        value={this.state.image}
                        placeholder="image"
                    />
                    <button type="submit">Submit</button>
                    {this.state.error ? this.state.error : "Everything is good"}
                </form>
            </div>
        }
    }