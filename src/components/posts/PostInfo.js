import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Spinner } from 'reactstrap';


import { ListGroup, ListGroupItem } from 'reactstrap';
import {Row, Col } from 'reactstrap'

class PostInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: {},
            comments: [],
            isLoading: true
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
         axios.get(`/posts/${id}`)
            .then(response=>{
                const post = response.data
                    axios.get(`/users/${post.userId}`)
                    .then(response=>{
                    const user = response.data
                     this.setState({user})
                    })
                    axios.get(`/comments?postId=${post.id}`)
                     .then(response=>{
                        const comments = response.data
                        this.setState({comments,isLoading: false})
                    })
                })
            .catch(err=>{console.log(err)})
    }
    render(){
        return (
            <div>
                    <Row>
                    <Col md="3">
                    <img src="http://www.kripscooler.com/images/testi-3.png" width="200px"/>
        <h6 className="mt-3">Author Name - {this.state.isLoading? <Spinner color="primary" /> :<Link to={`/authors/${this.state.user.id}`}>{this.state.user.name}</Link>}</h6> 
                    </Col>
                    <Col md="9">
                    {this.props.post && (
                        <div>
                             <h1 className="mb-5">Title: {this.props.post.title}</h1>
                             <p className="font-weight-normal">Body: {this.props.post.body}</p>
                        </div>
                    )}
                    </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                        </Col>
                        <Col>
                        <h5 className="ml-1">Comments</h5>
                        {this.state.isLoading?(
                            <Spinner color="primary" />
                        ): (
                        <ListGroup>
                        {this.state.comments.map(comment=>{
                            return <ListGroupItem key={comment.id}>
                            <p>Name: {comment.name}</p>
                            <p>Email: {comment.email}</p>
                            <p>Body: {comment.body}</p>
                            </ListGroupItem>
                        })}
                        </ListGroup>
                        )}
                    </Col>    
                   
                    </Row>
                    
        </div>
        )
    }
}

const mapStateToProps = (state,props)=> {
    const id = props.match.params.id
    return (
        {
        post: state.posts.find(post=>String(post.id) === id)
        }   
    )
}

export default connect(mapStateToProps)(PostInfo)