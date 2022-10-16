import HomePage from "../layouts/HomePage.layout";
import { gsspHomePage } from "../server/Home.gssp";

export const getServerSideProps = gsspHomePage;
const Home = (props: any) => <HomePage {...props} />;
export default Home;
