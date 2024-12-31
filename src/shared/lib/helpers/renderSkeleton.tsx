import { Col } from "@/shared/ui/grid";
import { Skeleton } from "@gravity-ui/uikit";

const skeletonStyle = {
  height: "150px",
};

export function renderSkeleton(quantity = 4) {
  for (let i = 0; i < quantity; i++) {
    return (
      <Col key={i} sm={6} md={6} lg={6} xl={6}>
        <Skeleton style={skeletonStyle} />
      </Col>
    );
  }
}
