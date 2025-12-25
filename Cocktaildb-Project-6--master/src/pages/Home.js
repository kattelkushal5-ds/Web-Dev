import React from "react";
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"


export default function Home() {
  const [loading,setLoading] = React.useState(false)
  const [searchTerm,setSearchTerm] = React.useState('ab')
  const [cocktails,setCocktails] = React.useState([])

  React.useEffect(()=>{
    setLoading(true)
    async function getDrinks(){
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json()
        const {drinks} = data
        if(drinks){
          const newCocktails = drinks.map(drink=>{
            const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} =drink
            return {
              id: idDrink,
              nname:strDrink,
              image: strDrinkThumb,
              info:strAlcoholic,
              glass:strGlass
            }
          })
          setCocktails(newCocktails)
        }
        else{
          console.log('no drinks')
        }
      } catch (error){
        console.log(error)
      }
      setLoading(false)
    }
    getDrinks()
  },[searchTerm])



  return <main>
    <SearchForm setSearchTerm={setSearchTerm}/>
    <CocktailList loading={loading} cocktails={cocktails} />
  </main>
}
