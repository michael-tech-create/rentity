"use client"
import { db } from "@/config/firebase.config";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required").min(2),
    phone: yup.string().required("Phone is required").min(11),
    email: yup.string().email("Enter a valid email"),
    apartment: yup.string().required("Apartment is required"),
    rentAmount: yup.number().required("Rent Amount is required"),
    dueDate: yup.date().required("Due date is required"),
    paymentStatus: yup.string().oneOf(["paid", "unpaid"]).required("Status is required"),
    notes: yup.string().required("Notes is required"),
});

export default function TenantForm() {
    const [open, setOpen] = useState(false);
    const {data: session} = useSession();
    // console.log(session);

    const handleClose = () =>{
        setOpen(false);
    };

    const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFormik({
        initialValues: {
            fullName: "",
            phone: "",
            email: "",
            apartment: "",
            rentAmount: "",
            dueDate: "",
            paymentStatus: "",
            notes: "",
        },
        onSubmit:  async(values, { resetForm }) => {
           await addDoc(collection(db, "tenants"),{
            user: session?.user?.id,
            fullName: values.fullName,
            phone: values.phone,
            email: values.email,
            apartment: values.apartment,
            rentAmount: values.rentAmount,
            dueDate: values.dueDate,
            paymentStatus: values.paymentStatus,
            notes: values.notes,
            timeCreated: new Date().getTime(),
           }).then(()=>{
            setOpen(true)
            resetForm();
           })
           .catch(e =>{
            console.error(e)
            setOpen(false);
            alert("Unable to submit")
           })
            
        },
        validationSchema: schema,
    });

    return (
        <main className="min-h-screen max-w-3xl mx-auto my-10 px-6 py-8 shadow-lg rounded-xl">
            <h1 className="text-2xl font-semibold mb-6 text-center">Add Tenant</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Full Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <TextField
                            fullWidth
                            label="Full Name"
                            placeholder="Enter full name"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="fullName"
                        />
                        {touched.fullName && errors.fullName && (
                            <span className="text-red-500 text-xs">{errors.fullName}</span>
                        )}
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="tel"
                            label="Phone Number"
                            placeholder="+234..."
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="phone"
                        />
                        {touched.phone && errors.phone && (
                            <span className="text-red-500 text-xs">{errors.phone}</span>
                        )}
                    </div>
                </div>

                {/* Email + Apartment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <TextField
                            fullWidth
                            label="Email"
                            placeholder="emmanuel@gmail.com"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            id="email"
                        />
                        {touched.email && errors.email && (
                            <span className="text-red-500 text-xs">{errors.email}</span>
                        )}
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            label="Apartment/Unit"
                            placeholder="1 bedroom"
                            type="text"
                            value={values.apartment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="apartment"
                        />
                        {touched.apartment && errors.apartment && (
                            <span className="text-red-500 text-xs">{errors.apartment}</span>
                        )}
                    </div>
                </div>

                {/* Rent Amount + Due Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <TextField
                            fullWidth
                            label="Rent Amount"
                            type="number"
                            placeholder="Enter Rent Amount"
                            value={values.rentAmount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="rentAmount"
                        />
                        {touched.rentAmount && errors.rentAmount && (
                            <span className="text-red-500 text-xs">{errors.rentAmount}</span>
                        )}
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="date"
                            label="Due Date"
                            InputLabelProps={{ shrink: true }}
                            value={values.dueDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="dueDate"
                        />
                        {touched.dueDate && errors.dueDate && (
                            <span className="text-red-500 text-xs">{errors.dueDate}</span>
                        )}
                    </div>
                </div>

                {/* Payment Status */}
                <FormControl fullWidth>
                    <InputLabel id="paymentStatus-label">Payment Status</InputLabel>
                    <Select
                        labelId="paymentStatus-label"
                        value={values.paymentStatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="paymentStatus"
                        name="paymentStatus"
                    >
                        <MenuItem value="paid">Paid</MenuItem>
                        <MenuItem value="unpaid">Unpaid</MenuItem>
                    </Select>
                    {touched.paymentStatus && errors.paymentStatus && (
                        <span className="text-red-500 text-xs">{errors.paymentStatus}</span>
                    )}
                </FormControl>

                {/* Notes */}
                <div>
                    <TextField
                        fullWidth
                        type="text"
                        label="Notes"
                        multiline
                        rows={3}
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your notes"
                        id="notes"
                    />
                    {touched.notes && errors.notes && (
                        <span className="text-red-500 text-xs">{errors.notes}</span>
                    )}
                </div>

                {/* Submit */}
                <div>
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Add Tenant
                    </Button>
                </div>
            </form>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <Typography>Tenant added successfully</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained" autoFocus>
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
    );
}
