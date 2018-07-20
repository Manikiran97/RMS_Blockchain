pragma solidity ^0.4.17;
//import "browser/Tenants.sol";


contract Rent{

    address tenantAddress;
    address admin;
    /*Map for storing RentDetails
      Key = Sha code of Flat Num, Month and Year
      Value = Full Rent details*/
    mapping(bytes32 => RentRow) rentDetails;
   
    //Array keeps all the keys of rentDetails struct
    uint256[] rentRowTracker;
    
    //Contract constructor
    function Rent(address _tenantAddress) public{
        admin = msg.sender;
        tenantAddress = _tenantAddress;
    }
    
    struct RentRow{
        uint256 rentId;
        uint256 flatNum;
        uint8   month;
        uint16  year;
        uint256 rentAmt;
        uint256  tenantID;
    }
    
    modifier onlyAdmin(){
        if(msg.sender!=admin){
            revert();
        }
        _;
        }
    
    /*Function to add Rent.
    Input- FlatNum, Rent Amount, tenantID, Month and Year
    Output- Pass --> RentId,Month and Year
            Fail --> (0,0,0)
    */
    function addRent(uint256 _flatNum,uint256 _rentAmt,uint256 _tenantID,uint8 _month,uint16 _year)
                         public returns(uint256,uint256,uint16) {
      
        RentRow memory resultRent;
        
        Tenants tenants = Tenants(tenantAddress);
        bytes32 rentRowSha = keccak256(abi.encodePacked(_flatNum,_month,_year));
        
        if(!rentRowExists(_flatNum,_month,_year) && tenants.isTenant(_tenantID,_flatNum)){
        
        //Update the lastPaidMonth and lastPaidYear of the tenanat
        tenants.editTenantPaidDate(_tenantID,_flatNum,_month, _year);
        
        resultRent.rentId = rentRowTracker.length+1;
        resultRent.flatNum = _flatNum;
        resultRent.rentAmt = _rentAmt;
        resultRent.tenantID = _tenantID;
        resultRent.month = _month;
        resultRent.year = _year;
        
        rentDetails[rentRowSha] = resultRent;
        rentRowTracker.push(resultRent.rentId);
        
        return (resultRent.rentId,resultRent.month,resultRent.year);
        }else{
            return(0,0,0);
        }
    }
    
    /*Function to delete Rent.
      --> RentId --> If deleted successfully
      --> 0 --> If there is no row to delete*/
    function deleteRent(uint256 _flatNum, uint8 _month, uint16 _year) 
                                            public  returns(uint256) {
       if(rentRowExists(_flatNum,_month,_year)){
           uint256 rentId;
           rentId = rentDetails[keccak256(abi.encodePacked(_flatNum,_month,_year))].rentId;
           delete rentDetails[keccak256(abi.encodePacked(_flatNum,_month,_year))];
           return rentId;
       }else{
           return 0;
       }
    }
    
    //Function to check if a Rent row exists
    function rentRowExists(uint256 _flatNum, uint8 _month, uint16 _year) public  view returns(bool){
        bytes32 rentRowSha = keccak256(abi.encodePacked(_flatNum,_month,_year));
        return(rentDetails[rentRowSha].flatNum != 0);
    }
    
    
    //Function to get a Rent row.
    function getRentRow(uint256 _flatNum, uint8 _month, uint16 _year) 
        public view returns(uint256,uint256,uint256,uint256){
        bytes32 rentRowSha = keccak256(abi.encodePacked(_flatNum,_month,_year));
        RentRow memory resultRent = rentDetails[rentRowSha];
        return (resultRent.flatNum,resultRent.month,resultRent.year,resultRent.tenantID);
    }

}



pragma solidity ^0.4.17;

