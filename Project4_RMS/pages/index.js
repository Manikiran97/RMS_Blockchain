import React, { Component } from 'react';
import Layout from '../components/Layout';
import tenantsInstance from '../ethereum/tenants';
import { Card,Button,Label,Header,Dimmer, Icon } from 'semantic-ui-react';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3'


class RentIndex extends Component{

    static async getInitialProps(){
        const tenantIdList = await tenantsInstance.methods.getTenantsIds().call();
        let tenantIds =[];
        tenantIdList.map(tenanatId =>{
            if(tenanatId>0){
                tenantIds.push(tenanatId);
            }
            return(<div></div>);
        });
        
        return {tenantIds};
    }


    state = {
        errorMessage: '',
        loading: false
    };

    renderTenantIds(){
        const items = this.props.tenantIds.map(tenantId => {
            const localTenantId = tenantId;
            return{    
                        
            header:(
                <a>
                <Link route={`/tenants/${tenantId}`}>
                    <Label color='blue' >
                         TenantID :{tenantId}
                    </Label>
                </ Link>
                </a>
                     ),
                extra : (
                        <div>
                            <Link route={`/edittenant/${tenantId}`}>
                            <Button basic color='green'>
                            Edit Tenant
                            </Button>
                            </Link>
                            <Button basic color='red' 
                                onClick={
                                (event,localTenantId) => this.deleteTenant(event,tenantId)}>
                            Delete Tenant
                            </Button>
                        </div> 
                )
            };
        });

        return (<Card.Group items={items} />);
    }

        deleteTenant = async (event,tenantId) => {
            event.preventDefault();
            this.setState({loading: true});
            const accounts = await web3.eth.getAccounts();
           
            const tenantDetails = await tenantsInstance.methods.getTenant(tenantId).call();
            const flatNum = tenantDetails[2];
            try{
            //const result=true;
             const result = await tenantsInstance.methods.deleteTenant(tenantId,flatNum)
                            .send({from: accounts[0],gas: 500000 });
            }catch(err){
                console.log(err.message);
            }
            this.setState({loading: false});
            Router.pushRoute('/');  
    }

    render(){
        return(
        <Layout>
        <h3>Tenants</ h3>
        <Dimmer active={this.state.loading} onClickOutside={this.handleClose} page>
          <Header as='h2' icon inverted>
            <Icon name='delete' />
            Deleteing Tenant
            <Header.Subheader>Please wait...</Header.Subheader>
          </Header>
        </Dimmer>    
        {this.renderTenantIds()}
        </Layout>
        )
    }
}

export default RentIndex;