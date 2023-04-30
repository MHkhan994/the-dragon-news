import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {

    const { title, details, _id, image_url, author, total_view, rating } = news
    console.log(title);

    return (
        <div>
            <Card className="mb-4">
                <Card.Header>
                    <div className='d-flex gap-4 align-items-center'>
                        <Image style={{ height: '40px' }} src={author.img} roundedCircle></Image>
                        <div className='flex-grow-1'>
                            <p className='fw-bold fs-6 m-0'>{author.name}</p>
                            <p className='m-0 text-secondary'>{moment(author.published_date).format('YYYY-MM-D')}</p>
                        </div>
                        <div>
                            <p className='d-inline fs-5 text-secondary pe-3'><FaRegBookmark /></p>
                            <p className='d-inline fs-5 text-secondary'><FaShareAlt /></p>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text className='pt-3'>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>read more</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1 d-flex align-items-center'>
                        <Rating className='mb-1 pe-2'
                            readonly
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar />}
                        ></Rating>
                        {rating.number}
                    </div>
                    <div>
                        <div><FaEye className='me-2 mb-1' />{total_view}</div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;