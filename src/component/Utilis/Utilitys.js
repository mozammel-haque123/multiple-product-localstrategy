import toast from 'react-hot-toast';

const storegHendale = ()=>{
 const storeg = localStorage.getItem('product');
 if(storeg){
    const storegProduct = JSON.parse(storeg);
    return storegProduct;
 }else{
    return[];
 }
}

const addProduct = (id) => {
  const addStoregHandle = storegHendale();
  const alreadyExists = addStoregHandle.some(item => item.product_id === id.product_id);

  if (alreadyExists) {
    toast.error("This didn'list work.")
  } else {
    addStoregHandle.push(id);
    const storedListStr = JSON.stringify(addStoregHandle);
    localStorage.setItem('product', storedListStr);
    toast.success('This book is added to your read list.')
  }
};



const localStoregDelet = (id) => {
  const storedProducts = storegHendale();
  const filtered = storedProducts.filter((item) => item.product_id !== id);
  localStorage.setItem('product', JSON.stringify(filtered));
  toast.success('Product deleted successfully!')
};

const removeAlldata = ()=>{
localStorage.removeItem('product')
}


// // carts storage handle
// const cartsStoregHandle = ()=>{
//  const storeg = localStorage.getItem('carts');
//  if(storeg){
//     const storegProduct = JSON.parse(storeg);
//     return storegProduct;
//  }else{
//     return[];
//  }
// }

// // wishlist storage handle
// const wishlistStoregHandle = ()=>{
//  const storeg = localStorage.getItem('wishlist');
//  if(storeg){
//     const storegProduct = JSON.parse(storeg);
//     return storegProduct;
//  }else{
//     return[];
//  }
// }


export{addProduct, storegHendale ,localStoregDelet,removeAlldata}