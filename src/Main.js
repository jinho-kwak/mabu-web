import * as React from "react";
import NavBar from './NavBar';
import LazyLoad from './LazyLoad';
import './css/mouse_event.css'
import {useMediaQuery} from 'react-responsive'

const MainBoard = () => {

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
        eachimg:{
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
      }
    const url_path = 'http://xn--299as6voca478bs7ip4ijkdpxj.kr'
    return (
            <div style={bodystyle.maincontainer}>
                <div style={bodystyle.innercontainer}>
                    <img src={url_path+'/img/logo.png'} alt='logo' style={{ width: "30%" }} />
                    <NavBar />
                    <div style={bodystyle.imgview}>
                        <LazyLoad id ='Page1' style={bodystyle.eachimg} src={url_path+'/img/Page1.png'} alt="noImage"/>
                        <LazyLoad id ='Page1-2' style={bodystyle.eachimg} src={url_path+'/img/Page1-2.png'} alt="noImage"/>
                        <LazyLoad id ='Page1-3' style={bodystyle.eachimg} src={url_path+'/img/Page1-3.png'} alt="noImage"/>
                        <LazyLoad id ='Page2' style={bodystyle.eachimg} src={url_path+'/img/Page2.png'} alt="noImage"/>
                        <LazyLoad id ='Page2-2' style={bodystyle.eachimg} src={url_path+'/img/Page2-2.png'} alt="noImage"/>
                        <LazyLoad id ='Page2-3' style={bodystyle.eachimg} src={url_path+'/img/Page2-3.png'} alt="noImage"/>
                        <LazyLoad id ='Page3' style={bodystyle.eachimg} src={url_path+'/img/Page3.png'} alt="noImage"/>
                        <LazyLoad id ='Page3-2' style={bodystyle.eachimg} src={url_path+'/img/Page3-2.png'} alt="noImage"/>
                        <LazyLoad id ='Page4' style={bodystyle.eachimg} src={url_path+'/img/Page4.png'} alt="noImage"/>
                        <LazyLoad id ='Page5-01' style={bodystyle.eachimg} src={url_path+'/img/Page5-01.png'} alt="noImage"/>
                        <LazyLoad id ='Page5-02' style={bodystyle.eachimg} src={url_path+'/img/Page5-02.png'} alt="noImage"/>
                        <LazyLoad id ='Page5-02-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-02-1.gif'}alt="noImage"/>
                        <LazyLoad id ='Page5-03' style={bodystyle.eachimg} src={url_path+'/img/Page5-03.png'} alt="noImage"/>
                        <LazyLoad id ='Page5-03-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-03-1.gif'}alt="noImage"/>
                        <LazyLoad id ='Page5-03-2' style={bodystyle.eachimg} src={url_path+'/gif/Page5-03-2.gif'}alt="noImage"/>
                        <LazyLoad id ='Page5-04' style={bodystyle.eachimg} src={url_path+'/img/Page5-04.png'} alt="noImage"/>
                        <LazyLoad id ='Page5-04-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-04-1.gif'}alt="noImage"/>
                        <LazyLoad id ='Page5-05' style={bodystyle.eachimg} src={url_path+'/img/Page5-05.png'}alt="noImage" />
                        <LazyLoad id ='Page5-05-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-05-1.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-05-2' style={bodystyle.eachimg} src={url_path+'/gif/Page5-05-2.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-05-3' style={bodystyle.eachimg} src={url_path+'/gif/Page5-05-3.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-06' style={bodystyle.eachimg} src={url_path+'/img/Page5-06.png'}alt="noImage" />
                        <LazyLoad id ='Page5-06-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-06-1.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-06-2' style={bodystyle.eachimg} src={url_path+'/gif/Page5-06-2.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-07' style={bodystyle.eachimg} src={url_path+'/img/Page5-07.png'}alt="noImage" />
                        <LazyLoad id ='Page5-07-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-07-1.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-08' style={bodystyle.eachimg} src={url_path+'/img/Page5-08.png'}alt="noImage" />
                        <LazyLoad id ='Page5-08-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-08-1.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-09' style={bodystyle.eachimg} src={url_path+'/img/Page5-09.png'}alt="noImage" />
                        <LazyLoad id ='Page5-09-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-09-1.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-10' style={bodystyle.eachimg} src={url_path+'/img/Page5-10.png'}alt="noImage" />
                        <LazyLoad id ='Page5-10-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-10-1.gif'}alt="noImage" />
                        <LazyLoad id ='Page5-11' style={bodystyle.eachimg} src={url_path+'/img/Page5-11.png'}alt="noImage" />
                        <LazyLoad id ='Page5-11-1' style={bodystyle.eachimg} src={url_path+'/gif/Page5-11-1.gif'}alt="noImage" />
                        <LazyLoad id ='Page6' style={bodystyle.eachimg} src={url_path+'/img/Page6.png'}alt="noImage" />
                        <LazyLoad id ='Page6-2' style={bodystyle.eachimg} src={url_path+'/img/Page6-2.png'}alt="noImage" />

                        {/* <img id ='Page1' style={bodystyle.eachimg} src={'/img/Page1.png'} alt="noImage"/>
                        <img id ='Page1-2' style={bodystyle.eachimg} src={'/img/Page1-2.png'} alt="noImage"/>
                        <img id ='Page1-3' style={bodystyle.eachimg} src={'/img/Page1-3.png'} alt="noImage"/>
                        <img id ='Page2' style={bodystyle.eachimg} src={'/img/Page2.png'} alt="noImage"/>
                        <img id ='Page2-2' style={bodystyle.eachimg} src={'/img/Page2-2.png'} alt="noImage"/>
                        <img id ='Page2-3' style={bodystyle.eachimg} src={'/img/Page2-3.png'} alt="noImage"/>
                        <img id ='Page3' style={bodystyle.eachimg} src={'/img/Page3.png'} alt="noImage"/>
                        <img id ='Page3-2' style={bodystyle.eachimg} src={'/img/Page3-2.png'} alt="noImage"/>
                        <img id ='Page4' style={bodystyle.eachimg} src={'/img/Page4.png'} alt="noImage"/>
                        <img id ='Page5-01' style={bodystyle.eachimg} src={'/img/Page5-01.png'} alt="noImage"/>
                        <img id ='Page5-02' style={bodystyle.eachimg} src={'/img/Page5-02.png'} alt="noImage"/>
                        <img id ='Page5-02-1' style={bodystyle.eachimg} src={'/gif/Page5-02-1.gif'}alt="noImage"/>
                        <img id ='Page5-03' style={bodystyle.eachimg} src={'/img/Page5-03.png'} alt="noImage"/>
                        <img id ='Page5-03-1' style={bodystyle.eachimg} src={'/gif/Page5-03-1.gif'}alt="noImage"/>
                        <img id ='Page5-03-2' style={bodystyle.eachimg} src={'/gif/Page5-03-2.gif'}alt="noImage"/>
                        <img id ='Page5-04' style={bodystyle.eachimg} src={'/img/Page5-04.png'} alt="noImage"/>
                        <img id ='Page5-04-1' style={bodystyle.eachimg} src={'/gif/Page5-04-1.gif'}alt="noImage"/>
                        <img id ='Page5-05' style={bodystyle.eachimg} src={'/img/Page5-05.png'}alt="noImage" />
                        <img id ='Page5-05-1' style={bodystyle.eachimg} src={'/gif/Page5-05-1.gif'}alt="noImage" />
                        <img id ='Page5-05-2' style={bodystyle.eachimg} src={'/gif/Page5-05-2.gif'}alt="noImage" />
                        <img id ='Page5-05-3' style={bodystyle.eachimg} src={'/gif/Page5-05-3.gif'}alt="noImage" />
                        <img id ='Page5-06' style={bodystyle.eachimg} src={'/img/Page5-06.png'}alt="noImage" />
                        <img id ='Page5-06-1' style={bodystyle.eachimg} src={'/gif/Page5-06-1.gif'}alt="noImage" />
                        <img id ='Page5-06-2' style={bodystyle.eachimg} src={'/gif/Page5-06-2.gif'}alt="noImage" />
                        <img id ='Page5-07' style={bodystyle.eachimg} src={'/img/Page5-07.png'}alt="noImage" />
                        <img id ='Page5-07-1' style={bodystyle.eachimg} src={'/gif/Page5-07-1.gif'}alt="noImage" />
                        <img id ='Page5-08' style={bodystyle.eachimg} src={'/img/Page5-08.png'}alt="noImage" />
                        <img id ='Page5-08-1' style={bodystyle.eachimg} src={'/gif/Page5-08-1.gif'}alt="noImage" />
                        <img id ='Page5-09' style={bodystyle.eachimg} src={'/img/Page5-09.png'}alt="noImage" />
                        <img id ='Page5-09-1' style={bodystyle.eachimg} src={'/gif/Page5-09-1.gif'}alt="noImage" />
                        <img id ='Page5-10' style={bodystyle.eachimg} src={'/img/Page5-10.png'}alt="noImage" />
                        <img id ='Page5-10-1' style={bodystyle.eachimg} src={'/gif/Page5-10-1.gif'}alt="noImage" />
                        <img id ='Page5-11' style={bodystyle.eachimg} src={'/img/Page5-11.png'}alt="noImage" />
                        <img id ='Page5-11-1' style={bodystyle.eachimg} src={'/gif/Page5-11-1.gif'}alt="noImage" />
                        <img id ='Page6' style={bodystyle.eachimg} src={'/img/Page6.png'}alt="noImage" />
                        <img id ='Page6-2' style={bodystyle.eachimg} src={'/img/Page6-2.png'}alt="noImage" /> */}
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