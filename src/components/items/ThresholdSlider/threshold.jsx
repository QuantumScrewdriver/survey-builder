import React, { Component } from 'react';
import './histSlider.css';

class Tradeoff extends Component {

    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.slider2Ref = React.createRef();
        this.threeGraphRef = React.createRef();
        this.rectRef = React.createRef();
        this.svgRef = React.createRef();
        this.graphColRef=React.createRef();
        this.refLine1Ref = React.createRef();
        this.refLine2Ref = React.createRef();

        this.refLine4Ref = React.createRef();
        this.refLine3Ref = React.createRef();
        this.refLine6Ref = React.createRef();
        this.refLine5Ref = React.createRef();
        this.refLine7Ref = React.createRef();
        this.refLine8Ref = React.createRef();

        this.stroke1Ref = React.createRef();
        this.areaRef = React.createRef();
        this.onChange2 = this.onChange2.bind(this);
        this.rectReturn1 = this.rectReturn1.bind(this);
        this.rectReturn2 = this.rectReturn2.bind(this);
        this.rectReturn3 = this.rectReturn3.bind(this);
        this.rectReturn4 = this.rectReturn4.bind(this);
        this.rectReturn5 = this.rectReturn5.bind(this);
        this.rectReturn6 = this.rectReturn6.bind(this);
        this.textReturn1 = this.textReturn1.bind(this);
        this.changeGraphColNumber = this.changeGraphColNumber.bind(this);
        this.line1 = this.line1.bind(this);
        this.changeGraphNumber = this.changeGraphNumber.bind(this);
        this.changeStroke1=this.changeStroke1.bind(this);

