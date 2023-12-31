import { Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {data} from '../helpers/data'
import MapsCard from './MapsCard';
import { useState } from 'react';



const CardContainer = () => {
    const[search,setSearch] = useState("")
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    return(
    <>
        <Form.Control
            placeholder='Search a map'
            className='w-50 m-auto'
            onChange={handleChange}
        />
        <Container className='rounded-4 my-4 p-3 card-container'>
            <Row className='justify-content-center g-3'>
                {data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim())).map((maps, i) => (
                    <Col xl={3} lg={4} md={6} key={i}>
                        <MapsCard {...maps}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
)}

export default CardContainer