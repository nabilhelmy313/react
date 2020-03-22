import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {
  
    render() {
    const dish = this.props.dish;

    function renderDish(dish) {
      return (
        <div className='col-12 col-md-5 m-1'>
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

    function renderComments(comments) {
      return comments === null ? (
        <div></div>
      ) : (
        <div className='col-12 col-md-5 m-1'>
          <h4>Comments</h4>
          <ul className='list-unstyled'>
            { comments.map(comment =>
              <li className='p-3' key={comment.id}>
                <div className='row'>{comment.comment}</div>
                <div className='row mt-1'>-- {comment.author}, {comment.date}</div>
              </li>
              )
            }
          </ul>
        </div>
      );
    }

    return (
      <div className='row'>
        { dish &&
          <>
            { renderDish(dish) }
            { renderComments(dish.comments) }
          </>
        }
      </div>
    );
  }
}

export default DishDetail;
