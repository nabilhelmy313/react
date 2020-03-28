import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    

      

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
