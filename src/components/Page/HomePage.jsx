import React from 'react';

export default class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.countHandle = this.countHandle.bind(this);
        this.state ={
            a:{},
            count:{}
        }
    }

    componentWillMount(){
        this.setState(
            {
                count:this.props.myCount,
                a:"Hello"
            }
        )
    }

    countHandle(e){
        //e.preventDefault();
        this.setState({
            count:this.state.count+1,
            a:"Hello" + this.state.count
        })
    }

    render() {

        return (
            <div>
                <h1>
                    <button onClick={this.countHandle}>Count </button> {this.state.a}
               </h1>
                <p>
                    Content itself is what the end-user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered. The medium, however, provides little to no value to the end-user without the information and experiences that make up the content. Communication theory philosopher Marshall McLuhan famously coined the phrase, "The medium is the message."[3] In the case of content, the channel through which information is delivered, the "medium", affects how the end user perceives content, the "message".

                    The author, producer, or publisher of an original source of information or experiences may or may not be directly responsible for the entire value that they attain as content in a specific context. For example, part of an original article (such as a headline from a news story) may be rendered on another web page displaying the results of a user's search engine query grouped with headlines from other news publications and related advertisements. The value that the original headline has in this group of query results from the search engine as a medium may be very different from the value that it had as message content in its original article.               
                </p>
            </div>
        )
    }
}
