import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Segment, Card } from 'semantic-ui-react';
import tenantsInstance from '../../ethereum/tenants';


class showTenant extends Component{
    
    
    static async getInitialProps(props){
        const tenantId= props.query.tenantId;
        const tenantDetails = await tenantsInstance.methods.getTenant(props.query.tenantId).call();
        
        return {
            tenantId: tenantDetails[0],
            tenantName: tenantDetails[1],
            flanNum: tenantDetails[2],
            phoneNum: tenantDetails[3],
            advanceAmt: tenantDetails[4],
            rent: tenantDetails[5],
            lastPaidMonth: tenantDetails[6],
            lastPaidYear: tenantDetails[7]
        }
            ;
    }


    renderTenantDetails(){
        const {
            tenantId,
            tenantName,
            flanNum,
            phoneNum,
            advanceAmt,
            rent,
            lastPaidMonth,
            lastPaidYear
        } = this.props;
       

       const CardItems =  (
            <Card.Content>
            <Card.Header>TenantID: {tenantId}</Card.Header>
            <Card.Meta>
                <span >Name    : {tenantName}</span>
            </Card.Meta>
            <Card.Meta>
                <span >Flat-Num: {flanNum}</span>
            </Card.Meta>
            <Card.Meta>
                <span >Contact :  {phoneNum}</span>
            </ Card.Meta>
            <Card.Meta>
                <span >Advance :  {advanceAmt}</span>
            </ Card.Meta>
            <Card.Meta>
                <span >Rent    :     {rent}</span>
            </Card.Meta>
            <Card.Meta>
                <span >Last Paid Date : {lastPaidMonth}/{lastPaidYear}</span>
            </Card.Meta>
            <Card.Description>Details of selected Tenant.</Card.Description>
            </Card.Content>
       
        )


        return(<Card> {CardItems} </Card>)
    }

    render(){
        return (
            <Layout>
            <h1> Tenant Details </h1>
            <div>{this.renderTenantDetails()}</div>
            </ Layout>
        );
    }
}

export default showTenant;