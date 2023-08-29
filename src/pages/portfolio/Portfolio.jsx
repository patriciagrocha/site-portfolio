import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { ArticleStyled, MainPortStyled } from "./Portfolio.styled"



function Portfolio() {

  const [repos, setRepos] = useState([])
  useEffect(() => {
    const load = async () => {
      const response = await api.get("/users/patriciagrocha/repos")
      setRepos(response.data);
    }
    load()
  },[])
  return(
    <>
      <Header />
      <MainPortStyled>     
        <h2>Projetos</h2>
        <ul>
          {
            repos.length > 0 && repos.map(({id,name, description }) => {
              
                if(!name.includes("on20")){
                  return(
                    <li key={id} >
                    <ArticleStyled>
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </ArticleStyled>
                    </li>
                  )
                }
            })
          }
        </ul>
      </MainPortStyled>

      <Footer />
    </>
  )
}
export { Portfolio }