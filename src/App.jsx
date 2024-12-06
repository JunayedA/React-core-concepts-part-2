import './App.css'
// import Tokyo from './Tokyo'
// import Kyoto from './Kyoto'
// import Student from './Student'
// import ChileSingers from './ChileSingers'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


// previous day recap
// function App() {
//   const [count, setCount] = useState(0);
//   const students= ['junayed', 'ahmed', 'rahim','karim', 'nahid', 'rofuk', 'momin','rajbir', 'antor', 'ansa', 'evan','sami'];
//   const singers =[
//     {name:'Cris MJ', age: 23},
//     {name: 'Marchinake', age: 22},
//     {name: 'Yan Block', age: 32},
//     {name: 'Dei V', age: 33},
//     {name: 'Floyymenor', age:21},
//     {name: 'Chiko Alfa', age:20}
//   ]

//   return (
//     <>
//     {
//       singers.map(singer => <ChileSingers props={singer}></ChileSingers>)
//     }
//     {
//       students.map(student => <Student name={student}></Student>)
//     }
//       <h1>Vite + React</h1>
//       <Tokyo culture="a blend of tradition and modernity, with ancient temples and futuristic technology, traditional arts, and pop culture" people={9.733} ></Tokyo>
//       <Kyoto city="big"></Kyoto>
//     </>
//   )
// }

// react core concepts part 2
 function App(){
  function handleClick(){
    alert(" Click me btn clicked")
  }
  const handleClick2 = () =>{
    alert('click me 2 btn is now clicked')
  }
  const handleClick3 = num => {
    alert(num + 5)
  }
  return(
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
    <h3>React core concepts part 2</h3>
    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClick2}>Click me 2</button>
    <button onClick={() =>handleClick3(5)}>Click me 3</button>
    </>
  )
 }

export default App