contract Tenants{
    address admin;
    mapping(bytes32 => Tenant) public tenantDetails;
    uint256[] public tenantIds;

//Contract constructor
function Tenants() public{
    admin = msg.sender;
}

struct Tenant{
    uint256 uniqueId;
    string name;
    uint256 flatNum;
    uint256 phoneNum;
    uint256 advanceAmt;
    uint256 rent;
    //DDMMYYYY
    uint8   lastPaidMonth;
    uint16  lastPaidYear;
}

modifier onlyAdmin(){
    if(msg.sender!=admin){
        revert();
    }
    _;
    }

/*Function to add Tenant.
Output- Pass --> TenantId
        Fail --> Empty string
*/
function addTenant(uint256 _uniqueID,string _name,uint256 _flatNum,uint256 _phoneNum,uint256 _advanceAmt,
                   uint256 _rent,uint8   _lastPaidMonth,uint16  _lastPaidYear)  
                   public returns(uint256) {
  
    Tenant memory tenant;
    
    bytes32 uniqueIDHash = calculateSHA(_uniqueID);
    
    //Donot accept the data if tenant already exists
    if(tenantDetails[uniqueIDHash].uniqueId != 0 ){ 
        return 0;
    }
    tenant.uniqueId = _uniqueID;
    tenant.name = _name;
    tenant.flatNum= _flatNum;
    tenant.phoneNum = _phoneNum;
    tenant.advanceAmt = _advanceAmt;
    tenant.rent = _rent;
    tenant.lastPaidMonth = _lastPaidMonth;
    tenant.lastPaidYear = _lastPaidYear;
    tenantDetails[uniqueIDHash] = tenant;
    
    tenantIds.push(tenant.uniqueId);
    
    return tenant.uniqueId;
}

    function getTenantsIds() public view returns(uint[]){
       
        return tenantIds;
    }
    
    
    //Function to delete a tenant
    function deleteTenant(uint256 _uniqueID, uint256 _flatNum) public  returns(bool) {
        if(!isTenant(_uniqueID,_flatNum)){
            return false;
        }
        uint256 index;
        bytes32  uniqueIdHash = calculateSHA(_uniqueID);
        delete tenantDetails[uniqueIdHash];
        (index,) = getTenantsIdIndex(_uniqueID);
        delete tenantIds[index];
        return true;
        
        
    }
    
    /*Function to get Index of a Tenant.
        Output- 
        Pass --> Index of TenantId, true
        Fail --> 0(Default value of uint), false
    */
    function getTenantsIdIndex(uint256 _uniqueID) public view returns(uint256,bool){
        
        for(uint i=0; i<tenantIds.length; i++){
            if(tenantIds[i] == _uniqueID){
                return (i,true);
            }
        }
        return (0,false);
    }
    
    /*Function to get a Tenant
        Pass--> Full Tenant tenantDetails
        Fail--> default values of tenantDetails struct*/
    function getTenant(uint256 _uniqueID) public view 
    returns(uint256,string,uint256,uint256,uint256,uint256,uint8,uint16){
       
        bytes32 uniqueIdHash = calculateSHA(_uniqueID);
        Tenant memory tenant = tenantDetails[uniqueIdHash];
        return (
            tenant.uniqueId,tenant.name,tenant.flatNum,tenant.phoneNum,tenant.advanceAmt,
            tenant.rent,tenant.lastPaidMonth,tenant.lastPaidYear
            );
       
    }
    
    //Function to check if a Tenant exists
    function isTenant(uint256 _uniqueID, uint256 _flatNum) public view returns(bool){
        bytes32 uniqueIdHash = calculateSHA(_uniqueID);
        Tenant memory tenant = tenantDetails[uniqueIdHash];
        if(tenant.uniqueId == 0 || (_flatNum != tenant.flatNum) ){
            return false;
        }else{
            return true;
        }
    }

    /*Function to edit a Tenanat
    */
    function editTenant(uint256 _uniqueID,string _name,uint256 _flatNum,uint256 _phoneNum,uint256 _advanceAmt,
                   uint256 _rent)  public returns(uint256){
       Tenant memory tenant;
       bytes32 uniqueIDHash = calculateSHA(_uniqueID);
    
       if(tenantDetails[uniqueIDHash].flatNum==0){
            return 0;
        }
        
        tenant = tenantDetails[uniqueIDHash];
        
        tenant.uniqueId = _uniqueID;
        tenant.name = _name;
        tenant.flatNum= _flatNum;
        tenant.phoneNum = _phoneNum;
        tenant.advanceAmt = _advanceAmt;
        tenant.rent = _rent;
        tenantDetails[uniqueIDHash] = tenant;
        return tenant.uniqueId;
    }
    
    
    /*Function to edit a Tenanat
    */
    function editTenantPaidDate(
        uint256 _uniqueID,uint256 _flatNum,uint8 _lastPaidMonth, uint16 _lastPaidYear
        )  
    public returns(uint256){
       Tenant memory tenant;
       bytes32 uniqueIDHash = calculateSHA(_uniqueID);
    
       if(tenantDetails[uniqueIDHash].flatNum==0){
            return 0;
        }
        
        tenant = tenantDetails[uniqueIDHash];
        tenant.lastPaidMonth = _lastPaidMonth;
        tenant.lastPaidYear = _lastPaidYear;
        tenantDetails[uniqueIDHash] = tenant;
        return tenant.uniqueId;
    }

    

    function calculateSHA(uint256 val1) pure public returns(bytes32){
        
        return sha256(val1);
    }
    
    function compareStrings (string a, string b) pure public returns (bool){
           return keccak256(a) == keccak256(b);
       }

}
