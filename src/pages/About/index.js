import React from 'react'
import {Card, Button} from 'react-bootstrap'

const About = () => {
    return (
        <div style={{width: "30rem", margin: "auto", marginTop: "10rem",color:"Black"}}>
            <Card className="text-center">
                <Card.Header>Backend Web Development</Card.Header>
                <Card.Body>
                    <Card.Title>Final Project </Card.Title>
                    <Card.Text>
                        Dibuat oleh Luntungan,Junior B.J
                        <br/>
                        S11810192 / 105021810050
                        <br/>
                        <br/>
                        "Website ini dibuat untuk memenuhi tuntutan mata kuliah Backend Web Developer"
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    )
}

export default About;