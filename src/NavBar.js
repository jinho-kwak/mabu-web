import React from "react";
// import { Link } from "react-router-dom";
import './css/mouse_event.css'
import { Link } from "react-scroll"
import {useMediaQuery} from 'react-responsive';

function NavBar(){
	const isTabletOrMobile = useMediaQuery({ maxWidth: 992 });
	const sideStyle={
		sideNav:{
			zIndex:'10',
			position:'sticky',
			top:'0',
			width:'100%',
			height:'100%',
			display:'flex',
			flexDirection:'row',
			backgroundColor:'white',
		},
		sideNavlist:{
			listStyle:'none',
			width:'100%',
			height:'100%',
			backgroundColor:'#103666',
			alignItems:'center',
			margin:'0.1%'

		},
		textStyle:{
			display:'flex',
			height:'100%',
			justifyContent:'center',
			padding:'5%',
			fontSize:isTabletOrMobile?'1.5vw':'1vw',
			color:"rgb(255,255,255)",
			borderWidth:'1px',
			borderRadius:'5',
			borderStyle:'solid',
			borderColor:'white',
		},
		buttonStyle:{
			display:'flex',
			justifyContent:'center',
			backgroundColor:'#103666',
			width:'100%',
			paddingTop:'20%',
			paddingBottom:'20%',
			// margin:'10%',
			fontSize:isTabletOrMobile?'3.5vw':'1vw',
			fontWeight:'bold',
			color:"white",
			borderWidth:'1px',
			// borderRadius:'5',
			borderStyle:'solid',
			borderColor:'white',
		},
	}

	return (
		<div style={sideStyle.sideNav}>
			<li style={sideStyle.sideNavlist}><Link to="Page1" spy={true} smooth={true} offset={50} duration={500}>
				<button style={sideStyle.buttonStyle} className="textweightstyle">마부리스</button></Link></li>
			<li style={sideStyle.sideNavlist}><Link to="Page2" spy={true} smooth={true} offset={50} duration={500}>
				<button style={sideStyle.buttonStyle} className="textweightstyle">이용후기</button></Link></li>
			<li style={sideStyle.sideNavlist}><Link to="Page3-2" spy={true} smooth={true} offset={50} duration={500}>
				<button style={sideStyle.buttonStyle} className="textweightstyle">차량조회</button></Link></li>
			<li style={sideStyle.sideNavlist}><Link to="Page5-01" spy={true} smooth={true} offset={50} duration={500}>
				<button style={sideStyle.buttonStyle} className="textweightstyle">차량검수</button></Link></li>
			<li style={sideStyle.sideNavlist}><Link to="Page6" spy={true} smooth={true} offset={50} duration={500}>
				<button style={sideStyle.buttonStyle} className="textweightstyle">차량관리</button></Link></li>
		</div>
	);
}
export default NavBar;