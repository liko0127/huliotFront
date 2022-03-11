import { BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import {LandingPage,PdfProcessing} from "../pages";
import {Layout} from "../pages/layout/Layout";

function Routes(props) {
    return (

            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/"><PdfProcessing /></Route>
                        <Redirect to={{pathname: "/"}}/>
                    </Switch>
                </Layout>
            </BrowserRouter>

    );
}
export {  Routes };

