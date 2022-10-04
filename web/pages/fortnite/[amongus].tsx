import { NextPage } from "next";
import { useRouter } from "next/router";

const Amongus: NextPage = () => {
  const router = useRouter();
  const { amongus } = router.query;

  return <h1>{amongus}</h1>;
};

export default Amongus;
