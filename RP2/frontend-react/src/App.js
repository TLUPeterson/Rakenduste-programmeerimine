import { BrowserRouter, Route, Switch} from "react-router-dom";
import './components/App.css'
import React, { useState } from 'react';

import Posts from "./pages/Posts";
import Main from "./pages/Main";
import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { Calendar, Layout } from 'antd';


function App() {
    const [user, setUser] = useState();
    const {Content} = Layout;


    return (
    <BrowserRouter>
        <Header user={user} />
        <Layout className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{  padding: 24, minHeight:"calc(100vh - 200px)" }}>
                <Content style={{ padding: '0 24px' }}>
                    <Switch>
                        <Route exact path="/" component={Calendar} />
                        <Route exact path="/post">
                            <Posts user={user}/>
                        </Route>
                        <Route exact path="/login"  >
                            <Login setUser={setUser} />
                        </Route>
                        <Route exact path="/register" component={Registration} />
                    </Switch>
                </Content>
            </div>
        </Layout>
    </BrowserRouter>
    );
}

export default App;