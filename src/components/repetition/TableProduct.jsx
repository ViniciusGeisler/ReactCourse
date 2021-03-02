import React from 'react';
import Products from '../../data/product';
import './TableProduct.css';

function TableProduct(props) {

  function getProducts() {
    return Products.map((product, i) => {
      return (
        <tr key={product.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>R$ {product.price.toFixed(2)}</td>
        </tr>
      )
    })
  }

  return (
    <div className="TableProduct">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
            {getProducts()}
        </tbody>
      </table>
    </div>
  )
}

export default TableProduct
