import ProductCard from './components/ProductCard';
import { productList } from './data';


const App = () => {
  // ** Renders
  const renderProductList = productList.map(data =>  <ProductCard key={data.id} product={data}/>)
  return (
    <main className='container mx-auto'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-4 p-2'>
        {renderProductList}
      </div>
    </main>
  )
}

export default App