import Product from './Product';
import './App.css'; // Assuming you have some styles in App.css
import './index.css'; // Assuming you have some global styles in index.css
import MyComponent from './MyComponent'; // Importing MyComponent if needed 
function App() {
  // return (<MyComponent/>);
  return (
    <div>
      <MyComponent/>
      <h1>Product List</h1>
      <Product name="buds" Price = {1989} />
      <Product name="Samsung phone" Price ={21000} />
      <Product name="Mixer" Price = {3200} />
      <Product name="Pan" Price = {2400} />
      <Product name="Vivo phone" Price = {20000} />
    </div>

  );
}

export default App;
