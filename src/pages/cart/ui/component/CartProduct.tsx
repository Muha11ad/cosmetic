import React, { FC } from "react";
import { Card } from "@/shared/ui/Card";
import { Image } from "@/shared/ui/Image";
import { Col, Row } from "@/shared/ui/grid";
import { ProductPrice } from "@/shared/ui/Text";
import { UpdateQuantity } from "./UpdateQuantity";

export interface ICartProductProps {
  id: string;
  price: number;
  quantity: number;
  imageUrl: string;
  name: string;
}

export const CartProduct: FC<ICartProductProps> = (props) => {
  return (
    <Card>
      <Row>
        <Col>
          <Image src={props.imageUrl} alt={props.name} />
        </Col>
        <Col>
          <h3>{props.name}</h3>
          <ProductPrice>{props.price}</ProductPrice>
          <UpdateQuantity count={props.quantity} product={props} />
        </Col>
      </Row>
    </Card>
  );
};
