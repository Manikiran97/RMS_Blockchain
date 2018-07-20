import React, { Component } from 'react';
import Layout from '../../components/Layout';
import rent from '../../ethereum/rent';
import { Form, Input,  Message, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';

class RentNew extends Component{
    state = {
        tenantId:'',
        faltNum:'',
        advanceAmt:'',
        rent:'',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        //set State for spinner
        this.setState({loading: true, errorMessage: ''});

        console.log('On Submit of New Rent');
        try{

        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth()+1;
        const accounts = await web3.eth.getAccounts();
        console.log('Month is:',month);   
        const result = await rent.methods.addRent(this.state.faltNum,this.state.rent,this.state.tenantId, month,year)
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
        
        <h3>New Rent Form</ h3>
        <Form size='mini' onSubmit= {this.onSubmit} error ={!!this.state.errorMessage} >
            <Form.Field>
                <label> Flat Number</ label>
                <Input 
                    type="text"
                    value = {this.state.faltNum}
                    onChange = {event => this.setState({faltNum: event.target.value})}
                    />
            </ Form.Field> 
            
            <Form.Field> 
                <label> Rent Amount</ label>
                <Input 
                    value = {this.state.rent}
                    onChange = {event => this.setState({rent: event.target.value})}
                    />
            </Form.Field>

            <Form.Field>
                <label> TenanatID</ label>
                <Input 
                    value = {this.state.tenantId}
                    onChange = {event => this.setState({tenantId: event.target.value})}
                    />
            </Form.Field>   

           
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary loading = {this.state.loading}> Submit</Button>
        
        </Form>
        
        </Layout>
        )
    }

}

export default RentNew;