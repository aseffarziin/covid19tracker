import React from 'react';

const AddButton = ({ ...props}) => {
  return (
    <>
      <button type="button" className='plus-button' {...props}></button>

      <style jsx>{`
        .plus-button {
          border: 2px solid red;
          font-size: 22px;
          background-color: red;
          font-size: 16px;
          height: 60px;
          width: 60px;
          border-radius: 999px;
          display: fixed;
          position: fixed;
          right: 40px;
          bottom: 40px;
          transition: 0.3s;
        }
          .plus-button:after,
          .plus-button:before {
            content: "";
            display: block;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          
          .plus-button:before {
            height: 2em;
            width: 0.4em;
          }
        
          .plus-button:after {
            height: 0.4em;
            width: 2em;
          }

          .plus-button:focus {
            outline: none;
          }

          .plus-button:hover {
            box-shadow: 0px 0px 10px grey;
            transition: 0.3s;
          }
      `}</style>
    </>
  );
};

export default AddButton;
