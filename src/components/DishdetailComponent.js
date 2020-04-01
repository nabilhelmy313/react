import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem,
  Button,Modal,ModalHeader,ModalBody,Row,Col,Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors, Field } from 'react-redux-form';  

    
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
  constructor(props) {
      super(props);
      this.state = {
          isModalOepn:false
      }
      this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
      this.setState({
          isModalOpen: !this.state.isModalOpen
        }); 
        
  }
  handleSubmit(values) {
      console.log('Current State is: ' + JSON.stringify(values));
      alert('Current State is: ' + JSON.stringify(values));
  }
  render() {
      return (
          <div>
          
          <Button outline className="btn-secondary" onClick={this.toggleModal}>
              <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
                  <ModalBody>
                  <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
                      <Row className="form-group">
                          <Label htmlFor="Rating" md={12}>Rating</Label>
                          <Col md={12}>
                              <Field model=".Rating" id="Rating" name="Rating"
                                  className="form-control"
                                  type="number" component="input"
                                  min={1} max={5}    
                              ></Field>
                              
                          </Col>
                      </Row>
                      <Row className="form-group">
                          <Label htmlFor="author" md={12}>Your Name</Label>
                          <Col md={12}>
                              <Control.text model=".author" id="author" name="author"
                                  placeholder="Your Name" 
                                  className="form-control"
                                  validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                  }}
                                      />
                              <Errors
                                  className="text-danger"
                                  model=".name"
                                  show="touched"
                                  messages={{
                                      required: 'Required',
                                      minLength: 'Must be greater than 2 characters',
                                      maxLength: 'Must be 15 characters or less'
                                  }}
                                  />
                          </Col>
                      </Row>
                          <Row className="form-group">
                              <Label htmlFor="lastname" md={12}>Comment</Label>
                              <Col md={12}>
                                  <Control.textarea model=".Comment" id="Comment" rows= {6} name="Comment"
                                      className="form-control"/>
                                  
                              </Col>
                          </Row>
                          <Row className="form-group">
                              <Col>
                                  <Button type="submit" color="primary">
                                  Submit
                                  </Button>
                              </Col>
                          </Row>
                      </LocalForm>
                  </ModalBody>
              </Modal>
          </div>

      );
  }
}
      

    function RenderDish({dish}) {
      return (
        <div className='col-12 col-md m-1'>
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }

    function RenderComments({comments}) {
      return comments === null ? (
        <div></div>
      ) : (
        <div className='col-12 col-md m-1'>
          <h4>Comments</h4>
          <ul className='list-unstyled'>
            { comments.map(comment =>
              <li className='p-3' key={comment.id}>
                <div className='row'>{comment.comment}</div>
                <div className='row mt-1'>-- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
              </li>
              )
            }
          </ul>

          <CommentForm/>  
        </div>
      );
    }

    const DishDetail=(props)=>{
     if(props.dish!=null)
      return( 
        <div className="container">
          <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
          </div>
        </div>
      );
    }
    
  

export default DishDetail;
