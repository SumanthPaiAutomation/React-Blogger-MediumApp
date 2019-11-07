import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import { Button } from 'reactstrap'

import {Row, Col} from 'reactstrap'
import {
    Card, CardImg, CardBody,
    CardTitle,CardSubtitle,CardText
  } from 'reactstrap'


class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible:10
        }
        this.handleButton = this.handleButton.bind(this)
    }
    handleButton(){
        this.setState((prevState)=>{
            return {
                visible:prevState.visible+10
            }
        })
    }

    render(){
        return (
            <div>
                <h1 className ="text-light bg-dark p-3 mb-5" >Posts - {this.props.posts.slice(0,this.state.visible).length}</h1>
                    <Row>
                    {this.props.posts.slice(0,this.state.visible).map(post =>{
                        return (
                        <Col md="3" className="mb-3" key={post.id}>
                        <Card>
                        <CardImg top width="100%" src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Title: {post.title}</CardTitle>
                        <CardSubtitle>Body: {post.body}</CardSubtitle>
                        <CardText><Link to={`posts/${post.id}`}>Read More</Link></CardText>
                        </CardBody>
                        </Card>
                        </Col>
                        )
                        // <ListGroupItem key={post.id} action><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroupItem>
                    })}
                </Row>
                
                {this.state.visible<this.props.posts.length && (
                     <Button color = "success" onClick = {this.handleButton}>Load More</Button>
                )
                    
                }
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts)