import React, { Fragment, useState, useEffect } from 'react'
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

const API_KEY = '6edb83f50b714fdfaca169704060c7ef'

function App() {

    // definir la categoría y noticias
    const [category, saveCategory] = useState('')
    const [news, saveNews] = useState([])

    useEffect(()=>{
        const getNewsAPI = async () => {
            const url = `http://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=${API_KEY}`

            const response = await fetch(url)
            const news = await response.json()

            saveNews(news.articles)
        }

        getNewsAPI()

    },[category])

  return (

      <Fragment>
        <Header
            title="Buscador de Noticias"
        />

        <div className="container white">
          <Form
              saveCategory={saveCategory}
          />

          <NewsList
              news={news}
          />
        </div>
      </Fragment>

  );
}

export default App;