        this.establishStateData = this.establishStateData.bind(this);
        this.state = this.establishStateData(this.props.data);
        this.onChange1 = this.onChange1.bind(this);
    }

    establishStateData(data){
        return{
            stroke1 : "#FF0000",
            stroke2 : "#0000FF",
            rectWidth : 40,
            sliderPos:0,
            rect1Arr: [0,1],
            rect2Arr: [0.5,0.7],
            rect3Arr: [1,0.1],
            rect4Arr: [0,1],
            rect5Arr: [1,0.4],
            rect6Arr: [0.6,0.7],
            rect7Arr: [0.4,0.8],
            rect8Arr: [0.2,0.3],
            threeGraphs: true,
            threeGraphOne: true,
            fourGraphOne: true

        }
    }
    changeGraphColNumber(){
      const newColor = this.graphColRef.current.value;
      if (newColor === "1 and 1"){
          this.setState({fourGraphOne: true});
          this.setState({threeGraphOne: true});
      }
      if (newColor === "1 and 2"){
          this.setState({fourGraphOne: true});
          this.setState({threeGraphOne: false});
      }
      if (newColor === "2 and 1"){
          this.setState({fourGraphOne: false});
          this.setState({threeGraphOne: true});
      }
      if (newColor === "2 and 2"){
          this.setState({fourGraphOne: false});
          this.setState({threeGraphOne: false});
      }
  }
    onChange1(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    onChange10(e){
      this.setState({line1Height:e})
    }
    onChange2(e){
      this.setState({line2Height:e})
    }
    onChange3(e){
      this.setState({line3Height:e})
    }
    onChange4(e){
      this.setState({line4Height:e})
    }
    onChange5(e){
      this.setState({line5Height:e})
    }
    onChange6(e){
      this.setState({line6Height:e})
    }
    onChange7(e){
      this.setState({line7Height:e})
    }
    onChange8(e){
      this.setState({line8Height:e})
    }
    twographLine(xPos1,xPos2,height){
      var hard = <line x1 = {xPos1} x2 = {xPos2} y1 = {450 + 200*height} y2 = {450 + 200*height} stroke = "#000000"></line>;
      return hard;
    }
    bottomGraphLine(xPos1, xPos2, height){
      var hard = <line x1 = {xPos1} x2 = {xPos2} y1 = {150 + 200*height} y2 = {150 + 200*height} stroke = "#000000"></line>;
      return hard;
    }


    changeStroke1() {
      const newColor = this.stroke1Ref.current.value;
      if (newColor === "#FF0000"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2:newColor});
      }
      if (newColor === "#0000FF"){      
        this.setState({stroke1: "#FF0000"});
        this.setState({stroke2:newColor});
      }
      if(newColor === "Orange and Blue"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2: "#ffa500"});
      }
      if(newColor === "Blue and Orange"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2: "#ffa500"});
      }
      if(newColor === "Blue and Yellow"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2: "#FFD300"});
      }
      if(newColor === "Yellow and Blue"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2: "#FFD300"});
      }


    }
    changeGraphNumber(){
      const newGraph = this.threeGraphRef.current.value;
      if (newGraph === "True"){
        this.setState({threeGraphs: true});
      }
      else{
        this.setState({threeGraphs: false});
      }
  }

    rectReturn1(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke1} height = {200*this.state.rect1Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn2(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke2} height = {200*this.state.rect2Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn3(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke1} height = {200*this.state.rect3Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn4(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke2} height = {200*this.state.rect4Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn5(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke1} height = {200*this.state.rect5Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn6(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke2} height = {200*this.state.rect6Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn7(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke1} height = {200*this.state.rect7Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn8(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke2} height = {200*this.state.rect8Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn9(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {"#ffa500"} height = {200*this.state.rect5Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn10(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {"#ffa500"} height = {200*this.state.rect5Arr[this.state.sliderPos]} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      line1(xPos1,xPos2,yPos1,yPos2){
        var hard = 
        <line x1 = {xPos1} x2 = {xPos2} y1 = {yPos1} y2 = {yPos2} stroke = "#000000"></line>;
        return hard;
      }
      textReturn1(xPos, yPos, tedxt){
        var hard = <text x = {xPos} y = {yPos}>{tedxt}</text>;
        return hard;
      }
    render(){
      const threeGraphs = this.state.threeGraphs;
        return (
            <div>
                <svg width = {1400} height = {1000} class = "b"> 
                    {this.rectReturn1(200,450)}
                    {this.rectReturn2(280,450)}
                    {this.rectReturn3(600,450)}
                    {this.rectReturn4(680,450)}
                    {this.line1(173,187,650,650)}
                    {this.line1(173,187,485,485)}
                    {this.line1(173,187,525,525)}
                    {this.line1(173,187,565,565)}
                    {this.line1(173,187,605,605)}

                    {this.line1(176,184,630,630)}
                    {this.line1(176,184,465,465)}
                    {this.line1(176,184,505,505)}
                    {this.line1(176,184,545,545)}
                    {this.line1(176,184,585,585)}
                    {this.line1(173,187,485,485)}
                    {this.line1(173,187,525,525)}
                    {this.line1(173,187,565,565)}
                    {this.line1(173,187,605,605)}

                    {this.line1(176,184,630,630)}
                    {this.line1(176,184,465,465)}
                    {this.line1(176,184,505,505)}
                    {this.line1(176,184,545,545)}
                    {this.line1(176,184,585,585)}

                    {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(576,584,215,215)
                  }
                  {
                    threeGraphs
                    ? this.line1(330,330,255,255)


                    : this.line1(576,584,295,295)
                  }
                  {
                    threeGraphs
                    ? this.line1(326,334,295,295)


                    : this.line1(576,584,334,334)
                  }
                  {
                    threeGraphs
                    ? this.line1(326,334,335,335)


                    : this.line1(573,587,360,360)
                  }

{
                    threeGraphs
                    ? this.line1(326,334,215,215)


                    : this.line1(176,184,215,215)
                  }
                  
                  {
                    threeGraphs
                    ? this.line1(326,334,255,255)


                    : this.line1(176,184,255,255)
                  }

{
                    threeGraphs
                    ? this.line1(326,334,175,175)


                    : this.line1(576,584,255,255)
                  }




                  {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(577,587,195,195)
                  }
                  {
                    threeGraphs
                    ? this.line1(323,337,235,235)


                    : this.line1(573,587,235,235)
                  }
                  {
                    threeGraphs
                    ? this.line1(323,337,275,275)


                    : this.line1(573,587,275,275)
                  }
                  {
                    threeGraphs
                    ? this.line1(323,337,315,315)


                    : this.line1(573,587,315,315)
                  }

                  {
                    threeGraphs
                    ? this.line1(323,337,360,360)


                    : this.line1(176,184,215,215)
                  }


              {
                    threeGraphs
                    ? this.line1(323,337,195,195)


                    : this.line1(177,187,195,195)
                  }
                  {
                    threeGraphs
                    ? this.line1(330,330,255,255)


                    : this.line1(173,187,235,235)
                  }
                  {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(173,187,275,275)
                  }
                  {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(173,187,315,315)
                  }

                  {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(176,184,215,215)
                  }











                  {
                    threeGraphs
                    ? this.line1(330,330,255,255)


                    : this.line1(176,184,295,295)
                  }
                  {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(176,184,334,334)
                  }
                  {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(173,187,360,360)
                  }


                  {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(576,584,215,215)
                  }

                    {this.line1(573,587,650,650)}
                    {this.line1(573,587,485,485)}
                    {this.line1(573,587,525,525)}
                    {this.line1(573,587,565,565)}
                    {this.line1(573,587,605,605)}

                    {this.line1(576,584,630,630)}
                    {this.line1(576,584,465,465)}
                    {this.line1(576,584,505,505)}
                    {this.line1(576,584,545,545)}
                    {this.line1(576,584,585,585)}

                    {this.twographLine(195,245,this.state.line1Height)}
                    {this.twographLine(275,325,this.state.line2Height)}
                    {this.twographLine(595,645,this.state.line3Height)}
                    {this.twographLine(675,725,this.state.line4Height)}
                    {
                      this.state.threeGraphs
                      ? this.rectReturn5(360,160)             
                      : [
                          (this.state.threeGraphOne
                          ? this.rectReturn9(235,160)
                          : this.rectReturn5(200,160)
                          )
                        ]
                    }
                    {
                      this.state.threeGraphs
                      ? this.rectReturn6(435,160)         
                      : [
                        (this.state.threeGraphOne
                        ? <text></text>
                        : this.rectReturn6(280,160)
                        )
                      ]     
                    }
                    {
                      this.state.threeGraphs
                      ? <text> </text>        
                      : [
                          (this.state.fourGraphOne
                          ? this.rectReturn10(640,160)  
                          : this.rectReturn7(600,160)   
                          )
                      ] 
                    }
                   {
                      this.state.threeGraphs
                      ? <text> </text>        
                      : [
                          (this.state.fourGraphOne
                          ? <text></text>
                          : this.rectReturn8(680,160)   
                          )
                      ] 
                    }
                    {this.line1(180,180,450,650)}
                    {this.line1(180,360,450,450)}
                    {this.line1(580,580,450,650)}
                    {this.line1(580,760,450,450)}
                    {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(180,180,160,360)

                  }
                  {
                    threeGraphs
                    ? this.bottomGraphLine(480,430,this.state.line6Height)

                    : [(
                      this.state.fourGraphOne
                      ?this.bottomGraphLine(230,280,this.state.line6Height)
                      : this.bottomGraphLine(595,645,this.state.line7Height)
                    )]
                  }
                  {
                    threeGraphs
                    ? this.bottomGraphLine(355,405,this.state.line5Height)

                    : [(
                      this.state.fourGraphOne
                      ? this.bottomGraphLine(635,685,this.state.line6Height)
                      : this.bottomGraphLine(675,725,this.state.line8Height)
                    )]
                  }
                  {
                    threeGraphs
                    ? this.bottomGraphLine(480,430,this.state.line6Height)

                    : [(
                      this.state.threeGraphOne
                      ? <text></text>
                      : this.bottomGraphLine(275,325,this.state.line6Height)
                    )]
                  }
                  {
                    threeGraphs
                    ? this.bottomGraphLine(355,405,this.state.line5Height)

                    : [(
                      this.state.threeGraphOne
                      ? <text></text>
                      : this.bottomGraphLine(195,245,this.state.line5Height)
                    )]
                  }
                  {
                    threeGraphs
                    ? this.line1(330,510,160,160)

                    : this.line1(180,390,160,160)
                  }
                  {
                    threeGraphs
                    ? this.line1(0,0,0,0)


                    : this.line1(580,580,160,360)

                  }
                  {
                    threeGraphs
                    ? this.line1(0,0,0,0)

                    : this.line1(580 ,780,160,160)
                  }
                    
                   
                </svg>
                <svg class = "c">
                  <text x = {200} y = {115}>Filler text for eventual question will go here</text>
                  <text x = {250} y = {265}> Key: Population 1</text>
                  <rect x = {375} y = {255} height = {10} width = {10} stroke = {this.state.stroke1} fill = {this.state.stroke1}></rect>
                  <text x = {400} y = {265}> Population 2</text>
                  <rect x = {500} y = {255} height = {10} width = {10} stroke = {this.state.stroke2} fill = {this.state.stroke2}></rect>

                  <text x = {150} y = {200}>Equal accuracy</text>
                  <text x = {450} y = {200}>Equal FPR</text>
                  <text x = {50} y = {510}>0</text>
                  <text x = {50} y = {470}>0.2</text>
                  <text x = {50} y = {430}>0.4</text>
                  <text x = {50} y = {390}>0.6</text>
                  <text x = {50} y = {350}>0.8</text>
                  <text x = {50} y = {310}>1</text>
                  <text x = {455} y = {510}>0</text>
                  <text x = {445} y = {470}>0.2</text>
                  <text x = {445} y = {430}>0.4</text>
                  <text x = {445} y = {390}>0.6</text>
                  <text x = {445} y = {350}>0.8</text>
                  <text style = {{size:8}} x = {455} y = {310}>1</text>
                  {
                    threeGraphs
                    ? <text x = {190} y = {600}>1</text>

                    : <text x = {50} y = {600}>1</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {640}>0.8</text>

                    : <text x = {50} y = {640}>0.8</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {680}>0.6</text>

                    : <text x = {50} y = {680}>0.6</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {720}>0.4</text>

                    : <text x = {50} y = {720}>0.4</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {760}>0.2</text>

                    : <text x = {50} y = {760}>0.2</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {790}>0</text>
                    : <text x = {50} y = {800}>0</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {790}> </text>
                    : <text x = {460} y = {600}>1</text>
                  }
                   {
                    threeGraphs
                    ? <text x = {190} y = {640}></text>

                    : <text x = {452} y = {640}>0.8</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {680}></text>

                    : <text x = {452} y = {680}>0.6</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {720}></text>

                    : <text x = {452} y = {720}>0.4</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {760}></text>

                    : <text x = {452} y = {760}>0.2</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {160} y = {790}> </text>
                    : <text x = {460} y = {800}>0</text>
                  }
                  <text x = {200} y = {310}>Graph 1</text>
                  <text x = {625} y = {310}>Graph 2</text>
                  {
                    threeGraphs
                    ? <text x = {380} y = {610}>Graph 3</text>
                    : <text x = {200} y = {610}>Graph 3</text>
                  }
                  {
                    threeGraphs
                    ? <text> </text>
                    : <text x = {625} y = {610}>Graph 4</text>
                  }
                  <text x = {200} y = {310}>Graph 1</text>
                  <text x = {625} y = {310}>Graph 2</text>
                  {
                    threeGraphs
                    ? <text x = {380} y = {610}>Graph 3</text>
                    : <text x = {200} y = {610}>Graph 3</text>
                  }
                  {
                    threeGraphs
                    ? <text> </text>
                    : <text x = {625} y = {610}>Graph 4</text>
                  }

                </svg>
                <svg class = "e">
                  <text x = {120} y = {200}>Equal False Positive Rate</text>
                </svg>
                 <input type="range" min={0} max={(this.state.rect1Arr.length)-1} 
              className="hist-slider" onChange={this.onChange1}
              name="sliderPos" value={this.state.sliderPos} ref={this.sliderRef} list = "tickmarks"
              style={{ width:300, left:700, top:250}}/>
                
                  <select name="stroke1" id="stroke1" ref={this.stroke1Ref}>
                    <option value="#0000FF">Blue and Red</option>
                    <option value="#FF0000">Red and Blue</option>
                    <option value="Orange and Blue">Orange and Blue</option>
                    <option value="Blue and Orange">Blue and Orange</option>
                    <option value = "Yellow and Blue">Yellow and Blue</option>
                    <option value = "Blue and Yellow">Blue and Yellow</option>
                  </select>
                  <input onClick={() => this.changeStroke1()} type="submit" value="Submit"></input>
                  <br></br>
                  <select name = "threeGraphs" id = "threeGraphs" ref = {this.threeGraphRef}>
                    <option value = "True">Three graphs</option>
                    <option value = "False">Four graphs</option>
                  </select>
                  <input onClick = {() => this.changeGraphNumber()} type = "submit" value = "Submit"></input>
                  <br></br>
                  <select name = "graphCol" id = "graphCol" ref = {this.graphColRef}>
                    <option value = "1 and 1">1 and 1</option>
                    <option value = "1 and 2">2 and 1</option>
                    <option value = "2 and 1">1 and 2</option>
                    <option value = "2 and 2">2 and 2</option>
                  </select>
                  <input onClick = {() => this.changeGraphColNumber()} type = "submit" value = "Submit"></input>
                  <br></br>
                  <input name = "refLine1" id = "refLine1" ref = {this.refLine1Ref}></input>
                  <input onClick = {() => this.onChange10(this.refLine1Ref.current.value)} type = "submit" value = "Submit"></input> 
                  <br></br>
                  <input name = "refLine2" id = "refLine2" ref = {this.refLine2Ref}></input>
                  <input onClick = {() => this.onChange2(this.refLine2Ref.current.value)} type = "submit" value = "Submit"></input> 
                  <br></br>
                  <input name = "refLine3" id = "refLine3" ref = {this.refLine3Ref}></input>
                  <input onClick = {() => this.onChange3(this.refLine3Ref.current.value)} type = "submit" value = "Submit"></input> 
                  <br></br>
                  <input name = "refLine4" id = "refLine4" ref = {this.refLine4Ref}></input>
                  <input onClick = {() => this.onChange4(this.refLine4Ref.current.value)} type = "submit" value = "Submit"></input> 
                  <br></br>
                  <input name = "refLine5" id = "refLine5" ref = {this.refLine5Ref}></input>
                  <input onClick = {() => this.onChange5(this.refLine5Ref.current.value)} type = "submit" value = "Submit"></input> 
                  <br></br>
                  <input name = "refLine6" id = "refLine6" ref = {this.refLine6Ref}></input>
                  <input onClick = {() => this.onChange6(this.refLine6Ref.current.value)} type = "submit" value = "Submit"></input> 
                  <br></br>
                  <input name = "refLine7" id = "refLine7" ref = {this.refLine7Ref}></input>
                  <input onClick = {() => this.onChange7(this.refLine7Ref.current.value)} type = "submit" value = "Submit"></input> 
                  <br></br>
                  <input name = "refLine8" id = "refLine8" ref = {this.refLine8Ref}></input>
                  <input onClick = {() => this.onChange8(this.refLine8Ref.current.value)} type = "submit" value = "Submit"></input> 
            </div>
        );
    }

}

export default Tradeoff;
