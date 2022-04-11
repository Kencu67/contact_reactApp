import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 
const Basic = () => (
    <div className="Form">
        <div className="FormWrapper">
        <h1> ÚJ BEJEGYZÉS</h1>
        <Formik
            initialValues={{ name: '', address: '', number: '' }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
            }}
        >
            {({ isSubmitting }) => (
            <Form className="FormContainer">
                <div className="Wrapper">
                    <div className="NameInput">
                        <label htmlFor="name">Név</label>
                        <Field type="text" name="name" placeholder="Kulka János" />
                        <ErrorMessage name="text" component="div" />
                    </div>

                    <div className='AddressInput'>
                        <label htmlFor="address">Lakcím</label>
                        <Field type="text" name="address" placeholder="Tejút 1." />
                        <ErrorMessage name="address" component="div" />
                    </div>

                    <div className='NumberInput'>
                        <label htmlFor="number">Telefonszám</label>
                        <Field type="number" name="number" placeholder="0123456789"  />
                        <ErrorMessage name="number" component="div" />
                    </div>
                </div>
                

                <button className="FormButton" type="submit" disabled={isSubmitting}>
                +++ ÚJ ISMERŐS +++
                </button>
            </Form>
            )}
        </Formik>
        </div>
    </div>
  );
 
 export { Basic };