import React, { Component } from 'react';
class Product extends Component {
  render() {
     var  products = [
        {
            id:1,
            name:'iPhone 6 plus',
            price:'6.000.000 VNĐ',
            img:'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg'
        },
        {
            id:2,
            name:'iPhone 7 plus',
            price:'7.000.000 VNĐ',
            img:'http://www.111ideas.com/wp-content/uploads/2018/09/hd-image-of-sweet-girl-photo-500x312.jpg'
        },
        {
            id:3,
            name:'iPhone 8 plus',
            price:'8.000.000 VNĐ',
            img:'https://cdn.pixabay.com/photo/2017/08/07/15/15/people-2604831_960_720.jpg'
        },
        {
            id:4,
            name:'iPhone 9 plus',
            price:'9.000.000 VNĐ',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJSJQZCizfkC4Y-xX_gNAzndn7I5qHabMndpGGB-fei9RRP_9'
        },
        {
            id:5,
            name:'iPhone 10 plus',
            price:'10.000.000 VNĐ',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqm8snU_W5x3TOIUSGoXibuFh0qJcyWhVu8PAvhaVdsSfYLxV'
        },
    ];
    var reduct = products.map((product,index)=>{
    return  <div key={product.id} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <a href={product.img} className="thumbnail">
                    <img src={product.img} alt="product.name"/>
                </a>
                <p>Tên Sản Phẩm: {product.name}</p>
                <p>Giá: {product.price}</p>
            </div>

    });
    return (
      <div>
            {reduct}
      </div>
    );
  }
}
export default Product;
