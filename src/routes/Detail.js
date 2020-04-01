import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const {location, history} =  this.props;
        console.log(location.state);
        if(location.state === undefined){ //redirect 
            history.push("/");    //Home으로 돌아가!
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){ //render가 먼저 실행되는데 아직 didmount함수 안돌아갔을때
            return <span>{location.state.title}</span>;
        }
        else{
            return null;
        }
    }
}
export default Detail;