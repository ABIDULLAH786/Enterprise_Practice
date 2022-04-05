import {useFormik} from "formik";
import { useEffect, useRef } from "react";
export const UseFormik = ()=>{
    const countRender = useRef(0)
    useEffect(()=>{
        countRender.current = countRender.current+1;
    })
    const formik = useFormik({
        initialValues:{
            fullName:"",
            email:"",
            password:""
        },
        validate: values =>{
            const errors = {}
            if(!values.fullName)
                errors.fullName="Bhai Apna name to likho..."
            return errors
                    }
    });
    
    return(
        <>
            <h1>useFormik Example</h1>
            <div>
                <form className="bg-light col-4 offset-4 py-3">
                    {/* FullName */}
                    <label htmlFor="fullName"> Full Name</label>
                    <input name="fullName"
                        id="fullName"
                        type={"text"}
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.fullName && formik.errors.fullName}                    
                    {/* Email */}
                    <div>
                        <label htmlFor="email"> Email</label>
                        <input name="email"
                            id="email"
                            type={"email"}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    {/* Password */}
                    <label htmlFor="password"> Password</label>
                    <input name="password"
                        id="password"
                        type={"password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </form>
                <div>Total <i className="display-6 mt-5 text-danger">{countRender.current}</i> time renderd</div>
            </div>
        </>
    )
} 