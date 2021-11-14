import React from "react";

class Link extends React.Component{   
  render(){
    const {href,className,children} = this.props;
    return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a> ;
  }
}

export default Link;