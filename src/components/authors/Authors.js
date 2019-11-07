import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap'

import {Row, Col } from 'reactstrap'

function Authors(props){

        return(
            <div>
                <h1 className ="text-light bg-dark p-3 mb-5">Authors - {props.authors.length}</h1>
                <Row>
                {props.authors.map(author=>{
                    return (
                        <Col md="3" className="mb-3" key={author.id}>
                        <Card>
                        <CardImg top width="100%" src="https://b.sccpre.cat/mypng/small/412-4125461_cartoon-person-without-face.png" height="218px" width="80px" alt="Card image cap" />
                        <CardBody>
                        <CardTitle><Link to={`authors/${author.id}`}>{author.name}</Link></CardTitle>
                        </CardBody>
                        </Card>
                        </Col>
                    )
                })}
                </Row>
            </div>
        )
    }

const mapStateToProps = (state) => {
    return {
        authors: state.authors
    }
}

export default connect(mapStateToProps)(Authors)