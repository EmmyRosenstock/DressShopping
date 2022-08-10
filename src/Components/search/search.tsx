import { useState } from 'react'
import Product from '../../Pages/Home/Products'
import { FiSearch } from "react-icons/fi";
import'./styles.css'
type SearchProps = {
    products: Product[]
    operation: 'contains' | 'grater' | 'less' | 'equals'
    field: keyof Product
}
const Search = ({products, operation, field}: SearchProps) => {

    const [listFiltrada, setListFiltrada] = useState <Product[]>([])
    const [priceFiltrada, setPriceFiltrada] = useState <Product[]>([])
    const [DataFiltrada, setDataFiltrada] = useState <Product[]>([])
 
  
    function search(text: string) {
        const found = products.filter(e => e.title.includes(text))
        setListFiltrada(found)
        console.log(found)
      }
      
       function searchPrice(text:string) {
       const foundPrice:Product[] = products.filter(e => e.price as any >= text)
        setPriceFiltrada(foundPrice)
        console.log(foundPrice)
      }
      function searchData(text:string) {
        const foundData:Product[] = products.filter(e => e.data as any >= text)
         setDataFiltrada(foundData)
         console.log(foundData)
       }
      
    return (
        <div className='search'>
            <form action='search'>
            <FiSearch size={20} className='iconsearch'/>
            <input type='input' onChange={e => search(e.target.value)} placeholder='Faça aqui a sua Pesquisa' className='searchInput'/>
            <span id='prices' />
         
            <input type='range'step='0.01' min='0' max='500' onChange={e => searchPrice(e.target.value)}   className='searchInput' id='prices'/> 
            <input type='date' onChange={e => searchData(e.target.value)}   className='searchInput' name='prices'/>
            </form>
             {listFiltrada.length === 0 ?
                <h1>
                    
                </h1>
                : <ul>{listFiltrada.map(p => (<li>{p.title}</li>))}</ul>
            }
             {priceFiltrada.length === 0 ?
                <h1>
                    
                </h1>
                : <ul>{priceFiltrada.map(p => (<li>{p.title}</li>))}</ul>
            }
            {DataFiltrada.length === 0 ?
                <h1>
                    
                </h1>
                : <ul>{DataFiltrada.map(p => (<li>{p.title}</li>))}</ul>
            }
          
        </div>
    )
}

export { Search }
