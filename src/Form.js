import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 
const Basic = () => (
    <div className="Form">
        <div className="FormWrapper">
        <h2> ÚJ BEJEGYZÉS</h2>
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
                        <Field type="text" name="name" placeholder="... Kulka János" />
                        <ErrorMessage name="text" component="div" />
                    </div>

                    <div className='AddressInput'>
                        <label htmlFor="address">Lakcím</label>
                        <Field type="text" name="address" placeholder="... Tejút 1." />
                        <ErrorMessage name="address" component="div" />
                    </div>

                    <div className='NumberInput'>
                        <label htmlFor="number">Telefonszám</label>
                        <Field type="number" name="number" placeholder="... 0123456789"  />
                        <ErrorMessage name="number" component="div" />
                    </div>
                </div>

                <div class="button-container-2">
                    <span className='mas'>Hozzáadás</span>
                    <button type="submit" name="Hover" disabled={isSubmitting}>
                    Hozzáadás
                    </button>
                </div>
            </Form>
            )}
        </Formik>
        </div>
    </div>
  );
 
 export { Basic };