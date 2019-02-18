import React,{Component} from 'react';
import Hometop from "../Hometop/Hometop";
import Homecenter from "../Homecenter/Homecenter";
import ReactSwipe from 'react-swipe';
let sTop=0;
class Home extends Component{
    render(){
        return (
            <div>
               <ReactSwipe
                    className="slide"
                    swipeOptions={{
                         continuous:true,
                         auto:2000
                        }}
                >
                    <div className="swiper-slide">
                        <a href="#">
                            <img src="/images/upload/slide001.jpg"/>
                        </a>
                    </div>
                    <div className="swiper-slide">
                    <a href="#">
                        <img src="/images/upload/slide002.jpg"/>
                    </a>
                    </div>
                </ReactSwipe>
                <Hometop></Hometop>
                <Homecenter></Homecenter>
            </div>
        )
    }
}
export default Home;