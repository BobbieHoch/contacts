import { Button, Card, CardText, CardTitle, CardBody, ButtonGroup } from "reactstrap";
import { Contact } from "../interfaces/Contact"; 

interface ContactCardProps{
    contact: Contact,
}

function ContactCard(props:ContactCardProps){
    return(
    <Card id="ContactCard">
        <CardBody>
            <CardTitle tag="h1">Contact Card</CardTitle>
            <CardText>
                <p>First Name: {props.contact.firstName}</p>
                <p>Last Name: {props.contact.lastName}</p>
                <p>Phone Number: {props.contact.mobile}</p>
                <ButtonGroup>
                    <Button color="primary">Edit</Button>
                    <Button color="danger">Delete</Button>
                </ButtonGroup>
            </CardText>
        </CardBody>
    </Card>)
}

export default ContactCard;