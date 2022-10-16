import DevPage from "../../layouts/DevPage.layout";
import { gsspDevPage } from "../../server/Dev/index.gssp";

export const getServerSideProps = gsspDevPage;
const Dev = (props: any) => <DevPage {...props} />;
export default Dev;
