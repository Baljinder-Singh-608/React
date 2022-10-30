import React from 'react';

const ButtonComponent = ({handler, text, type, cancel, buttonClass}) => {
    return (
        <React.Fragment>
            {
                !cancel ?<button type={type}
                className={`inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${buttonClass ?  buttonClass :'ml-auto'}`} onClick={handler}
            >
                {text}
            </button>:<button type={type}
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handler}
            >
                {text}
            </button>
            }
            
            
        </React.Fragment>
    )
}

export default ButtonComponent;