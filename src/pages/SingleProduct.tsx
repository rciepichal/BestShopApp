import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../shared/hooks/hooks';

const SingleProduct = () => {
  const { id } = useParams();
  // const { singleProduct } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log(singleProduct);
  }, []);

  return <div>SingleProduct id:{id}</div>;
};

export default SingleProduct;
