import * as React from "react";
// import {useState} from "react";
import NavBar from './NavBar';
// import LazyLoad from './LazyLoad';
import './css/mouse_event.css'
import {useMediaQuery} from 'react-responsive'
import {src_info_list, url_path} from './config'
import ImageRenderer from './ImageRenderer';

const MainBoard = () => {

    // const [top, setTop] = useState('82%');
    // const [left, setLeft] = useState('65%')
    const isTabletOrMobile = useMediaQuery({ maxWidth: 992 });
    const bodystyle={
        maincontainer:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            width:'100%'
        },
        innercontainer:{
            display:'flex',
            flexDirection:'column',
            width:isTabletOrMobile?"90%":'40%',
            position:'relative'
        },
        imgview:{
            display:'flex',
            flexDirection:'column',
            width:'100%'
        },
        clickfield:{
            position:'sticky',
            bottom:'1vw',
            width:'100%',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'end',
            // backgroundColor:'pink'
        },
        innerclickfield:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
			justifyContent:'center',
            // width:'0%',
            // backgroundColor:'blue'
        },
        buttonstyle:{
			display:'flex',
            alignItems:'center',
			justifyContent:'center',
			backgroundColor:'#103666',
			width:isTabletOrMobile?'20vw':'6vw',
            height:isTabletOrMobile?'20vw':'6vw',
			// padding:'10%',
            // margin:'10%',
			fontSize:isTabletOrMobile?'4.5vw':'0.9vw',
			color:"white",
            outline:'0',
			borderWidth:'2px',
			borderRadius:isTabletOrMobile?'5vw':'2vw',
			borderStyle:'solid',
			borderColor:'black',
        },
        kakaostyle:{
            display:'flex',
            alignItems:'center',
			justifyContent:'center',
            backgroundColor:'transparent',
			width:isTabletOrMobile?'15vw':'6vw',
            height:isTabletOrMobile?'15vw':'6vw',
			// padding:'10%',
            border:'0',
            outline:'0'
        },
        // eventStyle:{
        //     transition: '1s',
        //     position:'fixed',
        //     top:top,
        //     left:left,
        //     display:'flex',
        //     alignItems:'center',
		// 	justifyContent:'center',
		// 	backgroundColor:'#103666',
		// 	width:isTabletOrMobile?'20vw':'6vw',
        //     height:isTabletOrMobile?'20vw':'6vw',
		// 	// padding:'10%',
        //     // margin:'10%',
		// 	fontSize:isTabletOrMobile?'4.5vw':'0.9vw',
		// 	color:"white",
        //     outline:'0',
		// 	borderWidth:'2px',
		// 	borderRadius:isTabletOrMobile?'5vw':'2vw',
		// 	borderStyle:'solid',
		// 	borderColor:'black',
        // }
    }
    return (
            <div style={bodystyle.maincontainer}>
                <div style={bodystyle.innercontainer}>
                    <img src={url_path+'/img/logo.png'} alt='logo' style={{ width: "30%" }} />
                    <NavBar />
                    <div style={bodystyle.imgview}>
                        <img id ='Page1' style={bodystyle.eachimg} src={'/img/Page1.png'} alt="noImage"/>
                        <img id ='Page1-2' style={bodystyle.eachimg} src={'/img/Page1-2.png'} alt="noImage"/>
                        <img id ='Page1-3' style={bodystyle.eachimg} src={'/img/Page1-3.png'} alt="noImage"/>
                        {/* <img id ='Page2' style={bodystyle.eachimg} src={'/img/Page2.png'} alt="noImage"/>
                        <img id ='Page2-2' style={bodystyle.eachimg} src={'/img/Page2-2.png'} alt="noImage"/>
                        <img id ='Page2-3' style={bodystyle.eachimg} src={'/img/Page2-3.png'} alt="noImage"/> */}
                    </div>
                    <div style={bodystyle.imgview}>
                        {src_info_list.map(data => (
                            <ImageRenderer
                                key={data.img_name}
                                id={data.img_name}
                                url={url_path+'/'+data.img_path+'/'+data.img_name+'.'+data.src_type}
                            />
                        ))}

                    </div>
                    <div style={bodystyle.clickfield}>
                        <div style={bodystyle.innerclickfield}>
                            <button style={bodystyle.buttonstyle} className='textweightstyle' onClick={() => window.open("https://naver.me/FbizcvvN", '_blank')}>서비스 신청</button>
                            <button style={bodystyle.kakaostyle} onClick={() => window.open('http://pf.kakao.com/_XQScT/chat', '_blank')}><img style={{width:isTabletOrMobile?'200%':'150%'}} src={url_path+'/img/kakaotalkchat.png'} alt='kakaochat'/></button>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default MainBoard