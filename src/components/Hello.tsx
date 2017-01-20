import * as React from "react";

interface HelloProps extends React.Props<Hello> {
  name: string;
}

export class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return (<h1> Hey there {this.props.name}! </h1>);
  }
}
