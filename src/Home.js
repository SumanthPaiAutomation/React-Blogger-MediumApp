import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {Row, Col} from 'reactstrap'
import {
    Card, CardImg, CardBody,
    CardTitle,CardSubtitle,CardText
  } from 'reactstrap'

function Home(props){
        return (
            <div>
                <h1 className="text-light bg-dark p-3 mb-5">Recent Posts - 10</h1>
                 <Row>
                    {props.posts.reverse().slice(0,10).map(post=>{
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
                    // )<ListGroupItem action key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroupItem>
                    )
                    })}
                </Row> 
            </div>

        )
    }

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
