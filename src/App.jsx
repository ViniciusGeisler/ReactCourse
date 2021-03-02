import React from 'react';
import './App.css'
import First from './components/basic/First';
import Second from './components/basic/WithParams';
import Fragment from './components/basic/Fragment';
import RandomNumber from './components/basic/Random';
import Card from './components/layout/Card';
import Family from './components/basic/Family';
import FamilyMember from './components/basic/FamilyMember';
import StudentList from './components/repetition/StudentList';
import TableProduct from './components/repetition/TableProduct';
import ParOrImpar from './components/conditional/ParOrImpar';
import UserInfo from './components/conditional/UserInfo';

function App() {
  return (
    <div className="App">
      <h1>React fundamentals</h1>

      <div className="Cards">
        <Card title="#08 - Renderização Condicional" color="#982395">
          <ParOrImpar numero={20} />
        </Card>

        <Card title="#07 - Desafio repetição" color="#3A9AD9">
          <TableProduct />
        </Card>

        <Card title="#06 - Repetição" color="#FF4C65">
          <StudentList />
        </Card>

        <Card title="#05 - Componente com filhos" color="#00C8F8">
          <Family sobrenome="Geisler">
            <FamilyMember nome="Vini" />
            <FamilyMember nome="Gui" />
            <FamilyMember nome="Edu" />
          </Family>
        </Card>

        <Card title="#04 - Desafio aleatório" color="#FA6900">
          <RandomNumber min={1} max={60} />
        </Card>

        <Card title="#03 - Fragmento" color="#E94C6F">
          <Fragment />
        </Card>

        <Card title="#02 - Com parâmetro" color="#E8B71A">
          <Second
            title="Student Situation"
            student="Vinicius"
            nota={9.3}
          />
        </Card>

        <Card title="#01 - Primeiro componente" color="#588C73" >
          <First />
        </Card>

      </div>

    </div>
  )
}

export default App
