import React, { useState } from 'react';
import model from './Model';
import fields from './ModelBlog';

function Form() {

    // const [model] = useContext(ModelBlog)
    // const [modelData, setModelData] = useState(model.fields);
    const [values, setValues] = useState({});


    console.log(model)


    function handleChange(event) {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(values);
    }

    return (
        <div className="form-container">

            <form onSubmit={handleSubmit}>
                {model && model.map((el) => {
                    return (
                        <h1 className='header'>{el.pageName}</h1>
                    )

                })}
                <div className='form-box'>
                    {fields && fields.map((el) => {
                        switch (el.type) {
                            case 'string':
                                return (
                                    <span key={el.fieldId} className="form-group">
                                        <span className='inside-box-text' >
                                            <label htmlFor={el.fieldId}>{el.fieldName}</label>
                                            <input
                                                type="text"
                                                id={el.fieldId}
                                                name={el.fieldId}
                                                value={values[el.fieldId] || ''}
                                                onChange={handleChange}
                                            />
                                        </span>
                                    </span>
                                );
                            case 'dropdown':
                                return (
                                    <span key={el.fieldId} className="form-group">
                                        <span className='inside-box-dropdown' >

                                            <label htmlFor={el.fieldId}>{el.fieldName}</label>
                                            <select
                                                id={el.fieldId}
                                                name={el.fieldId}
                                                value={values[el.fieldId] || ''}
                                                onChange={handleChange}
                                            >
                                                {el.selectableValues.map(value => (
                                                    <option key={value} value={value}>
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                        </span>
                                    </span>
                                );
                            case 'textarea':
                                return (
                                    <div key={el.fieldId} className="">
                                        <span className='inside-box-textarea' >
                                            <label htmlFor={el.fieldId}>{el.fieldName}</label>
                                            <textarea
                                                id={el.fieldId}
                                                name={el.fieldId}
                                                value={values[el.fieldId] || ''}
                                                onChange={handleChange}
                                                // style={{width: "100%"}}
                                            />
                                        </span>
                                    </div>
                                );
                            case 'file':
                                return (
                                    <div key={el.fieldId} className="">
                                        <span className='inside-box-file' >
                                        
                                            <label htmlFor={el.fieldId}>{el.fieldName}</label>
                                            <input
                                                type="file"
                                                id={el.fieldId}
                                                name={el.fieldId}
                                                onChange={handleChange}
                                            />
                                        </span>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
                <button type="submit">Back</button>
                <button type="submit">Continue</button>
            </form>
        </div>

    );

}


export default Form;