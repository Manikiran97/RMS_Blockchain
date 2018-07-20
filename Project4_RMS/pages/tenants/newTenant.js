import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Input,  Message, Button } from 'semantic-ui-react';
import tenants from '../../ethereum/tenants';
import web3 from '../../ethereum/web3';

//Link is a React component that allows us to render anchor tags
//Router navigates programatically from one page to another
import { Link, Router } from '../../routes';

class TenantNew extends Component{
    state = {
        tenantId:'',
        name:'',
        faltNum:'',
        phoneNum:'',
        advanceAmt:'',
        rent:'',
        lastPaidOn:'',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        //set State for spinner
        this.setState({loading: true, errorMessage: ''});

        console.log('On Submit of New tenant');
        try{

        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth()+1;
        const accounts = await web3.eth.getAccounts();
        console.log('Month is:',month);   
        const result = await tenants.methods.addTenant(this.state.tenantId, this.state.name, this.state.faltNum, this.state.phoneNum,
                                                 this.state.advanceAmt, this.state.rent,month,year)
                                                 .send({from: accounts[0],
                                                    gas: 210000 });
        Router.pushRoute('/');                                            
        }catch(err){
            this.setState({errorMessage: err.message});
        }
        this.setState({loading: false});
        
      
        if(result == 0){
            console.log('Tenant Addition unsucessful');
        }else{
            console.log('Tenant Addition unsucessful');
        }
                                                 

    }

    render(){
        return(
        <Layout>
        
        <h3>New Tenant Form</ h3>
        <Form size='mini' onSubmit= {this.onSubmit} error ={!!this.state.errorMessage} >
            <Form.Field>
                <label> Tenant Id</ label>
                <Input 
                    type="text"
                    value = {this.state.tenantId}
                    onChange = {event => this.setState({tenantId: event.target.value})}
                    />
            </ Form.Field> 
            
            <Form.Field> 
                <label> Name</ label>
                <Input 
                    value = {this.state.name}
                    onChange = {event => this.setState({name: event.target.value})}
                    />
            </Form.Field>

            <Form.Field>
                <label> Flat Num</ label>
                <Input 
                    value = {this.state.faltNum}
                    onChange = {event => this.setState({faltNum: event.target.value})}
                    />
            </Form.Field>   

            <Form.Field>
                <label> Phone Num</ label>
                <Input 
                    value = {this.state.phoneNum}
                    onChange = {event => this.setState({phoneNum: event.target.value})}
                    />
            </Form.Field>    

            <Form.Field>
                <label> Advance Amount</ label>
                <Input 
                    label='Rupees' 
                    labelPosition= 'right' 
                    value = {this.state.advanceAmt}
                    onChange = {event => this.setState({advanceAmt: event.target.value})}
                    />
            </Form.Field>   

            <Form.Field>    
                <label> Rent</ label>
                <Input 
                    label='Rupees' 
                    labelPosition= 'right'
                    value = {this.state.rent}
                    onChange = {event => this.setState({rent: event.target.value})}
                    />
            </Form.Field>  
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary loading = {this.state.loading}> Submit</Button>
        
        </Form>
        
        </Layout>
        )
    }
}

export default TenantNew;