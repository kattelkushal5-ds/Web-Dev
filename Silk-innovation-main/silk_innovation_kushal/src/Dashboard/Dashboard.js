import React from 'react'
import Header from './Header'
import SidebarRight from './SidebarRight'
import SidebarLeft from './SidebarLeft'
import Main from './Main'
import styled from "styled-components"

import { connect } from 'react-redux'
import { addUsers } from '../redux/actions'


const Dashboard = ({addUsers}) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(true)

    React.useEffect(()=>{
        addUsers()
       
    },[])
    var user = JSON.parse(localStorage.getItem('user'))
    const handleSidebar = () =>{
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <DashboardWrapper>
            <div className="header">
                <Header handleSidebar={handleSidebar}  user={user} />
            </div>
            <div className="centerContent">
                <div className="left">
                    <SidebarLeft sidebaropen ={sidebarOpen}/>
                </div>
                <div className="centerRight">
                    <div className="center">
                        <Main />
                    </div>
                    <div className="right">
                        <SidebarRight/>
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    )
}


//export default Dashboard
export default connect(null, {addUsers})(Dashboard)


const DashboardWrapper = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 0px;
    background: rgb(230,230,230);
    .centerContent{
        display: flex;
    }
    .centerRight{
        display:flex;

    }
    .left{
        margin-right: 1rem;
    }
    .middle{
       flex:  5;
        width:60%;
        display:flex;
    }
    .right{
        display:flex;
        flex: 1;
    }
    @media (max-width: 800px) {
        .centerRight{
            display: flex;
            flex-direction: column;
            flex: wrap;
        }
    }
`;