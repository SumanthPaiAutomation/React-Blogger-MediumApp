import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card, CardText,CardTitle} from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';

function AuthorInfo (props){
        return(
            <div>
                {props.author && (
                    <div>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle><h1>Author Name: {props.author.name}</h1></CardTitle>
                        <CardText><h3>Email: {props.author.email}</h3></CardText>
                        </Card>

                        <h1 className="mt-3">Posts Written</h1>
                        <ListGroup>
                            {props.posts.map(post=>{
                                return <ListGroupItem key={post.id} action><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroupItem>
                            })}
                        </ListGroup>
                    </div>
                        )}
                
            </div>
        )
    }

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return (
        {
            author: state.authors.find(author=>String(author.id) === id),
            posts: state.posts.filter(post=>String(post.userId) === id)

        }
    )
}

export default connect(mapStateToProps)(AuthorInfo)
