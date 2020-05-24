function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Application extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleOnClick",











    event => {
      const colorCode =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";

      const rando = Math.floor(Math.random() * this.state.allAuthor.length);
      this.setState({
        author: this.state.allAuthor[rando].author,
        quote: this.state.allQuote[rando].text,
        colorChange: colorCode });


      document.body.style.backgroundColor = colorCode;
    });this.state = { allAuthor: "", allQuote: "", quote: "", author: "", hashtag: "#bigbrain", colorChange: "" };}

  componentDidMount() {
    document.body.style.backgroundColor = "SlateGrey";
    fetch("https://type.fit/api/quotes").
    then(response => response.json()).
    then(data => {
      this.setState({
        allAuthor: data,
        allQuote: data,
        quote: data[Math.floor(Math.random() * data.length)].text,
        author: data[Math.floor(Math.random() * data.length)].author });

    });
  }

  render() {
    return (
      React.createElement("div", { className: "container-fluid" },
      React.createElement("h1", { id: "mine", className: "text-center" }, "Inspirational Quote"),


      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "center-text col-xs-4 col-xs-offset-4", id: "quote-box" },
      React.createElement("div", { className: "row" },
      React.createElement("div", {
        className: "center-text",
        id: "text",
        style: { color: this.state.colorChange } },

      React.createElement("p", null, `"${this.state.quote}"`))),



      React.createElement("div", { className: "row" },
      React.createElement("div", {
        className: "text-right",
        id: "author",
        style: { color: this.state.colorChange } },

      React.createElement("p", null, `-${this.state.author}`), " ")),



      React.createElement("div", { className: "row" },
      React.createElement("a", {
        className: "fa fa-twitter fa-2x",
        id: "tweet-quote",
        target: "_blank",
        href: `https://twitter.com/intent/tweet?hashtags=BigBrain&text=${this.state.quote} - ${this.state.author}` },

      " "),
      " "))),




      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-xs-9" },
      React.createElement("button", {
        className: "btn btn-default text-center",
        id: "new-quote",
        onClick: this.handleOnClick.bind(this),
        style: { color: this.state.colorChange } }, "Quote Me!")))));







  }}


React.render(React.createElement(Application, null), document.getElementById("root"));