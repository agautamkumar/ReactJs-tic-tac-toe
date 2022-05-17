import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Icon from './components/Icon'
import { Card, CardBody, Container, Col, Row, Button } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
  const notify = (message) => toast(message);
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")
  const [itemsArray, setItemsArray] = useState(Array(9).fill("empty"))


  const reloadGame = () => {
    //

    setIsCross(false)
    setWinMessage("")
    setItemsArray(itemsArray.fill("empty",0,9))
    
 
  }

  const checkIsWinner = () =>{
    //
  }
  
  const changeItem = itemNumber =>{
    //
    if(itemsArray[itemNumber]!="empty"){
      notify("already Filled")
    }else{
      if(isCross){
        itemsArray[itemNumber] = "circle"
      }else{
        itemsArray[itemNumber] = "cross"
      }
      setIsCross(!isCross)
    }
  }


  return (
    <Container className="p-5">
      <ToastContainer/>
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemsArray.map((item,i)=>{
               return <Card color="warning" onClick={()=>changeItem(i)}>
                  <CardBody   className="box">
                    <Icon name={item}/>
                  </CardBody>
               </Card>
            })}
            <Button onClick={reloadGame}>Reload Game</Button>
          </div>
          
        </Col>
      </Row>

    </Container>
    // <div>
    //   <Icon />
    //   <Button onClick={()=>notify("hello")}>Notify me</Button>
    //   <ToastContainer />
    //   <CardBody/>

    // </div>
  );
}

export default App;
