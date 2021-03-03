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
import DirectFather from './components/comunication/DirectFather';
import IndirectFather from './components/comunication/IndirectFather';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador'

function App() {
  return (
    <div className="App">
      <h1>React fundamentals</h1>

      <div className="Cards">
        <Card title="#12 - Contador" color="#424242">
          <Contador numeroInicial={20}/>
        </Card>

        <Card title="#11 - Componente controlado(input)" color="#E45F56">
          <Input />
        </Card>

        <Card title="#10 - Comunicação Indireta" color="#8bad39">
          <IndirectFather />
        </Card>

        <Card title="#09 - Comunicação direta" color="#59323c">
          <DirectFather />
        </Card>

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
