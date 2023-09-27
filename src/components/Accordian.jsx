import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon(props) {
    console.log("from props",props)
    const {title , description} = props.value
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div  className='w-[70%] flex flex-col items-center justify-center  left-32 bg-gray-800 '>
      <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
        <AccordionHeader  className=' text-left p-5 text-white ' onClick={() => handleOpen(1)}>{title}</AccordionHeader>
        <AccordionBody className = ' flex-wrap text-white p-5'>
          {description}
        </AccordionBody>
      </Accordion>
    </div>
    </>
  );
}