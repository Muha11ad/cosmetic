import { useRouter } from "next/router";
import { Header } from "@/widgets/Header";
import { Container } from "@/shared/ui/grid";
import { ProductsList } from "./components/ProductsList";

export const Product = () => {
  const router = useRouter();
  const categoryName = router.query.name;

  return (
    <Container>
      <Header />
      <h2>{categoryName}</h2>
      <ProductsList />
    </Container>
  );
};
