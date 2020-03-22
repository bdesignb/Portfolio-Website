import React from 'react';


export default function Title({ title, subtitle }) {
    return (
        <div className="row section-title">
        <div className="col-md-12 text-center">
        
            <h4>{subtitle}</h4>
            <h2>{title}</h2>            
       
        </div>
        </div>
    )
}
