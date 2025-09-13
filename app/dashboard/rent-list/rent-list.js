"use client";
import { db } from "@/config/firebase.config";
import { TimeStampToDate } from "@/utils/timestamp-date";
import { Button, TextField } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";

export default function RentList() {
  const [tenants, setTenants] = React.useState([]);
  const [filteredTenants, setFilteredTenants] = React.useState([]);
  const { data: session } = useSession();

  React.useEffect(() => {
    const fetchTenants = async () => {
      try {
        const q = query(
          collection(db, "tenants"),
          where("user", "==", session?.user?.id)
        );
        const snapShot = await getDocs(q);

        const compileTenant = snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setTenants(compileTenant);
        setFilteredTenants(compileTenant);
      } catch (error) {
        console.error("Error fetching tenants:", error);
      }
    };

    if (session) fetchTenants();
  }, [session]);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: { search: "" },
    validationSchema: Yup.object({
      search: Yup.string()
        .max(30, "Search query too long")
        .matches(/^[a-zA-Z\s]*$/, "Only letters and spaces allowed")
        .nullable(),
    }),
    onSubmit: (values) => {
      const searchQuery = values.search.trim();
      if (searchQuery === "") {
        setFilteredTenants(tenants);
      } else {
        const filtered = tenants.filter((t) => {
          const fullName = t.data.fullName || "";
          return fullName.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredTenants(filtered);
      }
    },
  });

  return (
    <main className="min-h-screen mx-auto py-8 bg-gray-50 shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Rent List</h1>
      <p className="text-center text-gray-500 mb-6">Collection of All Rents Paid</p>

      {/* Search Form */}
      <div className="max-w-md mx-auto mb-8 px-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="Search"
            name="search"
            value={values.search}
            onChange={handleChange}
          />
          {touched.search && errors.search && (
            <span className="text-red-500 text-xs">{errors.search}</span>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Search
          </Button>
        </form>
      </div>

      {/* Tenant List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 px-10 gap-6">
        {filteredTenants.map((tenant) => (
          <div
            key={tenant.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <Image
              src="/building.webp"
              alt="Tenant Image"
              width={300}
              height={300}
              className="rounded-t-xl"
            />
            <div className="p-4">
              <span className="block font-semibold text-gray-800">
                {tenant.data.fullName}
              </span>
              <span className="block text-sm text-gray-500">
                {tenant.data.phone}
              </span>
              <span className="block text-sm text-gray-500">
                {tenant.data.email}
              </span>
              <span className="block font-medium text-gray-800">
                {tenant.data.apartment}
              </span>
              <span className="block font-semibold">
                {tenant.data.rentAmount}
              </span>
              <span className="block text-sm font-semibold text-gray-500">
                {tenant.data.dueDate}
              </span>
              <span className="block text-sm font-semibold text-green-500">
                {tenant.data.paymentStatus}
              </span>
              <span className="block text-sm text-gray-800">
                {TimeStampToDate(tenant.data.timeCreated)}
              </span>
              <span className="block text-sm text-gray-600">
                {tenant.data.notes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
