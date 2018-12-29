import React, { Component } from 'react';
import { 
    Container,
    Row, 
    Col, 
    Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    Button } from 'reactstrap';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    render() {
        return <div>
            <Card>abc</Card>
        </div>;
    }
}