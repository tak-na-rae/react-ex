import React from 'react'
import useForm from './useForm';

const Product = () => {
  const initValue = {title:"", price:"", category:""};
  const [product, handler] = useForm(initValue);
  return (
    <>
      <div id="app">
      <hr/>
        <h1>제품입력폼</h1>
        <div className="control">
          <input type="text" placeholder="제품명"
            value={product.title} name="title" onChange={handler}/>
          <input type="number" placeholder="가격"
            value={product.price} name="price" onChange={handler}/>
          <select value={product.category} name="category" onChange={handler}>
            <option value="">제품 유형을 선택하세요</option>
            <option>음료</option>
            <option>과자</option>
            <option>제빵</option>
          </select>
        </div>
        <ul>
          <li>
            <b>제품명</b>&nbsp;&nbsp;
            <span className="control">{product.title}</span>
          </li>
          <li>
            <b>가격</b>&nbsp;&nbsp;
            <span className="control">{product.price}</span>
          </li>
          <li>
            <b>제품유형</b>&nbsp;&nbsp;
            <span className="control">{product.category}</span>
          </li>
        </ul>
        <hr/>
      </div>
    </>
  )
}

export default Product;
