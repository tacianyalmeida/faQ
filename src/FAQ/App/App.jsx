
import React from 'react';
import './App.css'
import ContainerModal from '../ContainerModal/ContainerModal';

const App = ()=>{
const [modal, setModal] = React.useState(false)

    return(<>
    
        <section className="container">
       <ContainerModal
         textButton={"Botão1"}
         textModal={"Modal 1"}/>
       <ContainerModal
          textButton={"Botão2"}
          textModal={"Modal 2"}/>
       <ContainerModal
          textButton={"Botão3"}
          textModal={"Modal 3"}/>
       <ContainerModal
          textButton={"Botão4"}
          textModal={"Modal 4"}/>
        </section>
         
    </> )
}
export default App;