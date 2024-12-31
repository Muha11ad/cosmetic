import { Header } from "@/widgets/Header";
import { useParams } from "next/navigation";
import { Container } from "@/shared/ui/grid";
import { ProductsList } from "./components/ProductsList";

export const Products = () => {
  const params = useParams();
  const name = params?.name;

  return (
    <Container>
      <Header />
      <h2>{name}</h2>
      <ProductsList categoryName={name as string} />
    </Container>
  );
};
