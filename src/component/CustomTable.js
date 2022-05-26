
import React from "react";



class CustomTable extends React.Component{
    constructor(props) {
        super(props)
      
        
        this.state = {
           date:new Date(),
           money:this.props.money           
        };
      };

      componentDidMount(){
          console.log(JSON.stringify(this.state));
          const moneys = this.props.money;
          console.log(JSON.stringify(moneys));
      }
    
render() {


  

  return (
    <div>
        Deneme
      {this.state.date.toLocaleTimeString() + this.state.money.name + " " + this.state.money.surname} 
    </div>
  )
};

}

export default CustomTable;