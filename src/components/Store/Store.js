import React, { Component } from 'react';
import Menu from "./Menu/Menu";
import Products from "./Products/Products";


class Store extends Component {
  url = 'http://localhost:3000/products';
  constructor(props) {
    super(props);
    this.state = {
        shopCount: 0,
        products: [],
        iPhone: [],
        HUAWEI: [],
        }
    };

  componentDidMount() {
    fetch(this.url)
      .then((response) => {
        if (response.status === 200)
          return response.json();
        else
          return Promise.reject(response.statusText);
      })
      .then(result => {
        const iPhone = result.filter((product) =>
          product.category === 'iPhone'
        );
        const HUAWEI = result.filter((product) =>
          product.category === 'HUAWEI'
        );
        this.setState({
          products: result,
          iPhone: iPhone,
          HUAWEI: HUAWEI,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleIncrement = () => {
    return this.setState({shopCount: this.state.shopCount + 1})
  };

  render() {
    return (
        <div className={'store'}>
          <Menu count={this.state.shopCount}/>
          <div>iPhone</div>
          {this.state.iPhone.map((product) => (
            <Products key={product.name} c
                      ategory={'iPhone'}
                      price={product.price}
                      name={product.name}
                      onclick={()=> this.handleIncrement()}
            />
          ))}
          <div>HUAWEI</div>
          {this.state.HUAWEI.map((product) => (
            <Products key={product.name}
                      category={'HUAWEI'}
                      price={product.price}
                      name={product.name}
                      onclick={() => this.handleIncrement()}
            />
          ))}
        </div>
    );
  }
}

export default Store;
