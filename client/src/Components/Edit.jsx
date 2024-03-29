import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div id='d'>
        <div className='flex justify-between'>
        <div  onClick={onToggle} style={{ cursor: 'pointer', marginBottom: '5px' }} className='text-2xl pt-4 pb-4 font-bold pl-0 '>{title} </div>
      <div className='pt-6 pr-10'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentcolor" d="M204 64v104a12 12 0 0 1-24 0V93L72.49 200.49a12 12 0 0 1-17-17L163 76H88a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"/></svg>
      </div></div>
      <hr className='border-b-2 border-solid border-gray-500  mr-6'/>
      {isOpen && <div className='flex justify-center'>{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};



const Edit = () => {


  function content1() {
    return (
      <div>
        <h1>hiii</h1>
      </div>
    );
  };

  function content2() {
    return (
      <div>
       <h1>hii</h1>
      </div>
    );
  };

  function content3() {
    return (
      <div>
        <h1>hii</h1>
      </div>
    );
  }

  function content4() {
    return (
      <div>
        <h1>hii</h1>     
         </div>
    )
  }


  const accordionItems = [
    { title: 'Home', content: content1() },
    { title: 'Gallery', content: content2() },
    { title: 'Academic Excellence', content: content3() },
    { title: 'Placement', content: content4() },
  ];

  return(
    <div className='pt-6 pl-10'>
       <Accordion items={accordionItems} />
    </div>
  )
};

export default Edit;