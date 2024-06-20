import React from "react";
import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <h1>Counter: {count}</h1>
            <Row className="mt-3">
                <Col className="text-center">
                    <Button onClick={increment} variant="primary" className="m-2">Increment</Button>
                    <Button onClick={reset} variant="secondary" className="m-2">Reset</Button>
                    <Button onClick={decrement} variant="danger" className="m-2">Decrement</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Counter;
