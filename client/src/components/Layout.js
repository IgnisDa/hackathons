import React from 'react';


import Footer from './Footer.js'
import Head from "next/head";



export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Salve</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

          {this.props.children}

          {this.props.noFooter ? "" :<Footer sticky={this.props.short} bright={this.props.brightFooter}/>}


      </React.Fragment>
      )
  }
}
