const faqs = [
  {
    title: 'What is the best programming language?',
    text: 'JavaScript. With increasing demand for dynamic web applications, its nearly impossible to become a professional software developer without learning JavaScript.'
  },
  {
    title: 'Who invented JavaScript?',
    text: 'JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser.'
  },
  {
    title: 's it easy to learn JavaScript?',
    text: 'Its also one of the most intuitive programming languages to learn and use; often, its one of the first that newbie developers learn when they start to code. “JavaScript is very easy to implement,” writes one tech journalist for Web'
  },
  {
    title: 'Should I learn js or Python?',
    text: 'You can start with Javascript, which is used for front-end programming, if you are a newbie web programmer. Python, on the other hand, is the best choice if you want to learn a language primarily for back-end programming.'
  }
]

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({data}){
  console.log(data);
  return (
    <div>
      {data.map((elmnt, i) => (
        <AccordionItem title={elmnt.title} text={elmnt.text} num={i} />
      ))}
    </div>
  )
}

function AccordionItem({num, title, text}){
  return(
    <div className="item">
      <p className="number">{num}</p>
      <h2 className="text">{title}</h2>
      <p className="icon"> - </p>
      <div className="content-box">{text}</div>
    </div>
  )
}

export default App;