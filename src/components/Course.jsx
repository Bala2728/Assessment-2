import React, { useState } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Col, Row, Card, Input, Button } from "antd";


function Course() {

  const [Addcourse, setAddcourse] = useState({

    CourseName:"",CourseDuration:"", Price:""
  })

  const onTxtChange = (e) => {
    e.preventDefault();
    setAddcourse({ ...Addcourse, CourseName: e.target.value })
    console.log(Addcourse,"leo");
  
  }
  const DuraitionChange = (e) => {
    setAddcourse({ ...Addcourse, CourseDuration: e.target.value })
  
  }
  const PriceChange = (e) => {
    
    setAddcourse({ ...Addcourse, Price: e.target.value })
 console.log(Addcourse.Price,"hhhhhh")
  }
  const onsubmit = () => {
    setAddcourse("")
  }
  console.log(Addcourse,"leo");



  return (
    <div className="Addcourse">
      <Card className="Card">
        <h1 className="h1">Course Details</h1>
        <Row>
          <Col span={24}>
            <label>Course Name<span className="red-star">:     
             
               </span></label>
               <Input name="CourseName" value={Addcourse.CourseName}  onChange={onTxtChange}></Input>
          </Col>
         
        </Row><br/>

        <Row>
          <Col span={24} >
            <label>Course Duration<span className="red-star">:</span></label>
            <Input name="CourseDuration" value={Addcourse.CourseDuration}  onChange={DuraitionChange}></Input>
          </Col>
         
        </Row><br/>

        <Row>
          <Col span={24}>
            <label>Price <span className="red-star">:</span></label>
            <Input  name="Price" value={Addcourse.Price}  onChange={PriceChange}></Input>
          </Col>
          
        </Row><br/>

        <Row>
          <Col>
          <Button  onClick={onsubmit} className='button'>Submit</Button>
          </Col>
        </Row>

      </Card>

    </div>

  )
}
export default Course;